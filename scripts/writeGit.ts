import { execSync } from "child_process";
import { writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";

const commitId = execSync("git rev-parse --short HEAD").toString().trim();

const outputPath = resolve(__dirname, "../src/constants/git.ts"); // mutlak path
mkdirSync(resolve(__dirname, "../src/constants"), { recursive: true });
writeFileSync(outputPath, `export const GIT_COMMIT_ID = "${commitId}";\n`);

console.log(`✅ GIT_COMMIT_ID oluşturuldu: ${commitId}`);
