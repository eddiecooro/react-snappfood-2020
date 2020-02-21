import React from 'react';

export function useTimer() {
  const [t, setT] = React.useState(0);
  const interval = React.useRef(null);

  const resume = React.useCallback(() => {
    if (!interval.current) {
      interval.current = setInterval(() => setT(t => t + 1), 1000);
    }
  }, []);
  const stop = React.useCallback(() => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  }, []);
  const reset = React.useCallback(() => {
    stop();
    setT(0);
    resume();
  }, []);

  React.useEffect(() => {
    resume();
  }, []);

  return {
    seconds: t,
    resume,
    stop,
    reset
  };
}
