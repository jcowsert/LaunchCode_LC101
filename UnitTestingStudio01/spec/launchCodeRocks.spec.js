const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function(){
  it("returns 'Launch!' when passed a number that is ONLY divisible by 2", function(){
    let output = launchOutput(2);
    assert.strictEqual(output, "Launch!");
  });

  it("returns 'Code!' when passed a number that is ONLY divisible by 3", function(){
    let output = launchOutput(3);
    assert.strictEqual(output, "Code!");
  });

  it("returns 'Rocks!' when passed a number that is ONLY divisible by 5", function(){
    let output = launchOutput(5);
    assert.strictEqual(output, "Rocks!");
  });

  it("returns 'LaunchCode!' when passed a number that is divisible by 2 & 3", function(){
    let output = launchOutput(6);
    assert.strictEqual(output, "LaunchCode!");
  });

  it("returns 'Code Rocks!' when passed a number that is divisible by 3 & 5", function(){
    let output = launchOutput(15);
    assert.strictEqual(output, "Code Rocks!");
  });

  it("returns 'Launch Rocks! (CRASH!!!!)' when passed a number that is divisible by 2 & 5", function(){
    let output = launchOutput(10);
    assert.strictEqual(output, "Launch Rocks! (CRASH!!!!)");
  });

  it("returns 'LaunchCode Rocks!' when passed a number that is divisible by 2, 3, & 5", function(){
    let output = launchOutput(30);
    assert.strictEqual(output, "LaunchCode Rocks!");
  });

  it("returns Rutabagas! That doesn't work. when passed a number that is NOT divisible by 2, 3, or 5", function(){
    let output = launchOutput(7);
    assert.strictEqual(output, "Rutabagas! That doesn't work.");
  });


});