"use client";

import { useMemo, useState } from "react";
import { MoreHorizontal, Search, UserRound, UserRoundCog } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type AccountStatus = "Active" | "Trial" | "Suspended";

type UserRecord = {
  id: string;
  name: string;
  email: string;
  company: string;
  plan: "Starter" | "Growth" | "Pro" | "Enterprise";
  status: AccountStatus;
  joined: string;
  lastActive: string;
  initials: string;
};

const initialUsers: UserRecord[] = [
  {
    id: "usr-1001",
    name: "Kavya Iyer",
    email: "kavya@northstar.in",
    company: "Northstar Finance",
    plan: "Enterprise",
    status: "Active",
    joined: "Jan 12, 2026",
    lastActive: "2 min ago",
    initials: "KI",
  },
  {
    id: "usr-1002",
    name: "Rahul Mehta",
    email: "rahul@mehtahealth.in",
    company: "Mehta Healthcare",
    plan: "Pro",
    status: "Active",
    joined: "Feb 03, 2026",
    lastActive: "18 min ago",
    initials: "RM",
  },
  {
    id: "usr-1003",
    name: "Priya Nair",
    email: "priya@bloomretail.in",
    company: "Bloom Retail",
    plan: "Starter",
    status: "Trial",
    joined: "Oct 15, 2026",
    lastActive: "1 hour ago",
    initials: "PN",
  },
  {
    id: "usr-1004",
    name: "Dev Malhotra",
    email: "dev@orbitmobility.in",
    company: "Orbit Mobility",
    plan: "Growth",
    status: "Active",
    joined: "Mar 21, 2026",
    lastActive: "3 hours ago",
    initials: "DM",
  },
  {
    id: "usr-1005",
    name: "Sneha Reddy",
    email: "sneha@brightlearn.in",
    company: "BrightLearn",
    plan: "Growth",
    status: "Suspended",
    joined: "Apr 08, 2026",
    lastActive: "Oct 10, 2026",
    initials: "SR",
  },
  {
    id: "usr-1006",
    name: "Arjun Kapoor",
    email: "arjun@urbanbasket.in",
    company: "Urban Basket",
    plan: "Pro",
    status: "Active",
    joined: "May 17, 2026",
    lastActive: "Yesterday",
    initials: "AK",
  },
  {
    id: "usr-1007",
    name: "Meera Joshi",
    email: "meera@acorntravel.in",
    company: "Acorn Travel",
    plan: "Starter",
    status: "Trial",
    joined: "Oct 17, 2026",
    lastActive: "Today",
    initials: "MJ",
  },
];

function StatusBadge({ status }: { status: AccountStatus }) {
  const style =
    status === "Active"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : status === "Trial"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : "border-rose-200 bg-rose-50 text-rose-700";

  return (
    <Badge className={`border font-medium ${style}`} variant="outline">
      <span
        className={`size-1.5 rounded-full ${
          status === "Active"
            ? "bg-emerald-500"
            : status === "Trial"
              ? "bg-amber-500"
              : "bg-rose-500"
        }`}
      />
      {status}
    </Badge>
  );
}

export function UsersTable() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserRecord | null>(null);
  const [notice, setNotice] = useState("");

  const filteredUsers = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    if (!normalizedSearch) return users;

    return users.filter((user) =>
      [user.name, user.email, user.company, user.plan, user.status]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch),
    );
  }, [search, users]);

  function toggleSuspension(userId: string) {
    const targetUser = users.find((user) => user.id === userId);
    if (!targetUser) return;

    const status =
      targetUser.status === "Suspended" ? "Active" : "Suspended";
    setNotice(`${targetUser.name} is now ${status.toLowerCase()} (mock action).`);
    setUsers((currentUsers) =>
      currentUsers.map((user) => {
        if (user.id !== userId) return user;
        return { ...user, status };
      }),
    );
  }

  function beginImpersonation(user: UserRecord) {
    setNotice(
      `Impersonation preview started for ${user.name}. No account or session was changed.`,
    );
  }

  return (
    <>
      {notice && (
        <div
          className="flex flex-col gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-900 sm:flex-row sm:items-center sm:justify-between"
          role="status"
        >
          <span>{notice}</span>
          <Button
            className="w-fit text-indigo-800"
            onClick={() => setNotice("")}
            size="sm"
            variant="ghost"
          >
            Dismiss
          </Button>
        </div>
      )}
      <Card className="border border-slate-200 py-0 shadow-sm shadow-slate-950/[0.02]">
        <CardHeader className="flex flex-col gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <CardTitle className="text-base font-semibold text-slate-950">
              Customer accounts
            </CardTitle>
            <p className="mt-1 text-sm text-slate-500">
              {filteredUsers.length} of {users.length} sample users
            </p>
          </div>
          <div className="relative w-full sm:max-w-xs">
            <Search
              aria-hidden="true"
              className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400"
            />
            <Input
              aria-label="Search users"
              className="h-9 border-slate-200 bg-white pl-9"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search users..."
              value={search}
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-100 bg-slate-50/70 hover:bg-slate-50/70">
                <TableHead className="pl-5 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:pl-6">
                  User
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Plan
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Joined
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Last active
                </TableHead>
                <TableHead className="pr-5 text-right text-xs font-semibold uppercase tracking-wide text-slate-500 sm:pr-6">
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id} className="border-slate-100">
                  <TableCell className="min-w-64 pl-5 sm:pl-6">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-slate-100 text-xs font-semibold text-slate-700">
                          {user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="font-medium text-slate-900">{user.name}</p>
                        <p className="max-w-56 truncate text-xs text-slate-500">
                          {user.email}
                        </p>
                        <p className="max-w-56 truncate text-[11px] text-slate-400">
                          {user.company}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="border-slate-200 bg-white text-slate-700" variant="outline">
                      {user.plan}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={user.status} />
                  </TableCell>
                  <TableCell className="text-slate-600">{user.joined}</TableCell>
                  <TableCell className="text-slate-500">{user.lastActive}</TableCell>
                  <TableCell className="pr-5 text-right sm:pr-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        aria-label={`Actions for ${user.name}`}
                        className="inline-flex size-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                      >
                        <MoreHorizontal aria-hidden="true" className="size-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => setSelectedUser(user)}>
                          <UserRound aria-hidden="true" />
                          View details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleSuspension(user.id)}>
                          <span
                            className={`size-1.5 rounded-full ${
                              user.status === "Suspended"
                                ? "bg-emerald-500"
                                : "bg-rose-500"
                            }`}
                          />
                          {user.status === "Suspended" ? "Reactivate" : "Suspend"}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => beginImpersonation(user)}>
                          <UserRoundCog aria-hidden="true" />
                          Impersonate
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filteredUsers.length === 0 && (
                <TableRow>
                  <TableCell
                    className="h-24 text-center text-sm text-slate-500"
                    colSpan={6}
                  >
                    No users match &ldquo;{search}&rdquo;.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedUser && (
        <div
          aria-labelledby="user-details-title"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 p-4"
          onClick={() => setSelectedUser(null)}
          role="dialog"
        >
          <Card
            className="w-full max-w-md border border-slate-200 bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarFallback className="bg-slate-100 font-semibold text-slate-700">
                    {selectedUser.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle id="user-details-title" className="font-semibold text-slate-950">
                    {selectedUser.name}
                  </CardTitle>
                  <p className="mt-1 text-sm text-slate-500">{selectedUser.email}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-slate-500">Company</p>
                <p className="mt-1 font-medium text-slate-800">{selectedUser.company}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Plan</p>
                <p className="mt-1 font-medium text-slate-800">{selectedUser.plan}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Status</p>
                <div className="mt-1">
                  <StatusBadge status={selectedUser.status} />
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500">Joined</p>
                <p className="mt-1 font-medium text-slate-800">{selectedUser.joined}</p>
              </div>
              <div className="col-span-2 flex justify-end border-t border-slate-100 pt-3">
                <Button onClick={() => setSelectedUser(null)} variant="outline">
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
