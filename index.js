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

   reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
		},,

    functions: function() {

    },


  }
})()

fi.libraryMethod()
