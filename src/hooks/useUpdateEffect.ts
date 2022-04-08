import { useEffect } from 'react';
import useFirstMountState from './useFirstMountState';

export default function useUpdateEffect(cb: () => void, deps: any) {
  const isFirstMount = useFirstMountState();

  useEffect(() => {
    if (!isFirstMount) {
      cb();
    }
  }, deps);
}
