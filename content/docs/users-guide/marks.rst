
.. role:: key
.. default-role:: key

Marks
=====

You can define places in your documents where you can quickly jump back to by
using marks.

The (Q)uick mark
----------------

The easiest way of setting and jumping to a mark is using the commands:

    :`Space` `Backespace`: set Quick mark

    :`Backspace`: jump to Quick mark

Once set, you can jump to the Quick mark from anywhere in the same document or
from a different buffer. You can also reset the Quick mark as many times as you
want.

Letter marks
------------

You can set more than one mark at a time. Actually, you can set a mark for each
letter, both lowercase and uppercase. To do so, use:

    :`!` `{letter}`: set a mark using ``{letter}``.

    :`\`` `{letter}`: jump to mark ``{letter}``.

For example, `\`` `a` jumps to a mark that has been set with `!` `a`.

While you can use both lowercase and uppercase letters, keep in mind that they
behave differently:

* **Uppercase letters** are shared across all buffers. That means that
  there can be only one ``A`` mark in a given moment. Uppercase marks,
  therefore, allow you to jump between buffers.

* **Lowercase letters** are unique to each buffer. That is, each buffer has its
  own set of lowercase marks and the ``a`` mark in a buffer can be different
  from the ``a`` mark in another one.

.. admonition:: The Quick mark is just the Q mark

   There's nothing special about the Quick mark other than it can be set and
   jump to with convenient key bindings. Every time that you set the Quick mark
   what you're doing is to set the ``Q`` mark. That means that `Space`
   `Backspace` is effectively the same as `!` `Q`, and `Backspace` is the
   same as `\`` `Q`.

.. container:: browsing-links

    « `Scroll </docs/users-guide/scroll.html>`_

    |

    `Macros </docs/users-guide/macros.html>`_ »

