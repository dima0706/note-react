import { useRef } from 'react';

export default function useFirstMountState() {
  const isFirstMounted = useRef(true);

  if (isFirstMounted.current) {
    isFirstMounted.current = false;

    return true;
  }

  return false;
}
