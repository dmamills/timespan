timespan
========

TimeSpan is a chainable object you can use to create timespans for interacting with the js Date object in node.js.

Import into your file and create a timespan
 ```javascript
    var TimeSpan = require('./timespan');
    var ts = new TimeSpan();
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
    
