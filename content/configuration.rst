---

title: "Vem :: Configuration"
layout: two-cols
index_node: configuration.rst

---

.. role:: key
.. default-role:: key


Configuration
=============

vemrc file
----------

Vem configuration directory is typically located at ``.config/vem`` under your
user's home folder. This directory is created by Vem at startup if it is not
already present. Its structure is::

    colors/  -- directory for color schemes
    spell/   -- directory for spell checking files in different languages
    pack/    -- directory for plugins
    vemrc    -- main configuration file

The subdirectories allow you to add new color schemes, spell checking files and
plugins. See the sections below to get more information about how to add those
files. ``vemrc`` is the main settings file and you can use it to configure the
behavior and appearance of the editor.

The ``vemrc`` file is a plain Vim configuration file. There's nothing Vem
specific about it. Any documentation and resources that you may find online
about setting up a ``vimrc`` file for Vim apply to ``vemrc`` as well.

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


Keyboard layout
---------------

If you use a keyboard with a layout other than **QWERTY**, like for example
**QWERTZ** (common in German speaking countries) or **AZERTY** (common in French
speaking countries), it is important that you specify it in your ``vemrc`` file.
This will make keyboard actions to keep the same spatial distribution across the
keyboard even if letters change positions in your layout with respect to the
others.

To set your keyboard layout, add a line like this to your configuration::

    let g:vem_layout = '<layout>'

where `<layout>` can be:

    * **qwerty** (default)

    * **qwertz**

    * **azerty**

Vem's documentation includes layout information for those actions that are
assigned to different keys across them.

.. container:: note

    Setting the layout changes what actions are assigned to some letters,
    however, this doesn't apply to symbols. A given symbol will always perform
    the same action across layouts irrespective of its position.

.. container:: note

    Vem doesn't support **Dvorak** or **Colemak** keyboard layouts currently due
    to their big differences from the layouts mentioned in this section. Their
    key distribution makes many action mappings not very intuitive and in many
    cases directly unfeasible.


Color schemes
-------------

You can use any Vim color scheme in Vem. To install a new color scheme follow
two steps:

**Copy the color scheme to the Vem configuration directory:**

    * If the color scheme is a single ``<color-scheme>.vim`` file, then you need to
      copy it to ``~/.config/vem/colors/``.

    * If the color scheme is distributed as a plugin (for example, if it is a
      repository containing a ``colors/`` directory inside), then you need to
      install it as any other `plugin </plugins/>`_ by copying it to
      ``~/.config/vem/pack/plugins/start/``.

**Activate it in your vemrc file:**

After, the color scheme is added to your configuration, include the following
line to your ``vemrc`` file::

    colorscheme <color-scheme>

where ``<color-scheme>`` is the name of the file of the color scheme without the
``.vim`` extension.


Cursor shape
------------

A highly recommended configuration change is to set the cursor to change its
shape depending on the currently active mode (Normal/Insert). Vem displays the
mode at the beginning of the status line, but changing the shape of the cursor
provides a more intuitive feedback.

The changing cursor shape is the default in ``gvem``. However, it is not in
``vem`` because it is a feature closely linked to which particular terminal
emulator you're using.

In many xtermk-compatible terminals (xterm, urxvt, iTerm2, xfce4-terminal,
alacritty, kytty, terminator...) you can set::

    " normal mode
    let &t_EI = "\e[1 q"

    " insert mode
    let &t_SI = "\e[5 q"

in your ``vemrc`` file to enable this feature. The numbers correspond to the
shape that you want to use in each mode:

    :``0``: Blinking block
    :``1``: Blinking block (default)
    :``2``: Steady block
    :``3``: Blinking underline
    :``4``: Steady underline
    :``5``: Blinking bar (xterm)
    :``6``: Steady bar (xterm)

However, you can take a look here for your terminal if this doesn't work for you:

    `Vim Wiki: Change cursor shape <https://vim.fandom.com/wiki/Change_cursor_shape_in_different_modes>`_

.. admonition:: Alternative

    If changing the cursor shape doesn't work for your terminal. There's an
    alternative that consists in highlighting the current screen line when insert
    mode is active and deactivating it when you go back to normal mode::

        autocmd InsertEnter * set cursorline
        autocmd InsertLeave * set nocursorline

Indentation
-----------

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
the `Filetype configuration`_ section below.


Non-visible characters
----------------------

Sometimes it is very useful to be able to see white space characters in source
code files. For example, it is a clean practice to avoid having trailing spaces
after code lines, and even more important to keep your indentation
consistent: using all tabs or all spaces across the whole file.

To spot those problems you can display these characters in the editor by adding
the following lines to your ``vemrc`` file::

    set listchars=tab:→\ ,trail:·
    set list

With ``listchars``, you can specify which characters to use to display both tabs
and trailing spaces. For spaces you can provide only one, in this example ``·``.
For tabs, you can provide two. If your tab is, for example, 4 characters wide in
size, the first one (``→``) will be placed at the beginning and the second one
(an empty space escaped with backslash in this case) will be repeated for the
remaining three characters.

The ``list`` option enables the display of white space characters, and
``nolist`` (which is the default) hides them.

There are more display options and more cases that can be shown apart from these
two. Check the ``listchars`` option in the help documentation to get more
information::

    :help 'listchars'


Filetype configuration
----------------------

When you set options in ``vemrc``, those changes generally affect every
document that you open with Vem. However, there may be cases in which you may
want to have different settings for different types of archives. For example,
when you're editing text in Markdown files, you may want to have the spell
checker active and to make the editor breaking your lines automatically when
they reach column 80 (or some other width), but not to do all this for the rest
of files.

To add configuration for a particular file type, add a file with that
configuration to::

    ~/.conf/vem/after/ftplugin/<filetype>.vim

where ``<filetype>`` is the type or file you want it to apply to. In the case of
Markdown, the name of the file would be ``markdown.vim``. Once you add that
file, that configuration will only be loaded for files of that type.

Note that the path contains ``after/``. In most distributions, Vim already
provides a custom configuration for each file type. The ``after/`` directory
instructs Vim to load your configuration after any other global file type
configuration happens so you can override it with your changes. Also note that
the path might not exist and that you may need to create it before adding your
files.

In the Markdown example, we could add the following content to that file::

    setlocal textwidth=80
    setlocal spell

It is important to use ``setlocal`` instead of ``set`` in file type
configuration files so the changes only apply to the file that is being opened
and not to all other files open independently of their type.

Each file type has a name. To know which exact name you have to use in each
case, open a file of the type you are interested in and execute::

    :set ft?

This will output the name in the command line of the editor.

To get a full list with all the file types that are supported by the editor,
type the following command followed by a space and press ``Ctrl-d``. That
triggers autocompletion and will display all the file types registered in the
system::

    :setfiletype ^d

.. admonition:: Indentation

    One very common use case for custom options per file type is to change the
    indentation size/type. For example, you could have different configurations
    such as 4 spaces for Python files, 2 spaces for CSS files or 8 character
    wide tabs for C++ files.

    In the case of C++, the file to add would be::

        " ~/.conf/vem/after/ftplugin/cpp.vim

        setlocal noexpandtab
        setlocal tabstop=8
        setlocal softtabstop=8
        setlocal shiftwidth=8

    And similar ones for the other file types (see `Indentation`_ for an
    explanation on these options).

    **Automatic indentation per file type**

    Apart from setting specific indent sizes for different file types, you can
    also enable automatic file type indenting. With it, every time you press
    ``Enter``, the newly created line will be indented according to the syntax
    of the programming language. That is, it will use the keywords and the
    symbols of the programming language to determine what should be the most
    likely indentation level for each new line. For example, in languages that
    use curly brackets to delimit blocks (``{``, ``{``), pressing ``Enter``
    after an opening one, will increase the indent of the next line by one
    level.

    Since automatic indenting per file type can be too *smart* and introduce
    indentation when you don't expect or want it, it is disabled by default in
    Vem. To enable it, add this to your ``vemrc`` file::

        filetype indent on

    If it is enabled by some file you're sourcing in ``vemrc`` but you prefer to
    have it disabled, add::

        filetype indent off

    To the end of the file.

Default encoding
----------------

Vem will use the ``utf-8`` encoding both internally and as the encoding of new
files. Unless you *know* that you have to work with files of different encodings
from this one, this is probably the behavior that you want.

However, if for any reason you need to work with other encodings, then you may
want to take the following points into account:

    * Vem will try to detect the encoding of a file upon opening it. And will
      use that encoding for editing and saving it. So, if you open a ``latin1``
      file, it will be saved back as ``latin1`` too. The detected encoding is
      displayed in the right section of the status line.

    * The detection mechanism tries to guess the encoding, and, in some
      occasions, it can fail. If you want to load a file and its encoding is
      being incorrectly detected, you can use the following command to use the
      correct one (eg. ``latin1``)::

        :edit ++enc=lating1 my-file.txt

    * Also, if you have a file loaded in one encoding and want to convert it to
      another one, use::

        :set fileencoding=<new encoding>

      The file will be converted and will be written to disk with the new
      encoding next time you save.

    * Finally, if you want to *always* work with a different encoding (let's say
      ``latin1`` by default) and don't want to detect the encoding when files
      are opened, then you can add these lines to your ``vemrc`` file::

        set encoding=latin1
        set fileencodings=latin1

      **Warning note**: set this options if you know what you're doing and if
      you know that you won't be ever editing files in any other encoding. There
      may be loss of information with these settings!

For more information, check the following help topics::

    :help 'encoding'
    :help 'fileencoding'
    :help 'fileencodings'


Default line endings
--------------------

Line endings are generally marked in text files with one or two characters,
named ``LF`` (*Line Feed*) and ``CR`` (*Carriage Return*):

    * ``LF``: used in Unix environments (including Linux and OSX)
    * ``CRLF``: used in Windows/DOS environments

Vem will detect which of these two options is used in a file while opening it
and use the correct line ending for that file while editing and saving it. That
means that you can edit files with one or the other line ending indistinctly.
Which line ending is being used is shown in the right side of the status line.

Sometimes you may want to convert a file from one type of line ending to
another. To convert from Windows/DOS to Unix, use::

    :set fileformat=unix

To convert from Unix to Windows/DOS, use::

    :set fileformat=dos

After executing one of these commands, the new line ending will be displayed in
the status line and changes will be written to disk next time you save the
file.

In rare occasions, you may find a file with a mix of line endings. This is most
likely an error. In this case, Vem will detect it as an Unix file (``LF``) and
mark the ``CR`` characters visually with ``^M`` (Ctrl-M is the key combination
to generate this character). To fix the file, you can just remove every ``CR``
character in the file::

    :%s/\r//g

This will convert all the text to Unix format (once the file is in Unix format
it is trivial to convert it to Windows/DOS format as explained above if that's
the final format the file should use).


Other visual tips and tricks
----------------------------

**Use of _italics_ in Vem's default color schema**

``vem-dark``, the default color scheme of Vem, provides support for syntax
highlighting with italic fonts. Since not all terminal emulators support
displaying italic text, this option is disabled by default. If your terminal can
display italic characters, then you may enable this feature by adding this to
your ``vemrc`` file::

    let g:vem_colors_italic = 1
    colorscheme vem-dark

``vem_colors_italic`` is the variable that controls if the feature is enabled
(1) or disabled(0). The second line reloads the color scheme to make the change
effective.

**Mark maximum column limit for your code**

Many programming coding styles establish a maximum width for code. This is,
typically, set to 80, 100, 120 or even more characters. By default, Vem always
displays the column the cursor is at, which may allow you to know if you have
surpassed or not the column limit. However, it can be useful to see that limit
at all times. To do so, you can use the ``colorcolum`` option::

    set colorcolumn=80

**Highlight current line**

Some people like to have the line where the cursor is currently placed
highlighted. That is exactly what the option ``cursorline`` does::

    set cursorline

In Vem's default color scheme, setting this option changes the background of the
current line to a lighter color.

