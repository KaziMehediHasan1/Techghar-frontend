import DashboardTable from "@/features/dashboard/components/DashboardTable";
import type { ColumnDef } from "@tanstack/react-table";

// ১. ডাটা টাইপ ডেফিনিশন
export type TData = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

// ২. স্যাম্পল পেমেন্ট ডাটা
const payments: TData[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "921f1e31",
    amount: 255,
    status: "success",
    email: "kazi@gmail.com",
  },
];

const columns: ColumnDef<TData>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span className="capitalize font-medium">{row.getValue("status")}</span>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-bold">{formatted}</div>;
    },
  },
];

const ProductsTable = () => {
  return (
    <div className="space-y-4 ">
      <h2 className="text-xl font-bold tracking-tight">Products</h2>
      <DashboardTable data={payments} columns={columns} />
    </div>
  );
};

export default ProductsTable;
