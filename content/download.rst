
Download
========

Installation
------------

To install Vem, just clone the source from GitHub and execute the Makefile inside::

    git clone https://github.com/pacha/vem.git
    cd vem
    sudo make install

Now the command ``vem`` should be available in your terminal.

Requirements
------------

The only requirement to run Vem is to have **Vim 7.4 or greater** installed in
the system.

You can easily check if you have Vim installed in your system by running the
command::

    vim --version

If vim is installed, this will also display the version and which features are
enabled in it. Most Unix/Linux systems come with Vim already pre-installed.
However, in some cases, the installed package is not the latest version or it
is a *minimal* package that lacks some of the features offered by the full
editor.

If vim is not installed or it is not a full version, you can install directly
from the repositories of your Linux distribution:

    :**Debian/Ubuntu**: ``sudo apt install vim``
    :**Fedora**: ``sudo dnf install vim``
    :**Arch**: ``sudo pacman -S vim``
    :**openSUSE**: ``sudo zypper -n install vim``

Or using ``brew`` in the case of MacOS:

    :**MacOS**: ``brew install vim``


Execution without installation
------------------------------

You can also execute Vem without having to install it in the system. Just clone
the source code::

    git clone https://github.com/pacha/vem.git

And then execute ``vim`` passing the path to the main configuration file in
Vem::

    vim -u vem/vemrc

Since Vem is just a collection of configuration files for Vim, with the ``-u``
option, you can tell Vim to use them directly.

