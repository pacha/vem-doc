
.. role:: key
.. default-role:: key

The Quickfix List
=================

.. image:: /static/img/screenshots/quickfix-full.png
    :class: screenshot
    :target: /static/img/screenshots/quickfix-full.png

Vim offers two types of lists that store locations within files:

    * **Quickfix list**

    * **Location list**

These lists are very flexible and are used by multiple Vim commands. For
example, you can search across several files and store the positions of the
resulting matches in them. Once you have the results, you can jump to some of
those positions or iterate through them one by one.

Common uses for them are:

    * Storing results of a `search across different files
      </docs/users-guide/finding-in-files.html>`__

    * Storing location of errors after `compilation
      </config/language-features/with-plugins.html#compilation>`__

    * Storing results of running a `linting program over one or more files
      </config/language-features/with-plugins.html#linting>`__

The difference between they both is that, while there's only one quickfix list
in the editor, the location list is always associated to one of your windows.
Which means that more than one location list can exist at the same time. Which
one to use depends on what you're doing at that moment. In general, however, you
can safely use the quickfix list by default when given the option, unless you
have a specific use case for a location list. For example, in the case of
linting plugins, they typically run diagnostics for each file independently and
store the results in the location list of the window associated to each file. 

A quick example
---------------

Vim offers `multiple options
</docs/users-guide/finding-in-files.html>`__ for searching a pattern among multiple
files, but we can use the rather simple ``:vimgrep`` command to show a quick
example of how the quickfix and location lists can be populated::

    :vimgrep /my-string/ **/*.c

This command will recursively search ``my-string`` in all C files from the current
directory downwards and store the results in the quickfix.

To do the same for the location list, you only have to use ``:lvimgrep``
instead::

    :lvimgrep /my-string/ **/*.c

Other commands that use these lists are ``:make`` and ``:lmake`` (used to `build
</config/language-features/with-plugins.html#compilation>`__ your program) or
the commands provided by plugins for `linting
</config/language-features/with-plugins.html#linting>`__ or for integrating
external `searching tools </docs/users-guide/finding-in-files.html>`__.

The quickfix window
-------------------

To see the contents of the quickfix list you can open the *quickfix window*
with::

    :copen

And you can close it by pressing `x` (like for any other window) or using::

    :cclose

The window opens at the bottom of the screen with the list of results, showing
the file, position and text where the result was found:

.. image:: /static/img/screenshots/quickfix.png
    :class: screenshot
    :target: /static/img/screenshots/quickfix.png

The quickfix window works like any other one except that you can press `Enter`
when the cursor is over one of the results to jump directly to it.

The quickfix key commands
-------------------------

Opening the quickfix window is not the only way of interacting with the quickfix
list. You can also quickly iterate through the results using:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`Y`: jump to previous result in quickfix list

        :`N`: jump to next result in quickfix list

    .. container:: tab qwertz

        :`Z`: jump to previous result in quickfix list

        :`N`: jump to next result in quickfix list

    .. container:: tab azerty

        :`Y`: jump to previous result in quickfix list

        :`N`: jump to next result in quickfix list

Location list
-------------

The location list works in a very similar way to how the quickfix one does, but
since it is linked to a particular window, it is used mostly to show results
associated to the buffer that is displayed in it. For instance, it is very
useful to have the syntax errors found by running a linter over the current file
in the location list.

To open and close the location window use::

    :lopen
    :lclose

And to iterate over the results of the location list use:

    :`Ctrl-y`: jump to previous result in location list

    :`Ctrl-n`: jump to next result in location list

.. container:: browsing-links

    « `Spell Checking </docs/users-guide/spell-checking.html>`_

    |

    `Finding in Files </docs/users-guide/finding-in-files.html>`_ »

