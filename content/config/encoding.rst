
Encoding
========

Vem will use the ``utf-8`` encoding both internally and as the encoding of new
files. Unless you *know* that you have to work with files of different encodings
from this one, this is probably the behavior that you want.

However, if for any reason you need to work with other encodings, then you may
want to take the following points into account:

    * Vem will try to detect the encoding of a file upon opening it. And will
      use that encoding for editing and saving it. So, if you open a ``latin1``
      file, it will be saved back as ``latin1`` too. The detected encoding is
      displayed in the right section of the status line.

    * The detection mechanism tries to guess the encoding, and, in some
      occasions, it can fail. If you want to load a file and its encoding is
      being incorrectly detected, you can use the following command to use the
      correct one (eg. ``latin1``)::

        :edit ++enc=lating1 my-file.txt

    * Also, if you have a file loaded in one encoding and want to convert it to
      another one, use::

        :set fileencoding=<new encoding>

      The file will be converted and will be written to disk with the new
      encoding next time you save.

    * Finally, if you want to *always* work with a different encoding (let's say
      ``latin1`` by default) and don't want to detect the encoding when files
      are opened, then you can add these lines to your ``vemrc`` file::

        set encoding=latin1
        set fileencodings=latin1

      **Warning note**: set this options if you know what you're doing and if
      you know that you won't be ever editing files in any other encoding. There
      may be loss of information with these settings!

For more information, check the following help topics::

    :help 'encoding'
    :help 'fileencoding'
    :help 'fileencodings'

