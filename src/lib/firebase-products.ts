import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  where, 
  writeBatch 
} from 'firebase/firestore';
import { db } from './firebase';
import { Product } from './types';

const PRODUCTS_COLLECTION = 'products';

// Get all products
export async function getAllProducts(): Promise<Product[]> {
  try {
    const querySnapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
    
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Product[];
    
    // Sort by name on client side
    return products.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Get single product by ID
export async function getProductById(id: string): Promise<Product | null> {
  try {
    const docRef = doc(db, PRODUCTS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Product;
    }
    return null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// Get products by category
export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const q = query(
      collection(db, PRODUCTS_COLLECTION), 
      where('category', '==', category)
    );
    const querySnapshot = await getDocs(q);
    
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Product[];
    
    // Sort by name on client side
    return products.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
}

// Get products by brand
export async function getProductsByBrand(brand: string): Promise<Product[]> {
  try {
    const q = query(
      collection(db, PRODUCTS_COLLECTION), 
      where('brand', '==', brand)
    );
    const querySnapshot = await getDocs(q);
    
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Product[];
    
    // Sort by name on client side
    return products.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Error fetching products by brand:', error);
    return [];
  }
}

// Add new product
export async function addProduct(product: Omit<Product, 'id'>): Promise<string | null> {
  try {
    const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), {
      ...product,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding product:', error);
    return null;
  }
}

// Update existing product
export async function updateProduct(id: string, product: Partial<Product>): Promise<boolean> {
  try {
    const docRef = doc(db, PRODUCTS_COLLECTION, id);
    await updateDoc(docRef, {
      ...product,
      updatedAt: new Date()
    });
    return true;
  } catch (error) {
    console.error('Error updating product:', error);
    return false;
  }
}

// Delete product
export async function deleteProduct(id: string): Promise<boolean> {
  try {
    await deleteDoc(doc(db, PRODUCTS_COLLECTION, id));
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    return false;
  }
}

// Batch import products (for initial data migration)
export async function batchImportProducts(products: Omit<Product, 'id'>[]): Promise<boolean> {
  try {
    const batch = writeBatch(db);
    const collectionRef = collection(db, PRODUCTS_COLLECTION);
    
    products.forEach((product) => {
      const docRef = doc(collectionRef);
      batch.set(docRef, {
        ...product,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
    
    await batch.commit();
    return true;
  } catch (error) {
    console.error('Error batch importing products:', error);
    return false;
  }
}