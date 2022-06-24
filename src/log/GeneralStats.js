const vscode = require('vscode');

const keysCount = (workspaceState, reason, text) => {
    if( reason === 1){
        let undo = workspaceState.get('stats.undo',0);
        workspaceState.update('stats.undo', undo + 1);
    }
    else if( reason === 2){
        let rendo = workspaceState.get('stats.rendo',0);
        workspaceState.update('stats.rendo', rendo + 1);
    }
    else{
        console.log(text)
        let keys = workspaceState.get('stats.keys',0);
        workspaceState.update('stats.keys', keys + 1);
        //let specifyKey = workspaceState.get('stats.keys.'+text,0);
        //workspaceState.update('stats.keys.'+text, specifyKey + 1);
    }
}

const showStats = (workspaceState) => {
    ['stats.undo','stats.rendo','stats.keys'].forEach(key => {
        console.log(key, workspaceState.get(key, 0));
    })
    
}

module.exports = {
    keysCount,
    showStats
}