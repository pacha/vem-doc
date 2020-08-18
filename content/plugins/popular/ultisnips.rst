
.. role:: key
.. default-role:: key

UltiSnips
=========

:Link: https://github.com/SirVer/ultisnips
:Author: Holger Rapp (SirVer)

UltiSnips is a snippet manager for Vim. Snippets are short idioms of code that
are frequently reused. For example, in a C file, you can type ``for``, press a
designed key and have the loop automatically expanded for you::

    for ({} = 0; {} < {}; {}) {
        {}
    }

You can then jump through the placeholders replacing them by their correct
values. (Placeholders may have default values or be automatically pre-populated
by the values you set in previous ones).

Notes
-----

* You can create your own snippets or use a collection of already defined ones.
  The most popular collection for UltiSnips is
  https://github.com/honza/vim-snippets, which can be installed like an
  additional plugin. (UltiSnips doesn't provide snippets by its own).

* UltiSnips requires Python 3 to be present in the system and the editor to have
  support for it (ie. Vim compiled with the python3 feature or Neovim with
  the Python ``neovim`` package installed).

Configuration
-------------

The default key to trigger a snippet in UltiSnips is `Tab` which conflicts with
Vem's autocompletion action. To solve this problem, just remap the snippet
expansion key to `Ctrl-Space`::

    " In the following mappings you may need to use <nul>, <c-space> or <C-@>
    " to refer to Ctrl-Space depending on your terminal.

    " Mapping to expand snipped
    let g:UltiSnipsExpandTrigger="<nul>"

    " Mapping to jump to next placeholder
    let g:UltiSnipsJumpForwardTrigger="<nul>"

    " Mapping to jump to previous placeholder
    let g:UltiSnipsJumpBackwardTrigger="<C-b>"

UltiSnips also provides a command, ``:UltiSnipsEdit``, to edit the snippet file
of the filetype of the current buffer. If you just want to use your own authored
snippets, then instruct UltiSnips to use the directory that contains them using
an absolute path. For example::

    let g:UltiSnipsSnippetDirectories=[$HOME.'/.config/vem/UltiSnips']

Note that the variable has to be an array of one single element.

If you want to use more than one snippet directory, then you can pass a list of
relative paths::

    let g:UltiSnipsSnippetDirectories=["UltiSnips", "mycoolsnippets"]

Note that, in this case, you can't provide absolute paths and also you need to
use ``:UltiSnipsEdit!`` (with an exclamation mark) to be able to choose which
file should be edited from a list).

.. Note:: In addition to the ``:UltiSnipsEdit!`` you can just edit your snippet
   files directly in their directories too.

