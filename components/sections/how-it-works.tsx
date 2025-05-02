"use client";

import { motion } from "framer-motion";
import { Camera, Brain, Globe, Layers, Headphones } from "lucide-react";

const steps = [
  {
    icon: <Camera className="h-10 w-10" />,
    title: "Capture",
    description:
      "Multi-sensor array scans surroundings, capturing visual, spatial, and contextual data in real-time.",
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Local Inference",
    description:
      "On-device neural processing analyzes data instantly without cloud dependency for privacy and speed.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Geo Context",
    description:
      "Fuses local insights with global knowledge base, historical data, and cultural context.",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "AR Overlay",
    description:
      "Generates contextually relevant augmented visuals and information over your natural field of view.",
  },
  {
    icon: <Headphones className="h-10 w-10" />,
    title: "Voice + Gesture Feedback",
    description:
      "Interact naturally through voice commands, subtle gestures, or gaze-based selections.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The ashTourguide seamlessly integrates with your travel experience
            through a streamlined multi-stage process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-4rem)] bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="relative z-10 flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-card border border-border shadow-lg">
                <div className="text-primary">{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}