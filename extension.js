const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('NeoObjectPascal extension is now active');

    let disposable = vscode.commands.registerCommand('neoobjectpascal.run', async (uri) => {
        try {
            // Get the file path
            let filePath;
            if (uri && uri.fsPath) {
                filePath = uri.fsPath;
            } else if (vscode.window.activeTextEditor) {
                filePath = vscode.window.activeTextEditor.document.uri.fsPath;
            } else {
                vscode.window.showErrorMessage('No NeoObjectPascal file selected');
                return;
            }

            // Check if file has .npas extension
            if (!filePath.endsWith('.npas')) {
                vscode.window.showErrorMessage('Selected file is not a .npas file');
                return;
            }

            // Check if file exists
            if (!fs.existsSync(filePath)) {
                vscode.window.showErrorMessage('File does not exist: ' + filePath);
                return;
            }

            // Get the JAR path from configuration
            const config = vscode.workspace.getConfiguration('neoobjectpascal');
            let jarPath = config.get('jarPath');

            // Validate JAR path
            if (!jarPath || jarPath.trim() === '') {
                const response = await vscode.window.showErrorMessage(
                    'NeoObjectPascal JAR path is not configured. Please set the path in settings.',
                    'Open Settings'
                );
                if (response === 'Open Settings') {
                    vscode.commands.executeCommand('workbench.action.openSettings', 'neoobjectpascal.jarPath');
                }
                return;
            }

            // Normalize the JAR path
            jarPath = jarPath.trim();
            
            // Build the full JAR file path
            const jarFileName = 'neoobjectpascal-1.0-SNAPSHOT-jar-with-dependencies.jar';
            const fullJarPath = path.join(jarPath, jarFileName);

            // Check if JAR file exists
            if (!fs.existsSync(fullJarPath)) {
                vscode.window.showErrorMessage(
                    `JAR file not found: ${fullJarPath}\n\nPlease verify the path in settings.`
                );
                return;
            }

            // Build the command
            const command = `java -jar "${fullJarPath}" -q "${filePath}"`;

            // Get or create terminal
            let terminal = vscode.window.terminals.find(t => t.name === 'NeoObjectPascal');
            if (!terminal) {
                terminal = vscode.window.createTerminal('NeoObjectPascal');
            }

            // Show terminal and execute command
            terminal.show();
            terminal.sendText(command);

            vscode.window.showInformationMessage('Running NeoObjectPascal file: ' + path.basename(filePath));

        } catch (error) {
            vscode.window.showErrorMessage('Error running NeoObjectPascal: ' + error.message);
            console.error('NeoObjectPascal execution error:', error);
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {
    console.log('NeoObjectPascal extension is now deactivated');
}

module.exports = {
    activate,
    deactivate
};
