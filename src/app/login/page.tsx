
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { user, signIn } = useAuth();
  const router = useRouter();
  
  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push('/account');
    }
  }, [user, router]);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await signIn(values.email, values.password);
      // Redirect to account page
      router.push('/account');
    } catch (error) {
      // Error handling is done in the AuthContext
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
    <Header/>
    <main className="flex-grow">
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-16rem)] py-12">
              <Card className="w-full max-w-md rounded-xl">
        <CardHeader className="text-center">
          <CardTitle>Welcome Back!</CardTitle>
          <CardDescription>Sign in to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                              <Button type="submit" className="w-full rounded-xl" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </Form>
          
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => {
                const email = form.getValues('email');
                if (email) {
                  // We'll implement this functionality
                  alert('Password reset functionality coming soon!');
                } else {
                  alert('Please enter your email address first.');
                }
              }}
              className="text-sm text-gray-600 hover:text-black hover:underline"
            >
              Forgot your password?
            </button>
          </div>
          
           <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Don't have an account?{' '}
              <Link href="/signup" className="text-black hover:underline font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
    </main>
    <Footer/>
    </>
  );
}

    