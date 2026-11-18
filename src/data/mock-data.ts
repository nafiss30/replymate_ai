import type { Conversation, Order, Payment, Policy, Product, WeatherRecommendation } from "@/types";

export const products: Product[] = [
  {
    id: "prod-001", name: "Midnight Oversized Hoodie", emoji: "🧥", price: 1890, category: "Hoodie",
    fabric: "320 GSM brushed cotton", season: "Winter", warmth: "Warm", weatherTags: ["cold", "warm", "dry"], status: "Active",
    variants: [
      { id: "v-1", size: "M", colour: "Black", stock: 12, sku: "MOH-BLK-M" },
      { id: "v-2", size: "L", colour: "Black", stock: 8, sku: "MOH-BLK-L" },
      { id: "v-3", size: "XL", colour: "Ash", stock: 3, sku: "MOH-ASH-XL" },
    ],
  },
  {
    id: "prod-002", name: "Breeze Cotton Shirt", emoji: "👔", price: 1290, category: "Shirt",
    fabric: "Premium breathable cotton", season: "Summer", warmth: "Light", weatherTags: ["hot", "light", "humid"], status: "Active",
    variants: [
      { id: "v-4", size: "M", colour: "White", stock: 16, sku: "BCS-WHT-M" },
      { id: "v-5", size: "L", colour: "Sky", stock: 11, sku: "BCS-SKY-L" },
      { id: "v-6", size: "XL", colour: "Olive", stock: 7, sku: "BCS-OLV-XL" },
    ],
  },
  {
    id: "prod-003", name: "Urban Cargo Trouser", emoji: "👖", price: 1590, category: "Trouser",
    fabric: "Stretch twill", season: "All season", warmth: "Medium", weatherTags: ["mild", "dry", "versatile"], status: "Low stock",
    variants: [
      { id: "v-7", size: "30", colour: "Black", stock: 2, sku: "UCT-BLK-30" },
      { id: "v-8", size: "32", colour: "Khaki", stock: 4, sku: "UCT-KHK-32" },
      { id: "v-9", size: "34", colour: "Olive", stock: 1, sku: "UCT-OLV-34" },
    ],
  },
  {
    id: "prod-004", name: "Monsoon Shell Jacket", emoji: "🌧️", price: 2290, category: "Jacket",
    fabric: "Water-resistant polyester", season: "Monsoon", warmth: "Medium", weatherTags: ["rainy", "windy", "light"], status: "Active",
    variants: [
      { id: "v-10", size: "M", colour: "Orange", stock: 6, sku: "MSJ-ORG-M" },
      { id: "v-11", size: "L", colour: "Black", stock: 9, sku: "MSJ-BLK-L" },
    ],
  },
  {
    id: "prod-005", name: "Everyday Basic Tee", emoji: "👕", price: 690, category: "T-shirt",
    fabric: "Combed cotton", season: "Summer", warmth: "Light", weatherTags: ["hot", "light", "casual"], status: "Active",
    variants: [
      { id: "v-12", size: "S", colour: "Cream", stock: 22, sku: "EBT-CRM-S" },
      { id: "v-13", size: "M", colour: "Black", stock: 18, sku: "EBT-BLK-M" },
      { id: "v-14", size: "L", colour: "Rust", stock: 14, sku: "EBT-RST-L" },
    ],
  },
  {
    id: "prod-006", name: "Classic Knit Sweater", emoji: "🧶", price: 1690, category: "Sweater",
    fabric: "Soft acrylic knit", season: "Winter", warmth: "Warm", weatherTags: ["cold", "warm", "cozy"], status: "Out of stock",
    variants: [
      { id: "v-15", size: "M", colour: "Brown", stock: 0, sku: "CKS-BRN-M" },
      { id: "v-16", size: "L", colour: "Cream", stock: 0, sku: "CKS-CRM-L" },
    ],
  },
];

export const conversations: Conversation[] = [
  {
    id: "conv-1001", customer: { name: "Nusrat Jahan", initials: "NJ", phone: "01700-123456", location: "Comilla" },
    channel: "Messenger", preview: "Black hoodie XL আছে? Comilla delivery charge কত?", intent: "Size or Colour", sentiment: "Normal",
    confidence: 94, aiDraft: "জি, Midnight Oversized Hoodie-এর Black XL বর্তমানে নেই। Black L আছে ৮টি। Comilla-তে delivery charge ৳130। চাইলে L size-এর measurement পাঠাতে পারি।",
    status: "Pending Review", unread: 2, updatedAt: "2 min ago", priority: "normal",
    messages: [
      { id: "m1", sender: "customer", body: "Assalamu alaikum, Black hoodie XL আছে?", time: "10:22 AM" },
      { id: "m2", sender: "customer", body: "Comilla delivery charge কত?", time: "10:23 AM" },
      { id: "m3", sender: "ai", body: "জি, Midnight Oversized Hoodie-এর Black XL বর্তমানে নেই। Black L আছে ৮টি। Comilla-তে delivery charge ৳130। চাইলে L size-এর measurement পাঠাতে পারি।", time: "Draft" },
    ],
  },
  {
    id: "conv-1002", customer: { name: "Mahin Ahmed", initials: "MA", phone: "01800-552211", location: "Dhaka" },
    channel: "Messenger", preview: "তিন দিন হয়ে গেল order পাইনি! কেউ replyও দেয় না।", intent: "Complaint", sentiment: "Angry",
    confidence: 98, aiDraft: "আপনার অপেক্ষা ও অসুবিধার জন্য আমরা আন্তরিকভাবে দুঃখিত। আপনার order RM-2038 এখন Shipped অবস্থায় আছে। একজন প্রতিনিধি এখনই courier update যাচাই করছেন।",
    status: "Complaint", unread: 4, updatedAt: "8 min ago", priority: "high",
    messages: [
      { id: "m4", sender: "customer", body: "তিন দিন হয়ে গেল order পাইনি!", time: "10:14 AM" },
      { id: "m5", sender: "customer", body: "কেউ replyও দেয় না। খুবই বাজে service", time: "10:15 AM" },
      { id: "m6", sender: "ai", body: "আপনার অপেক্ষা ও অসুবিধার জন্য আমরা আন্তরিকভাবে দুঃখিত। আপনার order RM-2038 এখন Shipped অবস্থায় আছে। একজন প্রতিনিধি এখনই courier update যাচাই করছেন।", time: "Draft" },
    ],
  },
  {
    id: "conv-1003", customer: { name: "Rafiul Islam", initials: "RI", location: "Rajshahi" },
    channel: "Simulator", preview: "Do you have this shirt in olive colour?", intent: "Availability", sentiment: "Normal",
    confidence: 91, aiDraft: "Yes, the Breeze Cotton Shirt is available in Olive, size XL. The price is ৳1,290 and current stock is 7 pieces.",
    status: "Approved", unread: 0, updatedAt: "24 min ago", priority: "normal",
    messages: [
      { id: "m7", sender: "customer", body: "Do you have this shirt in olive colour?", time: "9:58 AM" },
      { id: "m8", sender: "shop", body: "Yes, the Breeze Cotton Shirt is available in Olive, size XL. The price is ৳1,290 and current stock is 7 pieces.", time: "10:01 AM" },
    ],
  },
  {
    id: "conv-1004", customer: { name: "Sadia Akter", initials: "SA", location: "Sylhet" },
    channel: "Messenger", preview: "বিকাশ করলে কোনো discount আছে? trx id কোথায় দিব?", intent: "Payment Inquiry", sentiment: "Confused",
    confidence: 73, aiDraft: "Manual bKash payment-এর transaction ID এই chat-এ পাঠাতে পারবেন। Discount সংক্রান্ত তথ্য নিশ্চিত করার জন্য একজন প্রতিনিধি reply করবেন।",
    status: "Needs Human Reply", unread: 1, updatedAt: "36 min ago", priority: "normal",
    messages: [
      { id: "m9", sender: "customer", body: "বিকাশ করলে কোনো discount আছে? trx id কোথায় দিব?", time: "9:40 AM" },
      { id: "m10", sender: "ai", body: "Manual bKash payment-এর transaction ID এই chat-এ পাঠাতে পারবেন। Discount সংক্রান্ত তথ্য নিশ্চিত করার জন্য একজন প্রতিনিধি reply করবেন।", time: "Draft" },
    ],
  },
  {
    id: "conv-1005", customer: { name: "Tanvir Hasan", initials: "TH", location: "Dhaka" },
    channel: "Messenger", preview: "Thanks! Shirtটা অনেক ভালো হয়েছে ❤️", intent: "Unknown", sentiment: "Positive",
    confidence: 88, aiDraft: "আপনার পছন্দ হয়েছে জেনে আমরা খুব আনন্দিত! ReplyMate Clothing-এর সাথে থাকার জন্য ধন্যবাদ। ❤️",
    status: "Resolved", unread: 0, updatedAt: "1 hr ago", priority: "normal",
    messages: [
      { id: "m11", sender: "customer", body: "Thanks! Shirtটা অনেক ভালো হয়েছে ❤️", time: "9:05 AM" },
      { id: "m12", sender: "shop", body: "আপনার পছন্দ হয়েছে জেনে আমরা খুব আনন্দিত! ReplyMate Clothing-এর সাথে থাকার জন্য ধন্যবাদ। ❤️", time: "9:08 AM" },
    ],
  },
];

export const policies: Policy[] = [
  { id: "pol-1", title: "Inside Dhaka delivery", description: "Delivery charge ৳80. Estimated delivery within 1–2 business days.", enabled: true, updatedAt: "Today" },
  { id: "pol-2", title: "Outside Dhaka delivery", description: "Delivery charge ৳130. Estimated delivery within 3–5 business days.", enabled: true, updatedAt: "Today" },
  { id: "pol-3", title: "Exchange policy", description: "Size exchange is available within 3 days of delivery when the product is unworn and tags are intact.", enabled: true, updatedAt: "2 days ago" },
  { id: "pol-4", title: "Return policy", description: "Returns are accepted only for damaged or incorrect products with an unboxing video.", enabled: true, updatedAt: "2 days ago" },
  { id: "pol-5", title: "Payment methods", description: "Cash on Delivery, manual bKash/Nagad verification, and SSLCommerz sandbox demonstration.", enabled: true, updatedAt: "5 days ago" },
];

export const orders: Order[] = [
  { id: "RM-2041", customer: "Nusrat Jahan", phone: "01700-123456", address: "Kandirpar, Comilla", zone: "Outside Dhaka", paymentMethod: "Cash on Delivery", status: "Pending", items: [{ product: "Midnight Oversized Hoodie", size: "L", colour: "Black", quantity: 1, price: 1890 }], subtotal: 1890, deliveryCharge: 130, total: 2020, createdAt: "Today, 10:31 AM", conversationId: "conv-1001" },
  { id: "RM-2040", customer: "Samia Rahman", phone: "01922-445566", address: "Dhanmondi 8A, Dhaka", zone: "Inside Dhaka", paymentMethod: "bKash", status: "Confirmed", items: [{ product: "Breeze Cotton Shirt", size: "M", colour: "White", quantity: 2, price: 1290 }], subtotal: 2580, deliveryCharge: 80, total: 2660, createdAt: "Today, 9:42 AM" },
  { id: "RM-2039", customer: "Arif Hossain", phone: "01675-889900", address: "Uttara Sector 7, Dhaka", zone: "Same-day Dhaka", paymentMethod: "Nagad", status: "Packed", items: [{ product: "Urban Cargo Trouser", size: "32", colour: "Khaki", quantity: 1, price: 1590 }], subtotal: 1590, deliveryCharge: 150, total: 1740, createdAt: "Yesterday, 6:18 PM" },
  { id: "RM-2038", customer: "Mahin Ahmed", phone: "01800-552211", address: "Mirpur 10, Dhaka", zone: "Inside Dhaka", paymentMethod: "Cash on Delivery", status: "Shipped", items: [{ product: "Everyday Basic Tee", size: "M", colour: "Black", quantity: 2, price: 690 }], subtotal: 1380, deliveryCharge: 80, total: 1460, createdAt: "17 Nov, 2:15 PM", conversationId: "conv-1002" },
  { id: "RM-2037", customer: "Tasmia Noor", phone: "01311-778899", address: "Zindabazar, Sylhet", zone: "Outside Dhaka", paymentMethod: "SSLCommerz Sandbox", status: "Delivered", items: [{ product: "Monsoon Shell Jacket", size: "M", colour: "Orange", quantity: 1, price: 2290 }], subtotal: 2290, deliveryCharge: 130, total: 2420, createdAt: "15 Nov, 11:24 AM" },
  { id: "RM-2036", customer: "Rakib Hasan", phone: "01521-334455", address: "Boalia, Rajshahi", zone: "Outside Dhaka", paymentMethod: "Cash on Delivery", status: "Return Requested", items: [{ product: "Classic Knit Sweater", size: "L", colour: "Cream", quantity: 1, price: 1690 }], subtotal: 1690, deliveryCharge: 130, total: 1820, createdAt: "13 Nov, 5:02 PM" },
];

export const payments: Payment[] = [
  { id: "PAY-8821", orderId: "RM-2040", customer: "Samia Rahman", method: "bKash", transactionId: "BK7F9P2LQ1", amount: 2660, status: "Pending", submittedAt: "Today, 9:45 AM" },
  { id: "PAY-8820", orderId: "RM-2039", customer: "Arif Hossain", method: "Nagad", transactionId: "NG9K31Z70A", amount: 1740, status: "Verified", submittedAt: "Yesterday, 6:24 PM" },
  { id: "PAY-8819", orderId: "RM-2038", customer: "Mahin Ahmed", method: "Cash on Delivery", amount: 1460, status: "COD", submittedAt: "17 Nov, 2:15 PM" },
  { id: "PAY-8818", orderId: "RM-2037", customer: "Tasmia Noor", method: "SSLCommerz Sandbox", transactionId: "SANDBOX-4419", amount: 2420, status: "Verified", submittedAt: "15 Nov, 11:28 AM" },
  { id: "PAY-8817", orderId: "RM-2036", customer: "Rakib Hasan", method: "bKash", transactionId: "BK2X1BAD77", amount: 1820, status: "Rejected", submittedAt: "13 Nov, 5:10 PM" },
];

export const dashboardStats = [
  { label: "Total messages", value: "2,847", change: "+12.4%", tone: "orange" },
  { label: "Today’s messages", value: "186", change: "+18 today", tone: "cream" },
  { label: "Pending approvals", value: "14", change: "Needs attention", tone: "dark" },
  { label: "Complaints", value: "6", change: "2 high priority", tone: "peach" },
  { label: "Total orders", value: "428", change: "+8.2%", tone: "orange" },
  { label: "Confirmed orders", value: "312", change: "72.9%", tone: "cream" },
  { label: "Unresolved", value: "23", change: "–4 from yesterday", tone: "peach" },
] as const;

export const messageVolume = [
  { day: "Thu", messages: 128, aiReplies: 98 }, { day: "Fri", messages: 164, aiReplies: 126 },
  { day: "Sat", messages: 142, aiReplies: 111 }, { day: "Sun", messages: 219, aiReplies: 174 },
  { day: "Mon", messages: 187, aiReplies: 146 }, { day: "Tue", messages: 236, aiReplies: 194 },
  { day: "Wed", messages: 186, aiReplies: 151 },
];

export const orderSummary = [
  { name: "Confirmed", value: 34 }, { name: "Packed", value: 22 }, { name: "Shipped", value: 27 },
  { name: "Delivered", value: 48 }, { name: "Pending", value: 18 },
];

export const intentSummary = [
  { intent: "Price", count: 86 }, { intent: "Availability", count: 72 }, { intent: "Delivery", count: 55 },
  { intent: "Size / Colour", count: 49 }, { intent: "Order status", count: 38 }, { intent: "Return", count: 21 },
];

export const defaultWeather: WeatherRecommendation = {
  city: "Dhaka", temperature: 28, feelsLike: 31, condition: "Partly cloudy with a chance of rain", chanceOfRain: 42,
  tags: ["warm", "humid", "light", "rain-ready"], productIds: ["prod-002", "prod-004", "prod-005"],
};
