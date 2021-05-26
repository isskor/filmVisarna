import { useState, useCallback,Datepicker } from 'react';
var util = require('util');

function Calendar() {
 
    const now = new Date();
    const currYear = now.getFullYear();
    const currMonth = now.getMonth();
    const currDay = now.getDate();
    const min = new Date(currYear, currMonth, currDay);
    const max = new Date(currYear, currMonth + 6, currDay);
    const [singleLabels, setSingleLabels] = useState([]);
    const [singleInvalid, setSingleInvalid] = useState([]);
        
    const onPageLoadingSingle = useCallback((event, inst) => {
        getPrices(event.firstDay, (bookings) => {
            setSingleLabels(bookings.labels);
            setSingleInvalid(bookings.invalid);
                
        });
    }, []);
        
    const getPrices = (d, callback) => {
        var invalid = [],
            labels = [];
    
        util.http.getJson('//trial.mobiscroll.com/getprices/?year=' + d.getFullYear() + '&month=' + d.getMonth(), (bookings) => {
            for (var i = 0; i < bookings.length; ++i) {
                var booking = bookings[i],
                    d = new Date(booking.d);
    
                if (booking.price > 0) {
                    labels.push({
                        start: d,
                        title: '$' + booking.price,
                        textColor: '#e1528f'
                    });
                } else {
                    invalid.push(d);
                }
            }
            callback({ labels: labels, invalid: invalid });
        }, 'jsonp');
    }
                                
    <Datepicker 
        controls={['calendar']}
        min={min}
        max={max}
        labels={singleLabels}
        invalid={singleInvalid}
        onPageLoading={onPageLoadingSingle}
    />
  return (
  <h1>Calendar</h1>
  );
}

export default Calendar;
