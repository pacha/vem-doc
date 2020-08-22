
.. role:: key
.. default-role:: key

.. terminal colors
.. role:: w
.. role:: wi
.. role:: g
.. role:: gi
.. role:: y
.. role:: yi

Surrounding Pairs
=================

Deleting and Selecting Content between Pairs
--------------------------------------------

As shown in `Deleting </docs/users-guide/deleting.html>`__ and `Selecting
</docs/users-guide/selecting.html>`__ you can use `Ctrl-f` and `Ctrl-g` to both
delete and select the contents between a pair of surrounding characters (``{}``,
``[]``, ``()``, ``<>``, ``""``, ``''``) or between a pair of HTML/XML tags:

    :`Ctrl-f`: change the content between the closest enclosing pair of
        symbols/tags

    :`Ctrl-g`: select the content between enclosing pair of symbols/tags
        (repeated presses select progressively outer pairs)

Adding Surrounding Pairs
------------------------

You can also enclose a piece of selected text between a surrounding pair. To do
so, use:

    :`s` `<char>`: (in visual mode) surround current text selection with a
        pair of enclosing symbols defined by ``<char>``, which can be one of
        ``{[("'>)]}``, or also ``<`` and ``t`` for HTML/XML tags.

For example, `s` `"` surrounds the current selection with double quotes and
`s` `)` surrounds it with parenthesis.

Note that to surround text between angle brackets you need to use `s` `>`
(as `s` `<` will enclose the text between HTML/XML tags):

.. parsed-literal::
    :class: terminal

    :y:`# Selected text`

    A fair field :gi:`ful`\ :wi:`l` of folk

    :y:`# Brackets added with: s >`

    A fair field <full> of folk

Adding extra space
""""""""""""""""""

For brackets and parenthesis, if you use the opening character (ie. ``{``,
``[``, ``(``), a blank space is added between the surrounding symbols and the
selected text. If you use the closing character, no space is added:

.. parsed-literal::
    :class: terminal

    :y:`# Selected text`

    A fair field :gi:`ful`\ :wi:`l` of folk

    :y:`# Parenthesis added with: s (`

    A fair field ( full ) of folk

    :y:`# Parenthesis added with: s )`

    A fair field (full) of folk

The extra space is not added for any of the rest of the symbols or when using
tags.

Position of surrounding pairs according to the type of selection
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

If you add a surrounding pair to a **characterwise selection**, the symbols will be
added inline:

.. parsed-literal::
    :class: terminal

    :y:`# Selected text (characterwise)`

    :gi:`This lin`\ :wi:`e`

    :y:`# After s }`

    {This line}

However, if the selection is **linewise**, the symbols will be placed in their own
lines (and the content indented):

.. parsed-literal::
    :class: terminal

    :y:`# Selected text (linewise)`

    :gi:`This lin`\ :wi:`e`

    :y:`# After s }`

    {
        This line
    }

Finally, if the selection is **blockwise**, each line of the block is surrounded:

.. parsed-literal::
    :class: terminal

    :y:`# Selected text (blockwise)`

    aaa :gi:`bbb` ccc
    aaa :gi:`bbb` ccc
    aaa :gi:`bb`\ :wi:`b` ccc

    :y:`# After s }`

    aaa {bbb} ccc
    aaa {bbb} ccc
    aaa {bbb} ccc

Adding HTML/XML tags
""""""""""""""""""""

To surround the selected text with an HTML/XML tag use either `s` `<` or
`s` `t`. You'll be prompted in the command line for the complete tag and, as
soon as you close the tag with ``>`` or press ``Enter``, the selected text will
be enclosed:

.. parsed-literal::
    :class: terminal

    :y:`# Selected text`

    A fair field :gi:`ful`\ :wi:`l` of folk

    :y:`# Tag added with: s <span class="foo">`

    A fair field <span class="foo">full</span> of folk

As you can see, you can add attributes inside the tag if you need to.

As an special case, if you press `s` `Ctrl-t` the operation will work in the
same way but tags will be placed each one in their own lines.


Deleting Surrounding Pairs
--------------------------

To delete a pair of surrounding symbols, in normal mode, use:

    :`Space` `d` `<char>`: delete the surrounding pair defined
        by ``<char>``, which can be one of ``{[(<"'>)]}`` or ``t`` to delete a
        HTML/XML pair of tags.

If ``<char>`` is one of ``{``, ``[``, ``(``, any white space between the text
and the symbols is also removed when the surrounding pair is deleted. When using
``}``, ``]``, ``)`` or any other symbol, the content within the pair is left
untouched.

Changing Surrounding Pairs
--------------------------

To change a pair of surrounding symbols (eg. ``" "``) by another (eg. ``' '``),
use:

    :`Space` `c` `<old>` `<new>`: change the surrounding pair defined
        by ``<old>`` by a new surrounding pair defined by ``<new>``. Both
        ``<old>`` and ``<new>`` can be one of ``{[(<"'>)]}`` or ``t`` for
        HTML/XML pair of tags.

If ``<new>`` is one of ``{``, ``[``, ``(``, an extra blank space is added
between the text and the surrounding symbols.

In the case of tags, when you change a tag by another, the attributes are
preserved if you press `Enter` to submit your new tag, and they are removed if
you close your new tag with `>`:

.. parsed-literal::
    :class: terminal

    :y:`# Selected text`

    A fair field <span class="foo">f\ :wi:`u`\ ll</span> of folk

    :y:`# Tag changed with: Space t <div Enter`

    A fair field <div class="foo">full</div> of folk

    :y:`# Tag changed with: Space t <div>`

    A fair field <div>full</div> of folk

.. container:: browsing-links

    « `Formatting </docs/users-guide/formatting.html>`_

    |

    `Insert Mode </docs/users-guide/insert-mode.html>`_ »

