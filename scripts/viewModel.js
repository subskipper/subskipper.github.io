function scoreViewModel() {
    var self = this;
    
    self.Color = ko.observable('');
    self.numberOfAnimals = ko.observable(null);
    self.missingAnimalTypes = ko.observable(null);
    self.numberOfGrain = ko.observable(null);
    self.numerOfVegetables = ko.observable(null);
    self.numberOfRubies = ko.observable(null);
    self.numberOfDwarves = ko.observable(null);
    self.numberOfUnusedSpaces = ko.observable(null);
    self.furnishingsPasturesAndMines = ko.observable(null);
    self.pointsForParlorsStoragesChambers = ko.observable(null);
    self.gold = ko.observable(null);
    self.numberOfBeggingMarkers = ko.observable(null);
    
    self.colorCSS = ko.computed(function() {
        return 'color-' + self.Color().toLowerCase();    
    });
    
    self.score = ko.computed(function() {
        return Number(self.numberOfAnimals()) + Number(self.numberOfDwarves()) + Number(self.numerOfVegetables()) + Number(self.furnishingsPasturesAndMines()) + Number(self.gold()) + Number(self.numberOfRubies()) + 
            Number(self.pointsForParlorsStoragesChambers()) + Math.ceil(Number(self.numberOfGrain() / 2)* 10 / 10) - Number(self.numberOfUnusedSpaces()) - Number(self.missingAnimalTypes() * 2) - Number(self.numberOfBeggingMarkers() * 3);
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