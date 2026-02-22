import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";


const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Page View",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Clicks",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartBarMultiple() {
  return (
    <Card className="shadow-2xl shadow-dim-primary rounded-md bg-white w-full">
      <CardHeader>
        <CardTitle>Performance</CardTitle>
      </CardHeader>
      <CardContent className="aspect-auto">
        <ChartContainer
          config={chartConfig}
          className="h-full max-h-43.5 w-full"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={{ fill: "rgba(0,0,0,0.04)" }}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="desktop"
              fill="#f54242"
              radius={[4, 4, 0, 0]}
              barSize={30}
            />
            <Bar
              dataKey="mobile"
              fill="#8d8888"
              radius={[4, 4, 0, 0]}
              barSize={30}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex items-center justify-center text-center gap-x-4">
        <div className="flex items-center gap-x-1.5">
          <div className="bg-red-600 w-2 h-2 rounded-full" />
          <p className="text-sm">Page view</p>
        </div>
        <div className="flex items-center gap-x-1.5">
          <div className="bg-[#8d8888] w-2 h-2 rounded-full" />
          <p className="text-sm">Click</p>
        </div>
      </CardFooter> */}
    </Card>
  );
}
