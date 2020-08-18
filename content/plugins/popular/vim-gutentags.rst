
.. role:: key
.. default-role:: key

vim-gutentags
=============

:Link: https://github.com/ludovicchabant/vim-gutentags
:Author: Ludovic Chabant

vim-gutentags is a plugin that manages tag files for you in an asynchronous way.
Tag files are used by the editor to provide the **Go to definition** for the
identifiers in your code.

Notes
-----

* To use vim-gutentags, you need to have `Universal Ctags
  <https://github.com/universal-ctags/ctags>`__ installed in your system. This
  is the program that will actually generate the tag files. (The most popular
  program to do this in the past was Exuberant Ctags, which stalled in its
  development and has been superseded by Universal Ctags).

* Once the plugin is installed, it doesn't require too much configuration
  (although it provides a number of settings that can be tweaked). You may want
  to take a look at the option below to not to pollute your code with tag files
  though.

* Note that for the plugin to work, it needs to know the root directory of your
  project. For that, it will use the first parent directory of the current file
  that contains a ``.git``, ``.hg`` or similar folder. However, if gutentags is
  unable to find the project root, then **no tags will be generated**. (If your
  code doesn't live in a repository or you want to specify how to find the root
  directory yourself, take a look at the ``g:gutentags_project_root``
  configuration variable in gutentag's documentation).

Configuration
-------------

vim-gutentags doesn't have any incompatibility with Vem.

In any case, one very useful option that you can set in your `vemrc
</config/vemrc.html>`__ file is::

    let g:gutentags_cache_dir="~/.cache/vem/tagfiles/"

This will prevent the plugin from creating ``tags`` files at the root
directories of your projects (which is the default).

