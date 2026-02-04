import { createFileRoute } from "@tanstack/react-router";
import { PageWrapper } from "@/components/layouts/page-wrapper";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/_app/contact")({
  component: ContactPage,
});

export function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-10 md:py-20">
      <PageWrapper>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-8">Contact Us</h1>

          <div className="bg-card rounded-xl overflow-hidden shadow-lg border grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
            {/* Left Column - Blue */}
            <div className="md:col-span-4 bg-[#3B5998] p-8 md:p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-8">Contact information</h2>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold opacity-80">
                      Location
                    </h3>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5" />
                      <span>Kedly@vizit.africa</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold opacity-80">
                      Call Us
                    </h3>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5" />
                      <span>07896574312</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold opacity-80">
                      Mail us
                    </h3>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5" />
                      <span>KK234st ,Ave 345</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - White */}
            <div className="md:col-span-8 p-8 md:p-12 bg-white flex flex-col justify-center">
              <div className="max-w-md w-full mx-auto space-y-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                  Send Us a Message
                </h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500">
                      Your Names
                    </label>
                    <Input
                      placeholder="Enter Your Names"
                      className="h-12 bg-gray-50 border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500">
                      Email Address
                    </label>
                    <Input
                      placeholder="Enter Your Email Address"
                      className="h-12 bg-gray-50 border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500">
                      Message
                    </label>
                    <Textarea
                      placeholder="Your message ......."
                      className="min-h-[150px] bg-gray-50 border-gray-200 resize-none p-4"
                    />
                  </div>
                </div>

                <Button className="bg-[#3B5998] hover:bg-[#2d4373] text-white px-8 h-11">
                  Submit Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
