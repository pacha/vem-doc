
.. role:: key
.. default-role:: key

Tabpages
========

Tabpages allow you to use different window configurations simultaneously. For
example you can have a tabpage showing two buffers side by side and another
tabpage having a single document taking all the space of the screen.

Tabpages are shown as numbers at the right of the top tabline:

.. image:: /static/img/screenshots/tabpages.png
    :class: screenshot
    :target: /static/img/screenshots/tabpages.png

To switch to one of them, you just have to press its number in the keyboard:

    :`1` .. `9`: switch to tabpage with that number

At first, the name *tabpages*, or *tabs* for short, can be a bit misleading. You
may be used to other editors where opening a file opens a tab, and where closing
the tab closes the file itself. The word *tab* in Vim means something different,
as it refers to a layout of windows.

In Vim (and Vem by extension):

* Files are opened as **buffers**. The list of buffers always stays the same no
  matter how many windows or tabpages are present.

* **Windows** are just viewports over buffers and you can use them to display more
  than one buffer at a time on the screen.

* **Tabpages** are different layouts of windows.

Opening and closing tabpages
----------------------------

You have the following commands available to work with tabpages:

    :`Ctrl-w` `Ctrl-^`: create new tabpage.

Use `Ctrl-w` `Ctrl-6` if pressing `Ctrl-^` is not possible in your keyboard.

To close a tabpage, close all the windows inside it or use::

    :tabclose

