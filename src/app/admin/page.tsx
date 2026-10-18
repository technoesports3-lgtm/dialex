import {
  Bot,
  CircleDollarSign,
  TrendingUp,
  Users,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recentSignups = [
  { name: "Kavya Iyer", company: "Northstar Finance", plan: "Growth", joined: "12 min ago" },
  { name: "Rahul Mehta", company: "Mehta Healthcare", plan: "Pro", joined: "48 min ago" },
  { name: "Priya Nair", company: "Bloom Retail", plan: "Starter", joined: "2 hours ago" },
  { name: "Dev Malhotra", company: "Orbit Mobility", plan: "Growth", joined: "4 hours ago" },
];

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-medium text-slate-600">Platform overview</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Good morning, Admin
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Monitor platform growth and activity at a glance.
        </p>
      </section>

      <section
        aria-label="Platform statistics"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        <StatCard
          detail="+18.2% this month"
          icon={Users}
          label="Total Users"
          value="12,846"
          iconClassName="bg-slate-100 text-slate-700"
        />
        <StatCard
          detail="Monthly recurring revenue"
          icon={CircleDollarSign}
          label="Total Revenue"
          value="₹48.6L"
          iconClassName="bg-emerald-50 text-emerald-700"
        />
        <StatCard
          detail="Across 8,912 workspaces"
          icon={Bot}
          label="Total Agents"
          value="34,291"
          iconClassName="bg-violet-50 text-violet-700"
        />
      </section>

      <Card className="border border-slate-200 py-0 shadow-sm shadow-slate-950/[0.02]">
        <CardHeader className="border-b border-slate-100 px-5 py-5 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <CardTitle className="text-base font-semibold text-slate-950">
                Recent signups
              </CardTitle>
              <p className="mt-1 text-sm text-slate-500">
                New customer accounts across Dialex
              </p>
            </div>
            <Badge className="gap-1 border-emerald-200 bg-emerald-50 text-emerald-700" variant="outline">
              <TrendingUp aria-hidden="true" />
              18.2%
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="divide-y divide-slate-100 px-5 sm:px-6">
          {recentSignups.map((signup) => (
            <div
              key={signup.name}
              className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-medium text-slate-900">{signup.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{signup.company}</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-6">
                <Badge className="border-slate-200 bg-slate-50 text-slate-700" variant="outline">
                  {signup.plan}
                </Badge>
                <span className="text-xs text-slate-500">{signup.joined}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <p className="text-center text-xs text-slate-400">
        Platform figures shown are clearly labeled mock data for the frontend prototype.
      </p>
    </div>
  );
}
