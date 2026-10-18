import { Suspense } from "react";
import type { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100/70">
      <Suspense
        fallback={
          <div className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-slate-200 bg-white lg:block" />
        }
      >
        <Sidebar isAdmin />
      </Suspense>
      <div className="min-h-screen lg:pl-64">
        <Suspense
          fallback={
            <div className="sticky top-0 z-20 h-16 border-b border-slate-200 bg-white" />
          }
        >
          <Topbar isAdmin />
        </Suspense>
        <main className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
