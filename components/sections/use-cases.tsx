"use client";

import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    id: "X01",
    name: "Maria",
    role: "Historical Urbanist",
    image: "",
    quote: "ashTourguide revolutionized how I explore and document architectural history. The spatial mapping tools let me instantly compare current structures with historical records.",
    tag: "Beta Explorer",
  },
  {
    id: "009",
    name: "Saito",
    role: "VR Travel Vlogger",
    image: "",
    quote: "The multi-modal capture gives my audience an unprecedented level of immersion. I can share an experience exactly as I perceived it, complete with spatial audio and contextual overlays.",
    tag: "Edgewalker",
  },
  {
    id: "X54",
    name: "Alex",
    role: "Cultural Anthropologist",
    image: "",
    quote: "The real-time translation and cultural context features changed my fieldwork completely. I can observe subtleties that would otherwise require years of immersion.",
    tag: "Beta Explorer",
  },
  {
    id: "023",
    name: "Elena",
    role: "Adventure Traveler",
    image: "",
    quote: "From off-grid navigation to emergency assistance features, ashTourguide gives me confidence to explore remote areas I'd never attempt otherwise.",
    tag: "Edgewalker",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explorer Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From professional travelers to curious adventurers, hear how ashTourguide
            is transforming exploration experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="h-14 w-14 border-2 border-primary/20">
                    <AvatarFallback className="bg-muted">{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {testimonial.name}
                      <Badge variant="secondary" className="ml-2 text-xs font-normal">
                        #{testimonial.id}
                      </Badge>
                    </CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.tag}
                  </Badge>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}