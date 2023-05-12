import { parseArgs } from "./deps.ts";

import react from "./commands/react.ts";
import solid from "./commands/solid.ts";

const flags = parseArgs(Deno.args, {
  boolean: ["react", "solid"],
});

if (flags.react) react();
if (flags.solid) solid();
