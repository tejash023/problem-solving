const products = [
  {
    id: 1,
    name: "Tomato",
  },
  {
    id: 2,
    name: "Tomatino",
  },
  {
    id: 3,
    name: "La Tomatino",
  },
  {
    id: 4,
    name: "Les Tamatino",
  },
  {
    id: 5,
    name: "Go",
  },
  {
    id: 6,
    name: "GOA",
  },
  {
    id: 7,
    name: "GONE",
  },
];

function searchProducts(query, products) {
  const matchingProducts = [];
  const lowerCase = query.toLowerCase();

  for (const product of products) {
    const productNameLower = product.name.toLowerCase();
    if (productNameLower.includes(lowerCase)) {
      matchingProducts.push(product);
    }
  }

  return matchingProducts;
}

// Test the search functionality
const searchString = "ino";
const result = searchProducts(searchString, products);
console.log(result);
