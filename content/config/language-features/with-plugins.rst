
.. role:: key
.. default-role:: key

.. terminal colors
.. role:: w
.. role:: wi
.. role:: g
.. role:: gi
.. role:: y
.. role:: yi

Language features with plugins
==============================

While `Language Servers
</config/language-features/with-language-servers.html>`__ offer an one-solution
for most language dependent features, you may prefer to install independent
plugins for each feature you want to support. This may be more configuration
work depending on the number of features that you want to have, but also gives
you more flexibility in choosing specific plugins for each need.

Indentation per filetype
------------------------

By default, Vem has ``autoindent`` enabled. That means that every time you press
enter, the new line will automatically have the same indent as the previous one:

.. parsed-literal::
    :class: terminal

    \ This is line 1
    \   This is line 2
    \   |
    \   :y:`↑ next line has the same indent as line 2 after pressing Enter on it`

The advantage of ``autoindent`` is that it works for any filetype and
programming language and that it is predictable and intuitive.

However, there are also plugins for specific filetypes that allow you to have
new line indents calculated depending on your programming language. So, every
time that you press `Enter` the indent of the new line will change depending on
whether you're writing a new class declaration a loop or a conditional statement
for example.

Vim includes indentation information for many filetypes out of the box, but if
your programming language is not included you should be able to find a plugin
with this kind of information online. To enable this feature, add
the following line to your `vemrc </config/vemrc.html>`__ file::

    filetype indent on

.. admonition:: Warning about filetype indentation

   As a general rule of thumb, you may want to check *smart* features before
   leaving them enabled, as they can be as useful as they can get in your way.
   In the case of filetype indentation, the indents in new lines become less
   predictable and you may find yourself correcting more of the automatically
   inserted indents than being helped by them. This can also depend on the
   filetype plugin that you're using (either the one included in Vim or an
   external one), so trying a couple of options and compare with the default
   behavior can be a good option before changing your configuration.

   To deactivate this feature, in case you have it enabled without having
   purposedly activated it (like when it is activated by a plugin), add the
   following line to the end of your `vemrc </config/vemrc.html>`__ file::

       filetype indent off

   If you want to disable autoindentation too, you can also add::

       set noautoindent

Linting
-------

You can show live diagnostics of your code using an external plugin. These
diagnostics typically include things like highlighting syntax errors, unused
variable names or code that does not adhere to the standard coding style rules:

.. image:: /static/img/plugins/ale.png
    :class: screenshot
    :target: /static/img/plugins/ale.png

You need two things to enable live diagnostics as you type:

* A linting tool for your programming language (usually an executable file)

* A Vim linting plugin to show the results of your linting tool in the editor

A very popular plugin to do this is:

* `ALE: Asynchronous Lint Engine </plugins/popular/ale.html>`__

This plugin automatically recognizes what type of file you're editing and tries
to find the most commonly used linters for it and run them to show the
diagnostics. One advantage of its advantages is that it does that asynchronously
so you won't notice the editor freezing as it runs the linting program in the
background. It also allows you to specify your linter program in case it is not
in its default list.

.. Note:: ALE supports connecting to both linters and language servers. That is
   why it is also listed in the language server plugins at `this section
   </config/language-features/with-language-servers.html>`__. However, you can
   also use it just for its linting support.

Other plugins similar to ALE are:

* `Neomake <https://github.com/neomake/neomake>`__
* `Syntastic <https://github.com/vim-syntastic/syntastic>`__

Autocompletion
--------------

By default, Vem autocompletes with `Tab` and `Shift-Tab`. This autocompletion is
lexical, which mean that Vem doesn't understand the structure of your program
and just autocompletes using other terms that appear in any of your open files.
The advantages of this kind of completion are that it is very fast and works for
any type of file. It also works surprisingly well for typing fast since the
completions are offered according to how close they are to the current insertion
point, which means that most recent identifiers are offered first.

This kind of completion doesn't work for introspection of your programming
constructs. For example, if you want to type a dot ``.`` and see all the
attributes and member functions of an object, then you need a different kind of
completion. Two very popular plugins for this are:

* `YouCompleteMe <https://github.com/ycm-core/YouCompleteMe>`__
* `deoplete.nvim <https://github.com/Shougo/deoplete.nvim>`__

Although there are plenty more. How these plugins work is very similar to
setting a plugin for a `language server
</config/language-features/with-language-servers.html>`__ with an external
process that inspects your project and provides the suggestions. You can
therefore consider that option then for autocompletion then.

Code browsing
-------------

You can get the **Go to definition** feature for the identifiers in your
code by making use of the `tag </docs/users-guide/tags.html>`__ support that
the editor provides.

To make it work, you need:

* A program that can find where all the identifiers of your project are defined
  and generate a **tag file** (which is a list of all their locations).
  Currently, the most popular program to do this is `Universal Ctags
  <https://github.com/universal-ctags/ctags>`__, which also provides support for
  most common programming languages.

* A plugin that asynchronously updates the tag file of your project as you edit
  its files. A very popular plugin that does that is `vim-gutentags
  </plugins/popular/vim-gutentags.html>`__.

Once you have `Universal Ctags <https://github.com/universal-ctags/ctags>`__ and
`vim-gutentags </plugins/popular/vim-gutentags.html>`__ installed, you can use:

    :`Space` `o`: jump to the definition of the identifier under cursor

    :`Space` `i`: go back from previous tag jump

as explained in the `Tags </docs/users-guide/tags.html>`__ section.

.. admonition:: Manual tags file generation

   The setup described here is intended for you not having to deal manually with
   tag files yourself (they will be asynchronously created in the background
   for you). However, you can also generate tag files manually using either
   Universal Ctags or any other ctag program and then specify the editor the
   location of those files with the ``tags`` option.

   Check::

        :help 'tags'

   for more information.

Autoformat
----------

Most formatting tools (such as ``gofmt`` for Go, ``eslint`` for JavaScript,
``rustfmt`` for Rust, ``Black`` for Python, etc...) have plugins that integrate
them into Vim. In most cases, they define a new ex-command that can be run in
the command line and that formats either the entire file or the contents of a
visual selection. You can check if there's a Vim plugin available for your
formatter and decide if it fits your need.

Autoformatting manual configuration
"""""""""""""""""""""""""""""""""""

Alternatively, you can configure the editor to use any external program to
format your code. To do so, you have to set the ``equalprg`` option for the
corresponding filetype.

For example, you can use the popular ``jq`` command line tool to format JSON. To
do so, you can create a file at ``~/.config/vem/ftplugin/json.vim`` with the
following contents::

    setlocal equalprg=jq\ .

Once set, this option will make the `=` key to execute ``jq .`` passing the
contents of the current file as ``stdin`` and replacing them with the result
(``stdout``) of the execution. You can also use `=` with a visual selection to
apply the formatting to a smaller area (however, make sure that the selected
text is a valid JSON construct by itself or the external program will fail).

In general, to use an external tool to autoformat your code:

* Make sure the tool is installed and available in the ``PATH``.

* Make sure the tool can take text via ``stdin`` and output the result to
  ``stdout`` (most of them do, but some may require passing a specific
  parameter to enable it).

* Set the ``equalprg`` option in your `file type specific configuration file
  </config/configuration-per-filetype.html>`__ using the full command line
  expression that allows the tool to work with ``stdin`` and ``stdout``.
  *Note: when setting the option escape all spaces with a backslash*.

* Remember that changes to a file type configuration file won't affect to
  files that are already open in the editor unless you close/open them again
  or reload the configuration with ``:source``.

.. admonition:: ``equalprg`` vs ``formatprg``

   Vim provides two options to pass external formatting programs:

   * ``equalprg``, which is linked to the `=` key in Vem

   * ``formatprg``, which is linked to the `|` key in Vem

   In Vim the difference between both of them is rather fuzzy, but,
   traditionally, ``equalprg`` is used to fix the indent of a piece of code and
   ``formatprg`` is linked to a more generic formatting tool. Vem however, leans
   to use ``equalprg`` for code and ``formatprg`` for text. In any case, you can
   configure either as it best fits you. To use them, just remember the keys
   both options are associated to.

Running an autoformatting tool without configuration
""""""""""""""""""""""""""""""""""""""""""""""""""""

You can also run an autoformatter without having to set any configuration at
all. You can do so from the editor command line. For example, in the case of
``jq``, you can execute::

    :%!jq '.'

and that will filter the current file through the ``jq`` executable.

More in detail, the different parts of that command are:

* ``%``: apply to the complete, current buffer

* ``!``: execute a shell command

* ``jq '.'``: external command to execute

Like in the case of ``equalprg``, the external command has to accept the
contents of the file from ``stdin`` and output the result to ``stdout``.

Compilation
-----------

Many plugins for programming languages define their own commands to build your
programs from inside the editor. For example, the `vim-go
<https://github.com/fatih/vim-go.git>`__ plugin defines a ``:GoBuild`` command
and `rust.vim <https://github.com/rust-lang/rust.vim>`__ defines ``:CBuild``.

Typically, once the build command is run, the errors are captured and you can
browse through them using the `Quickfix commands
</docs/users-guide/quickfix.html>`__.

Manually configuring compilation configuration
""""""""""""""""""""""""""""""""""""""""""""""

While installing a plugin may be the easier way of get compilation set up inside
the editor, you can configure it manually too. The default command to build your
program in Vim is::

    :make

As other actions described in this section, ``:make`` always relies in an
external program to do its job, and also, despite its name, it can call any
build system and not only ``make``.

To configure which external program is used:

* Set the ``makeprg`` option for the appropriate filetype to the command line
  that has to be executed. For example, if your filetype were ``foo``, you could add
  a line like the following to ``~/.config/vem/ftplugin/foo.vim``::

    setlocal makeprg=my-foo-compiler\ %

  Note that we set up the option per filetype so the value of ``makeprg``
  doesn't change for other types. The spaces in the value of the option have to
  be escaped with backslash ``\\`` and special characters, like ``%`` that
  represents the current file, can be used. Check ``:help 'makeprg'`` for more
  information.

* Set the ``errorformat`` option to be able to capture the errors generated by
  the compiler. The value of this option is just the pattern that has to be used
  to parse each error message. For example, if your error message is something
  like::

    my-file.foo:213:Unknown identifier

  where the filename, the line number and the error message are separated by
  ``:``, then you can use an ``errorformat`` like::

    setlocal errorformat=%f:%l:%m

  To know more details about the syntax of this option check ``:help
  errorformat``.

.. admonition:: Compiling C and C++

   If you are compiling C or C++ using the GNU tools, then you don't need to
   configure neither ``makeprg`` nor ``errorformat`` since their default value
   is set for those.

Syntax highlighting
-------------------

Vim defines syntax highlighting for an extraordinarily large number of
filetypes. However, there are plugins available for certain filetypes that
either improve the default highlighting of the editor or include some extension.
For example, for JavaScript, you may find plugins like `this one
<https://github.com/pangloss/vim-javascript>`__ to improve the default
highlighting or like `this one <https://github.com/MaxMEllon/vim-jsx-pretty>`__ to
add specific highlighting to React's ``jsx`` files.

