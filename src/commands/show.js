const vscode = require('vscode');

const { showStats } = require('../log/Stats');

const show = function(context){
    vscode.commands.registerCommand( 'codinglog.show', async function () {
        console.log('codinglog.show:');
        showStats(context.workspaceState);
    })
}

module.exports = {
    show
}