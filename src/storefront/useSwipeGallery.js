import { useCallback, useRef } from "react";

const SWIPE_DISTANCE_PX = 44;
const SWIPE_VELOCITY_PX_PER_MS = 0.35;

export default function useSwipeGallery({ activeIndex, itemCount, onIndexChange }) {
  const gestureRef = useRef(null);

  const resetGesture = useCallback(() => {
    gestureRef.current = null;
  }, []);

  const onPointerDown = useCallback((event) => {
    if (itemCount < 2 || event.pointerType === "mouse") return;
    gestureRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startedAt: performance.now(),
      axis: null,
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }, [itemCount]);

  const onPointerMove = useCallback((event) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - gesture.startX;
    const deltaY = event.clientY - gesture.startY;
    if (!gesture.axis && Math.hypot(deltaX, deltaY) > 8) {
      gesture.axis = Math.abs(deltaX) > Math.abs(deltaY) * 1.15 ? "x" : "y";
    }
    if (gesture.axis === "x") event.preventDefault();
  }, []);

  const onPointerUp = useCallback((event) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - gesture.startX;
    const deltaY = event.clientY - gesture.startY;
    const elapsed = Math.max(1, performance.now() - gesture.startedAt);
    const velocity = Math.abs(deltaX) / elapsed;
    const isHorizontal = gesture.axis === "x" || Math.abs(deltaX) > Math.abs(deltaY) * 1.15;
    const isSwipe = Math.abs(deltaX) >= SWIPE_DISTANCE_PX || velocity >= SWIPE_VELOCITY_PX_PER_MS;

    if (isHorizontal && isSwipe) {
      const nextIndex = deltaX < 0
        ? Math.min(itemCount - 1, activeIndex + 1)
        : Math.max(0, activeIndex - 1);
      if (nextIndex !== activeIndex) onIndexChange(nextIndex);
    }
    resetGesture();
  }, [activeIndex, itemCount, onIndexChange, resetGesture]);

  return {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel: resetGesture,
    "data-swipeable": itemCount > 1 ? "true" : undefined,
  };
}
