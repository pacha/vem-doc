
Indentation
===========

To set up indentation configuration you have to decide its size and if you want
to use spaces or tabs for it. Vem, by default, uses 4 spaces to indent text and
code.

There are four main options to control indentation:

    * ``tabstop`` is the size of a tab character in the file.

    * ``shiftwidth`` is the indentation size that will be used when indenting
      blocks of text and for automatic indentation.

    * ``softtabstop`` is the indentation size when you press the `tab` key.

    * ``expandtabs`` is the option to indicate if you want to use tabs or
      spaces.

You can combine these options in various forms to create very peculiar setups,
but most of the time you may want to set an unique indentation size and choose
between *spaces* and *tabs*:

**To use spaces**::

    set expandtab
    set softtabstop=<size>
    set shiftwidth=<size>

**To use tabs**::

    set noexpandtab
    set tabstop=<size>
    set softtabstop=<size>
    set shiftwidth=<size>

Replace ``<size>`` by the amount of characters you want to use
to indent.

Note that setting this options don't change the preexisting indentation format
of a file. If you want to change how a file is indented (from tabs to spaces or
the other way around), check the ``:retab`` command.

Sometimes you may want to set the type/size of indentation according to the file
type that you are editing. For example, you could need to use tabs of size 8 in
C source code files but 2 spaces in HTML files. To do something like this, check
`Configuration per filetype
</config/essentials/configuration-per-filetype.html>`_.

