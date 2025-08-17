import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/firebase-products';
import ClientProductPage from './client-page';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = await getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return <ClientProductPage product={product} />;
}