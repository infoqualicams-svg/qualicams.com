'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generateProductDescription } from '@/ai/flows/generate-product-description';
import { useToast } from "@/hooks/use-toast";
import { Copy, Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  cameraMake: z.string().min(2, { message: 'Camera make must be at least 2 characters.' }),
  cameraModel: z.string().min(1, { message: 'Camera model is required.' }),
  cameraCondition: z.string().min(3, { message: 'Please describe the condition.' }),
  cameraSpecs: z.string().min(10, { message: 'Please provide some key specifications.' }),
  additionalDetails: z.string().optional(),
});

export function DescriptionGeneratorForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cameraMake: '',
      cameraModel: '',
      cameraCondition: 'Excellent',
      cameraSpecs: '30.4MP Full-Frame Sensor, 4K Video, Dual Pixel AF',
      additionalDetails: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setDescription('');
    try {
      const result = await generateProductDescription(values);
      setDescription(result.productDescription);
      toast({
        title: "Description Generated!",
        description: "Your new product description is ready.",
      });
    } catch (error) {
      console.error('Failed to generate description:', error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem generating the description. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleCopy = () => {
    navigator.clipboard.writeText(description);
    toast({
      title: "Copied to clipboard!",
    });
  };


  return (
    <>
      <Card className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Camera Details</CardTitle>
              <CardDescription>Fill in the form to generate a description.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="cameraMake"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Camera Make</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Canon" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cameraModel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Camera Model</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., EOS 5D Mark IV" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="cameraCondition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Condition</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Excellent, Good, Fair" {...field} />
                    </FormControl>
                     <FormDescription>
                       Describe the cosmetic and functional state of the camera.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cameraSpecs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Specifications</FormLabel>
                    <FormControl>
                      <Textarea placeholder="List key features like sensor size, megapixels, video quality, etc." {...field} rows={4}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="additionalDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Details (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Anything else to highlight? e.g., low shutter count, included accessories." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="ml-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                   <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Description
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      
      {description && (
        <Card className="mt-8">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Generated Description</CardTitle>
                    <CardDescription>Review and copy the AI-generated text.</CardDescription>
                </div>
                <Button variant="outline" size="icon" onClick={handleCopy}>
                    <Copy className="h-4 w-4"/>
                    <span className="sr-only">Copy</span>
                </Button>
            </CardHeader>
            <CardContent>
                <div className="p-4 bg-muted/50 rounded-md whitespace-pre-wrap font-mono text-sm">
                    {description}
                </div>
            </CardContent>
        </Card>
      )}
    </>
  );
}
