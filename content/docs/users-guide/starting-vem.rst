
.. role:: key
.. default-role:: key

Starting Vem
============

To start Vem, you can use any of the following commands:

* ``vem``: starts Vem in terminal mode using Vim
* ``nvem``: starts Vem in terminal mode using Neovim
* ``gvem``: starts Vem in graphical mode using Vim

In all three cases, the format of the command is the same::

    vem [arguments] [file1 file2 ...]

If you pass multiple filenames, all them are opened at start.

Vem's startup scripts are just wrappers around the ``vim`` and ``nvim`` commands
and any ``[arguments]`` provided are directly passed to them. The only thing
that the startup wrappers do is to instruct those commands to load Vem's specific
configuration.

For example, passing the ``-o`` argument (which opens all provided files in
different `Windows </docs/users-guide/windows.html>`_)::

    vem -o file1.txt file2.txt file3.txt

is similar to executing::

    vim -u path/to/vemrc -o file1.txt file2.txt file3.txt

Execution without installation
------------------------------

That last command is an example of how to execute Vem without having to install
it. In case you don't want to install Vem system wide, you can just clone its
repository somewhere in your user folder and execute::

    vimcommand -u path/to/vemrc [other arguments] [files...]

Where ``vimcommand`` is any Vim compatible executable (like ``vim``, ``nvim``,
``gvim``, ...).

.. admonition:: The -u argument

   Vem startup scripts accept any argument that the original commands of Vim and
   Neovim accept with the exception of ``-u <script>``. This parameter is used
   to initialize Vem itself. If you include it in the command line and provide
   an alternative initialization script then Vem's configuration will be skipped
   and that script will be used instead.

   In general, you may not need to use it since you can provide your own
   configuration using a `vemrc </config/vemrc.html>`__ file. However, if for
   any reason you want to use ``-u`` parameter while still loading Vem's
   configuration, you can add the following line to the top of your script::

        source path/to/vemrc

.. container:: browsing-links

    |

    `Modes </docs/users-guide/modes.html>`_ »

