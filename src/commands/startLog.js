const vscode = require('vscode');

const { keysCount } = require('../log/Stats');

const startLog = function(context){
    vscode.commands.registerCommand('codinglog.startLog', async function () {
    // The code you place here will be executed every time your command is executed

    if(context.workspaceState._id.substr(0,9) !== "undefined") {
        // Display a message box to the user
        vscode.workspace.onDidChangeTextDocument(async (event)=>{
            //const { fileName, uri } = event.document;
            const reason = event.reason;
            const text = event.contentChanges[0].text;
            keysCount(context.workspaceState, reason, text);
        })
        vscode.window.showInformationMessage('Codinglog is now active!');
    }else{        
        console.log('context:', context ) 
//        console.log('uri:', context.logUri.fsPath )
        vscode.window.showErrorMessage("Starlog, L19: Save Workspace before, ")
        //vscode.window.showInformationMessage('Codinglog is not active!');
    }    
    })
};

module.exports = {
    startLog
}