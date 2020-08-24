
Filetype configuration
======================

When you set options in ``vemrc``, those changes generally affect every
document that you open with Vem. However, there may be cases in which you may
want to have different settings for different types of archives. For example,
when you're editing text in Markdown files, you may want to have the spell
checker active and to make the editor breaking your lines automatically when
they reach column 80 (or some other width), but not to do all this for the rest
of files.

To add configuration for a particular file type, add a file with that
configuration to::

    ~/.conf/vem/after/ftplugin/<filetype>.vim

where ``<filetype>`` is the type or file you want it to apply to. In the case of
Markdown, the name of the file would be ``markdown.vim``. Once you add that
file, that configuration will only be loaded for files of that type.

Note that the path contains ``after/``. In most distributions, Vim already
provides a custom configuration for each file type. The ``after/`` directory
instructs Vim to load your configuration after any other global file type
configuration happens so you can override it with your changes. Also note that
the path might not exist and that you may need to create it before adding your
files.

In the Markdown example, we could add the following content to that file::

    setlocal textwidth=80
    setlocal spell

It is important to use ``setlocal`` instead of ``set`` in file type
configuration files so the changes only apply to the file that is being opened
and not to all other files open independently of their type.

Check the next section `Filetype Autodetection </>`__ to know how to find the
names of the supported filetypes and how they are automatically detected.

.. admonition:: Indentation

    One very common use case for custom options per file type is to change the
    indentation size/type. For example, you could have different configurations
    such as 4 spaces for Python files, 2 spaces for CSS files or 8 character
    wide tabs for C++ files.

    In the case of C++, the file to add would be::

        " ~/.conf/vem/after/ftplugin/cpp.vim

        setlocal noexpandtab
        setlocal tabstop=8
        setlocal softtabstop=8
        setlocal shiftwidth=8

    And similar ones for the other file types (see `Indentation
    </config/essentials/indentation.html>`_ for an explanation on these
    options).

    **Automatic indentation per file type**

    Apart from setting specific indent sizes for different file types, you can
    also enable automatic file type indenting. With it, every time you press
    ``Enter``, the newly created line will be indented according to the syntax
    of the programming language. That is, it will use the keywords and the
    symbols of the programming language to determine what should be the most
    likely indentation level for each new line. For example, in languages that
    use curly brackets to delimit blocks (``{``, ``{``), pressing ``Enter``
    after an opening one, will increase the indent of the next line by one
    level.

    Since automatic indenting per file type can be too *smart* and introduce
    indentation when you don't expect or want it, it is disabled by default in
    Vem. To enable it, add this to your ``vemrc`` file::

        filetype indent on

    If it is enabled by some file you're sourcing in ``vemrc`` but you prefer to
    have it disabled, add::

        filetype indent off

    To the end of the file.

Filetype Autodetection
----------------------

When the editor opens a file, it will try to detect its filetype using it file
extension or, in particular cases, inspecting its contents.

To know which filetype was assigned to a file once loaded, use::

    :set ft?

For example, for a Go file, you'll get::

    filetype=go

Sometimes the filetype of the file may not be correctly detected or not detected
at all. This can happen with file extensions that less common or ambiguous.

In those cases, you can set the filetype manually::

    :set ft=<filetype-name>

Or create a file ``.config/vem/ftdetect/<filetype-name>.vim`` with the following
contents::

    au BufRead,BufNewFile *.<filetype-extension> set ft=<filetype-name>

If you set the filetype manually, the change will only apply to that open file.
If you set the ``ftdetect`` file, the change will apply to any file with that
extension in the future (remember to restart the editor after adding the file
for this detection to work).

To know which filetype names are available in the system type::

    :setfiletype <press-tab-to-autocomplete>

You can also autocomplete providing the first letters of the filetype to know if
the one you are looking for is available.

