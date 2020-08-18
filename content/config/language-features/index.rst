
Language features
=================

A great deal of actions that you can perform with the editor are independent of
the programming language you are using. Movements or text transformations work
the same no matter if you're working on a C, JavaScript or Rust file. There are,
however, some actions that you could want to perform and that are specific to
the type of file you're editing. For example, *Go to definition*, *Show
function/method signature* or *Display syntax errors* are common features
provided by code editing tools that require the editor to understand the syntax
of the language that you're using.

While Vem only supports programming language agnostic features by default, you
can configure it to provide support for any programming language using Vim's
multiple extensibility options. There are two major ways of doing this:

* `Using language servers
  </config/language-features/with-language-servers.html>`__: language servers are
  external processes that are able to understand your programming language and
  provide the editor with information about how to perform certain actions. They
  are one-stop solution as they typically support most of the language specific
  features once they are configured to be used. Language servers have been
  popularized by Visual Code as a way of sharing language specific insights
  between different editors.

* `Using plugins </config/language-features/with-plugins.html>`__: while a
  language server is usually integrated into the editor using a plugin, there's
  also the possibility of installing independent plugins for each feature. The
  advantage of this approach is that you have more control on which features you
  enable and also on which specific plugins you want to use.

Which one should you use depends on several factors, for example there are
more complete/better language servers for some languages than for others, and
you also may want to have a lighter configuration for your editor than a heavier
one. In general, if you're looking for a more IDE/full-featured experience and
there are good language servers for your programming language, then using them
may be the best option. If you want to keep the editor small and just need a
couple of features to make your editing more comfortable, you may then opt for
just adding one or two plugins to cover those cases. In any case, there's no
restriction on combining both if that fits your needs.

.. admonition:: A word of caution

    Plugins for language specific features may look very appealing but be wary
    —like with any other kind of plugin— of installing plenty of them upfront.
    There are cases where they are genuinely convenient and solve a real need,
    however, installing them indiscriminately can lead to slowing down the
    system and the appearance of unwanted side effects. The standard actions of
    the editor, while pretty simple in nature, are surprisingly good at covering
    most editing needs. So, as a general rule, you may want to double check if
    you really need a plugin before installing it and to opt to have less
    plugins that you actually use than plenty of them that you don't.

