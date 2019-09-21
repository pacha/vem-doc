---

title: "Vem :: Tutorial"
layout: two-cols
index_node: tutorial.rst

---


.. role:: key
.. default-role:: key

Tutorial
========

To start Vem, use the ``vem`` command in the command line::

    vem [filename]

After launching Vem, you'll notice that its user interface is very simple:

.. image:: /static/img/screenshots/new-doc.png
    :class: screenshot
    :target: /static/img/screenshots/new-doc.png

At the bottom of the screen you can see two special lines. The fist one is the
*statusline*, which shows information about the current file and the very last
one is the *command-line*, which displays messages and that you can use to enter
commands for searching, replacing, sorting and more.

Vem, like Vim, is a modal editor. And if you're not familiar with this kind of
editors, you may be surprised to see that nothing will get inserted if you type
some text now. That's because when Vem starts, it is in **normal mode** (also
known as **command mode**) and the keyboard is prepared to accept commands from
you. For example, if you press `s` the current file will be saved and if you
press `f`, you'll delete the word under the cursor.

If you press `i`, **insert mode** will be activated and the editor will behave
like most common text editors and text will be inserted as you type. To go back
to normal mode to execute more commands, press `Ctrl-o`.

To exit Vem, press `x` in normal mode —this will close the current file or exit
Vem if it is the last one.


Switching modes
---------------

More in detail, to change from normal to insert mode you can use `i` or `o`:

    :`i`: start insert mode before current cursor position.

    :`o`: start insert mode after current cursor position.

And to go back to normal mode:

    :`Ctrl-o` or `Esc`: start normal mode.

Vim's traditional key to activate normal mode is `Esc`. Vem uses `Ctrl-o`
because it is generally easier to reach in the keyboard.

In a normal editing session, one typically switches back and forth between
normal and insert mode.

One thing to note about modes is that, in normal mode, a key can have assigned
up to three commands: the lowercase letter (`t`), the uppercase letter (`T`) and
the key pressed together with ``Control`` —Vem doesn't make use of any other
modifier key like ``Alt`` or ``Command``. Symbols and numbers also have commands
assigned.

In insert mode, only ``Ctrl-<key>`` combinations perform actions.

.. admonition:: Current mode display

    The current mode is displayed at the beginning of the status line. That way
    you always know which mode is active. One common practice is to change the
    shape of the cursor depending on the active mode, with a square block (█)
    for normal mode and a thin line (│) for insert mode. That is a very
    intuitive way of keep track on which mode you're in. To know how to set up
    this feature check the `configuration section
    </configuration.html#cursor-shape>`_ of the documentation.

Basic actions
-------------

Once you're in normal mode, almost every key press in the keyboard performs an
editing action. That means that are a large number of them available to you.
Some actions are more frequently used than others though and you don't need to
learn all them in one go to start using Vem.

These are some basic actions that you may use all the time:

**Saving and closing**

    :`s`: save (a prompt will appear if your document doesn't have a name yet)

    :`x`: close/quit (a prompt will appear if you have unsaved changes)

**Undoing changes**

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`q`: undo

        :`Q`: redo

    .. container:: tab qwertz

        :`q`: undo

        :`Q`: redo

    .. container:: tab azerty

        :`a`: undo

        :`A`: redo

**Finding text in the document**


    :`/` or `-`: search downwards (from current cursor position to end of document)

    :`?`: search upwards (from current cursor position to beginning of document)

    :`m`: (after searching) find next occurrence

    :`u`: (after searching) find previous occurrence

    :`_`: search occurrences of the word under the cursor

    :`Ctrl-r`: remove highlighting of occurrences of the last search term

When you search, the cursor will be placed in the very last line of Vem's
interface, prefixed with the operator that you just used (`/` or `?`). Just type
there the text to search and press enter to trigger the search itself. You can
use regular expressions for more complex searches.

Search is always case sensitive, to make it case insensitive prefix your search
term with ``\c``. For example, the following term will match ``Foo`` or ``FOO``::

    /\cfoo

**Moving the cursor**

    :`h`: left

    :`j`: down

    :`k`: up

    :`l`: right

Vem is not designed to be used with the arrow keys (although you *can* use them)
but the traditional Vim cursor movement ones. If you haven't used Vim or Vem
before, they may not look very intuitive and it might take some time to get
used to them. However, they bring some advantages:

* Your hand doesn't have to leave the home row at any moment. There's no need to
  move it back and forth from the home row to the arrow key cluster.

* In Vem, the location of many actions in the keyboard is related to these four
  keys. So, using them helps to remember all surrounding actions and to be
  really efficient with Vem.

.. container:: note

    One additional advantage of using ``hjkl`` as direction keys is that they
    have been used as such since the times or the original Vi editor, which
    means that there are many common applications such as document readers, file
    browsers or email clients that support them.


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

Opening, saving and closing
---------------------------

There are two keyboard commands to open a file:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`w`: open file (fuzzy finder)

        :`W`: open file (file browser)

    .. container:: tab qwertz

        :`w`: open file (fuzzy finder)

        :`W`: open file (file browser)

    .. container:: tab azerty

        :`z`: open file (fuzzy finder)

        :`Z`: open file (file browser)

With the *file browser*, you can choose the file to open by locating it in the
file system, whereas the *fuzy finder* allows you to find the file you
want to open by typing part of its path.

You can also use the command line to open files directly::

    :e <path-to-your-file>

The path can be either absolute or relative to the current directory, which
typically is the directory where you started Vem (you can display it with
``:pwd`` and change it with ``:cd``).

Once open, both the *file browser* and the *fuzzy finder* offer some custom
commands:

**File browser**

When you open the file browser, the contents of the file you're
editing will be replaced by a listing of the contents of the directory where the
file that you were editing is stored. Use the ``hjkl``
movement keys to browse through the file system:

    :`h`: go up one directory

    :`j`: move the cursor down

    :`k`: move the cursor up

    :`l`: open the directory or file depending on what is under the cursor

..

    :`Ctrl-r`: refresh listing

    :`x`: close file browser

**Fuzzy finder**

When you open the fuzzy finder, you'll be shown a list of files and a prompt at
the bottom of the screen. The list of files will change as you type. It will display
all the files in your project or subdirectories that match the text that you're
entering. The most probable match is shown highlighted at the bottom of the
list.

After entering the text, when you get the file that you're looking for
highlighted, you can just open it pressing `<Enter>`.

One very practical feature of the fuzzy finder is that you don't have to type
all the characters in the file path to find a match. For example, if you want to
open a file in ``foo/bar/my-file.ext``, you can type:

    * ``my-file``

    * ``foobarmy-file``

    * ``barfile``

You can use the following key mappings with the fuzzy finder:

    :`Ctrl-j`: move the highlighted selection down (so you can open a file other
               than the already highlighted one)

    :`Ctrl-k`: move the highlighted selection up (so you can open a file other
               than the already highlighted one)

    :`Ctrl-h`: move the cursor in the prompt line to the left

    :`Ctrl-l`: move the cursor in the prompt line to the right

..

    :`Ctrl-r`: refresh fuzzy finder (reload list of files)

    :`Ctrl-o`: close fuzzy finder

The fuzzy finder is very practical to open files in projects that you know well
very quickly with a few key strokes.


**Selecting the file to edit**

Once you have multiple files open, you can select which file to edit with:

    :`t`: next buffer in the buffer list

    :`T`: previous buffer in the buffer list

    :`Ctrl-t`: jump to buffer by typing part of the name (same as the fuzzy
               finder for opening files, but just for the current buffers).

When you have multiple files open, their names will be displayed at the top of
the screen. Sometimes you may want to change the order in which they appear. You
can do so with:

    :`{`: move current buffer to the left

    :`}`: move current buffer to the right

**Saving and closing**

To save and close buffers/files, you can use:

    :`s`: save file

    :`x`: close file (exit if last one)

    :`Space` `x`: close all files and exit

When you close a file with unsaved changes you get prompted if you want to save
or discard them. If you want to save all changes in all files you can also use
the command::

    :wall

before closing all the files.


Moving the cursor
-----------------

As we saw before, you use `h`, `j`, `k`, `l` to move the cursor:

    :`j`: cursor down

    :`k`: cursor up

    :`h`: cursor left

    :`l`: cursor right

In Vem, many other actions are related to these movements. For example, the
uppercase version of those keys make the cursor to perform larger jumps:

    :`J`: next paragraph (next blank line)

    :`K`: previous paragraph (previous blank line)

    :`H`: previous word

    :`L`: next word

Also, the combination of these keys and the `Ctrl` modifier allows you to
move the cursor and change to insert mode at the same time:

    :`Ctrl-j`: open blank line below current one and enter insert mode

    :`Ctrl-k`: open blank line above current one and enter insert mode

    :`Ctrl-h`: move to beginning of current line and enter insert mode

    :`Ctrl-l`: move to end of current line and enter insert mode

All these 4 actions enter insert mode after the jump. If you want to perform the
jump but remain in normal mode, use:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`,`: move to beginning of current line

        :`.`: move to end of current line

        :`y`: open blank line above current one

        :`n`: open blank line below current one

    .. container:: tab qwertz

        :`,`: move to beginning of current line

        :`.`: move to end of current line

        :`z`: open blank line above current one

        :`n`: open blank line below current one

    .. container:: tab azerty

        :`,`: move to beginning of current line

        :`;`: move to end of current line

        :`y`: open blank line above current one

        :`n`: open blank line below current one

Vem considers the beginning of the line as the first non-blank character on it.
So if you press `Ctrl-h`, you'll start insert mode after the current level of
indentation in the line. And, if you press `,`, the cursor will be placed over
the first non-blank character. To go to the very first column of the line, use
`^` or `0`:

    :`0` or `^`: move to first column of current line

Other four additional and very important movements are:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`a`: first line of the document

        :`z`: last line of the document

        :`U`: page up

        :`M`: page down

    .. container:: tab qwertz

        :`a`: first line of the document

        :`y`: last line of the document

        :`U`: page up

        :`M`: page down

    .. container:: tab azerty

        :`q`: first line of the document

        :`w`: last line of the document

        :`U`: page up

        :`M`: page down

Finally, you can make the cursor go back to the location it was before a jump
with `R`:

    :`R`: jump back. Pressing it multiple times takes the cursor through the
          jump history, making it visit all the locations in the current file
          you have jumped to sequentially.

For example, you could jump to the beginning of a source code file, add some
import/include/require statement and go back to the initial location by pressing
`R` to continue editing where you were previously.

.. admonition:: Movements in insert mode

   Generally, you activate normal mode to perform any kind of cursor movement
   or search. However, there are times in which you're in insert mode and just
   want to move the cursor a couple of characters left or right, or just place
   it on the line below. For those cases, you don't have to leave insert mode to
   activate normal mode to then go to insert mode again. You can just move the
   cursor (and remain in insert mode) with:

   .. class:: key-summary

        :`Ctrl-h`: (*insert mode*) left

        :`Ctrl-j`: (*insert mode*) down

        :`Ctrl-k`: (*insert mode*) up

        :`Ctrl-l`: (*insert mode*) right


Selecting text
--------------

Like in most other editors, when you want to perform an action over a section of
a document, you have to select it visually first.

Vem offers three kinds of visual selections:

    * **Characterwise selection**: This is the usual way of selecting text in
      most editors. The selection goes from any arbitrary character in a line to
      another character in the same or different line.

    * **Linewise selection**: This selection comprises only entire lines. This
      is extremely useful when programming because it allows you to select a
      range of lines independently of where inside the line you are. Also, when
      you copy/cut and paste lines, you don't have to worry about *opening*
      space for them, since a linewise selection is always pasted below the
      current line (without altering it).

    * **Block selection**: It is not very common to find this kind of selection
      in other text editors and it is very useful. It allows you to select an
      arbitrary square of text. It can be used to work with tabular data or
      with lines of text that follow a common pattern.

To start a characterwise selection, press `G` and perform a movement to the
left of right (like for example with `h`, `l`, `H` or `L`). To start a
linewise selection, press `G` and perform a movement up or down (like with
`j`, `k`, `J` or `K`):

    :`G` *and sideways movement*\:: start a character-wise selection

    :`G` *and up/down movement*\:: start a line-wise selection

    :`GG`: start a block-wise selection

Once you have started a selection of a given type, you can move in any direction
and the selection type will not change. If you want to change the current
selection type, you can press `G` again to cycle through them:

    :`G`: (in visual mode) change selection type

To undo a selection and go back to normal mode:

    :`Space`: (in visual mode) undo selection

One important thing about selections is that you can use any of Vem's movements
to define it. Therefore, once you have start the selection you can use any
movement key to expand or reduce it. This includes moving to the next/previous
word, paragraph or page, moving to the beginning or end of the document and,
also, the search keys `/` and `?`. You can start a selection and use the search
function to move the cursor where the selection should end.

**Quick selections**

The following commands allow you to define frequent selections easily. Spend bit
of time trying them because they can save you a lot of time:

    :`g`: select word under cursor (only letters)

    :`gg`: select *extended* word under cursor (non white space characters)

    :`Ctrl-g`: select text between enclosing quotes, parenthesis or brackets.
               Repeated presses to `Ctrl-g` expands the selection to the next
               enclosing pair of quotes, parenthesis or brackets.

    :`Space` `a`: select all

    :`Space` `g`: reselect the last selected area

    :`Space` `Space`: select last pasted text

.. admonition:: Inserting text simultaneously in multiple lines

    A very useful feature of block selections is that you can append any text at
    either side of them. For example, if you have a column of text that expands over
    several lines and want to add another column at its side, you just have to
    select the original column with a block and press `Ctrl-h` to prepend text to
    the left of it or `Ctrl-l` to append text to its right.

    Once you press `Ctrl-l` or `Ctrl-h`, type the text you want to include and
    then `Ctrl-o` when you're finished. The text that you just entered will be
    repeated in every line covered by the selection:

    .. class:: key-summary

        :`Ctrl-h`: (*block mode*) prepend text to a selected block

        :`Ctrl-l`: (*block mode*) append text to a selected block


Using the clipboard
-------------------

Vem has two clipboards, which means that you can hold two pieces of text
simultaneously in memory and paste them independently.

The primary clipboard is the most commonly used one. If your terminal emulator
supports it, it is connected to your system clipboard and it allows you to
exchange information with other applications, like copying or pasting from
webpages or other editors. Use the following commands to make use of it:

    :`e`: copy

    :`d`: cut

    :`p`: paste

Te secondary clipboard allows you to hold in memory an additional piece of text
and it is not connected to the system clipboard in any way. Use the upper case
version of the same letters to access it:

    :`E`: copy (aux. clipboard)

    :`D`: cut (aux. clipboard)

    :`P`: paste (aux. clipboard)


Indenting code
--------------

To indent code use `Tab` and to un-indent it (shifting it to the left) use
`Backspace`. If you use these keys when no text is selected, then they apply to
the current line:

    :`Tab`: indent current line or selection

    :`Shift-Tab` or `Backspace`: un-indent current line or selection


Commenting code
---------------

You can comment pieces of code out with `v`. If there's a visual selection,
then all the lines in the visual selection are commented out. If there's no
visual selection then only the current line will be affected.

`v` acts as a toggle key so it can be used to both comment and uncomment code.
If the lines in a selection are already commented out, `v` will remove all the
comment symbols and, conversely, it will comment out all lines if they are not
like that already.

To use block comment symbols, instead of line comment ones, use `V`:

    :`v`: comment and uncomment code (line comment symbols)
    :`V`: comment and uncomment code (block comment symbols)

.. container:: note

    If you select a block of code with mixed commented and uncommented lines,
    Vem will comment them all if the first line is uncommented, and uncomment
    the commented ones if the first line is commented. That is, Vem just uses
    the first line of the selection to determine which action to perform.


Deleting text
-------------

The basic actions to delete text are:

    :`I`: delete character to the left of the cursor (ie. *backspace*)

    :`O`: delete character to the right of the cursor (ie. *delete*)

    :`c`: delete line or selection (if one active)

In the same way that `g` allows to perform quick common selections, `f` can be
used to delete text:

    :`f`: delete word under cursor

    :`F`: delete from cursor to the end of line

    :`Ctrl-f`: delete text between enclosing quotes, parenthesis or brackets.


Formatting text
---------------

This section lists actions that can help you to perform common changes to your
text. They are very useful because they greatly reduce the number of times that
is necessary to switch between insert and normal mode.

**Adding whitespace**

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`y`: add a blank line over the cursor
        :`n`: add a blank line below the cursor
        :`(`: add a space to the left of the cursor
        :`)`: add a space to the right of the cursor

    .. container:: tab qwertz

        :`z`: add a blank line over the cursor
        :`n`: add a blank line below the cursor
        :`(`: add a space to the left of the cursor
        :`)`: add a space to the right of the cursor

    .. container:: tab azerty

        :`y`: add a blank line over the cursor
        :`n`: add a blank line below the cursor
        :`(`: add a space to the left of the cursor
        :`)`: add a space to the right of the cursor

**Toggle case**

    :`Ctrl-u`: toggle case (lowercase/uppercase) of the character under the
               cursor or the text in the currently active selection.

**Joining/Splitting lines**

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

**Adding/Substracting units to numbers**

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

**Replacing characters**

    :`r{char}`: replace the character under the cursor with ``char``. If there's
                a visual selection active, all the characters in the selection
                are replaced by ``char``.

Insert mode
-----------

While most commands are executed in normal mode, there are some actions that can
be performed directly from insert mode without having to switch modes.

**Movements**

You can move the cursor with:

    :`Ctrl-h`: (*insert mode*) left

    :`Ctrl-j`: (*insert mode*) down

    :`Ctrl-k`: (*insert mode*) up

    :`Ctrl-l`: (*insert mode*) right

These are most useful for performing small, quick movements without having to
switch to normal mode.

**Cloning characters**

When editing a line, you can insert the character that is above/below the
current position with:

    :`Ctrl-u`: (*insert mode*) insert character above the cursor

    :`Ctrl-e`: (*insert mode*) insert character below the cursor


