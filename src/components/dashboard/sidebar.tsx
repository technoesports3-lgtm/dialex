"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Bot,
  CreditCard,
  LayoutDashboard,
  Phone,
  Settings,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

type SidebarProps = {
  isAdmin?: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
};

type NavigationItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const userNavigation: NavigationItem[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/agents", label: "Agents", icon: Bot },
  { href: "/calls", label: "Calls", icon: Phone },
  { href: "/billing", label: "Billing", icon: CreditCard },
  { href: "/settings", label: "Settings", icon: Settings },
];

const adminNavigation: NavigationItem[] = [
  { href: "/admin", label: "Admin Overview", icon: LayoutDashboard },
  { href: "/admin/users", label: "Manage Users", icon: Users },
  { href: "/admin/settings", label: "Platform Settings", icon: Settings },
];

export function Sidebar({
  isAdmin = false,
  mobile = false,
  onNavigate,
}: SidebarProps) {
  const pathname = usePathname();
  const navigation = isAdmin ? adminNavigation : userNavigation;
  const accentClass = isAdmin
    ? "bg-slate-900 text-white"
    : "bg-indigo-600 text-white";

  return (
    <aside
      className={`flex flex-col border-r border-slate-200 bg-white ${
        mobile ? "h-full w-full" : "fixed inset-y-0 left-0 z-30 hidden w-64 lg:flex"
      }`}
    >
      <div className="flex h-16 items-center gap-3 border-b border-slate-100 px-6">
        <div
          className={`flex size-9 items-center justify-center rounded-xl ${accentClass}`}
        >
          {isAdmin ? (
            <ShieldCheck aria-hidden="true" className="size-5" />
          ) : (
            <Activity aria-hidden="true" className="size-5" />
          )}
        </div>
        <div>
          <p className="text-base font-semibold tracking-tight text-slate-950">
            Dialex
          </p>
          <p className="text-xs text-slate-500">
            {isAdmin ? "Platform admin" : "Voice workspace"}
          </p>
        </div>
      </div>

      <nav aria-label={isAdmin ? "Admin navigation" : "Main navigation"} className="flex-1 space-y-1 px-3 py-6">
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
          {isAdmin ? "Administration" : "Workspace"}
        </p>
        {navigation.map(({ href, label, icon: Icon }) => {
          const isActive =
            pathname === href ||
            (href !== "/" && pathname.startsWith(`${href}/`));

          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? isAdmin
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-indigo-50 text-indigo-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              <Icon aria-hidden="true" className="size-[18px]" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-100 p-4">
        {isAdmin ? (
          <div className="rounded-xl bg-slate-50 p-3">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-700">
                All systems operational
              </span>
            </div>
            <p className="mt-2 text-[11px] text-slate-500">
              Admin workspace · Mock data
            </p>
          </div>
        ) : (
          <div className="rounded-xl border border-slate-200 p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-slate-700">Monthly credits</span>
              <span className="text-slate-500">75%</span>
            </div>
            <div
              aria-label="75% of monthly credits used"
              aria-valuemax={100}
              aria-valuemin={0}
              aria-valuenow={75}
              className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"
              role="progressbar"
            >
              <div className="h-full w-3/4 rounded-full bg-indigo-600" />
            </div>
            <p className="mt-2 text-[11px] text-slate-500">
              7,500 of 10,000 credits used
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
