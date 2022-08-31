import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function PickupDate() {
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null)

    //don't forget to wrap datepicker in divs upon return

    return (
        <div>
        <DatePicker 
            isClearable
            placeholderText="Select Date"
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mmaa"
            selected={startDate} 
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={date => setStartDate(date)} 

        />

        <DatePicker
            isClearable
            placeholderText="Select Date"
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mmaa"
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            onChange={date => setEndDate(date)}
        />
        </div>
    );
};