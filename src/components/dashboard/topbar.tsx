"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bell, Menu } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/dashboard/sidebar";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/dashboard": "Dashboard",
  "/agents": "Agents",
  "/calls": "Calls",
  "/billing": "Billing",
  "/settings": "Settings",
  "/admin": "Admin Overview",
  "/admin/users": "Manage Users",
  "/admin/settings": "Platform Settings",
};

type TopbarProps = {
  isAdmin?: boolean;
};

export function Topbar({ isAdmin = false }: TopbarProps) {
  const pathname = usePathname();
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const title =
    pageTitles[pathname] ??
    (isAdmin ? "Platform Admin" : "Voice Workspace");

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <Sheet
          open={mobileNavigationOpen}
          onOpenChange={setMobileNavigationOpen}
        >
          <SheetTrigger
            aria-label="Open navigation"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 lg:hidden"
          >
            <Menu aria-hidden="true" className="size-4" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 max-w-[85vw] p-0 sm:max-w-72"
          >
            <SheetTitle className="sr-only">
              {isAdmin ? "Admin navigation" : "Workspace navigation"}
            </SheetTitle>
            <Sidebar
              isAdmin={isAdmin}
              mobile
              onNavigate={() => setMobileNavigationOpen(false)}
            />
          </SheetContent>
        </Sheet>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">
            {title}
          </p>
          <p className="hidden text-xs text-slate-500 sm:block">
            {isAdmin ? "Platform administration" : "Good morning, Ananya"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Button
          aria-label="Notifications"
          className="text-slate-500"
          size="icon"
          variant="ghost"
        >
          <Bell aria-hidden="true" />
        </Button>
        <div className="hidden h-8 w-px bg-slate-200 sm:block" />
        <div className="flex items-center gap-2">
          <Avatar className="size-8">
            <AvatarFallback
              className={
                isAdmin
                  ? "bg-slate-900 text-xs font-semibold text-white"
                  : "bg-indigo-100 text-xs font-semibold text-indigo-700"
              }
            >
              {isAdmin ? "AD" : "AS"}
            </AvatarFallback>
          </Avatar>
          <div className="hidden min-w-0 md:block">
            <p className="max-w-32 truncate text-xs font-semibold text-slate-800">
              {isAdmin ? "Dialex Admin" : "Ananya Sharma"}
            </p>
            <p className="max-w-32 truncate text-[11px] text-slate-500">
              {isAdmin ? "admin@dialex.ai" : "ananya@acme.in"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
