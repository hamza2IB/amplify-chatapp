import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/chat/Chat";
import { useEffect } from "react";
import { API, Amplify, graphqlOperation } from "aws-amplify";
import { listUsers } from "./graphql/queries";
import awsmobile from "./aws-exports";
import { useDispatch } from "react-redux";
import { getAllUsers } from "./Redux/slices/UsersSlice";
import "primereact/resources/themes/lara-light-indigo/theme.css";

Amplify.configure(awsmobile);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await API.graphql(graphqlOperation(listUsers));
        dispatch(getAllUsers(res.data.listUsers.items));
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
