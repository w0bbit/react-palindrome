Palindrome
===================
In this exercise, you will create a component that allows users to input a word and acknowledge to them whether or not the word is a palindrome (spelled the same forward and backwards).

Release 0 - Create your text box
-------------
* Create a UI that has a [text input](http://www.w3schools.com/tags/tag_input.asp) with an onChange event listener attached to it.

Release 1 - Capture what you typed
---------------
Once a user types something into your text box, capture what they typed. Referencing the `.value` of the text input field can either be done through the *event* object automatically passed into your event handler function, or via [refs](https://beta.reactjs.org/apis/react/useRef).
 
Release 2 - Write your palindrome function
-------------
We're going back to week 1. Based on what a user typed, set state on your component say whether or not your input is a palindrome and display that out to the screen. You may want to utilize [ES6 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to render the acknowledgement like so: `[word] [is/is not] a palindrome`
