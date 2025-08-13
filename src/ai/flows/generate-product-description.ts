'use server';

/**
 * @fileOverview Generates product descriptions for refurbished cameras using AI.
 *
 * - generateProductDescription - A function that generates a product description based on camera specs and condition.
 * - GenerateProductDescriptionInput - The input type for the generateProductDescription function.
 * - GenerateProductDescriptionOutput - The return type for the generateProductDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductDescriptionInputSchema = z.object({
  cameraMake: z.string().describe('The make of the camera (e.g., Canon, Nikon, Sony).'),
  cameraModel: z.string().describe('The model of the camera (e.g., EOS 5D Mark IV, D850, Alpha 7 III).'),
  cameraCondition: z.string().describe('The condition of the camera (e.g., Excellent, Good, Fair).'),
  cameraSpecs: z.string().describe('The specifications of the camera (e.g., sensor size, megapixels, lens mount).'),
  additionalDetails: z.string().optional().describe('Any additional details about the camera.'),
});
export type GenerateProductDescriptionInput = z.infer<typeof GenerateProductDescriptionInputSchema>;

const GenerateProductDescriptionOutputSchema = z.object({
  productDescription: z.string().describe('The generated product description for the camera.'),
});
export type GenerateProductDescriptionOutput = z.infer<typeof GenerateProductDescriptionOutputSchema>;

export async function generateProductDescription(
  input: GenerateProductDescriptionInput
): Promise<GenerateProductDescriptionOutput> {
  return generateProductDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProductDescriptionPrompt',
  input: {schema: GenerateProductDescriptionInputSchema},
  output: {schema: GenerateProductDescriptionOutputSchema},
  prompt: `You are an expert in writing compelling product descriptions for refurbished cameras. Use the provided information to create an engaging and informative description.

Camera Make: {{{cameraMake}}}
Camera Model: {{{cameraModel}}}
Camera Condition: {{{cameraCondition}}}
Camera Specs: {{{cameraSpecs}}}
Additional Details: {{{additionalDetails}}}

Write a product description that highlights the camera's key features, its condition, and why it's a great value for the customer. Focus on benefits rather than just listing facts. Keep it concise and engaging. Make sure to mention the condition and what that means for the buyer.
`,
});

const generateProductDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProductDescriptionFlow',
    inputSchema: GenerateProductDescriptionInputSchema,
    outputSchema: GenerateProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
