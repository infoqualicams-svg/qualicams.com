import { notFound } from 'next/navigation';
import { getProductById, getAllProducts } from '@/lib/firebase-products';
import ClientProductPage from './client-page';

// Generate static params for all products
export async function generateStaticParams() {
  try {
    const products = await getAllProducts();
    return products.map((product) => ({
      id: product.id,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return empty array to allow build to continue
    return [];
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = await getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return <ClientProductPage product={product} />;
}