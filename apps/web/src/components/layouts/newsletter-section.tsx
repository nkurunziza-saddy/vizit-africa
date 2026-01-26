import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export const NewsletterSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">Stay Updated</h2>
          <p className="text-muted-foreground text-sm">
            Subscribe to our newsletter for exclusive deals.
          </p>
        </div>

        <form className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-9 text-sm bg-transparent border-border/50 focus-visible:ring-0 focus-visible:border-primary"
          />
          <Button size="sm" className="gap-2 h-9 px-4">
            Subscribe <Send className="h-3 w-3" />
          </Button>
        </form>

        <p className="text-[10px] text-muted-foreground mt-4">
          Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
