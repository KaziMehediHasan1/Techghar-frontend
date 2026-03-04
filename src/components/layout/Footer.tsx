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
            <div className="w-full">
              <h1 className="text-xl md:text-2xl capitalize -tracking-tighter ">
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
          <section className=" dark:bg-gray-100 dark:text-gray-800">
            <div className="container grid grid-cols-2 mx-auto gap-x-2 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-text-dim text-sm">Getting started</h2>
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                  <a rel="noopener noreferrer" href="#">
                    Installation
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Release Notes
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Upgrade Guide
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Using with Preprocessors
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Optimizing for Production
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Browser Support
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    IntelliSense
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-text-dim text-sm">Core Concepts</h2>
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                  <a rel="noopener noreferrer" href="#">
                    Utility-First
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Responsive Design
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Hover, Focus, &amp; Other States
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Dark Mode
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Adding Base Styles
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Extracting Components
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Adding New Utilities
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-text-dim text-sm">Customization</h2>
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                  <a rel="noopener noreferrer" href="#">
                    Configuration
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Theme Configuration
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Breakpoints
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Customizing Colors
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Customizing Spacing
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Configuring Variants
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Plugins
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-text-dim text-sm">Community</h2>
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                  <a rel="noopener noreferrer" href="#">
                    GitHub
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Discord
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Twitter
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    YouTube
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-text-dim text-sm">Community</h2>
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                  <a rel="noopener noreferrer" href="#">
                    GitHub
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Discord
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    Twitter
                  </a>
                  <a rel="noopener noreferrer" href="#">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
              <span className="dark:text-gray-600">
                © Copyright 1986. All Rights Reserved.
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
