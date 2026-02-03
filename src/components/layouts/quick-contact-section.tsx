import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionContainer } from "../ui/section";

export const QuickContactSection = () => {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData.get("email") as string;

		const subject = encodeURIComponent("Inquiry from Website");
		const body = encodeURIComponent(
			`Hello,\n\nI would like to get in touch.\n\nMy email: ${email}`,
		);
		window.location.href = `mailto:info@vizit.africa?subject=${subject}&body=${body}`;
	}
	return (
		<SectionContainer
			title="Email Us"
			description="Send us an email for any inquiries or support."
			align="center"
		>
			<div className="max-w-xl mx-auto text-center">
				<form
					className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto"
					onSubmit={handleSubmit}
				>
					<Input
						type="email"
						name="email"
						placeholder="Enter your email"
						className="flex-1 h-9 text-sm bg-transparent border-border/50 focus-visible:ring-0 focus-visible:border-primary"
					/>
					<Button size="sm" className="gap-2 h-9 px-4" type="submit">
						Send <Send className="h-3 w-3" />
					</Button>
				</form>

				<p className="text-[10px] text-muted-foreground mt-4">
					We'll get back to you as soon as possible.
				</p>
			</div>
		</SectionContainer>
	);
};

export default QuickContactSection;
