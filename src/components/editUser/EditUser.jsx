import "./editUser.css";

import React, { useState } from "react";

import useStore from "../../zustand/store";

function EditUser({ data, setClose }) {
  const [name, setName] = useState(data.name);
  const [profession, setProfession] = useState(data.profession);
  const [age, setAge] = useState(data.age);
  const [gender, setGender] = useState(data.gender);

  const editUser = useStore((state) => state.editUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name,
      profession,
      age,
      gender,
    };
    editUser(data.id, newData);
    setClose(null);
  };

  return (
    <>
      <div onClick={() => setClose(null)} className="edit__user__overlay"></div>
      <div className="edit__user">
        <div className="edit__user__card">
          <h2 className="edit__user__title">Edit User</h2>
          <form className="edit__user__form" onSubmit={handleSubmit}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
            <input
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              type="text"
              placeholder="Profession"
            />
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              placeholder="Age"
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              id="gender"
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className="edit__user__buttons">
              <button
                className="edit__user__buttons__cancel"
                onClick={() => setClose(null)}
              >
                Cancel
              </button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditUser;
