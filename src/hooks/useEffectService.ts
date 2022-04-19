import { useEffect } from 'react';

export default function useEffectService(fn: Fn) {
  useEffect(() => {
    fn();
  }, []);
}

type Fn = () => Promise<void> | void;
