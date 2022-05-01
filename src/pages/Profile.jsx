import React, {useState, useEffect} from "react";
import { ref, onValue } from "firebase/database";
import Navigation from "../components/Navigation";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import { database } from "../firebase";
const Profile = () => {
  const {user, logout} = useUserContext();
  const [total, setTotal] = useState();
  const [data, setData] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    date: "",
    field: "",
    position: "",
  });
  useEffect(()=>{
   
    const  starCountRef = ref(database, 'first_door/Persons/' + user.uid);
    onValue( starCountRef, (snapshot) => {
  const res = snapshot.val();
  const total = Math.trunc((snapshot.val().total_in_time)/3600);
  setTotal(total);
  console.log(res);
  setData({
    id: res.uid,
    name: res.name,
    surname: res.surname,
    email: res.email,
    date: res.date,
    field: res.field,
    position: res.position
  })
})

  }, []);
  return (
    <>
      <Navbar title={"Employee Information"} />
      <div className=" h-full w-full flex justify-center items-center">
      <div className="info flex flex-col justify-center items-center text-center">
        <div className="user_img"></div>
        <div className="w-full user_info flex items-center justify-evenly">
          <div className="data text-left">
          <p>Employee №: </p>
          <p>Name:</p>
          <p>Email: </p>
          <p>Surname: </p>
          <p>Date of birth:</p>
          <p>Field:</p>
          <p>Positon:</p>
          <p>Flex-status:</p>
          </div>
          <div className="user_data">
          <p>{user.uid}</p>
          <p>{data.name}</p>
          <p>{data.email }</p>
          <p>{data.surname}</p>
          <p>{data.date}</p>
          <p>{data.field}</p>
          <p>{data.position}</p>
          <Link to="/records">
              <p className="text-blue-600 text-[16px]">
              {total}/40 hours worked
              </p>
          </Link>
          </div>
        </div>
        <button onClick={logout} className=" mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4" type="submit">
            Logout
          </button>
      </div>
      </div>
      <Navigation />
    </>
  );
};
export default Profile;
