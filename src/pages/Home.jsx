import { Link } from "react-router-dom";
import { Star, Clock, Users, Award } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "Fresh ingredients sourced locally for the best taste",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick preparation without compromising on quality",
    },
    {
      icon: Users,
      title: "Expert Chefs",
      description: "Experienced culinary team with passion for food",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in dining experience",
    },
  ];

  const popularDishes = [
    {
      name: "Grilled Salmon",
      price: "₹3259",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
    },
    {
      name: "Chicken Slice",
      price: "₹7859",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
    },
    {
      name: "Caesar Salad",
      price: "₹1259",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.pinimg.com/736x/a6/9b/a4/a69ba4f2805adaf22bd780e22e177598.jpg')`,
        }}
      >
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-scale-in">
            Welcome to Delicious
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience the finest dining with our carefully crafted dishes made
            from fresh, local ingredients
          </p>
          <div className="space-x-4">
            <Link
              to="/dishes"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
            >
              View Menu
            </Link>
            <Link
              to="/order"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on delivering exceptional dining experiences
              with every meal
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Dishes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Try our most loved dishes that keep customers coming back for more
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDishes.map((dish, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {dish.name}
                    </h3>
                    <span className="text-xl font-bold text-orange-600">
                      {dish.price}
                    </span>
                  </div>
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
                    <span className="ml-2 text-gray-600">({dish.rating})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/dishes"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
            >
              View All Dishes
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait! Order your favorite dishes now and enjoy a delicious
            meal delivered to your door
          </p>
          <Link
            to="/order"
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
