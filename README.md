# Simple Coding Puzzles (JS)

* Disclaimer: This repo was generated with ChatGPT, so it might contain silly but very confident bullsh*t.

## Introduction

This repo is a set of beginner-friendly programming puzzles. Each puzzle contains some data that you need to process and output the result.

## Prerequisites

You need NodeJS and git installed (please google this or ask ChatGPT on how to install it).

1. To clone the repo do:

`git clone https://github.com/vicnaum/beginner-coding-puzzles.git`

2. To install packages do:

`npm install` or `yarn` (depending on which package manager you prefer)

## How to do the puzzles?

Each puzzle must be solved within its corresponding js file, for example:

Puzzle 1 must be solved in `puzzle1.js` file.

Each file has a `puzzle()` function which receives the input and should return some output.
You need to put your code inside this function to process the input and return correct output.

## How to test the puzzles?

You can run the tests for each puzzle with mocha:

`npx mocha puzzle1.js`

It will run a bunch of test cases and tell you which are correct and which are not.

Test cases are in `tests` folder in JSON format.

### Happy solving!

---
---
---

# Puzzles:


## Puzzle 1

You're organizing a bake sale and you want to keep track of how much money you've made. Write a function that accepts a list of the prices of all the items that were sold and returns the total amount of money that was made.

### Example: if the input list is [1.50, 3.00, 5.25], the output should be 9.75

### Hint: the function should return 0 if the input list is empty

## Puzzle 2

You're writing a program to help you study for a spelling test. Write a function that accepts a list of words and returns the number of words that have the vowel "a" in them.

### Example: if the input list is ["cat", "dog", "elephant"], the output should be 2

### Hint: the function should return 0 if the input list is empty or if there are no words in the input list that have the vowel "a" in them

## Puzzle 3

You're playing a game where you have to guess the highest number. Write a function that accepts a list of numbers and returns the largest number in the list.

### Example: if the input list is [1, 5, 10, 100, 1000], the output should be 1000

### Hint: the function should return the smallest possible number (e.g., -infinity or the smallest possible integer value) if the input list is empty

## Puzzle 4

You're making a list of all the long-named animals that live in the zoo. Write a function that accepts a list of animal names and returns a new list containing only the names of animals that have at least five letters in their name.

### Example: if the input list is ["cat", "dog", "elephant"], the output should be ["elephant"] 

### Hint: the function should return an empty list if the input list is empty or if all the words in the input list have fewer than five letters

## Puzzle 5

You're organizing a scavenger hunt and you want to make a list of all the odd-numbered items that you need to find. Write a function that accepts a list of numbers and returns a new list containing only the odd numbers from the original list.

### Example: if the input list is [1, 2, 3, 4, 5], the output should be [1, 3, 5]

### Hint: the function should return an empty list if the input list is empty or if there are no odd numbers in the input list

## Puzzle 6

You're writing a program to help you organize your books. Write a function that accepts a list of book titles and returns a new list containing only the titles of books that start with a capital letter.

### Example: if the input list is ["The Cat in the Hat", "Moby-Dick", "a Tale of Two Cities"], the output should be ["The Cat in the Hat", "Moby-Dick"]

### Hint: the function should return an empty list if the input list is empty or if there are no words in the input list that start with a capital letter

## Puzzle 7

You're making a word puzzle where you have to fill in the vowels in a sentence. Write a function that accepts a string and returns the string with all the vowels removed, so that you can fill them in yourself.

### Example: if the input string is "Hello world", the output should be "Hll wrld"

### Hint: the function should return an empty string if the input string is empty or if it contains no vowels

## Puzzle 8

You're organizing a raffle and you want to find the average price of all the prizes. Write a function that accepts a list of prize values and returns the average value of all the prizes.

### Example: if the input list is [10, 20, 30, 40], the output should be 25

### Hint: the function should return 0 if the input list is empty

## Puzzle 9

You're making a word puzzle where you have to unscramble words. Write a function that accepts a string and returns a new string with all the words in the original string reversed (i.e., "Hello world" becomes "olleH dlrow").

### Example: if the input string is "Hello world", the output should be "olleH dlrow"

### Hint: the function should return an empty string if the input string is empty

## Puzzle 10

You're writing a program to help you learn about prime numbers. Write a function that accepts a list of numbers and returns a new list containing only the numbers that are prime (i.e., divisible only by 1 and themselves).

### Example: if the input list is [1, 2, 3, 4, 5], the output should be [2, 3, 5]

### Hint: the function should return an empty list if the input list is empty or if there are no prime numbers in the input list