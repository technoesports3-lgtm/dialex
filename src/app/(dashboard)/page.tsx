import {
  Bot,
  Clock3,
  Phone,
  Wallet,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatCard } from "@/components/dashboard/stat-card";

const recentCalls = [
  {
    id: "CALL-2048",
    caller: "+91 98765 43210",
    agent: "Riya · Sales",
    time: "Today, 10:42 AM",
    duration: "4m 32s",
    status: "Completed",
  },
  {
    id: "CALL-2047",
    caller: "+91 87654 32109",
    agent: "Arjun · Support",
    time: "Today, 10:18 AM",
    duration: "2m 14s",
    status: "Completed",
  },
  {
    id: "CALL-2046",
    caller: "+91 99887 76655",
    agent: "Riya · Sales",
    time: "Today, 9:56 AM",
    duration: "6m 08s",
    status: "Transferred",
  },
  {
    id: "CALL-2045",
    caller: "+91 91234 56780",
    agent: "Meera · Appointments",
    time: "Today, 9:31 AM",
    duration: "3m 47s",
    status: "Completed",
  },
  {
    id: "CALL-2044",
    caller: "+91 88990 11223",
    agent: "Arjun · Support",
    time: "Today, 9:04 AM",
    duration: "0m 18s",
    status: "Missed",
  },
];

function CallStatus({ status }: { status: string }) {
  const classes =
    status === "Completed"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : status === "Transferred"
        ? "border-blue-200 bg-blue-50 text-blue-700"
        : "border-rose-200 bg-rose-50 text-rose-700";

  return (
    <Badge className={`border font-medium ${classes}`} variant="outline">
      {status}
    </Badge>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-indigo-600">Sunday, October 18, 2026</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Good morning, Ananya
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Here&apos;s what&apos;s happening with your voice workspace today.
          </p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-medium text-emerald-700 shadow-sm">
          <span className="size-2 rounded-full bg-emerald-500" />
          All systems operational
        </div>
      </section>

      <section
        aria-label="Workspace statistics"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        <StatCard
          detail="+12.8% compared to last month"
          icon={Phone}
          label="Total Calls"
          value="2,847"
        />
        <StatCard
          detail="Across all active agents"
          icon={Clock3}
          label="Minutes Used"
          value="18,420"
          iconClassName="bg-violet-50 text-violet-600"
        />
        <StatCard
          detail="Resets on November 1"
          icon={Wallet}
          label="Credits Left"
          value="2,500"
          iconClassName="bg-amber-50 text-amber-600"
        />
        <StatCard
          detail="3 published · 1 in draft"
          icon={Bot}
          label="Active Agents"
          value="4"
          iconClassName="bg-emerald-50 text-emerald-600"
        />
      </section>

      <Card className="border border-slate-200 py-0 shadow-sm shadow-slate-950/[0.02]">
        <CardHeader className="flex flex-row items-center justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-6">
          <div>
            <CardTitle className="text-base font-semibold text-slate-950">
              Recent Calls
            </CardTitle>
            <CardDescription className="mt-1">
              Latest activity across your AI voice agents
            </CardDescription>
          </div>
          <p className="hidden text-xs text-slate-500 sm:block">
            Mock activity · Updated just now
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-100 hover:bg-transparent">
                <TableHead className="pl-5 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:pl-6">
                  Call
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Caller
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Agent
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Time
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Duration
                </TableHead>
                <TableHead className="pr-5 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:pr-6">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentCalls.map((call) => (
                <TableRow key={call.id} className="border-slate-100">
                  <TableCell className="pl-5 font-medium text-slate-700 sm:pl-6">
                    {call.id}
                  </TableCell>
                  <TableCell className="text-slate-600">{call.caller}</TableCell>
                  <TableCell className="text-slate-600">{call.agent}</TableCell>
                  <TableCell className="text-slate-500">{call.time}</TableCell>
                  <TableCell className="text-slate-600">{call.duration}</TableCell>
                  <TableCell className="pr-5 sm:pr-6">
                    <CallStatus status={call.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
