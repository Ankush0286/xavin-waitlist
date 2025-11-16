'use client';

import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import {
  ArrowRight,
  Sparkles,
  Star,
  BrainCircuit,
  LayoutTemplate,
} from 'lucide-react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Particles } from '@/components/ui/particles';
import { Spotlight } from '@/components/ui/spotlight';
import { useTheme } from 'next-themes';
import { Bricolage_Grotesque } from 'next/font/google';
import { cn } from '@/lib/utils';
import type { PropsWithChildren, MouseEvent } from 'react';

const brico = Bricolage_Grotesque({
  subsets: ['latin'],
});

// Sample users for the waitlist display
const users = [
  { imgUrl: 'https://avatars.githubusercontent.com/u/111780029' },
  { imgUrl: 'https://avatars.githubusercontent.com/u/123104247' },
  { imgUrl: 'https://avatars.githubusercontent.com/u/115650165' },
  { imgUrl: 'https://avatars.githubusercontent.com/u/71373838' },
];

// Utility function used by the component
const cn2 = (...classes: unknown[]) => classes.filter(Boolean).join(' ');

const InteractiveCard = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ['10deg', '-10deg']), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ['-10deg', '10deg']), springConfig);

  const glareX = useTransform(mouseX, [-0.5, 0.5], ['100%', '0%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['100%', '0%']);
  const glareOpacity = useTransform([mouseX, mouseY], ([x, y]) => (Math.abs(x) > 0 || Math.abs(y) > 0 ? 1 : 0));

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', rotateX, rotateY }}
      className={cn2('relative rounded-lg', className)}
    >
      <div
        style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}
        className="border-neutral-800 flex h-full flex-col items-center justify-center rounded-lg border bg-neutral-900/50 p-4 backdrop-blur-md"
      >
        {children}
      </div>
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-lg"
        style={{
          opacity: glareOpacity,
          background: useTransform(
            () => `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, hsla(0,0%,100%,0.1), transparent 60%)`
          ),
        }}
      />
    </motion.div>
  );
};

export default function WaitlistPage() {
  const [state, handleSubmit] = useForm('mpwkwbdj');
  const { resolvedTheme } = useTheme();

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden xl:h-screen">
      {/* --- MODIFIED SPLINE CONTAINER --- */}
      <div className="spline-container fixed top-0 left-0 h-screen w-full -z-10 hidden sm:block">
        <iframe
          src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV"
          frameBorder="0"
          width="100%"
          height="100%"
          id="aura-spline"
        ></iframe>
      </div>
      {/* --- END OF MODIFIED SPLINE CONTAINER --- */}

      <Spotlight />

      {/* Add spotlights for mobile screens */}
      <div className="block sm:hidden">
        <Spotlight
         
        />
        <Spotlight
          
          
        />
      </div>

      <Particles
        className="absolute inset-0 z-0"
        quantity={95}
        ease={80}
        refresh
      />

      <div className="relative z-[100] mx-auto max-w-2xl px-4 py-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-primary/10 from-primary/15 to-primary/5 mb-8 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 backdrop-blur-sm"
        >
          <Image src="/image.png" alt="logo" className="spin h-6 w-6" width={24} height={24} />
          <span className="text-sm font-medium">Xavin</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={cn(
            'from-foreground via-foreground/80 to-foreground/40 mb-4 cursor-crosshair bg-gradient-to-b bg-clip-text text-4xl font-bold leading-snug text-transparent sm:text-7xl',
            brico.className,
          )}
        >
          Join the{' '}
          <span className="bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Waitlist
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-muted-foreground mt-2 mb-12 sm:text-lg"
        >
          Get early access to Xavin and create the most beautiful websites with zero effort.
          <br className="hidden sm:block" />
        </motion.p>

        {/* --- CARDS SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12 hidden gap-6 sm:grid sm:grid-cols-3"
          style={{ perspective: '1000px' }}
        >
          <InteractiveCard>
            <BrainCircuit className="mb-2 h-6 w-6 text-white" />
            <span className="mb-0.5 text-lg font-bold text-white">Powered by</span>
            <span className="text-xs text-slate-400">Agentic AI</span>
          </InteractiveCard>
          <InteractiveCard>
            <LayoutTemplate className="mb-2 h-6 w-6 text-white" />
            <span className="mb-0.5 text-lg font-bold text-white">Beautiful</span>
            <span className="text-xs text-slate-400">Websites</span>
          </InteractiveCard>
          <InteractiveCard>
            <Star className="mb-2 h-6 w-6 text-white" />
            <span className="mb-0.5 text-lg font-bold text-white">Early</span>
            <span className="text-xs text-slate-400">Access</span>
          </InteractiveCard>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="mx-auto flex flex-col gap-4 sm:flex-row"
        >
          <AnimatePresence mode="wait">
            {!state.succeeded ? (
              <>
                <div className="relative flex-1">
                  <motion.input
                    key="email-input"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    className="border-primary/20 text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-primary/30 w-full rounded-xl border bg-white/5 px-6 py-4 backdrop-blur-md transition-all focus:ring-2 focus:outline-none"
                  />
                  <div className="absolute left-0 -bottom-7 text-left">
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="border-destructive/40 bg-destructive/10 text-destructive mt-2 inline-block rounded-xl border px-4 py-1 text-sm"
                    />
                  </div>
                </div>
                
                {/* --- MODIFIED BUTTON WITH TRANSPARENT BG --- */}
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="group focus:ring-primary/50 relative overflow-hidden rounded-lg border border-primary/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_20px_hsl(var(--primary)/0.3)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] focus:ring-2 focus:outline-none active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="absolute inset-0 block w-full -translate-x-full transform bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-full"></span>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {state.submitting ? 'Joining...' : 'Join Waitlist'}
                    <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  </span>
                </motion.button>
                {/* --- END OF MODIFIED BUTTON --- */}

              </>
            ) : (
              <motion.div
                key="thank-you-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className={cn(
                  'border-primary/20 from-primary/10 to-primary/10 text-primary flex-1 cursor-pointer rounded-xl border bg-gradient-to-r via-transparent px-6 py-4 font-medium backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:brightness-125',
                  resolvedTheme === 'dark' ? 'glass' : 'glass2',
                )}
              >
                <span className="flex items-center justify-center gap-2">
                  Thanks for joining!{' '}
                  <Sparkles className="h-4 w-4 animate-pulse" />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 flex items-center justify-center gap-1"
        >
          <div className="flex -space-x-3">
            {users.map((user, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: -10 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.2 }}
                className="border-background from-primary size-10 rounded-full border-2 bg-gradient-to-r to-blue-500 p-[2px]"
              >
                <div className="overflow-hidden rounded-full">
                  <Image
                    src={user.imgUrl}
                    alt="Avatar"
                    className="rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6"
                    width={40}
                    height={40}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-muted-foreground ml-2"
          >
            <span className="text-primary font-semibold">100+</span> already
            joined ✨
          </motion.span>
        </motion.div>
      </div>
    </main>
  );
}