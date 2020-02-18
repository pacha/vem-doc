
.. role:: key
.. default-role:: key

.. terminal colors
.. role:: g
.. role:: gi
.. role:: b
.. role:: bi

Clipboard
=========

The key commands to copy/cut/delete text are:

    :`e`: copy current line or selection

    :`d`: cut current line or selection

    :`c`: delete current line or selection

Which are easy to remember because they are placed together vertically in the
keyboard:

.. raw:: html

    <div class="keyboard-excerpt">
        <div class="row row-top">
            <div class="key faded"></div>
            <div class="key faded"></div>
            <div class="key">E</div>
            <div class="key faded"></div>
            <div class="key faded"></div>
            <div class="key faded"><div class="fade fade-right"></div></div>
        </div>
        <div class="row row-middle">
            <div class="key faded"></div>
            <div class="key faded"></div>
            <div class="key">D</div>
            <div class="key faded"></div>
            <div class="key faded"></div>
            <div class="key faded"><div class="fade fade-right"></div></div>
        </div>
        <div class="row row-bottom">
            <div class="key faded"></div>
            <div class="key faded"></div>
            <div class="key">C</div>
            <div class="key faded"></div>
            <div class="key faded"></div>
            <div class="key faded"><div class="fade fade-right"></div></div>
        </div>
    </div>

If you don't have text selected, the action is performed on the current line.
That is very useful to copy or move independent lines.

Once you have text in the clipboard, you can paste it with:

    :`p`: paste

In Vem you have two clipboards. To access the second one, use the uppercase
version of the above actions:

    :`E`: copy current line or selection (secondary clipboard)

    :`D`: cut current line or selection (secondary clipboard)

    :`P`: paste (secondary clipboard)

The primary clipboard is the one connected to the system clipboard, while the
secondary one can help you when you don't want to lose the contents of the
primary one but need to copy or move additional text.


Directional paste
-----------------

When you paste, you'll notice that the text is added after the current position
of the cursor. For example, if ``foo`` is in the clipboard:

.. parsed-literal::
    :class: terminal terminal-white

    :b:`# Characterwise paste:`

    bar\ :bi:`(`\ )     :b:`→`      bar(fo\ :bi:`o`\)

    :b:`# Linewise paste:`

    :bi:`b`\ ar       :b:`→`      :bi:`b`\ ar
    baz              foo
                     baz

This is different from what you can find in other editors, which paste text
before the cursor, however, it is very easy to get used to it. In addition, you
can also paste before the cursor position using:

    :`Ctrl-p` `h`: paste to the left of the cursor (characterwise)
    :`Ctrl-p` `k`: paste above the cursor (linewise)

You can also paste at the beginning and the end of a line without having to move
the cursor to that position:

.. container:: tabs key-summary

    .. container:: tab qwerty 

        :`Ctrl-p` `,`: paste at the beginning of the line (linewise)
        :`Ctrl-p` `.`: paste at the end of the line (linewise)

    .. container:: tab qwertz

        :`Ctrl-p` `,`: paste at the beginning of the line (linewise)
        :`Ctrl-p` `.`: paste at the end of the line (linewise)

    .. container:: tab azerty

        :`Ctrl-p` `,`: paste at the beginning of the line (linewise)
        :`Ctrl-p` `;`: paste at the end of the line (linewise)

As it happens with the `,` movement, here the beginning of the line means the
first non-blank character on that line.


Pasting different selection types
---------------------------------

As shown in the `Selecting text </doc/selecting.html>`_ section, there are three
kinds of visual selections:

    * **Characterwise**: the common one in other text editors, for an arbitrary
      character to another one.

    * **Linewise**: full lines of text

    * **Blockwise**: an arbitrary rectangle of text

The type of selection is taken into consideration when pasting. Characterwise
selections are pasted like in most editors, inserting the text in the current
line. For linewise selections, text is pasted inserting the text between the
current and the next line (without modifying them):

.. parsed-literal::
    :class: terminal terminal-white

    111             111             111
    :gi:`222`   :b:`Press d`   :bi:`4`\ 44   :b:`Press p`   :bi:`4`\ 44
    :bi:`3`\ :gi:`33`      :b:`→`      555      :b:`→`      222
    444                             333
    555                             555

Blockwise selections are pasted by displacing all characters around the block
that is being pasted, as you could expect.


Paste while indenting
---------------------

Sometimes you may want to paste text keeping the same level of indentation as the
current line. That is useful when you move pieces of code to a inner or outer
level of indentation. To paste and indent at the same time, use:

    :`Ctrl-p` `Space`: paste with the same level of indentation as the current line


.. admonition:: Using the system clipboard

    Vem uses the system clipboard by default to allow you to copy and paste
    from/to different applications. However, for this to work, the Vim or Neovim
    instance that Vem uses to run needs to provide support for it.

    If there's no system clipboard support available, you can still
    copy/cut/paste text inside Vem but you won't be able to share it with other
    applications.

    To check if your Vim/Neovim installation supports using the system clipboard
    follow the following instructions:

    **Vim**

    Vim only provides system clipboard support when it has been compiled with
    the ``clipboard`` feature enabled. You can check if that's the case by
    running the following command in your terminal::

        vim --version

    A ``+`` or a ``-`` sign in front of ``clipboard`` indicates if the feature
    is enabled or not respectively.

    Most platforms provide installable packages that include ``clipboard``
    support. Check the `Requirements </download.html#requirements>`_ section of
    the download page to get a description of how to get them.

    **Neovim**

    Neovim handles the system clipboard in a different way than Vim. To verify
    if support for it is available, execute the following command inside the
    editor::

        :checkhealth

    If you don't see ``OK`` in the ``## Clipboard`` section of the report, then
    it means that your system is missing a command line clipboard tool that
    Neovim can use to communicate with the system clipboard:

        * ``xsel`` or ``xclip`` in the case of Linux

        * ``pbcopy`` and ``pbpaste`` in the case of MacOS

    Check the `Requirements </download.html#requirements>`_ section of the
    download page for more details.


Pasting in terminal
-------------------

If you are running Vem in a terminal and paste text using the paste command of
the terminal itself (eg. typically using ``Command-v`` or ``Ctrl-Shift-v``)
while in insert mode, then, instead of getting something like this:

.. parsed-literal::
   :class: terminal

   def dotted_netmask(mask):
       """Converts mask from /xx format to xxx.xxx.xxx.xxx

       Example: if mask is 24 function returns 255.255.255.0

       :rtype: str
       """
       bits = 0xffffffff ^ (1 << 32 - mask) - 1
       return socket.inet_ntoa(struct.pack('>I', bits))

you may end up with the text wrongly formatted and showing some *staircase
effect*:

.. parsed-literal::
   :class: terminal

   def dotted_netmask(mask):
       """Converts mask from /xx format to xxx.xxx.xxx.xxx

           Example: if mask is 24 function returns 255.255.255.0

               :rtype: str
                   """
                       bits = 0xffffffff ^ (1 << 32 - mask) - 1
                           return socket.inet_ntoa(struct.pack('>I', bits))

This happens because, in terminal, Vim is unable to differentiate when
text is entered manually or pasted. Consequently, it will autoformat some
things according to the stream of characters that it receives (like for
example auto indenting after every newline).

To avoid this from happening, just enter and exit ``paste`` mode before and
after pasting using the terminal shortcut:

:`Ctrl-^` or `Ctrl-6`: toggle paste mode

When you start paste mode, the status line will display it. And as long as you
remain in paste mode, you'll be able to correctly paste using the terminal
clipboard shortcut. Press `Ctrl-^` or `Ctrl-6` again to exit paste mode so the
editor can format the text correctly when you enter it manually.

.. Note:: Notice that this is important only for terminal Vim (GUI versions are
   not affected) and only for pasting using the terminal clipboard shortcut. If
   your Vim installation supports reading the system clipboard (see above), then
   you can just use Vem's paste command, which will work just fine in all
   situations.

