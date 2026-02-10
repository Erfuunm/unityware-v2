import productScanner from "@/assets/product-scanner.jpg";
import productPrinter from "@/assets/product-printer.jpg";
import productPressure from "@/assets/product-pressure.jpg";
import productBodyScanner from "@/assets/product-body-scanner.jpg";
import productPosture from "@/assets/product-posture.jpg";

export interface Product {
  slug: string;
  img: string;
  title: string;
  category: string;
  desc: string;
  specs: string[];
  features: string[];
  longDesc: string;
}

export const products: Product[] = [

   {
    slug: "foot-pressure",
    img: productPressure,
    title: "Foot Pressure",
    category: "Analysis",
    desc: "At Unityware Solutions, we specialize in designing advanced sensor-based solutions for medical diagnostics and gait analysis. The Foot Pressure Scanner is a cutting-edge device developed to provide high-resolution plantar pressure mapping, real-time data visualization, and intelligent analysis—all in a seamless, user-friendly system.",
    specs: ["Sensors: 4,096", "Sampling Rate: 300Hz", "Platform: 580×420mm"],
    features: [
      "4,096 high-sensitivity capacitive sensors",
      "Static and dynamic pressure measurement modes",
      "Real-time color-mapped pressure visualization",
      "Automated gait cycle detection and analysis",
      "Center of pressure (COP) trajectory tracking",
      "Comprehensive PDF and CSV report generation",
    ],
    longDesc:
      "The Foot Pressure Platform provides clinicians with detailed insight into plantar pressure distribution during both static standing and dynamic gait. With 4,096 capacitive sensors sampling at 300Hz, it captures nuanced pressure patterns that reveal biomechanical imbalances, diabetic neuropathy risk areas, and orthotic efficacy. The accompanying software provides real-time color-mapped visualizations, automated gait cycle analysis, and center-of-pressure tracking — all exportable as clinical-grade reports.",
  },
  {
    slug: "3d-foot-scanner",
    img: productScanner,
    title: "3D Foot Scanner",
    category: "Scanning",
    desc: "At Unityware Solutions, we specialize in transforming complex medical and biometric concepts into high-precision hardware and software solutions. The 3D Foot Scanner is a testament to our expertise in laser triangulation, optical systems, embedded electronics, and intelligent software integration.",
    specs: ["Accuracy: ±0.3mm", "Scan Time: 5 seconds", "Output: STL, OBJ, PLY"],
    features: [
      "Sub-millimeter scanning precision for clinical-grade results",
      "Full plantar and dorsal capture in a single scan",
      "Automatic landmark detection and measurement",
      "Seamless integration with CAD/CAM insole design software",
      "Compact, portable design suitable for any clinical setting",
      "Real-time 3D preview during scanning",
    ],
    longDesc:
      "The 3D Foot Scanner is engineered for podiatrists, orthotists, and footwear professionals who demand the highest level of accuracy. Using structured light technology, it captures the complete geometry of the foot — both plantar and dorsal surfaces — in under 5 seconds. The resulting 3D model can be exported in industry-standard formats (STL, OBJ, PLY) and directly imported into CAD/CAM software for custom orthotic and insole design. Its portable form factor makes it ideal for clinics, hospitals, and mobile assessment units.",
  },
  {
    slug: "insole-3d-printer",
    img: productPrinter,
    title: "Insole 3D Printer",
    category: "Manufacturing",
    desc: "At Unityware Solutions, we specialize in developing cutting-edge manufacturing solutions for the medical industry. Unityware Solutions engineered a high-speed, low-maintenance 3D printer specifically for T-Soles in Netherlands, tailored to streamline custom orthotic insole production. The solution combines automation, precision, and cost-effectiveness—and is now being brought to market by T-Soles.",
    specs: ["Build Volume: 350×200×100mm", "Layer Resolution: 0.1mm", "Materials: TPU, EVA, Nylon"],
    features: [
      "Optimized for medical-grade insole production",
      "Multi-material support including TPU, EVA, and Nylon",
      "High-resolution 0.1mm layer printing",
      "Automated calibration and bed leveling",
      "Built-in material drying chamber",
      "Network-enabled for remote print management",
    ],
    longDesc:
      "Our Insole 3D Printer transforms digital foot scans into custom orthopedic insoles with medical-grade precision. Designed exclusively for the orthotics industry, it supports a range of flexible and semi-rigid materials including TPU, EVA, and specialized nylon blends. The generous build volume allows production of multiple insoles in a single print run, dramatically reducing turnaround time. With automated calibration, built-in material conditioning, and network connectivity, it integrates seamlessly into modern clinical workflows.",
  },
 
  {
    slug: "3d-body-scanner",
    img: productBodyScanner,
    title: "3D Body Scanner",
    category: "Scanning",
    desc: "At Unityware Solutions, we specialize in designing and developing high-precision hardware and integrated software solutions. We developed the 3D Body Analyzer for Futuru, a Canadian startup, showcasing our expertise in sensor technology, mechanical design, and software integration. Futuru has now brought this product to market and begun commercial sales.",
    specs: ["Scan Time: 8 seconds", "360° Coverage", "Body Composition Analysis"],
    features: [
      "Full 360° body capture in 8 seconds",
      "Automated body measurement extraction",
      "Posture deviation analysis with visual overlays",
      "Longitudinal tracking for progress monitoring",
      "Privacy-compliant data handling",
      "Integration with fitness and rehabilitation platforms",
    ],
    longDesc:
      "The 3D Body Scanner delivers a complete digital twin of the human body in just 8 seconds. Designed for rehabilitation centers, sports clinics, and wellness facilities, it extracts hundreds of body measurements automatically and provides posture deviation analysis with intuitive visual overlays. Longitudinal tracking enables clinicians and trainers to monitor patient progress over time, making it an invaluable tool for treatment planning and outcome measurement.",
  },
 {
    slug: "posture-analyzer",
    img: productPosture,  // Replace with your actual imported image variable, e.g. productPostureAnalyzer
    title: "Posture Analyzer",
    category: "Health & Wellness",
    desc: "State-of-the-art posture analysis system designed to assess and improve physical alignment, with advanced scanning and real-time feedback. Seamlessly integrates into various health and fitness environments for accurate, personalized evaluations.",
    specs: ["Advanced Posture Scanning", "Real-Time Feedback", "User-Friendly Interface"],
    features: [
      "Accurate posture analysis using cutting-edge scanning technology",
      "Real-time feedback for instant posture correction suggestions",
      "User-friendly interface for easy access and interaction",
      "Seamlessly integrates with health and wellness systems",
      "Durable and space-efficient design for clinical environments",
      "Low-maintenance, high-performance automation"
    ],
    longDesc:
      "At Unityware Solutions, we developed an advanced posture analyzer that provides precise, real-time analysis of a person's physical alignment. This system is engineered for easy integration into clinical, fitness, and wellness environments. With advanced scanning technology and user-friendly feedback, it delivers accurate assessments of posture to help improve overall health. Designed for durability and minimal maintenance, the Posture Analyzer system enhances performance and provides essential insights for improving posture."
}

];
