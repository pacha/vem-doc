
Visual tips
===========

Use of italics in Vem's default color schema
--------------------------------------------

``vem-dark``, the default color scheme of Vem, provides support for syntax
highlighting with italic fonts. Since not all terminal emulators support
displaying italic text, this option is disabled by default. If your terminal can
display italic characters, then you may enable this feature by adding this to
your ``vemrc`` file::

    let g:vem_colors_italic = 1
    colorscheme vem-dark

``vem_colors_italic`` is the variable that controls if the feature is enabled
(1) or disabled(0). The second line reloads the color scheme to make the change
effective.

Mark maximum column limit for your code
---------------------------------------

Many programming coding styles establish a maximum width for code. This is,
typically, set to 80, 100, 120 or even more characters. By default, Vem always
displays the column the cursor is at, which may allow you to know if you have
surpassed or not the column limit. However, it can be useful to see that limit
at all times. To do so, you can use the ``colorcolum`` option::

    set colorcolumn=80

Highlight current line
----------------------

Some people like to have the line where the cursor is currently placed
highlighted. That is exactly what the option ``cursorline`` does::

    set cursorline

In Vem's default color scheme, setting this option changes the background of the
current line to a lighter color.

