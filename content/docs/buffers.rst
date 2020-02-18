
.. role:: key
.. default-role:: key

.. terminal colors
.. role:: w
.. role:: wi
.. role:: g
.. role:: gi
.. role:: y
.. role:: yi

Working with multiple files
===========================

Similarly to almost any other editor, Vem allows you to edit several files at
the same time and jump between them quickly.

When several files are open, they show up at the top line of the screen:

.. image:: /static/img/screenshots/buffers-in-tabline.png
    :class: screenshot
    :target: /static/img/screenshots/buffers-in-tabline.png

One thing that can be a bit confusing to newcomers is that *files* are
referred as *buffers* in Vim when they are loaded into memory. Many editors use
the term *files* to refer to both the actual file in disk and the copy that is
loaded in memory when you're editing it. Vim, however, uses *files* to refer to
the files on disk and *buffers* to refer to the copy in memory. When you save
your document, you usually say that you're saving your buffer contents into its
associated file. Vem uses the same terminology as Vim by extension.

There are three main ways to open a file:

    * Using a file browser (`W`)

    * Using a fuzzy finder (`w`)

    * Typing its path in the command-line (``:e <path-to-file>``)


Using the file browser
----------------------

To open the file browser, use `W`:

.. image:: /static/img/screenshots/file-browser.png
    :class: screenshot
    :target: /static/img/screenshots/file-browser.png

Once open, the file browser contents will replace the contents of the file
you were editing and the first directory to be shown will always be the one
where that file is stored.

With the file browser, you can navigate through the directories using the basic
movement keys:

    :`h`: go up one directory

    :`j`: move the cursor down

    :`k`: move the cursor up

    :`l`: open the directory or file depending on what is under the cursor

Using this keys makes browsing directories in search of a file extremely fast.

Other key commands that you can use are:

    :`Ctrl-h`: toggle the display of hidden files on / off

    :`Ctrl-r`: refresh listing

    :`Ctrl-a`: create an empty file in the displayed directory (you'll get
        prompt for a name).

And finally, you can close the file browser with:

    :`x`: close file browser

In addition to opening a file with `l`, you can use:

    :`Ctrl-v`: open file under cursor in a new vertical window

    :`Ctrl-_`: open file under cursor in a new horizontal window

    :`Ctrl-t`: open file under cursor in a new tab

How to use windows and tabs is explained in `Windows </docs/windows.html>`_ and
`Tabpages </docs/tabpages.html>`_.


Using the fuzzy finder
----------------------

A very fast way to open files when you already now their paths and/or names is
to use the fuzzy finder.

To open it, use `w`:

.. image:: /static/img/screenshots/fuzzy-finder.png
    :class: screenshot
    :target: /static/img/screenshots/fuzzy-finder.png

Once open, it will display a list of files and a prompt at the bottom of the
screen. The list of files will change as you type. It will display all the files
in your project or subdirectories that match the text that you're entering. The
most probable match is shown highlighted at the bottom of the list.

After entering the text, when you get the file that you're looking for
highlighted, you can just open it pressing `<Enter>`.

One very practical feature of the fuzzy finder is that you don't have to type
all the characters in the file path to find a match. For example, if you want to
open a file in ``foo/bar/my-file.ext``, you can type:

    * ``my-file``

    * ``foobarmy-file``

    * ``barfile``

All those variations will match the file you're looking for.

The fuzzy finder doesn't try to match your string against all the files in your
computer. It will try to find matches inside your project (if you're inside a
repository) or using files that are descendants of the current file's directory,
otherwise.

You can change which file is selected from the ones that are a match to your
search term with:

    :`Ctrl-k`: move the highlighted selection up

    :`Ctrl-j`: move the highlighted selection down

And you can also move the cursor within the prompt with:

    :`Ctrl-h`: move the cursor in the prompt line to the left

    :`Ctrl-l`: move the cursor in the prompt line to the right

Other available keyboard commands are:

    :`Ctrl-r`: refresh fuzzy finder (reload list of files)

    :`Ctrl-v`: open selected file in a new vertical window

    :`Ctrl-_`: open selected file in a new horizontal window

Again, how to use windows and tabs is explained in `Windows
</docs/windows.html>`_ and `Tabpages </docs/tabpages.html>`_.

Finally, to close the fuzzy finder you can use `Ctrl-o`, `Ctrl-c` or `Esc`:

    :`Ctrl-o`: close fuzzy finder


Most recently used files
""""""""""""""""""""""""

In case you want to reopen a file you have recently worked with, you can also
open the fuzzy finder with:

    :`Space` `w`: most recently used files (fuzzy finder)

In this case, the fuzzy finder works as described before but will only display
the last ten most recently used files. To open one of them, just type part of
the name and press `Enter`.


Opening files using the command line
------------------------------------

You can also open a file using the command::

    :e <path-to-file>

The path can be written relative to the current directory —which is typically
the directory where you launched Vem or absolute.

You can check which one is the current path with::

    :pwd

And you can change it with::

    :cd

For both ``:e`` and ``:cd``, you can use both ``.`` and ``..`` as you can do in
a normal shell to indicate the current and the parent directory. In addition,
you can use `Tab` to autocomplete parts of the path.


Jumping between buffers
-----------------------

Once you have more than one file loaded, you may want to jump from one to
another. The basic key commands to change the buffer that is being edited are:

    :`t`: jump to next buffer

    :`T`: jump to previous buffer

The order of the buffers is the one in which they are displayed in the tabline,
at the top of the screen::

    |  file 1  |  current-file  |  file 3  |  file 4  |
               ←T              t→

Actually, you can modify the order with:

    :`{`: move current buffer one position back

    :`}`: move current buffer one position forward

Alternatively, you can also use the fuzzy finder to jump between your buffers:

.. image:: /static/img/screenshots/fuzzy-finder-buffers.png
    :class: screenshot
    :target: /static/img/screenshots/fuzzy-finder-buffers.png

To open it use:

    :`Ctrl-t`: switch to buffer (fuzzy finder)

This is particularly useful when you have a larger amount of files open.


Saving and closing
------------------

To save and close, use:

    :`s`: save current file
    :`Space` `s`: save all modified files
    :`x`: close current file
    :`Space` `x`: close all files and exit

