
.. role:: key
.. default-role:: key

Language Servers
================

A great deal of actions that you can perform with the editor are independent of
the language of the file which you're editing. You can perform most movements
and text transformations no matter if you're working on a C, JavaScript or Rust
file. There are, however, some features such as *Go to definition*, *Show
function/method signature* or *Display syntax errors* that require specific
knowledge about the syntax of the language that you're using.

By default, only language agnostic features are supported by Vem. To support
language dependent features you have to connect Vem to a **Language Server** of
the programming language you're interested on. Language Servers are programs
that contain the expert knowledge about that programming language and
communicate with the editor using a standard protocol known as **LSP** (Language
Server Protocol). Since the protocol is standard, the same language server can
be used by multiple editors such as Vim/Vem, VSCode or Emacs, for example, and
that the development efforts of the community for a given language server
benefit all the editors simultaneously. You can have language servers for
different languages installed simultaneously too, and they will be used
depending on the files that you have open at the moment.

Not all language servers offer all possibilities. Which capabilities are
supported depend on the language they are created for and their particular
implementation. However, the most common supported actions are:

    * **Code completion** (eg. offering methods of a class after typing ``.``)
    * **Go to definition** (go to the location where a symbol is first defined)
    * **Find references** (show a list of all usages of a symbol)
    * **Diagnostics** (show list of all syntax errors, warnings and hints)
    * **Information on hover** (show documentation about the current symbol)
    * **Signature help** (show current function/method signature)
    * **Format code** (format the whole document or a section of it automatically)
    * **Rename** (rename symbol across project)
    * **Folding** (fold code based on the language syntax)

To get a list of all available options you can check the official
`specification <https://microsoft.github.io/language-server-protocol/specifications/specification-current/>`_.


How to use a Language Server
----------------------------

To make use of a Language Server you need to go through the following steps:

Install a LSP plugin for Vim
""""""""""""""""""""""""""""

To give Vim the ability to talk to a language server, a plugin is necessary.
There are many available:

- `Coc.nvim <https://github.com/neoclide/coc.nvim>`_
- `ALE <https://github.com/dense-analysis/ale>`_
- `LanguageClient-neovim <https://github.com/autozimu/LanguageClient-neovim>`_
- `vim-lsp <https://github.com/prabirshrestha/vim-lsp>`_
- `vim-lsc <https://github.com/prabirshrestha/vim-lsc>`_

Despite their names all are available for both Vim and Neovim. However, most of
them make use of features that are only available in the latest versions of
these editors, therefore make sure you use the newest version possible of either
one.

Sometimes, the LSP plugins may have dependencies themselves. For example,
`Coc.nvim <https://github.com/neoclide/coc.nvim>`_ depends on NodeJS being
installed on the system, while `LanguageClient-neovim
<https://github.com/autozimu/LanguageClient-neovim>`_ has no dependencies.
Depending on which plugin you decide to use, you may need to install the
required ones.

.. admonition:: Installing coc.nvim

   Check the `page on coc.nvim </plugins/popular-plugins/coc-nvim.html>`__ in
   the plugin documentation section for more info on how to install this LSP
   plugin in Vem.

.. admonition:: Native LSP support in Neovim

    Neovim offers native LSP support from version 0.5.0, so this first
    step may not be necessary if you're using that version.
    (https://neovim.io/doc/user/lsp.html)

Install a Language Server
"""""""""""""""""""""""""

There are Language servers available for most programming languages. Check
https://langserver.org/ or
https://microsoft.github.io/language-server-protocol/implementors/servers/
for a complete list.

Configure the LSP plugin to use your Language Server
""""""""""""""""""""""""""""""""""""""""""""""""""""

Once you have your Language Sever installed, you have to configure the LSP
plugin so it can access it. Usually the information that you have to provide is:

* The name of the server.
* If it is accessed as an executable file or as an open socket (and the command
  line or network address to access it).
* Some extra configuration that you can pass to the Language Server itself when
  connecting to it.

Some LSP plugins allow you to pass this information as a dictionary in your
``vemrc`` file, others provide already preconfigured set-ups for most popular
Language Servers and others allow you to install an additional plugin with the
configuration you need for popular ones too. Follow the instructions of your LSP
plugin to know how to do this in your case.

Set the key mappings to use the LSP features
""""""""""""""""""""""""""""""""""""""""""""

Most LSP plugins don't define specific key mappings for the LSP features so they
don't clash with mappings that are already defined by the user. Instead, they
define ``<Plug>`` actions or command-line commands that you can use to define
your own key mappings. For example, if your LSP plugin defines
``<Plug>(lsp-definition)`` as the action for *Go to definition*, you can create
your own mapping in your ``vemrc`` like::

    nmap <silent> Cd <Plug>(lsp-definition)

Vem doesn't create mappings for those features neither but reserves all key
mappings starting with `C` for them. The following is a list of recommended
mappings (you don't have to necessarily define them like this, but you can use
this list as a starting point):

    :`C` `i`: Show identifier information
    :`C` `s`: Show signature information
    :`C` `d`: Go to definition
    :`C` `t`: Go to type definition
    :`C` `p`: Go to implementation
    :`C` `r`: Find references of identifier
    :`C` `u`: Highlight usages of identifier
    :`C` `a`: Show possible code actions
    :`C` `w`: List symbols in workspace
    :`C` `b`: List symbols in buffer
    :`C` `F`: Format document
    :`C` `R`: Rename identifier

