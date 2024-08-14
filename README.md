# BASIC

## Exercice 1

A command that displays “Hello Gaia”

## Exercice 2

A FUNCTION that when called displays “Hello Gaia” (your code should contain both the function and your calling of it)

## Exercice 3

A function that takes 1 string parameter and returns ⁠ Hello ⁠ and then the value of the parameter.

Exemple: if the function is called ⁠ hello ⁠, running ⁠ hello(“Boris”) ⁠ would return ⁠ hello Boris ⁠ (with a space before)

## Exercice 4

A function that takes 2 numbers and do the sum of them and display the result in the console

Exemple: if the function is called ⁠ sum ⁠, running ⁠ sum(1, 2) ⁠ would print ⁠ 1 + 2 = 3 ⁠ in the console

## Exercice 5

A function that takes 2 numbers and that RETURNS the sum of these 2 numbers. Then the code calling the function should display the result (slight variation from ex. 4)

Exemple: if the function is called ⁠ sum ⁠, running ⁠ sum(1,2) ⁠ would RETURN 3 and the calling code would print ⁠ 1 + 2 = 3 ⁠

## Exercice 6 First steps into arrays and loops

Write a function that takes an array of numbers and returns the sum of its elements.

Call that function ⁠ sum ⁠ and call it with a few arrays of different length such as
⁠ sum([1,2]) ⁠
⁠ sum([1,2,3]) ⁠
⁠ sum([1,2,3,4]) ⁠

Your function should work with array of any size

## Exercice 7 First steps into error handling

Using the same ⁠ sum() ⁠ function a#s exercice 6, add the below calls and find a way to make your code return -1

⁠ sum(null) ⁠ => should return -1
⁠ sum(undefined) ⁠ => should return -1
⁠ sum([]) ⁠ => should return -1

# BOWLING KATAS

# Bowling katas

### Objective

Code that calculates score of any bowling game. Based on https://www.wikihow.com/Score-Bowling.

### How to use

We use `yarn` which is a simple is a package manager. To install it visit https://classic.yarnpkg.com/lang/en/docs/install

### Getting started

1. Run `yarn install`
2. [if available] Rename `.env.template` into `.env` and add your own configuration variable

### Running tests

Run `yarn test v<x> [game name]`

Where `<x>` will be replaced by the version number (e.g. `v1`) and `game name` the name of any test game data found in `./src/__tests__/testGame.data.ts`, for example `yarn test v1 "simple game"`

### To add a new implementation

1. Create a new folder corresponding to the version number (e.g. `v3`) and associated files inside it
2. Add a new entry in `./src/index.ts` pointing to the score function

### Sample debugging configuration

There isn't only one way to do it and you can find more details [in Visual Code doc](https://code.visualstudio.com/docs/nodejs/nodejs-debugging).

One option would be to open the `Run and Debug` pane and select the option to create a `launch.json` file and replace its content by the below

```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Simple game",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "outputCapture": "std",
      "runtimeExecutable": "yarn",
      "runtimeArgs": ["test", "v1_correction", "simple game"],
      "env": {}
    }
  ]
}
```
