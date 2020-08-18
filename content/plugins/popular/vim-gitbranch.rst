
.. role:: key
.. default-role:: key

vim-gitbranch
=============

:Link: https://github.com/itchyny/vim-gitbranch
:Author: itchyny

``vim-gitbranch`` is a small plugin that defines a function to provide you with
the name of the active branch in the current git repository::

    :echo gitbranch#name()

.. Note:: Vem automatically detects if ``vim-gitbranch`` is installed and, if it
   is, it displays the name of the current active branch in the status line.
   This plugin is not necessary if ``vim-fugitive`` is already present.

