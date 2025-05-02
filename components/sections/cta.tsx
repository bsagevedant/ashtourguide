"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function CTA() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll notify you when ashTourguide launches.",
      });
    }, 1000);
  };

  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be First to Experience ashTourguide
          </h2>
          <p className="text-muted-foreground mb-10">
            Join our waitlist to receive product updates and be notified when ashTourguide
            launches worldwide.
          </p>

          <div className="relative max-w-md mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 blur-xl" />
            <div className="relative bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/80"
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                By joining, you agree to receive updates about ashTourguide.
                We respect your privacy and will never share your information.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 mt-16">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">2,000+</span>
              <span className="text-sm text-muted-foreground">Early Adopters</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">12</span>
              <span className="text-sm text-muted-foreground">Countries</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">Q1 2026</span>
              <span className="text-sm text-muted-foreground">Launch Date</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}