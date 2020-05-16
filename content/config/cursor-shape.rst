
Cursor shape
============

A highly recommended configuration change is to set the cursor to change its
shape depending on the currently active mode (Normal/Insert). Vem displays the
mode at the beginning of the status line, but changing the shape of the cursor
provides a more intuitive feedback.

The changing cursor shape is the default in ``gvem``. However, it is not in
``vem`` because it is a feature closely linked to which particular terminal
emulator you're using.

In many xtermk-compatible terminals (xterm, urxvt, iTerm2, xfce4-terminal,
alacritty, kytty, terminator...) you can set::

    " normal mode
    let &t_EI = "\e[1 q"

    " insert mode
    let &t_SI = "\e[5 q"

in your ``vemrc`` file to enable this feature. The numbers correspond to the
shape that you want to use in each mode:

    :``0``: Blinking block
    :``1``: Blinking block (default)
    :``2``: Steady block
    :``3``: Blinking underline
    :``4``: Steady underline
    :``5``: Blinking bar (xterm)
    :``6``: Steady bar (xterm)

However, you can take a look here for your terminal if this doesn't work for you:

    `Vim Wiki: Change cursor shape <https://vim.fandom.com/wiki/Change_cursor_shape_in_different_modes>`_

.. admonition:: Alternative

    If changing the cursor shape doesn't work for your terminal. There's an
    alternative that consists in highlighting the current screen line when insert
    mode is active and deactivating it when you go back to normal mode::

        autocmd InsertEnter * set cursorline
        autocmd InsertLeave * set nocursorline
