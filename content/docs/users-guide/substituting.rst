
.. role:: key
.. default-role:: key

Substituting
============

To replace text in a buffer, you can use the ``:s[ubstitute]`` command in the
command line. Its syntax is::

    :[range]s/<pattern>/<string>/<flags>

One example is::

    :%s/foo/bar/g

This would replace every occurrence of ``foo`` by ``bar`` in the whole document.

Let's check the different parts of the command syntax:

Range (``[range]``)
    It defines in which section of the document the substitutions will take
    place. The options are:

        * ``%``: whole file

        * ``N,M``: between lines ``N`` and ``M`` (eg. ``:145,160s/foo/bar/``)

        * ``'<,'>``: current visual selection. You don't have to type this
          yourself. Just select the lines you want to perform the substitution
          in and press ``:``, these makers will be added automatically.

        * (nothing): current line

Delimiters (``/``)
    The delimiters mark the different parts of the command. The character most
    commonly used for this is ``/`` but actually you can use some other like
    ``_`` if either your pattern or the substitution string contain slashes
    themselves (although you can also escape the slash using ``\/``). For
    example::

        :%s/foo/bar/g

    and::

        :%s_foo_bar_g

    are equivalent.

Search pattern (``<pattern>``)
    The pattern to look for is a regular expression. The syntax is the same as
    described in the `Searching </docs/users-guide/searching.html>`__ section.
    Also, like in searches, it is recommended to use the *very magic* syntax, by
    prefixing the search pattern with ``\v``, if you need to use special
    characters in your expression:

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

    For example::

        :%s/\vH.{3}o/Bye/

    will replace ``Hello`` and ``Hallo`` by ``Bye``.

Substitution string (``<string>``)
    All the matches of the provided pattern will be replaced by ``<string>``.
    This string is not a pattern, which means that you can use any symbol
    directly in it without having to scape it.

    Inside the string you can reference the regex groups that are defined in the
    pattern with ``()`` using the number of the group as ``\1``, ``\2``, ``\3``...
    (``\0`` refers to the entire match).

    For example, the command::

        :s/\v^Hello ([^\s]+)!$/Bye \1!/

    Replaces::

        Hello Sam!

    By::

        Bye Sam!

Flags (``flags``)
    You can add one character flags to the end of the command to modify how the
    substitution is performed. Some of the most important ones are:

        * ``g``: substitute all occurrences in each line. Without this flag only
          the first occurrence of each line is substituted. Most of the time,
          you want to include this one.

        * ``c``: confirm substitutions. For each substitution, it interactively
          asks if you want to perform the substitution or skip (at each
          occurrence you can also choose to stop substituting and substituting
          all the rest of the occurrences).

        * ``i``: ignore case when matching the pattern.

    You can add any combination of these. For example::

        :%s/foo/bar/gic

    will substitute ``foo``, ``Foo``, ``FOO`` or any combination of upper/lower
    case letters in the word by ``bar`` in the whole document —all occurrences
    in each line— but asking for confirmation before each substitution.

.. admonition:: To know more...

   The options listed here are arguably the most important ones. However, the
   ``:s`` command features more than these. Execute ``:help :s`` to get a full
   description of the command.

.. container:: browsing-links

    « `Searching </docs/users-guide/searching.html>`_

    |

    `Windows </docs/users-guide/windows.html>`_ »

