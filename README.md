# Coding Challenge

This repository contains a coding challenge that involves working with variables, functions, and conditional statements in JavaScript.

## Overview

The code provided consists of several variables and functions that interact with each other based on certain conditions. The main objective is to understand how the code works and what output it produces.

### Variables

- `state`: A variable that holds a string representing the current state of the application. Initially set to `"idle"`.
- `user`: A variable that holds a string representing the current user. Initially set to `null`.
- `calculated`: A variable that holds a numeric value. Initially set to `"2"` (as a string).

### Functions

1. `logCalc()`: This function handles the calculation of the `calculated` variable. It first checks if `calculated` is a string, and if so, converts it to a number using `parseInt`. Then, it increments the value of `calculated` by 1 and returns the new value.

2. `calcUser()`: This function calls `logCalc()` to update the `calculated` value. It then checks if `calculated` is greater than 2 and, if so, sets `user` to `"John"` and `state` to `"requesting"`. If `calculated` is greater than 3, it sets `state` to `"idle"`.

3. `checkUser()`: This function checks if `user` is not `null` and `state` is `"requesting"`. If both conditions are true, it logs a message to the console with the current user and the value stored in `calculated`.
