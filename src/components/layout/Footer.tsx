import Wrapper from "@/components/layout/Wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <Wrapper>
        <div className="space-y-3 mt-8">
          {/* SEARCH AND INPUT FIELD */}
          <section className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between ">
            <div className="w-full space-y-2">
              <h1 className="text-2xl md:text-3xl capitalize -tracking-tighter ">
                Sign Up To Our Newsletter.
              </h1>
              <p className="text-xs md:text-sm leading-6 font-extralight  text-dim-primary tracking-tight">
                Be the first to hear about the latest offers.
              </p>
            </div>

            <div className="flex items-center gap-x-2 sm:gap-x-4">
              <Input
                className="rounded w-full md:w-72 lg:w-80"
                placeholder="Your Email"
              />
              <Button className="bg-brand-primary rounded-full">
                Subscribe
              </Button>
            </div>
          </section>
          {/* NAVIGATION BAR */}
          <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container grid grid-cols-2 mx-auto gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
              {/* Information */}
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-text-dim text-sm">
                  Information
                </h2>
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                  <a href="#">About Us</a>
                  <a href="#">About Zip</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Search</a>
                  <a href="#">Terms</a>
                  <a href="#">Orders and Returns</a>
                  <a href="#">Contact Us</a>
                  <a href="#">Advanced Search</a>
                  <a href="#">Newsletter Subscription</a>
                </div>
              </div>

              {/* PC Parts */}
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-text-dim text-sm">PC Parts</h2>
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                  <a href="#">CPUs</a>
                  <a href="#">Add On Cards</a>
                  <a href="#">Hard Drives (Internal)</a>
                  <a href="#">Graphic Cards</a>
                  <a href="#">Keyboards / Mice</a>
                  <a href="#">Cases / Power Supplies / Cooling</a>
                  <a href="#">RAM (Memory)</a>
                  <a href="#">Software</a>
                  <a href="#">Speakers / Headsets</a>
                  <a href="#">Motherboards</a>
                </div>
              </div>

              {/* Desktop PCs */}
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-text-dim text-sm">
                  Desktop PCs
                </h2>
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                  <a href="#">Custom PCs</a>
                  <a href="#">Servers</a>
                  <a href="#">MSI All-in-One PCs</a>
                  <a href="#">HP/Compaq PCs</a>
                  <a href="#">ASUS PCs</a>
                  <a href="#">Tecs PCs</a>
                </div>
              </div>

              {/* Laptops */}
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-text-dim text-sm">Laptops</h2>
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                  <a href="#">Everyday Use Notebooks</a>
                  <a href="#">MSI Workstation Series</a>
                  <a href="#">MSI Prestige Series</a>
                  <a href="#">Tablets and Pads</a>
                  <a href="#">Netbooks</a>
                  <a href="#">Infinity Gaming Notebooks</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-text-dim text-sm">Address</h2>
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                  <p>Address: 1234 Street Adress City Address, 1234</p>
                  <p>
                    Phones:{" "}
                    <span className="text-blue-600">(00) 1234 5678</span>
                  </p>
                  <p>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>
                  <p>Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 11:00 AM - 5:00 PM</p>
                  <p>
                    E-mail:{" "}
                    <span className="text-blue-600">shop@email.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
              <span className="dark:text-gray-600">
                Copyright © 2020 Shop Pty. Ltd.
              </span>
            </div>
          </section>
          {/* SOCAIL AND ICON */}
          <section></section>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
