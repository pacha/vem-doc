
Color schemes
=============

You can use any Vim color scheme in Vem. To install a new color scheme follow
two steps:

**Copy the color scheme to the Vem configuration directory:**

    * If the color scheme is a single ``<color-scheme>.vim`` file, then you need to
      copy it to ``~/.config/vem/colors/``.

    * If the color scheme is distributed as a plugin (for example, if it is a
      repository containing a ``colors/`` directory inside), then you need to
      install it as any other `plugin </plugins/>`_ by copying it to
      ``~/.config/vem/pack/plugins/start/``.

**Activate it in your vemrc file:**

After, the color scheme is added to your configuration, include the following
line to your ``vemrc`` file::

    colorscheme <color-scheme>

where ``<color-scheme>`` is the name of the file of the color scheme without the
``.vim`` extension.

