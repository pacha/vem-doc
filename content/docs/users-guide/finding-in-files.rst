
.. role:: key
.. default-role:: key

Finding in Files
================

Vim offers several options when it comes to searching across multiple files:

    * Using plugins to integrate external tools

    * Integrating internal tools manually

    * Using Vim built-in commands

While plugins to integrate an external tool may be the most convenient
way for the user —both in terms of ease of configuration and final level of
integration with the editor—, they are not strictly required and you can
configure the tool you want to use yourself or rely on the built-in commands.

Using plugins to integrate external tools
-----------------------------------------

Vim can integrate with your preferred tool for searching across files in the
shell. It can be ``grep``, `ack <https://github.com/beyondgrep/ack3/>`__, `The
Silver Searcher (ag) <https://github.com/ggreer/the_silver_searcher>`__,
`ripgrep (rg) <https://github.com/BurntSushi/ripgrep>`__ or any other. That way,
you can have in the editor the same features and speed that your command line
search tool offers.

For example, ``ripgrep`` is very popular lately thanks to its sensible defaults
and speed. To integrate it, you can use plugins like `vim-ripgrep
</plugins/popular/vim-ripgrep.html>`__ or `fzf.vim
</plugins/popular/vim-fzf.html>`__.

For example, using the ``vim-ripgrep`` plugin, the following command populates
the `quickfix list </docs/users-guide/quickfix.html>`__::

    :Rg <pattern>

Note that you can pass any pattern or parameters as you would when using
``ripgrep`` directly in the shell (although make sure to escape ``|`` in your
patterns as ``\|`` so it is passed correctly to the tool).

As you will see next, integrating these tools manually is rather easy and using
a plugins like `vim-ripgrep </plugins/popular/vim-ripgrep.html>`__ or `ack.vim
<https://github.com/mileszs/ack.vim>`__ is not strictly necessary. However, one
advantage they provide is that they prevent the shell from being shown while the
search is performed and they can open the quickfix window automatically after a
search among other things.

Integrating internal tools manually
-----------------------------------

If you don't need the extra features additional plugins provide, 
integrating external search tools is very easy. The configuration option to do so
is ``grepprg``. For example, to configure ``ag``, you can do::

    set grepprg=ag\ --vimgrep

or to configure ``ripgrep``::

    set grepprg=rg\ --vimgrep

As you can see, many tools already provide some kind of parameter (typically
``--vimgrep``) to configure the format of the output in such a way that Vim
understands it. To make the configuration persist between sessions, remember to
add that configuration option to your `vemrc </config/vemrc.html>`__ file.

To perform a search once the tool is configured, use ``:grep``::

    :grep <parameters>

Once executed the search, the results are stored in the `quickfix list
</docs/users-guide/quickfix.html>`__.

.. admonition:: Using good ol' grep
   
   By default, Vim is configured to use the classical grep tool. So, if this is
   the tool you want to use, you don't need to configure anything and can
   directly use it. For example, to search recursively from the current
   directory, you can do::

        :grep -r '<pattern>' .

   Note that for many use cases ``grep`` is a perfectly valid tool, so you don't
   necessarily have to configure a new one in the editor if you don't have the
   need. Newer tools are, generally, a bit more 'developer' aware and
   avoid searching certain kind of files (like binary ones or contents of
   folders like ``.git``) which can significantly increase the search speed. So
   if you work with large codebases or need the extra speed then other tools can
   be a good fit.

Using Vim built-in commands
---------------------------

Finally, you can also perform searches across files using the ``vimgrep``
command (or ``lvimgrep`` if you want to populate the location list window
instead of the quickfix one). Its format is::

    :vimgrep /<pattern>/ <glob-expression>

For instance, to search the string ``foo`` across all JSON files under the
current directory, you can use::

    :vimgrep /foo/ **/*.json

Note that ``<pattern>`` in this case uses Vim `regular expression's syntax
</docs/users-guide/searching.html#regular-expressions>`__ while, when an
external tool is integrated, you use the syntax of the tool itself.

The advantage of the built-in command is that it doesn't require an external
tool at all to work. The downside is that is extremely slow compared with the
tools considered above. So if you have very few files to use in your search or
you don't need the speed, ``:vimgrep`` can still be a good option.

.. container:: browsing-links

    « `Quickfix lists </docs/users-guide/quickfix.html>`_

    |

    `Multifile Operations </docs/users-guide/multifile-operations.html>`_ »

