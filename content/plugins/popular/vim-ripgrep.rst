
.. role:: key
.. default-role:: key

vim-ripgrep
===========

:Link: https://github.com/jremmen/vim-ripgrep.git
:Author: John Remmen

vim-ripgrep is a wrapper around the `ripgrep (rg)
<https://github.com/BurntSushi/ripgrep>`__ file searcher tool (an alternative to
``grep``).

Notes
-----

* Integrating a searching tool like ripgrep doesn't necessarily require a
  plugin. Vim provides configuration options to configure the ``:grep`` command
  so it calls a different shell tool than the actual ``grep`` one. Check ``:help
  'grepprg'`` to know more. This plugin provides an alternative ``:Rg <patter>``
  that can result in a nicer user experience since the results are piped
  directly into the Quickfix window without the shell executing the command
  showing up or the screen flickering. It also supports some configuration
  options described in its `README
  <https://github.com/jremmen/vim-ripgrep/blob/master/README.md>`__ file.

* Other plugins that integrate ``ripgrep`` in Vim are `ack.vim
  <https://github.com/mileszs/ack.vim>`__ (despite its name it doesn't only
  integrate with Ack) and `vim-fzf </plugins/popular/vim-fzf.html>`__.

Configuration
-------------

vim-ripgrep doesn't have any incompatibility with Vem and doesn't require any
special configuration to work with it.

