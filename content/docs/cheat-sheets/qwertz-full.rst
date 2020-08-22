---

layout: one-col-wide
page: cheat-sheet
css_files:
  - /static/css/vem.css
  - /static/css/cheat-sheet.css

---

.. role:: key
.. default-role:: key

===============================
Vem Cheat Sheet - Full (QWERTZ)
===============================

keymap-box
==========

.. image:: /static/img/cheat-sheets/qwertz-full.png
    :class: screenshot
    :target: /static/img/cheat-sheets/qwertz-full.png

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
    :`0`: First column in current line

*You can also use* `^` *and* `$` *instead of* `,` *and* `.`.

Page Movements
""""""""""""""

    :`U`: Page up
    :`M`: Page down

Document Movements
""""""""""""""""""

    :`a`: Top of the file
    :`y`: Bottom of the file

``:<number>`` jump to the given line number

Jumping between Ends
""""""""""""""""""""

    :`%`: Jump to matching parenthesis, bracket or HTML/XML tag
    :`*`: Jump between ends of current selection or last selected text
    :`+`: Jump between ends of last pasted or inserted text

End of Next Word
""""""""""""""""

    :`;`: Jump to end of next word

Jump History
""""""""""""

    :`R`: Go to previous location in jump history
    :`Ctrl-]`: Go to next location in jump history

Jumps within Window
"""""""""""""""""""

    :`"` `u`: Jump to first line in window
    :`"` `.`: Jump to middle line in window
    :`"` `m`: Jump to last line in window

Jumps within Identifiers
""""""""""""""""""""""""

    :`<`: Jump to previous camel case or underscore separated word
    :`>`: Jump to next camel case or underscore separated word


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

Changing
""""""""

    :`f`: Change current word
    :`F`: Change from cursor to the end of line
    :`Ctrl-f`: Change the content between the closest
        surrounding matching pair ``({[<"''">]})``
    :`Space` `f`: Change camel case or underscore separated word

*Changing* means deleting and starting insert mode

Replacing
"""""""""

    :`r` `<char>`: Replace character under cursor, or all characters if there's
        an active selection, by ``<char>``
    :`Space` `r`: Replace mode
        (characters below the cursor get overwritten when typing)

Commenting
""""""""""

    :`v`: Comment/Uncomment current line or selection (line comment markers)
    :`V`: Comment line or selection (bock comment markers)

Adding White-Space
""""""""""""""""""

    :`Tab`: Indent line or selection
    :`S-Tab`: Un-indent line or selection
    :`z`: Add blank line above current one
    :`n`: Add blank line below current one
    :`(`: Add space before cursor
    :`)`: Add space after cursor
    :`Enter`: Enter a newline (*also in normal mode*)

Formatting
""""""""""

    :`|`: Format line or selection. (*Eg. reformat line lenght*)
    :`&`: Join next line to current one or all lines in selection
    :`=`: Format code
    :`Ctrl-u`: Toggle case of character under cursor
        or all characters in selection
    :`s` `<char>`: Surround current selection with a matching pair
        (``({[<"''">]})``). If ``<char>`` is one of ``({[<`` a space is left
        between the matching pair and the selected text, for ``'">]})`` no space is
        left

Adding and Subtracting
""""""""""""""""""""""

    :`A`: Add 1 to number under cursor
    :`Y`: Subtract 1 number under cursor

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

    :`Space` `a`: Select all
    :`Space` `p`: Select paragraph
    :`Space` `P`: Select last pasted text
    :`Space` `g`: Select camel case or underscore separated word
    :`Space` `G`: Select inner line
        (not including leading and trailing white-space)

Selecting Text Objects
""""""""""""""""""""""

    :`G` `i` `<obj>`: Inner selection of ``<obj>``
    :`G` `o` `<obj>`: Outer selection of ``<obj>``

*Outer* selections include surrounding white-space, quotes or
parenthesis/brackets while *Inner* ones don't.

See next cards for the possible values of ``<obj>``.

Text Objects I
""""""""""""""

    :`l`: Line
    :`s`: Sentence
    :`p`: Paragraph

To use with `G` `i` and `G` `o`.

Text Objects II
"""""""""""""""

    :`(`: Text between parenthesis
    :`{`: Text between curly brackets
    :`[`: Text between square brackets
    :`<`: Text between angle brackets
    :`t`: Text between HTML/XML tags
    :`'`: Text between single quotes
    :`"`: Text between double quotes

To use with `G` `i` and `G` `o`.

Copying, Cutting and Deleting
"""""""""""""""""""""""""""""

    :`e`: Copy line or selection
    :`d`: Cut line or selection
    :`c`: Delete line or selection
    :`Ctrl-d`: Like `d` but start insert mode afterwards

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
    :`Ctrl-p` `Tab`: Paste below current line
        using its same indentation level


Files
=====

.. class:: card-box

files-box
=========

New File
""""""""

    :`Ctrl-t`: New file
    :`Ctrl-w` `Ctrl-]`: New file in vertical window
    :`Ctrl-w` `Ctrl-_`: New file in horizontal window
    :`Ctrl-w` `Ctrl-^`: New file in new tabpage

*You can also use* `Ctrl-6` *instead of* `Ctrl-^`
*(which can be difficult to type in some keyboards).*

Opening Files
"""""""""""""

    :`W`: Open file
    :`space` `w`: Fuzzy finder
    :`space` `W`: Most recently used
    :`space` `_`: Open filename under cursor

``:e <path>`` open file using the command line

Saving Files
""""""""""""

    :`s`: Save
    :`space` `s`: Save all

``:saveas <path>`` save as...

Closing Files
"""""""""""""

    :`x`: Close (and quit if last one)
    :`Ctrl-x`: Close but keep window layout
    :`space` `x`: Close all and quit

Switching between open files
""""""""""""""""""""""""""""

    :`w`: Switch between open files
    :`t`: Next open file
    :`T`: Previous open file
    :`#`: Last visited file (alternate file)
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

File Browser: Opening Files
"""""""""""""""""""""""""""

    :`Ctrl-]`: Open file in vertical window
    :`Ctrl-_`: Open file in horizontal window
    :`Ctrl-^`: Open file in new tabpage
    :`Ctrl-t`: Create new file

*You can also use* `Ctrl-6` *instead of* `Ctrl-^`
*(which can be difficult to type in some keyboards).*

File Browser: Multi-Open
""""""""""""""""""""""""

    :`G`: Start selection. Use movement keys to create your
        selection and open all selected files by using any
        of the file opening actions.


Fuzzy Finder
============

.. class:: card-box

fuzzyfinder-box
===============

File Browser: Opening and Closing
"""""""""""""""""""""""""""""""""

    :`w`: Switch between open files
    :`Space` `w`: Find files
    :`Space` `W`: Find most recently used files
    :`Ctrl-o`: Close fuzzy finder

    :`Shift-Tab`: Cycle between open file, file and mru searches
    :`Ctrl-Tab`: Cycle between open file, file and mru searches
        (opposite direction)

Fuzzy Finder: Movements
"""""""""""""""""""""""

    :`Ctrl-h`: Move cursor left
    :`Ctrl-j`: Move up in the list of matching files
    :`Ctrl-k`: Move down in the list of matching files
    :`Ctrl-l`: Move cursor right

    :`Ctrl-a`: Jump to beginning of command line
    :`Ctrl-e`: Jump to end of command line

Fuzzy Finder: Open File
"""""""""""""""""""""""

    :`Enter`: Open file
    :`Ctrl-]`: Open file in vertical window
    :`Ctrl-_`: Open file in horizontal window
    :`Ctrl-^`: Open file in new tabpage
    :`Ctrl-t`: Create new file (type the path first)

*You can also use* `Ctrl-6` *instead of* `Ctrl-^`
*(which can be difficult to type in some keyboards).*

Fuzzy Finder: Multi-Open
""""""""""""""""""""""""

    :`Ctrl-g`: Mark file to open
    :`Ctrl-w`: Open marked files

*You can also use* `Ctrl-]`, `Ctrl-_` *or* `Ctrl-^` *to open the files*
*in vertical windows, horizontal windows or new tabpages.*

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

Insert Mode: More Movements
"""""""""""""""""""""""""""

    :`Ctrl-a`: Jump to beginning of current line
    :`Ctrl-e`: Jump to end of current line

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


Tools
=====

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

Macros
""""""

    :`@` `s`: Record macro ``s``
    :`@` `x`: Record macro ``x``
    :`@` `@`: Stop recording
    :`S`: Play macro ``s``
    :`X`: Play macro ``x``

Marks
"""""

    :`!` `<letter>`: Set mark.
    :`\`` `<letter>`: Go to mark ``<letter>``

*If* ``<letter>`` *is lowercase the mark is local to the current file.*
*If it is uppercase, the mark is valid across files.*

``'<letter>`` *jumps to the same line as the mark (although not necessarily the
same column).*

Folds: Basic Actions
""""""""""""""""""""

    :`b` `f`: Create fold out of visual selection
    :`b` `a`: Toggle fold open/closed
    :`b` `d`: Delete fold
    :`b` `i`: Toggle folding on/off

Folds: Level
""""""""""""

    :`b` `R`: Open all folds
    :`b` `M`: Close all folds
    :`b` `r`: Open one more folding level
    :`b` `m`: Close one more folding level

Tags
""""

    :`Space` `o`: Jump to tag
    :`Space` `i`: Jump back from tag

Scrolling
"""""""""

    :`Ctrl-q`: Scroll upward
    :`Ctrl-a`: Scroll downward
    :`Space` `u`: Scroll window to put current line at the top
    :`Space` `c`: Scroll window to put current line at the center
    :`Space` `m`: Scroll window to put current line at the bottom

`Ctrl-q` *will not work if you're running Vem in a terminal with control
flow enabled. Use* `Ctrl-e` *if that is your case.*

Spelling
""""""""

    :`Space` `z`: Previous misspelled word
    :`Space` `n`: Next misspelled word
    :`Space` `?`: Suggest spellings for misspelled word under the cursor
    :`Space` `+`: Add word under cursor to user's dictionary
    :`Space` `-`: Remove word under cursor from user's dictionary

Quickfix/Location Window
""""""""""""""""""""""""

    :`Z`: Previous quickfix result
    :`N`: Next quickfix result
    :`Ctrl-y`: Previous location window result
    :`Ctrl-n`: Next location window result


Windows and Tabpages
====================

.. class:: card-box

windows-box
===========

Creating Windows
""""""""""""""""

    :`Ctrl-w` `h`: New window left
    :`Ctrl-w` `j`: New window down
    :`Ctrl-w` `k`: New window up
    :`Ctrl-w` `l`: New window right

Creating Windows and files
""""""""""""""""""""""""""

    :`Ctrl-w` `Ctrl-]`: New file in vertical window
    :`Ctrl-w` `Ctrl-_`: New file in horizontal window

Jumping between Windows
"""""""""""""""""""""""

    :`Space` `h`: Jump to window to the left
    :`Space` `j`: Jump to window below
    :`Space` `k`: Jump to window above
    :`Space` `l`: Jump to window to the right

Closing Windows
"""""""""""""""

    :`x`: Close file (if not shown in another window) and window
    :`Ctrl-x`: Close file but keep window
    :`Ctrl-w` `x`: Close window but keep file

Window Shortcuts
""""""""""""""""

    :`Ctrl-w` `Ctrl-w`: Jump to previous window
    :`Ctrl-w` `Space`: Close all windows but current one

Moving Windows
""""""""""""""

    :`Ctrl-w` `r`: Rotate window upwards
    :`Ctrl-w` `R`: Rotate window downwards
    :`Ctrl-w` `u`: Move window to top
    :`Ctrl-w` `m`: Move window to bottom
    :`Ctrl-w` `,`: Move window to far left
    :`Ctrl-w` `.`: Move window to far right

Resizing Windows
""""""""""""""""

    :`Ctrl-w` `+`: Increase window height
    :`Ctrl-w` `-`: Decrease window height
    :`Ctrl-w` `>`: Increase window width
    :`Ctrl-w` `<`: Decrease window width

Tabpages
""""""""

    :`Ctrl-w` `Ctrl-^`: New tabpage
    :`<number>`: Go to tabpage ``<number>``

``:tabclose`` closes current tabpage.
*A tabpage can be closed by closing all its windows too*

*You can also use* `Ctrl-6` *instead of* `Ctrl-^`
*(which can be difficult to type in some keyboards).*

Other
=====

.. class:: card-box

other-box
=========

Suspending
""""""""""

    :`Ctrl-z`: Suspend process

*Only in terminal and normal mode.*

Vim Compatibility
"""""""""""""""""

    :`b`: Same as Vim `z`
    :`B`: Same as Vim `g`
    :`[`: Same as Vim `[`
    :`]`: Same as Vim `]`

