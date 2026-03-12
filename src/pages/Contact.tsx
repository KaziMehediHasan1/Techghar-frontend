import { IconBundler } from "@/assets/icons/IconBundler";
import { BreadcrumbBasic } from "@/components/BreadcrumbBasic";
import Wrapper from "@/components/layout/Wrapper";

const Contact = () => {
  return (
    <div className="mt-4 sm:mt-8 mb-10">
      <Wrapper>
        {/* Header Section */}
        <header className="space-y-4 mb-8">
          <BreadcrumbBasic />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Contact Us
          </h1>
        </header>

        {/* Responsive Grid: Stacks on mobile, 3 columns on large screens */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Form Area (Takes 2 columns on desktop) */}
          <div className="lg:col-span-2 order-2 lg:order-1 space-y-6">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              We love hearing from you, our Shop customers. Please contact us
              and we will make sure to get back to you as soon as we possibly
              can.
            </p>

            <form className="space-y-6 w-full">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Phone Row */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Your Phone *
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                  required
                />
              </div>

              {/* Message Row */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  What’s on your mind? *
                </label>
                <textarea
                  placeholder="Jot us a note and we’ll get back to you as quickly as possible"
                  className="w-full border border-gray-300 rounded-md p-3 h-40 focus:ring-2 focus:ring-brand-primary outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-brand-primary text-white cursor-pointer py-3 px-10 rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Info Side Card (Takes 1 column on desktop) */}
          <aside className="lg:col-span-1 order-1 lg:order-2">
            <div className="bg-[#F5F7FF] p-6 sm:p-8 rounded-xl space-y-8 h-full">
              <div className="flex gap-4">
                <div className="shrink-0 text-brand-primary">
                  <IconBundler.Location size={28} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Address:</h3>
                  <p className="text-sm text-gray-700 leading-snug">
                    1234 Street Adress City Address, 1234
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 text-brand-primary">
                  <IconBundler.Phone size={25}/>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Phone:</h3>
                  <p className="text-sm text-gray-700">+880154955753</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 text-brand-primary">
                  <IconBundler.Clock size={26}/>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">We are open:</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>
                      <span className="font-semibold">Mon - Thu:</span> 9:00 AM
                      - 5:30 PM
                    </p>
                    <p>
                      <span className="font-semibold">Friday:</span> 9:00 AM -
                      6:00 PM
                    </p>
                    <p>
                      <span className="font-semibold">Saturday:</span> 11:00 AM
                      - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 text-brand-primary">
                  <IconBundler.Mail size={26}/>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">E-mail:</h3>
                  <p className="text-sm font-medium text-brand-primary break-all">
                    kazimehedi@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </Wrapper>
    </div>
  );
};

export default Contact;
