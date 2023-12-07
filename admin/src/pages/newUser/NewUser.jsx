import { useContext, useState } from "react";
import "./newUser.css";
import { UserContext } from "../../context/userContext/UserContext";
import { createUser } from "../../context/userContext/apiCalls";
import { useHistory } from "react-router-dom";

export default function NewUser() {
  const [user, setUser] = useState(null);
  const [profile_pic, setProfile_pic] = useState(null);
  const {dispatch} = useContext(UserContext);
  const history = useHistory();

  const handleChanges = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };
  console.log(user);
  console.log(profile_pic);

  const handleSubmit = (e)=>{
      e.preventDefault();
      createUser(user, dispatch);
      history.push("/users")
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="john"
            onChange={handleChanges}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@gmail.com"
            onChange={handleChanges}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChanges}
          />
        </div>
        <div className="newUserItem">
          <label>Profile Pic</label>
          <input
            type="file"
            name="profilePic"
            placeholder="file"
            onChange={(e) => setProfile_pic(e.target.files[0])}
          />
        </div>
        <div className="newUserItem">
          <label>Is Admin</label>
          <select name="type" onChange={handleChanges}>
            <option>Type</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
