import { useState } from "react";

function CourseRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    about: "",
    gender: "",
    skills: [],
    course: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((s) => s !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Submitted!");
  };

  return (
    <>
      <style>{`
        .container {
          width: 550px;
          margin: 40px auto;
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          color: #333;
        }

        label {
          display: block;
          margin-top: 15px;
          font-weight: bold;
        }

        input, textarea, select {
          width: 100%;
          margin-top: 5px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 16px;
        }

        .options label {
          margin-right: 12px;
          font-weight: normal;
        }

        .btn-group {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
        }

        .btn-custom {
          padding: 10px 20px;
          border-radius: 6px;
          border: none;
          background: #007bff;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        .btn-reset {
          padding: 10px 20px;
          border-radius: 6px;
          border: none;
          background: #ddd;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>

      <div className="container">
        <h1>Full Stack Web Development – Registration</h1>

        <form onSubmit={handleSubmit}>

          {/* Text */}
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            onChange={handleChange}
          />

          {/* Email */}
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />

          {/* Password */}
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />

          {/* Textarea */}
          <label>About Yourself</label>
          <textarea
            name="about"
            rows="4"
            placeholder="Write about yourself..."
            onChange={handleChange}
          />

          {/* Radio */}
          <label>Gender</label>
          <div className="options">
            <label>
              <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other
            </label>
          </div>

          {/* Checkboxes */}
          <label>Skills</label>
          <div className="options">
            <label><input type="checkbox" value="HTML" onChange={handleChange} /> HTML</label>
            <label><input type="checkbox" value="CSS" onChange={handleChange} /> CSS</label>
            <label><input type="checkbox" value="JavaScript" onChange={handleChange} /> JavaScript</label>
            <label><input type="checkbox" value="React" onChange={handleChange} /> React</label>
          </div>

          {/* Dropdown */}
          <label>Select Course</label>
          <select name="course" onChange={handleChange}>
            <option value="">Choose...</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Full Stack Development">Full Stack Development</option>
          </select>

          {/* File Upload */}
          <label>Upload ID Proof</label>
          <input type="file" name="file" onChange={handleChange} />

          {/* Buttons */}
          <div className="btn-group">
            <button className="btn-custom" type="submit">Register</button>
            <button className="btn-reset" type="reset">Reset</button>
          </div>

        </form>
      </div>
    </>
  );
}

export default CourseRegistration;
