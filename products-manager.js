#!/usr/bin/env node

// Simple Product Manager Script
// Usage: node products-manager.js [add|edit|delete|list]

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const PRODUCTS_FILE = './src/lib/mock-data.ts';

// Read current products from TypeScript file
function readProducts() {
  const content = fs.readFileSync(PRODUCTS_FILE, 'utf8');
  const match = content.match(/export const products: Product\[\] = (\[[\s\S]*?\]);/);
  if (match) {
    // This is a simplified approach - in reality you'd want proper TS parsing
    try {
      return eval(match[1]);
    } catch (e) {
      console.error('Error parsing products:', e.message);
      return [];
    }
  }
  return [];
}

// Write products back to TypeScript file
function writeProducts(products) {
  const content = fs.readFileSync(PRODUCTS_FILE, 'utf8');
  const productsString = JSON.stringify(products, null, 2)
    .replace(/"([^"]+)":/g, '$1:') // Remove quotes from keys
    .replace(/"/g, "'"); // Use single quotes
  
  const newContent = content.replace(
    /export const products: Product\[\] = \[[\s\S]*?\];/,
    `export const products: Product[] = ${productsString};`
  );
  
  fs.writeFileSync(PRODUCTS_FILE, newContent);
  console.log('✅ Products updated successfully!');
}

// Interactive prompts
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function addProduct() {
  console.log('\n📦 Adding new product...\n');
  
  const id = await prompt('Product ID (slug): ');
  const name = await prompt('Product Name: ');
  const brand = await prompt('Brand: ');
  const category = await prompt('Category (dslr/mirrorless/compact/lenses): ');
  const price = parseFloat(await prompt('Price: $'));
  const condition = await prompt('Condition (Excellent/Very Good/Good): ');
  const description = await prompt('Short Description: ');
  const imageUrl = await prompt('Image URL: ');
  
  const newProduct = {
    id,
    name,
    brand,
    category,
    price,
    images: [imageUrl],
    imageHints: ['camera equipment'],
    condition,
    description,
    longDescription: description,
    specs: [
      { key: 'Condition', value: condition },
      { key: 'Brand', value: brand }
    ],
    warranty: '6-Month ReFocus Warranty',
    rating: 4.5,
    reviewCount: 0,
    reviews: []
  };
  
  const products = readProducts();
  products.push(newProduct);
  writeProducts(products);
  
  console.log(`\n✅ Added "${name}" successfully!`);
}

async function listProducts() {
  const products = readProducts();
  console.log('\n📋 Current Products:\n');
  products.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} (${product.id}) - $${product.price}`);
  });
  console.log(`\nTotal: ${products.length} products`);
}

async function deleteProduct() {
  const products = readProducts();
  await listProducts();
  
  const productId = await prompt('\nEnter Product ID to delete: ');
  const index = products.findIndex(p => p.id === productId);
  
  if (index === -1) {
    console.log('❌ Product not found!');
    return;
  }
  
  const product = products[index];
  const confirm = await prompt(`Delete "${product.name}"? (yes/no): `);
  
  if (confirm.toLowerCase() === 'yes') {
    products.splice(index, 1);
    writeProducts(products);
    console.log(`✅ Deleted "${product.name}" successfully!`);
  } else {
    console.log('❌ Deletion cancelled.');
  }
}

// Main menu
async function main() {
  console.log('🛍️  ReFocus Product Manager');
  console.log('============================');
  console.log('1. Add Product');
  console.log('2. List Products');
  console.log('3. Delete Product');
  console.log('4. Exit');
  
  const choice = await prompt('\nChoose an option (1-4): ');
  
  switch (choice) {
    case '1':
      await addProduct();
      break;
    case '2':
      await listProducts();
      break;
    case '3':
      await deleteProduct();
      break;
    case '4':
      console.log('👋 Goodbye!');
      rl.close();
      return;
    default:
      console.log('❌ Invalid choice');
  }
  
  const again = await prompt('\nDo another action? (yes/no): ');
  if (again.toLowerCase() === 'yes') {
    await main();
  } else {
    rl.close();
  }
}

if (require.main === module) {
  main().catch(console.error);
}