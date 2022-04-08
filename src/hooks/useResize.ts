import { useState, useEffect } from 'react';

export default function useResize<T>(cb?: (val: ResizeInfo) => T): ResizeInfo {
  const [info, updFn] = useState({ w: window.innerWidth, h: window.innerHeight });

  const resizeHandle = (e: any) => {
    const newInfo: ResizeInfo = { w: e.target.innerWidth, h: e.target.innerHeight };
    cb && cb(newInfo);
    updFn(newInfo);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandle);

    return () => {
      window.removeEventListener('resize', resizeHandle);
    };
  }, []);

  return info;
}

interface ResizeInfo {
  w: number;
  h: number;
}
