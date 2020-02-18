
.. role:: key
.. default-role:: key

.. terminal colors
.. role:: w
.. role:: wi
.. role:: g
.. role:: gi
.. role:: y
.. role:: yi

Movements
=========

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

The advantage of using these over the arrow keys is that they allow you to keep
your hands on the home row of the keyboard and prevent you from having to move
your hand back and forth to move the cursor. If you haven't used Vim/Vem before
it may feel difficult to get used to them at first, however, it usually just
takes a bit of time and then it is difficult to go back to use the arrow keys.
Also, since all keys are placed spatially across the keyboard in Vem, many other
action positions are related to these movement keys.

For instance, the uppercase version of these keys allow you to perform larger
jumps with the cursor:

    :`H`: previous word

    :`J`: next paragraph (next blank line)

    :`K`: previous paragraph (previous blank line)

    :`L`: next word

.. parsed-literal::
    :class: terminal

    ██\ :wi:`1`\ █\   :y:`← K`
    ██\ :wi:`2`\ █\  A fair field full :wi:`o`\ f folk
    ██\ :wi:`3`\ █\   :y:`← J         ↑       ↑`
    ██\ :wi:`4`\ █\               :y:`H       L`
    :g:`~`

You can also use them together with the ``Ctrl`` modifier key to start insert
mode in different places relative to the current line:

    :`Ctrl-h`: start insert mode at the beginning of the current line

    :`Ctrl-j`: start insert mode by opening a blank line above the current one

    :`Ctrl-k`: start insert mode by opening a blank line below the current one

    :`Ctrl-l`: start insert mode at the end of the current line

All these 4 key combinations give you a quick way of to switch to insert mode in
different locations. However, you can also perform similar actions without
leaving normal mode:

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

It is important to note that Vem considers the beginning of the line as the
first non-blank character on it. So `Ctrl-h` and `,` will take you to the
position of the first character after the indentation of the current line.
To go to the actual first column of the line, use `0`:

    :`0`: move to first column of current line

.. container:: tabs key-summary

    .. container:: tab qwerty 

        .. parsed-literal::
            :class: terminal

            ██\ :wi:`1`\ █\     content_type = :wi:`h`\ eaders.get('content-type')
            :g:`~`   :y:`↑   ↑                                        ↑`
            :g:`~`   :y:`0   ,                                        .`

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

Finally, you can make the cursor go back to the location it was before a jump
with `R`:

    :`R`: jump back. Pressing it multiple times takes the cursor through the
          jump history, making it visit all the locations in the current file
          you have jumped to sequentially.

For example, you could jump to the beginning of a source code file, add some
import/include/require statement and go back to the initial location by pressing
`R` to continue editing where you were previously.

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

