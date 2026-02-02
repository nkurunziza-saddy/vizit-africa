import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import {
  CalendarDays,
  CheckCircle,
  Hotel,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/context/auth-context";

export const Route = createFileRoute("/_app/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="space-y-4 w-64">
          <Skeleton className="h-8 w-3/4 mx-auto rounded" />
          <Skeleton className="h-4 w-1/2 mx-auto rounded" />
          <div className="flex justify-center gap-2 pt-4">
            <Skeleton className="h-10 w-24 rounded" />
            <Skeleton className="h-10 w-24 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="p-8 text-center">
        <p className="mb-4">You need to be logged in to view this page.</p>
        <Link to="/login">
          <Button className="rounded uppercase tracking-widest font-bold">
            Login
          </Button>
        </Link>
      </div>
    );
  }

  const sidebarItems = [
    {
      label: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
      roles: ["tourist", "vendor", "admin"],
    },
    {
      label: "My Bookings",
      href: "/dashboard",
      icon: CalendarDays,
      roles: ["tourist"],
    },
    {
      label: "My Listings",
      href: "/dashboard/listings",
      icon: Hotel,
      roles: ["vendor"],
    },
    {
      label: "Manage Bookings",
      href: "/dashboard/vendor-bookings",
      icon: CalendarDays,
      roles: ["vendor"],
    },
    {
      label: "Approvals",
      href: "/dashboard/approvals",
      icon: CheckCircle,
      roles: ["admin"],
    },
    {
      label: "All Users",
      href: "/dashboard/users",
      icon: Users,
      roles: ["admin"],
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      roles: ["tourist", "vendor", "admin"],
    },
  ];

  const filteredItems = sidebarItems.filter((item) =>
    item.roles.includes(user.role),
  );

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-muted/10">
      <section className="py-8">
        <div className="flex h-12 border-b items-center space-x-4 overflow-x-auto gap-2 mb-8">
          {filteredItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              activeProps={{
                className: "text-primary border-b-2 border-primary",
              }}
              className="flex items-center gap-1.5 whitespace-nowrap border-b-2 border-transparent text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary px-2"
            >
              <item.icon className="size-3.5" />
              {item.label}
            </Link>
          ))}
        </div>
        <main className="py-4 mt-4">
          <Outlet />
        </main>
      </section>
    </div>
  );
}
