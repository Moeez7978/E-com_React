import React from 'react';

const FilterPane = ({ filters, setFilters }) => {
  const categories = ['mobile', 'laptop', 'watch', 'accessories', 'computer'];
  const companies = ['apple', 'samsung', 'dell', 'asus', 'lenova', 'rolex'];
  const colors = ['#ff0000', '#000000', '#CDD0D0', '#22D3EF'];

  return (
    <aside className="w-full md:w-64 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <input
        type="text"
        placeholder="Search by name"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <div className="mb-4">
        <label className="block font-medium mb-1">Category</label>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Company</label>
        <select
          value={filters.company}
          onChange={(e) => setFilters({ ...filters, company: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">All</option>
          {companies.map((comp) => (
            <option key={comp} value={comp}>{comp}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Color</label>
        <div className="flex gap-2 flex-wrap">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setFilters({ ...filters, color })}
              className={`w-6 h-6 rounded-full border ${
                filters.color === color ? 'ring-2 ring-blue-500' : ''
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Max Price: ₹{filters.price}</label>
        <input
          type="range"
          min="0"
          max="10000000"
          step="10000"
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: Number(e.target.value) })}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Minimum Rating</label>
        <input
          type="number"
          min="0"
          max="5"
          step="0.5"
          value={filters.rating}
          onChange={(e) => setFilters({ ...filters, rating: Number(e.target.value) })}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={filters.featured}
          onChange={(e) => setFilters({ ...filters, featured: e.target.checked })}
        />
        <label className="font-medium">Featured Only</label>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={filters.shipping}
          onChange={(e) => setFilters({ ...filters, shipping: e.target.checked })}
        />
        <label className="font-medium">Free Shipping</label>
      </div>
    </aside>
  );
};

export default FilterPane;