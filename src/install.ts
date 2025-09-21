import * as os from "os";

const platform = os.platform();
const arch = os.arch();

let target: string | null = null;

switch (platform) {
case "darwin":
    if (arch === "x64") {
        target = "x86_64-apple-darwin";
    } else if (arch === "arm64") {
        target = "aarch64-apple-darwin";
    }
break;
case "linux":
    if (arch === "x64") {
        target = "x86_64-unknown-linux-gnu";
    } else if (arch === "arm64") {
        target = "aarch64-unknown-linux-gnu";
    }
break;
case "win32":
    if (arch === "x64") {
        target = "x86_64-pc-windows-msvc";
    }
}

if (target == null) throw new Error("Unsupported platform: " + platform);

export function getGrugBin(): string {
    const binPath = `bin/${target}/grug-ls`;
    
    return binPath;
}
