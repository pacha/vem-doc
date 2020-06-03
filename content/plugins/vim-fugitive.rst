
.. role:: key
.. default-role:: key

vim-fugitive
============

:Link: https://github.com/tpope/vim-fugitive
:Author: Tim Pope

Fugitive is a plugin to manage Git. It adds a ``:Git`` command that allows you
to perform any Git action within the editor.

.. image:: /static/img/plugins/vim-fugitive.png
    :class: screenshot
    :target: /static/img/plugins/vim-fugitive.png

Configuration
-------------

Fugitive defines two global mappings that conflict with Vem ones, to disable them
add the following line to your ``vemrc`` file::

    let g:fugitive_no_maps = 1

This doesn't affect the rest of mappings defined by Fugitive in its own windows
(such as the ones to staging/unstaging files), but only the global ones.

If you need those mappings, you can add  them in your ``vemrc`` file with
mappings like these ones (adapt them to your liking)::

    " on the command line, insert path to the current fugitive object
    cnoremap <expr> <C-r><C-g> fnameescape(fugitive#Object(@%))

    " copy the path of the current fugitive object to the clipboard
    nnoremap <silent> <leader>fo :<C-U>call setreg(g:vem_main_clipboard, fugitive#Object(@%))<CR>

