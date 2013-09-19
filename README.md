timespan 
========

[![Build Status](https://secure.travis-ci.org/lloyd/node-memwatch.png)](http://travis-ci.org/lloyd/node-memwatch)
[![Build Status](https://ecure.travis-ci.org/dmamills/timespan.png)](http://travis-ci.org/dmamills/timespan)
Timespan is a chainable object you can use to represent a span of time for interacting with the js Date object in node.js.

Install via npm
```
	npm install timespanjs
```

Import into your file and create a timespan
 ```javascript
    var Timespan = require('timespanjs');
    var ts = new Timespan();

    //pass it a starting time
    var ts = new Timespan(1234);

    //pass it another timespan object
    var ts1 = new Timespan(1234);
    var ts2 = new Timespan(ts1);
 ```
 
 Add time
 
 ```javascript
    ts.addMinute(1);
    ts.addSecond(2).addHour(3).addDay(4);
 ```  
 
 Add to a date
 ```javascript
  
    var date = new Date();
    date = ts.addToDate(date);

    //or
    date.addTimespan(ts);
  
 ```

Timespan is very useful for intervals and timeouts

```javascript
	var everyThirtyMinutes = new Timespan().addMinutes(30);
	setInterval(doThing,everyThirtyMinutes.span);
```

    
