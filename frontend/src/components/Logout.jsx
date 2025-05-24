// frontend/src/components/Logout.jsx
import React, { useState } from "react";

export default function Logout({ handleLogout }) {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    handleLogout();
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Log Out
      </button>

      {showModal && (
        <>
          {/* Background Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-lg font-semibold mb-4">Sign Out?</h2>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={handleConfirm}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
