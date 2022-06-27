const vscode = require('vscode');

const { showStats } = require('../log/Stats');

const show = vscode.commands.registerCommand( 'codinglog.show', async function () {
    console.log('codinglog.show:');
    showStats(vscode.extensions.context.workspaceState);
})

module.exports = {
    show
}