import { API, graphqlOperation } from "aws-amplify";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createUser } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const users = useSelector((s) => s.users);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const checkUser = users.find((val) => val.name === name);
    if (!checkUser) {
      const userId = uuidv4();
      if (name !== "") {
        try {
          const res = await API.graphql(
            graphqlOperation(createUser, {
              input: { name: name, userId: userId },
            })
          );
          console.log(res);
          if (res) {
            navigate("/chat");
            localStorage.setItem("username", name);
            localStorage.setItem("userId", userId);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Please enter your name");
      }
    } else {
      navigate("/chat");
      localStorage.setItem("username", name);
      const filterUser = users.find((val) => val.name === name);
      localStorage.setItem("userId", filterUser.userId);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[400px] flex justify-center items-center flex-col gap-3 p-3">
        <h1>Enter your name</h1>
        <input
          type="text"
          placeholder="Name here..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border-[1px] border-gray-200 rounded-sm "
        />
        <button
          className="bg-teal-400 py-2 flex justify-center items-center text-white w-full"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
