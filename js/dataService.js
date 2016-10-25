/**
 * Created by Joshua Baert on 10/25/2016.
 */

angular.module('quoteBook').service('dataService', function () {
	
	console.log(localStorage.quotes);
	
	var quotes = [];
	if (localStorage.quotes) {
		quotes = JSON.parse(localStorage.quotes);
	} else {
		quotes = [
			{ text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
			{ text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
			{ text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
			{ text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
			{ text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
			{ text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
			{ text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
		];
	}
	
	console.log(quotes);
		
	
	this.getQuotes = function () {
		return quotes
	};
	
	this.addQuote = function (obj) {
		if (typeof obj.text === 'string' && typeof obj.author === 'string' ) {
			quotes.push({
				text: obj.text,
				author: obj.author,
			});
			console.log(JSON.stringify(quotes));
			localStorage.quotes = JSON.stringify(quotes);
			return true;
		}
		return false;
	};
	
	this.removeQuote = function (text) {
		for (var i=0; i<quotes.length; i++) {
			if (text === quotes[i].text) {
				quotes.splice(i,1);
				localStorage.quotes = JSON.stringify(quotes);
				return true
			}
		}
		return false;
	}
});