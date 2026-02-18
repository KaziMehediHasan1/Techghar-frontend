import {
  MoreHorizontal,
  MoreVertical,
  ShoppingCart,
  Check,
  Phone,
  Search,
  Star,
  Facebook,
  Instagram,
  MessageCircle,
  Headset,
  CircleUser,
  DiamondPercent,
  SlidersHorizontal,
  type LucideProps,
} from "lucide-react";

interface IconProps extends LucideProps {
  className?: string;
}
export const IconBundler = {
  MoreH: (props: IconProps) => <MoreHorizontal {...props} />,
  MoreV: (props: IconProps) => <MoreVertical {...props} />,
  Search: (props: IconProps) => <Search {...props} />,
  Cart: (props: IconProps) => <ShoppingCart {...props} />,
  Check: (props: IconProps) => <Check {...props} />,
  Phone: (props: IconProps) => <Phone {...props} />,
  Star: (props: IconProps) => <Star {...props} />,
  Facebook: (props: IconProps) => <Facebook {...props} />,
  Instagram: (props: IconProps) => <Instagram {...props} />,
  Message: (props: IconProps) => <MessageCircle {...props} />,
  Support: (props: IconProps) => <Headset {...props} />,
  CircleUser: (props: IconProps) => <CircleUser {...props} />,
  Saving: (props: IconProps) => <DiamondPercent {...props} />,
  SliderH: (props: IconProps) => <SlidersHorizontal {...props} />,
};
