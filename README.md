# Firebase: Accessing Document Snapshot Before Promise Resolution

This repository demonstrates a common error when using the Firebase SDK with Firestore: attempting to access properties of a document snapshot before the promise returned by `getDoc()` has resolved. This often results in `UnhandledPromiseRejectionWarning` or similar errors.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version using async/await or `.then()` to handle the promise properly.

## How to Reproduce the Bug

1. Clone this repository.
2. Install the required packages: `npm install firebase`
3. Configure your Firebase project and replace placeholders in the code with your project details.
4. Run `node bug.js` to see the error.
5. Run `node bugSolution.js` to see the corrected implementation.

## Bug Explanation

The core issue is the asynchronous nature of `getDoc()`.  The function returns a promise, and you must wait for it to fulfill before accessing the snapshot's properties.  If you access them prematurely, the snapshot's data might not be populated yet, causing errors.

## Solution

The solution involves using promises correctly.  This example demonstrates using `async/await` which makes the code more readable.
