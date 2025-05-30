import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./EmployeeDetail.css";

export default function EmployeeDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(location.state || null);

  useEffect(() => {
    if (!location.state || location.state.id !== Number(id)) {
      // Lấy dữ liệu nhân viên từ localStorage
      const savedEmployees = localStorage.getItem("employees");
      let employees = [];
      if (savedEmployees) {
        try {
          employees = JSON.parse(savedEmployees);
        } catch {
          employees = [];
        }
      }

      const found = employees.find((e) => e.id === Number(id));
      setEmployee(found);
    }
  }, [id, location.state]);

  if (!employee) {
    return (
      <main style={{ padding: "20px" }}>
        <h2>Employee not found!</h2>
        <button
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer", padding: "8px 16px" }}
        >
          Go Back
        </button>
      </main>
    );
  }

  return (
    <div className="fancy-container">
      <div className="fancy-card">
        <div className="fancy-header">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              employee.name
            )}&background=ff6f61&color=fff&size=128`}
            alt="avatar"
            className="fancy-avatar"
          />
          <h2>{employee.name}</h2>
          <div className="fancy-badge">{employee.position}</div>
        </div>
        <div className="fancy-body">
          <p>
            <strong>ID:</strong> {employee.id}
          </p>
          <p>
            <strong>Email:</strong> {employee.email}
          </p>
          <p>
            <strong>Phone:</strong> {employee.phone}
          </p>
          {employee.gender && (
            <p>
              <strong>Gender:</strong>{" "}
              {employee.gender === "Male"
                ? "Nam"
                : employee.gender === "Female"
                ? "Nữ"
                : "Khác"}
            </p>
          )}
          {employee.birthYear && (
            <>
              <p>
                <strong>Birth Year:</strong> {employee.birthYear}
              </p>
              <p>
                <strong>Age:</strong>{" "}
                {new Date().getFullYear() - employee.birthYear} tuổi
              </p>
            </>
          )}
          {employee.hometown && (
            <p>
              <strong>Hometown:</strong> {employee.hometown}
            </p>
          )}
        </div>
        <button
          className="fancy-back"
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        >
          ⬅ Back to List
        </button>
      </div>
    </div>
  );
}
