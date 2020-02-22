---

layout: one-col-wide
page: cheat-sheet
css_files:
  - /static/css/vem.css
  - /static/css/cheat-sheet.css

---


Vem Cheat Sheet (QWERTY)
========================

Keymap
------

.. image:: /static/img/cheat-sheets/qwerty-white-bk.png
    :class: screenshot
    :target: /static/img/cheat-sheets/qwerty-white-bk.png

Actions
-------

Legend
""""""

.. image:: /static/img/cheat-sheets/leyend.png
    :class: center
    :width: 100px

| And additional actions with:
| `Space` `<key>`

Changing Modes
""""""""""""""

    :`i`: insert mode
    :`Ctrl-o`: normal mode
    :`\:`: command line

`Esc` same as `Ctrl-o`

Cursor Movements
""""""""""""""""

    :`h`: left
    :`j`: down
    :`k`: up
    :`l`: right

Bigger Movements
""""""""""""""""

    :`H`: jump to previous word
    :`J`: jump to next paragraph (next blank line)
    :`K`: jump to previous paragraph (previous blank line)
    :`L`: jump to next word

Move and Insert
"""""""""""""""

    :`Ctrl-h`: insert at the start of current line
        (first non-whitespace character)
    :`Ctrl-j`: insert in a newly open line below current one
    :`Ctrl-k`: insert in a newly open line above current one
    :`Ctrl-l`: insert at the end of current line

Even Bigger Movements
"""""""""""""""""""""

    :`,` or `^`: jump to beginning of the current line
        (first non-whitespace character)
    :`.` or `$`: jump to end of the current line
    :`0`: jump to first column in the current line
    :`U`: page up
    :`M`: page down
    :`a`: jump to beginning of file
    :`z`: jump to end of file

Undo and Redo
"""""""""""""

    :`q`: undo
    :`Q`: redo

New File
""""""""

    :`Ctrl-t`: new file
    :`space` `Ctrl-]`: new file in vertical window
    :`space` `Ctrl-_`: new file in horizontal window
    :`space` `Ctrl-^`: new file in new tabpage


Opening Files
"""""""""""""

    :`W`: open file
    :`space` `w`: fuzzy finder
    :`space` `W`: most recently used
    :`space` `*`: open filename under cursor

``:e <path>`` open file using the command line

Saving Files
""""""""""""

    :`s`: save
    :`space` `s`: save all

``:saveas <path>`` save as...

Closing Files
"""""""""""""

    :`x`: close (and quit if last one)
    :`Ctrl-x`: close but keep window layout
    :`space` `x`: close all and quit

Switch buffers
""""""""""""""

    :`w`: switch buffer
    :`t`: next buffer
    :`T`: previous buffer
    :`#`: alternate buffer
    :`{`: move buffer to the left in tabline
    :`}`: move buffer to the left in tabline

Selections
""""""""""

    :`G`: start selection
        (repeated, it changes the selection mode:
        characterwise, linewise, blockwise).

    :`Space`: deselect

A horizontal movement after `G` sets a characterwise selection
and a vertical movement, a linewise one

Quick selections
""""""""""""""""

    :`g`: select word (repeated, select text between white-space)
    :`Ctrl-g`: select the content between the closest
        surrounding matching pair ``({[<"''">]})``
    :`Space` `Space`: reselect last active selection

More quick selections
"""""""""""""""""""""

    :`Space` `g`: select camel case or underscore separated word
    :`Space` `G`: select inner line
        (not including leading and trailing white-space)
    :`Space` `p`: select last pasted or inserted text
    :`Space` `a`: select all

Text object selections
""""""""""""""""""""""

    :`G` `i` `<object>`: inner selection of ``<object>``
    :`G` `o` `<object>`: outer selection of ``<object>``

    ``object`` can be:

    :`l`: line
    :`s`: sentence
    :`p`: paragraph
    :`b`: block
    :`B`: full-block

    :`(`: between parenthesis
    :`{`: between curly brackets
    :`[`: between square brackets
    :`<`: between angle brackets
    :`t`: between HTML/XML tags
    :`'`: between single quotes
    :`"`: between double quotes
 
Clipboard
"""""""""

    :`e`: copy line or selection
    :`d`: cut line or selection
    :`c`: delete line or selection
    :`p`: paste
    :`Ctrl-d`: like `d` but start insert mode afterwards

Secondary Clipboard
"""""""""""""""""""

    :`E`: copy line or selection into secondary clipboard
    :`D`: cut line or selection into secondary clipboard
    :`P`: paste secondary clipboard

Deleting
""""""""

    :`c`: delete current line or selection
    :`I`: delete left character (*backspace*)
    :`O`: delete right character (*delete*)

Changing
""""""""

    :`f`: change current word
    :`F`: change from cursor to the end of line
    :`Ctrl-f`: change the content between the closest
        surrounding matching pair ``({[<"''">]})``
    :`Space` `f`: change camel case or underscore separated word

    *Changing* is deleting and starting insert mode right afterwards

Searching
"""""""""

    :`/` or `-`: search forward (after cursor)
    :`?`: search backwards (before cursor)
    :`_`: search word under cursor forward
    :`Ctrl-_`: search word under cursor backwards
    :`u`: find previous
    :`m`: find next
    :`Ctrl-r`: reset search highlighting

Replacing
"""""""""

    :`r` `<char>`: replace character under cursor, or all characters of the
        current selection if one is active, by ``<char>``
    :`Space` `r`: replace mode
        (characters after cursor get overwritten when typing)

Commenting
""""""""""

    :`v`: toggle comments line or selection (line comment markers)
    :`V`: comment line or selection (bock comment markers)

Macros
""""""

    :`@` `s`: Record macro ``s``
    :`@` `x`: Record macro ``x``
    :`@` `@`: Stop recording
    :`S`: Play macro ``s``
    :`X`: Play macro ``x``

Marks
"""""

    :`!` `<letter>`: set mark.
        If ``<letter>`` is lowercase the mark is local to the current file.
        If it is uppercase, the mark is valid across files
    :`\`` `<letter>`: Go to mark ``<letter>``
    :`C`: set quick mark ``C``
    :`Backspace`: go to quick mark ``C``

Scrolling
"""""""""

    :`Ctrl-q`: Scroll upward
    :`Ctrl-a`: Scroll downward
    :`space` `U`: Place current line at the top of the window
    :`space` `C`: Place current line at the center of the window
    :`space` `M`: Place current line at the bottom of the window

Creating Windows
""""""""""""""""

    :`Ctrl-w` `h`: new window left
    :`Ctrl-w` `j`: new window down
    :`Ctrl-w` `k`: new window up
    :`Ctrl-w` `l`: new window right

Jumping to Windows
""""""""""""""""""

    :`Space` `h`: jump to window to the left
    :`Space` `j`: jump to window below
    :`Space` `k`: jump to window above
    :`Space` `l`: jump to window to the right

    :`Ctrl-w` `Ctrl-w`: jump to previous window

Closing Windows
"""""""""""""""

    :`x`: close window and buffer (if not shown in another window)
    :`Ctrl-x`: close buffer but keep window
    :`Ctrl-w` `x`: close window but keep buffer
    :`Ctrl-w` `Space`: close all windows but current one

Moving Windows
""""""""""""""

    :`Ctrl-w` `r`: rotate window upwards
    :`Ctrl-w` `R`: rotate window downwards
    :`Ctrl-w` `u`: move window to top
    :`Ctrl-w` `m`: move window to bottom
    :`Ctrl-w` `,`: move window to far left
    :`Ctrl-w` `.`: move window to far right

Sizing Windows
""""""""""""""

    :`Ctrl-w` `+`: increase window height
    :`Ctrl-w` `-`: decrease window height
    :`Ctrl-w` `>`: decrease window width
    :`Ctrl-w` `<`: decrease window width

Spelling
""""""""

    :`Space` `y`: previous misspelled word
    :`Space` `n`: next misspelled word
    :`Space` `?`: suggest spellings for misspelled word under the cursor
    :`Space` `+`: add word under cursor to user's dictionary
    :`Space` `-`: remove word under cursor to user's dictionary

Quickfix/Location Window
""""""""""""""""""""""""

    :`Y`: previous quickfix result
    :`N`: next quickfix result
    :`Ctrl-y`: previous location window result
    :`Ctrl-n`: next location window result

Jumping between ends
""""""""""""""""""""

    :`%`: jump to matching parenthesis, bracket or HTML/XML tag
    :`;`: jump to end of next word
    :`Space` `;`: jump to end of next word including any
        non-whitespace character
    :`*`: jump to end of last previously selected text.
        If there's an active selection, go to the other end of it.
    :`"`: jump to end of last pasted or inserted text


Jump history
""""""""""""

    :`R`: move to previous location in jump history
    :`Ctrl-]`: move to next location in jump history

Jumps in Window
"""""""""""""""

    :`Space` `u`: jump to first line in window
    :`Space` `c`: jump to middle line in window
    :`Space` `m`: jump to last line in window

Jumps within identifiers
""""""""""""""""""""""""

    :`<`: jump to previous camel case or underscore separated word
    :`>`: jump to next camel case or underscore separated word

Jump to character
"""""""""""""""""

    :`Space` `,` `<char>`: jump to previous occurrence of ``<char>``
    :`Space` `.` `<char>`: jump to next occurrence of ``<char>``
    :`Ctrl-v`: repeat last `Space` `,` or `Space` `.` action

Vim Compatibility
"""""""""""""""""

    :`b`: same as Vim `z`
    :`B`: same as Vim `g`
    :`[`: same as Vim `[`
    :`]`: same as Vim `]`

