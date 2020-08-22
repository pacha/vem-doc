
.. role:: key
.. default-role:: key

.. terminal colors
.. role:: w
.. role:: wi
.. role:: g
.. role:: gi
.. role:: y
.. role:: yi

Buffers and Files
=================

You can open several files in Vem by passing them in the command line::

    vem file1.txt file2.txt file3.txt

Or by opening them inside the editor:

    * Using a file browser (`W`)

    * Using a fuzzy finder (`Space` `w`)

    * Using the ``:e(dit)`` command in the command-line (``:e <path-to-file>``)

Once more than one file is open, their names are displayed at the top of the
screen in the *tabline*:

.. image:: /static/img/screenshots/buffers-in-tabline.png
    :class: screenshot
    :target: /static/img/screenshots/buffers-in-tabline.png

.. admonition:: Files and Buffers

    One thing that can be a bit confusing to newcomers is that Vim refers to
    *files* —at least to how the concept is commonly understood in many other
    applications— as *buffers*. While most editors don't, Vim differentiates in its
    terminology between content in disk (a file) and content that is loaded in
    memory when you are editing it (a buffer). So, when you save, you technially
    are saving the contents of the buffer back to its associated file.

    Actually, a buffer is a bit more than just the content of the
    file in memory, but for the purposes of this or Vim's documentation,
    whenever you see buffer keep into account that is mainly a document in
    memory that may or may not have an associated file in disk (like for example
    in the case of newly created ones).


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

    :`Ctrl-]`: open file under cursor in a new vertical window

    :`Ctrl-_`: open file under cursor in a new horizontal window

    :`Ctrl-^`: open file under cursor in a new tabpage (you can use `Ctrl-6` if
        you can't press `Ctrl-^` in your keyboard).

How to use windows and tabs is explained in `Windows </docs/windows.html>`_ and
`Tabpages </docs/tabpages.html>`_.


Using the fuzzy finder
----------------------

A very fast way to open files when you already now their paths and/or names is
to use the fuzzy finder.

To open it, use `Space` `w` (ie. first `Space` then `w`):

.. image:: /static/img/screenshots/fuzzy-finder.png
    :class: screenshot
    :target: /static/img/screenshots/fuzzy-finder.png

Once open, it will display a list of files and a prompt at the bottom of the
screen. The list of files will change as you type showing those that match the
text that you're entering. The most probable match is shown highlighted at the
bottom of the list.

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

    :`Ctrl-]`: open selected file in a new vertical window

    :`Ctrl-_`: open selected file in a new horizontal window

    :`Ctrl-^`: open selected file in a new tabpage (you can use `Ctrl-6` if
        you can't press `Ctrl-^` in your keyboard).

How to use windows and tabs is explained in `Windows
</docs/windows.html>`_ and `Tabpages </docs/tabpages.html>`_.

Finally, to close the fuzzy finder you can use `Ctrl-o`, `Ctrl-c` or `Esc`:

    :`Ctrl-o`: close fuzzy finder


Most recently used files
""""""""""""""""""""""""

In case you want to reopen a file you have recently worked with, you can also
open the fuzzy finder with:

    :`Space` `W`: most recently used files (fuzzy finder)

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

    :`w`: switch to buffer (fuzzy finder)

This is particularly useful when you have a larger amount of files open as you
can switch to another buffer by typing only a few characters of its name.

You can also use the fuzzy finder to create a new window or tabpage displaying
the selected buffer:

    :`Ctrl-]`: open new vertical window with selected buffer

    :`Ctrl-_`: open new horizontal window with selected buffer

    :`Ctrl-^`: open new tabpage with selected buffer (you can use `Ctrl-6` if
        you can't press `Ctrl-^` in your keyboard).

Saving and closing
------------------

To save and close, use:

    :`s`: save current file
    :`Space` `s`: save all modified files
    :`x`: close current file
    :`Space` `x`: close all files and exit

.. container:: browsing-links

    « `Modes </docs/users-guide/modes.html>`_

    |

    `Moving </docs/users-guide/moving.html>`_ »

