
Plugin installation
===================

Installing plugins is pretty easy. Just place them inside this folder (create it
if it doesn't exist yet)::

    ~/.config/vem/pack/plugins/start/

Vem will load all plugins present in this directory at startup.

For example, to install ``vim-eunuch`` you can do::

    # only required if the start folder doesn't exist
    mkdir -p ~/.config/vem/pack/plugins/start

    cd ~/.config/vem/pack/plugins/start/
    git clone https://github.com/tpope/vim-eunuch.git

Take the following into account when managing your plugins:

    * Plugins are loaded at startup time, that means that you need to restart
      Vem any time you add or remove plugins for the changes to make effect.

    * If you add plugins to the ``start`` directory by directly cloning them
      from their repositories. That way you can pull changes every time that you
      want to update one.

    * To delete plugins, it is only necessary to delete their directories and
      restart Vem.

    * Plugin configuration options in Vem can be set in your ``vemrc`` file,
      instead of ``vimrc`` file, which is the one used in Vim.

    * Inside ``pack/`` you can have multiple directories to group plugins. For
      example, you could have ``pack/foo/start/`` and ``pack/bar/start``
      simultaneously and the plugins of both directories will be loaded when you
      start Vem. Using ``pack/plugin/start/`` is just a suggestion.

**Help tags**

If you want to be able to browse the documentation of the installed plugins
using the ``:help`` command, you have to instruct Vim/Vem to parse the plugin
help files first. To do that, execute::

    :Helptags

It can be a good idea to execute this command every time that you add or remove
plugins.

.. admonition:: Plugin Managers

    A popular option to manage plugins is to use a plugin manager. Plugin
    managers such as Vim Plug (https://github.com/junegunn/vim-plug) allow you to
    define a list of plugins you want to use and then they provide commands to
    clone (or upgrade) all them automatically. They also take care of updating
    your help tags without you having to do it manually.

