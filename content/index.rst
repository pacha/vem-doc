---

page: home
title: "Vem Text Editor"
css_files:
  - /static/css/home.css
  - /static/css/vem.css

---

.. role:: key
.. default-role:: key

.. |br| raw:: html

    <br/>

Vem Text Editor
===============


.. container:: short-description

    Vem is an alternative command layout for the Vim text editor.

.. image:: /static/img/home/vem-main-screenshot.png
    :class: screenshot
    :target: /static/img/home/vem-main-screenshot.png

Description
-----------

Vem is a set of configuration files for the Vim text editor that changes how you
interact with it. Commands are arranged spatially across the keyboard, like in a
map, and they are much simpler and immediate to use:

.. container:: tabs layout

    .. container:: tab qwerty

        .. figure:: /static/img/cheat-sheets/qwerty-full.png
            :class: screenshot
            :target: /static/img/cheat-sheets/qwerty-full.png

    .. container:: tab qwertz

        .. figure:: /static/img/cheat-sheets/qwertz-full.png
            :class: screenshot
            :target: /static/img/cheat-sheets/qwertz-full.png

    .. container:: tab azerty

        .. figure:: /static/img/cheat-sheets/azerty-full.png
            :class: screenshot
            :target: /static/img/cheat-sheets/azerty-full.png

The result is a different editor that strives to be as simple as possible while
still giving you total control using just the keyboard. Since it uses actual Vim
as base, you can also make use of its many features.

Vem requires either Vim or Neovim to be installed in the system and supports the
``QWERTY``, ``QWERTZ`` and ``AZERTY`` keyboard layouts.

 If you want to know more about what are the advantages of using Vem check out the
 next section `Why Vem </#why-vem>`_.

--------------------------------------------------------------------------------

.. container:: call-to-action cols cols3

     Try it |br| `Download </download.html>`__

     Know more |br| `Quick start </docs/quick-start.html>`__

     Take a look |br| `Cheat sheets </docs/cheat-sheets/index.html>`__

--------------------------------------------------------------------------------

Why Vem
-------

The Vi text editor —mostly in the form of its successor, Vim— remains as one of
the most popular text editors among software developers and DevOps engineers to
this day. Even though it was created in the 70s, is still as well-loved, if not
more, than what it was back in the day when it was first released.

One of the reasons for that is that it provides a large amount of editing
possibilities which you can control using just the keyboard. It is not
necessarily the easiest text editor to learn, but once you develop some muscle
memory it can change the way in which you write code given the speed and
precision that it allows.

However, some of its core design decisions are still rooted in its origins. The
reason why you can compose elaborated commands using several keystrokes (for
example ``c3w``, *change 3 words* or ``9yy``, *copy next 9 lines*) is that Vi
was created in a Lear Siegler ADM-3A video terminal that communicated using a
300 baud modem. The screen would refresh slower than you could think, so the
editor was optimized to send complex actions with a terse syntax. Also, the
reason why Vi is completely controlled using the keyboard is that, well, the
mouse was not invented until several years later.

Independently of which was the original reasoning behind those decisions, some
of them still work very well in today's world. The fact that you can use Vi
using only the keyboard is what actually gives it its main edge. Some others,
maybe not so much. Being able to compose complex commands was introduced to
improve the user experience in a context where the computer would take some time
to answer. In that scenario, you wanted to pre-package your ideas in bigger
chunks, so the computer could do more in each interaction. Nowadays, it is the
computer the one that is waiting for you and that optimization may not be as
useful as it used to be.

Vem is a text editor that tries to optimize the user experience in a computer
that answers faster that you can think: it removes any command grammar, makes
commands to answer instantaneously and distributes them spatially to optimize
the use of both hands. Vem's goal is to allow you to focus on your code rather
than on your editor while still giving you a rich, keyboard driven editing
experience.


Quickstart
----------

To run Vem use::

    vem [filename]

Vem, like Vim, is a modal editor with two main modes: *command* (or *normal*)
and *insert*. When the editor is in command mode, each key press performs an
action. When it is in insert mode, it behaves like most text editors and
text gets inserted as you type on the keyboard. To start insert mode, press
`i`. To go back to command mode to execute additional actions, press `Ctrl-o`.

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

These are the commands you need to know to be able to do a minimal edit to a
file but, of course, there are many more. Check the `Quick start
</docs/quick-start.html>`__ to learn Vem's essentials.

**Note:** By default, Vem is configured to map commands to the ``QWERTY``
keyboard layout. If you use ``QWERTZ`` or ``AZERTY``, you need to configure your
layout in `Vem's settings file </config/essentials/keyboard-layout.html>`_.

Screenshots
-----------

.. container:: overview-screenshots cols cols2

    .. figure:: /static/img/home/thumbs/vem-multiple-windows.png
        :class: screenshot
        :target: /static/img/home/vem-multiple-windows.png

        Quake source code edited in multiple windows

    .. figure:: /static/img/home/thumbs/vem-diff.png
        :class: screenshot
        :target: /static/img/home/vem-diff.png

        Diff between two files

    .. figure:: /static/img/home/thumbs/vem-live-regex.png
        :class: screenshot
        :target: /static/img/home/vem-live-regex.png

        Hilighting of regex matches as-you-type

    .. figure:: /static/img/home/thumbs/vem-fuzzy-finder.png
        :class: screenshot
        :target: /static/img/home/vem-fuzzy-finder.png

        Fuzzy file search in Git source code


Features
--------

Since Vem is just a configuration on top of Vim, you can enjoy many of the
features that Vim offers:

.. container:: feature-list cols cols2

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#code"/></svg>

        **Syntax highlighting** for a crazy amount of file formats

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#feather"/></svg>

        Very **fast** and **lightweight**. A full-blown session takes tens
        of MB instead of hundreds

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#terminal"/></svg>

        Both **terminal and graphical interfaces** available. Use your same
        editor both locally and through SSH

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#settings"/></svg>

        **Extremelly configurable**. Hundreds of configuration options and programmable
        using many languages

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#package"/></svg>

        **Large amount of plugins** available

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#book-open"/></svg>

        Plenty of **documentation** available


Credits
-------

Vem makes use of some Vim plugins to power some of its features. Many
thanks to the authors of the following great projects:

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


License
-------

Vem is `open source <https://github.com/pacha/vem/>`_ and free. Vem is released
under the `MIT license <https://github.com/pacha/vem/blob/master/LICENSE>`_.

