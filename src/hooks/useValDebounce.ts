import { useEffect, useState, useRef } from 'react';

export default function useValDebounce<T>(defaultVal: T, options: ValDebounceOptions): T {
  const { delay, cb } = options;

  const needCallback = useRef(false);
  const [val, updVal] = useState(defaultVal);

  useEffect(() => {
    if (!needCallback.current) {
      needCallback.current = true;
      return;
    }

    const handle = setTimeout(() => {
      cb && cb();
      updVal(defaultVal);
    }, delay);

    return () => clearTimeout(handle);
  }, [defaultVal]);

  return val;
}

interface ValDebounceOptions {
  delay: number;
  cb?: () => void;
}
