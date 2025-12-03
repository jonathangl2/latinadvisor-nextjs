import fs from "fs";
import path from "path";

export function loadHomeJson() {
  const filePath = path.join(process.cwd(), "public", "assets", "db", "la_home.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(fileContent);
  return json;
}
