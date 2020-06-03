
.. role:: key
.. default-role:: key

Undoing changes
===============

The commands to undo and redo changes are:

    :`q`: undo
    :`Q`: redo

You can also move back/forward in the history of changes. For example, to set
the state of the file as it was one hour ago or how it was one hour after, use::

    :earlier 1h
    :later 1h

Time can be specified with a number and ``s``, ``m``, ``h`` or ``d`` for
seconds, minutes, hours or days respectively.

.. Note:: Vim has a very complete undo support with recording of all undo
   branches and undo persistence between sessions. Check ``:help undo`` to know
   more about these advanced features.

