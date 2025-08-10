// src/components/GoogleReviews.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from 'flowbite-react';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  authorImage?: string;
}

function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Replace with actual Google Reviews API data
  const reviews: Review[] = [
    {
      id: '1',
      author: 'Club relaxing',
      rating: 5,
      text: 'Round the bell painting RoundTheBell Painting did an outstanding job! From start to finish, the team was professional, punctual, and incredibly skilled. The care and attention to detail they showed was impressive.',
      date: 'a month ago',
      authorImage: 'https://ui-avatars.com/api/?name=Club+relaxing&background=4a9aa8&color=fff',

    },
    {
      id: '2',
      author: 'Matthew Winkle',
      rating: 5,
      text: "First to respond to give me a quote and was a great price I didn't even bother looking for other quotes. They were able to start on the project right away and treated my home like it was his. The care and attention to detail was outstanding.",
      date: '7 months ago',
      authorImage: 'https://ui-avatars.com/api/?name=Matthew+Winkle&background=4a9aa8&color=fff',
    },

    {
      id: '3',
      author: 'Beth Mullaney',
      rating: 5,
      text: 'Great experience from the quote to the product delivered. Quick, timely, and a wonderful painting job done. The crew was fantastic.',
      date: 'a day ago',
      authorImage: 'https://ui-avatars.com/api/?name=Beth+Mullaney&background=4a9aa8&color=fff'
    },
    {
      id: '4',
      author: 'Robert Davis',
      rating: 5,
      text: 'Professional team that knows their craft. They helped us choose the perfect colors and the execution was flawless. Will definitely use again!',
      date: '2 months ago',
      authorImage: 'https://ui-avatars.com/api/?name=Robert+Davis&background=random'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(timer);
  }, [reviews.length]);

  const createStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const createReviewCard = (review: Review) => {
    return (
      <motion.div
        key={review.id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <Card className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <img
              src={review.authorImage}
              alt={review.author}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{review.author}</h3>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              {createStars(review.rating)}
              <p className="mt-3 text-gray-600">{review.text}</p>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  const createIndicators = () => {
    return (
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {createStars(5)}
              <span className="ml-2 font-semibold">5.0</span>
            </div>
            <span className="text-gray-600">from {reviews.length}+ Google Reviews</span>
          </div>
        </motion.div>

        <div className="relative h-48 md:h-40">
          <AnimatePresence mode="wait">
            {createReviewCard(reviews[currentIndex])}
          </AnimatePresence>
        </div>

        {createIndicators()}

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=round+the+bell+painting+fuquay+varina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

export default GoogleReviews;