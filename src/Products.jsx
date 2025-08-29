import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from './productContext';
import FilterPane from '/src/components/FilterPane';

const Products = () => {
  const { products, isLoading } = useProductContext();

  const [filters, setFilters] = useState({
    search: '',
    category: '',
    company: '',
    color: '',
    price: 10000000,
    rating: 0,
    featured: false,
    shipping: false,
  });

  const [appliedFilters, setAppliedFilters] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortOrder, setSortOrder] = useState('default'); // 'low', 'high', 'default'

  const handleApplyFilters = () => {
    setAppliedFilters({ ...filters });
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      category: '',
      company: '',
      color: '',
      price: 10000000,
      rating: 0,
      featured: false,
      shipping: false,
    });
    setAppliedFilters(null);
  };

  // Filter logic
  const filteredProducts = appliedFilters
    ? products.filter((product) => {
        const {
          search,
          category,
          company,
          color,
          price,
          rating,
          featured,
          shipping,
        } = appliedFilters;

        return (
          (!search || product.name.toLowerCase().includes(search.toLowerCase())) &&
          (!category || product.category === category) &&
          (!company || product.company === company) &&
          (!color || product.colors.includes(color)) &&
          (!price || product.price <= price) &&
          (!rating || product.stars >= rating) &&
          (!featured || product.featured === true) &&
          (!shipping || product.shipping === true)
        );
      })
    : products;

  // Sorting logic
  let sortedProducts = [...filteredProducts];
  if (sortOrder === 'low') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (isLoading) {
    return <div className="text-center py-10 text-lg font-semibold">Loading products...</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* 🔍 Filter Pane */}
        <div>
          <FilterPane filters={filters} setFilters={setFilters} />
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleApplyFilters}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Apply Filters
            </button>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* 🧩 Product Display */}
        <div className="flex-1">
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <p className="text-gray-700 text-sm">
              Showing <span className="font-semibold">{sortedProducts.length}</span> products
            </p>

            <div className="flex items-center gap-4">
              {/* View Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 rounded border ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1 rounded border ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  List
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-3 py-2 border rounded"
              >
                <option value="default">Sort by</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Cards */}
          <div
            className={`grid ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
                : 'grid-cols-1 gap-4'
            }`}
          >
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <Link
                  to={`/singleproduct/${product.id}`}
                  key={product.id}
                  className={`bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden ${
                    viewMode === 'list' ? 'flex items-center gap-4 p-4' : ''
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`${
                      viewMode === 'list'
                        ? 'w-32 h-32 object-cover rounded'
                        : 'w-full h-48 object-cover'
                    }`}
                  />
                  <div className={`${viewMode === 'list' ? 'flex-1' : 'p-4'}`}>
                    <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                    <p className="text-sm text-gray-500 mb-2 capitalize">By {product.company}</p>
                    <div className="text-green-600 font-bold text-md">₹{product.price}</div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center text-gray-500 col-span-full">
                No products match your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;