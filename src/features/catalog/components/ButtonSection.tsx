import { IconBundler } from "@/assets/icons/IconBundler";
import ShowMenu from "@/features/catalog/components/ShowMenu";
import SortMenu from "@/features/catalog/components/SortMenu";

const ButtonSection = () => {
  return (
    <div>
      <section>
        <p>Items 1-35 of 61</p> {/* is it daynamic link */}
      </section>
      <section>
        <ShowMenu />
        <SortMenu />
      </section>
      <section className="flex items-center gap-2">
        <IconBundler.GridSort className="w-5 h-5 sm:w-7 sm:h-7" />
        <IconBundler.VercitalSort className="w-5 h-5 sm:w-7 sm:h-7" />
      </section>
    </div>
  );
};

export default ButtonSection;
