function Pie( crust, filling ) {
	// Attributes
	this.crust = crust;
	this.filling = filling;
	this.container = 'my stomach';
	this.mold = false;
	this.slices = 0;
}





Pie.prototype.slice = function() {
	this.slices += 2;
	console.log("slices : " + this.slices);
};

Pie.prototype.serve = function( name ) {
	if ( this.slices > 0 ) {
		console.log("Here's a slice, " + name );
		this.slices--;
	} else {
		console.log("No pie for you!");
	}
};








Pie.prototype = {
	slice : function() {
		
		this.slices += 2;
		console.log("slices : " + this.slices);
	},

	serve : function( name ) {
		if ( this.slices > 0 ) {
			console.log("Here's a slice, " + name );
			this.slices--;
		} else {
			console.log("No pie for you!");
		}
	},
};


$( document ).ready(function() {

	var apple = new Pie("heavenly", "Apple");
	var pumpkin = new Pie("buttery", "Pumpkin");
	var pecan = new Pie("flakey", "Pecan");
	var pies = [apple, pumpkin, pecan];
	pies.forEach(function appendToPiesList(pie) {
		pie.slice();
		pie.slice();
		pie.slice();
		pie.slice();
	    $('#pieslist').append('<li> I have ' + pie.slices + ' slices of ' + pie.filling+' pie!</li>');
	});
	 apple.serve("Justin");
	 console.log(apple.slices);

});
