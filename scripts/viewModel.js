function scoreViewModel() {
    var self = this;
    
    self.Name = ko.observable('');
    self.numberOfAnimals = ko.observable(0);
    self.missingAnimalTypes = ko.observable(0);
    self.numberOfGrain = ko.observable(0);
    self.numerOfVegetables = ko.observable(0);
    self.numberOfRubies = ko.observable(0);
    self.numberOfDwarves = ko.observable(0);
    self.numberOfUnusedSpaces = ko.observable(0);
    self.furnishingsPasturesAndMines = ko.observable(0);
    self.pointsForParlorsStoragesChambers = ko.observable(0);
    self.gold = ko.observable(0);
    self.numberOfBeggingMarkers = ko.observable(0);
    
    self.score = ko.computed(function() {
        return Number(self.numberOfAnimals()) + Number(self.numberOfDwarves()) + Number(self.numerOfVegetables()) + Number(self.furnishingsPasturesAndMines()) + Number(self.gold()) + Number(self.numberOfRubies()) + 
            Number(self.pointsForParlorsStoragesChambers()) + Number(self.numberOfGrain() / 2) - Number(self.numberOfUnusedSpaces()) - Number(self.missingAnimalTypes() * 2) - Number(self.numberOfBeggingMarkers() * 3);
    },this);
}

function scoreSheet(){
    var self = this;
    
    self.columns = ko.observableArray([
         new scoreViewModel(),
         new scoreViewModel(),
         new scoreViewModel(),
         new scoreViewModel(),
         new scoreViewModel(),
         new scoreViewModel(),
         new scoreViewModel()
    ]);
}

ko.applyBindings(new scoreSheet());