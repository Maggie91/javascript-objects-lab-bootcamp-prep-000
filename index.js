var recipes = {};

/* - returns an object with the orignal key value pairs and the new key value pair
   -  does not modify the original object, but rather returns a clone with the new data
   - returns an object with an updated key value pair */

function updateObjectWithKeyAndValue(object, key, value) {
  
  }

/* - updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object */

  function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    
  }

/* - deletes `key` from a clone of object and returns the new object (it is non-destructive)
   - does not modify the original object (it is non-destructive) */

  function deleteFromObjectByKey(object, key) {
    
  }

/**/

  function destructivelyDeleteFromObjectByKey(object, key) {
    it('returns object without the delete key/value pair', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(newObj['prop']).toBe(undefined)
    })

    it('modifies the original object', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(obj['prop']).toBe(undefined)
    })
  })

})
