
.. role:: key
.. default-role:: key

Diffs
=====

You can use the editor to see a diff between two or more files. For example, to
compare ``foo1.txt`` with ``foo2.txt`` start Vem in your terminal with::

    vem -d foo1.txt foo2.txt

The files will be shown side-by-side as in the example:

.. image:: /static/img/screenshots/diff.png
    :class: screenshot
    :target: /static/img/screenshots/diff.png

The diff highlighting in the example is pretty straightforward:

    * The **green section** means that the code is present in one file but not
      in the other.

    * The **blue section** means that the code is present in both files but with
      modifications.

    * **Folds** are used to hide large sections of common code so you have a
      better overview of the differences between the files. You can toggle a
      fold open and close with `b` `a` (for more info about folds, check the
      `Folds </docs/users-guide/folds.html>`_ section).

The diff will be updated automatically as you change the files: the editor will
detect the changes and update the view accordingly. However, you can also force
the diff to be updated manually::

    :diffupdate

This may be useful if the diff gets out of sync because of a complex operation.

You can also start a diff between two or more windows of a tabpage, by
executing::

    :diffthis

in each window you want to diff. If you want to start a diff between all the
windows of a tabpage you can do::

    :windo diffthis

and ``window`` will take care of executing ``diffthis`` in every window.

To stop the diff, execute::

    :windo diffoff

.. admonition:: Vem as Git mergetool

    You can use Vem as the tool to solve Git conflicts. To do so, add the
    following lines to either ``~/.gitconfig``, if you want the change to be
    global to your user, or ``.git/config`` inside a repository, if you only
    want that repository to be affected::

        [merge]
            tool = vem

        [mergetool "vem"]
            cmd = vem -f -d -c '4wincmd w | wincmd J' \"$LOCAL\" \"$BASE\" \"$REMOTE\" \"$MERGED\"
            prompt = false

    These lines will make Git to start Vem showing a 3-way diff for each file in
    conflict when you execute ``git mergetool``:

    .. image:: /static/img/screenshots/git-mergetool.png
        :class: screenshot
        :target: /static/img/screenshots/git-mergetool.png

    The windows of the diff contain the following information:

    .. parsed-literal::
        :class: centered

        +--------------------------------+
        | LOCAL  |     BASE     | REMOTE |
        +--------------------------------+
        |             MERGED             |
        +--------------------------------+

    ..

        * **LOCAL**: shows a temporary file with your changes.

        * **REMOTE**: shows a temporary file with the changes that you're trying
          to merge in.

        * **BASE**: shows a temporary file with the common ancestor to both
          LOCAL and REMOTE.

        * **MERGED**: shows the actual buffer where you have to fix the
          conflict. (Modifiying the other files has no effect).

    Once the conflict has been resolved in the MERGED window, save its content
    and exit Vem. Git will then open Vem again for the next conflicting file.
    When there are no more conflicts left, then you'll be ready to commit the
    fixes.

    **Git difftool**

    Finally, it is also possible to use Vem as Git difftool by adding the
    following lines to Git's configuration::

        [diff]
            tool = vem

        [difftool]
            prompt = false

        [difftool "vem"]
            cmd = vem -f -d -c 'wincmd l' \"$LOCAL\" \"$REMOTE\"

    You can use ``git difftool`` to see the changes in your working copy inside
    Vem.

.. container:: browsing-links

    « `Tags </docs/users-guide/tags.html>`_

    |

    `Spell Checking </docs/users-guide/spell-checking.html>`_ »

