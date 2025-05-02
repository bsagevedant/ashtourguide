"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Radio, Compass, Glasses, Smartphone, Cpu } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "UWB + LIDAR for SLAM-based Mapping",
    description:
      "Ultra-wideband positioning combined with LIDAR creates millimeter-accurate spatial awareness for real-time environment mapping.",
    icon: <Compass className="h-10 w-10" />,
  },
  {
    title: "Local Neural Processing",
    description:
      "Edge TPU with fused NPU array (7 TOPS) processes multi-modal inputs without cloud dependency for instant response.",
    icon: <BrainCircuit className="h-10 w-10" />,
  },
  {
    title: "High-Definition AR Overlay",
    description:
      "1080p per-eye microLED displays with 120Hz refresh rate and 95° FOV offer crystal-clear augmented reality information.",
    icon: <Glasses className="h-10 w-10" />,
  },
  {
    title: "Adaptive Multi-Band Radio",
    description:
      "Software-defined radio system automatically switches between cellular, WiFi-6E, and proprietary mesh protocols for uninterrupted connectivity.",
    icon: <Radio className="h-10 w-10" />,
  },
  {
    title: "Swarm Intelligence Integration",
    description:
      "Federated learning across nearby ashTourguide devices builds collaborative intelligence with every user's experience.",
    icon: <Cpu className="h-10 w-10" />,
  },
  {
    title: "Seamless Ecosystem Integration",
    description:
      "Native connectivity with smartphones, smartwatches, and cloud services for unified data flow and personalized experiences.",
    icon: <Smartphone className="h-10 w-10" />,
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 bg-muted/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cutting-Edge Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ashTourguide combines advanced hardware with sophisticated algorithms to
            create an unparalleled travel experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:bg-card/80 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}