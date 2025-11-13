import React, { useEffect, useRef, useState } from "react";
import "./images.css";

const ImagesCarousel = ({ images = ["/harvest.png", "/farming.png", "/soil.png", "/vr.png"] }) => {
  // we keep a local order array and rotate it by moving the last item to the front every tick
  const [order, setOrder] = useState(images);
  const intervalRef = useRef(null);

  // start interval
  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // rotate function: move last item to front => images visually shift right-to-left
  const rotateRight = () => {
    setOrder(prev => {
      if (prev.length <= 1) return prev;
      const next = [...prev];
      const last = next.pop();
      next.unshift(last);
      return next;
    });
  };

  const start = () => {
    stop();
    intervalRef.current = setInterval(() => {
      rotateRight();
    }, 1000); // 1 second
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // show first 4 items of the current order
  const visible = order.slice(0, 4);

  return (
    <section
      id="images-carousel"
      onMouseEnter={stop}   /* pause on hover */
      onMouseLeave={start}  /* resume on leave */
      aria-label="Image carousel"
    >
      <div className="images-stage">
        {visible.map((src, i) => (
          // assign position class pos-0 .. pos-3
          <div className={`image-card pos-${i}`} key={`${src}-${i}`}>
            <img src={src} alt={`carousel-${i}`} draggable="false" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImagesCarousel;