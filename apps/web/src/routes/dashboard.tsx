import { createFileRoute, Outlet, Link } from '@tanstack/react-router'
import { useAuth } from '@/context/auth-context';
import { PageWrapper } from '@/components/layouts/page-wrapper';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  CalendarDays, 
  Settings, 
  LogOut, 
  Hotel,
  Users,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
  beforeLoad: () => {
    // We can't easily access auth context inside beforeLoad without a more complex setup 
    // or passing it via router context. For now, we'll handle redirect in component 
    // or rely on the fact that the component checks it.
    // However, strictly speaking, we should check here. 
    // Since we are using a client-side auth context, we'll do the check in the component for simplicity
    // or assume the Router Context has it if we wired it up.
  }
})

function DashboardLayout() {
  const { user, isAuthenticated, logout, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    // This is a client-side redirect fallback
    return <div className="p-8 text-center">
        <p className="mb-4">You need to be logged in to view this page.</p>
        <Link to="/login"><Button>Login</Button></Link>
    </div>;
  }

  const sidebarItems = [
    {
      label: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
      roles: ['tourist', 'vendor', 'admin']
    },
    {
      label: "My Bookings",
      href: "/dashboard",
      icon: CalendarDays,
      roles: ['tourist']
    },
    {
      label: "My Listings",
      href: "/dashboard/listings",
      icon: Hotel,
      roles: ['vendor']
    },
    {
      label: "Manage Bookings", // For vendors to see who booked their places
      href: "/dashboard/vendor-bookings",
      icon: CalendarDays,
      roles: ['vendor']
    },
    {
        label: "Approvals",
        href: "/dashboard/approvals",
        icon: CheckCircle,
        roles: ['admin']
    },
    {
        label: "All Users",
        href: "/dashboard/users",
        icon: Users,
        roles: ['admin']
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      roles: ['tourist', 'vendor', 'admin']
    }
  ];

  const filteredItems = sidebarItems.filter(item => item.roles.includes(user.role));

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <PageWrapper className="py-8">
        <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full md:w-64 flex-none space-y-4">
                <div className="bg-card border rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 px-2">
                         <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                            {user.full_name.charAt(0)}
                         </div>
                         <div className="overflow-hidden">
                            <p className="font-semibold truncate">{user.full_name}</p>
                            <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
                         </div>
                    </div>
                    
                    <nav className="space-y-1">
                        {filteredItems.map((item) => (
                            <Link 
                                key={item.href}
                                to={item.href}
                                activeProps={{ className: "bg-accent text-accent-foreground" }}
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/50 transition-colors"
                            >
                                <item.icon className="h-4 w-4" />
                                {item.label}
                            </Link>
                        ))}
                        <button 
                            onClick={() => {
                                logout();
                                toast.success("Logged out successfully");
                            }}
                            className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors text-left"
                        >
                            <LogOut className="h-4 w-4" />
                            Sign Out
                        </button>
                    </nav>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0">
                <div className="bg-card border rounded-lg p-6 shadow-sm min-h-[500px]">
                    <Outlet />
                </div>
            </main>
        </div>
      </PageWrapper>
    </div>
  );
}
