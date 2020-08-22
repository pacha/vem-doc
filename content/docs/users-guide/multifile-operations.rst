
.. role:: key
.. default-role:: key

Multifile Operations
====================

From time to time, you may need to perform operations across files. For example,
replacing a string across files in a project or iterating across files that
threw errors during compilation.

Vim has a simple but very powerful mechanism to perform this kind of operations:

* First you have to select the list of files to operate upon:

    - All buffers.
    - All the `windows </docs/users-guide/windows.html>`__ of the current tabpage.
    - The current window of each `tabpage </docs/users-guide/tabpages.html>`__.
    - All files of the `quickfix list </docs/users-guide/quickfix.html>`__.

* Then run any command of the editor command line over them.

The possibility of combining any list of files with any command provides a great
amount of flexibility. For example, may editors provide a way of finding and
replacing a string across files. In Vim, you can first `find the files
</docs/users-guide/finding-in-files.html>`__ and then perform *any* operation in
then, including `substituting text </docs/users-guide/substituting.html>`__.

.. Note:: Since replacing text is one of the most common operation to perform
   across files, take a look at `Substituting
   </docs/users-guide/substituting.html>`__ for more information about the
   ``:s`` command.

Operating on buffers, windows and tabpages
------------------------------------------

To perform an operation across all buffers, windows or the first window of each
tabpage, you only have to prefix your command with the corresponding prefix::

    :bufdo <command>
    :windo <command>
    :tabdo <command>

For example, to replace ``foo`` by ``bar`` in all buffers, you would execute::

    :bufdo %s/foo/bar/g

Or if you want to perform and save the changes at the same time::

    :bufdo %s/foo/bar/g | update

An additional example. If you have a `macro </docs/users-guide/macros.html>`__
stored in ``s``, you can execute it in all buffers using::

    :bufdo normal S

``normal`` just executes keyboard commands. In this case, ``S`` is the command
for the execution of the ``s`` macro.

.. admonition:: The argument list

   There's one more additional list in Vim that you can use to run commands
   against. It is the argument list or arglist. This list is prepopulated with
   the files that are passed to the editor when launching it from the shell. To
   run a command against this list use::

    :argdo <command>

   You can modify the arglist even after launching the editor with ``:argadd``
   and ``:argdel``. The arglist and the buffer list are very similar. The main
   difference is that you may have buffers that are not in the arglist (although
   not the other way around).

   One practical use of the arglist is, for example, replacing a string in all
   files with extension ``txt`` of a project. If the editor is started at the
   root of the project, then you can do::

    :argadd **/*.txt
    :argdo %s/foo/bar/g | update

   To know more about the arglist, check ``:help arglist``.

Operations over the quickfix list
---------------------------------

Executing an action over all the files that appear on the `quickfix list
</docs/users-guide/quickfix.html>`__ is very similar to what you do for buffers,
windows and tabpages, only that you use the ``:cfdo`` command.

For example, you can populate the quickfix list by `searching across files
</docs/users-guide/finding-in-files.html>`__::

    :grep -r 'old-string' .

And then replace the used search term —or a different one—, with::

    :cfdo %s/old-string/new-string/g | update

One difference with the quickfix list is that the same file can appear multiple
times in the results. When you use ``:cfdo``, the command is executed only once
per file. However, you can execute an action *per each entry* in the quickfix
list with::

    :cdo <command>

.. admonition:: The location list

   The same kind of operations that can be performed over the quickfix list, can
   be done over the location list. Only that in this case the commands are::

        :lfdo

   and::

        :ldo

.. container:: browsing-links

    « `Finding in Files </docs/users-guide/finding-in-files.html>`_

    |

    `Vim Compatibility </docs/users-guide/vim-compatibility.html>`_ »

