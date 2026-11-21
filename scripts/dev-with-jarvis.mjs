import { spawn } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const frontendRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const projectRoot = resolve(frontendRoot, "..");
const jarvisRoot = resolve(projectRoot, "jarvis-assistant");
const jarvisPort = process.env.JARVIS_PORT ?? "8787";
const childEnv = { ...process.env, JARVIS_PORT: jarvisPort };

const jarvis = spawn(process.execPath, ["server/index.js"], {
  cwd: jarvisRoot,
  env: { ...childEnv, PORT: jarvisPort },
  stdio: "inherit",
});
const next = spawn(
  process.execPath,
  [
    resolve(frontendRoot, "node_modules", "next", "dist", "bin", "next"),
    "dev",
    ...process.argv.slice(2),
  ],
  {
    cwd: frontendRoot,
    env: childEnv,
    stdio: "inherit",
  },
);

let stopping = false;
function stopChildren(signal) {
  if (stopping) return;
  stopping = true;
  for (const child of [jarvis, next]) {
    if (child.exitCode === null && child.signalCode === null) {
      child.kill(signal);
    }
  }
}

for (const child of [jarvis, next]) {
  child.on("error", (error) => {
    console.error("Could not start a ShopSphere development service.", error);
    process.exitCode = 1;
    stopChildren("SIGTERM");
  });
  child.on("exit", (code) => {
    if (!stopping) {
      process.exitCode = code ?? 1;
      stopChildren("SIGTERM");
    }
  });
}

process.on("SIGINT", () => stopChildren("SIGINT"));
process.on("SIGTERM", () => stopChildren("SIGTERM"));
