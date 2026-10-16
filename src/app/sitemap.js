import { products, unlistedProducts } from "@/app/lib/products";

const SITE_URL = "https://www.thepackhub.in";

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const staticRoutes = [
  "",
  "/about-us",
  "/production",
  "/certifications",
  "/product",
  "/solutions-and-services",
  "/for_the_industry",
  "/for_the_distributors",
  "/for_confectioners",
  "/for_large_retailers",
  "/sustainability",
  "/research-and-development",
  "/contact",
  "/blog",
  "/blog/retail-vs-wholesale-packaging",
];

export default function sitemap() {
  const lastModified = new Date();

  const productRoutes = [...products, ...unlistedProducts].map(
    (product) => `/product/${product.slug || slugify(product.name)}`,
  );

  const categoryRoutes = [
    ...new Set(products.map((product) => slugify(product.category))),
  ].map((category) => `/product/category/${category}`);

  return [...staticRoutes, ...categoryRoutes, ...productRoutes].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified,
      changeFrequency: "daily",
    }),
  );
}
