---

page: cheat-sheet
css_files:
  - /static/css/vem.css
  - /static/css/cheat-sheet.css

---

Vem Cheat Sheet (QWERTY)
========================

**Normal mode**

.. container:: cols two-cols filled-row key-summary

    :`Ctrl-o`: Start normal mode

    ..

    :`Esc`: Same as ``Ctrl-o``

**Insert mode**

.. container:: cols two-cols filled-row key-summary

    :`i`: Insert text before the cursor

    ..

    :`o`: Insert text after the cursor

.. container:: directional-mappings

    Insert text at:

    .. container:: key

        `Ctrl-k`

        Blank line above cursor

    .. class:: symbol

        ↑

    .. container:: central-row

        .. container:: key

            `Ctrl-h`

            Start of line

        .. class:: symbol

            ←

        .. class:: symbol

            ∙

        .. class:: symbol

            →

        .. container:: key

            `Ctrl-l`

            End of line

    .. class:: symbol

        ↓

    .. container:: key

        `Ctrl-j`

        Blank line below the cursor


**Moving**

.. container:: directional-mappings

    .. container:: key

        `K`

        Paragraph Up

    .. class:: symbol

        ↑

    .. container:: key

        `k`

        Up

    .. class:: symbol

        ↑

    .. container:: central-row

        .. container:: key

            `H`

            Word Left

        .. class:: symbol

            ←

        .. container:: key

            `h`

            Left

        .. class:: symbol

            ←

        .. class:: symbol

            ∙

        .. class:: symbol

            →

        .. container:: key

            `l`

            Right

        .. class:: symbol

            →

        .. container:: key

            `L`

            Word Right

    .. class:: symbol

        ↓

    .. container:: key

        `j`

        Down

    .. class:: symbol

        ↓

    .. container:: key

        `J`

        Paragraph Down

.. container:: cols three-cols filled-cols key-summary

    :`,`: Start of line
    :`.`: End of line

    ..

    :`a`: Start of buffer
    :`z`: End of buffer

    ..

    :`U`: Page up
    :`M`: Page down

.. container:: cols three-cols filled-row key-summary

    :`0`: First column

    ..

    :`^`: Same as ``,``

    ..

    :`$`: Same as ``.``

.. container:: cols two-cols filled-cols key-summary

    :`R`: Jump to previous location

    ..

    :`%`: Go to matching pair ({[]})

    .. :`Space` `r`: Next location

**Undoing**

.. container:: cols two-cols filled-row key-summary

    :`q`: Undo

    ..

    :`Q`: Redo

**Buffers**

    :`w`: Fuzzy open
    :`W`: Open
    :`s`: Save
    :`x`: Close (and quit if last buffer)

..

    :`Ctrl-x`: Close (keeping window layout)

..

    :`Space` `w`: Open recent
    :`Space` `_`: Open file under cursor
    :`Space` `s`: Save all
    :`Space` `x`: Close all and quit

..

    :`t`: Next buffer
    :`T`: Previous buffer
    :`{`: Move buffer to the left
    :`}`: Move buffer to the right
    :`#`: Go to alternate buffer

..

    :`Ctrl-t`: Jump to buffer

..

    :`Ctrl-a` `h`: New buffer in window to the left
    :`Ctrl-a` `j`: New buffer in window below
    :`Ctrl-a` `k`: New buffer in window above
    :`Ctrl-a` `l`: New buffer in window to the right
    :`Ctrl-a` `t`: New buffer in new tabpage

..

    :`Ctrl-a` `Space`: New buffer

**Windows**

Jump to window:

.. container:: directional-mappings

    .. container:: key

        `Space` `k`

        Jump to window above

    .. class:: symbol

        ↑

    .. container:: central-row

        .. container:: key

            `Space` `h`

            Jump to left window

        .. class:: symbol

            ←

        .. class:: symbol

            ∙

        .. class:: symbol

            →

        .. container:: key

            `Space` `l`

            Jump to right window

    .. class:: symbol

        ↓

    .. container:: key

        `Space` `j`

        Jump to window below

Create new window:

.. container:: directional-mappings

    .. container:: key

        `Ctrl-w` `k`

        New window above

    .. class:: symbol

        ↑

    .. container:: central-row

        .. container:: key

            `Space` `h`

            New window to the left

        .. class:: symbol

            ←

        .. class:: symbol

            ∙

        .. class:: symbol

            →

        .. container:: key

            `Space` `l`

            New window to the right

    .. class:: symbol

        ↓

    .. container:: key

        `Space` `j`

        New window below

..

    :`Ctrl-w` `h`: New window to the left
    :`Ctrl-w` `j`: New window below
    :`Ctrl-w` `k`: New window above
    :`Ctrl-w` `l`: New window to the right

..

    :`Ctrl-w` `a`: Move window to the top
    :`Ctrl-w` `z`: Move window to the bottom
    :`Ctrl-w` `,`: Move window to the far left
    :`Ctrl-w` `.`: Move window to the far right

..

    :`Ctrl-w` `Space`: Maximize current window

.. container:: ex-commands

    :resize [N]
        Set window height to N

    :vertical resize [N]
        Set window width to N

**Clipboard**

    :`e`: Copy *[current line or selection]*
    :`d`: Cut *[current line or selection]*
    :`p`: Paste

..

    :`E`: Copy *[secondary clipboard]*
    :`D`: Cut *[secondary clipboard]*
    :`P`: Paste *[secondary clipboard]*

..

    :`Ctrl-p` `h`: Paste at the beginning of line
    :`Ctrl-p` `j`: Paste below current line
    :`Ctrl-p` `k`: Paste above current line
    :`Ctrl-p` `l`: Paste at the end of line

**Deleting**

    :`c`: Delete *[current line or selection]*

..

    :`I`: Delete left character *[Backspace]*
    :`O`: Delete right character *[Delete]*

..

    :`f`: Delete word under cursor and enter insert mode
    :`F`: Delete from cursor to end of line and enter insert mode

..

    :`Ctrl-f`: Delete between surrounding marks *([{"'}])*



**Replacing**

    :`r`: Replace char under cursor

..

    :`Space` `r`: Start replace mode

**Macros**

    :`@s`: Record macro **s**
    :`@x`: Record macro **x**
    :`@@`: Stop recording
    :`S`: Play macro **s**
    :`X`: Play macro **x**

**Scrolling**

    :`~`: Current line at window middle
    :`Ctrl-e`: Scroll up
    :`Ctrl-d`: Scroll down
    :`Space` `e`: Current line at window top
    :`Space` `d`: Current line at window bottom

**Folding**

    :`b` `a`: Toggle current fold
    :`b` `r`: Open all folds one level
    :`b` `R`: Open all folds completely
    :`b` `m`: Close all folds one level
    :`b` `M`: Close all folds completely

**Vim compatibility**

    :`b`: Same as ``z`` in Vim
    :`B`: Same as ``g`` in Vim
    :`[`: Same as ``[`` in Vim
    :`]`: Same as ``]`` in Vim

