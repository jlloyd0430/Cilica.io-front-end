import "./App.css";
import Form2 from "./components/Form/Form";
import Navbar2 from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import { useState } from "react";
import { Router, Link } from "react-router-dom";

function UsersProfile() {
  const [currentId, setCurrentId] = useState(null);

  // as soon as currentId is updated (submit/clear form), the app is going to dispatch getPosts action

  return (
    <div className="bg-light-mode dark:bg-dark-mode min-h-screen">
      <Navbar2 />
      <div className="container mx-auto pt-8">
        <div className="flex justify-center">
          <Form2 currentId={currentId} setCurrentId={setCurrentId} />
        </div>

        <div className="mx-auto px-2 sm:px-5">
          {/* <div className="col-span-5 sm:pr-4"> */}
          <Posts setCurrentId={setCurrentId} />
          {/* </div> */}
          {/* <div className="col-span-2 px-2 sm:px-0">
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default UsersProfile;
