---

title: "Vem :: Download"
layout: two-cols
index_node: download.rst
first_level_section: download

---

Download
========

Installation
------------

To install Vem, just clone the source from GitHub and execute the Makefile
inside::

    git clone https://github.com/pacha/vem.git
    cd vem
    sudo make install

Now the commands:

    * ``vem`` for using Vem with Vim
    * ``nvem`` for using Vem with NeoVim
    * ``gvem`` for using Vem with the graphical version of Vim

should be available in your terminal.

Alternatively, you can download the latest version from `here
<https://github.com/pacha/vem/releases/latest>`__.

.. admonition:: Execution without installation

    Since the code is just a set of configuration files, you can execute Vem
    without installing it by running ``vim`` or ``nvim`` and directly passing
    the path to the main configuration file with the ``-u`` option::

        vim -u vem/vemrc

Requirements
------------

The only requirement to run Vem is to have **Vim 7.4 or greater** or,
alternatively, any version of **Neovim** installed in the system.

Vim 7.4 or greater
""""""""""""""""""

You can easily check if you have Vim installed in your system by running the
command::

    vim --version

If Vim is installed, ``vim --version`` will also display the version and which
features are enabled in it. Most Unix/Linux systems come with Vim already
pre-installed. However, in some cases, the installed package is not the latest
version or it is a *minimal* package that lacks some of the features offered by
the full editor.

If vim is not installed or it is not a full version, you can install directly
from the repositories of your Linux distribution:

    :**Debian/Ubuntu**: ``sudo apt install vim``
    :**Fedora**: ``sudo dnf install vim``
    :**Arch**: ``sudo pacman -S vim``
    :**openSUSE**: ``sudo zypper -n install vim``

Or using ``brew`` in the case of MacOS:

    :**MacOS**: ``brew install vim``

Neovim
""""""

To check if Neovim is installed, you can execute::

    nvim --version

Unlike Vim, Neovim packages all the features enabled by default so if it is
installed you should be good to go. However, you may double check that you have
the following packages installed in your system::

    * ``xsel`` or ``xclip`` in the case of Linux
    * ``pbcopy`` and ``pbpaste`` in the case of MacOS

since Neovim relies on them to make use of the system clipboard.

