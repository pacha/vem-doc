
.. role:: key
.. default-role:: key

Selecting
=========

This section explains how to select text with Vem in order to copy, cut, delete
or perform any other action over it.

.. image:: /static/img/screenshots/visual-mode.png
    :class: screenshot
    :target: /static/img/screenshots/visual-mode.png

Once you select text, the editor enters **visual mode**, the selected text is
highlighted and the new mode name is shown on the statusline. In this mode,
many keyboard commands are the same as in normal mode —for example, all
movements— but some other change so they operate over the entire selection.

Selection types
---------------

There are three kinds of selections that you can define:

    * Characterwise selection

    * Linewise selection

    * Blockwise selection

Characterwise selection
"""""""""""""""""""""""

This is the most common type of selection among other editors. It consists
in a selection that goes between two arbitrary characters in the text:

.. parsed-literal::
    :class: terminal

    Programs **must be written for people to read,
    and only incidentally for machine**\ *s* to execute.

To create a selection of this type, press `G` and perform any movement to the
left or the right (it can be any command as long as it is sideways):

    :`G` ``<left/right movement>``: create characterwise selection

Only the first movement is important to determine that the selection is
characterwise. After that, you can move the cursor up or down and the selection
will continue to be characterwise.


Linewise selection
""""""""""""""""""

In a linewise selection, entire lines are always selected independently of
the position of the cursor:

.. parsed-literal::
    :class: terminal

    **Programs must be written for people to read,**
    **and only incid**\ *e*\ **ntally for machines to execute.**

To create a selection of this kind, press `G` and then perform any movement up
or down with the cursor:

    :`G` ``<up/down movement>``: create linewise selection

This kind of selection is very convenient when working with code since it allows
you to operate over entire blocks very quickly.


Blockwise selection
"""""""""""""""""""

The final type of selection is blockwise. With this one, you can define an
arbitrary rectangle in the screen that you can copy/cut, delete or modify:

.. parsed-literal::
    :class: terminal

    Programs **must be written** for people to read,
    and only **incidentally f**\ *o*\ r machines to execute.

To start a blockwise selection press:

    :`GG`: create blockwise selection

And then move the cursor to place the opposite corner of the defined rectangle.

There's a peculiarity about blockwise selections: not only can you operate with
the text under the selection, but also you can append text to either side of
the rectangle.

To do so, use:

    :`Ctrl-h` ``text`` `Ctrl-o`: append text to the left of the selection
    :`Ctrl-l` ``text`` `Ctrl-o`: append text to the right of the selection

For example, if you have:

.. parsed-literal::
    :class: terminal

    **o**\ ne
    **t**\ wo
    **t**\ hree
    *f*\ our

And you press, `Ctrl-h`\ -> `Ctrl-o`, the result is:

.. parsed-literal::
    :class: terminal

    -> one
    -> two
    -> three
    -> four


Deselecting and Reselecting
---------------------------

Once you have a selection defined, you can discard it with switching back to
normal mode with `Ctrl-o` or with:

    :`Space`: (in visual mode) remove current text selection

And if there's no selection defined, you can bring back the last active
selection with:

    :`Space` `Space`: (in normal mode) reselect latest selected text


Quick selections
----------------

While you can select any arbitrary area just using movement commands, in
practice it is much more common to use actions that allow to perform quick
selections over text objects.

For example, if the cursor is over the ``s`` of ``string_network``:

.. parsed-literal::
    :class: terminal

    mask = int(*s*\ tring_network.split('/')[1])

Then, you can perform the following actions:

    :`g`: select word under cursor

.. parsed-literal::
    :class: terminal

    mask = int(**string_networ**\ *k*\ .split('/')[1])

..

    :`g` `g`: select text between white-space characters

.. parsed-literal::
    :class: terminal

    mask = **int(string_network.split('/')[1]**\ *)*

..

    :`Space` `g`: select camel-case or underscore delimited word

.. parsed-literal::
    :class: terminal

    mask = int(**strin**\ *g*\ _network.split('/')[1])

..

    :`Ctrl-g`: select text between the closest pair of enclosing characters
        (one of ``""``, ``''``, ``()``, ``[]``, ``{}`` or ``<>``)

.. parsed-literal::
    :class: terminal

    mask = int(**string_network.split('/')[1**\ *]*)

Selecting between a pair of surrounding characters is extremely useful when
coding.

If you press `Ctrl-g` repeatedly, you get successively larger selections (first
by including the enclosing characters and then by considering any outer
enclosing scope):

.. parsed-literal::
    :class: terminal

    foobar({'*k*\ ey': 'val'})

    foobar({'**ke**\ *y*\ ': 'val'})

    foobar({**'key**\ *'*\ : 'val'})

    foobar({**'key': 'val**\ *'*\ })

    foobar(**{'key': 'val'**\ *}*\ )

    foobar\ **({'key': 'val'}**\ *)*

Other quick selections are:

    :`Space` `a`: select all

    :`Space` `p`: select current paragraph (text between two blank lines)

    :`Space` `P`: select last pasted or inserted text

    :`Space` `G`: select text in current line (not including preceding or
        trailing white-space)

.. admonition:: Other text objects

    There are longer key sequences that allow you to select even more
    text objects. Each sequence consists of three key presses:

        * `G`: to activate visual mode

        * `i` or `o`: to specify whether you want to make an *inner* or *outer*
          selection. A inner selection contains the text object itself, an outer
          selection includes trailing white-space in case of words,
          sentences and paragraphs, and the enclosing characters when selecting
          between surrounding ``()[]{}<>"'\``` or HTML/XML tags.

        * A letter: which indicates the text object to select.

    The letter can be:

        :`w`: word
        :`p`: paragraph
        :`s`: sentence
        :`n`: sequence of non white-space characters
        :`l`: line (not including preceding or trailing white-space)
        :`'`: text between single quotes
        :`"`: text between double quotes
        :`\``: text between backstick quotes
        :`(` or `)`: text between parenthesis
        :`{` or `}`: text between braces
        :`[` or `]`: text between square brackets
        :`<` or `>`: text between angle brackets
        :`t`: text between HTML/XML tag

    For example:

        :`G` `i` `"`: selects text between the closest enclosing double quotes

        :`G` `o` `s`: selects the sentence under the cursor including trailing
            whitespace.

        :`G` `o` `t`: selects between two HTML/XML tags including the tags
            themselves.

.. container:: browsing-links

    « `Undoing </docs/users-guide/undoing.html>`_

    |

    `Clipboard </docs/users-guide/clipboard.html>`_ »

