```javascript
// bugSolution.js
async function getDocumentData(docRef) {
  try {
    const docSnap = await docRef.get();
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null;
  }
}

// ... rest of your Firebase initialization and code

// Example usage
documentRef.then(ref => getDocumentData(ref))
  .then(data => { /* process data */})
  .catch(error => { /* handle errors */});
```