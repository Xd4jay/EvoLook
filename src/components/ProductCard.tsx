
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-sm ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
            )}
            {product.isBestseller && (
              <Badge className="bg-orange-500 hover:bg-orange-600">Bestseller</Badge>
            )}
            {product.originalPrice && (
              <Badge variant="destructive">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
              isWishlisted 
                ? 'bg-red-100 text-red-500 hover:bg-red-200' 
                : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
            }`}
            onClick={handleWishlistToggle}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-black text-white hover:bg-gray-800 transition-colors duration-200"
              size="sm"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between mb-2">
            {renderStars(product.rating)}
            <span className="text-sm text-gray-500">({product.reviewCount})</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {product.colors && product.colors.length > 0 && (
            <div className="mt-3 flex items-center space-x-2">
              <span className="text-xs text-gray-500">Colors:</span>
              <div className="flex space-x-1">
                {product.colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{
                      backgroundColor: color.toLowerCase().includes('white') ? '#fff' :
                                    color.toLowerCase().includes('black') ? '#000' :
                                    color.toLowerCase().includes('blue') ? '#3b82f6' :
                                    color.toLowerCase().includes('red') ? '#ef4444' :
                                    color.toLowerCase().includes('gray') ? '#6b7280' : '#8b5cf6'
                    }}
                  />
                ))}
                {product.colors.length > 3 && (
                  <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
