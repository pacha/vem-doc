
.. role:: key
.. default-role:: key


Vem configuration
=================

Vem configuration directory is typically located at ``.config/vem`` under your
user's home folder. This directory is created by Vem at startup if it is not
already present. Its structure is::

    colors/  -- directory for color schemes
    spell/   -- directory for spell checking files in different languages
    pack/    -- directory for plugins
    vemrc    -- main configuration file

The subdirectories allow you to add new color schemes, spell checking files and
plugins. Check the next sections to get more information about how to add those
files.

vemrc
-----

You can add a ``vemrc`` file to the configuration directory. ``vemrc`` is the
main settings file and you can use it to configure the behavior and appearance
of the editor.

``vemrc`` is a plain Vim configuration file. There's nothing Vem specific about
it. Any documentation and resources that you may find online about setting up a
``vimrc`` file for Vim apply to ``vemrc`` as well.

.. container:: note

    The ``vemrc`` file is not created automatically. Create it and add the
    required options if you want to customize your editor.

Vim provides an extraordinarily amount of configuration options. You can
configure almost every aspect of the editor, including both its visual
appearance and behavior. For example, if you add this line to your ``vemrc``
file::

    set cursorline

the line under the cursor to be always highlighted —which will make the cursor
easier to spot.

Any option that you can include in the configuration file can also be set in the
editor's command line, which allows you to see the effect immediately. However,
the effect of the changes performed in the command line will be lost once you
quit Vem. To make the changes permanent it is necessary to include them in the
``vemrc`` file.

.. container:: note

    To make changes to ``vemrc`` effective you need to either restart the editor
    or to reload the configuration with::

        :source ~/.config/vem/vemrc

While there are too many options in Vim to be covered in this page, the
following sections cover a selection of ones that can be important to help you
to set up your environment.

In any case, you can always get information about all available options by
executing::

    :help options

And, to get additional information on the different ways Vim can be configured,
you can check the Vim user manual with::

    :help usr_05.txt

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

