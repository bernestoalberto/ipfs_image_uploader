var SimpleStorage = artifacts.require("./SimpleStorage.sol");

contract('SimpleStorage', function(accounts) {

  it("...should store the value 89.", function() {
     SimpleStorage.deployed().then(function(instance) {
      simpleStorageInstance = instance;

       simpleStorageInstance.set('89');
    }).then(function() {
       simpleStorageInstance.get.call();
    }).
    then(function(storedData) {
      assert.equal(storedData, '89', "The value 89 was not stored.");
    });
  });

});
