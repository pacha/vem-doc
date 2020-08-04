
.. role:: key
.. default-role:: key

vemrc
=====

Vem's main configuration file is named ``vemrc`` and it is located at
``~/.config/vem/vemrc``. This file is not created automatically, but you can add
it if you need to modify any behavior or visual aspect of the editor.

.. Note:: The actual location of the ``~/.config`` directory depends on the
   ``$XDG_CONFIG_HOME`` environment variable. ``~/.config`` is the default value
   and the most common in practice.

For example, if you add this line to your ``vemrc`` file::

    set cursorline

the line under the cursor to be always highlighted.

.. container:: note

    If you modify the ``vemrc`` file, changes will only take effect after you
    restart the editor or reload the configuration with::

        :source ~/.config/vem/vemrc

In terms of syntax, ``vemrc`` is a plain Vim configuration file. There's nothing
Vem specific about it. Any documentation and resources that you may find online
about setting up a ``vimrc`` file for Vim apply to ``vemrc`` as well.

Vim provides an extraordinarily amount of configuration options. You can
configure almost every aspect of the editor, including both its visual
appearance and behavior. The `Configuration </config/>`__ section of Vem's documentation
offers information about some common ones, but you can check ``:help options``
for a complete list.

Setting options on-the-fly
--------------------------

Any option that you can include in the configuration file can also be set in the
editor's command line, which allows you to see the effect immediately. This is
very useful to test different options and see how they work. However, the
changes performed in the command line will be lost once you quit Vem. To make
the changes permanent it is necessary to include them in the ``vemrc`` file.

Vem configuration directory
---------------------------

In the same way that the ``vemrc`` file is a standard Vim configuration file,
Vem configuration directory (``~/.config/vem/``) is also a standard Vim runtime
one. That means that you can use it to add new color schemes, syntax
highlighting files for new programming languages or spell checking files for
different natural languages as you would do in Vim.

Some common directories that you can add to it are::

    colors/  -- directory for color schemes
    pack/    -- directory for plugins
    spell/   -- directory for spell checking files
    syntax/  -- directory for new file format syntax files

To learn more about how to add these resources, follow the following links:

* `Color schemes </config/visuals/color-schemes.html>`__
* `Plugins </plugins/installation.html>`__
* `Spell checking files </docs/users-guide/spell-checking.html>`__
* `Syntax files </config/language-features/syntax.html>`__

.. admonition:: Vimscript

    Vim configuration files are much more than just a place to set options.
    They are, effectively, scripts that are executed by Vim's internal interpreter
    and that are written in Vim's own programming language, known as Vimscript.
    Vimscript is a full featured language, which means that you can use loops,
    conditional statements, data structures and other common programming language
    constructs in your configuration. While it is most extensively used to create
    plugins, more complex user configurations can benefit from using it.

    To learn more about Vimscript, you can check::

        :help eval.txt

