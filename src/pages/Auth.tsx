
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent, isLogin: boolean) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle authentication here
      console.log(isLogin ? 'Login submitted' : 'Signup submitted');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to EvoLook</h1>
            <p className="text-gray-600">Sign in to your account or create a new one</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Account Access</CardTitle>
              <CardDescription className="text-center">
                Choose an option below to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-4 mt-6">
                  <form onSubmit={(e) => handleSubmit(e, true)}>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="login-email">Email</Label>
                        <Input 
                          id="login-email" 
                          type="email" 
                          placeholder="Enter your email"
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="login-password">Password</Label>
                        <Input 
                          id="login-password" 
                          type="password" 
                          placeholder="Enter your password"
                          required 
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="remember" className="rounded" />
                          <Label htmlFor="remember" className="text-sm">Remember me</Label>
                        </div>
                        <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                          Forgot password?
                        </Link>
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Signing in...' : 'Sign In'}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-4 mt-6">
                  <form onSubmit={(e) => handleSubmit(e, false)}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="signup-firstname">First Name</Label>
                          <Input 
                            id="signup-firstname" 
                            type="text" 
                            placeholder="First name"
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="signup-lastname">Last Name</Label>
                          <Input 
                            id="signup-lastname" 
                            type="text" 
                            placeholder="Last name"
                            required 
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="signup-email">Email</Label>
                        <Input 
                          id="signup-email" 
                          type="email" 
                          placeholder="Enter your email"
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="signup-password">Password</Label>
                        <Input 
                          id="signup-password" 
                          type="password" 
                          placeholder="Create a password"
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="signup-confirm">Confirm Password</Label>
                        <Input 
                          id="signup-confirm" 
                          type="password" 
                          placeholder="Confirm your password"
                          required 
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="terms" className="rounded" required />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{' '}
                          <Link to="/terms" className="text-blue-600 hover:text-blue-700">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link to="/privacy" className="text-blue-600 hover:text-blue-700">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Creating account...' : 'Create Account'}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Need help?{' '}
              <Link to="/contact" className="text-blue-600 hover:text-blue-700">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;
