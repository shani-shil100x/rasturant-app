import { useState } from "react";
import { Star, Filter } from "lucide-react";
import DiscountBadge from "../components/DiscountBadge"; // ✅ Make sure the path is correct

// ✅ Move dishes outside component to persist expiresAt
const dishes = [
  {
    id: 1,
    name: "Grilled Salmon",
    price: "₹3259",
    discount: 20,
    expiresAt: Date.now() + 2 * 60 * 60 * 1000,
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    description:
      "Fresh Atlantic salmon grilled to perfection with herbs and lemon",
  },
  {
    id: 2,
    name: "Chicken Slice",
    price: "₹3562",
    discount: 15,
    expiresAt: Date.now() + 2 * 60 * 60 * 1000,
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    description:
      "Premium cut Chicken Slice cooked to your preference with seasonal vegetables",
  },
  {
    id: 3,
    name: "Caesar Salad",
    price: "₹5259",
    discount: 25,
    expiresAt: Date.now() + 2 * 60 * 60 * 1000,
    category: "Appetizers",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    description:
      "Crisp romaine lettuce with parmesan cheese and homemade croutons",
  },
  {
    id: 4,
    name: "Chocolate Cake",
    price: "₹5659",
    discount: 28,
    expiresAt: Date.now() + 2 * 60 * 60 * 1000,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    description:
      "Rich chocolate cake with layers of chocolate ganache and berries",
  },
  {
    id: 5,
    name: "Pasta Carbonara",
    price: "₹3359",
    discount: 50,
    expiresAt: Date.now() + 2 * 60 * 60 * 1000,
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    description: "Traditional Italian pasta with eggs, cheese, and pancetta",
  },
  {
    id: 6,
    name: "Bruschetta",
    price: "₹6659",
    discount: 22,
    expiresAt: Date.now() + 2 * 60 * 60 * 1000,
    category: "Appetizers",
    image:
      "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    description: "Toasted bread topped with fresh tomatoes, basil, and garlic",
  },
  {
    id: 7,
    name: "Tiramisu",
    price: "₹9959",
    discount: 40,
    expiresAt: Date.now() + 2 * 60 * 60 * 1000,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    description:
      "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
  },
  {
    id: 8,
    name: "Fresh Lemonade",
    price: "₹359",
    discount: 20,
    expiresAt: Date.now() + 2 * 60 * 60 * 1000,
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    description: "Refreshing homemade lemonade with fresh mint and ice",
  },
  {
    id: 9,
    name: "Chicken Wings",
    price: "₹3549",
    discount: 20,
    expiresAt: Date.now() + 2 * 60 * 60 * 1000,
    category: "Appetizers",
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    description: "Crispy chicken wings with your choice of sauce",
  },
];
const Dishes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Appetizers",
    "Main Course",
    "Desserts",
    "Beverages",
  ];

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Our Delicious Dishes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully crafted menu featuring fresh ingredients and
            bold flavors
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium">
              Filter by Category:
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => {
            const hasDiscount = dish.discount > 0;
            const numericPrice = Number(dish.price.replace("₹", ""));
            const discountedPrice = hasDiscount
              ? Math.floor((numericPrice * (100 - dish.discount)) / 100)
              : numericPrice;

            return (
              <div
                key={dish.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              >
                <div className="relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />

                  {/* ✅ Discount Badge */}
                  {hasDiscount && (
                    <div className="absolute top-2 left-2 z-10">
                      <DiscountBadge
                        discountPercent={dish.discount}
                        expiresAt={dish.expiresAt}
                      />
                    </div>
                  )}

                  {/* ✅ Price Badge */}
                  <div className="absolute top-2 right-2 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ₹{discountedPrice}
                  </div>
                </div>

                {/* Dish Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {dish.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(dish.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600 text-sm">
                        ({dish.rating})
                      </span>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Order?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't decide? Let our chef choose the perfect meal for you with
              our chef's special combo.
            </p>
            <a href="/order">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Chef's Special
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
