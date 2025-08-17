import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';

const PRODUCTS_COLLECTION = 'products';

async function clearFirebaseData() {
  console.log('🧹 Clearing Firebase products collection...');
  
  try {
    const querySnapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
    
    console.log(`📦 Found ${querySnapshot.docs.length} products to delete`);
    
    const deletePromises = querySnapshot.docs.map(productDoc => 
      deleteDoc(doc(db, PRODUCTS_COLLECTION, productDoc.id))
    );
    
    await Promise.all(deletePromises);
    
    console.log('✅ All products deleted from Firebase!');
    console.log('💡 Now run: npm run migrate:firebase');
  } catch (error) {
    console.error('❌ Error clearing Firebase:', error);
  }
}

clearFirebaseData();