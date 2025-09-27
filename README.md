# grug vscode

This is the VS Code extension for my modding language called grug, which I described in detail [in my blog post](https://mynameistrez.github.io/2024/02/29/creating-the-perfect-modding-language.html).

This repository depends on xijnim's [grug-ls](https://github.com/xijnim/grug-ls/) repository.

## Developing

1. Run `npm install`
2. Run `npm run compile`
3. Press F5 in VS Code to run the extension.

## Publishing updates

You'll need `vsce`, which can be downloaded with `sudo npm install -g @vscode/vsce`.

Run `sudo vsce publish` to publish the update. Don't forget to increment the `version` key at the top of `package.json`!

## Coloring

The `package.json` file contains a `"textMateRules"` key, which specifies the colors.

The hex values have been gotten by using inspect element on the colored code blocks in [my blog post about grug](`https://mynameistrez.github.io/2024/02/29/creating-the-perfect-modding-language.html`), and then looking at the color values in their CSS classes.
