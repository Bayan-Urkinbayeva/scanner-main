import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="w-full fixed bottom-0 bg-white border-t-2 border-slate-100 p-3">
      <div className="row grid grid-cols-2 font-bold">
        <div className="span-col-1">
          <NavLink to="/" className="flex flex-col items-center ">
            <FontAwesomeIcon icon={faQrcode} className="icon" />
            <span style={{ fontSize: "14px" }}>QR</span>
          </NavLink>
        </div>
        <div className="span-col-1">
          <NavLink to="/profile" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span style={{ fontSize: "14px" }}>Profile</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
