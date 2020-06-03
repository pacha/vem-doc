
.. role:: key
.. default-role:: key

Comments
========

Vem provides comment/uncomment support for most programming languages thanks to
the `NERD Commenter <https://github.com/scrooloose/nerdcommenter>`_ plugin.

To comment and uncomment pieces of code, use:

    :`v`: toggle comment

Your file type will be detected and the correct commenting symbols applied. This
is a toggling action which means that pressing `v` once will comment out code
and pressing it again will uncomment it.

If there is an active selection, all lines of the selection will be commented
out, otherwise only the current line will —which is very practical for quickly
comment/uncomment single lines.

For example, in C++, pressing `v` with this piece of code selected will
produce:

.. parsed-literal::
    :class: terminal

    // idVec3 idPlayer::colorBarTable[ 5 ] = {
    //     idVec3( 0.25f, 0.25f, 0.25f ),
    //     idVec3( 1.00f, 0.00f, 0.00f ),
    //     idVec3( 0.00f, 0.80f, 0.10f ),
    //     idVec3( 0.20f, 0.50f, 0.80f ),
    //     idVec3( 1.00f, 0.80f, 0.10f )
    // };

.. Note:: `v` only takes into account the first line of the selection to decide
   if it needs to comment or uncomment the rest of them. That means that when
   you want to uncomment several lines that are mixed together with uncommented
   ones, make sure that the first line of your selection is one of the commented
   ones. 

Block comments
--------------

By default, Vem uses line comments whenever possible, but you can instruct it to
mark a block of code with block comment symbols using:

    :`V`: comment code using block comment symbols (eg. ``/* */`` ``<!-- -->``)

For example, commenting code out in C++ would result in:

.. parsed-literal::
    :class: terminal

    /* idVec3 idPlayer::colorBarTable[ 5 ] = {
        idVec3( 0.25f, 0.25f, 0.25f ),
        idVec3( 1.00f, 0.00f, 0.00f ),
        idVec3( 0.00f, 0.80f, 0.10f ),
        idVec3( 0.20f, 0.50f, 0.80f ),
        idVec3( 1.00f, 0.80f, 0.10f )
    }; \*/

Note that to uncomment a piece of code surrounded by block comment symbols you
need to use `v`. `V` doesn't have the same toggling behaviour as `v` because it
can be used to nest block comments.

