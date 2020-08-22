
.. role:: key
.. default-role:: key

.. terminal colors
.. role:: w
.. role:: wi
.. role:: g
.. role:: gi
.. role:: y
.. role:: yi

Deleting
========

.. parsed-literal::
    :class: terminal

    \ A fair fi\ :wi:`e`\ ld full of folk
    \         :y:`← →`
    \         :y:`I O`

You can delete characters to the left or the right of the cursor with:

    :`I`: delete left character (Backspace)

    :`O`: delete right character (Delete)

You can also delete a complete line with:

    :`c`: delete line under the cursor or visual selection

Like `e` and `d`, which copy and cut the current line or the active selection,
`c` will delete the current selection if there is one active.

Changing text
-------------

The following actions allow you to delete text and enter insert mode directly
after that. This is very useful when you want to replace some text with
something that you will type instead. The action of deleting and starting insert
mode straight away is usually referred as *changing* text in Vim:

    :`f`: change word under the cursor or the current selection

    :`F`: change from the current position of the cursor to the end of line

    :`Ctrl-f`: change the content of the closest enclosing pair of symbols ``{[(<"'>)]}``

    :`Space` `f`: change a camel-case or underscore delimited word

The following examples highlight the text that will be changed depending on the
action and the position of the cursor:

.. parsed-literal::
    :class: terminal

    :y:`# Text changed with f`

    A fair field :gi:`f`\ :wi:`u`\ :gi:`ll` of folk

    :y:`# Text changed with F`

    A fair field f\ :wi:`u`\ :gi:`ll of folk`

    :y:`# Text changed with Ctrl-f`

    foobar({'\ :gi:`k`\ :wi:`e`\ :gi:`y`\ ': 'val'})

    foobar({\ :gi:`'key':█'val'`})

    foobar(\ :wi:`{`\ :gi:`'key': 'val'}`)

    foobar\ :wi:`(`\ :gi:`{'key': 'val'})`

    :y:`# Text changed with Space f`

    This\ :gi:`L`\ :wi:`o`\ :gi:`ng`\ Identifier

    this\_\ :gi:`l`\ :wi:`o`\ :gi:`ng`\ _identifier

.. container:: browsing-links

    « `Clipboard </docs/users-guide/clipboard.html>`_

    |

    `Commenting </docs/users-guide/commenting.html>`_ »

