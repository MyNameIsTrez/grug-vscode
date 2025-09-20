# Grug-LS
> A Language server for grug

## Installation
First clone the repo, and cd into it
```bash
git clone git@github.com:xijnim/grug-ls.git
cd grug-ls
```

Then create a file called "log_path" and add to it the place you wanna store the log files.
Example:
```bash
echo "$HOME/Projects/grug-ls > log_path
```

Then build the project
```bash
cargo build
```

After that, the process is editor specific on how to add a language server

### Neovim
Using lspconfig, you can simply add this code to your init.lua
```lua
local util = require('lspconfig.util')
require('lspconfig.configs').grug = {
      default_config = {
        cmd = { '<insert-the-path-for-your-grug-ls-here>' },
        filetypes = { 'grug' },
        single_file_support = false,
        root_dir = function(fname)
          return util.search_ancestors(fname, function(path)
            if util.path.is_file(util.path.join(path, 'mod_api.json')) then
              return path
            end
          end)
        end,
      },
      docs = {
        description = [[
    https://github.com/xijnim/grug-ls

    Language server for Grug.
        ]],
      },
}
```
Then you can use setup the lsp like you would any other:
```lua
require("lspconfig").grug.setup({
    on_attach = on_attach,
    capabilities = capabilities,
})
```
