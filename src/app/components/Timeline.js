import React, { useState } from "react";
import "../styless/timeline.css";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const milestones = [
    {
      era: "1940s-1950s - Early Computing Era",
      details: [
        "During WWII, labor shortages created opportunities for women and minorities in computing.",
        "Notable pioneers included Dorothy Vaughan, Mary Jackson, and Katherine Johnson at NASA.",
      ],
    },
    {
      era: "1960s-1970s - Civil Rights Era",
      details: [
        "Roy Clay Sr. became one of the first Black engineers at HP in 1965 and helped develop their computer division.",
        "Jerry Lawson, a Black engineer, created the first video game console with interchangeable cartridges.",
        "The Civil Rights Act of 1964 opened more opportunities in tech companies.",
      ],
    },
    {
      era: "1980s-1990s - Personal Computer Revolution",
      details: [
        "Rise of computer science programs at Historically Black Colleges and Universities (HBCUs).",
        "Formation of organizations like Black Data Processing Associates (BDPA) to support minorities in tech.",
        "Increased focus on diversity hiring at major tech companies.",
      ],
    },
    {
      era: "2000s-Present",
      details: [
        "Growth of coding bootcamps and alternative education pathways.",
        "Rise of organizations like Black Girls Code and Hispanic IT Executive Council.",
        "Increased focus on diversity in Silicon Valley, though representation gaps persist.",
      ],
    },
  ];

  return (
    <div className="timelineContainer">
      <h1 className="title">Minorities in Tech: The Timeline</h1>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className={`node ${activeIndex === index ? "active" : ""}`}>
            {/* Clickable Circle */}
            <div
              className="circle"
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            ></div>

            {/* Era Title */}
            <div className="era">{milestone.era}</div>

            {/* Expandable Details */}
            {activeIndex === index && (
              <div className="details">
                <ul>
                  {milestone.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
