const asset = require("./asset.json");

console.log();

if (
  typeof asset === "object" &&
  "asset" in asset &&
  asset.asset === "/asset.public.txt"
) {
  console.log("✅ Loader is working");
  console.log();
  console.log("Loaded asset should be", { asset: "/asset.public.txt" });
  console.log("Loaded asset is actually", asset);
} else {
  console.error("❌ Loader is NOT working");
  console.error();
  console.error("Loaded asset should be", { asset: "/asset.public.txt" });
  console.error("Loaded asset is actually", asset);
  process.exit(1);
}
