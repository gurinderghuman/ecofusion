// src/components/ui/ProductCard.js
import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ product }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg">
    <Link href={`/products/${product.id}`} passHref>
      <div className="cursor-pointer">
        <Image
          className="w-full h-48 object-cover"
          src={product.image}
          alt={product.title}
          width={500}
          height={300}
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-green-500 text-lg font-semibold">${product.price}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default ProductCard;
