import { DescriptionGeneratorForm } from '@/components/description-generator-form';
import { Sparkles } from 'lucide-react';

export default function GenerateDescriptionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Sparkles className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-4xl md:text-5xl font-bold font-headline">AI Product Description Generator</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Save time and create compelling listings. Just enter your camera's details below, and our AI will craft a unique and engaging product description for you.
          </p>
        </div>
        <DescriptionGeneratorForm />
      </div>
    </div>
  );
}
