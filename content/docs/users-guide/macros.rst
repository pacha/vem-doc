
.. role:: key
.. default-role:: key

Macros
======

With macros one can record and replay a series of actions in order to perform
the same change at different places within one or more files.

For example, you can use `@s` to start recording a macro. Then you can execute
any set of commands and, finally, you can press `@@` to stop recording. To
replay the macro somewhere else you just need to press `S`.

There are two macros that you can record and have available simultaneously:
``s`` and ``x``.

In summary:

    :`@` `s`: start recording macro ``s``.
    :`@` `x`: start recording macro ``x``.
    :`@` `@`: stop recording
    :`S`: replay macro ``s``
    :`X`: replay macro ``x``

.. container:: browsing-links

    « `Marks </docs/users-guide/marks.html>`_

    |

    `Folds </docs/users-guide/folds.html>`_ »

