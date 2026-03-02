import { Link, useLocation } from "react-router-dom";
import mockProducts from "../../data/mockProducts"; 

function Breadcrumbs() {
  const location = useLocation();

  const routeNames = {
    catalog: "Каталог",
    product: "Товари", 
    wishlist: "Обране", 
    cart: "Кошик", 
  };

  if (location.pathname === "/") {
    return null;
  }
  
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-500 py-4 px-4 sm:px-10 lg:px-20 border-b border-gray-100 bg-white">
      <ol className="flex items-center gap-2 flex-wrap max-w-7xl mx-auto">
        <li>
          <Link to="/" className="hover:text-blue-600 transition flex items-center gap-1">
            <span>Головна</span>
          </Link>
        </li>

        {pathnames.map((value, index) => {
          if (value === "product") return null;
          
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          let label = routeNames[value] || value;

          if (!isNaN(value) && index > 0 && pathnames[index - 1] === "product") {
            const product = mockProducts.find((p) => p.id === Number(value));
            if (product) {
              label = product.name;
            }
          }

          return (
            <li key={to} className="flex items-center gap-2 max-w-[200px] sm:max-w-none">
              <span className="text-gray-300">/</span>

              {isLast ? (
                <span >
                  {label}
                </span>
              ) : (
                <Link to={to} className="hover:text-blue-600 transition capitalize">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;