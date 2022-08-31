import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from "styled-components";

const Styles = styled.div`
    .react-datepicker-wrapper,
    .react-datepicker__input-container
    .react-datepicker__input-container input {
        width: 195px;
    }

    .react-datepicker__close-icon::before,
    .react-datepicker__close-icon::after {
        background-color: red;
    }
    `;

export function DatePickerRange() {
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

export default function TableDatePicker() {
    return (
        <Styles>
            <DatePickerRange />
        </Styles>
    );
};