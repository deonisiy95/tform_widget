import {useEffect, useState, useRef} from 'preact/compat';

export function useLongLoading(
  initialValue: boolean = false,
  delay = 1000
): [boolean, (value: boolean) => void] {
  const [loading, setLoading] = useState(initialValue);
  const [isTimer, setIsTimer] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      setIsTimer(true);
      timerRef.current = setTimeout(() => {
        setIsTimer(false);
        timerRef.current = null;
      }, delay);
    }
  }, [loading]);

  return [isTimer || loading, setLoading];
}
