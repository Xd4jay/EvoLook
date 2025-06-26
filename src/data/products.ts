
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'clothing' | 'sneakers' | 'watches';
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  sizes?: string[];
  colors?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  // Men's Clothing
  {
    id: '1',
    name: 'Premium Cotton Polo Shirt',
    price: 1299,
    originalPrice: 1599,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop',
    description: 'Premium quality cotton polo shirt with modern fit. Perfect for casual and semi-formal occasions.',
    rating: 4.5,
    reviewCount: 124,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'White', 'Black', 'Gray'],
    isBestseller: true
  },
  {
    id: '2',
    name: 'Slim Fit Denim Jeans',
    price: 2199,
    originalPrice: 2799,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
    description: 'Classic slim fit denim jeans made from premium denim fabric. Comfortable and stylish.',
    rating: 4.3,
    reviewCount: 89,
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Light Blue', 'Black'],
    isNew: true
  },
  {
    id: '3',
    name: 'Casual Button Down Shirt',
    price: 1599,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
    description: 'Versatile button-down shirt perfect for office or weekend wear. Wrinkle-resistant fabric.',
    rating: 4.4,
    reviewCount: 156,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Light Blue', 'Pink', 'Gray']
  },
  
  // Sneakers
  {
    id: '4',
    name: 'Urban Street Runner',
    price: 4999,
    originalPrice: 6499,
    category: 'sneakers',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
    description: 'High-performance street running shoes with advanced cushioning and breathable mesh upper.',
    rating: 4.6,
    reviewCount: 203,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Black/White', 'Navy/Gray', 'All Black'],
    isBestseller: true,
    isNew: true
  },
  {
    id: '5',
    name: 'Classic Leather Sneakers',
    price: 3799,
    category: 'sneakers',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&h=600&fit=crop',
    description: 'Timeless leather sneakers with premium craftsmanship. Perfect for smart-casual looks.',
    rating: 4.7,
    reviewCount: 167,
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['White', 'Black', 'Brown']
  },
  {
    id: '6',
    name: 'Athletic Performance Trainers',
    price: 5599,
    category: 'sneakers',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=600&fit=crop',
    description: 'Professional-grade athletic trainers designed for maximum performance and comfort.',
    rating: 4.8,
    reviewCount: 298,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Red/Black', 'Blue/White', 'Gray/Orange']
  },
  
  // Watches
  {
    id: '7',
    name: 'Smart Fitness Watch Pro',
    price: 12999,
    originalPrice: 15999,
    category: 'watches',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=600&fit=crop',
    description: 'Advanced smartwatch with health monitoring, GPS, and 7-day battery life. Water-resistant design.',
    rating: 4.5,
    reviewCount: 412,
    colors: ['Black', 'Silver', 'Gold'],
    isBestseller: true
  },
  {
    id: '8',
    name: 'Classic Analog Watch',
    price: 3499,
    category: 'watches',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=600&fit=crop',
    description: 'Elegant analog watch with stainless steel case and leather strap. Perfect for formal occasions.',
    rating: 4.4,
    reviewCount: 89,
    colors: ['Black Leather', 'Brown Leather', 'Steel Bracelet']
  },
  {
    id: '9',
    name: 'Digital Sports Watch',
    price: 2299,
    originalPrice: 2899,
    category: 'watches',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&h=600&fit=crop',
    description: 'Rugged digital sports watch with multiple functions, alarm, and water resistance up to 100m.',
    rating: 4.3,
    reviewCount: 156,
    colors: ['Black', 'Navy', 'Army Green'],
    isNew: true
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'clothing', name: "Men's Clothing", count: products.filter(p => p.category === 'clothing').length },
  { id: 'sneakers', name: 'Sneakers', count: products.filter(p => p.category === 'sneakers').length },
  { id: 'watches', name: 'Watches', count: products.filter(p => p.category === 'watches').length }
];
