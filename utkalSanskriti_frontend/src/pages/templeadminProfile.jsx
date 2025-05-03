import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMasterAdminProfileData } from "../redux/thunks/masteradminProfileThunks";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  getProfileImage
} from "../redux/thunks/editProfileThunks";

const templeadminProfile = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const [activeSection] = useState("profile");
  
    const UserId = useSelector((state) => state.auth?.userId);
    const { masterProfile, status, error } = useSelector(
      (state) => state.masterProfile
    );
    const { profileImage } = useSelector((state) => state.editprofile);
  
    useEffect(() => {
      if (UserId) {
        dispatch(fetchMasterAdminProfileData(UserId));
      }
    }, [dispatch, UserId]);
  useEffect(() => {
      if (UserId) {
        // dispatch(fetchMasterAdminProfileData(userId));
        dispatch(getProfileImage(UserId));
      }
    }, [dispatch, UserId]);
    return (
      <div className="bg-gradient-to-r from-blue-100 to-blue-300 p-10 flex justify-center">
        <div className="max-w-3xl w-full bg-white shadow-2xl rounded-lg overflow-hidden p-8 relative">
          {status === "loading" && <p className="text-center text-blue-500">Loading...</p>}
          {error && <p className="text-center text-red-500">Error: {error.message}</p>}
  
          {masterProfile && (
            <>
              <Link
                to="/editprofile"
                className="absolute top-4 right-4 text-gray-600 hover:text-blue-500 flex items-center"
              >
                <FaEdit size={24} className="mr-2" />
              </Link>
  
              <div className="flex flex-wrap items-center text-justify">
                <div className="w-32 h-32 mr-8 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                {profileImage && (
            <img src={`data:image/png;base64,${profileImage}`} alt="Profile" className="w-full h-full object-cover" />
          )}
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 mt-4">
                    {masterProfile.fullName || "John Doe"}
                  </h2>
                  <p className="text-sm text-gray-500">{masterProfile.email || "johndoe@example.com"}</p>
                  <p className="text-sm text-gray-500">{masterProfile.contactNumber || "N/A"}</p>
                </div>
              </div>
  
              <div className="mt-8">
                {activeSection === "profile" && (
                  <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
                    <h3 className="text-xl font-semibold text-gray-700">User Details</h3>
                    <p className="text-gray-600 mt-2">
                      Welcome, {masterProfile.fullName || "User"}! View your account details above.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    );
};

export default templeadminProfile;

