import "./Form.css";
import { useState } from "react";
function Form() {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState("");
  const [timeslot, setTimeslot] = useState("");
  //   useEffect(() => {
  //     localStorage.setItem("FullName", fullName);
  //     localStorage.setItem("Gender", gender);
  //     localStorage.setItem("Course", languages);
  //     localStorage.setItem("Time", timeslot);
  //   }, [fullName, gender, languages, timeslot]);

  function storeData() {
    localStorage.setItem("FullName", fullName);
    localStorage.setItem("Gender", gender);
    localStorage.setItem("Course", languages);
    localStorage.setItem("Time", timeslot);
  }
  return (
    <>
      <form>
        <div className="div-container">
          <label for="fName">Full Name : </label>
          <br></br>
          <input
            type="text"
            id="fName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>
        <div className="div-container">
          Gender :<br></br>
          <input
            type="radio"
            id="male"
            value="Male"
            name="gender"
            onClick={(e) => {
              setGender(e.target.value);
            }}
          />
          <label for="male">Male</label>
          <input
            type="radio"
            id="female"
            value="Female"
            name="gender"
            onClick={(e) => {
              setGender(e.target.value);
            }}
          />
          <label for="female">Female</label>
        </div>

        <div className="div-container">
          Course : <br></br>
          <select
            onChange={(e) => {
              setLanguages(e.target.value);
            }}
          >
            <option>Select Language</option>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
          </select>
        </div>

        <div className="div-container">
          Time : <br></br>
          <input
            type="checkbox"
            id="time1"
            value="Slot-1"
            onChange={(e) => {
              setTimeslot(e.target.value);
            }}
          />
          <label for="time1">9.00 AM to 10.00 AM</label>
          <br></br>
          <input
            type="checkbox"
            id="time2"
            value="Slot-2"
            onChange={(e) => {
              setTimeslot(e.target.value);
            }}
          />
          <label for="time2">11.00 AM to 12.00 PM</label>
          <br></br>
          <input
            type="checkbox"
            id="time3"
            value="Slot-3"
            onChange={(e) => {
              setTimeslot(e.target.value);
            }}
          />
          <label for="time3">6.00 PM to 7.00 PM</label>
        </div>
        <div className="div-container">
          <button type="button" onClick={storeData}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
