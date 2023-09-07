import React, { useContext } from "react";
import { db } from "../../firebaseConfig"; // update with your path to firestore config
import { collection, addDoc } from "firebase/firestore";
import { UserContext } from "../../context/UserContext";
import FormMovie from "./FormMovie";

export default function AddNewMovie() {
  const { update, setUpdate, user } = useContext(UserContext);
  let valuesAllInputs = { title: "", description: "", country: "", img: "" };

  function change(e) {
    valuesAllInputs[e.target.name] = e.target.value;
  }

  function addMovie(e) {
    e.preventDefault();

    addDoc(collection(db, "movies"), {
      ...valuesAllInputs,
      userId: user.uid,
      id: new Date().getUTCMilliseconds(),
    });
    valuesAllInputs = { title: "", description: "", country: "", img: "" };
    setUpdate(!update);
  }

  return (
    <>
      <div className="my-5 col-8 mx-auto">
        <FormMovie change={change} addMovie={addMovie} />
      </div>
    </>
  );
}
