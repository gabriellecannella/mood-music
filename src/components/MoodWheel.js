import React, { useState } from 'react';
import './MoodWheel.css'; // Import your CSS file

const MoodWheel = ({setMood}) => {
  const [selectedOuterMood, setSelectedOuterMood] = useState(null);
  const [selectedInnerMood, setSelectedInnerMood] = useState(null);

  const moodData = [
    {
      outer: 'Happy',
      inner: ['Playful', 'Proud', 'Calm'],
      color: '#FFD700', // Mood-specific text color (yellow for Happy)
    },
    {
      outer: 'Sad',
      inner: ['Melancholic', 'Lonely', 'Despairing'],
      color: '#87CEEB', // Mood-specific text color (blue for Sad)
    },
    {
      outer: 'Surprised',
      inner: ['Energetic', 'Thrilled', 'Excited'],
      color: '#FFA500', // Orange for Excited (adjust as needed)
    },
    {
      outer: 'Neutral',
      inner: ['Relaxed', 'Content', 'Tranquil'],
      color: '#008000', // Mood-specific text color (green for Calm)
    },
    {
      outer: 'Angry',
      inner: ['Furious', 'Irritated', 'Frustrated'],
      color: '#FF0000', // Mood-specific text color (red for Angry)
    },
    {
      outer: 'Scared',
      inner: ['Nervous', 'Fearful', 'Worried'],
      color: '#660099', // Mood-specific text color (purple for Scared)
    },
    {
      outer: 'Disgust',
      inner: ['Shock', 'Appalled', 'Annoyed'],
      color: '#996633', // Mood-specific text color (brown/green for Disgust)
    },
    // Add more outer and inner emotions as needed
  ];

  const handleOuterMoodSelect = (outerEmotion) => {
    setMood(outerEmotion)
    setSelectedOuterMood(outerEmotion);
    //setSelectedInnerMood(null); // Reset the inner mood when the outer mood changes
  };

  const handleInnerMoodSelect = (innerEmotion) => {

    setSelectedInnerMood(innerEmotion);
  };

  // Calculate the selected mood's index
  const selectedMoodIndex = moodData.findIndex((data) => data.outer === selectedOuterMood);

  return (
    <div className="mood-container">
      <div className="mood-circle">
        {moodData.map((data, index) => {
          const isSelected = selectedOuterMood === data.outer;
          const rotation = (index) * (360 / moodData.length);

          return (
            <div
              key={index}
              className={`mood outer-mood ${isSelected ? 'selected' : ''}`}
              onClick={() => handleOuterMoodSelect(data.outer)}
              style={{
                backgroundColor: data.color,
                transform: `rotate(${rotation}deg) translateX(180px)`,
              }}
            >
              {data.outer}
            </div>
          );
        })}
        {selectedOuterMood &&
          moodData
            .find((data) => data.outer === selectedOuterMood)
            .inner.map((innerEmotion, index) => {
              const isSelected = selectedInnerMood === innerEmotion;
              const rotation = (index * (360 / 3)) + 30;
            })}
      </div>
    </div>
  );
};

export default MoodWheel;