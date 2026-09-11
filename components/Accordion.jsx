"use client";

import { useId, useState } from "react";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  const base = useId();

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="acc__item" data-open={isOpen} key={item.q}>
            <h3>
              <button
                type="button"
                className="acc__btn"
                aria-expanded={isOpen}
                aria-controls={`${base}-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.q}
                <span className="acc__icon" aria-hidden />
              </button>
            </h3>
            <div className="acc__panel" id={`${base}-${i}`} role="region">
              <div className="acc__panelInner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
