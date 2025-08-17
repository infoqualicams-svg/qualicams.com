import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './firebase';

// Upload image to Firebase Storage
export async function uploadProductImage(file: File, productId: string): Promise<string> {
  try {
    // Create a unique filename
    const timestamp = Date.now();
    const fileName = `${productId}_${timestamp}_${file.name}`;
    const imageRef = ref(storage, `products/${fileName}`);
    
    console.log('Uploading image:', fileName, 'Size:', file.size, 'Type:', file.type);
    
    // Upload the file
    const snapshot = await uploadBytes(imageRef, file);
    
    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log('Upload successful:', downloadURL);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      code: (error as any)?.code,
    });
    throw new Error(`Failed to upload image: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Upload multiple images
export async function uploadMultipleImages(files: FileList, productId: string): Promise<string[]> {
  console.log(`Starting upload of ${files.length} images for product: ${productId}`);
  
  const uploadPromises = Array.from(files).map((file, index) => {
    console.log(`Preparing upload ${index + 1}/${files.length}:`, file.name);
    return uploadProductImage(file, productId);
  });
  
  try {
    const urls = await Promise.all(uploadPromises);
    console.log('All uploads successful:', urls);
    return urls;
  } catch (error) {
    console.error('Error uploading multiple images:', error);
    throw new Error(`Failed to upload one or more images: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Delete image from Firebase Storage
export async function deleteProductImage(imageUrl: string): Promise<void> {
  try {
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
  } catch (error) {
    console.error('Error deleting image:', error);
    // Don't throw error for delete failures as the URL might already be invalid
  }
}

// Helper function to validate image file
export function validateImageFile(file: File): boolean {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  const maxSize = 5 * 1024 * 1024; // 5MB
  
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Only JPEG, PNG, and WebP images are allowed');
  }
  
  if (file.size > maxSize) {
    throw new Error('Image size must be less than 5MB');
  }
  
  return true;
}

// Helper to extract filename from Firebase Storage URL
export function getFileNameFromUrl(url: string): string {
  try {
    const urlParts = url.split('/');
    const fileName = urlParts[urlParts.length - 1];
    return fileName.split('?')[0]; // Remove query parameters
  } catch {
    return 'unknown';
  }
}