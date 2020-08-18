
.. role:: key
.. default-role:: key

vim-plug
========

:Link: https://github.com/junegunn/vim-plug
:Author: Junegunn Choi (junegunn)

vim-plug is a minimalist plugin manager for Vim. It allows you to specify the
plugins to use as a list or URLs and it takes care of downloading or removing
them according to it.

Notes
-----

* As you can see in `Plugin installation </plugins/installation.html>`__,
  installing plugins is as easy as to clone them in the correct folder. And
  deleting them is as easy as to delete their directories. However, having a
  plugin manager can be very useful to keep your Vem configuration in 
  your `vemrc <http://localhost:8000/config/vemrc.html>`__ file. 

* Since vim-plug is a special kind of plugin, to install it you just have to
  copy `this single file
  <https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim>`__
  inside the ``~/.config/vem/autoload`` directory of your Vem configuration.
  Follow the instructions in vim-plug's `README
  <https://github.com/junegunn/vim-plug/blob/master/README.md>`__ file for more
  information.

Configuration
-------------

This is an example of how to add your plugin configuration to your ``vemrc``
file::

    call plug#begin('~/.config/vem/plugins')
        Plug 'https://github.com/itchyny/vim-gitbranch.git'
        Plug 'https://github.com/jremmen/vim-ripgrep.git'
        Plug 'https://github.com/junegunn/fzf'
        Plug 'https://github.com/junegunn/fzf.vim'
    call plug#end()

    " vim-plug calls reset the filetype indent to 'on'
    " to keep Vem default value of 'off' keep this line here
    filetype indent off

The first time that you add this list, or every time you modify it, you can use
the following commands to make changes to your installed plugins (remember to
restart Vem every time you modify the list to make the configuration changes
effective):

    :``:PlugInstall``: install new plugins in the list
    :``:PlugUpdate``: install new plugins and update present ones
    :``:PlugDelete``: delete plugins that are not in the list anymore

You can also run:

    :``:PlugUpgrade``: to update the vim-plug plugin itself

Keeping your Vem configuration under revision control
"""""""""""""""""""""""""""""""""""""""""""""""""""""

With the above configuration all plugins will be installed in the
``~/.config/vem/plugins`` directory. If you want to keep your Vem configuration
(ie. your ``~/.config/vem`` directory) under revision control, for example using
Git, you may want to add the following line to your ``~/.config/vem/.gitignore``
file so the plugin folder is not included in the repository::

    /plugins

Note that the plugins themselves are git repositories and you would run into
problems if you don't ignore them. (The alternative is to use the submodules
or subtrees features of git to embed other repositories inside your own, but
ignoring them and having the list in your ``vemrc`` file with the help of
vim-plug is significantly simpler than using those).

If you want to reuse your configuration in a different system, you then only
have to clone your repository into ``~/.config/vem``, launch Vem and run
``:PlugInstall`` to download all listed plugins.

.. admonition:: Smart indenting

   Note that at the end of the above example, the filetype smart indenting is
   set to ``off`` manually after the vim-plug calls. The filetype
