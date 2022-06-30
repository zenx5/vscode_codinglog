const vscode = require('vscode');


const setMail = function(context){
    vscode.commands.registerCommand( 'codinglog.setMail', async function () {
        
        vscode.window.showInputBox()
            .then( response => {
                console.log(response);
            })

    })
}

module.exports = {
    setMail
}