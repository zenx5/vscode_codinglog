const vscode = require('vscode');

const inputEmail = function(context){
    vscode.commands.registerCommand( 'codinglog.inputEmail', async function () {
        vscode.window.showInputBox( )
            .then( response => {
                console.log(response)
            })
    })
}

module.exports = {
    inputEmail
}