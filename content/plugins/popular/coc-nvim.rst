
.. role:: key
.. default-role:: key

coc.nvim
========

:Link: https://github.com/neoclide/coc.nvim
:Author: Qiming Zhao <chemzqm at gmail.com>

**Coc.nvim** (Conquer of Completion) is a complete and performant Language
Server Protocol (LSP) client that provides support for features base on the
specific programming language that you're using, like:

    * Language aware autocompletion (eg. completing class methods after typing
      ``.``)
    * Display syntax errors
    * Go to definition
    * Display function/method signature
    * Rename identifier
    * Show usages of identifier

.. image:: /static/img/plugins/coc-nvim.png
    :class: screenshot
    :target: /static/img/plugins/coc-nvim.png

Notes
-----

    * Despite its name, the plugin supports both Vim and Neovim.
    * It offers very smooth autocompletion and very complete LSP support.
    * For an optimal experience use it with very modern versions of Vim (>=8.2)
      or Neovim (>= 0.4.3).
    * You need to install a Language Server for each language you want to use it
      with (https://langserver.org).
    * It has NodeJs as a dependency.
    * Check the `Language Features </config/language-features/index.html>`_
      section for more info on LSP and how it integrates with the editor.

Configuration
-------------

Coc.nvim is fully compatible with Vem. The plugin is configured using two files:

    * Your ``vemrc`` file, to add key mappings (Coc.nvim expects users to define
      their own key mappings instead of adding potentially conflicting ones by
      its own).
    * A ``coc-settings.json`` file to set the global settings of the plugin.

In Vem, LPS features are recommended to be mapped to key sequences starting with `C`.

**Example configuration** (you can add it to your ``vemrc`` file as a base to set your own)::

    """ coc.nvim

    " Location of the coc-settings.json file
    let g:coc_config_home = "~/.config/vem"

    " Make autocompletion smoother
    set updatetime=300

    " Autocompletion mappings
    function! s:check_back_space() abort
      let col = col('.') - 1
      return !col || getline('.')[col - 1]  =~# '\s'
    endfunction
    inoremap <silent><expr> <TAB>
        \ pumvisible() ? "\<C-n>" :
        \ <SID>check_back_space() ? "\<Tab>" :
        \ coc#refresh()
    inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<Tab>"

    " Go to mappings
    nmap <silent> Cd <Plug>(coc-definition)
    nmap <silent> Ct <Plug>(coc-type-definition)
    nmap <silent> Cp <Plug>(coc-implementation)
    nmap <silent> Cr <Plug>(coc-references)

    " Refactoring mappings
    nmap CR <Plug>(coc-rename)
    nmap CF  <Plug>(coc-format)
    xmap CF  <Plug>(coc-format-selected)
    nmap CA  <Plug>(coc-codeaction)
    xmap CA  <Plug>(coc-codeaction-selected)
    nmap CX  <Plug>(coc-fix-current)

    " Coc lists mappings
    nnoremap <silent> Cld  :<C-u>CocList diagnostics<cr>
    nnoremap <silent> Cle  :<C-u>CocList extensions<cr>
    nnoremap <silent> Clc  :<C-u>CocList commands<cr>
    nnoremap <silent> Clo  :<C-u>CocList outline<cr>
    nnoremap <silent> Cls  :<C-u>CocList -I symbols<cr>

    " Show info mappings
    nnoremap <silent> Ci :call CocAction('doHover')<CR>

    " Highlight current identifier usage in current document
    autocmd CursorHold * silent call CocActionAsync('highlight')

Check Coc documentation for more mappings and commands.

An example ``~/.config/vem/coc-settings.json`` file::

    {
        "suggest.autoTrigger": "none"
    }

This will disable autocompletion suggestions as you type and only trigger them when pressing `Tab`.
Check ``:help coc-configuration`` for the full list of available settings.

