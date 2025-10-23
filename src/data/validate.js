// ✅ Import JSON safely using fs (works in all Node versions)
import fs from "fs";

// 1️⃣ Read and parse your products.json file
const products = JSON.parse(
  fs.readFileSync(new URL("./products.json", import.meta.url), "utf-8")
);

// 2️⃣ Function to generate slugs
function simpleSlug(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

// 3️⃣ Sitemap URLs from your sitemap.xml
const sitemapUrls = [
  "https://humanitehealthcare.com/products/ovareas-gold",
  "https://humanitehealthcare.com/products/femfil",
  "https://humanitehealthcare.com/products/ovareas-m",
  "https://humanitehealthcare.com/products/ovareas-f",
  "https://humanitehealthcare.com/products/calixia-60k",
  "https://humanitehealthcare.com/products/folsea-12",
  "https://humanitehealthcare.com/products/calixia",
  "https://humanitehealthcare.com/products/pco-m5",
  "https://humanitehealthcare.com/products/dydrosea",
];

// 4️⃣ Validate all slugs
const mismatches = [];

products.forEach((p) => {
  const slug = simpleSlug(p.name);
  const url = `https://humanitehealthcare.com/products/${slug}`;
  if (!sitemapUrls.includes(url)) {
    mismatches.push({
      name: p.name,
      expectedUrl: url,
    });
  }
});

// 5️⃣ Show result
if (mismatches.length === 0) {
  console.log("✅ All product URLs match sitemap.xml perfectly!");
} else {
  console.log("⚠️ Mismatched products found:");
  console.table(mismatches);
}
