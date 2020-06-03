---

title: "Vem :: Plugins"

---

Plugins
=======

Vim compatibility
-----------------

Vim has a large number of plugins available. There are plugins for almost
everything: for different filetypes, color schemes, new commands or new
features. Vem is compatible with most of them. The only plugins that may
encounter an incompatibility are those that remap keys that are already mapped
by Vem.

Most well written plugins take a lot of care to not to interfere with key
mappings that the user may have defined. That's why most of them start their key
mappings using the ``<leader>`` key (by default *backslash* ``\`` both in Vim
and Vem). If a plugin defines key mappings starting with ``<leader>``, it should
work in Vem as it does in Vim. However, some plugins don't follow this best
practice. In those cases, they may override a key mapping set up by Vem and then,
some Vem actions can make some actions to get altered or, directly, unreachable.

.. This section lists most popular Vim plugins and documents if they show any
.. incompatibility with Vem, and shows how to fix it in case there's any. For each
.. plugin it also may suggest configuration options that can improve the way they
.. interact with Vem.

.. admonition:: A word of caution

    Once they realize the vast amount of plugins that are available, frequently
    new users find very tempting to start installing large amounts of them from
    the beginning. While plugins can be extremely useful, installing many of
    them indiscriminately can drag performance down, cause unexpected behavior
    of the editor and create cross-effects between mutually incompatible
    plugins.

    It is usually a good idea to test any plugin that is installed to see if it
    is really useful and to see if it causes any problem. Also, when evaluating
    a plugin, consider that Vim may already offer a native solution to the
    problem that the plugin solves. Keeping a lean installation of the editor
    can help to keep it snappy and to avoid conflicts.

Plugin installation
-------------------

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

Included plugins
----------------

Internally, Vem uses a selection of plugins to provide certain parts of the
functionality and looks. These plugins are included with Vem in their unmodified
versions and can be used and configured by the users directly without having to
install them:

    * **ctrlp.vim**: https://github.com/ctrlpvim/ctrlp.vim
    * **NERD Commenter**: https://github.com/scrooloose/nerdcommenter
    * **vem-dark**: https://github.com/pacha/vem-dark
    * **vem-statusline**: https://github.com/pacha/vem-statusline
    * **vem-tabline**: https://github.com/pacha/vem-tabline
    * **vim-EnhancedJumps**: https://github.com/inkarkat/vim-EnhancedJumps
    * **vim-filebeagle**: https://github.com/jeetsukumaran/vim-filebeagle
    * **vim-ingo-library**: https://github.com/inkarkat/vim-ingo-library
    * **vim-pathogen**: https://github.com/tpope/vim-pathogen
    * **vim-sayonara**: https://github.com/mhinz/vim-sayonara
    * **vim-smartword**: https://github.com/kana/vim-smartword
    * **vim-surround**: https://github.com/tpope/vim-surround
    * **wildfire.vim**: https://github.com/gcmt/wildfire.vim

