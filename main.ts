import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Absurd Clause Contest — one original English sentence, phrased as a
// clause buried deep inside a terms-of-service agreement: deadpan legal
// boilerplate that quietly turns absurd.
const ENTRY =
  "Section 9.1: the user acknowledges that their shadow is licensed, not owned, and may be repossessed after sunset without prior notice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
