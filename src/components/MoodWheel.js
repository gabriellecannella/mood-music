import React, { useState } from 'react';
import './MoodWheel.css'; // Import your CSS file

const MoodWheel = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const moodData = [
    {
      outer: 'Happy',
      color: '#FFD700',
    },
    {
      outer: 'Sad',
      color: '#87CEEB',
    },
    {
      outer: 'Surprised',
      color: '#FFA500',
    },
    {
      outer: 'Neutral',
      color: '#008000',
    },
    {
      outer: 'Angry',
      color: '#FF0000',
    },
    {
      outer: 'Scared',
      color: '#660099',
    },
    {
      outer: 'Disgust',
      color: '#996633',
    },
  ];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="mood-container">
      <div className="mood-circle">
        {moodData.map((data, index) => {
          const isSelected = selectedMood === data.outer;
          const rotation = (index - moodData.findIndex((d) => d.outer === selectedMood)) * (360 / moodData.length);

          return (
            <div
              key={index}
              className={`mood outer-mood ${isSelected ? 'selected' : ''}`}
              onClick={() => handleMoodSelect(data.outer)}
              style={{
                backgroundColor: data.color,
                transform: `rotate(${rotation}deg) translateX(180px)`,
              }}
            >
              {data.outer}
            </div>
          );
        })}
      </div>
      <div className="selected-mood-text">
        <p>Selected Mood:</p>
        <p
          style={{
            color: moodData.find((data) => data.outer === selectedMood)?.color,
            fontSize: '24px',
            textAlign: 'center',
          }}
        >
          {selectedMood || 'None'}
        </p>
      </div>
    </div>
  );
};

export default MoodWheel;