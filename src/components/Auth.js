import React, { useState } from "react";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container flex flex-col items-center justify-center">
      {!index ? <Login /> : <Registration />}
      <p className="text-blue-600 text-center" onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </p>
    </div>
  );
};

export default Auth;