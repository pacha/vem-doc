
.. role:: key
.. default-role:: key

Command-line mode
=================

Like in `insert mode </docs/insert-mode.html>`_, there are some `Ctrl` `key`
combinations that allow to perform some actions while in the bottom command line
of the editor.

Command history
---------------

To repeat previous commands without having to type them again, you can use the
command line history:

    :`Ctrl-j`: Next command in command line history
    :`Ctrl-k`: Previous command in command line history.

You can browse through the previous commands and just press enter when you find
the one that you want to execute again.

These actions are even more useful by the fact that if you type the beginning
of the command and then press `Ctrl-j`, then you'll get the first match in
history that starts with those characters. That allows you to quickly find a
command in history by typing a couple of characters.

Command line movements
----------------------

To move the cursor left and right in the command line, use:

    :`Ctrl-h`: Move cursor left
    :`Ctrl-l`: Move cursor right

To go to the beginning and end of the current command, use the same key
combinations that you would normally press in a shell:

    :`Ctrl-a`: Jump to beginning of command line
    :`Ctrl-e`: Jump to end of command line

Command line autocompletion
---------------------------

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
--------------------------

You can paste text in the command line using:

    :`Ctrl-p`: Paste clipboard contents

Inserting Unicode characters
----------------------------

Like in insert mode, you can insert `digraphs </docs/insert-mode.html>`_ using:

    :`Ctrl-d`: Insert Unicode character (*digraph*)

