
.. role:: key
.. default-role:: key

vim-fzf
=======

:Link: https://github.com/junegunn/fzf.vim
:Author: Junegunn Choi

fzf is a fast and popular command line fuzzy finder. vim-fzf is a plugin that
integrates it in Vim allowing you to perform fuzzy searches on files, buffers,
marks and many other elements.

.. image:: /static/img/plugins/vim-fzf.png
    :class: screenshot
    :target: /static/img/plugins/vim-fzf.png

.. admonition:: CtrlP vs fzf

    By default, Vem provides fuzzy search using the `CtrlP
    <https://github.com/ctrlpvim/ctrlp.vim>`__ plugin. A nice feature of CtrlP
    is that it doesn't have any dependencies. It is completely written in
    VimScript, which means that no additional system executables are required
    for it to run.

    You can seamlessly replace CtrlP's functionality with the one provided by
    fzf. One advantage of fzf is its speed, so if you have to work with very
    large projects and notice that CtrlP struggles a bit with them, you might
    want to consider using it. As a trade-off, you need to have the fzf binary
    present in your system to use it.

Notes
-----

To install fzf in Vem, you'll need to:

    * Install ``fzf`` binary in your system

    * Install the ``fzf`` Vim plugin. This one is included in the main ``fzf``
      repository (although it can also be installed independently) and provides
      a basic wrapping function that can be used for the user to define its own
      commands that make use of fzf's functionality. However, defining these
      commands is not necessary if you follow the next step.

    * Install the ``fzf.vim`` Vim plugin. This one makes use of the basic
      functionality provided by the previous plugin to define a number of
      commands. These commands apply fzf's functionality to many different
      contexts in the editor, so they can be used to search for files, buffers,
      tags, marks, windows and many other elements.

You can check the `README <https://github.com/junegunn/fzf.vim>`__ file of the
``fzf.vim`` for more complete instructions.

Configuration
-------------

fzf is fully compatible with Vem out of the box, but you can add the following
configuration to your `vemrc </config/vemrc.html>`__ for a more complete
integration::

    " Replace CtrlP as fuzzy finder
    " Note: use 'w', 'W' in QWERTY and QWERTZ, and 'z', 'Z' in AZERTY
    nmap w :Buffers<CR>
    xmap w :<C-u>Buffers<CR>
    nmap <Space>w :Files<CR>
    xmap <Space>w :<C-u>Files<CR>
    nmap <Space>W :History<CR>
    xmap <Space>W :<C-u>History<CR>

    " Use the Vem's typical key maps to open splits and tabs
    let g:fzf_action = {
      \ 'ctrl-o': function('s:noop'),
      \ 'ctrl-^': 'tab split',
      \ 'ctrl-_': 'split',
      \ 'ctrl-]': 'vsplit' }
    function! s:noop(lines) abort
    endfunction

    " Use current color scheme colors
    let g:fzf_colors =
    \ { 'fg':      ['fg', 'Normal'],
      \ 'bg':      ['bg', 'Normal'],
      \ 'hl':      ['fg', 'Special'],
      \ 'fg+':     ['fg', 'CursorLine', 'CursorColumn', 'Normal'],
      \ 'bg+':     ['bg', 'CursorLine', 'CursorColumn'],
      \ 'hl+':     ['fg', 'Special'],
      \ 'info':    ['fg', 'PreProc'],
      \ 'border':  ['fg', 'Ignore'],
      \ 'prompt':  ['fg', 'Conditional'],
      \ 'pointer': ['fg', 'Exception'],
      \ 'marker':  ['fg', 'Keyword'],
      \ 'spinner': ['fg', 'Label'],
      \ 'header':  ['fg', 'Comment'] }

