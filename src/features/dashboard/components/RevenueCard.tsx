import { IconBundler } from '@/assets/icons/IconBundler';
import Cards from '@/features/dashboard/components/Cards';
import { cn } from '@/lib/utils';

const RevenueCard = ({ count }: { count: number | string }) => {
  const tread = true;
  return (
    <div>
      <Cards
        pathForView="/"
        icon={<IconBundler.Dollar className="w-6 h-6 text-brand-primary" />}
        count={count}
        name="Revenue"
        lastWeekData={'7.7%'}
        Trending={
          <IconBundler.TrendingUp
            className={cn(
              'w-4 h-4  font-semibold',
              tread ? 'text-green-500' : 'text-red-500'
            )}
          />
        }
      />
    </div>
  );
};

export default RevenueCard;
