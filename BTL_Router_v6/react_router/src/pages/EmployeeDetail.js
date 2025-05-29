import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EmployeeDetail() {
  const { id } = useParams(); // Lấy id từ url
  const navigate = useNavigate();

  // Danh sách nhân viên demo (bạn có thể lấy dữ liệu từ API hoặc Context nếu có)
  const employees = [
    {
      id: 1,
      name: "Fatima Beatriz",
      email: "Fatima Beatriz@gmail.com",
      phone: "0985674321",
      position: "Staff",
    },
    {
      id: 2,
      name: "Gabriel Hanna",
      email: "Gabriel Hanna@gmail.com",
      phone: "0353674231",
      position: "Staff",
    },
    {
      id: 3,
      name: "Charles Diya",
      email: "Charles Diya@gmail.com",
      phone: "0347658833",
      position: "Staff",
    },
    {
      id: 4,
      name: "Frank Lamdo",
      email: "Frank Lamdo@gmail.com",
      phone: "0975444768",
      position: "Manager",
    },
    {
      id: 5,
      name: "Louis Tom",
      email: "Louis Tom@gmail.com",
      phone: "0789568223",
      position: "Staff",
    },
  ];

  // Tìm nhân viên theo id (id từ url là string, cần chuyển sang number)
  const employee = employees.find((e) => e.id === Number(id));

  if (!employee) {
    return (
      <main style={{ padding: "20px" }}>
        <h2>Employee not found!</h2>
        <button onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
          Go Back
        </button>
      </main>
    );
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>Employee Detail</h1>
      <p>
        <strong>ID:</strong> {employee.id}
      </p>
      <p>
        <strong>Name:</strong> {employee.name}
      </p>
      <p>
        <strong>Email:</strong> {employee.email}
      </p>
      <p>
        <strong>Phone:</strong> {employee.phone}
      </p>
      <p>
        <strong>Position:</strong> {employee.position}
      </p>

      <button
        onClick={() => navigate(-1)}
        style={{ marginTop: "20px", cursor: "pointer" }}
      >
        Back
      </button>
    </main>
  );
}
