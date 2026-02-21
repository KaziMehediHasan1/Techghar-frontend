import { IconBundler } from "@/assets/icons/IconBundler";
import Cards from "@/features/dashboard/components/Cards";
import { cn } from "@/lib/utils";

const UserCard = () => {
  const tread = true;
  return (
    <div>
      <Cards
        pathForView="/"
        icon={<IconBundler.CircleUser className="w-6 h-6 text-brand-primary" />}
        count={"22,187"}
        name="Total Users"
        lastWeekData={"5.2%"}
        Trending={
          <IconBundler.TrendingUp
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

export default UserCard;
