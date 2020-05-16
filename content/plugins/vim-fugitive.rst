
vim-fugitive
============

:Link: https://github.com/tpope/vim-fugitive
:Author: Tim Pope
:Category: Git integration

Description
-----------

Fugitive is a plugin to manage Git. It adds a ``:Git`` command that allows you
to perform any Git action within the editor.

.. image:: /static/img/plugins/vim-fugitive.png
    :class: screenshot
    :target: /static/img/plugins/vim-fugitive.png

Vem compatibility
-----------------

Fugitive is compatible with Vem in general. The plugin defines some mappings for
the buffers it creates, such as the staging/unstaging or the diff ones, but they
don't conflict with Vem's mappings in normal buffers.

There are only two global mappings that can collide with Vem ones, but they can
be disabled by adding the following line to your ``vemrc`` file::

    let g:fugitive_no_maps = 1

