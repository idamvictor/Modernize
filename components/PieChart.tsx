"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import YearlyBreakup from "./YearlyBreakup"
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },

]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  
} satisfies ChartConfig

export function PieChartComponent() {
  return (
    <Card className="flex flex-col py-7">
      <CardContent className="flex flex-1 pb-0">
        <YearlyBreakup />
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] w-[200px] overflow-hidden"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={50}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
