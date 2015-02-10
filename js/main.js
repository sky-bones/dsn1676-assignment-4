
var blueberries = {
name: 'Blueberries',
latin: 'Vaccinium corymbosum',
growsOnShrub: true,
energy: '240 kj',
carbohydrates: '14.49 g',
protein: '0.74 g'

};

var grapes = {
name: 'Grapes',
latin: 'Vitis vinifera',
growsOnShrub: false,
energy: '288 kJ',
carbohydrates: '18.1 g',
protein: '0.72 g'

};

var redCurrent = {
name: 'Red Current',
latin: 'Ribes rubrum',
growsOnShrub: true,
energy: '234 kJ',
carbohydrates: '13.8 g',
protein: '1.4 g'

};

/*

var berries = [blueberries, grapes, redCurrent];

berries.forEach ( function (item) {
	document.write('<dl>')

	document.write('<h1>' + item.name + '</h1>');

	document.write('<dt>Latin Name:</dt>')
	document.write('<dd>' + item.latin + '</dd>');

	document.write('<dt>Grows on Shrubs:</dt>')
	document.write('<dd>' + item.growsOnShrub + '</dd>');

	document.write('<dt>Energy:</dt>')
	document.write('<dd>' + item.energy + '</dd>');

	document.write('<dt>Carbohydrates:</dt>')
	document.write('<dd>' + item.carbohydrates + '</dd>');

	document.write('<dt>Protein:</dt>')
	document.write('<dd>' + item.protein + '</dd>');


	document.write('</dl>')

});

*/

var writeBerries = (function (allBerries) {

allBerries.forEach ( function (item) {
	document.write('<dl>');

	document.write('<h1>' + item.name + '</h1>');

	document.write('<dt>Latin Name:</dt>');
	document.write('<dd>' + item.latin + '</dd>');

	document.write('<dt>Grows on Shrubs:</dt>');
	document.write('<dd>' + item.growsOnShrub + '</dd>');

	document.write('<dt>Energy:</dt>');
	document.write('<dd>' + item.energy + '</dd>');

	document.write('<dt>Carbohydrates:</dt>');
	document.write('<dd>' + item.carbohydrates + '</dd>');

	document.write('<dt>Protein:</dt>');
	document.write('<dd>' + item.protein + '</dd>');


	document.write('</dl>');

});

});

writeBerries( [blueberries, grapes, redCurrent]);
writeBerries( [grapes, blueberries, redCurrent]);
