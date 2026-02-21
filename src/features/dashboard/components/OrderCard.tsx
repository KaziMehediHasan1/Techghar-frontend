import { IconBundler } from "@/assets/icons/IconBundler";
import Cards from "@/features/dashboard/components/Cards";
import { cn } from "@/lib/utils";

const OrderCard = () => {
  const tread = false;
  return (
    <div>
      <Cards
        pathForView="/"
        icon={<IconBundler.Saving className="w-6 h-6 text-brand-primary" />}
        count={"10,025"}
        name="Total Orders"
        lastWeekData={"2.1%"}
        Trending={
          <IconBundler.TrendingDown
            className={cn(
              "w-4 h-4  font-semibold",
              tread ? "text-green-500" : "text-red-500",
            )}
          />
        }
      />
    </div>
  );
};

export default OrderCard;
