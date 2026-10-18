import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type StatCardProps = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  iconClassName?: string;
};

export function StatCard({
  label,
  value,
  detail,
  icon: Icon,
  iconClassName = "bg-indigo-50 text-indigo-600",
}: StatCardProps) {
  return (
    <Card className="border border-slate-200 py-0 shadow-sm shadow-slate-950/[0.02]">
      <CardContent className="flex items-start justify-between gap-3 p-5">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            {value}
          </p>
          <p className="mt-1 text-xs text-slate-500">{detail}</p>
        </div>
        <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${iconClassName}`}>
          <Icon aria-hidden="true" className="size-5" />
        </div>
      </CardContent>
    </Card>
  );
}
