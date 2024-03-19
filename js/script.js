// Copyright (c) 2024 George, Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: 
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const firstName = document.getElementById("first-name").value
  const userAge = parseInt(document.getElementById("age-entered").value)

  // output
  document.getElementById("user-info").innerHTML =
    "Your info is: " + userAge + "," +  firstName + "."
}