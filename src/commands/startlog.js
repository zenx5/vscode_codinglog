const vscode = require('vscode');

const { keysCount } = require('../log/Stats');

const startlog = vscode.commands.registerCommand('codinglog.startlog', async function () {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    vscode.workspace.onDidChangeTextDocument(async (event)=>{
        //const { fileName, uri } = event.document;
        const reason = event.reason;
        const text = event.contentChanges[0].text;
        keysCount(vscode.extensions.context.workspaceState, reason, text);
        
    })
    vscode.window.showInformationMessage('Codinglog is now active!');
});

module.exports = {
    startlog
}