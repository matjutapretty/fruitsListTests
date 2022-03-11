describe('fruits_list function', function() {
    describe('', function() {

        it('should allow the user to search for a fruit in the list', function() {
            let testingFruitsList = fruits_list();
            testingFruitsList.myFunction();
            assert.equal(testingFruitsList.myFunction())
        });
        it('should allow the user to add a fruit with an emoji', function() {
            let testingFruitsList = fruits_list();
            testingFruitsList.myFunction();
            assert.equal(testingFruitsList.myFunction())
        });
        it('should not allow the user to add a fruit without an emoji', function() {
            let testingFruitsList = fruits_list();
            testingFruitsList.myFunction();
            assert.equal(testingFruitsList.myFunction())
        });
        it('should display an error message if the fruit name and emoji do not match', function() {
            let testingFruitsList = fruits_list();
            testingFruitsList.myFunction();
            assert.equal(testingFruitsList.myFunction())
        });
        it('should diplay an error message saying please enter a fruit and emoji if the user clicks on the add button', function() {
            let testingFruitsList = fruits_list();
            testingFruitsList.myFunction();
            assert.equal(testingFruitsList.myFunction())
        });
        it('should display an error message when the user searches for a fruit that is not on the list', function() {
            let testingFruitsList = fruits_list();
            testingFruitsList.myFunction();
            assert.equal(testingFruitsList.myFunction())
        });
        it('should allow the user to sort the fruit list in descending order', function() {
            let testingFruitsList = fruits_list();
            testingFruitsList.reverse();
            assert.equal(testingFruitsList.reverse())
        });
        it('should also allow the user to sort the new added fruits in descending order', function() {
            let testingFruitsList = fruits_list();
            testingFruitsList.reverse();
            assert.equal(testingFruitsList.reverse())
        });
        it('should allow the user to sort the fruit list in ascending order', function() {
            let testingFruitsList = fruits_list();
            testingFruitsList.sort();
            assert.equal(testingFruitsList.sort())
        });
        it('should also allow the user to sort the new added fruits in ascending order', function() {
            let testingFruitsList = fruits_list();
            testingFruitsList.sort();
            assert.equal(testingFruitsList.sort())
        });
    });

});