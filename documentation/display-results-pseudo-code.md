GIVEN I want to keep track of which collectibles I have obtained
WHEN I am presented with the results from my selections
THEN I am shown which list items I have completed, and which ones I have not.

- Have a visible checkbox be generated for each result
- when the checkbox is .checked, then the information is saved to the local storage with the following parameters:
    - key: name of the item/object
    - value: true/false boolean indicating whether or not something is checked off.
        -true: checked off
        -false: not checked off
- based on the above criteria, create a "for" loop that loops through every item that is displayed in the list.
- "for" loop then does an if/else statement stating:
    - if: the value == true
    - then: show the checkmark as already being checked off
    - else: display it as being not checked off
- this "for" loop will then have the information formatted in such a way that the filter button for "show/hide completed" can then filter through and hide/show the ones that have been completed based on the selection given




GIVEN i wnat to know when shops open
WHEN i got to the website
THEN i am presented with the time shops close, or if already closed, when they reopen

