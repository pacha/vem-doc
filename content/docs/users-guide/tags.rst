
.. role:: key
.. default-role:: key

Tags
====

A **tags file** is a text file that contains the location of all the identifiers
(functions, classes, methods, ...) of one or more of your source code files.
Roughly speaking, for each identifier, that file contains a line that states:
the name of the identifier, the file where it is defined and the line where that
happens. Each of those lines is known as a **tag**.

Vim provides native support to use tags files, and they can be used to provide a
*Go to definition* kind of functionality. For example, if you create a tags file
for one of your projects, you would be able to know where each identifier in it
is defined.

One of the advantages of tags files is that their format is a pretty simple and
language agnostic which allows them to support plenty of programming languages.

To know how to do create the tag files for your projects, check the `Code
browsing </config/language-features/with-plugins.html#code-browsing>`__ point in
the configuration section of the documentation.

The rest of this section explains how to use tags once the editor is configured
to generate/read them.

.. admonition:: Help files use tags

   Vim help files (the ones accesible with the ``:help`` command) make use of
   tags to create the internal hyperlinks inside Vim documentation. Use the
   commands described in the next section to browse through them.

Jumping to/from tags
--------------------

To jump to and from tags, use the following commands:

    :`Space` `o`: jump to the definition of the identifier under cursor (if the
        identifier is defined in multiple locations let the user to choose which
        one to jump to)

    :`Space` `i`: go back to previous tag

That is, the editor keeps a stack with the jump history and allows you to jump
back to each step of that stack with `Space` `i`.

To see that history of jumps and where you are on it you can use::

    :tags

Also, if you want to jump to the definition of an identifier by typing the
identifier yourself, you can use::

    :tjump <identifier>

.. container:: browsing-links

    « `Folds </docs/users-guide/folds.html>`_

    |

    `Diffs </docs/users-guide/diffs.html>`_ »

