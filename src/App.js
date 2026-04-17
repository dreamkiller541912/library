import React, { useState } from "react";
import data from "./data/libraryData.json"; // ✅ IMPORT JSON

export default function LibraryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "",
  });

  const [members, setMembers] = useState(data.members); // ✅ LOAD DATA

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMember = {
      id: members.length + 1,
      ...formData,
    };

    const updatedMembers = [...members, newMember];

    setMembers(updatedMembers); // ✅ update UI
    console.log("Updated Members:", updatedMembers);

    alert("Form submitted successfully!");

    // reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      membershipType: "",
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Library Subscription Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="membershipType"
          value={formData.membershipType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Membership</option>
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>

      {/* ✅ Display Members */}
      <div className="mt-6">
        <h3 className="font-bold">Member List</h3>
        <ul>
          {members.map((m) => (
            <li key={m.id}>
              {m.name} - {m.membershipType}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}