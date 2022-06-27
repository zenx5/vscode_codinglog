const vscode = require('vscode');

const { showStats } = require('../log/GeneralStats');

const show = vscode.commands.registerCommand( 'codinglog.show', async function () {
    console.log('codinglog.show:');
    showStats(context.workspaceState);
})

module.exports = {
    show
}