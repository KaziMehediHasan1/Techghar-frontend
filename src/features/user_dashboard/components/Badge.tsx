import { statusStyles } from "../style";

export const Badge = ({ status }: { status: string }) => (
  <span
    className={`px-3 py-1 rounded-full text-[11px] font-medium border flex items-center gap-1.5 w-fit ${statusStyles[status as keyof typeof statusStyles]}`}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-current" />
    {status}
  </span>
);
