// import Image from "next/image";
// import Image3 from "../../../public/Image3.jpg";

// const GetInTouch = () => {
//   return (
//     <>
//       <div className="relative flex items-center justify-center min-h-screen p-4">
//         <Image
//           src={Image3}
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           className="z-0"
//         />
//         <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
//         <div className="relative py-20 w-full max-w-md text-white border border-opacity-60 border-black bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-lg shadow-lg mt-10 z-20">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
//             CONTACT US
//           </h1>
//           <form className="space-y-5">
//             <div>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full p-3 bg-transparent rounded-none border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-3 bg-transparent rounded-none border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//             </div>
//             <div>
//               <textarea
//                 placeholder="About"
//                 className="w-full p-3 bg-transparent rounded-none border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
//                 rows="4"
//               />
//             </div>
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition duration-300"
//               >
//                 SUBMIT
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }

// export default GetInTouch

'use client'

import { useState } from 'react';
import Image from 'next/image';
import Image3 from '../../../public/Image3.jpg';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setStatus('Invalid email format');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Email sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send email');
      }
    } catch (error) {
      setStatus('Error sending email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4">
      <Image
        src={Image3}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      <div className="relative py-20 w-full max-w-md text-white border border-opacity-60 border-black bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-lg shadow-lg mt-10 z-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          CONTACT US
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-3 bg-transparent rounded-none border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 bg-transparent rounded-none border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-3 bg-transparent rounded-none border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              rows="4"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition duration-300 flex items-center justify-center"
              disabled={loading}
              style={{ minHeight: '3rem' }}
            >
              {loading ? (
                <svg
                  className="animate-spin h-8 w-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                <span className="block w-full">SUBMIT</span>
              )}
            </button>
          </div>
        </form>
        {status && <p className="text-center mt-4">{status}</p>}
      </div>
    </div>
  );
};

export default GetInTouch;
