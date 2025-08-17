import { batchImportProducts } from '../lib/firebase-products';
import type { Product } from '../lib/types';

const newProducts: Omit<Product, 'id'>[] = [
  {
    name: "Canon PowerShot G7 X Mark III",
    brand: "Canon",
    category: "compact",
    price: 649,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["compact camera", "canon powershot"],
    condition: "Excellent",
    description: "Advanced compact camera with live streaming capabilities and flip-up touchscreen.",
    longDescription: "The Canon PowerShot G7 X Mark III combines professional features in a compact body. Features a 20.1MP 1-inch CMOS sensor, DIGIC 8 processor, and 4.2x optical zoom lens. Perfect for content creators with live streaming capabilities and vertical video recording.",
    specs: [
      { key: "Sensor", value: "20.1MP 1-inch CMOS" },
      { key: "Lens", value: "24-100mm f/1.8-2.8" },
      { key: "Video", value: "4K 30fps" },
      { key: "Screen", value: "3-inch flip-up touchscreen" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.5,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Sony Cyber-shot RX100 VII",
    brand: "Sony",
    category: "compact",
    price: 1198,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["sony camera", "rx100 series"],
    condition: "Excellent",
    description: "Professional compact camera with lightning-fast autofocus and exceptional image quality.",
    longDescription: "The Sony RX100 VII features a 20.1MP 1-inch Exmor RS CMOS sensor with advanced Real-time Eye AF and Real-time Tracking. Capable of 20fps burst shooting and 4K HDR video recording.",
    specs: [
      { key: "Sensor", value: "20.1MP 1-inch Exmor RS CMOS" },
      { key: "Lens", value: "24-200mm f/2.8-4.5" },
      { key: "Video", value: "4K HDR" },
      { key: "Burst", value: "20fps" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.7,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Sony ZV-1",
    brand: "Sony",
    category: "compact",
    price: 698,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["vlogging camera", "content creation"],
    condition: "Excellent",
    description: "Compact camera designed specifically for content creators and vloggers.",
    longDescription: "The Sony ZV-1 is purpose-built for vlogging and content creation. Features Product Showcase Setting, Background Defocus button, and advanced audio recording with directional 3-capsule mic and MI shoe.",
    specs: [
      { key: "Sensor", value: "20.1MP 1-inch Exmor RS CMOS" },
      { key: "Lens", value: "24-70mm f/1.8-2.8" },
      { key: "Video", value: "4K with real-time Eye AF" },
      { key: "Audio", value: "Directional 3-capsule mic" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.6,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Panasonic Lumix DMC-LX10",
    brand: "Panasonic",
    category: "compact",
    price: 497,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["panasonic lumix", "compact camera"],
    condition: "Good",
    description: "Ultra-compact camera with fast f/1.4-2.8 Leica lens and 4K video capabilities.",
    longDescription: "The Panasonic LX10 features a large 1-inch 20.1MP sensor and ultra-fast f/1.4-2.8 Leica DC Vario-Summilux lens. Despite its compact size, it delivers exceptional image quality and 4K video recording.",
    specs: [
      { key: "Sensor", value: "20.1MP 1-inch MOS" },
      { key: "Lens", value: "24-72mm f/1.4-2.8 Leica" },
      { key: "Video", value: "4K 30fps" },
      { key: "Size", value: "Ultra-compact design" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.3,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Panasonic Lumix LX100 II",
    brand: "Panasonic",
    category: "compact",
    price: 897,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["panasonic lumix", "premium compact"],
    condition: "Excellent",
    description: "Premium compact camera with large Four Thirds sensor and manual controls.",
    longDescription: "The LX100 II combines a large Four Thirds 17MP sensor with a fast f/1.7-2.8 Leica lens. Features comprehensive manual controls, 4K video recording, and classic design reminiscent of vintage cameras.",
    specs: [
      { key: "Sensor", value: "17MP Four Thirds MOS" },
      { key: "Lens", value: "24-75mm f/1.7-2.8 Leica" },
      { key: "Video", value: "4K 30fps" },
      { key: "Controls", value: "Full manual control rings" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.4,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Ricoh GR III",
    brand: "Ricoh",
    category: "compact",
    price: 896,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["street photography", "ricoh gr"],
    condition: "Excellent",
    description: "Ultimate street photography camera with APS-C sensor in ultra-compact body.",
    longDescription: "The Ricoh GR III is the definitive street photography camera, featuring a 24.2MP APS-C sensor and fixed 28mm f/2.8 lens. Its compact form factor and exceptional image quality make it perfect for discrete photography.",
    specs: [
      { key: "Sensor", value: "24.2MP APS-C CMOS" },
      { key: "Lens", value: "28mm f/2.8 (35mm equiv.)" },
      { key: "Focus", value: "Hybrid AF system" },
      { key: "Design", value: "Ultra-compact body" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.5,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Fujifilm X100V",
    brand: "Fujifilm",
    category: "compact",
    price: 1399,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["fujifilm x100", "hybrid viewfinder"],
    condition: "Excellent",
    description: "Iconic camera with hybrid viewfinder and renowned Fujifilm color science.",
    longDescription: "The X100V features a 26.1MP X-Trans CMOS 4 sensor and fixed 23mm f/2 lens. Its unique hybrid optical/electronic viewfinder and classic design make it a favorite among photographers and enthusiasts.",
    specs: [
      { key: "Sensor", value: "26.1MP X-Trans CMOS 4" },
      { key: "Lens", value: "23mm f/2 (35mm equiv.)" },
      { key: "Viewfinder", value: "Hybrid OVF/EVF" },
      { key: "Video", value: "4K 30fps" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.8,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Fujifilm X70",
    brand: "Fujifilm",
    category: "compact",
    price: 599,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["fujifilm compact", "tilting screen"],
    condition: "Good",
    description: "Compact camera with APS-C sensor and tilting touchscreen for versatile shooting.",
    longDescription: "The Fujifilm X70 combines the large APS-C X-Trans CMOS II sensor with a compact body and 18.5mm f/2.8 lens. Features a tilting touchscreen and WiFi connectivity for easy sharing.",
    specs: [
      { key: "Sensor", value: "16.3MP X-Trans CMOS II" },
      { key: "Lens", value: "18.5mm f/2.8 (28mm equiv.)" },
      { key: "Screen", value: "3-inch tilting touchscreen" },
      { key: "Connectivity", value: "Built-in WiFi" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.2,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Olympus PEN-F",
    brand: "Olympus",
    category: "mirrorless",
    price: 1199,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["olympus pen", "retro design"],
    condition: "Excellent",
    description: "Retro-styled mirrorless camera with advanced creative features and premium build quality.",
    longDescription: "The Olympus PEN-F combines classic design with modern technology. Features a 20.3MP Four Thirds sensor, 5-axis image stabilization, and unique Creative Dial for artistic control.",
    specs: [
      { key: "Sensor", value: "20.3MP Four Thirds Live MOS" },
      { key: "Stabilization", value: "5-axis image stabilization" },
      { key: "Design", value: "Classic rangefinder style" },
      { key: "Creative", value: "Creative Control Dial" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.4,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Sony RX100 V",
    brand: "Sony",
    category: "compact",
    price: 898,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["sony rx100", "premium compact"],
    condition: "Excellent",
    description: "Premium compact camera with fast hybrid autofocus and high-speed shooting.",
    longDescription: "The Sony RX100 V features a 20.1MP 1-inch sensor with 315 phase-detection AF points covering 65% of the frame. Capable of 24fps continuous shooting and 4K video recording.",
    specs: [
      { key: "Sensor", value: "20.1MP 1-inch Exmor RS CMOS" },
      { key: "Lens", value: "24-70mm f/1.8-2.8" },
      { key: "AF Points", value: "315 phase-detection" },
      { key: "Burst", value: "24fps continuous" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.5,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Panasonic Lumix ZS100",
    brand: "Panasonic",
    category: "compact",
    price: 747,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["travel zoom", "panasonic lumix"],
    condition: "Good",
    description: "Travel zoom camera with 1-inch sensor and 10x optical zoom in compact body.",
    longDescription: "The Panasonic ZS100 is the perfect travel companion, combining a large 1-inch 20.1MP sensor with 10x optical zoom (25-250mm). Features 4K video recording and advanced image stabilization.",
    specs: [
      { key: "Sensor", value: "20.1MP 1-inch MOS" },
      { key: "Lens", value: "25-250mm f/2.8-5.9" },
      { key: "Zoom", value: "10x optical zoom" },
      { key: "Video", value: "4K 30fps" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.3,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Canon PowerShot G9 X",
    brand: "Canon",
    category: "compact",
    price: 529,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["canon powershot", "ultra compact"],
    condition: "Good",
    description: "Ultra-compact camera with 1-inch sensor and premium build quality.",
    longDescription: "The Canon G9 X delivers excellent image quality in an incredibly compact form factor. Features a 20.2MP 1-inch CMOS sensor, 3x optical zoom, and intuitive touchscreen controls.",
    specs: [
      { key: "Sensor", value: "20.2MP 1-inch CMOS" },
      { key: "Lens", value: "28-84mm f/2.0-4.9" },
      { key: "Size", value: "Ultra-compact design" },
      { key: "Screen", value: "3-inch touchscreen" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.2,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Canon PowerShot G5 X",
    brand: "Canon",
    category: "compact",
    price: 899,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["canon powershot", "electronic viewfinder"],
    condition: "Excellent",
    description: "Advanced compact camera with electronic viewfinder and versatile zoom range.",
    longDescription: "The Canon G5 X combines a 20.2MP 1-inch CMOS sensor with a built-in electronic viewfinder and 4.2x optical zoom. Perfect for photographers who want DSLR-like handling in a compact body.",
    specs: [
      { key: "Sensor", value: "20.2MP 1-inch CMOS" },
      { key: "Lens", value: "24-100mm f/1.8-2.8" },
      { key: "Viewfinder", value: "2.36M-dot EVF" },
      { key: "Screen", value: "3-inch vari-angle touchscreen" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.4,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Olympus XZ-1",
    brand: "Olympus",
    category: "compact",
    price: 399,
    images: ["https://placehold.co/600x600.png"],
    imageHints: ["olympus compact", "fast lens"],
    condition: "Good",
    description: "Compact camera with fast f/1.8-2.5 lens and manual controls.",
    longDescription: "The Olympus XZ-1 features a fast f/1.8-2.5 i.Zuiko lens and 10MP CCD sensor. Despite its compact size, it offers extensive manual controls and excellent low-light performance.",
    specs: [
      { key: "Sensor", value: "10MP 1/1.63-inch CCD" },
      { key: "Lens", value: "28-112mm f/1.8-2.5" },
      { key: "Controls", value: "Full manual control" },
      { key: "Design", value: "Premium metal construction" }
    ],
    warranty: "6-Month ReFocus Warranty",
    rating: 4.1,
    reviewCount: 0,
    reviews: []
  }
];

async function addNewProducts() {
  console.log('🚀 Adding new camera products to Firebase...');
  console.log(`📦 Found ${newProducts.length} products to add`);
  
  try {
    const success = await batchImportProducts(newProducts);
    
    if (success) {
      console.log('✅ All new products added successfully!');
      console.log(`📊 Added ${newProducts.length} camera products to Firebase Firestore`);
      console.log('🎯 Products include: Canon, Sony, Panasonic, Ricoh, Fujifilm, Olympus');
    } else {
      console.error('❌ Failed to add products');
    }
  } catch (error) {
    console.error('❌ Error adding products:', error);
  }
}

addNewProducts();