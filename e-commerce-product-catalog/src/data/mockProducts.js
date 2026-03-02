import categories from "./mockCategories";
import brands from "./mockBrands";

const badges = ["NEW", "SALE", "TOP"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, decimals = 1) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
}

function generateProducts(count = 100) {
  const products = [];

  for (let i = 1; i <= count; i++) {
    const category = categories[getRandomInt(0, categories.length - 1)];
    const subcategory = category.subcategories[getRandomInt(0, category.subcategories.length - 1)];
    const brand = brands[getRandomInt(0, brands.length - 1)];
    const price = getRandomInt(500, 50000);
    const hasDiscount = Math.random() > 0.6;
    const discount = hasDiscount ? getRandomInt(5, 30) : 0;
    const oldPrice = hasDiscount ? Math.round(price * 100 / (100 - discount)) : null;
    const productBadges = badges.filter(() => Math.random() > 0.7);

    const product = {
      id: i,
      name: `${brand} ${subcategory} Product ${i}`,
      slug: `${brand.toLowerCase()}-${subcategory}-product-${i}`,
      description: "Детальний опис товару...",
      shortDescription: "Короткий опис для карток...",
      category: category.id,
      categoryName: category.name,
      subcategory,
      brand,
      sku: `${brand.substring(0,3).toUpperCase()}-${subcategory.substring(0,3).toUpperCase()}-${i}`,
      price,
      oldPrice,
      discount,
      images: [
        `/images/product-${i}-1.jpg`,
        `/images/product-${i}-2.jpg`,
        `/images/product-${i}-3.jpg`,
        `/images/product-${i}-4.jpg`,
        `/images/product-${i}-5.jpg`,
      ],
      rating: getRandomFloat(3.0, 5.0),
      reviewsCount: getRandomInt(0, 500),
      inStock: Math.random() > 0.1,
      stockQuantity: getRandomInt(0, 50),
      badges: productBadges,
      variants: [
        {
          type: "color",
          name: "Колір",
          options: [
            { value: "red", label: "Червоний", hex: "#FF0000" },
            { value: "blue", label: "Синій", hex: "#0000FF" },
            { value: "black", label: "Чорний", hex: "#000000" },
          ]
        },
        {
          type: "size",
          name: "Розмір",
          options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
          ]
        }
      ],
      specifications: {
        "Вага": `${getRandomInt(100, 2000)} г`,
        "Матеріал": "Високоякісний",
        "Виробник": brand,
      },
      features: ["Особливість 1", "Особливість 2", "Особливість 3"]
    };

    products.push(product);
  }

  return products;
}

const mockProducts = generateProducts(120);
export default mockProducts;