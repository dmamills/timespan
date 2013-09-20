(function(){
	'use strict';
	var root = this;

	function Timespan() {
		if (!(this instanceof Timespan)) {
			return (arguments.length === 0) ? new Timespan() : new Timespan(arguments[0]);
		}

		if(arguments.length !== 0) {

			if(typeof arguments[0] === 'number') {
				this.span = arguments[0];
			} else if(arguments[0] instanceof Timespan) {
				console.log(typeof arguments[0].span + ': '+arguments[0].span);
				this.span = arguments[0].span;
			}
		} else {
			this.span = 0;
		}

		return this;
	}

	Timespan.prototype.time =  {
		millisecond: 1,
		second: (1 * 1000),
		minute: (1 * 1000 * 60),
		hour: (1 * 1000 * 60 * 60),
		day: (1 * 1000 * 60 * 60 * 24)
	};

	Timespan.prototype.addMillisecond = function(num) {
		this.span += (num * this.time.millisecond);
		return this;
	};

	Timespan.prototype.addMinute = function(num) {
		this.span += (num * this.time.minute);
		return this;
	};

	Timespan.prototype.addSecond = function(num) {
		this.span += (num * this.time.second);
		return this;
	};

	Timespan.prototype.addHour = function(num) {
		this.span += (num * this.time.hour);
		return this;
	};

	Timespan.prototype.addDay = function(num) {
		this.span += (num * this.time.day);
		return this;
	};

	Timespan.prototype.addToDate = function(d) {
		return new Date(d.getTime() + this.span);
	};

	Date.prototype.addTimespan = function(ts) {
		return new Date(this.getTime() + ts.span);
	};

	if (typeof exports !== 'undefined') module.exports = exports = Timespan;
	else root.Timespan = Timespan;


}).call(this);