
.. role:: key
.. default-role:: key

Quickfix and Location Lists
===========================

.. image:: /static/img/screenshots/quickfix-full.png
    :class: screenshot
    :target: /static/img/screenshots/quickfix-full.png

Vim offers two types of lists that store locations within files:

    * **Quickfix list**

    * **Location list**

These lists are used by multiple Vim commands. For example, you can search across several files and store the resulting positions in them. You can, then, see the results and jump to one of the positions in particular or you can iterate through the list and Q
quickfix list or have a list of linting errors for the current file in a
location list. Once you have one of these lists populated you can easily jump
forwards and backwards between all the results that they contain.

The difference between they both is that while the quickfix list can contain
positions within many files —including some that are not currently loaded in the
editor—, the location list is always associated to one of your windows. That
means that, while there can be many location lists existing at the same time
—maximum one per window—, there is only always one unique instance of the
quickfix list.

The quickfix list
-----------------

The quickfix list is typically used to hold:

    * A search result over several files

    * The list of errors obtained after compilation of source code

For example, you can use the command::

    :vimgrep /my-string/ **/*.c

To populate the quickfix with all the results of searching for ``my-string``,
recursively from the current directory downwards over all C files.

To see the contents of the quickfix list you can open the *quickfix window*
with::

    :copen

And you can close it by pressing `x` or using::

    :cclose

The window opens at the bottom of the screen with the list of results, showing
the file, position and text where the result was found:

.. image:: /static/img/screenshots/quickfix.png
    :class: screenshot
    :target: /static/img/screenshots/quickfix.png

The quickfix list works like any other window except that you can press `Enter`
while the cursor is over one of the results to jump directly to it.

Opening the quickfix window is not the only way of interacting with the quickfix
list. You can also quickly iterate through the results using:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`Y`: jump to previous result in quickfix list

        :`N`: jump to next result in quickfix list

    .. container:: tab qwertz

        :`Z`: jump to previous result in quickfix list

        :`N`: jump to next result in quickfix list

    .. container:: tab azerty

        :`Y`: jump to previous result in quickfix list

        :`N`: jump to next result in quickfix list

.. Note::

    See `Searching and replacing </docs/search.html>`_ to learn more about how
    to search through files in Vim.

    See `Compiling </docs/compiling.html>`_ to learn more about how
    to compile and debug errors from withing Vim.


Location list
-------------

The location list works in a very similar way to how the quickfix one does, but
since it is linked to a particular window, it is used mostly to show results
associated to the buffer that is displayed in it. For instance, it is very
useful to have the syntax errors found by running a linter over the current file
in the location list.

To open and close the location window use::

    :lopen
    :lclose

And to iterate over the results of the location list use:

    :`Ctrl-y`: jump to previous result in location list

    :`Ctrl-n`: jump to next result in location list

.. Note::

    See `Linting </docs/linting.html>`_ for more information on how to have
    static code analysis run automatically over your files as you work on them.

