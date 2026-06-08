/*import { dummyProducts } from '../data/dummyProducts'

export default function MarketplaceGrid() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Marketplace</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dummyProducts.map((product) => (
            <div key={product.id} className="bg-white border rounded-lg p-4 shadow-sm">
              {/* Image placeholder }
              /*<div className="h-40 bg-gray-200 mb-3 rounded"></div>
              
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.supplier}</p>
              <p className="text-sm text-gray-500">{product.origin}</p>
              
              <p className="text-sm text-gray-600 mt-2">MOQ: {product.moq}</p>
              <p className="text-xl font-bold text-green-600 mt-2">₦{product.price}</p>
              
              <span className={`inline-block text-xs px-2 py-1 rounded mt-2 ${
                product.status === 'Out of stock' 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-green-100 text-green-700'
              }`}>
                {product.status}
              </span>
              
              <div className="flex gap-2 mt-4">
                <button className="bg-green-600 text-white px-3 py-2 rounded flex-1 hover:bg-green-700">
                  Submit Inquiry
                </button>
                <button className="border border-gray-300 px-3 py-2 rounded flex-1 hover:bg-gray-100">
                  Chat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
*/


import { dummyProducts as products} from '../data/dummyProducts';
import "./MarketplaceGrid.css";

export default function MarketplaceGrid() {
  return (
    <div className="marketplace-container">
      <h1 className="marketplace-title">Marketplace</h1>
      
      <div className="marketplace-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2 className="product-name">{product.name}</h2>
            <p>{product.description}</p>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{product.location}</p>
            <p>MOQ: {product.moq}</p>
            <p className="product-price">₦{product.price}</p>
            
            <div className="btn-group">
              <button className="btn-primary">Submit Inquiry</button>
              <button className="btn-secondary">Chat</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
