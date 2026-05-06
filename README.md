# Lab 5 - Starter

Pt 3. Unit Testing with Jest:

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
A: I would not use only unit tests to test the complete message feature because a full message feature involves multiple layers, such as reading text input, checking user login status, network data transmission, and possibly text encryption and decryption. Unit tests are not suitable for testing how all these parts work together.

2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

A: Yes I would use a unit test for the "max message length" feature because it is a small specific piece of logic, the test can check whether the app correctly prevents messages longer than 80 characters.