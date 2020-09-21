const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      if(Array.isArray(collection)){
     collection.forEach(element => callback(element))
      }
      else{
       for (const property in collection) {
  callback(collection[property]);
}}
      return collection;
    },

    map: function(collection,callback) {
    const a={collection.map(element=>callback(element))}
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
