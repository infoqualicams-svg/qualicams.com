import { batchImportProducts } from '../lib/firebase-products';
import { products } from '../lib/mock-data';

async function migrateData() {
  console.log('🚀 Starting data migration to Firebase...');
  console.log(`📦 Found ${products.length} products to migrate`);
  
  try {
    const success = await batchImportProducts(products);
    
    if (success) {
      console.log('✅ Data migration completed successfully!');
      console.log(`📊 Migrated ${products.length} products to Firebase Firestore`);
    } else {
      console.error('❌ Data migration failed');
    }
  } catch (error) {
    console.error('❌ Migration error:', error);
  }
}

migrateData();