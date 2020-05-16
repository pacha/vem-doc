---

layout: one-col-wide
page: cheat-sheet
css_files:
  - /static/css/vem.css
  - /static/css/cheat-sheet.css

---


================================
Vem Cheat Sheet - Basic (QWERTY)
================================

keymap-box
==========

.. image:: /static/img/cheat-sheets/qwerty-basic.png
    :class: screenshot
    :target: /static/img/cheat-sheets/qwerty-basic.png

actions-box
===========

Legend
""""""

.. image:: /static/img/cheat-sheets/leyend.png
    :class: center
    :width: 100px

| And additional actions with:
| `Space` `<key>`

Changing Modes
""""""""""""""

    :`i`: Insert mode (before cursor)
    :`o`: Insert mode (after cursor)
    :`Ctrl-o`: Normal mode
    :`\:`: Command line

`Esc` same as `Ctrl-o`

Movements
=========

.. class:: card-box

movements-box
=============

Basic Movements
"""""""""""""""

    :`h`: Left
    :`j`: Down
    :`k`: Up
    :`l`: Right

Larger Movements
""""""""""""""""

    :`H`: Previous word
    :`J`: Next paragraph (next blank line)
    :`K`: Previous paragraph (previous blank line)
    :`L`: Next word

Inserting after Moving
""""""""""""""""""""""

    :`Ctrl-h`: Insert at the start of current line
        (first non-whitespace character)
    :`Ctrl-j`: Insert in a new line below current one
    :`Ctrl-k`: Insert in a new line above current one
    :`Ctrl-l`: Insert at the end of current line

Line Movements
""""""""""""""

    :`,`: Beginning of current line
        (first non-whitespace character)
    :`.`: End of current line

Page Movements
""""""""""""""

    :`U`: Page up
    :`M`: Page down

Document Movements
""""""""""""""""""

    :`a`: Top of the file
    :`z`: Bottom of the file

``:<number>`` jump to the given line number

Jump History
""""""""""""

    :`R`: Go to previous location in jump history

Editing
=======

.. class:: card-box

editing-box
===========

Undoing and Redoing
"""""""""""""""""""

    :`q`: Undo
    :`Q`: Redo

Deleting
""""""""

    :`c`: Delete current line or selection
    :`I`: Delete left character (*backspace*)
    :`O`: Delete right character (*delete*)

*You can also use* `Backspace` *and* `Delete` *in normal mode*

Changing
""""""""

    :`f`: Change current word
    :`F`: Change from cursor to the end of line
    :`Ctrl-f`: Change the content between the closest
        surrounding matching pair ``({[<"''">]})``

*Changing* means deleting and starting insert mode

Replacing
"""""""""

    :`r` `<char>`: Replace character under cursor, or all characters if there's
        an active selection, by ``<char>``

Commenting
""""""""""

    :`v`: Comment/Uncomment current line or selection (line comment markers)

Adding White-Space
""""""""""""""""""

    :`Tab`: Indent line or selection
    :`S-Tab`: Un-indent line or selection
    :`y`: Add blank line above current one
    :`n`: Add blank line below current one
    :`(`: Add space before cursor
    :`)`: Add space after cursor
    :`Enter`: Enter a newline (*also in normal mode*)

Formatting
""""""""""

    :`Ctrl-u`: Toggle case of character under cursor
        or all characters in selection

Adding and Subtracting
""""""""""""""""""""""

    :`A`: Add 1 to number under cursor
    :`Z`: Subtract 1 number under cursor


Copying, Cutting, Deleting and Pasting
======================================

.. class:: card-box

clipboard-box
=============

Selections
""""""""""

    :`G`: Start selection
        (repeated, it changes the selection mode:
        characterwise, blockwise, linewise)

    :`Space`: Deselect
    :`Space` `Space`: Reselect last active selection

*Important: a horizontal movement after* `G` *sets a characterwise selection*
*and a vertical movement, a linewise one.*

Quick Selections
""""""""""""""""

    :`g`: Select word (if pressed twice, select all text between white-space)
    :`Ctrl-g`: Select the content between the closest
        surrounding matching pair ``({[<"''">]})``

More Quick Selections
"""""""""""""""""""""

    :`Space` `g`: Select camel case or underscore separated word
    :`Space` `G`: Select inner line
        (not including leading and trailing white-space)
    :`Space` `a`: Select all

Copying, Cutting and Deleting
"""""""""""""""""""""""""""""

    :`e`: Copy line or selection
    :`d`: Cut line or selection
    :`c`: Delete line or selection

Secondary Clipboard
"""""""""""""""""""

    :`E`: Copy line or selection into secondary clipboard
    :`D`: Cut line or selection into secondary clipboard

Pasting
"""""""

    :`p`: Paste
    :`P`: Paste secondary clipboard

Advanced Pasting I
""""""""""""""""""

    :`Ctlr-p` `h`: Paste before cursor
    :`Ctlr-p` `j`: Paste below current line
    :`Ctlr-p` `k`: Paste above current line
    :`Ctlr-p` `l`: Paste after cursor (same as `p`)

Advanced Pasting II
"""""""""""""""""""

    :`Ctlr-p` `,`: Paste at line beginning
    :`Ctlr-p` `.`: Paste at line end


Files
=====

.. class:: card-box

files-box
=========

Opening Files
"""""""""""""

    :`W`: Open file
    :`space` `w`: Fuzzy finder
    :`Ctrl-t`: New file

Saving Files
""""""""""""

    :`s`: Save
    :`space` `s`: Save all

Closing Files
"""""""""""""

    :`x`: Close (and quit if last one)
    :`space` `x`: Close all and quit

Switching between open files
""""""""""""""""""""""""""""

    :`w`: Switch between open files
    :`t`: Next open file
    :`T`: Previous open file
    :`{`: Move current file to the left in tabline
    :`}`: Move current file to the right in tabline


File Browser
============

.. class:: card-box

filebrowser-box
===============

File Browser: Opening and Closing
"""""""""""""""""""""""""""""""""

    :`W`: Open file browser
    :`x`: Close file browser

File Browser: Basic Actions
"""""""""""""""""""""""""""

    :`h`: Go to parent directory
    :`j`: Cursor down
    :`k`: Cursor up
    :`l` or `Enter`: Open file or enter directory


Fuzzy Finder
============

.. class:: card-box

fuzzyfinder-box
===============

File Browser: Opening and Closing
"""""""""""""""""""""""""""""""""

    :`Space` `w`: Open fuzzy finder
    :`Ctrl-o`: Close fuzzy finder
    :`Enter`: Open file

Fuzzy Finder: Movements
"""""""""""""""""""""""

    :`Ctrl-h`: Move cursor left
    :`Ctrl-j`: Move up in the list of matching files
    :`Ctrl-k`: Move down in the list of matching files
    :`Ctrl-l`: Move cursor right

Fuzzy Finder: Options
"""""""""""""""""""""

    :`Tab`: Autocomplete
    :`Ctrl-f`: Toggle search by just filename
    :`Ctrl-r`: Refresh list


Insert Mode
===========

.. class:: card-box

insertmode-box
==============

Insert Mode: Movements
""""""""""""""""""""""

    :`Ctrl-h`: Move cursor left
    :`Ctrl-j`: Move cursor down
    :`Ctrl-k`: Move cursor up
    :`Ctrl-l`: Move cursor right

Insert Mode: Autocomplete
"""""""""""""""""""""""""

    :`Tab`: Autocomplete
    :`Shift-Tab`: Autocomplete (opposite direction)

`Tab` *autocompletes after text and inserts a tab or spaces (depending on your
configuration) at the beginning of the line or after white-space. Use* `Ctrl-]`
*to insert tab or spaces independently of the context.*

Insert Mode: Adding Text
""""""""""""""""""""""""

    :`Ctrl-d`: Insert Unicode character (*digraph*)
    :`Ctrl-y`: Clone character above the cursor
    :`Ctrl-n`: Clone character below the cursor
    :`Ctrl-]`: Insert tab (for cases where `Tab` autocompletes)

Insert Mode: Paste Mode
"""""""""""""""""""""""

    :`Ctrl-^`: Toggle paste mode

*You can also use* `Ctrl-6` *instead of* `Ctrl-^`
*(which can be difficult to type in some keyboards).*


Command Line
============

.. class:: card-box

commandline-box
===============

Command Line: Movements
"""""""""""""""""""""""

    :`Ctrl-h`: Move cursor left
    :`Ctrl-l`: Move cursor right

    :`Ctrl-a`: Jump to beginning of command line
    :`Ctrl-e`: Jump to end of command line

Command Line: History
"""""""""""""""""""""

    :`Ctrl-j`: Next command in command-line history
    :`Ctrl-k`: Previous command in command-line history.

*When browsing the command line history, if you already typed the start of a
command, it will try to find a match*

Command Line: Pasting
"""""""""""""""""""""

    :`Ctrl-p`: Paste clipboard contents

Command Line: Autocomplete
""""""""""""""""""""""""""

    :`Tab`: Autocomplete
    :`Shift-Tab`: Autocomplete (opposite direction)


Searching and Substituting
==========================

.. class:: card-box

tools-box
=========

Searching
"""""""""

    :`/` or `-`: Search forward (after cursor)
    :`?`: Search backwards (before cursor)
    :`u`: Find previous
    :`m`: Find next
    :`_`: Search word under cursor forward
    :`Ctrl-_`: Search word under cursor backwards
    :`Ctrl-r`: Reset search highlighting

Substituting
""""""""""""

``:%s/<pattern>/<text>/icg``

Replace all occurrences of ``<pattern>`` with ``<text>``

The last characters are optional flags:

    :``i``: ignore case
    :``c``: confirm every substitution interactively
    :``g``: replace all occurrences in each line

``<text>`` can contain ``\1``, ``\2``, ... to refer to the regex groups of
``pattern``

Substitution Ranges
"""""""""""""""""""

``:%s/.../.../`` Perform substitution across the whole file

``:<n>,<m>s/.../.../`` Perform substitution in the range from line number ``<n>`` to ``<m>``

``:'<,'>s/.../.../`` Perform substitution in current selection. This prefix will be
automatically pre-populated in the command line once you visually create the
selection and then type ``:``

