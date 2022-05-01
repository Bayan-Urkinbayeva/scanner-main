import React, {useRef} from "react";
import { useUserContext } from "../context/userContext";
const Registration = () => {
    
 
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();  
  const surnameRef = useRef();
  const positionRef = useRef();
  const fieldRef = useRef();
  const dateRef = useRef();

  const {registerUser} = useUserContext();

  
  const onSubmit = (e) =>{
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    const surname = surnameRef.current.value;
    const field = fieldRef.current.value;
    const position = positionRef.current.value;
    const date = dateRef.current.value;
    if(email && name && password && surname && position && field && date) registerUser(email, password,name, surname, position, field, date);
    
  }
  return (
    <div className="flex items-center">
      <main className="form-signin m-auto w-full" style={{ maxWidth: "300px" }}>
        <form className="flex flex-col items-center " onSubmit={onSubmit}  >
        <svg
            width="231"
            className="mb-8"
            height="64"
            viewBox="0 0 231 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.91823 6.072C3.3915 7.22284 -0.966526 13.4467 0.184313 19.9735L6.072 53.3642C7.22284 59.8909 13.4467 64.249 19.9735 63.0981L53.3642 57.2104C59.8909 56.0596 64.249 49.8357 63.0981 43.309L57.2104 9.91823C56.0596 3.3915 49.8357 -0.966526 43.309 0.184313L9.91823 6.072ZM49.0965 37.3181C50.4338 44.9026 44.5326 51.1175 35.5224 52.7062C26.1131 54.3653 19.0929 50.8993 17.7153 43.0867L17.5343 42.0602L25.1758 40.7128L25.3266 41.5682C25.9802 45.2749 29.3611 47.4423 34.7216 46.4971C39.4548 45.6625 42.1621 43.0096 41.5085 39.3029C41.1164 37.0789 39.7513 35.6732 36.9505 35.4615L26.0421 34.6213C19.7258 34.1475 16.3818 31.856 15.326 25.8682C13.9987 18.3408 18.907 12.8302 27.8601 11.2515C36.6991 9.69296 43.1524 13.6118 44.3892 20.626L44.5602 21.5955L37.2038 22.8926L37.063 22.0942C36.4698 18.7297 33.8503 16.5456 28.946 17.4103C24.7261 18.1544 22.2905 20.3479 22.9039 23.8265C23.3161 26.1645 24.7449 27.265 27.0695 27.4431L38.5314 28.4208C44.6765 28.9248 48.1412 31.9007 49.0965 37.3181Z"
              fill="#404CCF"
            />
            <path
              d="M80.3848 49.79C88.4337 49.79 93.8769 44.7522 94.1085 37.8614H86.9282C86.5807 40.8146 84.7277 43.4204 80.5585 43.4204C76.0998 43.4204 74.0151 40.5251 74.0151 36.4717V31.6076C74.0151 27.5542 76.0998 24.6589 80.5585 24.6589C84.7277 24.6589 86.5807 27.2647 86.9282 30.2178H94.1085C93.8769 23.3271 88.4337 18.2892 80.3848 18.2892C71.2936 18.2892 66.14 24.0219 66.14 31.8971V36.1822C66.14 44.0573 71.2936 49.79 80.3848 49.79Z"
              fill="#404CCF"
            />
            <path
              d="M106.054 49.79C109.528 49.79 113.35 48.3424 114.74 46.3157V49.0952H122.325V29.8704C122.325 22.8638 117.172 18.2892 109.644 18.2892C103.159 18.2892 98.4682 21.4162 96.731 27.2647H104.027C104.838 25.6433 106.517 24.4273 109.239 24.4273C112.481 24.4273 114.45 26.5119 114.45 29.2914V33.4027C113.06 32.2446 110.397 30.8548 106.807 30.8548C99.5684 30.8548 94.6464 33.8659 94.6464 40.4093C94.6464 46.2578 99.2788 49.79 106.054 49.79ZM108.081 44.5785C104.78 44.5785 102.29 42.9571 102.29 40.1777C102.29 37.3982 104.606 35.8926 108.312 35.8926C111.844 35.8926 114.45 37.4561 114.45 40.1197C114.45 42.6676 111.555 44.5785 108.081 44.5785Z"
              fill="#404CCF"
            />
            <path
              d="M125.16 49.0952H133.036V31.2602C133.036 27.2067 135.294 25.1221 138.826 25.1221C142.648 25.1221 144.327 27.6121 144.327 31.0864V49.0952H152.203V29.8125C152.203 22.5743 148.091 18.2892 141.548 18.2892C137.263 18.2892 134.194 19.7948 132.688 22.5743V18.9841H125.16V49.0952Z"
              fill="#404CCF"
            />
            <path
              d="M155.023 49.0952H162.898V31.2602C162.898 27.2067 165.156 25.1221 168.688 25.1221C172.51 25.1221 174.19 27.6121 174.19 31.0864V49.0952H182.065V29.8125C182.065 22.5743 177.953 18.2892 171.41 18.2892C167.125 18.2892 164.056 19.7948 162.55 22.5743V18.9841H155.023V49.0952Z"
              fill="#404CCF"
            />
            <path
              d="M197.566 49.79C204.225 49.79 209.611 45.7945 210.653 40.2935H203.762C203.009 42.3781 200.925 44.1153 197.566 44.1153C192.992 44.1153 191.197 41.0462 191.197 37.514V36.7612H210.885V31.4918C210.885 24.2535 206.368 18.2892 197.451 18.2892C188.417 18.2892 183.553 24.0798 183.553 32.2446V36.3559C183.553 44.8101 189.054 49.79 197.566 49.79ZM191.197 30.9127C191.197 26.8593 192.934 23.8482 197.451 23.8482C201.678 23.8482 203.646 26.6856 203.646 30.4495V31.2022H191.197V30.9127Z"
              fill="#404CCF"
            />
            <path
              d="M212.655 49.0952H220.53V35.1978C220.53 29.1176 223.31 26.5698 228.463 26.5698H230.085V18.7525H229.158C224.641 18.7525 221.109 20.3159 220.125 24.8326V18.9841H212.655V49.0952Z"
              fill="#404CCF"
            />
          </svg>
          <input placeholder="Email" label="Email" name="email" type="email" ref={emailRef} />
          <input className="mt-1" placeholder="Password" label="Password" name="password" type="password" ref={psdRef}/>
          <input className="mt-1" placeholder="Name" type="text" label="Name" name="name" ref={nameRef} />
          <input className="mt-1" placeholder="Surname" type="text" label="Surname" name="surname" ref={surnameRef} />
          <input className="mt-1" placeholder="Field" type="text" label="Field" name="field" ref={fieldRef} />
          <input className="mt-1" placeholder="Position" type="text" label="Position" name="position" ref={positionRef} />
          <input className="mt-1" placeholder="Birth date" type="date" label="Birth date" name="date" ref={dateRef}/>
          <div className=" mt-4  login w-full flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4 mt-2" type="submit">
            Зарегистрироваться
          </button>
          </div>
            <p className="text-blue-600 text-center">Войти</p>
        </form>
      </main>
    </div>
  );
};

export default Registration;
