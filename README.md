# grug vscode

This is the VS Code extension for my modding language called grug, which I described in detail [in my blog post](https://mynameistrez.github.io/2024/02/29/creating-the-perfect-modding-language.html).

The full name of this extension is `grug`.

If `grug` doesn't show up in your VS Code's Extensions tab, then your VS Code might not be using Microsoft's marketplace. On Arch Linux you can work around this by installing `code-marketplace` from the AUR.

This repository depends on xijnim's [grug-ls](https://github.com/xijnim/grug-ls/) repository.

## Developing

1. Run `npm install`
2. Run `npm run compile`
3. Press F5 in VS Code to run the extension.

## Publishing updates

You'll need `vsce`, which can be downloaded with `sudo npm install -g @vscode/vsce`.

Run `sudo vsce publish` to publish the update. Don't forget to first add a commit that increments the `version` key at the top of `package.json` and then run `npm i --package-lock-only`, before publishing the update!

## Coloring

The `package.json` file contains a `"textMateRules"` key, which specifies the colors.

The hex values have been gotten by using inspect element on the colored code blocks in [my blog post about grug](`https://mynameistrez.github.io/2024/02/29/creating-the-perfect-modding-language.html`), and then looking at the color values in their CSS classes.
