import React, { useState } from 'react';
import './MoodWheel.css'; // Import your CSS file

const MoodWheel = () => {
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
      outer: 'Excited',
      inner: ['Energetic', 'Thrilled', 'Nervous'],
      color: '#FFA500', // Orange for Excited (adjust as needed)
    },
    {
      outer: 'Calm',
      inner: ['Relaxed', 'Content', 'Tranquil'],
      color: '#008000', // Mood-specific text color (green for Calm)
    },
    {
      outer: 'Angry',
      inner: ['Furious', 'Irritated', 'Annoyed'],
      color: '#FF0000', // Mood-specific text color (red for Angry)
    },
    // Add more outer and inner emotions as needed
  ];

  const handleOuterMoodSelect = (outerEmotion) => {
    setSelectedOuterMood(outerEmotion);
    setSelectedInnerMood(null); // Reset the inner mood when the outer mood changes
  };

  const handleInnerMoodSelect = (innerEmotion) => {
    setSelectedInnerMood(innerEmotion);
  };

  return (
    <div className="mood-container">
      <div className="mood-circle">
        {moodData.map((data, index) => (
          <div
            key={index}
            className={`mood outer-mood ${
              selectedOuterMood === data.outer ? 'selected' : ''
            }`}
            onClick={() => handleOuterMoodSelect(data.outer)}
            style={{
              backgroundColor: data.color,
              transform: `rotate(${(index * 360) / moodData.length}deg) translateX(180px)`,
            }}
          >
            {data.outer}
          </div>
        ))}
        {selectedOuterMood &&
          moodData
            .find((data) => data.outer === selectedOuterMood)
            .inner.map((innerEmotion, index) => (
              <div
                key={index}
                className={`mood inner-mood ${
                  selectedInnerMood === innerEmotion ? 'selected' : ''
                }`}
                onClick={() => handleInnerMoodSelect(innerEmotion)}
                style={{
                  backgroundColor: moodData.find(
                    (data) => data.outer === selectedOuterMood
                  ).color,
                  transform: `rotate(${(index * (360 / 3)) + 30}deg) translateX(60px)`, // Adjust translateX value
                }}
              >
                {innerEmotion}
              </div>
            ))}
      </div>
      <div className="selected-mood-text">
        <p>Selected Mood:</p>
        <p
          style={{
            color: moodData.find((data) => data.outer === selectedOuterMood)?.color,
            fontSize: '24px', // Increase font size for the key
            textAlign: 'center', // Center-align the text
          }}
        >
          {selectedOuterMood && selectedInnerMood
            ? `${selectedOuterMood}:${selectedInnerMood}`
            : selectedOuterMood || 'None'}
        </p>
      </div>
    </div>
  );
};

export default MoodWheel;
