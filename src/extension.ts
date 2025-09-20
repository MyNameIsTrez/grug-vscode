// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { LanguageClientOptions } from 'vscode-languageclient';
import { LanguageClient, ServerOptions } from "vscode-languageclient/node"
import { getGrugBin } from './install';
import * as process from "child_process";
import * as os from "os";

function commandExists(cmd: string): boolean {
	try {
		const checker = os.platform() === "win32" ? "where" : "which";
		process.execSync(`${checker} ${cmd}`, {
			stdio: "ignore",
		});
	} catch (err) {
		return false;
	}

	return true;
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Extension "grug" is now active!')

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('grug.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from grug!');
	});

	let serverCommand;

	if (commandExists("grug-ls")) {
		serverCommand = "grug-ls";
		console.log("Using system grug-ls")
	} else {
		serverCommand = context.asAbsolutePath(getGrugBin());
		console.log("Using automatically downloaded grug-ls");
	}

	const serverOptions: ServerOptions = {
      run: {
        command: serverCommand,
      },
      debug: {
        command: serverCommand,
      },
    };

    const clientOptions: LanguageClientOptions = {
      documentSelector: [{ scheme: "file", language: "grug" }],
    };

	const client: LanguageClient = new LanguageClient(
      "grug-ls",
      "Grug-LS",
      serverOptions,
      clientOptions
    );

	client.start().catch((err) => `grug-ls start error: ${err}`);

	context.subscriptions.push(client);

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
