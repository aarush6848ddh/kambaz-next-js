"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Table, Button, Modal, FormControl, FormSelect } from "react-bootstrap";
import { FaUserCircle, FaTrash, FaPencilAltAlt, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import * as usersClient from "../client";
import * as enrollmentsClient from "../../../../Enrollments/client";

export default function PeopleTable() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolledUsers, setEnrolledUsers] = useState<any[]>([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [userForm, setUserForm] = useState<any>({
    firstName: "",
    lastName: "",
    loginId: "",
    password: "",
    role: "STUDENT",
    section: "",
  });
  
  const isFaculty = currentUser?.role === "FACULTY";
  
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await usersClient.findUsersEnrolledInCourse(cid as string);
      setEnrolledUsers(users);
    };
    fetchUsers();
  }, [cid]);
  
  const handleEdit = (user: any) => {
    setSelectedUser(user);
    setUserForm({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      loginId: user.loginId || user.username || "",
      password: user.password || "",
      role: user.role || "STUDENT",
      section: user.section || "",
    });
    setShowEditModal(true);
  };
  
  const handleDelete = (user: any) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };
  
  const handleCreate = () => {
    setSelectedUser(null);
    setUserForm({
      firstName: "",
      lastName: "",
      loginId: "",
      password: "",
      role: "STUDENT",
      section: "",
    });
    setShowCreateModal(true);
  };
  
  const saveUser = async () => {
    try {
      if (selectedUser) {
        // Update existing user
        const updatedUser = await usersClient.updateUser({
          ...selectedUser,
          ...userForm,
          username: userForm.loginId,
        });
        setEnrolledUsers(enrolledUsers.map((u) => (u._id === updatedUser._id ? updatedUser : u)));
        setShowEditModal(false);
      } else {
        // Create new user
        const newUser = await usersClient.createUser({
          ...userForm,
          username: userForm.loginId,
        });
        // Auto-enroll the new user in the current course
        try {
          await enrollmentsClient.enrollUserInCourse(newUser._id, cid as string);
        } catch (error) {
          console.error("Error enrolling user:", error);
        }
        setEnrolledUsers([...enrolledUsers, newUser]);
        setShowCreateModal(false);
      }
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Failed to save user. Please try again.");
    }
  };
  
  const confirmDelete = async () => {
    if (!selectedUser) return;
    try {
      await usersClient.deleteUser(selectedUser._id);
      setEnrolledUsers(enrolledUsers.filter((u) => u._id !== selectedUser._id));
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user. Please try again.");
    }
  };

  return (
    <div id="wd-people-table">
      {isFaculty && (
        <div className="mb-3">
          <Button variant="primary" onClick={handleCreate}>
            <FaPlus className="me-1" />
            Add User
          </Button>
        </div>
      )}
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
            {isFaculty && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId || user.username}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity || "N/A"}</td>
              <td className="wd-total-activity">{user.totalActivity || "N/A"}</td>
              {isFaculty && (
                <td>
                  <Button
                    variant="link"
                    size="sm"
                    className="text-primary p-0 me-2"
                    onClick={() => handleEdit(user)}
                  >
                    <FaPencilAlt />
                  </Button>
                  <Button
                    variant="link"
                    size="sm"
                    className="text-danger p-0"
                    onClick={() => handleDelete(user)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      
      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <FormControl
              value={userForm.firstName}
              onChange={(e) => setUserForm({ ...userForm, firstName: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <FormControl
              value={userForm.lastName}
              onChange={(e) => setUserForm({ ...userForm, lastName: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Login ID</label>
            <FormControl
              value={userForm.loginId}
              onChange={(e) => setUserForm({ ...userForm, loginId: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <FormControl
              type="password"
              value={userForm.password}
              onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <FormSelect
              value={userForm.role}
              onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
            >
              <option value="STUDENT">Student</option>
              <option value="FACULTY">Faculty</option>
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
            </FormSelect>
          </div>
          <div className="mb-3">
            <label className="form-label">Section</label>
            <FormControl
              value={userForm.section}
              onChange={(e) => setUserForm({ ...userForm, section: e.target.value })}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      
      {/* Create Modal */}
      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <FormControl
              value={userForm.firstName}
              onChange={(e) => setUserForm({ ...userForm, firstName: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <FormControl
              value={userForm.lastName}
              onChange={(e) => setUserForm({ ...userForm, lastName: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Login ID</label>
            <FormControl
              value={userForm.loginId}
              onChange={(e) => setUserForm({ ...userForm, loginId: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <FormControl
              type="password"
              value={userForm.password}
              onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <FormSelect
              value={userForm.role}
              onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
            >
              <option value="STUDENT">Student</option>
              <option value="FACULTY">Faculty</option>
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
            </FormSelect>
          </div>
          <div className="mb-3">
            <label className="form-label">Section</label>
            <FormControl
              value={userForm.section}
              onChange={(e) => setUserForm({ ...userForm, section: e.target.value })}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveUser}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      
      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {selectedUser?.firstName} {selectedUser?.lastName}? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

