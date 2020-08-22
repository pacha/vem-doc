
.. role:: key
.. default-role:: key

Searching
=========

To start a search in the current file use:

    :`/` or `-`: start search forward (from cursor to the end of the document)

    :`?`: start search backward (from cursor to the start of the document)

When you type `/` or `?` the cursor is taken to the command line and you can
provide your search term and press `Enter`. For example, typing ``/prefix`` and
then `Enter` will find the next occurrence of ``prefix`` in the document and
highlight all the other ones:

.. image:: /static/img/screenshots/search.png
    :class: screenshot
    :target: /static/img/screenshots/search.png

.. admonition:: Use `-` instead of `/` in some keyboards

   `/` is the traditional key to start a search in Vim and Vem inherits it.
   However, its position at the bottom right corner, just next to the right
   `Shift` key, is taken by `-` in some keyboards. If you happen to have one of
   these then you may want to use `-` instead. In Vem, both keys perform the
   same action and the bottom right corner, without having to use a modifier
   key, is more comfortable to use and preferred for such a frequent action.

After performing a search, you can also find the next/previous occurrences of
the same search term:

    :`m`: find next match

    :`u`: find previous match

By default, after a search, all the occurrences of the search term are
highlighted on the screen. Once you don't need them anymore, you can use:

    :`Ctlr-r`: remove highlighting of current search


Case insensitive search
-----------------------

By default, searching is case sensitive, to make a case insensitive search add
``\c`` at the beginning of the search term like this::

    /\cprefix

Searching the word under cursor
-------------------------------

Sometimes you want to find other occurrences of a word of the file you're
editing. In those cases you don't have to start a search and type the word again
but you can just use:

    :`_`: search next occurrence of the word under the cursor

    :`Ctrt-_`: search previous occurrence of the word under the cursor

Regular expressions
-------------------

When you trigger a search, you aren't actually providing a search term but a
regex pattern. For example::

    /h.*o

will match ``hello`` or ``h2o``.

Vim's default regex syntax
""""""""""""""""""""""""""

Vim's default regex syntax is a bit different from what you can be used to in
different programming languages in that it requires to escape some of the
special symbols (Eg. ``\+`` or ``\|``).

In Vim, this syntax is known as **magic**. This is a summary of the most important
symbols:

.. container:: cols cols2

        :``^``: start of line
        :``$``: end of line
        :``.``: any character
        :``\|``: or
        :``*``: repeated zero or more times
        :``\+``: repeated one or more times
        :``\?``: repeated zero or one time
        :``\{N}``: repeated N times
        :``\{N,M}``: repeated between N and M times
        :``[]``: any character specified inside ``[]``
        :``[^]``: any character *not* specified inside ``[^]``

    ..

        :``\n``: end of line
        :``\t``: tab character
        :``\d``: a digit (ie. ``[0-9]``)
        :``\a``: a letter (ie. ``[A-Za-z]``)
        :``\s``: whitespace (ie. ``[\ \t]``)
        :``\\``: literal backslash

Vim's very magic regex syntax
"""""""""""""""""""""""""""""

You may have noticed that Vim's default syntax may be difficult to remember at
times because some of the special regex characters have to be escaped but others
don't.

Fortunately, Vim also support an alternative syntax known as **very magic**
which is similar to the one found in most programming languages and that allows
to use all the special symbols without having to escape them.

To use it prepend ``\v`` to your pattern::

    /\v<your-pattern>

A summary of the very magic syntax is:

.. container:: cols cols2

        :``^``: start of line
        :``$``: end of line
        :``.``: any character
        :``|``: or
        :``*``: repeated zero or more times
        :``+``: repeated one or more times
        :``?``: repeated zero or one time
        :``{N}``: repeated N times
        :``{N,M}``: repeated between N and M times
        :``[]``: any character specified inside ``[]``
        :``[^]``: any character *not* specified inside ``[^]``
        :``()``: define group (for example to separate with ``|``)

    ..

        :``\n``: end of line
        :``\t``: tab character
        :``\d``: a digit (ie. ``[0-9]``)
        :``\a``: a letter (ie. ``[A-Za-z]``)
        :``\s``: whitespace (ie. ``[\ \t]``)
        :``\\``: literal backslash

As you can see, very magic is more intuitive when it comes to actually write
regular expressions.

Vim also supports even another syntax: **very nomagic**. This is activated by
prefixing your search with ``\V`` and has the opposite effect to very magic,
making all special symbols available only if you escape them. For example::

    /\V[foo]

will literally match the ``[foo]`` string.

.. admonition:: When to use magic, very magic and very nomagic

   As a rule of thumb you can use:

   * **Magic** (``/``): for most searches without symbols

   * **Very magic** (``/\v``): for regex searches

   * **Very nomagic** (``/\V``): when you need symbols to be matched literally
     instead of being used to define regular expressions.

.. container:: browsing-links

    « `Command-line Mode </docs/users-guide/command-line-mode.html>`_

    |

    `Substituting </docs/users-guide/substituting.html>`_ »

