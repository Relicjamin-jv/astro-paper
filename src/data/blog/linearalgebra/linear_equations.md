---
title: Linear Algebra - Linear Equations (01)
author: Collin Campbell
pubDatetime: 2025-07-05
slug: linearalgebra-linear-equations
featured: false
draft: false
hideEditPost: true
tags:
  - linearalgebra
description: Linear algebra equations.
---

### Introduction

A _linear equation_ is represented by $ x_1 ... x_n $ and $ c_1 ... c_n $ where
x variables are unknown, and c variables are usually known beforehand.

$ c_1x_1 + ... + c_nx_n $

Anything outside the set of equations that fall outside the given equation is
not a linear equation.

$ x_1x_2 = 0 $ is not a linear equation due to the x variables being multiply together.
$ \sqrt{x} = 0 $ is not linear equation due to the square root.

The set of solutions (as in the values for $ x_1 ... x_n $) are called a solution set.
And if two solutions sets are the same for two linear systems they are called equivalent.

Multiple linear equations is a collective of one or more linear equations.

A system of two linear equations has no solution, exactly one solution, or multiple solutions.

A system of linear equations is considered _consistent_ if it has one or more solutions,
otherwise it is considered _inconsistent_.

### Matrix Notation

All information for a given linear system can be transcribed into a matrix.

_linear system_:

$
\begin{aligned}
2x_1 + 3x_2 - x_3 &= 10 \\
x_1 - x_2 + 2x_3 &= 6 \\
3x_1 + 2x_2 - 4x_3 &= 13
\end{aligned}
$

_coefficient matrix representation_:

$
\left[ \begin{array}{rrrr}
2 & 3 & 1 \\
1 & 1 & 2 \\
3 & 2 & 4 \\
\end{array}\right]
$

_augmented matrix representation (coefficient matrix with constants from right
hand side of the equations)_:

$
\left[ \begin{array}{rrrr}
2 & 3 & 1 & 10 \\
1 & 1 & 2 & 6 \\
3 & 2 & 4 & 13\\
\end{array}\right]
$

Matrix sizes are denoted by _R x C_, where R represents the number of rows, and
C represents the number of columns.
