import "./Users.css";

import React, { useState } from "react";

import EditUser from "../editUser/EditUser";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import useStore from "../../zustand/store";

function Users() {
  const [edit, setEdit] = useState(null);
  const user = useStore((state) => state.usersData);
  const removeUser = useStore((state) => state.removeUser);

  let UserData = user?.map((el) => (
    <div key={el.id} className="users__card">
      <img src={el.gender === "male" ? male : female} alt="" />
      <h2> {el.name}</h2>
      <p>profession: {el.profession}</p>
      <p>age: {el.age}</p>
      <p>gender: {el.gender}</p>
      <div className="users__card__buttons">
        <button onClick={() => removeUser(el.id)}>
          <MdDeleteOutline />
        </button>
        <button className="users__card__edit-btn" onClick={() => setEdit(el)}>
          <FaUserEdit />
        </button>
      </div>
    </div>
  ));
  return (
    <>
      <div className="users__wrapper">{UserData}</div>
      {edit ? <EditUser data={edit} setClose={setEdit} /> : <></>}
    </>
  );
}

export default Users;
