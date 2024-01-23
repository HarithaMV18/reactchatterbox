import React, { useState } from "react";
import "./signUp.css";
import { Link } from "react-router-dom";
import { MdAddAPhoto } from "react-icons/md";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { storage, db } from "../../../database/firebase";

const SignUp = ({ auth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [err, setErr] = useState(false);
  const signupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, profilePhoto);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log(downloadURL);
            // await updateProfile(response.user, {
            //   displayName: name,
            //   photoURL: downloadURL,
            // });

            // await setDoc(doc(db, "users", response.user.uid), {
            //   uid: response.user.uid,
            //   displayName: name,
            //   photoURL: downloadURL,
            //   email: email,
            // });
          });
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err.message);
      setErr(true);
    }
  };

  return !err ? (
    <div className="signup">
      <div className="signUp__page">
        <form onSubmit={(e) => signupSubmit(e)}>
          <h3>Chatter Box</h3>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="avatar">
            <MdAddAPhoto />
            <span>Add profile photo</span>
          </label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={(e) => setProfilePhoto(e.target.files[0])}
            style={{ display: "none" }}
          />
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
        <p>
          You do have an account?{" "}
          <Link to="/signin">
            <span>SignIn</span>
          </Link>
        </p>
      </div>
    </div>
  ) : (
    <p style={{ color: "white" }}>Something went wrong</p>
  );
};

export default SignUp;
