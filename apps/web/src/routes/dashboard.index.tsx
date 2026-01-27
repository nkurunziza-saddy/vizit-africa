import { createFileRoute, Link } from '@tanstack/react-router'
import { useAuth } from '@/context/auth-context';
import { useMyBookings } from '@/hooks/use-bookings';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, QrCode, Hotel, Users } from 'lucide-react';
import { format } from 'date-fns';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { QRCodeSVG } from 'qrcode.react';

export const Route = createFileRoute('/dashboard/')({
  component: DashboardIndex,
})

function DashboardIndex() {
  const { user } = useAuth();
  
  if (!user) return null;

  return (
    <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back, {user.full_name.split(' ')[0]}!</h2>
            <p className="text-muted-foreground">Here is an overview of your account activity.</p>
        </div>

        {user.role === 'tourist' && <TouristDashboard />}
        {user.role === 'vendor' && <VendorDashboard />}
        {user.role === 'admin' && <AdminDashboard />}
    </div>
  );
}

function TouristDashboard() {
    const { user } = useAuth();
    const { data: bookings, isLoading } = useMyBookings(user?.id);

    if (isLoading) return <div>Loading dashboard...</div>;

    const upcomingBookings = bookings?.filter(b => b.status === 'confirmed' || b.status === 'pending') || [];

    return (
        <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Your Trips</h3>
                <TabsList>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                </TabsList>
            </div>
            
            <TabsContent value="upcoming" className="space-y-4">
                {upcomingBookings.length === 0 ? (
                    <div className="text-center py-12 border border-dashed rounded-lg">
                        <CalendarDays className="mx-auto h-12 w-12 text-muted-foreground/50" />
                        <h3 className="mt-4 text-lg font-semibold">No upcoming trips</h3>
                        <p className="text-sm text-muted-foreground mb-4">You haven't booked any trips yet.</p>
                        <Link to="/listings" search={{ category: undefined, search: undefined }}><Button>Explore Destinations</Button></Link>
                    </div>
                ) : (
                    upcomingBookings.map(booking => (
                        <BookingCard key={booking.id} booking={booking} />
                    ))
                )}
            </TabsContent>
            
            <TabsContent value="past">
                <div className="text-center py-12 border border-dashed rounded-lg">
                    <p className="text-muted-foreground">No past bookings found.</p>
                </div>
            </TabsContent>
        </Tabs>
    )
}

function BookingCard({ booking }: { booking: any }) {
    // In a real app we would join with listings to get title, image etc.
    // For now we'll mock the listing details or fetch them if we had a comprehensive store
    // Let's assume we can fetch listing title or use a placeholder
    return (
        <div className="flex flex-col sm:flex-row border rounded-lg overflow-hidden hover:bg-accent/5 transition-colors">
            <div className="h-32 sm:w-48 bg-muted bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80)' }} />
            <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-semibold text-lg">Luxury Hotel Stay</h4>
                            <div className="flex items-center text-sm text-muted-foreground gap-1">
                                <MapPin className="h-3 w-3" /> Kigali, Rwanda
                            </div>
                        </div>
                        <Badge variant={booking.status === 'confirmed' ? 'default' : 'secondary'} className="capitalize">
                            {booking.status}
                        </Badge>
                    </div>
                    <div className="mt-2 text-sm">
                        <p>Date: {format(new Date(booking.created_at), 'PPP')} (Mock Date)</p>
                        <p>Amount: {booking.currency} {booking.total_amount}</p>
                    </div>
                </div>
                
                <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    {booking.status === 'confirmed' && (
                        <TicketModal booking={booking} />
                    )}
                </div>
            </div>
        </div>
    )
}

function TicketModal({ booking }: { booking: any }) {
    return (
        <Dialog>
            <DialogTrigger className="gap-2">
                    <QrCode className="h-3 w-3" /> Digital Ticket
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <div className="flex flex-col items-center justify-center p-6 space-y-6 text-center">
                    <div className="rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                        <CheckCircleIcon className="h-8 w-8" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-bold text-2xl">Booking Confirmed!</h3>
                        <p className="text-sm text-muted-foreground">Show this QR code at the reception.</p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-xl shadow-sm border">
                        <QRCodeSVG value={`VIZIT-BOOKING-${booking.id}`} size={200} />
                    </div>

                    <div className="w-full text-left space-y-2 bg-muted/50 p-4 rounded-lg text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Booking ID</span>
                            <span className="font-mono font-medium">#{booking.id}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Customer</span>
                            <span className="font-medium">Test Tourist</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-muted-foreground">Amount Paid</span>
                            <span className="font-medium">{booking.currency} {booking.total_amount}</span>
                        </div>
                    </div>

                    <Button className="w-full" onClick={() => window.print()}>Download PDF</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

function CheckCircleIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  }

function VendorDashboard() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <div className="text-muted-foreground font-bold">$</div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">$4,231.89</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
             </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
                    <Hotel className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">+2 new this month</p>
                </CardContent>
             </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Bookings</CardTitle>
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">Needs approval</p>
                </CardContent>
             </Card>
        </div>
    )
}

function AdminDashboard() {
     return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-muted-foreground">+180 from last month</p>
                </CardContent>
             </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Vendors</CardTitle>
                    <Badge variant="destructive">5</Badge>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">Requires verification</p>
                </CardContent>
             </Card>
        </div>
    )
}
