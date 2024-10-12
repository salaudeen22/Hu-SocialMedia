import React from "react";
import Navbar from "../components/Navbar";
import { useModal } from "../Modal/ ModalContext";
import PostForm from "../components/PostForm";


function HomePage() {
  const { showModal, toggleModal } = useModal();

  return (
    <>
      <Navbar />
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          
           <PostForm/>
            <button
              onClick={toggleModal}
              className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
