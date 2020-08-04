
Keyboard layout
===============

If you use a keyboard with a layout other than **QWERTY**, like for example
**QWERTZ** (common in German speaking countries) or **AZERTY** (common in French
speaking countries), it is important that you specify it in your `vemrc
</config/vemrc.html>`__ file. This will make keyboard actions to keep the same
spatial distribution across the keyboard even if letters change positions in
your layout with respect to the others.

To set your keyboard layout, add a line like this to your configuration::

    let g:vem_layout = '<layout>'

where ``<layout>`` can be:

    * ``qwerty`` (default)

    * ``qwertz``

    * ``azerty``

Vem's documentation includes layout information for those actions that are
assigned to different keys across them.

.. container:: note

    Setting the layout changes what actions are assigned to some letters,
    however, this doesn't apply to symbols. A given symbol will always perform
    the same action across layouts irrespective of its position.

.. container:: note

    Vem doesn't support **Dvorak** or **Colemak** keyboard layouts currently due
    to their big differences from the layouts mentioned in this section. Their
    key distribution makes many action mappings not very intuitive and in many
    cases directly unfeasible.

