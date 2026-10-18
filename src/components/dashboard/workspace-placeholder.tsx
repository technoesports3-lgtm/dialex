import { Card, CardContent } from "@/components/ui/card";

type WorkspacePlaceholderProps = {
  title: string;
  description: string;
};

export function WorkspacePlaceholder({
  title,
  description,
}: WorkspacePlaceholderProps) {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-sm font-medium text-indigo-600">Workspace</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
          {title}
        </h1>
      </div>
      <Card className="border border-slate-200 shadow-sm">
        <CardContent className="py-10 text-center">
          <p className="text-sm text-slate-600">{description}</p>
          <p className="mt-2 text-xs text-slate-400">
            This frontend prototype uses mock data only.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
