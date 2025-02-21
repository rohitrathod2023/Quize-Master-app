import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const Timer = ({ seconds, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="text-right text-xl font-semibold flex flex-row gap-2">
        <Clock />
      {timeLeft}s
    </div>
  );
};

export default Timer;