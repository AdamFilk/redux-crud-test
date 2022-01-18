import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, updateUserName } from "./features/Users";
import { useRef, useState } from "react";
function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const name = useRef(null);
  const username = useRef(null);
  const [newUsername, setNewUsername] = useState(null);
  return (
    <div className="App">
      <div className="addUsers">
        <input type="text" placeholder="name" ref={name} />
        <input type="text" placeholder="user name..." ref={username} />
        <button
          onClick={() =>
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name.current.value,
                username: username.current.value,
              })
            )
          }
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <input
                type="text"
                onChange={(event) => setNewUsername(event.target.value)}
              />
              <button
                onClick={() =>
                  dispatch(
                    updateUserName({
                      id: user.id,
                      username: newUsername,
                    })
                  )
                }
              >
                Update Username
              </button>
              <button onClick={() => dispatch(removeUser({ id: user.id }))}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
