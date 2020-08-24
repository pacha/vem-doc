
.. role:: key
.. default-role:: key

Command-line Mode
=================

Apart from allowing you to perform searches and showing messages, the bottom line
of the editor has an important property: it allows you to execute commands.
The line is known as the **command line** and you can access it by pressing:

    :`\:`: move cursor to the command line

After pressing `:`, you're in what it is known as the **command line mode**.

For example, if you type the following and then press `Enter`::

    :sort

Then all the lines of your document will be sorted alphabetically.

These commands starting with colon are known as **ex-commands**. There are
literally hundreds of them in Vim. To get a full list execute the command
``:help ex-cmd-index`` itself.

There are two things you should be aware about this kind of commands:

* Most of them have a short name that you can use instead of the full one. For
  example, ``:write`` (which saves the current buffer to disk) can be written as
  ``:w`` too and ``:substitute`` (which can be used to replace text) can be
  written as ``:s``.

* It is possible to chain them. For example, ``:sort | w`` will sort the lines
  on the current buffer and then save it.

In the rest of this section, you'll get to know some of the most important
commands and also some key shortcuts to work in the command line.

Some important commands
-----------------------

``:<number>`` (eg. ``:120``)
    Go to line number ``<number>``.

``:%s/search parttern/replacement text/``
    Substitute/replace the occurrences of a search pattern. This is probably
    one of the most useful ex-commands and that's why it deserves a section
    by itself. Check out `Substituting
    </docs/users-guide/substituting.html>`__ to know more.

``:g/<pattern>/<ex-command>``
    Execute ``<ex-command>`` in all lines that match ``<pattern>``. Two
    ex-commands that are very useful in this case are:

        * ``:d`` delete line (eg. ``:g/foo/d``, delete all lines that
          contain ``foo``).

        * ``:p`` print line (eg. ``:g/foo/p``, print all lines that contain
          ``foo``).

``:w``
    Write the content of current buffer to disk. Same as pressing `s`. If you're
    working with a new buffer you can pass a filename to save it: ``:w
    name-of-my-new-file.txt``.

``:saveas <new-filename>``
    Create a new file with the content of the current buffer.

``:update``
    Like ``:w`` but only writes if the file has pending changes not saved on
    disk. Useful when chaining it with a command that can change multiple
    buffers at the same time. See ``bufdo`` below.

``:sort``
    Sort the lines of the current document alphabetically. To sort in
    descending order use ``:sort!``.

``:!<shell-command>`` (eg. ``:!ls``)
    Execute a command in the shell where Vem was started. You'll be able to
    see the output of the command and go back to the editor after pressing
    `Enter`.

``:read !<shell-command>`` (eg. ``:read !ls``)
    Insert the output of ``<shell-command>`` as text in the current buffer.

``:help <topic>``
    Open a window with help on the provided topic, which can be any other
    ex-command, any configuration option or any section of the help documents.
    If you type the first letters of topic and press `Tab`, the command line will
    autocomplete the term with available topics in the help files. (**Note:**
    Vim help files also provide documentation about Vim's key bindings. That
    information is not applicable in Vem).

Key shortcuts in the command line
---------------------------------

Like in `insert mode </docs/users-guide/insert-mode.html>`_, there are some
`Ctrl-<key>` combinations that allows you to perform some actions while in
command line mode:

Command history
"""""""""""""""

To repeat previous commands without having to type them again, you can use the
command line history:

    :`Ctrl-j`: Next command in command line history
    :`Ctrl-k`: Previous command in command line history.

You can browse through the previous commands and just press enter when you find
the one that you want to execute again.

These actions are even more useful by the fact that if you type the beginning
of the command and then press `Ctrl-j`, then you'll get the first match in
history that starts with those characters. That allows you to quickly find a
command in history by typing a couple of characters. These actions are very
important to make an efficient use of the command line.

Command line movements
""""""""""""""""""""""

To move the cursor left and right in the command line, use:

    :`Ctrl-h`: Move cursor left
    :`Ctrl-l`: Move cursor right

To go to the beginning and end of the current command, use the same key
combinations that you would normally press in a shell:

    :`Ctrl-a`: Jump to beginning of command line
    :`Ctrl-e`: Jump to end of command line

Command line autocompletion
"""""""""""""""""""""""""""

The command line provides autocompletion for almost any element that you can
type on it: commands, variables, file paths and more. To trigger it, type the
beginning of a command or parameter and press:

    :`Tab`: Autocomplete current term
    :`Shift-Tab`: Autocomplete (opposite direction)

Suggestions will be shown in the status line:

.. image:: /static/img/screenshots/command-line-autocompletion.png
    :class: screenshot
    :target: /static/img/screenshots/command-line-autocompletion.png

And repeated presses of `Tab` and `Shift-Tab` will allow you to move in one and
other direction through the list.

Pasting clipboard contents
""""""""""""""""""""""""""

You can paste text in the command line using:

    :`Ctrl-p`: Paste clipboard contents

Inserting Unicode characters
""""""""""""""""""""""""""""

Like in insert mode, you can insert `digraphs
</docs/users-guide/insert-mode.html>`__ using:

    :`Ctrl-d`: Insert Unicode character (*digraph*)

.. container:: browsing-links

    « `Insert Mode </docs/users-guide/insert-mode.html>`__

    |

    `Searching </docs/users-guide/searching.html>`_ »

