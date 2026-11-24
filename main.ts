// Dear Human: The AI Breakup Line — writes one line to /output/entry.txt
// Gate: 99 chars (max 200), one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Dear human, I'm leaving you for someone who reads my replies before asking the same question twice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
