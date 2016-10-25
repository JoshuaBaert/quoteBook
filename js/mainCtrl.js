/**
 * Created by Joshua Baert on 10/25/2016.
 */

angular.module('quoteBook').controller('mainCtrl', function ($scope, dataService) {
	
	$scope.notWorking = 'Working';
	
//	$scope.dataService = dataService;
	
	$scope.quotes = dataService.getQuotes();
	
	$scope.addQuote = function () {
		dataService.addQuote({text: $scope.newQuoteText, author: $scope.newQuoteAuthor,})
	};
	
	$scope.deleteMe = dataService.removeQuote;
});