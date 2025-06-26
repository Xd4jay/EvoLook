
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Wishlist = () => {
  const { items, clearWishlist } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <Heart className="mx-auto h-24 w-24 text-gray-400 mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h1>
            <p className="text-gray-600 mb-8">
              Save items you love to your wishlist. Review them anytime and easily move them to your cart.
            </p>
            <Button size="lg" asChild>
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
                <p className="text-gray-600 mt-1">{items.length} items saved</p>
              </div>
              <Button variant="ghost" onClick={clearWishlist} className="text-red-600 hover:text-red-700">
                Clear Wishlist
              </Button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" asChild>
            <Link to="/products">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
