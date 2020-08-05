const assert = require('assert')
const processor = require('../processor.js')

describe('transmission processor', function(){
it('takes a string returns an object', function(){
  let result = processor("9701::<489584872710>");
  assert.strictEqual(typeof result, "object")
});
it('returns -1 if "::" not found', function(){
  let result = processor('9701<489584872710>')
  assert.strictEqual(result, -1);
});

});
