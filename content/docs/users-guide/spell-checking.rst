
.. role:: key
.. default-role:: key

Spell Checking
==============

For most file types, spell checking is disabled by default. To enable it for
your current file use ``setlocal`` or ``set`` to enable it for all open files::

    :setlocal spell

Once activated misspelled words will be highlighted:

.. image:: /static/img/screenshots/spell.png
    :class: screenshot
    :target: /static/img/screenshots/spell.png

The language used by default is English (``en``), but can be changed with::

    :set spelllang=xx

Where ``xx`` is the two letter code of the language to use (eg. ``es`` for
Spanish, ``nl`` for Dutch and so on). You can also use multiple dictionaries
simultaneously or specify a regional variant of the form ``xx_xx``::

    :set spelllang=en_CA,es

If you want to set ``spelllang`` permanently, you just have to include the
command in your `vemrc </configuration.html#vemrc-file>`_ file.

.. Note:: The first time you use a given dictionary (by setting ``spelllang``
   and enabling ``spell``), Vim will ask you if you want to download it. This is
   probably the easiest way to install language files.

   However, you can also download them manually from:

       http://ftp.vim.org/vim/runtime/spell/

   There you'll find:

    * ``.spl`` files are the dictionaries themselves
    * ``.sug`` files help to improve suggestions for spelling mistakes
    * ``.diff`` files that contain the differential content for the region variants

   Copy the files of the languages you want check into the ``spell`` folder of
   your `configuration directory </configuration.html#vemrc-file>`_ (typically,
   ``~/.config/vem/spell/``).

.. Admonition:: Spell checking and source code files

   If you enable spell checking in a source code file, Vim is clever enough to
   only check spell in comments and string literals:

   .. image:: /static/img/screenshots/spell-source.png
       :class: screenshot
       :target: /static/img/screenshots/spell-source.png

   It will not recognize function or variable names though, which may make it to
   highlight too many terms depending on the type of comment.

Jumping to and fixing misspelled words
--------------------------------------

The following keys allow you to visit all the spelling mistakes in your
document:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`Space` `y`: move to previous misspelled word before the cursor

        :`Space` `n`: move to next misspelled word after the cursor

    .. container:: tab qwertz

        :`Space` `z`: move to previous misspelled word before the cursor

        :`Space` `n`: move to next misspelled word after the cursor

    .. container:: tab azerty

        :`Space` `y`: move to previous misspelled word before the cursor

        :`Space` `n`: move to next misspelled word after the cursor

You can get a list of suggested words to replace the misspelled word with:

    :`Space` `?`: suggest correctly spelled words to replace the misspelled one
                  under the cursor.

.. image:: /static/img/screenshots/spell-suggest.png
   :class: screenshot
   :target: /static/img/screenshots/spell-suggest.png

To use one of the suggested words just enter its number and press `Enter`.

Custom dictionary
-----------------

You can have your own lists of words that should be considered valid when the
spelling of your files is checked.

Use the following commands to manage these lists:

    :`<Space>` `+`: add the word under cursor to your list of valid words

    :`<Space>` `-`: remove the word under cursor from your list of valid words

.. Note:: custom spell files are stored in the ``spell`` directory of your
   `configuration folder </configuration.html#vemrc-file>`_ (typically,
   ``~/.config/vem/spell/``) with a filename of the form::

        <language>.<encoding>.add

   where ``<language>`` is the ``spelllang`` that was active when the word was
   added and the encoding is the current encoding of the file (eg.
   ``en.utf-8.add``).

.. container:: browsing-links

    « `Diffs </docs/users-guide/diffs.html>`_

    |

    `Quickfix lists </docs/users-guide/quickfix.html>`_ »

