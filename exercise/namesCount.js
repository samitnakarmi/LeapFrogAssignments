//   ☐ Count of items in an array.
//     Input: ['John', 'Mary', 'John', 'John', 'Sherlock', 'Sherlock']
//     Output:
//       {
//         John: 3,
//         Mary: 1,
//         Sherlock: 2
//       }




names = ['John', 'Mary', 'John', 'John', 'Sherlock', 'Sherlock']

function nameCounter(array) {
  x = array.reduce(function (acc, val) {
    if (!acc[val]) acc[val] = 1; 
    else acc[val]++; 
    return acc;
  }, {})
  return x;
}

counts = nameCounter(names)
console.log(counts);
