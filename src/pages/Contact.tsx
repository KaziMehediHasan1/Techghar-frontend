import { IconBundler } from "@/assets/icons/IconBundler";
import { BreadcrumbBasic } from "@/components/BreadcrumbBasic";
import Wrapper from "@/components/layout/Wrapper";

const Contact = () => {
  return (
    <div className="mt-2 sm:mt-4">
      <Wrapper>
        {/* Heading part */}
        <header className="space-y-3">
          <BreadcrumbBasic />
          <h1 className="text-lg sm:text-2xl font-bold">Contact Us</h1>
        </header>
        {/* Form Part */}
        <section className="flex flex-col-reverse gap-8 sm:flex-row mt-5">
          <div className="space-y-4">
            <p className="leading-9 sm:leading-6 text-wrap">
              We love hearing from you, our Shop customers. Please contact us
              and we will make sure to get back to you as soon as we possibly
              can.
            </p>
            <form>
              <div className="flex flex-col">
                <label htmlFor="">Your Name</label>
                <input
                  type="text"
                  placeholder="your name.."
                  className="border border-dim-primary rounded p-2"
                />
              </div>
            </form>
          </div>
          <div className="bg-[#F5F7FF] p-5 space-y-3 rounded-md">
            <div className="flex gap-4">
              <IconBundler.Location />
              <div className="space-y-1">
                <h1 className="text-sm sm:text-lg font-semibold">Address:</h1>
                <p className="text-xs sm:text-sm tracking-wider">
                  1234 Street Adress City Address, 1234
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <IconBundler.Phone />
              <div className="space-y-1">
                <h1 className="text-sm sm:text-lg font-semibold">Address:</h1>
                <h1>Phone:</h1>
                <p className="text-xs sm:text-sm tracking-wider">
                  +880154955753
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <IconBundler.Clock />
              <div className="space-y-1">
                <h1 className="text-sm sm:text-lg font-semibold">
                  We are open:
                </h1>
                <p className="text-xs sm:text-sm tracking-wider">
                  Monday - Thursday: 9:00 AM - 5:30 PM Friday 9:00 AM - 6:00 PM
                  Saturday: 11:00 AM - 5:00 PM
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <IconBundler.Mail />
              <div className="space-y-1">
                <h1 className="text-sm sm:text-lg font-semibold">E-mail:</h1>
                <p className="text-xs sm:text-sm tracking-wider">
                  kazimehedi@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  );
};

export default Contact;
