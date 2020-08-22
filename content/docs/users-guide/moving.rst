
.. role:: key
.. default-role:: key

.. terminal colors
.. role:: w
.. role:: wi
.. role:: g
.. role:: gi
.. role:: y
.. role:: yi

Moving
======

Vem uses Vim's traditional movement keys:

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

If you're new to Vem/Vim, the position of these keys to move the cursor may feel
a bit odd. Many newcomers tend to fallback to the use of the arrow keys because,
in general, it takes a bit of time to get used to these ones. However, using
these keys has the advantage of keeping your hands in the standard configuration
for typing, instead of having to travel back and forth from the arrow keys. And
while they are convenient in Vim, they are kind of essential in Vem because many
other movements depend on them.

For example, you can move the cursor in larger jumps using ``hjkl`` with the
`Shift` modifier key:

    :`H`: previous word

    :`J`: next paragraph (next blank line)

    :`K`: previous paragraph (previous blank line)

    :`L`: next word

.. parsed-literal::
    :class: terminal

    \  :y:`← K`
    \ Some text
    \ A fair field full :wi:`o`\ f folk
    \ More text    :y:`↑       ↑`
    \  :y:`← J`         :y:`H       L`

And you can also use them together with the ``Ctrl`` modifier key to start insert
mode in different places relative to the current line:

    :`Ctrl-h`: start insert mode at the beginning of the current line

    :`Ctrl-j`: start insert mode by opening a blank line below the current one

    :`Ctrl-k`: start insert mode by opening a blank line above the current one

    :`Ctrl-l`: start insert mode at the end of the current line

.. admonition:: Movements in insert mode

   Generally, you activate normal mode to perform any kind of cursor movement or
   search. However, there are times in which you're in insert mode and just want
   to move the cursor a couple of characters left or right, or just place it on
   the line below. For those cases, you can move the cursor and remain in insert
   mode using:

   .. class:: key-summary

        :`Ctrl-h`: (*insert mode*) left

        :`Ctrl-j`: (*insert mode*) down

        :`Ctrl-k`: (*insert mode*) up

        :`Ctrl-l`: (*insert mode*) right

Other horizontal movements
--------------------------

To move between the line boundaries use:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`,`: move to beginning of current line

        :`.`: move to end of current line

    .. container:: tab qwertz

        :`,`: move to beginning of current line

        :`.`: move to end of current line

    .. container:: tab azerty

        :`,`: move to beginning of current line

        :`;`: move to end of current line

It is important to note that Vem considers the beginning of the line as the
first non-blank character on it. So `Ctrl-h` and `,` will take you to the
position of the first character after the indentation of the current line.
To go to the actual first column of the line, use `0`:

    :`0`: move to first column of current line

.. container:: tabs key-summary

    .. container:: tab qwerty 

        .. parsed-literal::
            :class: terminal

            \     content_type = :wi:`h`\ eaders.get('content-type')
            :y:`↑   ↑                                        ↑`
            :y:`0   ,                                        .`

    .. container:: tab qwertz

        .. parsed-literal::
            :class: terminal

            ██\ :wi:`1`\ █\     content_type = :wi:`h`\ eaders.get('content-type')
            :g:`~`   :y:`↑   ↑                                        ↑`
            :g:`~`   :y:`0   ,                                        .`

    .. container:: tab azerty

        .. parsed-literal::
            :class: terminal

            ██\ :wi:`1`\ █\     content_type = :wi:`h`\ eaders.get('content-type')
            :g:`~`   :y:`↑   ↑                                        ↑`
            :g:`~`   :y:`0   ,                                        ;`


.. Admonition:: Aliases

    You can also use:

    * `^` to go to the beginning of the line

    * `$` to go to the end of the line

Also, if you want to jump to the end of the next word, use:

    :`;`: Jump to end of next word

Other vertical movements
------------------------

To move the cursor one page up/down use:

    :`U`: page up

    :`M`: page down

And to move the cursor to the beginning and end of the document use:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`a`: first line of the document

        :`z`: last line of the document

    .. container:: tab qwertz

        :`a`: first line of the document

        :`y`: last line of the document

    .. container:: tab azerty

        :`q`: first line of the document

        :`w`: last line of the document

You can also jump to a specific line using the command line and just typing its
line number. For example, to jump to line 120, just use::

    :120

Jumps within the window
-----------------------

To perform jumps relative to the current viewport use the `"` key:

.. container:: tabs layout key-summary

    .. container:: tab qwerty

        :`"u`: jump to top line of the current window
        :`".`: jump to middle line of the current window
        :`"m`: jump to bottom line of the current window

    .. container:: tab qwertz

        :`"u`: jump to top line of the current window
        :`".`: jump to middle line of the current window
        :`"m`: jump to bottom line of the current window

    .. container:: tab azerty

        :`"u`: jump to top line of the current window
        :`";`: jump to middle line of the current window
        :`"m`: jump to bottom line of the current window

Jumping back
------------

Finally, you can make the cursor go back to the location it was before a jump
with `R`:

    :`R`: jump back. Pressing it multiple times takes the cursor through the
          jump history, making it visit all the locations in the current file
          you have jumped to, sequentially.

For example, you could jump to the beginning of a source code file, add some
import/include/require statement and go back to the initial location by pressing
`R` to continue editing where you were previously.

The opposite action to `R` is:

    :`Ctrl-]`: jump forward in jump history.

Jumps within Identifiers
------------------------

In most programming languages, identifiers are written using either CamelCase or
underescore_separated_words. You can move across the different words of these
identifiers with:

    :`<`: Jump to previous camel case or underscore separated word
    :`>`: Jump to next camel case or underscore separated word

Jumping between Ends
--------------------

There are some key commands that allow you to jump back and forth from two
defined ends:

    :`%`: Jump to matching parenthesis, bracket or HTML/XML tag

    :`*`: Jump between ends of current selection or last selected text

    :`+`: Jump between ends of last pasted or inserted text

.. container:: browsing-links

    « `Buffers and Files </docs/users-guide/buffers.html>`_

    |

    `Undoing </docs/users-guide/undoing.html>`_ »

