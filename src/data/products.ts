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
    slug: "3d-foot-scanner",
    img: productScanner,
    title: "3D Foot Scanner",
    category: "Scanning",
    desc: "High-precision 3D plantar and dorsal foot scanner with sub-millimeter accuracy. Captures complete foot geometry in seconds for custom orthotic design.",
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
    desc: "Medical-grade 3D printer designed specifically for producing custom orthopedic insoles. Compatible with TPU, EVA, and specialized medical polymers.",
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
    slug: "foot-pressure-platform",
    img: productPressure,
    title: "Foot Pressure Platform",
    category: "Analysis",
    desc: "Dynamic and static plantar pressure measurement platform with 4,096 sensors. Real-time pressure distribution mapping and gait cycle analysis.",
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
    slug: "3d-body-scanner",
    img: productBodyScanner,
    title: "3D Body Scanner",
    category: "Scanning",
    desc: "Full-body 3D scanning solution for posture assessment, body composition analysis, and size tracking over time.",
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
    img: productPosture,
    title: "Posture Analyzer",
    category: "Analysis",
    desc: "Advanced skeletal alignment and posture analysis system with automated landmark detection and comprehensive reporting.",
    specs: ["AI-Powered Detection", "Multi-plane Analysis", "PDF Reports"],
    features: [
      "AI-driven anatomical landmark detection",
      "Sagittal, coronal, and transverse plane analysis",
      "Automated angle and deviation measurements",
      "Before/after comparison views",
      "Patient-friendly visual reports",
      "Cloud-based data storage and retrieval",
    ],
    longDesc:
      "The Posture Analyzer uses advanced AI to automatically detect anatomical landmarks and assess skeletal alignment across all three anatomical planes. Clinicians receive detailed measurements of angular deviations, asymmetries, and postural imbalances — all presented in clear, patient-friendly visual reports. The before/after comparison feature makes it easy to demonstrate treatment progress, while cloud-based storage ensures patient records are always accessible and secure.",
  },
];
