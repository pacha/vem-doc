
.. role:: key
.. default-role:: key

Formatting
==========

This sections of Vem's documentation covers many actions that allow you to
format and edit your code or text. It is important to get familiar with them as
they may save you from a lot of manual work and considerably reduce the number
of times that you have to switch between Normal and Insert mode.

Adding white-space
------------------

The following actions allow you to add different forms of white-space without
having to leave Normal mode:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`(`: insert space before the cursor
        :`)`: insert space after the cursor

        :`y`: insert blank line above the cursor
        :`n`: insert blank line below the cursor

        :`Tab`: indent current line or text selection
        :`Shift-Tab`: unindent current line or text selection

        :`Enter`: insert newline character


    .. container:: tab qwertz

        :`(`: insert space before the cursor
        :`)`: insert space after the cursor

        :`z`: insert blank line above the cursor
        :`n`: insert blank line below the cursor

        :`Tab`: indent current line or text selection
        :`Shift-Tab`: unindent current line or text selection

        :`Enter`: insert newline character

    .. container:: tab azerty

        :`(`: insert space before the cursor
        :`)`: insert space after the cursor

        :`y`: insert blank line above the cursor
        :`n`: insert blank line below the cursor

        :`Tab`: indent current line or text selection
        :`Shift-Tab`: unindent current line or text selection

        :`Enter`: insert newline character


Replacing a single character
----------------------------

Sometimes you just have to change the character the cursor is on. You can switch
to insert mode, delete the character, type the new one and switch back to normal
mode, which means 4 key strokes for such an easy task. To change a character in
a quicker way, just press `r` when the cursor is over the character to replace
and then type the new one:

    :`r`: replace character under the cursor

If you have an active selection when you press `r`, all the characters of the
selection will be replaced by the new character that you enter:

.. parsed-literal::
    :class: terminal

    My Title
    :wi:`-`\ :gi:`-------`

    :y:`↓ After 'r='`

    My Title
    :wi:`-`\ =======


Joining lines
-------------

You can remove newlines between lines with:

    :`&`: join lines

For example:

.. parsed-literal::
    :class: terminal

    :wi:`H`\ ello
    World

    :y:`↓ After '&'`

    Hello█World

If you want to join more than two lines, just select them first and then press
`&`.


Changing case
-------------

You can change the case of text with:

    :`Ctrl-u`: toggle case of character under the cursor. If there's an active
               selection, all the characters in the selection are toggled.

Formatting code
---------------

To automatically (re)format your code, you can use:

    :`=`: format current file automatically. If there's an active visual
          selection, only the selected code is formatted.

Vim provides basic re-indenting of Lisp and C-style programming languages out of
the box. However, for other languages and more advanced formatting, you may want
to provide your own tool using the ``equalprg`` option.

For example, to format JSON, you can use the popular ``jq`` command line tool::

    setlocal equalprg=jq\ .

Once set, this option will make `=` to execute ``jq .`` passing the
contents of the current file as ``stdin`` and replacing them with the result
(``stdout``) of the execution.

In this case, to make the configuration persist, we can add that option to the
file type configuration file::

    ~/.config/vem/ftplugin/json.vim

That way, `=` will work correctly for any JSON file we open in the editor.

.. Note:: for more information on how to add per-file-type configuration options
   take a look at `Configuration per filetype </config/configuration-per-filetype.html>`_

So, in summary, to use an external tool to format your code:

    * Make sure the tool is installed and available in the ``PATH``.

    * Make sure the tool can take text via ``stdin`` and output the result to
      ``stdout`` (most of them do, but some may require passing a specific
      parameter to enable it).

    * Set the ``equalprg`` option in your file type specific configuration file
      using the full command line expression that allows the tool to work with
      ``stdin`` and ``stdout``. *Note: when setting the option escape all spaces
      with a backslash*.

    * Remember that changes to a file type configuration file won't affect to
      files that are already open in the editor unless you close/open them again
      or reload the configuration with ``:source``.


Formatting text
---------------

If you don't want your text to extend past a given width, you can wrap your
lines at a certain column width ``textwidth`` (or ``tw`` for short)::

    set textwidth=80

Once set, the lines will be arranged automatically when you reach the specified
column. Lines will be wrapped at the last white space character before the
maximum width column. To disable it, set the option back to its default value
(``0``)::

    set textwidth=0

Setting ``textwidth`` doesn't change the already existing text in your document,
for that, you can use:

    :`|`: format text. It wraps lines according to the value of ``textwidth``.
          When used with an active visual selection, all non-blank, consecutive
          lines are treated as a paragraph and formatted together. When used
          without a visual selection, only the current line is formatted. This
          action may also take into account other formatting aspects such as the
          handling of lists or indentation. To check all available options see
          ``:help fo-table``.

If ``textwidth`` is 0, then `|` will wrap your lines at 79 characters (or the
width of the screen if it is smaller than that).

Sometimes, it is useful to set the text width according to file types. For
example, you may want to set automatic line wrapping for Markdown or
Restructured text files while leaving in its disabled, default value for code.
To set an option according to the file type, check `Configuration per filetype
</config/configuration-per-filetype.html>`_.

.. Note:: The ``formatexpr`` and ``formatprg`` options can be used to configure
   how text is formatted with `|`. The first one allows you to define your own
   formatting function using Vimscript and the second allows you to specify an
   external program to do the formatting.

   You can also use the ``formatoptions`` to define how formatting should be
   done (for example, where to break lines or how to indent lists).

