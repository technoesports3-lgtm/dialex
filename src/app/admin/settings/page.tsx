import { Card, CardContent } from "@/components/ui/card";

export default function PlatformSettingsPage() {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-sm font-medium text-slate-600">Administration</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
          Platform Settings
        </h1>
      </div>
      <Card className="border border-slate-200 shadow-sm">
        <CardContent className="py-10 text-center">
          <p className="text-sm text-slate-600">
            Platform configuration controls are coming soon.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            This frontend prototype uses mock data only.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
