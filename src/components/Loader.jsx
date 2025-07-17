import { useEffect, useState } from "react";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000);
    const timer2 = setTimeout(() => setLoading(false), 2800);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  if (loading) {
    return (
      <div className={`loader-bg${fadeOut ? " loader-fade" : ""}`}>
        <div className="stars-bg">
          {[...Array(80)].map((_, i) => (
            <div key={i} className="star"></div>
          ))}
        </div>
        <div className="falcon-3d-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
            alt="Millennium Falcon"
            className="falcon-anim-3d"
          />
        </div>
        <h2 className="loader-text">Entrando al hiperespacio...</h2>
      </div>
    );
  }
  return (
    <div className="fade-in">
      {children}
    </div>
  );
};

export default Loader;