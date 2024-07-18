// src/app/products/page.js
import ProductCard from '@/components/ui/ProductCard';

const products = [
  {
    id: 1,
    title: 'Eco-Friendly Shampoo',
    description: 'A natural shampoo for all hair types.',
    image: '/images/shampoo.jpg',
    price: 12.99,
  },
  {
    id: 2,
    title: 'Bamboo Toothbrush',
    description: 'A sustainable toothbrush made from bamboo.',
    image: '/images/toothbrush.jpg',
    price: 3.99,
  },
  // Add more products here
];

const ProductsPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductsPage;
