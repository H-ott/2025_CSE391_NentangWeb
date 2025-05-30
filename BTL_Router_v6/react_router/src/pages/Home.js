import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  // Lấy dữ liệu từ localStorage hoặc dùng danh sách mặc định
  const savedEmployees = localStorage.getItem("employees");
  const initialEmployees = savedEmployees
    ? JSON.parse(savedEmployees)
    : [
        {
          id: 1,
          name: "Tăng Đức Khánh",
          email: "khanh2mat@gmail.com",
          phone: "0985674321",
          position: "Staff",
          gender: "Male",
          birthYear: 2005,
          hometown: "Hải Phòng 2",
        },
        {
          id: 2,
          name: "Nguyễn Đình Hoàng",
          email: "hoangnhatgai@gmail.com",
          phone: "0353674231",
          position: "Staff",
          gender: "Female",
          birthYear: 1998,
          hometown: "Thanh Hóa",
        },
        {
          id: 3,
          name: "Nguyễn Nam Thắng",
          email: "thangvipphuxuyen1@gmail.com",
          phone: "0347658833",
          position: "Staff",
          gender: "Male",
          birthYear: 1995,
          hometown: "Hà Nội 2",
        },
        {
          id: 4,
          name: "Chu Quang Nguyên",
          email: "chuquangnguyen2005@gmail.com",
          phone: "0975444768",
          position: "Manager",
          gender: "Male",
          birthYear: 2005,
          hometown: "Nghệ An",
        },
        {
          id: 5,
          name: "Louis Tom",
          email: "Louis Tom@gmail.com",
          phone: "0789568223",
          position: "Staff",
          gender: "Male",
          birthYear: 1995,
          hometown: "Ho Chi Minh City",
        },
      ];

  const [employees, setEmployees] = useState(initialEmployees);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    position: "Staff",
    gender: "",
    birthYear: "",
    hometown: "",
  });

  // Cập nhật localStorage mỗi khi employees thay đổi
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Handle open add modal
  const openAddModal = () => {
    setFormData({
      id: null,
      name: "",
      email: "",
      phone: "",
      position: "Staff",
      gender: "",
      birthYear: "",
      hometown: "",
    });
    setCurrentEmployee(null);
    setModalOpen(true);
  };

  // Handle open edit modal
  const openEditModal = (employee) => {
    setFormData({
      ...employee,
      birthYear: employee.birthYear ? employee.birthYear.toString() : "",
    });
    setCurrentEmployee(employee);
    setModalOpen(true);
  };

  // Handle close modal
  const closeModal = () => setModalOpen(false);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save employee (add or update)
  const saveEmployee = (e) => {
    e.preventDefault();

    const dataToSave = {
      ...formData,
      birthYear: Number(formData.birthYear),
    };

    if (dataToSave.id) {
      // Update
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === dataToSave.id ? dataToSave : emp))
      );
    } else {
      // Add new with id nextId
      const newId = employees.length
        ? Math.max(...employees.map((e) => e.id)) + 1
        : 1;
      setEmployees((prev) => [...prev, { ...dataToSave, id: newId }]);
    }
    closeModal();
  };

  // Delete employee
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const openDeleteModal = (employee) => {
    setEmployeeToDelete(employee);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setEmployeeToDelete(null);
  };

  const confirmDelete = () => {
    if (employeeToDelete) {
      setEmployees((prev) =>
        prev.filter((emp) => emp.id !== employeeToDelete.id)
      );
      closeDeleteModal();
    }
  };

  return (
    <main>
      <div className="header">
        <h1>Employee</h1>
        <button className="add-btn" onClick={openAddModal}>
          + Add
        </button>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Position</th>
            <th>Action</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.position}</td>
              <td className="action-buttons">
                <button className="edit-btn" onClick={() => openEditModal(emp)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => openDeleteModal(emp)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="view-btn"
                  onClick={() =>
                    navigate(`/employee/${emp.id}`, { state: emp })
                  }
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Add/Edit */}
      {modalOpen && (
        <div className="modal" style={{ display: "flex" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>{currentEmployee ? "Edit Employee" : "Add Employee"}</h2>
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
            </div>
            <form onSubmit={saveEmployee}>
              <input type="hidden" name="id" value={formData.id || ""} />

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  name="phone"
                  id="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="position">Position</label>
                <select
                  name="position"
                  id="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                >
                  <option value="Staff">Staff</option>
                  <option value="Manager">Manager</option>
                  <option value="Director">Director</option>
                  <option value="HR">HR</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="birthYear">Birth Year</label>
                <input
                  name="birthYear"
                  id="birthYear"
                  type="number"
                  value={formData.birthYear}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="hometown">Hometown</label>
                <input
                  name="hometown"
                  id="hometown"
                  type="text"
                  value={formData.hometown}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Save
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteModalOpen && (
        <div className="modal" style={{ display: "flex" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Confirm Delete</h2>
              <button className="close-btn" onClick={closeDeleteModal}>
                &times;
              </button>
            </div>
            <p>Are you sure you want to delete this employee?</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <button
                onClick={closeDeleteModal}
                style={{
                  padding: "8px 16px",
                  border: "1px solid #ced4da",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
