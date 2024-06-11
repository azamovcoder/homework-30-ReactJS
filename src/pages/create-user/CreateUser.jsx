import "./CreateUser.css";

import React, { useState } from "react";

import useStore from "../../zustand/store";

function CreateUser() {
  const addUser = useStore((state) => state.addUser);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const handleCreate = (e) => {
    e.preventDefault();
    const data = {
      id: new Date().getTime(),
      name,
      profession,
      age,
      gender,
    };
    addUser(data);
    setName("");
    setProfession("");
    setAge("");
    setGender("");
  };

  return (
    <section className="create">
      <div className="create__user">
        <h2>Create User</h2>
        <form onSubmit={handleCreate} className="create__user-form" action="">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name"
          />
          <input
            required
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            type="text"
            placeholder="profession"
          />
          <input
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="age"
          />
          <select
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            name=""
            id=""
          >
            <option value="">gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <button type="submit">Create</button>
        </form>
      </div>
    </section>
  );
}

export default CreateUser;
