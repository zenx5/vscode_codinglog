// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// const vscode = require('vscode');
const commands = require('./src/commands/index.js');


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Inicializacion de la data
	console.log('Congratulations, your extension "codinglog" is now active!');
	context.workspaceState.update('stats.undo',0);
	context.workspaceState.update('stats.rendo',0);
	context.workspaceState.update('stats.keys',0);
	
	// LEER ANTES DE AGREGAR NUEVOS COMANDOS
	// Los comandos deben ser "pushados" en el array de "subscriptions"
	// Pero deben ser definidos antes dentro de la carpeta "commands"
	// (revisar el archivo index.js de esa carpeta)
	// Los commandos deben estar definidos tambien en el archivo package.json
	// en la clave "contributes"
	console.log( 'initing' )
	context.subscriptions.push( commands.startLog(context) );
	context.subscriptions.push( commands.show(context) );
	context.subscriptions.push( commands.setMail(context) );
	//console.log( 'extension.js, L31: ', context.subscriptions )
	//context.subscriptions.push( commands.push );
	//context.subscriptions.push( commands.stoplog );
	
}

// this method is called when your extension is deactivated
function deactivate() {
	
}

module.exports = {
	activate,
	deactivate
}
