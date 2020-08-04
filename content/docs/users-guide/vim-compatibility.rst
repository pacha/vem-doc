
.. role:: key
.. default-role:: key

Vim compatibility
=================

Vem differs from Vim in three main aspects:

* **Key commands**: Vem key command set is smaller, simpler to use and
  distributed spatially across the keyboard. Vim command set is much bigger and
  many commands have a syntax that allows you to compose more complex ones by
  adding counts, movements or text objects. Vem commands are all about
  simplicity while Vim ones are about expressiveness.

* **Default configuration**: Vem default configuration tries to make the editor
  more intuitive without being too opinionated. Things like the clipboard,
  cursor movements and the user interface work much more closely to what you
  would expect in modern editors than in Vim (which mostly values backward
  compatibility).

* **Additional plugins**: to support the previous two points Vem includes extra
  plugins. Vem doesn't try to add popular plugins to make the editor more
  *complete* but only to add those that are considered essential for Vem's own
  functionality. In Vem, like in Vim, you have the freedom to shape the editor
  to your liking by adding the plugins that fit you. Check the `Plugins
  </plugins/index.html>`__ section to know more.


Square bracket, z and g commands
--------------------------------

Square brackets (`[` `]`), `g` and `z` are keys that serve as prefix to many
commands in Vim. While these commands are not part of Vem's command set (except
a small subset of `z` ones), Vem doesn't prevent you from accessing them.

The square bracket commands are associated with more complex movements and
jumps. Some of them already provided in Vem. You can use them as you would do in
Vim. To know more about these commands, check::

    :help [

The `g` and `z` commands are pretty varied and can't be really be put in a
single category, although most `z` commands are associated to operations with
`folds </docs/users-guide/folds.html>`__. You can access these commands, but
they are remapped in Vem:

    :`b`: same as Vim's `z`

    :`B`: same as Vim's `g`

To know more about them, check::

    :help g
    :help z

As you can see, the commands listed in the `folds
</docs/users-guide/folds.html>`__ section are just a subset of the `z` ones
using its `b` mapping. If you want to use the full range of actions for folds,
they are available to you.


.. admonition:: Caveat

   Note that, while you can access all the commands associated with `[`, `]`,
   `g` and `z`, you can't provide *counts* to them as you would do in Vim.

