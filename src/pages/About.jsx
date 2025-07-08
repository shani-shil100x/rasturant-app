
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Delicious Dishes' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '5★', label: 'Average Rating' }
  ];

  const team = [
    {
      name: "Marco Rodriguez",
      role: "Head Chef",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "20+ years of culinary expertise from Italy and France"
    },
    {
      name: "Sarah Johnson",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1654922207993-2952fec328ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Award-winning dessert specialist with a passion for creativity"
    },
    {
      name: "James Wilson",
      role: "Restaurant Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Ensures every guest has an exceptional dining experience"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Delicious
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            A story of passion, tradition, and exceptional culinary experiences
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2014, Delicious began as a small family restaurant with a simple vision: 
                to create extraordinary dining experiences using the finest ingredients and traditional 
                cooking techniques passed down through generations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we continue to honor our roots while embracing innovation, creating dishes 
                that surprise and delight our guests. Every meal is prepared with love, care, and 
                an unwavering commitment to quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Made with Love</div>
                    <div className="text-sm text-gray-600">Every dish crafted with care</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Award Winning</div>
                    <div className="text-sm text-gray-600">Recognized excellence</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in bringing people together through the shared experience of great food
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every dish, every service, and every interaction
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600">
                Our love for food and hospitality drives us to create memorable experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals who make the magic happen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the passion and dedication that goes into every dish we serve
          </p>
          <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Make a Reservation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
