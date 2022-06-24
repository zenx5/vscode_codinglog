// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const { keysCount, showStats } = require('./src/log/GeneralStats');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "codinglog" is now active!');
	context.workspaceState.update('stats.undo',0);
	context.workspaceState.update('stats.rendo',0);
	context.workspaceState.update('stats.keys',0);
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('codinglog.startlog', async function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.workspace.onDidChangeTextDocument(async (event)=>{
			//const { fileName, uri } = event.document;
			const reason = event.reason;
			const text = event.contentChanges[0].text;
			keysCount(context.workspaceState, reason, text);
			
		})
		vscode.window.showInformationMessage('Codinglog is now active!');
	});
	context.subscriptions.push(disposable);
	disposable = vscode.commands.registerCommand( 'codinglog.show', async function () {
		console.log('codinglog.show:');
		showStats(context.workspaceState);
	})
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {
	
}

module.exports = {
	activate,
	deactivate
}
