import React from "react";
import { Star } from "lucide-react"; // Optional: lucide-react icons use korte paren

interface IReviewData {
  id: number;
  title: string;
  user_name: string;
  review_text: string;
  rating: number;
  date: string;
}

// Demo Data
const ReviewData: IReviewData[] = [
  {
    id: 1,
    user_name: "Ariful Islam",
    title: "Excellent Performance!",
    review_text:
      "The laptop accessories are top-notch. Build quality is premium and delivery was super fast.",
    rating: 5,
    date: "2 days ago",
  },
  {
    id: 2,
    user_name: "Sara Khan",
    title: "Very Reliable",
    review_text:
      "I bought an ATS Case and it fits perfectly. Airflow is amazing. Highly recommended for gamers.",
    rating: 4,
    date: "1 week ago",
  },
  {
    id: 3,
    user_name: "Tanvir Ahmed",
    title: "Good Value for Money",
    review_text:
      "Budget-friendly gadgets but feels very premium in hand. Will buy again from this shop.",
    rating: 5,
    date: "Feb 2026",
  },
  {
    id: 4,
    user_name: "Rahat Kabir",
    title: "Impressive Support",
    review_text:
      "Had a small issue with my order, but their customer support resolved it within hours.",
    rating: 4,
    date: "Jan 2026",
  },
];

const ReviewCard = () => {
  return (
    <section className="w-full mt-5 my-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 text-center sm:text-left">
          <h2 className="text-lg sm:text-2xl font-bold tracking-wider text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt=1">
            Real feedback from our verified purchasers
          </p>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ReviewData.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < review.rating ? "currentColor" : "none"}
                      className={i < review.rating ? "" : "text-gray-300"}
                    />
                  ))}
                </div>

                {/* Title and Text */}
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-1 italic">
                  "{review.title}"
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {review.review_text}
                </p>
              </div>

              {/* User Info Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                  {review.user_name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {review.user_name}
                  </p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                    {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;
