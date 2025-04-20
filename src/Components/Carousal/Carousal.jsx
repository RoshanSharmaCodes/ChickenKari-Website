import { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: "$29.99",
      category: "Casual Wear",
      image: "/api/placeholder/500/600",
      description: "Ultra-soft premium cotton t-shirt with perfect fit",
      colors: ["Black", "White", "Navy"]
    },
    {
      id: 2,
      name: "Slim Fit Denim Jeans",
      price: "$69.99",
      category: "Everyday Essentials",
      image: "/api/placeholder/500/600",
      description: "Classic slim fit jeans with stretch comfort",
      colors: ["Blue", "Black", "Grey"]
    },
    {
      id: 3,
      name: "Wool Blend Blazer",
      price: "$149.99",
      category: "Formal Collection",
      image: "/api/placeholder/500/600",
      description: "Sophisticated wool blend blazer for a sharp look",
      colors: ["Charcoal", "Navy", "Burgundy"]
    },
    {
      id: 4,
      name: "Knit Sweater",
      price: "$79.99",
      category: "Winter Collection",
      image: "/api/placeholder/500/600",
      description: "Warm and cozy knit sweater for cold days",
      colors: ["Cream", "Grey", "Forest Green"]
    },
    {
      id: 5,
      name: "Leather Jacket",
      price: "$199.99",
      category: "Premium Outerwear",
      image: "/api/placeholder/500/600",
      description: "Classic leather jacket with modern detailing",
      colors: ["Black", "Brown", "Burgundy"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [products.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Main heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Collection</h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto mt-2"></div>
      </div>
      
      {/* Carousel container */}
      <div className="relative h-[600px] rounded-xl overflow-hidden shadow-xl">
        {/* Slides */}
        <div className="relative h-full">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-1000 flex flex-col md:flex-row
                ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {/* Product image */}
              <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover h-full w-full transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Product details */}
              <div className="flex-1 bg-white p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
                  {product.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-xl md:text-2xl font-bold text-indigo-600 mb-4">{product.price}</p>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                {/* Color options */}
                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-2">Available Colors:</p>
                  <div className="flex space-x-2 justify-center" >
                    {product.colors.map((color, idx) => (
                      <span key={idx} className="px-3 py-1 border border-gray-300 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="border-2 cursor-pointer border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out flex-1">
                    Get Quotations
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 cursor-pointer hover:bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-20 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-20 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-indigo-600 w-8" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}