import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { AtSignIcon, ChevronLeftIcon, Loader2, Lock, User } from "lucide-react";
import { FloatingPaths } from "@/components/ui/floating-paths";
import { Logo } from "@/components/logo";
import { useAuth } from "@/context/auth-context";
import { useState } from "react";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  const { login, register, isLoading } = useAuth();
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  
  // Login State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register State
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regRole, setRegRole] = useState<'tourist' | 'vendor'>('tourist');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await login(email, password);
      toast.success("Welcome back!");
      router.navigate({ to: '/' });
    } catch (error: any) {
      toast.error(error.message || "Failed to login");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await register({
        full_name: regName,
        email: regEmail,
        password_hash: regPassword, // In real app, hash this
        role: regRole,
        phone: '', // Optional for now
        preferred_currency: 'USD'
      });
      toast.success("Account created successfully!");
      
      if (regRole === 'vendor') {
          router.navigate({ to: '/dashboard' });
      } else {
          router.navigate({ to: '/' });
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to register");
    }
  }

  return (
    <main className="relative md:h-screen md:overflow-hidden lg:grid lg:grid-cols-2">
      <div className="relative hidden h-full flex-col border-r bg-secondary p-10 lg:flex dark:bg-secondary/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <Link to="/" className="z-10 w-fit">
           <div className="flex items-center gap-2 font-bold text-xl">
             <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
               <Logo className="size-4" />
             </div>
             Vizit Africa
           </div>
        </Link>

        <div className="z-10 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-xl">
              &ldquo;Vizit Africa made our family trip to Rwanda absolutely seamless. The verified listings gave us total peace of mind.&rdquo;
            </p>
            <footer className="font-mono font-semibold text-sm">
              ~ Sarah Jenkins
            </footer>
          </blockquote>
        </div>
        <div className="absolute inset-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
      </div>
      <div className="relative flex min-h-screen flex-col justify-center p-4">
        <div
          aria-hidden
          className="-z-10 absolute inset-0 isolate opacity-60 contain-strict"
        >
          <div className="-translate-y-87.5 absolute top-0 right-0 h-320 w-140 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)]" />
          <div className="absolute top-0 right-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="-translate-y-87.5 absolute top-0 right-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]" />
        </div>
        <Link to="/" className="absolute top-7 left-5">
           <Button variant="ghost" className="gap-2">
            <ChevronLeftIcon className="h-4 w-4" />
             Home
           </Button>
        </Link>
        <div className="mx-auto space-y-4 sm:w-sm">
          <div className="flex items-center gap-2 font-bold text-xl lg:hidden mb-8">
             <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
               <Logo className="size-4" />
             </div>
             Vizit Africa
           </div>
          <div className="flex flex-col space-y-1">
            <h1 className="font-bold text-2xl tracking-wide">
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </h1>
            <p className="text-base text-muted-foreground">
              {mode === 'login' ? 'Login to your Vizit Africa account.' : 'Join us to explore or list on Vizit Africa.'}
            </p>
            {mode === 'login' && (
                <p className="text-xs text-muted-foreground mt-2 bg-muted/50 p-2 rounded">
                Try: <b>admin@vizit.rw</b> (admin123) or <b>tourist@vizit.rw</b> (tourist123)
                </p>
            )}
          </div>
          <div className="space-y-2">
            <Button className="w-full" size="lg" type="button" variant="outline">
              <GoogleIcon className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
          </div>

          <div className="flex w-full items-center justify-center">
            <div className="h-px w-full bg-border" />
            <span className="px-2 text-muted-foreground text-xs">OR</span>
            <div className="h-px w-full bg-border" />
          </div>

          {mode === 'login' ? (
              <form className="space-y-4" onSubmit={handleLogin}>
                <div className="space-y-2">
                    <InputGroup>
                      <InputGroupInput
                        placeholder="your.email@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <InputGroupAddon>
                        <AtSignIcon className="h-4 w-4" />
                      </InputGroupAddon>
                    </InputGroup>
                    <InputGroup>
                      <InputGroupInput
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <InputGroupAddon>
                        <Lock className="h-4 w-4" />
                      </InputGroupAddon>
                    </InputGroup>
                </div>

                <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
                  Sign In
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <button type="button" onClick={() => setMode('register')} className="underline hover:text-primary">Sign up</button>
                </p>
              </form>
          ) : (
              <form className="space-y-4" onSubmit={handleRegister}>
                <div className="space-y-4">
                    <div className="flex justify-center">
                        <Tabs value={regRole} onValueChange={(v) => setRegRole(v as any)} className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="tourist">Tourist</TabsTrigger>
                                <TabsTrigger value="vendor">Vendor</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>

                    <div className="space-y-2">
                        <InputGroup>
                        <InputGroupInput
                            placeholder="Full Name"
                            type="text"
                            value={regName}
                            onChange={(e) => setRegName(e.target.value)}
                            required
                        />
                        <InputGroupAddon>
                            <User className="h-4 w-4" />
                        </InputGroupAddon>
                        </InputGroup>
                        
                        <InputGroup>
                        <InputGroupInput
                            placeholder="Email Address"
                            type="email"
                            value={regEmail}
                            onChange={(e) => setRegEmail(e.target.value)}
                            required
                        />
                        <InputGroupAddon>
                            <AtSignIcon className="h-4 w-4" />
                        </InputGroupAddon>
                        </InputGroup>

                        <InputGroup>
                        <InputGroupInput
                            placeholder="Create Password"
                            type="password"
                            value={regPassword}
                            onChange={(e) => setRegPassword(e.target.value)}
                            required
                        />
                        <InputGroupAddon>
                            <Lock className="h-4 w-4" />
                        </InputGroupAddon>
                        </InputGroup>
                    </div>
                </div>

                <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
                  Create Account
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <button type="button" onClick={() => setMode('login')} className="underline hover:text-primary">Sign in</button>
                </p>
              </form>
          )}

          <p className="mt-8 text-muted-foreground text-sm text-center">
            By clicking continue, you agree to our{" "}
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="#"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

const GoogleIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path d="M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669   C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62   c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401   c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z" />
    </g>
  </svg>
);