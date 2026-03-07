import React from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface IReviewData {
  id: number;
  title: string;
  user_name: string;
  review_text: string;
  rating: number;
  date: string;
}

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
  {
    id: 5,
    user_name: "Rahat Kabir",
    title: "Impressive Support",
    review_text:
      "Had a small issue with my order, but their customer support resolved it within hours.",
    rating: 4,
    date: "Jan 2026",
  },
  {
    id: 6,
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
    <section className="w-full py-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Real feedback from our verified purchasers
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          // Default: Mobile-এ ১টা দেখাবে
          slidesPerView={1}
          spaceBetween={16} // কার্ডের মাঝের গ্যাপ
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        //   pagination={{ clickable: true }}
          // Breakpoints দিয়ে রেসপন্সিভনেস কন্ট্রোল
          breakpoints={{
            // 640px এর ওপর (Tablet)
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // 1024px এর ওপর (Laptop)
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            // 1280px এর ওপর (Large Desktop)
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="mySwiper pb-14"
        >
          {ReviewData.map((review, index) => (
            <SwiperSlide key={index} className="h-auto rounded-md">
              <div className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < review.rating ? "currentColor" : "none"}
                        className={i < review.rating ? "" : "text-gray-200"}
                      />
                    ))}
                  </div>

                  {/* Title and Text */}
                  <h3 className="font-bold text-gray-800 mb-2 line-clamp-1 italic text-sm sm:text-base">
                    "{review.title}"
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {review.review_text}
                  </p>
                </div>

                {/* User Info Footer */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
                    {review.user_name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-none mb-1">
                      {review.user_name}
                    </p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewCard;
