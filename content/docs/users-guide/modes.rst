
.. role:: key
.. default-role:: key

Modes
=====

Vem is a modal text editor. That means that, at any given time, it can be in one
of several possible modes. Each mode determines what is the action executed when
each key is pressed. There are three main modes:

* **Normal mode**: in this mode, the keyboard acts like a control panel. Each key
  is usually associated to a different command. For example, ``s`` saves the
  current file and ``.`` moves the cursor to the end of the current line. This
  is also known as **command mode**.

* **Insert mode**: when typing in this mode, characters get inserted in the
  document as it happens in most conventional editors (most editors have this
  only mode). Only ``Ctrl`` key combinations, perform editing actions.

* **Visual mode**: this is the mode that is active when there's a region of text
  selected. Some keys in this mode behave as they do in normal mode while others
  change their effect. For example, while movements are the same than in normal
  mode, many actions that affect a single line (like ``v`` to comment out code
  or ``e`` to copy text) in visual mode they affect the whole selection.

An additional mode is `command-line mode
</docs/users-guide/command-line-mode.html>`_ that allows to execute commands in
the last line of the editor, such as ``:sort`` to sort all lines in a document,
or to provide search terms. Since this mode is a bit different from the
other ones is explained in its own section.

Changing modes
--------------

During an editing session, it is very common to jump from one mode to another.
You can change some parts of the document or move across its different parts in
normal mode and then enter insert mode to add more text.

Changing modes is ones of the aspects that new users to modal editors take a bit
of time to get familiar with. After all, most editors only have a single mode
—what in Vim/Vem would be the *insert* one. Still is this multiplexing of the
keyboard what makes this kind of editors so efficient. It allows the user to
have a large amount of commands just at the fingertips and to edit text, quite
literally, at the speed of typing.

After starting Vem, the editor is, by default, in normal mode. To start insert
mode you can use:

    :`i`: start insert mode to the left of the current character

    :`o`: start insert mode to the right of the current character

To go back to normal mode use:

    :`Ctrl-o`: start normal mode

you can also use `Esc`, which is the key traditionally used in Vim. In Vem,
however, the `Ctrl-o` combination is preferred because the position of `Esc` is
much less comfortable than it was in the terminal where the original Vi editor
was created (which, nowadays, would be the current position of `Tab`).

To start visual mode, you need to be in normal mode first. Then you can press:

    :`G`: start visual mode

Once in visual mode you can move the cursor to define the text selection that
you want and operate over it using the visual mode commands (like `e` *copy*,
`d` *cut* or `c` *delete*). The execution of many of these commands will put you
back to normal mode. If you want to leave visual mode without performing any
action (ie. deselecting the current selection), you can just press `Ctrl-o`.

To make switching modes easier in certain situations, many commands perform an
action and switch modes at the same time. For example, `f` deletes the word
under the cursor and switches to insert mode. All these cases are explained in
next sections of this guide.

