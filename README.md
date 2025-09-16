
1.The getElementById method targets a single element using its unique ID and always returns one element or null if not found.

getElementsByClassName method selects all elements with a specific class name and returns a live HTMLCollection.

querySelector and querySelectorAll use CSS-style selectors.

querySelector returns the first matching element.

querySelectorAll returns a NodeList of all matches.

2.To create and insert a new element into the DOM, JavaScript provides the document.createElement method to create the element node.
The new node can be placed into the DOM using insertion methods like appendChild.

3.Event Bubbling means—when an event (like a click) happens on an element, it doesn’t just stop there. First, the event works on that element, then it moves step by step to its parent element, then to the next parent, and finally reaches the document.

4.Event Delegation is a technique in JavaScript where instead of attaching event listeners to multiple child elements individually, we attach a single event listener to their parent element.

It is useful because-

Reduces use of memory.

Makes the code easier to manage.

5.preventDefault() is used to stop the browser’s default action, like preventing a link from opening a new page or stopping a form from submitting.
stopPropagation() is used to stop event bubbling, which means the event won’t reach the parent or other upper elements.