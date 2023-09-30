import "../App.css";
import React, { useState } from 'react';
import './MoodWheel.css'; // Import your CSS file

const MoodWheel = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const emotions = [
    'Happy',
    'Sad',
    'Excited',
    'Calm',
    'Angry',
    // Add more emotions as needed
  ];

  const handleMoodSelect = (emotion) => {
    setSelectedMood(emotion);
    // Perform any actions with the selected mood
  };

  return (
    <div className="mood-wheel">
      {emotions.map((emotion, index) => (
        <div
          key={index}
          className={`emotion ${selectedMood === emotion ? 'selected' : ''}`}
          onClick={() => handleMoodSelect(emotion)}
        >
          {emotion}
        </div>
      ))}
    </div>
  );
};

export default MoodWheel;