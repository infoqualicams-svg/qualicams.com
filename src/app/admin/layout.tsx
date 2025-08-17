import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Panel - QualiCams',
  description: 'Product management for QualiCams',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}