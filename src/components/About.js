import React, { useState } from "react";
import about from "../about.json";
import Data from "./Data"

const About = () => {
  const [dis,setDis] = useState();
  const visible = (id) => {
    setDis(id)
  };
  
  return (
    <div className="container-fluid about p-3 mb-3">
      <div className="row mb-5">
        <div className="col-lg-8 col-md-auto">
        {<Data id={dis}/>}
        </div>
        <div className="col-auto m-5">
          <div className="col">
            {about.about.map((inf) => (
              <div className="row my-2">
                <a
                  onClick={visible.bind(this, inf.id)}
                  className="btn btn-primary"
                  key={inf.id}
                >
                  {inf.info}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
