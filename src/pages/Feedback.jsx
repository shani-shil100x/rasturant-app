import { useState } from 'react';
import { Star, MessageSquare, ThumbsUp, Send } from 'lucide-react';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    experience: '',
    suggestions: '',
    visitDate: '',
    recommend: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback! Your review helps us improve our service.');
    setRating(0);
    setFeedback({
      name: '',
      email: '',
      experience: '',
      suggestions: '',
      visitDate: '',
      recommend: ''
    });
  };

  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  };

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "2 days ago",
      review: "Absolutely amazing experience! The food was exceptional and the service was top-notch. Will definitely be coming back!"
    },
    {
      name: "Mike Chen",
      rating: 5,
      date: "1 week ago",
      review: "Best restaurant in the city! The grilled salmon was perfectly cooked and the atmosphere was wonderful."
    },
    {
      name: "Emily Davis",
      rating: 4,
      date: "2 weeks ago",
      review: "Great food and friendly staff. The only minor issue was the wait time, but it was worth it!"
    },
    {
      name: "Robert Wilson",
      rating: 5,
      date: "3 weeks ago",
      review: "Outstanding dining experience. Every dish was prepared to perfection. Highly recommend the chef's special!"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Feedback Matters
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Help us serve you better by sharing your dining experience
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Feedback Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in h-fit">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <MessageSquare className="h-8 w-8 text-orange-500 mr-3" />
              Share Your Experience
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Overall Rating *
                </label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="focus:outline-none transition-colors duration-200"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= (hoverRating || rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {rating > 0 && `${rating} star${rating > 1 ? 's' : ''}`}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={feedback.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={feedback.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Visit Date
                </label>
                <input
                  type="date"
                  name="visitDate"
                  value={feedback.visitDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your experience *
                </label>
                <textarea
                  name="experience"
                  value={feedback.experience}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="What did you enjoy about your visit? How was the food and service?"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Would you recommend us to others? *
                </label>
                <select
                  name="recommend"
                  value={feedback.recommend}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select an option</option>
                  <option value="definitely">Definitely</option>
                  <option value="probably">Probably</option>
                  <option value="maybe">Maybe</option>
                  <option value="probably-not">Probably not</option>
                  <option value="definitely-not">Definitely not</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Suggestions for improvement
                </label>
                <textarea
                  name="suggestions"
                  value={feedback.suggestions}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="How can we make your next visit even better?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Submit Feedback
              </button>
            </form>
          </div>

          {/* Reviews Section */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ThumbsUp className="h-6 w-6 text-orange-500 mr-2" />
                Customer Satisfaction
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">4.8</div>
                  <div className="flex justify-center mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Would Recommend</div>
                </div>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Reviews</h3>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">{review.review}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Incentive */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg p-8 text-white animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="mb-4">
                Your feedback helps us maintain our high standards and continue improving. 
                As a token of our appreciation, enjoy 10% off your next visit when you leave a review!
              </p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1">FEEDBACK10</div>
                <div className="text-sm">Use this code for 10% off your next order</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
