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

    Vem is a set of configuration files that transforms Vim into a different
    text editor to make it more regular and intuitive to use.

.. image:: /static/img/screenshots/main-screenshot.png
    :class: screenshot
    :target: /static/img/screenshots/main-screenshot.png

Description
-----------

Vem is a set of configuration files that takes the best of the Vim text editor:
battle tested codebase, great extensibility, support for hundreds of file
formats and total control of the editor by using just the keyboard, while it
tries to make the user interaction much more regular and intuitive:

* While Vim offers more than 500 keyboard commands, Vem focuses in a far smaller
  set. It stills allows you to completely control the editor with the keyboard,
  but it trades expressiveness for simplicity so you can actually remember all
  keyboard commands.

* Commands are really simple. In Vim, you compose many commands with several
  keystrokes. In Vem, a key press equals to an immediate action in most cases.

* Commands are also spatially distributed across the keyboard, like a map, so
  they are easier to type —by maximizing the use of both hands— and remember.

The end result is an input interface for Vim that is more regular, easier to
remember and a joy to use. Additionally, Vem provides a more intuitive set of
default settings out of the box than Vim.

This is how it looks like:

.. image:: /static/img/cheat-sheets/leyend.png
    :class: center
    :width: 100px

.. container:: tabs layout

    .. container:: tab qwerty

        .. figure:: /static/img/cheat-sheets/qwerty-white-bk.png
            :class: screenshot
            :target: /static/img/cheat-sheets/qwerty-white-bk.png

            Click on the image to enlarge

        .. container:: call-to-action cols cols3

            `Download </download.html>`__ |br| Try it

            `Quick start </docs/quick-start.html>`__ |br| Know more

            `Cheat sheet </docs/cheat-sheets/qwerty.html>`__ |br| Take a look

    .. container:: tab qwertz

        .. figure:: /static/img/cheat-sheets/qwertz-white-bk.png
            :class: screenshot
            :target: /static/img/cheat-sheets/qwertz-white-bk.png

            Click on the image to enlarge

        .. container:: call-to-action cols cols3

            `Download </download.html>`__ |br| Try it

            `Quick start </docs/quick-start.html>`__ |br| Know more

            `Cheat sheet </docs/cheat-sheets/qwertz.html>`__ |br| Take a look

    .. container:: tab azerty

        .. figure:: /static/img/cheat-sheets/azerty-white-bk.png
            :class: screenshot
            :target: /static/img/cheat-sheets/azerty-white-bk.png

            Click on the image to enlarge

        .. container:: call-to-action cols cols3

            `Download </download.html>`__ |br| Try it

            `Quick start </docs/quick-start.html>`__ |br| Know more

            `Cheat sheet </docs/cheat-sheets/azerty.html>`__ |br| Take a look


Quick Q&A
---------

**It sounds interesting, but still, why?**

It may be very difficult to see the benefits of Vem until you try it. It is all
about the user experience. The best possible editing experience, from the point
of view of Vem, is one in which: your text editor gives you total control over
your code while at the same time it feels like it is not there and you don't
have to think about it. Vim gives you the first. Vem gives you the second on
top.

**How similar are Vim and Vem?**

Under the hood Vem *is* Vim. It is just a set of configuration files that sits
on top of it. So most of the functionality is exactly the same. What really
changes how you interact with the editor using the keyboard commands.

ps. That said, if you are a Vim old-timer with Vim's keyboard hardwired in your
brain, Vem can potentially drive you crazy (well, at least at the beginning...)

**I'm a Vim user, can I still use my .vimrc file and plugins?**

In Vem, it is called ``vemrc`` so you can run Vem and Vim without interfering
each other. But, yes, definitely. Vem doesn't change any internals of Vim, so
setting configuration options still works the same.

Also, all Vim plugins are compatible with Vem as long as they don't remap
global keys.

**How difficult is Vem to use and learn?**

Vem is probably easier than Vim and more difficult than most conventional
editors. Vem, like Vim, is about making an initial learning effort to get more
of it in the long run.

Vim's Features
--------------

When you use Vem, you can enjoy many of Vim's great features:

.. container:: cols cols2

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#code"/></svg>

        **Syntax highlighting** for a crazy amount of file formats

    .. container:: feature

        .. raw:: html

            <svg class="icon"><use xlink:href="/static/icons/feather-sprite.svg#feather"/></svg>

        Very **fast** and **lightweight**. A full-blown Vem session takes tens
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

Vem makes use of code provided by Vim's community for some of its features:

    * `vim-pathogen <https://github.com/tpope/vim-pathogen>`_
      by Tim Pope
    * `vim-filebeagle <https://github.com/jeetsukumaran/vim-filebeagle>`_
      by Jeet Sukumaran
    * `vim-smartword <https://github.com/kana/vim-smartword>`_
      by Kana Natsuno
    * `supertab <https://github.com/ervandew/supertab>`_
      by Eric Van Dewoestine
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

License
-------

Vem is `open source <https://github.com/pacha/vem/>`_ and released under the `MIT license <https://github.com/pacha/vem/blob/master/LICENSE>`_.

