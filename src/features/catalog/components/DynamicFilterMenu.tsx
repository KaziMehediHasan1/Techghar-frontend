import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react"; // Install lucide-react if you haven't
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DynamicFilterMenu = ({
  name,
  // label,
  items,
}: {
  name: string;
  label: string;
  items: string[];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Adjusted style to match the white-background, bordered look */}
        <Button
          variant="outline"
          className="rounded border-[#CACDD8] px-3 py-1 h-auto text-xs font-semibold flex items-center gap-2 bg-white hover:bg-gray-50 text-black shadow-none"
        >
          <span className="text-[#A2A6B0] font-normal">{name}:</span>
          <span>{name}</span>
          <ChevronDown size={14} className="ml-2 opacity-60" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-37.5">
        <DropdownMenuGroup>
          {items.map((item: string) => (
            <DropdownMenuItem key={item} className="text-xs cursor-pointer">
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DynamicFilterMenu;
