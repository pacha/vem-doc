
.. role:: key
.. default-role:: key
.. |br| raw:: html

    <br/>

Tutorial
========

When you launch Vem, you are welcomed with an extremely minimalistic interface:
no toolbars, no buttons and no menus. The entire space is reserved for just one
thing, the editor, except for a single line of information at the bottom of the
screen. And, if you start typing something, chances are that strange
things start happening.

.. image:: /static/img/screenshots/new-doc.png
    :class: screenshot
    :target: /static/img/screenshots/new-doc.png

Other applications with these interface elements may be easier to discover using
the mouse, even when using them for the first time. Vem requires some initial
learning though. The good news is that it is not difficult and this tutorial
will guide you through all you need to know to use it.

Vem is a kind-of-odd relative of the Vi family of editors, and it is build on
top of Vim. If you haven't ever used a modal editors before, you're in for a
wild ride. They are very different from most conventional text editors, but they
can also change the way you write code. They can take a bit to get used to, but
one advantage of Vem is that it is arguably easier and more intuitive than the
rest of the family members.

If you have used Vim before then Vem has the potential to get on your nerves,
specially at first. Vem commands are placed in very different locations and they
behave differently than in Vim. If you have developed any muscle memory for Vim,
then you'll need some time to adapt. But persist. It doesn't actually take that
long and you may end up preferring Vem's simplicity.

This tutorial doesn't explain all available Vem commands, but it provides all
the essential ones. The complete set is explained in the `User's Guide
</docs/guide/index.html>`__.


Starting Vem
------------

Vem is just a set of configuration files on top of Vim or Neovim. That means
that you need one of those editors being installed in your system before you can
use Vem. Head to `Download </download.html>`_ for more details on how to install
them, and Vem, in your system.

Once you have Vem and Vim (or Neovim) installed, you can start it by running the
following command in a terminal::

    vem [filename]

This will start Vem using Vim as the underlying editor. You can also use the
``nvem`` and ``gvem`` commands to start Vem using either Neovim and the graphical
version of Vim respectively. Which one to use is mostly a question of personal
preference. From the point of view of Vem's features, there is no
difference between them.

To exit Vem, just press the ``x`` key:

    :`x`: close file (and exit Vem if it is the last open one)


.. admonition:: Configuration

    Vem's configuration options can be set by adding a text file at::

        ~/.config/vem/vemrc

    Most of the time you don't need to set any special configuration to start
    working with Vem, but you can also copy the example configuration file at
    `Configuration </config/index.html>`_, which contains some basic options,
    and adapt it to your needs. This is particularly important if you use an
    ``AZERTY`` or ``QWERTZ`` keyboard layout. In that case, you need to specify
    which one you're using so Vem can place actions in the correct positions
    across the keyboard.

Modes: a short explanation
--------------------------

Vem is intended to be used using just the keyboard. To be able to define all the
actions that can be performed, Vem, like Vim, relies on *modes*. If you haven't
used a modal editor before, just think of it as an editor in which the keyboard
can be used in two different ways: you can use it to insert text —like you would
do in most editors— or you can use it as a sort of *control panel* where each
key performs an action. Each one of these two options is known as a *mode* and
you can switch from one to another at any time.

The names of these two main modes are —there are others but these are the most
important:

* **Insert mode**: characters get inserted into the text as you type (except
  ``Ctrl-<key>`` combinations, which perform actions).

* **Command mode**: each key press performs a different action. This applies to
  both lowercase and uppercase letters, symbols and ``Ctrl-<key>`` combinations.
  (For example, as we saw before, pressing `x` closes the current file and exits
  Vem if it is the last one). Command mode is most commonly referred to as
  **Normal mode**.

Being able to insert text and switch back to normal mode at any time allows you
to have a large number of commands/actions available at your fingertips.
Although it may take some days to get used to it at first, switching modes
allows you to be extremely precise and fast when you develop some muscle memory.
You can, quite literally, perform actions at the same speed that you type.

.. admonition:: Vem and Vim differences

    With some small exceptions, all we have said so far is applicable to both
    Vem and Vim. The difference between them lies on how they define the
    commands available in command mode: while Vim defines a larger number of
    commands and many of them follow a small grammar that requires several
    keystrokes per action, Vem defines a smaller, simpler set of commands that
    are executed straight away after a key press in most cases.

    For example, in Vim you can create composite commands like ``5gUw`` (which
    makes the next 5 words uppercase), while in Vem each action is a keystroke
    in itself.

    Which approach is better is mostly a question of personal preference. Vem
    design stance is that it is better for the editor to be smaller and simpler,
    so it can stay out of the way and allow the user to focus 

The basics
----------

So far so good, but you may be wondering how to *actually* use Vem. Let's jump
straight into it:

* Vem starts in normal mode by default.
* To start **insert mode**, so you can insert text, press `i` (or `o` to start
  inserting at the *right side* of the current character instead of the left one).
* To go back to **normal mode** press `Ctrl-o`.
* Once in normal mode press `s` to save the current document and `x` to close it
  and exit.

If you press `s` and you didn't specify a filename in the command line, you'll
be prompted for one at the bottom of the screen.

With just those commands (`i`, `Ctrl-o`, `s`, `x`) you can already edit any
file, however, they won't be making your editing life much better. For
that you'll need more commands. This is how the most important ones are
distributed across the keyboard:

.. container:: tabs layout

    .. container:: tab qwerty

        .. figure:: /static/img/cheat-sheets/qwerty-basic.png
            :class: screenshot
            :target: /static/img/cheat-sheets/qwerty-basic.png

    .. container:: tab qwertz

        .. figure:: /static/img/cheat-sheets/qwertz-basic.png
            :class: screenshot
            :target: /static/img/cheat-sheets/qwertz-basic.png

    .. container:: tab azerty

        .. figure:: /static/img/cheat-sheets/azerty-basic.png
            :class: screenshot
            :target: /static/img/cheat-sheets/azerty-basic.png

If you take a look at that chart, you may notice how there doesn't seem to be a
connection between the name of the commands and the letter of the key they are
assigned to in many cases. For example, in the case of **Undo** and
**Redo** the assigned letter is:

.. container:: tabs layout key-summary

    .. container:: tab qwerty

        :`q`: undo
        :`Q`: redo

    .. container:: tab qwertz

        :`q`: undo
        :`Q`: redo

    .. container:: tab azerty

        :`a`: undo
        :`A`: redo

That is because, in Vem, commands are distributed spatially across the keyboard
so that related actions are clustered together and to optimize the use of both
hands for actions that are usually executed sequentially.

Looking at all those commands at once may be a bit overwhelming if you haven't
used a modal text editor before, but don't worry, remembering them and their
positions is actually pretty easy. Also, the meaning of some of them may not
look very clear at first. That chart is more useful when you know a bit more
about what the commands do, which is what the next sections will quickly cover.

But first let's summarize the commands we know already:

.. container:: tabs layout key-summary

    .. container:: tab qwerty

        :`Ctrl-o`: start normal mode

        ..

        :`i`: start insert mode (left of current character)
        :`o`: start insert mode (right of current character)

        ..

        :`s`: save
        :`x`: close (and exit if it is the last document)

        ..

        :`q`: undo
        :`Q`: redo

    .. container:: tab qwertz

        :`Ctrl-o`: start normal mode

        ..

        :`i`: start insert mode (left of current character)
        :`o`: start insert mode (right of current character)

        ..

        :`s`: save
        :`x`: close (and exit if it is the last document)

        ..

        :`q`: undo
        :`Q`: redo

    .. container:: tab azerty

        :`Ctrl-o`: start normal mode

        ..

        :`i`: start insert mode (left of current character)
        :`o`: start insert mode (right of current character)

        ..

        :`s`: save
        :`x`: close (and exit if it is the last document)

        ..

        :`a`: undo
        :`A`: redo

.. admonition:: The Esc key

    If you're familiar with Vim, you may be wondering why Vem uses `Ctrl-o` to
    start normal mode instead of the typical `Esc` key. In fact, `Ctrl-o` and
    `Esc` are aliases in Vem and you can use them interchangeably. The reason
    why the former is favored over the second is because the `Esc` key was
    placed in a much easier location to reach in the keyboard of the machine
    where the original Vi editor —the precursor of Vim— was developed. In almost
    every modern keyboard, though, `Esc` is located in the far right/top corner,
    which is an awkward placement for a key that has to be pressed constantly.

    *Note*: Some users remap the location of the `Esc` key in their systems, for
    example, swapping its functionality with `Caps Lock`. If that's your case,
    you can still use it in Vem as `Esc` and `Ctrl-o` are functionally
    equivalent.

Moving around
-------------

Basic movements
"""""""""""""""

You can use Vim's traditional movement keys, ``hjkl``, to move the cursor:

.. container:: featured-keys

    .. container:: featured-key

        .. container:: featured-label

            h

        .. container:: featured-action

            ←

    .. container:: featured-key

        .. container:: featured-label

            j

        .. container:: featured-action small-text

            ↓

    .. container:: featured-key

        .. container:: featured-label

            k

        .. container:: featured-action small-text

            ↑

    .. container:: featured-key

        .. container:: featured-label

            l

        .. container:: featured-action

            →

They move the cursor in the same way that arrow keys do. Many newcomers to
Vim/Vem find difficult to get used to them at first since the don't look very
intuitive. It requires some initial effort to get familiar with them but it is
very important to do it, mainly for two reasons: first, to move the cursor, you
don't have to take your hands away from the home row of the keyboard and,
second, many other actions in Vem are placed in the keyboard according to these
movements (remember that Vem distributes commands in a spatial way across the
keyboard). In sum, using these keys is part of an efficient use of Vem.

For example, the uppercase version of these letters just performs a larger
movement in the same direction:

.. container:: directional-mappings

    .. container:: key

        Previous paragraph |br| (previous blank line)

        `K`

    .. class:: symbol

        ↑

    .. container:: central-row

        .. container:: key

            `H`

            Previous word

        .. class:: symbol

            ←

        .. class:: symbol

            ∙

        .. class:: symbol

            →

        .. container:: key

            `L`

            Next word

    .. class:: symbol

        ↓

    .. container:: key

        `J`

        Next paragraph |br| (next blank line)

And you can also use them modified with `Ctrl` to start **insert mode** at the left,
right, above and below the current line:

.. container:: directional-mappings

    .. container:: key

        Insert at new line above cursor

        `Ctrl-k`

    .. class:: symbol

        ↑

    .. container:: central-row

        .. container:: key

            `Ctrl-h`

            Insert at start of line

        .. class:: symbol

            ←

        .. class:: symbol

            ∙

        .. class:: symbol

            →

        .. container:: key

            `Ctrl-l`

            Insert at end of line

    .. class:: symbol

        ↓

    .. container:: key

        `Ctrl-j`

        Insert at new line below cursor

Other horizontal movements
""""""""""""""""""""""""""

These are movements that you can use to move inside the current line:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`0`: move to first column

        :`,`: move to start (first non-blank character)

        :`.`: move to end

    .. container:: tab qwertz

        :`0`: move to first column of current line

        :`,`: move to beginning of current line (first non-blank character)

        :`.`: move to end of current line

    .. container:: tab azerty

        :`0`: move to first column of current line

        :`,`: move to beginning of current line (first non-blank character)

        :`;`: move to end of current line


Other vertical movements
""""""""""""""""""""""""

These movements will perform larger jumps up and down the current document:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`U`: page up

        :`M`: page down

        :`a`: move to the top of the file

        :`z`: move to the bottom of the file

    .. container:: tab qwertz

        :`U`: page up

        :`M`: page down

        :`a`: move to the top of the file

        :`y`: move to the bottom of the file

    .. container:: tab azerty

        :`U`: page up

        :`M`: page down

        :`q`: move to the top of the file

        :`w`: move to the bottom of the file

Going back
""""""""""

You can make the cursor go back to the location it was before a jump
with:

    :`R`: jump back. Pressing it multiple times takes the cursor through the
          jump history, making it visit all the locations in the current file
          you have jumped to sequentially.

For example, you could jump to the beginning of a source code file, add some
import/include/require statement and go back to the initial location by pressing
`R` to continue editing where you were previously.

.. admonition:: Movements in insert mode

   Generally, you activate normal mode to perform any kind of cursor movement or
   search. However, sometimes, you're in insert mode and just want to move the
   cursor a couple of characters left or right, or just place it on the line
   below. For those cases, you don't have to leave insert mode to activate
   normal mode to then go to insert mode again. You can just move the cursor
   (and remain in insert mode) with:

   .. class:: key-summary

        :`Ctrl-h`: (*insert mode*) left

        :`Ctrl-j`: (*insert mode*) down

        :`Ctrl-k`: (*insert mode*) up

        :`Ctrl-l`: (*insert mode*) right


Selecting text and using the clipboard
--------------------------------------

Selecting text is different than in many conventional text editors because there
are three kinds of selections:

**Characterwise selection** is the most common selection type in many other
editors, and it is defined between two arbitrary characters in the document:

.. parsed-literal::
    :class: terminal

    Programs **must be written for people to read,
    and only incidentally for machine**\ *s* to execute.

To start a characterwise selection, press `G` and perform any horizontal
movement (eg. `h`, `l`, `H`, `L`, `.`, ...).

**Linewise selection** is used to select full lines independently of the position
of the cursor. It is very useful when working with code as you can work with
blocks of lines very quickly:

.. parsed-literal::
    :class: terminal

    **Programs must be written for people to read,**
    **and only incid**\ *e*\ **ntally for machines to execute.**

To make a linewise selection, press `G` and perform any vertical movement (eg.
`j`, `k`, `J`, `K`, `U`, `M`, ...).

**Blockwise selection** is used to define an arbitrary square of text in the
document and it is commonly used to perform advanced edits over multiple lines:

.. parsed-literal::
    :class: terminal

    Programs **must be written** for people to read,
    and only **incidentally f**\ *o*\ r machines to execute.

To start a blockwise selection press `G` `G` (twice).

To know in which selection mode you are at any given moment, you can look at the
status line at the bottom of the screen. There the mode indicator will state
``Visual`` for characterwise selections, ``V-Line`` for linewise selections and
``B-Line`` for blockwise selections.

.. Important::

    You can perform any vertical or horizontal movement in both characterwise and
    linewise selections, which defines which type they are is just the **first**
    movement.

    Also, you can cycle through the selection types by repeatedly pressing `G`.

Deselecting and Reselecting
"""""""""""""""""""""""""""

To stop a selection and go back to normal mode and to reselect the latest
selected text use:

    :`Space`: (in visual mode) deselect

    :`Space` `Space`: (in normal mode) reselect

Quick selections
""""""""""""""""

While you can create any arbitrary selection using `G` and movement actions, in
practice it is very common to select specific text objects. For those, you can
use the following shortcuts:

    :`g`: select word

    :`g` `g`: like `g` but for all characters surrounded by white space under the
        cursor (including parenthesis, brackets and punctuation)

    :`Ctrl-g`: select text between enclosing quotes, parenthesis or brackets.
        Repeated presses to `Ctrl-g` expands the selection to the next
        enclosing pair of quotes, parenthesis or brackets.

    :`Space` `a`: select all

    :`Space` `p`: select current paragraph

There are many more selecting actions. Take a look at the `Selecting
</docs/guide/selecting.html>`_ section for a complete list.

Using the clipboard
"""""""""""""""""""

Now that you know how to define a selection, it is a good moment to learn how
to use the clipboard. Some basic actions that you can perform over a selection
are:

    :`e`: copy

    :`d`: cut

    :`c`: delete

    :`p`: paste

As you can see, Vem does not use the common `Ctrl-x`, `Ctrl-c` and `Ctrl-v`
shortcuts. This is on purpose, and although it may feel strange not to use them
at first, after a bit of practice you'll notice how fast and comfortable are
Vem's mappings in comparison.

Another thing to take into account is that `p` behaves differently depending on
the kind of selection that was copied or cut. For example, if you have a
linewise selection, lines will be pasted entirely without altering the existing
ones (you don't have to *open* space for them). Characterwise selections behave
closer to how they do in other text editors.

.. admonition:: Working with single lines

    The **copy**, **cut** and **delete** actions operate on the current
    selection if there is one or the current line if there's none. This is very
    practical to work with single lines in code. For example, to move a single
    line you only have to press `d` when the cursor is over it and `p` on the
    place you want to move it to.

Using the secondary clipboard
"""""""""""""""""""""""""""""

Vem has two clipboards. The main clipboard (accessed with `e`, `d` and `p`) is
connected to the system one so you can copy and paste information from/to other
applications. The secondary clipboard allows you to have an additional piece of
text in memory without overwriting whatever you have in the main one. You can
access it with:

    :`E`: copy (secondary clipboard)

    :`D`: cut (secondary clipboard)

    :`P`: paste (secondary clipboard)

.. admonition:: Using the system clipboard

    By default, Vem uses the system clipboard to allow you to copy and paste
    from/to different applications, even when working in the terminal. However,
    for this to work, the Vim or Neovim instance that Vem uses to run needs to
    provide support for it.

    If you can't copy or paste from/to other applications, check the `Clipboard
    <docs/guide/clipboard.html>`_ section to setup the system correctly.

Directional paste
"""""""""""""""""

Unlike other editors, Vem pastes content after the cursor by default (both for
characterwise and linewise selections). To paste before the cursor you can use:

    :`Ctrl-p` `h`: paste to the left of the cursor
    :`Ctrl-p` `k`: paste above the cursor

Deleting text
-------------

You don't need to switch to insert mode to be able to delete text. Most of the
time this is something you can do quicker from normal mode.

The basic actions to delete text are:

    :`I`: delete character to the left of the cursor (ie. *backspace*)

    :`O`: delete character to the right of the cursor (ie. *delete*)

And, as you saw in the previous section:

    :`c`: delete line or selection (if one active)

Changing text
"""""""""""""

In other cases, you may want to delete some text and start insert mode
immediately after (what it is known as *changing* in Vim terms). In the same way
that the `g` key allows to perform quick selections, `f` allows you to to
perform quick changes:

    :`f`: delete word under cursor and start insert mode

    :`F`: delete from cursor to the end of line and start insert mode

    :`Ctrl-f`: delete text between next enclosing quotes, parenthesis or
        brackets and start insert mode

Command line
------------

When you perform a search or when you get prompted by Vem about writing the
unsaved changes, the last line of Vem's interface is used. This last line is
special and it is known as the **command line**. Apart from providing search
terms and answering prompts, you can use it to execute commands. These are known
as *ex-commands* and there's a large amount of them available in Vim. There's
nothing specific in Vem about the command line and any information that you find
about commands in Vim is valid for Vem too.

To use the command line, press colon. Then enter the command and then press
`Enter` to execute it:

    :`\:`: start typing a command

For example::

    :sort

will sort all the lines of your document alphabetically. (Use ``:sort!`` to
do the same but in descending order).

A very useful command is ``:s[ubstitute]`` to search and replace text in your
document::

    :%s/search parttern/replacement text/g

Here ``%`` stands for *the whole document*. You can also pass a range of lines
instead. Eg ``:145,160s/foo/bar/``. And ``g`` stands for *replace all
occurrences in the same line, not only the first one*. We'll see a bit more of
the command line in a section below.

You can also use the command line to jump to a specific line in the document.
For example::

    :203

will jump to that line number.

Once you execute a command in the command line, you'll be back to normal mode.

.. Admonition:: Movement in the command line

   In the same way that you can move in insert mode with the combination of
   `Ctrl` and the basic movement keys: `h`, `j`, `k` and `l`, you can use these
   mappings to perform actions in the command line:

    :`Ctrl-h`: move cursor to the left
    :`Ctrl-l`: move cursor to the right
    :`Ctrl-k`: show previous command (in command line history)
    :`Ctrl-j`: show next command (in command line history)

   `Ctrl-k` and `Ctrl-j` are particularly useful key combinations since they
   allow you to repeat previous commmands and searches without having to type
   them again. Also, if you type the beginning of a command and then press
   `Ctrl-k`, the closest command in history that matches with that start will be
   shown, so you can type a couple of characters and directly get the command
   you are looking for without having to go through the rest of the history.


Searching
---------

To search inside a document use:

    :`/` or `-`: start search

.. Admonition:: Using / or -

    `/` is the key traditionally used in Vim for searching, and it is located at
    the bottom right of the keyboard (next to the right shift key) in QWERTY US
    layouts. In some other layouts, its position is taken by `-`. While, in Vem,
    you can indistinctly use one or the other, it is recommended that you use
    whichever key is located in that position (lower right) on your keyboard
    since that is a very convenient placement for such a frequently used key.

When you start a search, the cursor will be placed in the command line and
you'll be able to type your search term:

.. image:: /static/img/screenshots/search-small.png
    :class: screenshot
    :target: /static/img/screenshots/search-small.png

Matches in the text will be highlighted as you type and, when you press `Enter`,
the cursor will be placed in the first occurrence after its position.

Once you're back to the text you can jump to other matches:

    :`m`: find next occurrence of latest search

    :`u`: find previous occurrence of latest search

Or you can reset the highlighting when you don't need it anymore:

    :`Ctrl-r`: remove highlighting of occurrences of the last search term

Some relevant facts to note are:

    * You can use regular expressions in your search (see the `Searching and
      replacing </docs/guide/search.html>`_ section for more information about
      the syntax).

    * Searches are case sensitive by default. To make case insensitive search, prefix your
      term with ``\c``. For example::

        /\cfoo

      will match both ``Foo`` and ``FOO``.

    * To search in the reverse direction (from the current cursor position to
      the beginning of the document), you can use `?` instead of `/` or `-`.

Searching the word under cursor
"""""""""""""""""""""""""""""""

Sometimes, you just want to find the next occurrence of a term that is already
present in the document. In those cases, just place the cursor on top of the
word to search and use:

    :`_`: search occurrences of the word under the cursor


Status line
-----------

By now, you probably have noticed that the line just on top of the command line
shows the current active mode and the path of the file you're editing. That is
the **statusline**:

.. image:: /static/img/screenshots/statusline.png
    :class: screenshot
    :target: /static/img/screenshots/statusline.png

In addition, it provides other pieces of information. For instance, the cursor
position is displayed at the far right with the format::

    <line>:<column>  <percentage>

where ``percentage`` is the percentage of progress within the document.

Also, there are the three pieces of information that are not immediately obvious
in a text file just by looking at it but that define how it is internally
formatted:

* Indentation type and size (``tabs`` or ``spaces``)
* File enconding (eg. ``utf-8``, ``latin-1`` or ``cp1251``)
* Newline type (Unix: ``LF``, Windows: ``CRLF``, Mac pre-OSX: ``CR``)

.. admonition:: Displaying the Git branch

    You can also display the current Git branch in the statusline. See
    `Git Integration </config/essentials/git-integration.html>`_ for more
    information.


Working with multiple files
---------------------------

In our examples so far, we have been operating with a single file. Vem offers,
though, several commands to work very efficiently with multiple of them.

The basic commands to open, save and close files are:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`W`: open file

        :`s`: save file

        :`x`: close file (and exit Vem if it is the last one)

    .. container:: tab qwertz

        :`W`: open file

        :`s`: save file

        :`x`: close file (and exit Vem if it is the last one)

    .. container:: tab azerty

        :`Z`: open file

        :`s`: save file

        :`x`: close file (and exit Vem if it is the last one)

Using the file browser
""""""""""""""""""""""

When you indicate that you want to open a file, a file browser is displayed:

.. image:: /static/img/screenshots/file-browser.png
    :class: screenshot
    :target: /static/img/screenshots/file-browser.png

As you can see, the file browser is very minimalistic and uses the same window
where you edit your files. Don't let this simple appearance mislead you:
while the functionality is very basic —pretty much just opening files— it is
extremely fast to use, in particular because you can use any movement key that
you use when editing files.

There are two movement keys that change their behavior when used inside the file
browser though:

    :`h`: go to parent directory

    :`l`: open the file under the cursor (if the cursor is over a directory, the
        directory contents are displayed instead)

Other than that you can go up and down, jump to the top or the bottom of the
list or search inside it using the same keys that you would use normally. When
you find the file you want to open just press `l` or `Enter`.

A couple of additional commands that are very useful inside the file browser
are:

    :`Ctrl-h`: toggle the display of hidden files on / off

    :`Ctrl-r`: refresh content

To leave the file browser without opening a file, use:

    :`x`: close file browser

.. Admonition:: Buffers and Files

    When using Vem, you may notice that open files are frequently referred to as
    *buffers* (for example, that is how the fuzzy finder names them). *Buffer* is
    the term traditionally used in Vim to refer to a document in memory —as
    opposed to a *file*, which is the content persisted on disk. For example,
    when you create a new document in the editor, it constitutes a buffer that
    is not associated yet to a file in disk. Most editors —and most applications
    for that matter— don't make this distinction in their terminology and refer,
    in general, to both documents in memory and in disk as *files*. In this
    documentation, that second and more extended meaning is used, but be aware of
    the meaning of the term *buffer* since it is profusely used in Vim's
    documentation and in many commands of the command line.

Creating a new file
"""""""""""""""""""

You can create a new file with:

    :`Ctrl-t`: new file

When a new file is created it doesn't have a name nor it is saved on disk. When
you press `s` to save for the first time you will be prompted for its filename.

.. Admonition:: the :w command

    When you're prompted to enter the filename of a new file what you're
    executing is just the ``:w <filename>`` command. You can actually execute
    that command at any moment for any file. If you don't specify any path, the
    current file is saved (ie. same as pressing `s`). If you specify a path
    though, a new file with the contents of the current document will be created
    in disk.

Switching files
"""""""""""""""

When there are multiple open files in the editor, the **tabline** —a line at the
top showing all their names— is displayed, and the current file is highlighted:

.. image:: /static/img/screenshots/tabline.png
    :class: screenshot
    :target: /static/img/screenshots/tabline.png

To switch from one file to another you can use:

    :`t`: next file

    :`T`: previous file

Or you can directly jump to a particular file by pressing:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`w`: switch buffer

    .. container:: tab qwertz

        :`w`: switch buffer

    .. container:: tab azerty

        :`z`: switch buffer

When you do so, a new prompt and a list of results appear at the bottom of the
editor. That is the fuzzy finder and it allows you to type the name of the file
that you want to jump to:

.. image:: /static/img/screenshots/switch-buffer.png
    :class: screenshot
    :target: /static/img/screenshots/switch-buffer.png

The fuzzy finder allows you to type a few characters that can be found anywhere
in the filename and will show the files that match your input characters in the
top list. The characters don't have to necessarily be at the beginning of
the filename nor be consecutive.

Once the filename you're looking for is highlighted in the top list of results,
you can press `Enter` to switch to it.

If the file you're looking for is already being shown in the result list you can
select it by using the following key mappings before pressing `Enter`:

    :`Ctrl-k`: move up the result list in fuzzy finder

    :`Ctrl-j`: move down the result list in fuzzy finder

This system works specially well when you have many open files because jumping
from one to another just requires a few keystrokes.

To close the fuzzy finder without switching from the current file, use `Ctrl-o`
or `Esc`.

.. Admonition:: Order of the files in the tabline

   By default, files are displayed in the tabline in the same order as they are
   open. Since `t` and `T` switch from one file to another in the order as they
   are displayed, you may want to sort them in a more convenient way. To do so,
   you can use:

    :`{`: move file to the left in the tabline
    :`}`: move file to the right in the tabline

Saving and closing all files
""""""""""""""""""""""""""""

Finally, you may want to save all unsaved files or just close all files (and
effectively leaving Vem). You can do so with:

    :`Space` `s`: save all
    :`Space` `x`: close all (exit Vem)

To execute them, you first have to press `Space` and then `s` or `x` in
sequence.

Working with code
-----------------

The following actions are extremely common when working with code:

Indenting
"""""""""

To indent or unindent the current selection, or just the current line if
there's no selection active, use:

    :`Tab`: indent current line or selection

    :`Shift-Tab`: unindent current line or selection

Commenting
""""""""""

You can comment pieces of code out with `v`. If there's a visual selection,
then all the lines in the visual selection are commented out. If there's no
visual selection then only the current line will be commented out:

    :`v`: comment and uncomment code (line comment symbols)

`v` acts as a toggle key so it can be used to both comment and uncomment code.
If the lines in a selection are already commented out, `v` will remove all the
comment symbols and, conversely, it will comment out all lines if they are not
like that already.

To use block comment symbols, instead of line comment ones, use `V`:

    :`V`: comment and uncomment code (block comment symbols)

The editor is able to automatically use the correct comment symbols for most
common, and not so common, programming languages and markup files. However, if
your file comment symbols are not detected correctly, take a look at the 
`Comments </docs/guide/comments.html>`_ section for possible solutions.


Doing things fast
-----------------

So far we have seen many commands that can already help you to be very efficient
while you edit text. However, you may have already noticed that switching modes
for small edits can be annoying. For example, if you want to correct a single
character, you need to press `i` or `o`, delete the character, type the new one
and press `Ctrl-o` to go back to normal mode. That's way too many key presses
for such a simple change.

This section list commands that make small edits much easier to do and,
therefore, provide a much smoother editing experience.

Replacing characters
""""""""""""""""""""

Sometimes you need to change just a single character by another one. In those
cases, you can just press `r`, when the cursor is over the character to be
replaced, followed by the new one:

    :`r{char}`: replace the character under the cursor with ``char``. If there's
                a visual selection active, all the characters in the selection
                are replaced by ``char``.

Toggle case
"""""""""""

You can toggle the case of a character or a selection without leaving normal
mode with:

    :`Ctrl-u`: toggle case (lowercase/uppercase) of the character under the
               cursor or the text in the currently active selection.

Adding whitespace
"""""""""""""""""

You can add a blank space both in front or after the cursor (like pressing
`Space` in insert mode) with:

    :`(`: add a space to the left of the cursor
    :`)`: add a space to the right of the cursor

And you can also add blank lines both above and under the cursor too:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`y`: add a blank line over the cursor
        :`n`: add a blank line below the cursor

    .. container:: tab qwertz

        :`z`: add a blank line over the cursor
        :`n`: add a blank line below the cursor

    .. container:: tab azerty

        :`y`: add a blank line over the cursor
        :`n`: add a blank line below the cursor

Joining/Splitting lines
"""""""""""""""""""""""

    :`&`: join the next line with the current one (removes the line break).
          If there's a visual selection active, join all the lines in the
          selection.

    :`|`: introduce line breaks in a line or selection to adjust the text to a
          maximum width. This maximum with is equal to the value of the
          ``textwidth`` option if it is not set to zero. Otherwise, it is set to
          79 characters (or to the screen width, if the editor screen is smaller
          than that number).

The commands to join and split lines are specially useful when editing regular
text (as opposed to code).

Adding/Substracting units to numbers
""""""""""""""""""""""""""""""""""""

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`A`: add 1 to the number under the cursor
        :`Z`: subtract 1 from the number under the cursor

    .. container:: tab qwertz

        :`A`: add 1 to the number under the cursor
        :`Y`: subtract 1 from the number under the cursor

    .. container:: tab azerty

        :`Q`: add 1 to the number under the cursor
        :`W`: subtract 1 from the number under the cursor


Solving problems and getting help
---------------------------------

Unintended changes
""""""""""""""""""

It can happen —specially when learning Vem, but also later too— that you
mistakenly press a different key than the one you really intended to use. Since
every key has an associated action, you may end up in an unexpected place of
your document or modifying it in an unintentional way.

If this happens, just jump back to where you were or undo the latest action with:

    :`q`: undo last change
    :`R`: jump to previous position

`q` undoes the last change and jumps back too, so you can use that one to ensure
that you didn't modify anything by mistake and if the latest change was correct
you can just redo it with `Q`.

In any case, you can also check the timestamps of the latest changes to see, at
any time, when the last change to the document happened::

    :undolist

Getting help
""""""""""""

You can get help about any topic using the command line. Just type::

    :help <topic>

With `Tab` you can autocomplete the topic string.

You can use the ``help`` command to find more information about configuration
options, commands or mappings. For example, you can get more information about
the ``:sort`` ex-command with::

    :help :sort

After executing this command, the screen will be split showing your current
document and a new `window </docs/guide/windows.html>`__ displaying the
contents of help. You can move in this window using the same movement keys as in
the rest of the editor. In addition, you can:

* jump to a topic by placing the cursor on top of a highlighted term and
  pressing `Space` `o`
* jump back to the previous topic with `Space` `i`
* close the window with `x`

.. Note:: The key command information provided by ``:help`` is the one related
   to the original Vim ones, not Vem's. To get a description of Vem commands use
   this tutorial, visit the `User's guide </docs/guide/index.html>`__ or
   check the `Key command cheat sheets </docs/cheat-sheets/index.html>`__.

Next steps
----------

This tutorial contains all the information needed so you can use Vem
proficiently. However, there are many more Vem key commands that leverage the
many features of Vim. For example, you can split the working area of the editor
in different `windows </docs/users-guide/windows.html>`__, record repetitive
actions using `macros </docs/users-guide/macros.html>`__ or setting `marks
</docs/users-guide/marks.html>`__ within your documents to jump quickly to.

To check these and many more actions, you can take a look at the `User's Guide
</docs/users-guide/index.html>`__, which contains the full explanation of all
Vem's commands.

If you want just a quick summary of the available actions, you can use one of
the available cheat sheets instead:

.. container:: note

    * ``QWERTY``: `Basic </docs/cheat-sheets/qwerty-basic.html>`__ | `Full </docs/cheat-sheets/qwerty-full.html>`__
    * ``QWERTZ``: `Basic </docs/cheat-sheets/qwertz-basic.html>`__ | `Full </docs/cheat-sheets/qwertz-full.html>`__
    * ``AZERTY``: `Basic </docs/cheat-sheets/azerty-basic.html>`__ | `Full </docs/cheat-sheets/azerty-full.html>`__

The basic sheet contains the commands described in this tutorial, the full
version contains all available ones.

