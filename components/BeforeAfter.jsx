"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Drag-to-compare slider.
 *
 * Pointer events cover mouse, touch and pen in one path; the arrow keys move
 * the divider so it works without a pointer at all.
 */
export default function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  start = 50,
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState(start);
  const [dragging, setDragging] = useState(false);
  const [touched, setTouched] = useState(false);

  const setFromClientX = useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
    setTouched(true);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const move = (e) => setFromClientX(e.clientX);
    const up = () => setDragging(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [dragging, setFromClientX]);

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") {
      setPos((p) => Math.max(0, p - step));
      setTouched(true);
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      setPos((p) => Math.min(100, p + step));
      setTouched(true);
      e.preventDefault();
    }
  };

  return (
    <div
      ref={ref}
      className="ba"
      style={{ "--pos": `${pos}%` }}
      role="slider"
      tabIndex={0}
      aria-label="Compare mid-renovation with the finished room"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      aria-valuetext={`${Math.round(pos)}% finished view`}
      onKeyDown={onKeyDown}
      onPointerDown={(e) => {
        setDragging(true);
        setFromClientX(e.clientX);
      }}
    >
      <img src={before} alt={beforeAlt} loading="lazy" />
      <img className="ba__after" src={after} alt={afterAlt} loading="lazy" />

      <span className="ba__label ba__label--l">{beforeLabel}</span>
      <span className="ba__label ba__label--r">{afterLabel}</span>

      <div className="ba__handle">
        <span className="ba__knob">
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden>
            <path
              d="M6.5 2 1.5 7l5 5M15.5 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {!touched ? <span className="ba__hint">Drag to compare</span> : null}
    </div>
  );
}
