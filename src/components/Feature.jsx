import { div } from "motion/react-client";
import React from "react";

const Feature = () => {
  return (
    <div className="mb-20">
        <h2 className="text-center text-3xl text-blue-500 font-bold pt-4 mb-16">
          Why Choose Our Library Management System
        </h2>
      <div className="bg-blue-50">
      <div className="  py-10  w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-6 py-10">
          {/* Feature 1 */}
          <div className="bg-cyan-50 p-4 hover:bg-cyan-100 duration-200 rounded-lg shadow text-center ">
            <div className="text-4xl mb-3">⏱️</div>
            <h3 className="text-xl font-semibold mb-2">Time-Saving</h3>
            <p className="text-gray-600">
              Automate routine library tasks to save time for both librarians
              and members.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-green-50 p-4 hover:bg-green-100 duration-200 rounded-lg shadow text-center ">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
            <p className="text-gray-600">
              A simple and intuitive interface that makes managing the library
              easy for everyone.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-yellow-50 p-4 hover:bg-yellow-100 duration-200 rounded-lg shadow text-center ">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Data Security</h3>
            <p className="text-gray-600">
              Keep library data safe with robust security features and regular
              backups.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Feature;
