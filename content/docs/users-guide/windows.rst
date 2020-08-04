
.. role:: key
.. default-role:: key

Windows
=======

You can split the screen of the editor into two or more windows to show
different documents simultaneously:

.. image:: /static/img/screenshots/windows.png
    :class: screenshot
    :target: /static/img/screenshots/windows.png

Note that windows are just viewports over the buffers that are loaded in the
editor, and that you can potentially show the same buffer in multiple windows or
create and remove windows without altering the list of loaded buffers.

Creating windows
----------------

You can create a new window by either horizontally or vertically splitting the
one where the cursor is. To do so use the following shortcuts:

    :`Ctrl-w` `h`: new window to the left of current one
    :`Ctrl-w` `j`: new window below the current one
    :`Ctrl-w` `k`: new window above the current one
    :`Ctrl-w` `l`: new window to the right of current one

When you split a window, the new one will show the same content as the one
you're splitting from. To display a different buffer, you don't have to do
anything different from what you would do when you have a single window. You can
open a new file with the file browser or the fuzzy finder, create a new buffer
with `Ctrl-t` or jump to an existing one with `w`, `t` or `T`. All these
actions will apply to the window in which the cursor is currently placed.

Creating a window with a new buffer
"""""""""""""""""""""""""""""""""""

If you want to create a window containing a new file, you can use:

    :`Ctrl-w` `Ctrl-]`: new buffer in new vertical window
    :`Ctrl-w` `Ctrl-_`: new buffer in new horizontal window

Creating a window when opening a file
"""""""""""""""""""""""""""""""""""""

You can also directly open files into windows. Once in the file browser or the
fuzzy finder, use:

    :`Ctrl-]`: open selected file in a new vertical window
    :`Ctrl-_`: open selected file in a new horizontal window

Jumping to windows
------------------

You can jump between windows with:

    :`Space` `h`: jump to window to the left of cursor
    :`Space` `j`: jump to window below cursor
    :`Space` `k`: jump to window above cursor
    :`Space` `l`: jump to window to the right of cursor

You can also alternate positions between two windows with:

    :`Ctrl-w` `Ctrl-w`: jump to previous window

Closing windows
---------------

You normally close a window using `x`. This will close both the window *and* the
buffer if the buffer is not shown in any other window. If you need more
precision on which action you want to perform, you have several options:

    :`x`: close window and buffer (if the buffer is not displayed elsewhere)
    :`Ctrl-x`: close buffer but keep window
    :`Ctrl-w` `x`: close window

You can also close all windows but current one:

    :`Ctrl-w` `Space`: maximize current window

Resize windows
--------------

To change the size of a window use:

    :`Ctrl-w` `+`: increase the height of current window
    :`Ctrl-w` `-`: decrease the height of current window
    :`Ctrl-w` `>`: increase the width of current window
    :`Ctrl-w` `<`: decrease the width of current window

.. container:: note

    If your teminal is xterm compatible, you can use ``:set mouse=a`` to enable
    the interaction with the mouse. Once enabled, you can drag the border of the
    windows to set their size. (You can also add ``:set mouse=a`` to your `vemrc
    </config/vemrc.html>`__ file to make the change persistent).


Moving windows
--------------

You can change the placement of the editor windows with:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`Ctrl-w` `u`: place current window at the top
        :`Ctrl-w` `m`: place current window at the bottom
        :`Ctrl-w` `,`: place current window at the far left
        :`Ctrl-w` `.`: place current window at the far right

    .. container:: tab qwertz

        :`Ctrl-w` `u`: place current window at the top
        :`Ctrl-w` `m`: place current window at the bottom
        :`Ctrl-w` `,`: place current window at the far left
        :`Ctrl-w` `.`: place current window at the far right

    .. container:: tab azerty

        :`Ctrl-w` `u`: place current window at the top
        :`Ctrl-w` `m`: place current window at the bottom
        :`Ctrl-w` `,`: place current window at the far left
        :`Ctrl-w` `;`: place current window at the far right


Or you can rotate the position of a whole row or column of windows with:

    :`Ctrl-w` `r`: rotate row or column of windows downwards/rightwards
    :`Ctrl-w` `R`: rotate row or column of windows upwards/leftwards


.. container:: browsing-links

    |

    `Tabpages </docs/tabpages.html>`_ »

