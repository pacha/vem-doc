
.. role:: key
.. default-role:: key

Getting Help
============

Unintended changes
""""""""""""""""""

It can happen —specially when learning Vem, but also later too— that you
mistakenly press a different key than the one you really intended to use. Since
every key has an associated action, you may end up in an unexpected place of
your document or modifying it in an unintentional way.

If this happens, just jump back to where you were or undo the latest action with:

    :`q`: undo last change
    :`R`: jump to previous position

`q` undoes the last change and jumps back too, so you can use that one to ensure
that you didn't modify anything by mistake and if the latest change was correct
you can just redo it with `Q`.

In any case, you can also check the timestamps of the latest changes to see, at
any time, when the last change to the document happened::

    :undolist

Unexpected behavior
"""""""""""""""""""

If you find that a key, or a key combination, does something unexpected, it can
be that one plugin is overriding Vem's default behavior. Most plugins define
their custom keyboard mappings using the ``<leader>`` key (usually `\\`) as
prefix or allow you to define your own mappings to avoid conflicts with existing
key mappings. However, if they define a new behavior for a key that shadows
Vem's default one, then it may be difficult to detect until you try use such key.

In any case, if you find a key that performs a different action to what you
expect, you can check how its action was mapped with::

    :verbose map KEY

where ``KEY`` is:

* A lower or uppercase letter.
* A `Ctrl` key combination, specified as ``<C-f>``, ``<C-t>``, ...
* A special key: ``<Tab>``, ``<Space>``, ``<Enter>`` or ``<BS>`` (for
  backspace).

``map`` will list mappings in normal and visual modes, but you also query the
mappings of a specific mode with:

* ``nmap`` for normal mode
* ``xmap`` for visual mode
* ``imap`` for insert mode

The output of the command is something like::

    x  f             <Plug>vem_change-
            Last set from /usr/local/share/vem10/src/mappings.vim line 226
    n  f             <Plug>vem_change_word-
            Last set from /usr/local/share/vem10/src/mappings.vim line 221

The first column is the mode (``n``: normal, ``x``: visual, ``i``: insert), the
second the key and the third the associated action. Finally, a line is included
that specifies where the mapping was defined. This can help to identify which
plugin is redefining a key.

All actions set by Vem are prefixed with ``<Plug>vem``.

Getting help
""""""""""""

You can get help about any topic using the command line. Just type::

    :help <topic>

With `Tab` you can autocomplete the topic string.

You can use the ``help`` command to find more information about configuration
options, commands or mappings. For example, you can get more information about
the ``:sort`` ex-command with::

    :help :sort

After executing this command, the screen will be split showing your current
document and a new `window </docs/users-guide/windows.html>`__ displaying the
contents of help. This is a regular editor window and you can browse its
contents with the usual movement keys. In particular, you'll see that some terms
are highlighted. Vim help files use `tags </docs/users-guide/tags.html>`__ to
hyperlink documents together. Therefore, you can:

* jump to a topic by placing the cursor on top of a highlighted term and
  pressing `Space` `o`
* jump back to the previous topic with `Space` `i`
* close the window with `x`

.. Note:: The key command information provided by ``:help`` is the one related
   to the original Vim ones, not Vem's. To get a description of Vem commands use
   this tutorial, visit the `User's guide </docs/users-guide/index.html>`__ or
   check the `Key command cheat sheets </docs/cheat-sheets/index.html>`__.

