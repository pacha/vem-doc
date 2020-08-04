
Git integration
===============

.. image:: /static/img/screenshots/git-integration.png
    :class: screenshot
    :target: /static/img/screenshots/git-integration.png

In general, Vem is pretty much agnostic when it comes to which control version
system you use. However, since Git presence is so extended, Vem is configured to
optionally display the current branch of the Git repository you're working on in
the status line by adding one of the following plugins:

* `vim-gitbranch </plugins/popular-plugins/vim-gitbranch.html>`__: this is a
  very small plugin by itchyny provides just the functionality to retrieve the
  branch name. If you just want to display the branch name and don't want any
  extra features use this one.

* `fugitive.vim </plugins/popular-plugins/vim-fugitive.html>`__: this is a
  larger plugin by Tim Pope that allows to use Git from within the
  editor. It is probably the most popular Git integration plugin for Vim.

If you have any of these two plugins, the status line will then automatically
display the current Git branch every time you edit a file within a repository.

.. Note:: If you have any other control version system (such as Mercurial or
   Bazaar) or a different plugin to integrate Vim with Git, you can also provide
   the name of a function that Vem should use to display the name of the branch
   using the ``g:vem_statusline_branch_function`` configuration variable.

   For example, if you have a function that retrieves the name of the current
   branch named ``GetBranchName()``, then you can add the following to your
   `vemrc </config/vemrc.html>`__ file::

        let g:vem_statusline_branch_function = 'GetBranchName'

