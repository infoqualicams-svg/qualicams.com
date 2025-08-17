import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../lib/firebase';

async function testFirebaseStorage() {
  console.log('🧪 Testing Firebase Storage connection...');
  
  try {
    // Create a test file
    const testContent = new Blob(['Hello Firebase Storage!'], { type: 'text/plain' });
    const testFile = new File([testContent], 'test.txt', { type: 'text/plain' });
    
    // Try to upload
    const testRef = ref(storage, `test/test_${Date.now()}.txt`);
    console.log('📤 Uploading test file...');
    
    const snapshot = await uploadBytes(testRef, testFile);
    console.log('✅ Upload successful!');
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('🔗 Download URL:', downloadURL);
    
    console.log('🎉 Firebase Storage is working correctly!');
    console.log('💡 You can now use image uploads in the admin panel.');
    
  } catch (error) {
    console.error('❌ Firebase Storage test failed:');
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      code: (error as any)?.code,
    });
    
    if ((error as any)?.code === 'storage/unauthorized') {
      console.log('\n🔧 Fix: Set up Firebase Storage Rules');
      console.log('1. Go to: https://console.firebase.google.com/project/refocus-camshop');
      console.log('2. Navigate to: Storage → Rules');
      console.log('3. Replace rules with the ones from IMAGE_UPLOAD_SETUP.md');
      console.log('4. Click "Publish"');
    }
    
    if ((error as any)?.code === 'storage/invalid-project-id') {
      console.log('\n🔧 Fix: Check Firebase Configuration');
      console.log('1. Verify project ID in src/lib/firebase.ts');
      console.log('2. Ensure Storage is enabled in Firebase Console');
    }
  }
}

testFirebaseStorage();