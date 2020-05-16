
Line endings
============

Line endings are generally marked in text files with one or two characters,
named ``LF`` (*Line Feed*) and ``CR`` (*Carriage Return*):

    * ``LF``: used in Unix environments (including Linux and OSX)
    * ``CRLF``: used in Windows/DOS environments

Vem will detect which of these two options is used in a file while opening it
and use the correct line ending for that file while editing and saving it. That
means that you can edit files with one or the other line ending indistinctly.
Which line ending is being used is shown in the right side of the status line.

Sometimes you may want to convert a file from one type of line ending to
another. To convert from Windows/DOS to Unix, use::

    :set fileformat=unix

To convert from Unix to Windows/DOS, use::

    :set fileformat=dos

After executing one of these commands, the new line ending will be displayed in
the status line and changes will be written to disk next time you save the
file.

In rare occasions, you may find a file with a mix of line endings. This is most
likely an error. In this case, Vem will detect it as an Unix file (``LF``) and
mark the ``CR`` characters visually with ``^M`` (Ctrl-M is the key combination
to generate this character). To fix the file, you can just remove every ``CR``
character in the file::

    :%s/\r//g

This will convert all the text to Unix format (once the file is in Unix format
it is trivial to convert it to Windows/DOS format as explained above if that's
the final format the file should use).

