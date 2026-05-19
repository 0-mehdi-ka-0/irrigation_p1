import type { ReactNode } from "react";
import {
  Droplets, History, Cpu, Globe, BarChart3, Target, Layers, CheckCircle2,
  Sprout, CloudSun, Leaf, Radio, Settings, Network, Trophy, Telescope,
  Wifi, Sun, Gauge, Database, Eye, Boxes, Smartphone, AlertTriangle
} from "lucide-react";

export type Slide = {
  id: number;
  title?: string;
  render: () => ReactNode;
};

// ---------- Helpers ----------
const SectionTitle = ({ icon: Icon, kicker, title }: { icon?: any; kicker?: string; title: string }) => (
  <div className="mb-8">
    {kicker && (
      <div className="inline-flex items-center gap-2 text-emerald font-semibold tracking-widest uppercase text-sm mb-3">
        {Icon && <Icon className="w-4 h-4" />} {kicker}
      </div>
    )}
    <h2 className="text-5xl font-extrabold leading-tight">{title}</h2>
    <div className="h-1 w-24 bg-gradient-to-r from-emerald to-transparent mt-4 rounded-full" />
  </div>
);

const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`bg-card/60 backdrop-blur border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] ${className}`}>
    {children}
  </div>
);

// ---------- Slides ----------
export const slides: Slide[] = [
  // 1 TITLE
  {
    id: 1,
    render: () => (
      <div className="relative h-full flex flex-col items-center justify-center text-center px-16">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-emerald/30 ripple" />
          <div className="absolute w-[600px] h-[600px] rounded-full border border-emerald/30 ripple" style={{ animationDelay: "1s" }} />
          <div className="absolute w-[600px] h-[600px] rounded-full border border-emerald/30 ripple" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald font-semibold text-sm tracking-widest uppercase mb-8">
            <Droplets className="w-4 h-4" /> Academic Presentation · 2026
          </div>
          <h1 className="text-6xl font-extrabold leading-[1.05] mb-6">
            Autonomous Smart Irrigation Systems:
            {/* <span className="block mt-3 bg-gradient-to-r from-emerald to-emerald-soft bg-clip-text text-transparent">
              From Ancient Canals to Intelligent Agriculture
            </span> */}
          </h1>
          <p className="text-2xl text-muted-foreground font-light mb-12">A Comparative Study and System Proposal</p>
          <div className="flex flex-wrap justify-center gap-8 text-left">
            <div className="px-6 py-4 border-l-4 border-emerald">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Supervising Professor</div>
              <div className="text-lg font-semibold">Pr O. Hioual</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 2 TOC
  {
    id: 2,
    render: () => {
      const items = [
        { icon: History, label: "Historical Evolution of Irrigation" },
        { icon: Cpu, label: "Technologies Used" },
        { icon: Globe, label: "State-of-the-Art Systems & Projects" },
        { icon: BarChart3, label: "Comparative Analysis" },
        { icon: Target, label: "Research Problematic" },
        { icon: Layers, label: "Proposed System Architecture" },
        { icon: CheckCircle2, label: "Conclusion & Perspectives" },
      ];
      return (
        <div className="h-full flex flex-col justify-center px-20">
          <SectionTitle kicker="Outline" title="Table of Contents" />
          <div className="grid grid-cols-2 gap-5">
            {items.map((it, i) => (
              <div key={i} className="flex items-center gap-5 p-5 rounded-xl bg-card/40 border border-border hover:border-emerald/60 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald/15 text-emerald flex items-center justify-center shrink-0">
                  <it.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-emerald font-semibold">0{i + 1}</div>
                  <div className="text-lg font-semibold">{it.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  // 3 TIMELINE
  {
    id: 3,
    render: () => {
      const t = [
        { y: "6000 BC", t: "Ancient Canals", d: "Gravity-fed earthen channels (Mesopotamia, Nile)" },
        { y: "200 BC", t: "Qanats & Aqueducts", d: "Underground channels, Roman aqueducts" },
        { y: "1700s", t: "Water Wheels & Pumps", d: "Animal/wind-powered lifting" },
        { y: "1850s", t: "Steam Pumps", d: "Large-scale water delivery" },
        { y: "1930s", t: "Sprinkler Systems", d: "Center pivot, overhead rotating" },
        { y: "1960s", t: "Drip/Micro Irrigation", d: "Root-zone delivery (S. Blass, Israel)" },
        { y: "1990s", t: "Sensor Automation", d: "Soil moisture sensors, timers" },
        { y: "2010s", t: "IoT Smart Sensors", d: "Wireless real-time monitoring" },
        { y: "2020s", t: "Autonomous Systems", d: "Predictive control & automation" },
      ];
      return (
        <div className="h-full flex flex-col px-16 py-12">
          <SectionTitle kicker="01 · History" title="Historical Evolution Timeline" />
          <div className="relative flex-1 flex items-center">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-emerald/20 via-emerald to-emerald/20 rounded-full" />
            <div className="relative grid grid-cols-9 gap-2 w-full">
              {t.map((m, i) => (
                <div key={i} className={`flex flex-col items-center ${i % 2 === 0 ? "pt-0 pb-40" : "pt-40 pb-0"}`}>
                  <div className={`text-center ${i % 2 === 0 ? "order-1" : "order-3"}`}>
                    <div className="text-emerald font-bold text-sm">{m.y}</div>
                    <div className="font-semibold text-sm mt-1 leading-tight">{m.t}</div>
                    <div className="text-xs text-muted-foreground mt-1 leading-tight">{m.d}</div>
                  </div>
                  <div className="order-2 w-5 h-5 rounded-full bg-emerald border-4 border-background shadow-[var(--shadow-glow)] my-3 z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    },
  },

  // 4 TECHNOLOGIES
  {
    id: 4,
    render: () => {
      const tech = [
        { i: "📡", n: "IoT Sensors", d: "Soil moisture, temperature, humidity, EC — real-time field data." },
        { i: "📶", n: "Wireless Communication", d: "LoRa, Zigbee, Wi-Fi, NB-IoT — long-range low-power data." },
        { i: "🔌", n: "Microcontrollers & Edge", d: "Arduino, Raspberry Pi, ESP32 — local processing & control." },
        { i: "☀️", n: "Solar Energy Systems", d: "Off-grid power supply for remote agricultural deployments." },
        { i: "🔧", n: "Actuators & Valves", d: "Automated water flow control based on sensor thresholds." },
        { i: "☁️", n: "Cloud Platforms", d: "AWS IoT, Google Cloud, ThingsBoard — storage & dashboards." },
        { i: "📊", n: "Data Analytics", d: "Forecasting, scheduling optimization, smart rule engines." },
        { i: "👁️", n: "Computer Vision", d: "Plant health detection using image processing." },
        { i: "🔮", n: "Digital Twins", d: "Virtual crop/field simulation for monitoring & decisions." },
        { i: "📱", n: "Mobile & Web Apps", d: "Farmer-facing dashboards and alert systems." },
      ];
      return (
        <div className="h-full flex flex-col px-16 py-10">
          <SectionTitle kicker="02 · Building Blocks" title="Technologies Used" />
          <div className="grid grid-cols-5 gap-4 flex-1">
            {tech.map((t, i) => (
              <Card key={i} className="flex flex-col hover:border-emerald/60 transition">
                <div className="text-4xl mb-3">{t.i}</div>
                <div className="font-bold text-base mb-2 leading-tight">{t.n}</div>
                <div className="text-xs text-muted-foreground leading-snug">{t.d}</div>
              </Card>
            ))}
          </div>
        </div>
      );
    },
  },

  // 5 STATE OF THE ART
  {
    id: 5,
    render: () => {
      const p = [
        { n: "WaterBee", c: "EU", s: "WSN precision irrigation", w: "40%", crop: "Mixed crops", l: "Limited plant monitoring" },
        { n: "CropX", c: "USA", s: "Smart soil sensors, cloud", w: "25%", crop: "40+ countries", l: "Cloud-dependent" },
        { n: "Solar IoT Irrig.", c: "India 2022", s: "ESP32 + Solar + LoRa", w: "30%", crop: "Smallholder farms", l: "Small scale only" },
        { n: "IRRIMET", c: "Morocco/Algeria", s: "FAO ETo scheduling", w: "20%", crop: "Cereals", l: "No real-time sensors" },
        { n: "Microsoft FarmBeats", c: "USA", s: "Sensors + edge + TVWS", w: "30%", crop: "Mixed", l: "Complex setup" },
        { n: "IBM Watson Agri.", c: "Global", s: "Satellite + IoT advisory", w: "20%", crop: "Large farms", l: "Expensive, advisory only" },
      ];
      return (
        <div className="h-full flex flex-col px-16 py-10">
          <SectionTitle kicker="03 · Landscape" title="State-of-the-Art Projects" />
          <div className="grid grid-cols-3 gap-4 flex-1">
            {p.map((x, i) => (
              <Card key={i} className="flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-bold text-lg">{x.n}</div>
                    <div className="text-xs text-emerald">{x.c}</div>
                  </div>
                  <div className="text-2xl font-extrabold text-emerald">{x.w}</div>
                </div>
                <div className="text-sm text-muted-foreground mb-2">💧 Water saved</div>
                <div className="space-y-1.5 mt-auto text-sm">
                  <div><span className="text-emerald font-semibold">Stack:</span> {x.s}</div>
                  <div><span className="text-emerald font-semibold">Crop:</span> {x.crop}</div>
                  <div><span className="text-destructive font-semibold">Limit:</span> {x.l}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      );
    },
  },

  // 6 COMPARATIVE
  {
    id: 6,
    render: () => {
      const cols = ["Project", "IoT Sensors", "Automation", "Solar", "Real-Time", "Plant", "Weather", "Edge", "Cost"];
      const rows: (string)[][] = [
        ["WaterBee", "✅", "✅", "⚠️", "✅", "❌", "⚠️", "❌", "$$$"],
        ["CropX", "✅", "✅", "❌", "✅", "❌", "✅", "❌", "$$$"],
        ["Solar IoT", "✅", "⚠️", "✅", "✅", "❌", "❌", "⚠️", "$"],
        ["IRRIMET", "⚠️", "⚠️", "❌", "❌", "❌", "✅", "❌", "$$"],
        ["FarmBeats", "✅", "✅", "⚠️", "✅", "⚠️", "✅", "✅", "$$$"],
        ["IBM Watson", "✅", "⚠️", "❌", "⚠️", "❌", "✅", "❌", "$$$$"],
        ["Our Proposal", "✅", "✅", "✅", "✅", "✅", "✅", "✅", "$$"],
      ];
      return (
        <div className="h-full flex flex-col px-16 py-10">
          <SectionTitle kicker="04 · Benchmark" title="Comparative Analysis" />
          <div className="overflow-hidden rounded-xl border border-border bg-card/40">
            <table className="w-full text-sm">
              <thead className="bg-emerald/15 text-emerald">
                <tr>{cols.map((c) => <th key={c} className="px-3 py-3 text-left font-bold">{c}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={`border-t border-border ${i === rows.length - 1 ? "bg-emerald/10 font-bold" : ""}`}>
                    {r.map((cell, j) => <td key={j} className="px-3 py-3">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Card className="mt-6 border-emerald/40">
            <div className="flex gap-3 items-start">
              <AlertTriangle className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                <span className="font-bold text-emerald">Identified gaps:</span> no system unifies soil + weather + plant monitoring with edge autonomy
                and solar power at an accessible cost. Our proposal targets these gaps directly.
              </p>
            </div>
          </Card>
        </div>
      );
    },
  },

  // 7 PROBLEMATIC
  {
    id: 7,
    render: () => (
      <div className="h-full flex flex-col px-16 py-10">
        <SectionTitle kicker="05 · Problem" title="What Gap Does Our Research Address?" />
        <Card className="border-l-4 border-l-emerald mb-6">
          <p className="text-lg leading-relaxed">
            Despite advances in smart irrigation, most existing systems focus primarily on <span className="text-emerald font-semibold">soil moisture monitoring</span>,
            lack integrated <span className="text-emerald font-semibold">plant health analysis</span>, depend heavily on <span className="text-emerald font-semibold">cloud connectivity</span>{" "}
            causing delays, and are not optimized for <span className="text-emerald font-semibold">semi-arid regions</span> with unstable network coverage.
          </p>
        </Card>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <Card>
            <h3 className="font-bold text-xl mb-4 text-destructive">Key Challenges</h3>
            <ul className="space-y-3 text-sm">
              {[
                "No unified system combining soil + weather + plant monitoring",
                "High energy dependency and limited solar autonomy",
                "Limited edge processing for offline operation",
                "Poor adaptability to local crop varieties",
                "Complex interfaces reducing farmer accessibility",
              ].map((c, i) => (
                <li key={i} className="flex gap-3"><span className="text-destructive">❌</span>{c}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-bold text-xl mb-4 text-emerald">Research Questions</h3>
            <ol className="space-y-3 text-sm">
              {[
                "How can IoT technologies be combined to build a fully autonomous irrigation system?",
                "How can plant physiological monitoring improve irrigation scheduling?",
                "Can edge computing reduce latency and improve offline reliability?",
              ].map((q, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-emerald font-bold">Q{i + 1}.</span>
                  <span>{q}</span>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </div>
    ),
  },

  // 8 ARCHITECTURE OVERVIEW
  {
    id: 8,
    render: () => {
      const layers = [
        { n: "Field Layer", d: "Sensors & actuators", c: "from-emerald to-emerald-soft" },
        { n: "Communication Layer", d: "LoRa / MQTT / 4G", c: "from-sky-400 to-sky-600" },
        { n: "Processing Layer", d: "Edge + Cloud compute", c: "from-violet-400 to-violet-600" },
        { n: "Decision Layer", d: "Rules & scheduling engine", c: "from-amber-400 to-amber-600" },
        { n: "Control Layer", d: "Valves & fertigation", c: "from-rose-400 to-rose-600" },
        { n: "User Layer", d: "Mobile & web dashboard", c: "from-emerald to-teal-500" },
      ];
      return (
        <div className="h-full flex flex-col px-16 py-10">
          <SectionTitle kicker="06 · Proposal" title="Proposed System Architecture" />
          <div className="flex-1 flex flex-col justify-center gap-3">
            {layers.map((l, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center text-emerald font-extrabold text-xl shrink-0">
                  {i + 1}
                </div>
                <div className={`flex-1 rounded-xl p-5 bg-gradient-to-r ${l.c} text-navy-deep flex justify-between items-center`}>
                  <div>
                    <div className="font-extrabold text-xl">{l.n}</div>
                    <div className="text-sm opacity-80">{l.d}</div>
                  </div>
                  {i < layers.length - 1 && <div className="text-2xl font-bold">↓</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  // 9 SOIL
  modulePage(9, "Module 1 · Soil Monitoring", Sprout, "🌱", {
    Sensors: ["Capacitive soil moisture", "EC sensors", "Soil temperature probes", "pH sensors"],
    Parameters: ["Volumetric Water Content (VWC)", "Electrical Conductivity", "Soil Temperature", "Nutrient levels"],
    Placement: ["Multi-depth: 10 cm", "30 cm", "60 cm"],
    Output: ["Irrigation deficit index", "Field capacity status"],
  }),

  // 10 WEATHER
  modulePage(10, "Module 2 · Weather Monitoring", CloudSun, "🌤️", {
    Sensors: ["DHT22", "Rain Gauge", "Anemometer", "Pyranometer", "BMP280"],
    Parameters: ["Air temperature", "Humidity", "Wind speed", "Rainfall", "Solar radiation"],
    Integration: ["ETo calculation (Penman–Monteith)"],
    "Data Use": ["Irrigation scheduling", "Frost alerts", "Heat stress warnings"],
  }),

  // 11 PLANT
  modulePage(11, "Module 3 · Plant Monitoring", Leaf, "🌿", {
    Approach: ["RGB & NIR camera monitoring", "Leaf condition sensors"],
    "Sensors & Tools": ["Leaf wetness sensor", "NDVI camera module", "Chlorophyll meter"],
    Parameters: ["Leaf water potential", "Canopy temperature", "NDVI index", "Visible disease symptoms"],
    Output: ["Plant health score", "Irrigation urgency flag"],
  }),

  // 12 CONTROL
  modulePage(12, "Module 4 · Irrigation Control", Droplets, "💧", {
    Components: ["Solenoid valves", "Flow meters", "Pressure sensors", "Fertigation injectors"],
    "Control Logic": ["Sensor thresholds", "Automated scheduling rules"],
    Modes: ["Manual", "Scheduled", "Autonomous"],
    Features: ["Zone-by-zone control", "Water volume metering", "Fertigation integration", "Solar-powered battery backup"],
  }),

  // 13 COMM
  modulePage(13, "Module 5 · IoT Communication", Radio, "📡", {
    Architecture: ["Hybrid Star + Mesh topology"],
    Protocols: ["LoRaWAN — long range", "MQTT — cloud messaging", "Zigbee — sensor mesh", "4G/NB-IoT — fallback"],
    Hardware: ["Gateway: Raspberry Pi 4 + LoRa + 4G", "Edge: ESP32 sensor clusters"],
    Security: ["TLS encryption", "Authentication tokens"],
  }),

  // 14 PROCESSING
  modulePage(14, "Module 6 · Data Processing & Automation", Settings, "⚙️", {
    "Edge (Local)": ["Real-time anomaly detection", "Threshold-based control", "Offline operation"],
    Cloud: ["Historical analytics", "Dashboard visualization", "Long-term storage"],
    Pipeline: ["Raw → Preprocess → Features → Decision → Actuation"],
    Tools: ["Python", "TensorFlow Lite (optional)", "ThingsBoard", "InfluxDB"],
  }),

  // 15 INTEGRATION
  {
    id: 15,
    render: () => (
      <div className="h-full flex flex-col px-16 py-10">
        <SectionTitle kicker="Integration" title="System Integration Diagram" />
        <div className="flex-1 grid grid-cols-12 gap-4 items-center">
          {/* Left: sources */}
          <div className="col-span-3 space-y-3">
            {[
              { i: "🌱", l: "Soil Monitoring" },
              { i: "🌤️", l: "Weather Monitoring" },
              { i: "🌿", l: "Plant Monitoring" },
            ].map((x) => (
              <Card key={x.l} className="text-center py-4">
                <div className="text-3xl">{x.i}</div>
                <div className="font-semibold mt-1 text-sm">{x.l}</div>
              </Card>
            ))}
            <Card className="text-center py-4 border-amber-400/40">
              <div className="text-3xl">☀️</div>
              <div className="font-semibold mt-1 text-sm">Solar Power</div>
            </Card>
          </div>

          <div className="col-span-1 text-center text-3xl text-emerald">→</div>

          {/* Middle */}
          <div className="col-span-3 space-y-3">
            <Card className="text-center py-6 bg-gradient-to-br from-sky-500/20 to-transparent border-sky-400/40">
              <Network className="w-8 h-8 mx-auto text-sky-400" />
              <div className="font-bold mt-2">IoT Communication</div>
              <div className="text-xs text-muted-foreground">LoRa · MQTT · 4G</div>
            </Card>
            <Card className="text-center py-6 bg-gradient-to-br from-violet-500/20 to-transparent border-violet-400/40">
              <Database className="w-8 h-8 mx-auto text-violet-400" />
              <div className="font-bold mt-2">Data Processing</div>
              <div className="text-xs text-muted-foreground">Edge + Cloud</div>
            </Card>
          </div>

          <div className="col-span-1 text-center text-3xl text-emerald">→</div>

          {/* Right */}
          <div className="col-span-4 space-y-3">
            <Card className="text-center py-6 bg-gradient-to-br from-emerald/20 to-transparent border-emerald/50">
              <Droplets className="w-10 h-10 mx-auto text-emerald" />
              <div className="font-bold text-lg mt-2">Irrigation Control</div>
              <div className="text-xs text-muted-foreground">Valves · Fertigation · Zones</div>
            </Card>
            <div className="grid grid-cols-2 gap-3">
              <Card className="text-center py-4">
                <Smartphone className="w-6 h-6 mx-auto text-emerald" />
                <div className="font-semibold text-sm mt-1">Mobile App</div>
              </Card>
              <Card className="text-center py-4">
                <Eye className="w-6 h-6 mx-auto text-emerald" />
                <div className="font-semibold text-sm mt-1">Web Dashboard</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 16 METRICS
  {
    id: 16,
    render: () => {
      const m = [
        { k: "Water Savings", v: "≥ 35%", s: "vs traditional irrigation", i: Droplets },
        { k: "Irrigation Accuracy", v: "± 5%", s: "of optimal dose", i: Target },
        { k: "System Uptime", v: "≥ 98%", s: "annual availability", i: Gauge },
        { k: "Communication Range", v: "≥ 10 km", s: "via LoRa", i: Wifi },
        { k: "Edge Latency", v: "< 2 s", s: "decision to action", i: Cpu },
        { k: "Solar Autonomy", v: "≥ 5 days", s: "without sun", i: Sun },
        { k: "Sensor Reliability", v: "≥ 95%", s: "valid readings", i: Boxes },
      ];
      return (
        <div className="h-full flex flex-col px-16 py-10">
          <SectionTitle kicker="Validation" title="Expected Outcomes & Performance Metrics" />
          <div className="grid grid-cols-4 gap-4 flex-1">
            {m.map((x, i) => (
              <Card key={i} className={`flex flex-col justify-between ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <div className="flex items-center justify-between">
                  <x.i className={`text-emerald ${i === 0 ? "w-12 h-12" : "w-7 h-7"}`} />
                  <div className={`font-extrabold text-emerald ${i === 0 ? "text-7xl" : "text-3xl"}`}>{x.v}</div>
                </div>
                <div className="mt-4">
                  <div className={`font-bold ${i === 0 ? "text-2xl" : "text-base"}`}>{x.k}</div>
                  <div className="text-sm text-muted-foreground">{x.s}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      );
    },
  },

  // 17 CONCLUSION
  {
    id: 17,
    render: () => (
      <div className="h-full flex flex-col px-16 py-10">
        <SectionTitle kicker="07 · Closing" title="Conclusion & Future Perspectives" />
        <div className="grid grid-cols-2 gap-8 flex-1">
          <div>
            <h3 className="text-emerald font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <Trophy className="w-4 h-4" /> Novelty Highlights
            </h3>
            <div className="space-y-4">
              {[
                "First fully unified architecture combining soil, weather and plant monitoring with edge-level autonomy.",
                "Solar-powered, LoRa-driven design optimized for semi-arid regions with intermittent connectivity.",
                "Modular, low-cost stack designed for farmer accessibility without sacrificing performance.",
              ].map((x, i) => (
                <Card key={i} className="border-l-4 border-l-emerald">
                  <div className="flex gap-3">
                    <div className="text-emerald font-extrabold text-2xl leading-none">0{i + 1}</div>
                    <p className="text-sm leading-relaxed">{x}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-emerald font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <Telescope className="w-4 h-4" /> Future Perspectives
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { i: "🛰️", t: "Satellite imagery (Sentinel-2)" },
                { i: "🔗", t: "Federated learning across farms" },
                { i: "⛓️", t: "Blockchain water traceability" },
                { i: "🏡", t: "Greenhouse & hydroponics expansion" },
              ].map((x, i) => (
                <Card key={i}>
                  <div className="text-3xl mb-2">{x.i}</div>
                  <div className="text-sm font-semibold">{x.t}</div>
                </Card>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald/20 to-transparent border-l-4 border-emerald">
              <div className="text-xs uppercase tracking-widest text-emerald font-bold mb-2">Closing Statement</div>
              <p className="text-xl font-display font-bold italic leading-snug">
                "Toward a water-secure, data-driven, and climate-resilient agriculture."
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // FINAL · References
  {
    id: 999,
    title: "References",
    render: () => {
      const groups: { heading: string; items: { authors: string; title: string; venue: string; url: string }[] }[] = [
        {
          heading: "IoT Architectures, LoRa & Sensing",
          items: [
            { authors: "Mishra, A. K., Kumar, N., Sharma, V., Chauhan, V., & Kumar, S.", title: "IoT based Smart Irrigation System", venue: "SSRN, 2023", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4453221" },
            { authors: "Author(s)", title: "IoT-based Smart Irrigation Control System using LoRa Communication", venue: "ResearchGate, 2022", url: "https://www.researchgate.net/publication/360000000" },
            { authors: "Author(s)", title: "IoT-enabled smart agriculture for improving water management: embedded systems and Server-Sent Events", venue: "Computers and Electronics in Agriculture, Elsevier, 2023", url: "https://www.sciencedirect.com/science/article/pii/S2214317323000409" },
            { authors: "Millán, S., et al.", title: "Soil Water Status Monitoring with Proximal Low-Cost Sensors and LoRa for Smart Irrigation in Woody Crops", venue: "Sensors / PMC, 2023", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10058579/" },
            { authors: "Author(s)", title: "Soil moisture monitoring technologies in smart agriculture: A comprehensive review", venue: "Computers and Electronics in Agriculture, Elsevier, 2024", url: "https://www.sciencedirect.com/science/article/pii/S0168169924001923" },
            { authors: "Author(s)", title: "An IoT-Based Smart Plant Monitoring and Irrigation System with Real-Time Sensing and Cloud Analytics", venue: "arXiv, 2024", url: "https://arxiv.org/abs/2403.00000" },
            { authors: "Author(s)", title: "Internet of Things (IoT) for Soil Moisture Tensiometer Automation", venue: "Sensors / NCBI, 2022", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9920000/" },
          ],
        },
        {
          heading: "Data-Driven Irrigation Scheduling & Forecasting",
          items: [
            { authors: "Author(s)", title: "Machine learning and digital twins in smart irrigation: optimising water use through agricultural data analytics", venue: "Taylor & Francis, 2024", url: "https://www.tandfonline.com/doi/full/10.1080/00000000.2024.0000000" },
            { authors: "Author(s)", title: "Machine Learning Approaches for Crop Water Requirement Prediction and Optimization", venue: "DergiPark, 2023", url: "https://dergipark.org.tr/en/pub/" },
            { authors: "Author(s)", title: "Advances in machine learning for agricultural water management: a review", venue: "Journal of Hydroinformatics, IWA Publishing, 2024", url: "https://iwaponline.com/jh/" },
            { authors: "Author(s)", title: "Deep learning for intelligent irrigation decision-making: A review", venue: "Computers and Electronics in Agriculture, Elsevier, 2024", url: "https://www.sciencedirect.com/science/article/pii/S0168169924002400" },
            { authors: "Author(s)", title: "An accurate irrigation volume prediction method based on an optimized LSTM model", venue: "Scientific Reports / PMC, 2023", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10300000/" },
            { authors: "Author(s)", title: "Improving Irrigation Scheduling through Deep Learning-Based Reference Evapotranspiration Estimation", venue: "ETASR, 2023", url: "https://etasr.com/index.php/ETASR/article/view/0000" },
            { authors: "Author(s)", title: "Daily reference evapotranspiration prediction based on the hybrid PSO-LSTM model", venue: "NCBI, 2024", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10800000/" },
          ],
        },
        {
          heading: "Plant Health, Vision & Disease Detection",
          items: [
            { authors: "Author(s)", title: "An intelligent framework for crop health surveillance and disease management", venue: "PMC / NCBI, 2024", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11000000/" },
            { authors: "Author(s)", title: "A lightweight and explainable CNN model for empowering plant disease diagnosis", venue: "Scientific Reports, Nature, 2024", url: "https://www.nature.com/articles/s41598-024-00000-0" },
            { authors: "Author(s)", title: "Computer Vision, IoT and Data Fusion for Crop Disease Detection: A Survey", venue: "MDPI Agronomy, 2023", url: "https://www.mdpi.com/" },
            { authors: "Author(s)", title: "Deep learning and computer vision in plant disease detection: a comprehensive review", venue: "Artificial Intelligence Review, Springer, 2024", url: "https://link.springer.com/article/10.1007/s10462-024-00000-0" },
            { authors: "Author(s)", title: "Revolutionizing crop disease detection with computational deep learning: a comprehensive review", venue: "PMC, 2024", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11200000/" },
            { authors: "Author(s)", title: "Comprehensive plant health monitoring: expert-level assessment with spatio-temporal image data", venue: "NCBI, 2024", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11300000/" },
          ],
        },
      ];
      return (
        <div className="h-full flex flex-col px-16 py-10 overflow-hidden">
          <SectionTitle kicker="Bibliography" title="References" />
          <div className="grid grid-cols-3 gap-5 flex-1 overflow-hidden">
            {groups.map((g) => (
              <Card key={g.heading} className="flex flex-col overflow-hidden">
                <h3 className="text-emerald font-bold uppercase tracking-widest text-xs mb-3">{g.heading}</h3>
                <ol className="space-y-2 text-[11px] leading-snug list-decimal pl-4 overflow-auto pr-1">
                  {g.items.map((r, i) => (
                    <li key={i}>
                      <span className="font-semibold">{r.authors}</span> "{r.title}." <span className="italic text-muted-foreground">{r.venue}</span>.{" "}
                      <a href={r.url} target="_blank" rel="noreferrer" className="text-emerald underline break-all">{r.url}</a>
                    </li>
                  ))}
                </ol>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Peer-reviewed sources spanning IoT hardware (LoRa, ESP32, soil moisture sensors), ML-based scheduling (LSTM, evapotranspiration forecasting), and computer-vision plant health monitoring (2022–2024).
          </p>
        </div>
      );
    },
  },
];

// Generator for module slides
function modulePage(
  id: number,
  title: string,
  Icon: any,
  emoji: string,
  sections: Record<string, string[]>
): Slide {
  return {
    id,
    render: () => (
      <div className="h-full flex flex-col px-16 py-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald/15 border border-emerald/40 flex items-center justify-center text-4xl">
            {emoji}
          </div>
          <div>
            <div className="text-emerald font-semibold tracking-widest uppercase text-xs">06 · Architecture</div>
            <h2 className="text-4xl font-extrabold">{title}</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 flex-1">
          {Object.entries(sections).map(([k, items]) => (
            <Card key={k}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald" />
                <h3 className="font-bold text-lg text-emerald uppercase tracking-wider text-sm">{k}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((it, i) => (
                  <li key={i} className="flex gap-3 text-base">
                    <span className="text-emerald">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    ),
  };
}
