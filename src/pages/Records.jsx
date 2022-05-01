import React, {useEffect, useState} from 'react';
import {ref, onValue } from "firebase/database";
import Navbar from '../components/Navbar';
import Navigation from '../components/Navigation';
import { database } from "../firebase";
import { useUserContext } from "../context/userContext";
const Records = () => {
    const {user} = useUserContext();
    const [exit_time, setExitTime] = useState();
    const[quitt_time, setQuitTime] = useState();
    const [total, setTotal] = useState();
    useEffect(()=>{
        const  starCountRef = ref(database, 'first_door/Persons/' + user.uid);
        onValue( starCountRef, (snapshot) => {
      const res = snapshot.val().enter_time;
      const exit_time = res - snapshot.val().in_time;
      const exit_hour = Math.trunc(exit_time/3600);
      const exit_min = Math.trunc(((exit_time/3600)-exit_hour)*60);
      const quit_time = exit_hour + ":" + exit_min;
      setQuitTime(quit_time);


      const total = Math.trunc((snapshot.val().total_in_time)/3600);
      const hour = Math.trunc(res/3600);
      const min = Math.trunc(((res/3600)-hour)*60);
      const enter_time = hour + ":" + min;
      setExitTime(enter_time);
      setTotal(total);
    })
    
      }, []);
    return (
        <>
        <Navbar title={"Gate Entry Records"} />
        <div className="records w-full h-full mt-20">
        <div className="flex flex-col justify-between items-center p-5">
        <div className="">
            Entry time:
        </div>
        <div className="">
            {exit_time}
        </div>
        <div className="">
            Exit time:
        </div>
        <div className="">
            {quitt_time}
        </div>
        <div className="">
            Total worked time:
        </div>
        <div className="">
            {total}
        </div>
        </div>
        </div>
        <Navigation />
        </>
      );
}
 
export default Records;