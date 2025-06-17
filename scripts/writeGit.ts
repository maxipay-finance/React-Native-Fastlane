import { writeFileSync } from "fs";
import { execSync } from "child_process";

const commitId = execSync("git rev-parse --short HEAD").toString().trim();
const content = `export const GIT_COMMIT_ID = "${commitId}";\n`;

writeFileSync("src/constants/git.ts", content);

console.log(`✅ GIT_COMMIT_ID oluşturuldu: ${commitId}`);
