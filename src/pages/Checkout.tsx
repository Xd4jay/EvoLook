
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CreditCard, MapPin, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <ShoppingCart className="mx-auto h-24 w-24 text-gray-400 mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some items to your cart before checkout.</p>
            <Button size="lg" asChild>
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-8">Thank you for your purchase. Your order has been placed successfully.</p>
            <div className="space-y-4">
              <Button size="lg" asChild className="w-full">
                <Link to="/products">Continue Shopping</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Shipping Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" required />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required />
                  </div>
                  <div>
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input id="pincode" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              {/* Payment Information */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <CreditCard className="w-5 h-5 text-gray-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Payment Information</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" required />
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Place Order
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity}
                      {item.selectedSize && ` • Size: ${item.selectedSize}`}
                      {item.selectedColor && ` • Color: ${item.selectedColor}`}
                    </p>
                  </div>
                  <span className="font-medium text-gray-900">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (GST 18%)</span>
                <span className="text-gray-900">{formatPrice(tax)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
