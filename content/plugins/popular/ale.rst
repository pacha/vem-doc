
.. role:: key
.. default-role:: key

ALE
===

:Link: https://github.com/dense-analysis/ale
:Author: w0rp

ALE (Asynchronous Lint Engine) is a Vim plugin to asynchronously check syntax
and fix files, with Language Server Protocol (LSP) support.

.. image:: /static/img/plugins/ale.png
    :class: screenshot
    :target: /static/img/plugins/ale.png

Notes
-----

* To use ALE, you have to install your linting tool(s) in your system (eg.
  ``flake8`` for Python, ``golint`` for Go, ``eslint`` for JavaScript...) and
  install the plugin itself. Depending on the filetype that you're editing ALE
  will detect the correct formatter (or several of them if present) and display
  the diagnostics as you work in the file.

* ALE supports most common programming languages and linters, however you can
  also configure it to use a custom one if you need.

* The plugin checks for diagnostics using the linting tool in an asynchronous
  manner, that means that your editor will not freeze from time to time while
  this happens.

Configuration
-------------

ALE doesn't have any incompatibility with Vem, so you can install and
configure it according to the official documentation.

Some of the available configuration options that you can set in your `vemrc
</config/vemrc.html>`__ file are::

    " If you want to use ALE only for linting,
    " you can explicitly disable LSP tools
    let g:ale_disable_lsp = 0

    " Use different highlighting to point out problems
    let g:ale_set_highlights = 1

    " Use the sign column (far left) to point out problems
    let g:ale_set_signs = 1

    " Symbols to use if g:ale_set_signs is enabled
    let g:ale_sign_error = ' X'
    let g:ale_sign_warning = ' !'

