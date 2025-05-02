"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type SpecCategory = {
  name: string;
  specs: { name: string; value: string }[];
};

const techSpecs: SpecCategory[] = [
  {
    name: "Sensors",
    specs: [
      { name: "Spatial", value: "TOF + LIDAR + 3D Depth Camera + Dual RGB" },
      { name: "Motion", value: "9-axis IMU (Gyro + Accelerometer + Magnetometer)" },
      { name: "Environmental", value: "Temperature, Humidity, Pressure, Light" },
      { name: "Biometric", value: "PPG + GSR for adaptive response" },
      { name: "Audio", value: "Quad-mic array with beamforming + bone conduction" },
    ],
  },
  {
    name: "Neural Core",
    specs: [
      { name: "Processor", value: "Edge TPU with fused NPU array (7 TOPS)" },
      { name: "Architecture", value: "Custom neural fabric with sparse execution" },
      { name: "Memory", value: "8GB LPDDR5 + 2GB dedicated tensor memory" },
      { name: "Storage", value: "128GB UFS 3.1 with dedicated ML partition" },
      { name: "Runtime", value: "TinyML + Custom inference engine" },
    ],
  },
  {
    name: "AR HUD",
    specs: [
      { name: "Display", value: "Dual 1080p microLED with 120Hz refresh rate" },
      { name: "Field of View", value: "95° diagonal with adaptive brightness" },
      { name: "Eye-tracking", value: "60Hz infrared tracking for foveated rendering" },
      { name: "Interface", value: "Gaze + gesture + voice triple input" },
      { name: "Focal planes", value: "Multi-depth focal system (0.5m - infinity)" },
    ],
  },
  {
    name: "Connectivity",
    specs: [
      { name: "Cellular", value: "eSIM 5G with global frequency compatibility" },
      { name: "Wi-Fi", value: "Wi-Fi 6E (802.11ax) tri-band" },
      { name: "Bluetooth", value: "BT 5.3 with LE Audio and Auracast" },
      { name: "UWB", value: "Ultra-wideband positioning chip for cm-level accuracy" },
      { name: "Mesh", value: "BLE Mesh Swarm Mode for device-to-device comms" },
    ],
  },
  {
    name: "Battery",
    specs: [
      { name: "Capacity", value: "4,500 mAh dual-cell with smart power routing" },
      { name: "Runtime", value: "Up to 6 hours continuous AR, 14 hours standby" },
      { name: "Fast charging", value: "65W USB-C PD with 50% in 15 minutes" },
      { name: "Wireless", value: "Qi-certified 15W with reverse charging" },
      { name: "Thermal", value: "Graphene heat dissipation system" },
    ],
  },
];

export function TechSpecs() {
  return (
    <section id="specs" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ashTourguide represents the pinnacle of wearable technology, combining advanced sensors, 
            powerful processing, and seamless connectivity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue={techSpecs[0].name} className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 md:grid-cols-5 mb-8">
              {techSpecs.map((category) => (
                <TabsTrigger key={category.name} value={category.name} className="text-xs md:text-sm">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {techSpecs.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <div className="rounded-lg border bg-card/50 backdrop-blur-sm">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/3">Component</TableHead>
                        <TableHead>Specification</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.specs.map((spec) => (
                        <TableRow key={spec.name}>
                          <TableCell className="font-medium">{spec.name}</TableCell>
                          <TableCell>{spec.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}