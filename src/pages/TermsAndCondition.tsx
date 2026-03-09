import { useLocation } from "react-router-dom";

const TermsAndCondition = () => {
  const location = useLocation();
  console.log(location.pathname, "params");
  return <div></div>;
};

export default TermsAndCondition;
