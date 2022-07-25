import path from "path";

const alias = {
  "@": path.resolve(__dirname, "/src"),
  "@components": "@/components",
  "@pages": "@/pages",
  "@config": "@/config",
  "@utils": "@/utils",
  "@router": "@/router",
};

const headers = [];

export { headers, alias };
