import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet"; // SEO meta tags
import products from "../data/products.json";


export default function Product() {
  const { slug } = useParams();
  const product = products.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!product)
    return <h2 className="text-center my-5">Product Not Found</h2>;

  return (
    <div className="container my-5">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{product.name} - Humanite Healthcare</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta
          property="og:image"
          content={`https://humanitehealthcare.com/images/Products/${product.image}`}
        />
        <meta property="og:type" content="product" />
        <link
          rel="canonical"
          href={`https://humanitehealthcare.com/products/${slug}`}
        />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": [`https://humanitehealthcare.com/images/Products/${product.image}`],
            "description": product.description,
            "brand": { "@type": "Brand", "name": "Humanite Healthcare" },
          })}
        </script>
      </Helmet>

      {/* Product Title */}
      <h1 className="fw-bold mb-4">{product.name}</h1>

      {/* Product Image */}
      <div className="text-center mb-4">
        <img
          src={`/images/Products/${product.image}`}
          alt={product.name}
          className="img-fluid"
          style={{ maxHeight: "400px", objectFit: "contain", borderRadius:"20px" }}
        />
      </div>

      {/* Product Description */}
      <div className="product-details">
        <p style={{ lineHeight: "1.6", fontSize: "1.5rem", color: "#333" }}>
          {product.description}
        </p>

        {/* Key Benefits */}
        {product.benefits && product.benefits.length > 0 && (
          <ul style={{ marginTop: "15px", paddingLeft: "20px" }}>
            {product.benefits.map((benefit, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                {benefit}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
