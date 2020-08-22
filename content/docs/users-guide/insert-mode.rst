
.. role:: key
.. default-role:: key

Insert Mode
===========

Most actions in Vem are performed in normal mode. However, there is a number of
them that you can perform in insert mode using `Ctrl-<key>` combinations too.
Most of those are related to the insertion of text —such as autocompletion or
inserting special characters—, but others are just there to reduce the number
of mode switches you have to perform —eg. moving the cursor.

Moving in insert mode
---------------------

Sometimes it is very convenient to be able to perform small movements in insert
mode without having to change mode. You can use the following key combinations
to do so:

    :`Ctrl-h`: Move cursor left
    :`Ctrl-j`: Move cursor down
    :`Ctrl-k`: Move cursor up
    :`Ctrl-l`: Move cursor right


Autocompletion
--------------

To autocomplete a term that you're starting to type use:

    :`Tab`: Autocomplete
    :`Shift-Tab`: Autocomplete (opposite direction)

After pressing one of them, a pop-up list with the possible suggestions appear:

.. image:: /static/img/screenshots/autocompletion.png
    :class: small-screenshot
    :target: /static/img/screenshots/autocompletion.png

Repeated key presses of `Tab` or `Shift-Tab` allow you to move in the list of
suggestions in a direction or the other. To accept a suggestion just keep typing
normally.

The behavior of `Tab` is contextual in Vem. If you're at the beginning of a line
or after white space, it will insert a tab character or spaces (depending on
how the editor is configured); however, after non white space, it will
autocomplete the current typed text. It can happen that you may want to insert a
tab character or a series of spaces using the `Tab` key just after some text. In
that case, you can use `Ctrl-]` to always inserts tabs or spaces.

.. Admonition:: Programming language aware autocompletion

    Out of the box, the default autocompletion of the editor is lexical. That
    means that you won't get suggestions based on the constructs of your
    programming language. For example, if you type ``myobj.`` you won't get a
    list of methods and attributes of that object. To get this kind of
    autocompletion check `Autocompletion </configuration.html#autocompletion>`_
    in the Configuration section of the documentation.


Cloning the line above/below
----------------------------

You can also insert the character that is immediately above or below the cursor
with:

    :`Ctrl-y`: Insert character above the cursor
    :`Ctrl-n`: Insert character below the cursor

.. parsed-literal::
    :class: terminal

    #include "builtin.h"
    #|
    \  :y:`↑ Ctrl-y will insert an 'i' here`

Inserting Unicode characters
----------------------------

To insert an Unicode character that can't normally be entered with a normal
keyboard, you can use:

    :`Ctrl-d`: Insert Unicode character (*digraph*)

The cursor will change to a ``?`` sign and the editor will wait for a sequence
of two letters or symbols that define the character you want to insert. For
example, ``Co`` will produce ``©`` and ``a*`` will produce ``α``.

.. parsed-literal::
    :class: terminal

    My project :g:`?` 2020 Me
    \            :y:`↑ After Ctrl-d, typing 'Co' will insert ©`

The extended characters that you can insert by using two ASCII ones are known as
*digraphs* in Vim. You can get the full list of available ones with::

    :digraphs!

The output is similar to this::

    Ob ∘  8728   Sb ∙  8729   RT √  8730   0( ∝  8733   00 ∞

There are 3 columns per character:

    * The first one shows the two characters that you have to enter to obtain
      the Unicode one.
    * The Second one is the character itself
    * And the third one is the Unicode number of the character

Toggle 'paste' mode
-------------------

If you are using the terminal and paste text using the terminal's paste
functionality while in insert mode —as opposed to using the `p` paste action in
normal mode—, then you may end up with the pasted text showing a staircase
effect:

.. parsed-literal::
   :class: terminal

   def dotted_netmask(mask):
       """Converts mask from /xx format to xxx.xxx.xxx.xxx

           Example: if mask is 24 function returns 255.255.255.0

               :rtype: str
                   """
                       bits = 0xffffffff ^ (1 << 32 - mask) - 1
                           return socket.inet_ntoa(struct.pack('>I', bits))

The reasons why this happens are explained in `Pasting in terminal
</docs/clipboard.hml#pasting-in-terminal>`_ in detail, but if you just want to
avoid it from happening, you can use:

    :`Ctrl-^` or `Ctrl-6`: Toggle paste mode

Since `Ctrl-^` may be very difficult/impossible to type in some keyboard
layouts, use `Ctrl-6` in those cases.

If you toggle paste mode while in insert mode —you can also toggle it in normal
mode—, the status line will display the new mode as ``Insert (paste)``. Some of
the insert mode functionality will be then turned off and you'll be able to
paste using the terminal clipboard without the staircase effect. Once finished
switch the paste mode off by pressing ``Ctrl-^`` (or ``Ctrl-6``).

Inserting non-printable characters
----------------------------------

You can insert non-printable ASCII characters in a file with:

    :`Ctrl-v`: insert ASCII control character

The cursor will change to ``^`` and the editor will wait for input from the
keyboard. Usually, non-printable characters are entered with `Ctrl` `key`
combinations and are represented in the editor in a different color than normal
text as a caret and a letter/symbol ``^X``.

Many ASCII control characters are not in use anymore, however, there are some
that are still relevant:

* Carriage Return (``CR``): ``^M``
* Line Feed (``LF``): ``^J``
* Null Character (``NUL``): ``^@``
* Escape (``Esc``): ``^[``

.. Note:: If you open a document and see some ``^M`` characters at the end of
   some lines, that most likely means that the file contains a mix of
   DOS/Windows (``CRLF``) and Unix (``LF``) line endings. Check the `docs on
   line endings </configuration.html#default-line-endings>`_ in the
   Configuration section to get more information on how to fix them.

.. Note:: If you're using spaces instead of tabs in your code, you can use
   `Ctrl-v` `Tab` to enter an actual tab character (``^I``) in your file.

.. container:: browsing-links

    « `Surrounding Pairs </docs/users-guide/surrounding-pairs.html>`_

    |

    `Command-line Mode </docs/users-guide/command-line-mode.html>`_ »

