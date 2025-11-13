"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FormControl, FormSelect, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const updateProfile = async () => {
    try {
      const updatedProfile = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedProfile));
      alert("Profile updated successfully!");
    } catch (error: any) {
      alert(error.message || "Failed to update profile. Please try again.");
    }
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    router.push("/Account/Signin");
  };

  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  return (
    <div id="wd-profile-screen" className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ width: "500px" }}>
        <h1 className="text-center mb-4">Profile</h1>
        {profile && (
          <>
            <FormControl
              value={profile.username || profile.loginId || ""}
              onChange={(e) => setProfile({ ...profile, username: e.target.value })}
              placeholder="username"
              className="mb-2"
            />
            <FormControl
              value={profile.password || ""}
              onChange={(e) => setProfile({ ...profile, password: e.target.value })}
              placeholder="password"
              type="password"
              className="mb-2"
            />
            <FormControl
              value={profile.firstName || ""}
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
              placeholder="First Name"
              className="mb-2"
            />
            <FormControl
              value={profile.lastName || ""}
              onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
              placeholder="Last Name"
              className="mb-2"
            />
            <FormControl
              value={profile.dob || ""}
              onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
              type="date"
              className="mb-2"
            />
            <FormControl
              value={profile.email || ""}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              type="email"
              placeholder="Email"
              className="mb-2"
            />
            <FormSelect
              value={profile.role || "USER"}
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
              className="mb-3"
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </FormSelect>
            <Button variant="primary" className="w-100 mb-2" onClick={updateProfile} id="wd-update-profile-btn">
              Update
            </Button>
            <Button variant="danger" className="w-100" onClick={signout}>
              Sign out
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
