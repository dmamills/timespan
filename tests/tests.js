var assert = require("assert"),
	Timespan = require('./../index');


describe('Timespan',function() {
	describe('constructor',function() {

		it('it should be created with new', function() {
			assert.ok(new Timespan() instanceof Timespan);
		});

		it('should be created without new',function() {
			assert.ok(Timespan() instanceof Timespan);
		});

		it('should start at zero with no parameter',function(){
			assert.equal(Timespan().span,0);
		});

		it('should accept a parameter',function(){
			var ts = new Timespan().addMillisecond(123);
			assert.equal(ts.span,new Timespan(123).span);
			assert.equal(ts.span,Timespan(123).span);
		});

		it('should be seperate instances',function(){
			assert.notEqual(new Timespan(),new Timespan());
			assert.notEqual(new Timespan(123),new Timespan(123));

			assert.notEqual(Timespan(),Timespan());
			assert.notEqual(Timespan(123),Timespan(123));
			
		});
	});

	describe('add time',function() {

		it('should add one millisecond',function(){
			var ms = new Timespan();
			ms.addMillisecond(1);
			assert.equal(ms.span,1);
		});

		it('should add one second',function(){
			var ms = new Timespan();
			ms.addSecond(1);
			assert.equal(ms.span,1000);
		});

		it('should add one minute',function(){
			var ms = new Timespan();
			ms.addMinute(1);
			assert.equal(ms.span,(1000*60));
		});

		it('should add one hour',function(){
			var ms = new Timespan();
			ms.addHour(1);
			assert.equal(ms.span,(1000*60*60));
		});

		it('should add one hour',function() {
			var ms = new Timespan();
			ms.addDay(1);
			assert.equal(ms.span,(1000*60*60*24));
		});

		it('should allow chaining adds',function(){
			var ms = new Timespan();
			ms.addMillisecond(1).addSecond(1).addMinute(1);
			assert.equal(ms.span,61001);
		});
	});


	describe('date object additions',function(){
		it('date object should have add timespan function',function(){
			var d = new Date();
			assert.ok(d.addTimespan);
		});

		it('ts should have add to date function',function(){
			var ts = new Timespan();
			assert.ok(ts.addToDate);
		});
	});
});