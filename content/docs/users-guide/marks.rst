
.. role:: key
.. default-role:: key

Marks
=====

You can define places in your documents where you can quickly jump back to by
using marks.

To set marks and make the cursor jump to them, use:

    :`!` `{letter}`: set a mark using ``{letter}``.

    :`\`` `{letter}`: jump to mark ``{letter}``.

For example, `\`` `a` jumps to a mark that has been set with `!` `a`.

You can use both uppercase and lowercase letters for marks, however, keep in
mind that they work differently:

* **Lowercase letters** set marks to jump within a buffer. For example, you can
  have an ``a`` mark in two different buffers.

* **Uppercase letters** set marks to that you can use to jump between buffers.
  Therefore there can only be a single mark ``A`` across all buffers.

There are two shortcut key mappings to use the ``C`` mark:

    :`C`: set the ``C`` mark (same as `!` `C`)

    :`Backspace`: jump to the ``C`` mark (same as `\`` `C`)

There's nothing special about the ``C`` mark other than it is useful to set
temporary locations to quickly jump back to since it is very easy to set.

