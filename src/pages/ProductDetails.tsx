import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '@/components/layout/Wrapper';
import { Button } from '@/components/ui/button';
import Server from '@/assets/images/server.png';
import SupportBanner from '@/features/product/components/SupportBanner';
const ProductDetails = () => {
  const { id } = useParams();
  console.log('paramId', id);
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="bg-white min-h-screen">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <Wrapper>
          <div className="flex flex-col md:flex-row justify-between items-center py-2 md:py-4 gap-4">
            <div className="flex gap-4 lg:gap-8">
              {['about', 'details', 'specs'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs md:text-sm capitalize transition-all relative py-2
                    ${activeTab === tab ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : 'text-gray-400 hover:text-black'}`}
                >
                  {tab === 'about'
                    ? 'About Product'
                    : tab === 'details'
                      ? 'Details'
                      : 'Specs'}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <span className="text-xs font-semibold">
                On Sale from <span className="font-bold">$3,299.00</span>
              </span>
              <div className="flex border rounded overflow-hidden">
                <input
                  type="number"
                  defaultValue={1}
                  className="w-12 text-center border-none outline-none text-sm"
                />
                <div className="flex flex-col border-l">
                  <button className="px-1 text-[8px] border-b hover:bg-gray-100">
                    ▲
                  </button>
                  <button className="px-1 text-[8px] hover:bg-gray-100">
                    ▼
                  </button>
                </div>
              </div>
              <Button className="bg-[#0156FF] rounded-full px-8 text-xs font-bold">
                Add to Cart
              </Button>
              <Button className="bg-[#FFB800] rounded-full px-8 text-xs font-bold text-black hover:bg-[#eab308]">
                PayPal
              </Button>
            </div>
          </div>
        </Wrapper>
      </div>

      {/* ২. হিরো সেকশন (প্রোডাক্ট ইনফো) */}
      <section className="bg-white py-10">
        <Wrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* বাম পাশে ইনফরমেশন */}
            <div className="space-y-6">
              <p className="text-xs text-gray-500">
                Home › Laptops › MSI WS Series
              </p>
              <h1 className="text-3xl md:text-4xl font-medium text-[#000000]">
                MSI MPG Trident 3
              </h1>
              <p className="text-[#0156FF] text-xs cursor-pointer">
                Be the first to review this product
              </p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
                MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB
                RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and
                Mouse 3 Years Warranty Gaming Desktop
              </p>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-800 border-2 border-blue-600 p-0.5">
                  <div className="w-full h-full rounded-full border border-white"></div>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#E9E2D5] cursor-pointer"></div>
                <div className="w-6 h-6 rounded-full bg-[#EBEBEB] cursor-pointer"></div>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <p className="text-[10px] font-bold">
                  Have a Question?{' '}
                  <span className="text-[#0156FF] cursor-pointer">
                    Contact Us
                  </span>
                </p>
                <p className="text-[10px] text-gray-400">SKU: D5515AI</p>
              </div>

              <p className="text-xs font-bold cursor-pointer hover:underline">
                + MORE INFORMATION
              </p>
            </div>

            {/* ডান পাশে ইমেজ এবং ইন্টারেক্টিভ আইকন */}
            <div className="relative flex justify-center bg-white">
              <img src={Server} alt="MSI Trident" className="w-50 md:w-60" />

              {/* Zip payment indicator */}
              <div className="absolute -bottom-5 right-0 flex items-center gap-2">
                <span className="text-[10px] text-gray-400">
                  own it now, up to 6 months interest free{' '}
                  <span className="underline cursor-pointer">learn more</span>
                </span>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <SupportBanner />
    </div>
  );
};

export default ProductDetails;
