import React, { useState } from 'react';
import Calendar from 'react-calendar';
import type { Value } from 'react-calendar/dist/cjs/shared/types';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import { Lunar } from 'lunar-javascript';

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 480px) {
    padding: 15px;
    border-radius: 12px;
  }
  
  .react-calendar {
    width: 100%;
    background: transparent;
    border: none;
    font-family: 'Google Sans', Arial, sans-serif;
    line-height: 1.125em;
  }

  .react-calendar__navigation {
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
    font-size: 16px;
    color: #202124;
    font-weight: 500;
    padding: 8px;

    @media (max-width: 480px) {
      min-width: 36px;
      font-size: 14px;
      padding: 6px;
    }
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f9fa;
    border-radius: 8px;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.75em;
    color: #5f6368;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;

    @media (max-width: 480px) {
      padding: 0.3em;
      font-size: 0.7em;
    }
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  .react-calendar__tile {
    padding: 1em 0.5em;
    background: none;
    text-align: center;
    line-height: 16px;
    color: #202124;
    font-size: 14px;
    border-radius: 8px;
    transition: all 0.2s ease;

    @media (max-width: 480px) {
      padding: 0.8em 0.3em;
      font-size: 13px;
    }
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #f8f9fa;
    transform: translateY(-1px);
  }

  .react-calendar__tile--now {
    background: #e8f0fe;
    border-radius: 8px;
    color: #1a73e8;
    font-weight: 500;
  }

  .react-calendar__tile--active {
    background: #1a73e8;
    color: white;
    border-radius: 8px;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(26, 115, 232, 0.2);
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1557b0;
    transform: translateY(-1px);
  }
`;

const LunarDateDisplay = styled.div`
  margin-top: 20px;
  padding: 20px 25px;
  width: 100%;
  background: #f8f9fa;
  border-radius: 12px;
  text-align: center;
  color: #5f6368;
  font-size: 18px;
  line-height: 1.5;
  
  @media (max-width: 480px) {
    margin-top: 15px;
    padding: 15px 20px;
    font-size: 16px;
  }
  
  .lunar-date {
    color: #1a73e8;
    font-weight: 600;
    margin-left: 10px;
    font-size: 20px;
    
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

const CalendarComponent: React.FC = () => {
  const [value, setValue] = useState<Value>(new Date());

  const onChange = (nextValue: Value) => {
    setValue(nextValue);
  };

  const getLunarDate = (date: Date) => {
    const lunar = Lunar.fromDate(date);
    const lunarMonth = lunar.getMonth();
    const lunarDay = lunar.getDay();
    const lunarYear = lunar.getYear();
    return `${lunarYear}년 ${lunarMonth}월 ${lunarDay}일`;
  };

  return (
    <CalendarContainer>
      <Calendar
        onChange={onChange}
        value={value}
        locale="ko-KR"
      />
      {value instanceof Date && (
        <LunarDateDisplay>
          <span>음력:</span>
          <span className="lunar-date">{getLunarDate(value)}</span>
        </LunarDateDisplay>
      )}
    </CalendarContainer>
  );
};

export default CalendarComponent; 