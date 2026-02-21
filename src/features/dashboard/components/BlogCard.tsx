import { IconBundler } from "@/assets/icons/IconBundler";
import Cards from "@/features/dashboard/components/Cards";

const BlogCard = () => {
  return (
    <div>
      <Cards
        pathForView=""
        icon={<IconBundler.EditPen className="w-6 h-6 text-brand-primary" />}
        count={"13,087"}
        name="Total Blogs"
        lastWeekData={"2.5%"}
        Trending={
          <IconBundler.TrendingUp className="w-4 h-4 text-green-500 font-semibold" />
        }
      />
    </div>
  );
};

export default BlogCard;
