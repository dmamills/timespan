


function TimeSpan() {

	var millisecond = 1,
		second = millisecond * 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	if(!(this instanceof TimeSpan)) return new TimeSpan(); 

	if(!this.span)
		this.span = 0;

	return this;
};

TimeSpan.prototype.time = {
	millisecond:1,
	second:(1*1000),
	minute:(1*1000*60),
	hour:(1*1000*60*60),
	day:(1*1000*60*60*24)
};


TimeSpan.prototype.addMinute = function(num) {
	this.span += (num*this.time['minute']);
	return this;
};

TimeSpan.prototype.addSecond = function(num) {
	this.span += (num*this.time['second']);
	return this;
};

TimeSpan.prototype.addHour = function(num) {
	this.span += (num*this.time['hour']);
	return this;
};

TimeSpan.prototype.addDay = function(num) {
	this.span += (num*this.time['day']);
	return this;
};

TimeSpan.prototype.addToDate = function(d) {
	return new Date(date.getTime() + this.span);
};


if(module.exports){
	module.exports = TimeSpan;
}