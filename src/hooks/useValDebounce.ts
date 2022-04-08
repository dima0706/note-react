import { useEffect, useState } from 'react';
import useFirstMountState from './useFirstMountState';

export default function useValDebounce<T>(defaultVal: T, options: ValDebounceOptions): T {
  const { delay, cb } = options;

  const isFirstMount = useFirstMountState();
  const [val, updVal] = useState(defaultVal);

  useEffect(() => {
    if (isFirstMount) {
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
