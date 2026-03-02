import { useState, useMemo } from "react";
import FilterSidebar from "../../components/Sidebar/FilterSidebar";
import products from "../../data/mockProducts";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Pagination from "../../components/common/Pagination";

function Catalog() {
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 50000],
    minRating: null,
    inStockOnly: false,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 12;

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (filters.categories.length && !filters.categories.includes(product.category))
        return false;
      if (filters.brands.length && !filters.brands.includes(product.brand))
        return false;
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1])
        return false;
      if (filters.minRating && product.rating < filters.minRating) 
        return false;
      if (filters.inStockOnly && !product.inStock) 
        return false;
      return true;
    });
  }, [filters]);

  // Розрахунок пагінації
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const currentItems = useMemo(() => {
    const lastItemIndex = currentPage * PRODUCTS_PER_PAGE;
    const firstItemIndex = lastItemIndex - PRODUCTS_PER_PAGE;
    return filteredProducts.slice(firstItemIndex, lastItemIndex);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <aside className="w-full lg:w-64 shrink-0">
            <FilterSidebar filters={filters} setFilters={handleFilterChange} />
          </aside>

          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-500 font-medium">
                Знайдено: {filteredProducts.length}
              </p>
            </div>

            <ProductGrid products={currentItems} />

            <div className="mt-12 py-6 border-t border-gray-200">
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Catalog;