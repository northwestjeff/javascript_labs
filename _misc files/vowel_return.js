"use strict";


var letter = prompt("Give me a letter.")


var vowelList = ['a', 'e', 'i', 'o', 'u']

function letterCheck(letter, vowelList) {
    for (var i = 0; i < vowelList.length; i++) {
        if (vowelList[i] === letter.toLowerCase()) {
            return true
        } else {
            return false
        }
    }
}
//
// vowel = letterCheck(letter, vowelList)

function check(trueFalse) {
    if (trueFalse === true) {
        console.log("You gave me a vowel.")
    } else {
        console.log("nope.")
        }
    }

check(letterCheck(letter, vowelList))

// alert("The character you entered is a vowel. ")