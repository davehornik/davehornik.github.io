var words = ['a Junior Full-Stack Developer', 'a Designer', 'an AI Artist', 'a dog lover'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 100;

var cursorVisible = true; // Flag to control cursor visibility

// Function to create a flashing cursor
var createFlashingCursor = function() {
    var cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '|'; // Cursor character
    return cursor;
};

var wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        } else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }

        // Update the text and append the cursor
        var wordElement = $('.word'); // Cache the jQuery selector
        wordElement.html('<h2>' + part + '</h2>'); // Update the text in the h2

        // Clear previous cursor and append new one
        $('.cursor').remove(); // Remove existing cursor if present
        wordElement.append(createFlashingCursor()); // Append new cursor
    }, speed);
};

// Function to handle the blinking cursor effect
var blinkCursor = function() {
    setInterval(function () {
        var cursorElement = $('.cursor');
        cursorVisible = !cursorVisible; // Toggle visibility
        cursorElement.css('opacity', cursorVisible ? 1 : 0); // Change opacity for blinking effect
    }, 500); // Change this value to adjust the blinking speed (e.g., 500 ms)
};

$(document).ready(function () {
    wordflick(); // Start the word flicking animation
    blinkCursor(); // Start the cursor blinking effect
});