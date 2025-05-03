import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchTransportRequestsSupport } from '../redux/thunks/transportThunks';

const GetTransportHelpSupport = () => {
    const dispatch = useDispatch();
    const { requests,loading,error } = useSelector ((state) => state.transportHelp);
    const UserId = useSelector ((state) => state.auth?.userId);
    const [searchQuery, setSearchQuery] = useState("");
      
    
        const handleSearchChange = (e) => {
          setSearchQuery(e.target.value.toLowerCase());
        };
    
        const filterRequests = requests.filter((request) => {
          const fullName = `${request.user.firstName} ${request.user.lastName}`.toLowerCase();
          return fullName.includes(searchQuery);
        });

    useEffect(() =>{
        if (UserId) {
            dispatch(fetchTransportRequestsSupport(UserId));
        }
    },[dispatch,UserId]);


    if (loading) return <div>Loading Transport Help Requests</div>;
    if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full mx-auto p-4">
        <h2 className='text-black text-base sm:text-2xl font-bold mt-4 mb-4'>Transport Help Requests</h2>
         {/* Search Bar */}
      <div className="w-full mb-4 sm:w-auto">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="text-sm sm:text-base border p-2 w-full sm:w-60 rounded"
        />
      </div>
        {filterRequests.length === 0? (
            <p>No Transport Requests Are Availabe</p>
        ) :  (
          <div className="overflow-x-auto">
            <table className='min-w-full bg-white border border-gray-300 whitespace-nowrap'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='text-sm sm:text-base py-2 px-2 border-b'>Help Message Id</th>
              <th className='text-sm sm:text-base py-2 px-2 border-b'>User Name</th>
              <th className='text-sm sm:text-base py-2 px-2 border-b'>Message</th>
              <th className='text-sm sm:text-base py-2 px-2 border-b'>Created At</th>
            </tr>
          </thead>
          <tbody>
            {filterRequests.map((request) => (
              <tr key={request.helpMessageId} className='border-b'>
                <td className='text-xs sm:text-base py-2 px-2 text-center'>{request.helpMessageId}</td>
                <td className='text-xs sm:text-base py-2 px-2 text-center'>{request.user.firstName} {request.user.lasttName}</td>
                <td className='text-xs sm:text-base py-2 px-2 text-center'>{request.message}</td>
                <td className="text-xs sm:text-base py-2 px-4 text-center">
                  {new Date(request.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        )}
    </div>
  )
}

export default GetTransportHelpSupport;