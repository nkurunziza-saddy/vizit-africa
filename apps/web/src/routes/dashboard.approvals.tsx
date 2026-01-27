import { createFileRoute } from '@tanstack/react-router'
import { useVendors, useApproveVendor } from '@/hooks/use-vendors';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Building2, User } from 'lucide-react';
import { toast } from 'sonner';

export const Route = createFileRoute('/dashboard/approvals')({
  component: ApprovalsPage,
})

function ApprovalsPage() {
  const { data: vendors, isLoading } = useVendors();
  const { mutateAsync: approveVendor, isPending: isApproving } = useApproveVendor();

  if (isLoading) return <div>Loading vendors...</div>;

  const pendingVendors = vendors?.filter(v => !v.is_approved) || [];
  const approvedVendors = vendors?.filter(v => v.is_approved) || [];

  const handleApprove = async (id: number, name: string) => {
    try {
        await approveVendor(id);
        toast.success(`${name} approved successfully`);
    } catch (error) {
        toast.error("Failed to approve vendor");
    }
  }

  return (
    <div className="space-y-8">
      <div>
          <h2 className="text-2xl font-bold tracking-tight">Vendor Approvals</h2>
          <p className="text-muted-foreground">Review and approve new vendor applications.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
            Pending Requests <Badge>{pendingVendors.length}</Badge>
        </h3>
        
        {pendingVendors.length === 0 ? (
            <div className="p-8 text-center border rounded-lg bg-muted/20">
                <CheckCircle className="mx-auto h-10 w-10 text-muted-foreground/50 mb-3" />
                <p className="text-muted-foreground">No pending approvals at the moment.</p>
            </div>
        ) : (
            <div className="grid gap-4">
                {pendingVendors.map((vendor) => (
                    <Card key={vendor.id}>
                        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                            <div>
                                <CardTitle className="text-base font-bold flex items-center gap-2">
                                    <Building2 className="h-4 w-4 text-primary" />
                                    {vendor.business_name}
                                </CardTitle>
                                <CardDescription className="mt-1 flex items-center gap-1">
                                    <User className="h-3 w-3" /> User ID: {vendor.user_id} • Type: <span className="capitalize">{vendor.vendor_type}</span>
                                </CardDescription>
                            </div>
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-600 border-yellow-200">Pending</Badge>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">{vendor.bio || "No description provided."}</p>
                            <div className="flex gap-2 justify-end">
                                <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10">
                                    <XCircle className="h-4 w-4 mr-1" /> Reject
                                </Button>
                                <Button size="sm" onClick={() => handleApprove(vendor.id, vendor.business_name)} disabled={isApproving}>
                                    <CheckCircle className="h-4 w-4 mr-1" /> Approve
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )}
      </div>

      <div className="space-y-4 pt-8 border-t">
        <h3 className="text-lg font-semibold text-muted-foreground">Recently Approved</h3>
        <div className="space-y-2 opacity-75">
            {approvedVendors.slice(0, 3).map((vendor) => (
                <div key={vendor.id} className="flex items-center justify-between p-3 border rounded-md bg-muted/10">
                    <div className="flex items-center gap-3">
                         <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <Building2 className="h-4 w-4" />
                         </div>
                         <div>
                            <p className="font-medium text-sm">{vendor.business_name}</p>
                            <p className="text-xs text-muted-foreground">Approved by Admin</p>
                         </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">Active</Badge>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
