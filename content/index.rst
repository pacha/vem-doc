---

page: home
title: "Vem Text Editor"
css_files:
  - /static/css/home.css
  - /static/css/vem.css

---

.. role:: key
.. default-role:: key

Vem Text Editor
===============


.. container:: short-description

    Vem is a set of configuration files for the Vim text editor. It changes how
    you use it by distributing the keyboard commands spatially, making it more
    intuitive, regular and simpler.

.. image:: /static/img/screenshots/main-screenshot.png
    :class: screenshot
    :target: /static/img/screenshots/main-screenshot.png

Description
-----------

Vim is a very powerful text editor that, among other things, allows you to
control the entire editor using just the keyboard. It offers hundreds of
keyboard commands to navigate, visualize and edit your text in many ways.
Vem changes how you interact with it by sorting the keyboard commands
spatially:

    * Clustering related commands together and making their distribution more
      regular and predictable.

    * Making commands simpler: you don't compose commands with several
      keystrokes. A single key press results in an immediate action most of the
      time.

    * Making frequently used actions more accessible.

    * Optimizing the use of both hands for actions that are commonly performed
      sequentially.

Since in Vem actions are distributed across the keyboard according to their
position and not the labels in the keys, commands can be assigned to different
letters in different keyboard layouts. Vem supports the ``QWERTY``, ``QWERTZ``
and ``AZERTY`` layouts.

In addition, Vem offers a set of intuitive defaults and a more complete setup
out of the box. The end result is an editor that combines the power and features
of Vim with a different and simpler interface. Also, Vem's
logo looks like the one of an evil corporation in a science fiction
movie. *Who could ask for anything more?*

Quickstart
----------

To run Vem use::

    vem [filename]

Like Vim, Vem has two main modes, *command mode* and *insert mode*. In **command
mode**, every key in the keyboard performs an action. For example, pressing `s`
saves the current file. In **insert mode**, the editor works like most text
editors and text will be inserted as you type on the keyboard. To start insert
mode, press `i`. To go back to command mode to execute additional actions, press
`Ctrl-o`.

By default, Vem is configured to map commands to the ``QWERTY`` keyboard layout.
If you use ``QWERTZ`` or ``AZERTY``, you need to configure your layout in `Vem's
settings file </configuration.html#keyboard-layout>`_.

Some basic actions in command mode are:

.. container:: tabs layout

    .. container:: tab qwerty

        .. container:: quickstart

            .. container:: quickstart-item

                **Modes**

                    :`i`: insert mode
                    :`Ctrl-o`: command mode

                **File handling**

                    :`W`: open file
                    :`s`: save file
                    :`x`: close file/exit Vem

                    :`t`: select next file
                    :`T`: select previous file

                **Searching**

                    :`/`: search
                    :`u`: find previous
                    :`m`: find next

            .. container:: quickstart-item

                **Movement**

                    :`h`: cursor left
                    :`j`: cursor down
                    :`k`: cursor up
                    :`l`: cursor right

                ..

                    :`,`: beginning of line
                    :`.`: end of line

                ..

                    :`a`: beginning of document
                    :`z`: end of document

                **Undo/Redo**

                    :`q`: undo
                    :`Q`: redo

    .. container:: tab qwertz

        .. container:: quickstart

            .. container:: quickstart-item

                **Modes**

                    :`i`: insert mode
                    :`Ctrl-o`: command mode

                **File handling**

                    :`W`: open file
                    :`s`: save file
                    :`x`: close file/exit Vem

                    :`t`: select next file
                    :`T`: select previous file

                **Searching**

                    :`/`: search
                    :`u`: find previous
                    :`m`: find next

            .. container:: quickstart-item

                **Movement**

                    :`h`: cursor left
                    :`j`: cursor down
                    :`k`: cursor up
                    :`l`: cursor right

                ..

                    :`,`: beginning of line
                    :`.`: end of line

                ..

                    :`a`: beginning of document
                    :`y`: end of document

                **Undo/Redo**

                    :`q`: undo
                    :`Q`: redo

    .. container:: tab azerty

        .. container:: quickstart

            .. container:: quickstart-item

                **Modes**

                    :`i`: insert mode
                    :`Ctrl-o`: command mode

                **File handling**

                    :`Z`: open file
                    :`s`: save file
                    :`x`: close file/exit Vem

                    :`t`: select next file
                    :`T`: select previous file

                **Searching**

                    :`/`: search
                    :`u`: find previous
                    :`m`: find next

            .. container:: quickstart-item

                **Movement**

                    :`h`: cursor left
                    :`j`: cursor down
                    :`k`: cursor up
                    :`l`: cursor right

                ..

                    :`,`: beginning of line
                    :`;`: end of line

                ..

                    :`q`: beginning of document
                    :`w`: end of document

                **Undo/Redo**

                    :`a`: undo
                    :`A`: redo

There are many more commands in addition of these ones. Check the
`Tutorial </tutorial.html>`_ for a more complete introduction.

Cheat sheet
-----------

In Vem, each key in the keyboard can perform up to three different actions: when
pressed by themselves and when used together with the ``Shift`` or ``Control``
modifier keys.

The image below shows how actions are distributed across the keyboard. For each
key, the three possible actions are shown in order:

.. image:: /static/img/cheat-sheets/leyend.png
    :class: center
    :width: 100px

.. container:: tabs layout

    .. container:: tab qwerty

        .. figure:: /static/img/cheat-sheets/qwerty-white-bk.png
            :class: screenshot
            :target: /static/img/cheat-sheets/qwerty-white-bk.png

            Click on the image to enlarge

        .. todo

            Apart from the letters on the keyboard, symbols, numbers and some key
            sequences (like some starting with `space`) have commands assigned. To
            get a comprenhensive list of all available commands check out the
            `complete cheat sheet (qwerty) </cheat-sheets/qwerty.html>`_.

    .. container:: tab qwertz

        .. figure:: /static/img/cheat-sheets/qwertz-white-bk.png
            :class: screenshot
            :target: /static/img/cheat-sheets/qwertz-white-bk.png

            Click on the image to enlarge

        .. todo

            Apart from the letters on the keyboard, symbols, numbers and some key
            sequences (like some starting with `space`) have commands assigned. To
            get a comprenhensive list of all available commands check out the
            `complete cheat sheet (qwertz) </cheat-sheets/qwertz.html>`_.

    .. container:: tab azerty

        .. figure:: /static/img/cheat-sheets/azerty-white-bk.png
            :class: screenshot
            :target: /static/img/cheat-sheets/azerty-white-bk.png

            Click on the image to enlarge

        .. todo

            Apart from the letters on the keyboard, symbols, numbers and some key
            sequences (like some starting with `space`) have commands assigned. To
            get a comprenhensive list of all available commands check out the
            `complete cheat sheet (azerty) </cheat-sheets/azerty.html>`_.


While the cheat sheet can be very useful as a quick reference tool, it may be a
good idea to check out `Vem's tutorial </tutorial.html>`_ if
you're interested in learning more about Vem.

More Features
-------------

Vem is basically Vim, which means that it unashamedly enjoys all its features.
These are just a few of them:

.. container:: features

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#code"/></svg>

        **Syntax highlighting** support for almost every programming language in
        existence.

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#feather"/></svg>

        Very **fast** and **lightweight**. Opening Vem to edit 5 source code
        files takes around 10MB of memory.

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#terminal"/></svg>

        Both **terminal and graphical interfaces** available. You can use the exact same
        editor in your local development and in remote machines through SSH.

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#settings"/></svg>

        **Extremelly configurable** (hundreds of configuration options and programmable
        with VimScript, Python, Ruby or Lua among other languages).

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#package"/></svg>

        **Large amount of plugins** available that are compatible with Vem.

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#book-open"/></svg>

        Countless articles and pieces of **documentation** on the Web.


License
-------

Vem is open source and released under the `MIT license <https://github.com/pacha/vem/blob/master/LICENSE>`_.

Credits
-------

Vem makes use of the following plugins to support parts of its functionality:

    * `vim-pathogen <https://github.com/tpope/vim-pathogen>`_
      by Tim Pope
    * `vim-filebeagle <https://github.com/jeetsukumaran/vim-filebeagle>`_
      by Jeet Sukumaran
    * `vim-smartword <https://github.com/kana/vim-smartword>`_
      by Kana Natsuno
    * `vim-enhancedjumps <https://github.com/inkarkat/vim-EnhancedJumps>`_
      by Ingo Karkat
    * `wildfire.vim <https://github.com/gcmt/wildfire.vim>`_
      by Giacomo Comitti
    * `vim-surround <https://github.com/tpope/vim-surround>`_
      by Tim Pope
    * `ctrlp.vim <https://github.com/ctrlpvim/ctrlp.vim>`_
      originally by @kien, maintained by @mattn
    * `NERD Commenter <https://github.com/scrooloose/nerdcommenter>`_
      by Martin Grenfell
    * `vim-sayonara <https://github.com/mhinz/vim-sayonara>`_
      by Marco Hinz

Many thanks to their authors for such great projects!

