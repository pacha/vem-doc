
Plugins
=======

Vim has a large number of plugins available. There are plugins for almost
everything: for different filetypes, color schemes, new commands or new
features. Vem is compatible with most of them. The only plugins that may
encounter an incompatibility are those that remap keys that are already mapped
by Vem.

Most well written plugins take a lot of care to not to interfere with key
mappings that the user may have defined. That's why most of them start their key
mappings using the ``<leader>`` key (by default *backslash* ``\`` both in Vim
and Vem). If a plugin defines key mappings starting with ``<leader>``, it should
work in Vem as it does in Vim. However, some plugins don't follow this best
practice. In those cases, they may override a key mapping set up by Vem and then,
some Vem actions can make some actions to get altered or, directly, unreachable.

.. admonition:: A word of caution

    Once they realize the vast amount of plugins that are available, frequently
    new users find very tempting to start installing large amounts of them from
    the beginning. While plugins can be extremely useful, installing many of
    them indiscriminately can drag performance down, cause unexpected behavior
    of the editor and create cross-effects between mutually incompatible
    plugins.

    It is usually a good idea to test any plugin that is installed to see if it
    is really useful and to see if it causes any problem. Also, when evaluating
    a plugin, consider that Vim may already offer a native solution to the
    problem that the plugin solves. Keeping a lean installation of the editor
    can help to keep it snappy and to avoid conflicts.

