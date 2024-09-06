import React from "react";

const AddResponse = () => {
  return (
   
    <div className="max-w-2xl mx-auto mt-[100px] p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl  ml-[235px] font-semibold text-gray-800 mb-5">
        Project Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h1 className="block text-m font-medium text-gray-700">
            Project Name
          </h1>
        </div>
        <div>
          <label
            htmlFor="department"
            className="block text-m font-medium text-gray-700 ml-[100px]"
          >
            By: Department
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="status"
          className="block text-m font-medium text-gray-700"
        >
          Status:
        </label>
      </div>

      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-m font-medium text-gray-700"
        >
          Project Description:
        </label>
        <textarea
          rows="4"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow- sm:text-sm"
          placeholder="Provide a detailed description of the project"
        ></textarea>
      </div>

      <div className="text-right">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
      </div>
      <div className="mb-4 flex items-center">
        <input
          
          type="checkbox"
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          
        /></div>
    </div>
  );
};

export default AddResponse;
