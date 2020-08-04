
.. role:: key
.. default-role:: key

Scroll
======

Sometimes you need to see the lines that are directly above or below the ones
that are being displayed in the current window. For example, the cursor can be
at the bottom line of the screen and, while you're editing it, you may need to
peek to the following ones to gather more context.

In a situation similar to that one, rather than stop editing and start moving
the cursor to adjust the scroll, you can place the current line in the middle of
the window with:

    :`Space` `.`: place current line in the middle of the window

With that you can see the context of the line both above and below. However, if
you need more control on the scroll you can also use:

    :`Ctrl-e`: scroll window up (line by line)
    :`Ctrl-a`: scroll window down (line by line)

    :`Space` `U`: place current line at the top of the window
    :`Space` `M`: place current line at the bottom of the window

.. Note:: Unlike other editors, in Vim/Vem you can't scroll the viewport to a
   location where the cursor is not shown. So, typically, if you want to see
   other part of the document you jump to it with the cursor (using one of the
   available movememnt actions) and then jump back to the original location
   using `R`.

