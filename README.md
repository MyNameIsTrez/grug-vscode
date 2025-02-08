# grug vscode

This is the VS Code extension for my modding language called grug, which I described in detail [in my blog post](https://mynameistrez.github.io/2024/02/29/creating-the-perfect-modding-language.html).

## Publishing updates

You'll need `vsce`, which can be downloaded with `sudo npm install -g @vscode/vsce`.

Run `sudo vsce publish` to publish the update. Don't forget to increment the `version` key at the top of `package.json`!
