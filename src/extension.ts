'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {CurrentSymbol} from "./CurrentSymbol";
import {CurrentSymbolController} from "./CurrentSymbolController";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error).
    // This line of code will only be executed once when your extension is activated.
    console.log('Congratulations, your extension "CurrentSymbol" is now active!');

    // create a new word counter
    let currentSymbol = new CurrentSymbol();
    let controller = new CurrentSymbolController(currentSymbol);

    // Add to a list of disposables which are disposed when this extension is deactivated.
    context.subscriptions.push(currentSymbol);
    context.subscriptions.push(controller);
}

// this method is called when your extension is deactivated
export function deactivate() {
}