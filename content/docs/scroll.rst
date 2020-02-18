
.. role:: key
.. default-role:: key

Scroll
======

Sometimes you need to see the lines that are directly above or below the ones
that are being displayed in the current window. For example, the cursor can be
at the bottom line of the screen and, while you're editing it, you may need to
know the contents of the next lines.

Rather than stopping editing the current line and moving the cursor to make the
window scroll and then go back to the point where you were editing, you can use
the following key commands to scroll the window:

    :`Ctrl-e`: scroll window up
    :`Ctrl-d`: scroll window down

    :`~`: place current line in the middle of the window
    :`Space` `e`: place current line at the top of the window
    :`Space` `d`: place current line at the bottom of the window

.. Note:: Unlike other editors, in Vim/Vem you can't scroll the viewport to a
   location where the cursor is not shown. So, typically, if you want to see
   other part of the document you jump to it with the cursor (using one of the
   available movememnt actions) and then jump back to the original location
   using `R`.

