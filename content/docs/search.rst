
.. role:: key
.. default-role:: key

Searching and replacing
=======================

To start a search in the current file use:

    :`/` or `-`: start search forward (from cursor to the end of the document)

    :`?`: start search backward (from cursor to the start of the document)

When you type `/` or `?` the cursor is taken to the command line and you can
provide your search term and press `Enter`. For example, typing ``/prefix`` and
then `Enter` will find the next occurrence of ``prefix`` in the document and
highlight all the other ones:

.. image:: /static/img/screenshots/search.png
    :class: screenshot
    :target: /static/img/screenshots/search.png

After performing a search, you can also find the next/previous occurrences of
the same search term:

    :`m`: find next match

    :`u`: find previous match

    :`Ctlr-r`: remove highlighting of current search

.. Note:: In English based layouts, the `/` key is located in the lower right
   side of the keyboard and doesn't need `Shift ↑` to be pressed at the same
   time. This makes that location very confortable to use. However, in many
   other keyboards, that position is taken by `-`. That's why in Vem, `-` is an
   alias for `/` and you can use it if you happen to have one of those
   keyboards.

Case insensitive search
-----------------------

By default, searching is case sensitive, to make a case insensitive search add
``\c`` at the beginning of the search term like this::

    /\cprefix

