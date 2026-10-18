import { Users } from "lucide-react";
import { UsersTable } from "@/components/dashboard/users-table";

export default function ManageUsersPage() {
  return (
    <div className="space-y-6">
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-slate-600">Administration</p>
          <h1 className="mt-1 flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            <Users aria-hidden="true" className="size-7 text-slate-500" />
            Manage Users
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Review customer accounts, plans, and workspace access.
          </p>
        </div>
        <p className="w-fit rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
          Sample platform data
        </p>
      </section>
      <UsersTable />
    </div>
  );
}
