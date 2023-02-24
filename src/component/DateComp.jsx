import React, {useState, useEffect} from 'react';

const DateComp = () => {

    const [d, setTime] = useState({dy: 0, dt: 0, m: 0, y: 0, t: {h: 0, m: 0}})


    const setDate = () => {
        // '2023-01-31'
        const dateNow = new Date();

        // const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

        const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].at(dateNow.getDay());
        const date = dateNow.getDate();
        const month =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].at(dateNow.getMonth());
        const year = dateNow.getFullYear();
        
        const hour = dateNow.getHours();
        const minutes = dateNow.getMinutes();

        // const ww = ({dy: day, dt: date, m: month, y: year, t: {h: hour, m: minutes}});
        setTime({dy: day, dt: date, m: month, y: year, t: {h: hour, m: minutes}});
        // console.log(d);
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            setDate();
          }, 1000);
      
          return () => clearInterval(interval);
        
    }, [])

    return (
        <div className='DateTime'>
            <div className="dateSection">
                <p className="date">{d.dt}</p>
                <p className="day">{d.dy}</p>
                <p className="month">{d.m}</p>
                <p className="year">{d.y}</p>
            </div>
            <div className="time">
                <p className="hours">{d.t.h.toString().padStart(2, '0')}</p>
                <p className="dots">:</p>
                <p className="minutes">{d.t.m.toString().padStart(2, '0')}</p>
            </div>
        </div>
    );
}

export default DateComp;
