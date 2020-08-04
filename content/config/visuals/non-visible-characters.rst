
Non-visible characters
======================

Sometimes it is very useful to be able to see white space characters in source
code files. For example, it is a clean practice to avoid having trailing spaces
after code lines, and even more important to keep your indentation
consistent: using all tabs or all spaces across the whole file.

To spot those problems you can display these characters in the editor by adding
the following lines to your ``vemrc`` file::

    set listchars=tab:»\ ,trail:·
    set list

With ``listchars``, you can specify which characters to use to display both tabs
and trailing spaces. For spaces you can provide only one, in this example ``·``.
For tabs, you can provide two. If your tab is, for example, 4 characters wide in
size, the first one (``»``) will be placed at the beginning and the second one
(an empty space escaped with backslash in this case) will be repeated for the
remaining three characters.

The ``list`` option enables the display of white space characters, and
``nolist`` (which is the default) hides them.

There are more display options and more cases that can be shown apart from these
two. Check the ``listchars`` option in the help documentation to get more
information::

    :help 'listchars'

