var is function-scoped, can be redeclared and reassigned, but might be problematic because of hoisting. let is block-scoped, can be Because it was reassigned but not redeclared, it was safer. const is also block scoped and can not be reassigned, although object properties can change. Use const by default, and let onlywhen reassignment is required.

References:
https://developer.mozilla.org/en-US/docs
https://javascript.info/var-let-const
https://www.w3schools.com/js/js_let.asp
