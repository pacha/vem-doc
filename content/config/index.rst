
Configuration
=============

Vem's main configuration file is located at ``~/.config/vem/vemrc``. (The actual
path of the ``~/.config`` directory may depend on the value of the
``$XDG_CONFIG_HOME`` environment variable in your system).

This is a minimal content example that you can use as base for your own
configuration::

    # Set your keyboard layout. Values: 'qwerty', 'qwertz', 'azerty'
    let g:vem_layout = 'qwerty'

    # Set intentation
    # Use 'expandtab' for spaces, 'noexpandtab' for tabs
    # You normaly want to set the same indentation size in all options below
    set expandtab
    set tabstop=4
    set softtabstop=4
    set shiftwidth=4

    # Display tab characters and trailing whitespace in lines
    set listchars=tab:»\ ,trail:·
    set list

    # Change cursor shape depending on the active mode
    # (Uncomment only for Vim in modern terminals -Neovim supports it natively)
    # let &t_EI = "\e[1 q"
    # let &t_SI = "\e[5 q"

    # Use 24-bit colors (uncomment only in modern terminals)
    # set termguicolors

    # Display cursive fonts (uncomment only in modern terminals)
    # let g:vem_colors_italic = 1

    # Use Unicode characters (uncomment only in terminals with Unicode support)
    # let g:vem_tabline_left_arrow = '◀'
    # let g:vem_tabline_right_arrow = '▶'

Feel free to modify the values to fit them to your needs and uncomment the
options that you want to enable. Using the sidebar links, you can get more
information about these options as well as about many others.

Apart from the ones listed in this section of the documentation you can use
any of the extensive list of Vim's options to configure the editor. Check ``:help
options`` for a complete list.

.. Note:: By default, Vem tries to set a starting configuration that is more
   intuitive and less surprising than Vim's default one. However, other than
   that, there's nothing special about setting options in Vem. You can just use
   any option available in Vim to configure it.

