import myCollection from "./collection.js"
//   console.log(myCollection)

  // PLAN
  // Create a function called describeItem, which should take in an item as a parameter - done
  //The function should console.log a message according to how many of the item you have. - done
function describeItem(item) {
if (item > 1) {
    console.log(`I have ${item.count}. Here's what I like about them:  ${item.whatILike}`)
} else {
    console.log(`I have ${item.name}. Here's what I like about them: ${item.whatILike} `)
}
    console.log(item.count)
}

// describeItem(myCollection[0]);

function describeCollection(arr) {
describeItem(arr)
}
myCollection.map(describeItem)
