
.. role:: key
.. default-role:: key

vim-devicons
============

:Link: https://github.com/ryanoasis/vim-devicons
:Author: Ryan L McIntyre

Vim Devicons provides many glyphs (icons) for many development related
filetypes.

.. image:: /static/img/plugins/vim-devicons.png
    :class: screenshot
    :target: /static/img/plugins/vim-devicons.png

Notes
-----

* It provides support for many popular Vim plugins (NERDTree, vim-airline,
  CtrlP, powerline, denite, unite, lightline.vim, vim-startify, vimfiler,
  vim-buffet and flagship).

* It requires for you to use a patched font. You can download one from `Nerd
  Fonts <https://github.com/ryanoasis/nerd-fonts#font-installation>`__ or patch
  `your own <https://github.com/ryanoasis/nerd-fonts#font-patcher>`__.

Configuration
-------------

`Vem Tabline <https://github.com/pacha/vem-tabline>`__, the plugin used by Vem
to display the names of the buffers at the top of the editor, autodetects when
vim-devicons is installed and displays a file type icon next to each filename.

If you want to have vim-devicons installed but not to show the file types in the
tabline you can add the following line to your `vemrc
<http://localhost:8000/config/vemrc.html>`__ file::

    let g:vem_tabline_show_icon = 0

