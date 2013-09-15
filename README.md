timespan
========

Timespan is a chainable object you can use to create timespans for interacting with the js Date object in node.js.

Install via npm
```
	npm install timespanjs
```

Import into your file and create a timespan
 ```javascript
    var Timespan = require('timespanjs');
    var ts = new Timespan();
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
	setInterval(func,everyThirtyMinutes.span);
```

    
