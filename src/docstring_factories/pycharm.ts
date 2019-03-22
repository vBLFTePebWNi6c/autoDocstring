import * as interfaces from '../docstring_parts';
import { BaseFactory } from './base_factory'
import * as vscode from 'vscode';

export class PyCharmFactory extends BaseFactory {

    generateSummary(docstring: interfaces.DocstringParts){
        if (this._includeName) {
            this._snippet.appendText(`${docstring.name} `);
        }

        this._snippet.appendPlaceholder("[summary]");
        this.appendNewLine()
        this.appendNewLine()
    }

    generateDescription() {
        this._snippet.appendPlaceholder("[description]");
        this.appendNewLine();
        this.appendNewLine();
    }

    formatDecorators(decorators: interfaces.Decorator[]) {}

    formatArguments(docstring: interfaces.DocstringParts) {
        for (let arg of docstring.args) {
            this.appendText(":param " + arg.var + ": ")
            this.appendPlaceholder("[description]")
            this.appendNewLine()
        }
    }

    formatKeywordArguments(docstring: interfaces.DocstringParts) {
        for (let kwarg of docstring.kwargs) {
            this.appendText(":param " + kwarg.var + ": ")
            this.appendPlaceholder("[description]")
            this.appendNewLine()
        }
    }

    formatRaises(raises: interfaces.Raises[]) {
        for (let raise of raises) {
            this.appendText(":raises " + raise.exception + ": ");
            this.appendPlaceholder("[description]");
            this.appendNewLine()
        }
    }

    formatReturns(returns: interfaces.Returns) {
        this.appendText(":return: ");
        this.appendPlaceholder("[description]");
        this.appendNewLine()
    }
}
