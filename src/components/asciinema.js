import React, { useEffect } from 'react'

const useScript = ({ ref, src, id, rows = 16, autoPlay = false, loop = false }) => {
  useEffect(() => {
    if(!ref.current) return
    const script = document.createElement('script');

    script.src = src;
    script.id = id;
    script.dataset.autoplay = autoPlay;
    script.dataset.loop = loop;
    script.dataset.size = 'small';
    script.dataset.rows = rows;
    script.dataset.cols = 120;
    script.async = true;

    ref.current.appendChild(script);

    return () => {
      ref.current && ref.current.removeChild(script);
    }
  }, [ref]);
};


const Asciinema = ({ id, src, rows, autoPlay, loop }) => {
  const ref = React.useRef()
  useScript({ ref: ref, id, src, rows, autoPlay, loop });

  return <div key={id} ref={ref}/>;
}

export default Asciinema