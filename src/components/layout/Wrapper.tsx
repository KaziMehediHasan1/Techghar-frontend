import type { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-7xl min-w-[320px] mx-auto p-2">{children}</div>;
};

export default Wrapper;
