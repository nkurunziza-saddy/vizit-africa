import { createFileRoute, Link, useParams } from '@tanstack/react-router'
import {
  Star,
  MapPin,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PageWrapper } from '@/components/layouts/page-wrapper';
import { useListing } from '@/hooks/use-listings';

export const Route = createFileRoute('/listings/$id')({
  component: ListingDetail,
})

function ListingDetail() {
  const { id } = useParams({ from: '/listings/$id' });
  const { data, isLoading } = useListing(parseInt(id));

  if (isLoading || !data) {
     return <div>Loading...</div>
  }

  const { listing, media } = data;

  return (
    <div className="min-h-screen bg-background flex flex-col">

      <PageWrapper className="flex-1">
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to listings
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             <div className="lg:col-span-8 space-y-8">
                <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                         <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <MapPin className="h-3 w-3" /> {listing.location_id}
                            </span>
                            <span>•</span>
                             <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-foreground text-foreground" />
                                <span className="font-semibold text-foreground">4.8</span>
                                <span>(12)</span>
                            </div>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{listing.title}</h1>
                    </div>
                </div>

                <div className="w-full h-px bg-border/50" />
                
                <div className="prose prose-gray prose-sm max-w-none">
                    <h3 className="text-lg font-semibold float-none mb-2 tracking-tight text-foreground">About</h3>
                    <p className="text-muted-foreground leading-bg">{listing.description}</p>
                </div>

                <div className="w-full h-px bg-border/50" />

                <div>
                   <h3 className="text-lg font-semibold mb-4 tracking-tight text-foreground">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Wifi", "Parking", "Pool", "Kitchen", "Air conditioning"].map((item) => (
                             <Badge key={item} variant="outline" className="px-2.5 py-1 text-xs font-normal border-border/50 text-muted-foreground">
                                {item}
                             </Badge>
                        ))}
                    </div>
                </div>
             </div>

             <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <Card className="shadow-none border border-border/50 bg-transparent">
                     <CardHeader className="pb-4 pt-6 px-6">
                         <CardTitle className="flex justify-between items-baseline">
                            <span className="text-xl font-bold">${listing.base_price} <span className="text-sm font-normal text-muted-foreground">/ night</span></span>
                         </CardTitle>
                     </CardHeader>
                     <CardContent className="space-y-4 px-6 pb-6">
                         <div className="grid grid-cols-2 gap-2">
                            <div className="border border-border/50 rounded p-2 hover:border-border transition-colors cursor-pointer">
                               <div className="text-[10px] uppercase font-medium text-muted-foreground mb-1">Check-in</div>
                               <div className="text-sm">Select date</div>
                            </div>
                            <div className="border border-border/50 rounded p-2 hover:border-border transition-colors cursor-pointer">
                               <div className="text-[10px] uppercase font-medium text-muted-foreground mb-1">Check-out</div>
                               <div className="text-sm">Select date</div>
                            </div>
                         </div>
                         
                         <Button className="w-full" size="lg">Reserve</Button>
                         <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                            <span>You won't be charged yet</span>
                         </div>
                     </CardContent>
                  </Card>
                </div>
             </div>
          </div>
      </PageWrapper>

 
    </div>
  );
};
