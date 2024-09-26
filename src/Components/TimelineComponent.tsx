import React from 'react';

const TimelineComponent: React.FC = () => {
  return (
    <div className='md:mt-0 md:mb-16 mt-[500px]'>
      <h1 className='text-5xl text-center font-bold mb-12 italic'>Event TimeLine</h1>
      <ul>
        <li style={{ '--accent-color': '#41516C' } as React.CSSProperties}>
          <div className="date">1:30 PM - 2:00 PM</div>
          <div className="title">FetchAI Meet with Mr. Dev Chauhan</div>
          <div className="descr">
          Kick off AlgoThon with insights from Mr. Dev Chauhan on FetchAI technology and its impact on coding today.
          </div>
        </li>
        <li style={{ '--accent-color': '#FBCA3E' } as React.CSSProperties}>
          <div className="date">2:00 PM - 4:00 PM</div>
          <div className="title">Coding Competition: DSA Round</div>
          <div className="descr">
          Participants tackle challenging DSA problems, testing their coding skills and problem-solving abilities in a competitive setting.
          </div>
        </li>
        <li style={{ '--accent-color': '#E24A68' } as React.CSSProperties}>
          <div className="date">4:00 PM - 4:30 PM</div>
          <div className="title">Prize Distribution Ceremony</div>
          <div className="descr">
          Celebrate the achievements of participants as awards are presented to the top performers in the coding competition.
          </div>
        </li>
       
      </ul>
      
    </div>
  );
};

export default TimelineComponent;
