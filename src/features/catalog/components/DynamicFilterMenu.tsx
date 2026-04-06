import { Button } from '@/components/ui/button';
import { ChevronDown, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSearchParams } from 'react-router-dom';

interface DynamicFilterMenuProps {
  name: string; 
  label: string; 
  items: string[]; // Filter options
}

const DynamicFilterMenu = ({ name, label, items }: DynamicFilterMenuProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current value from URL
  const currentValue = searchParams.get(name);

  const handleFilterSelect = (value: string) => {
    const params = new URLSearchParams(searchParams);


    if (currentValue === value) {
      params.delete(name);
    } else {
      params.set(name, value);
    }

    params.set(name, value);

    setSearchParams(params);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded border-[#CACDD8] px-3 py-1 h-9 text-xs font-semibold flex items-center gap-2 bg-white hover:bg-gray-50 text-black shadow-none border"
        >
          <span className="text-[#A2A6B0] font-normal">{label}:</span>
          <span className="capitalize">{currentValue || 'All'}</span>
          <ChevronDown
            size={14}
            className={`ml-1 transition-transform duration-200 opacity-60`}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="min-w-37.5 bg-white shadow-lg border-gray-100"
      >
        <DropdownMenuGroup>
          {items.map((item) => {
            const isActive = currentValue === item;
            return (
              <DropdownMenuItem
                key={item}
                onClick={() => handleFilterSelect(item)}
                className={`text-xs cursor-pointer flex justify-between items-center py-2 px-3
                  ${isActive ? 'bg-blue-50 text-[#0156FF] font-bold' : 'hover:bg-gray-50'}`}
              >
                {item}
                {isActive && <Check size={12} className="text-[#0156FF]" />}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DynamicFilterMenu;
