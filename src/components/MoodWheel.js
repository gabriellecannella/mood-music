import React, { useState } from 'react';
import './MoodWheel.css'; // Import your CSS file

const MoodWheel = () => {
  const [selectedOuterMood, setSelectedOuterMood] = useState(null);
  const [selectedInnerMood, setSelectedInnerMood] = useState(null);
  const [selectedMoodCombination, setSelectedMoodCombination] = useState('');

  const moodData = [
    {
      outer: 'Happy',
      inner: ['Playful', 'Proud', 'Calm'],
      color: '#FFD700', // Mood-specific text color (yellow for Happy)
    },
    {
      outer: 'Sad',
      inner: ['Melancholic', 'Lonely', 'Despairing'],
      color: '#6495ED', // Mood-specific text color (blue for Sad)
    },
    {
      outer: 'Excited',
      inner: ['Energetic', 'Thrilled', 'Nervous'],
      color: '#FF4500', // Mood-specific text color (orange-red for Excited)
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
    updateSelectedMoodCombination(outerEmotion, null);
  };

  const handleInnerMoodSelect = (innerEmotion) => {
    setSelectedInnerMood(innerEmotion);
    updateSelectedMoodCombination(selectedOuterMood, innerEmotion);
  };

  const updateSelectedMoodCombination = (outer, inner) => {
    if (outer && inner) {
      setSelectedMoodCombination(`${outer}:${inner}`);
    } else if (outer) {
      setSelectedMoodCombination(outer);
    } else {
      setSelectedMoodCombination('');
    }
  };

  return (
    <div>
      <div className="mood-wheel">
        <div className="outer-ring">
          {moodData.map((data, index) => (
            <div
              key={index}
              className={`outer-emotion ${
                selectedOuterMood === data.outer ? 'selected' : ''
              }`}
              onClick={() => handleOuterMoodSelect(data.outer)}
              style={{ backgroundColor: data.color }}
            >
              {data.outer}
            </div>
          ))}
        </div>
        <div className="inner-round">
          {selectedOuterMood &&
            moodData
              .find((data) => data.outer === selectedOuterMood)
              .inner.map((innerEmotion, index) => (
                <div
                  key={index}
                  className={`inner-emotion ${
                    selectedInnerMood === innerEmotion ? 'selected' : ''
                  }`}
                  onClick={() => handleInnerMoodSelect(innerEmotion)}
                  style={{ backgroundColor: moodData.find((data) => data.outer === selectedOuterMood).color }}
                >
                  {innerEmotion}
                </div>
              ))}
        </div>
      </div>
      <div className="selected-mood-text">
        <p>Selected Mood:</p>
        <p style={{ color: moodData.find((data) => data.outer === selectedOuterMood)?.color }}>
          {selectedMoodCombination || 'None'}
        </p>
      </div>
    </div>
  );
};

export default MoodWheel;
