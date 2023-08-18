// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import bg from "../Assets/bg.jpg";
// import OAth from "./OAth";
// import { toast } from "react-toastify";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");

//   function onchange(e) {
//     setEmail(e.target.value);
//   }

//   async function onSubmit(e) {
//     e.preventDefault();
//     try {
//       const auth = getAuth();
//       await sendPasswordResetEmail(auth, email);
//       toast.success("Email was sent");
//     } catch (error) {
//       toast.error("could not send reset password ");
//     }
//   }
//   return (
//     <div className="relativ">
//       <div className="w-1/2 absolute ">
//       <div>
//         <img src={bg} alt="bg" className=" h-[706px] relative " />
//         <h1 className="absolute bottom-[50%] ml-36 text-white rotate-45  text-6xl bg-transparent p-4 rounded border border-gray-100 ">wonderland</h1>
//         </div>
//       </div>

//       <div className="  absolute left-[50%] w-1/2 ">
//         <form   onSubmit={onSubmit}  >
//         <div className="border border-blue-800 rounded-md w-[400px] h-[450px] bg-blue-100   p-8 ml-[180px] mt-[150px]">
//           <h1 className="text-center font-bold text-2xl mt-3">Reset Password</h1>
//           <div className="flex flex-col mt-10">
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={onchange}
//               placeholder="Enter your email"
//               className="border border-gray-300 text-xl rounded p-3"
//             />
//           </div>

//           <div className="  mt-6">
//             <button className="bg-blue-700 hover:bg-blue-900     text-white text-center w-[340px] p-3 rounded text-lg">
//               {" "}
//               Reset Password
//             </button>
//           </div>
//           <div className=" flex my-4 before:border-t items-center before:flex-1  before:border-gray-300 after:flex-1  after:border-gray-300">
//             <p className="text-center font-semibold mx-4">OR</p>
//           </div>
//           <OAth className=" " />
//           <p className="mb-6 text-black text-xs mt-8 ml-16  font-poppins">
//             Don't have an account yet?
//             <Link
//               to="/signup"
//               className="text-blue-600 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
//             >
//               Get Started
//             </Link>
//           </p>
//         </div>
//         </form>
        
//       </div>
//     </div>
//   );
// }




import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../Assets/bg.jpg";
import OAth from "./OAth";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onchange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("could not send reset password ");
    }
  }
  return (
    <div className="relativ">
      <div className="w-1/2 absolute ">
      <div>
        <img src={bg} alt="bg" className=" h-[706px] relative " />
        <h1 className="absolute bottom-[50%] ml-36 text-white rotate-45  text-6xl bg-transparent p-4 rounded border border-gray-100 ">wonderland</h1>
        </div>
      </div>

      <div className="  absolute left-[50%] w-1/2 ">
        <form   onSubmit={onSubmit}  >
        <div className="border border-blue-800 rounded-md w-[400px] h-[450px] bg-blue-100   p-8 ml-[180px] mt-[150px]">
          <h1 className="text-center font-bold text-2xl mt-3">Reset Password</h1>
          <div className="flex flex-col mt-10">
            <input
              type="email"
              id="email"
              value={email}
              onChange={onchange}
              placeholder="Enter your email"
              className="border border-gray-300 text-xl rounded p-3"
            />
          </div>

          <div className="  mt-6">
            <button className="bg-blue-700 hover:bg-blue-900     text-white text-center w-[340px] p-3 rounded text-lg">
              {" "}
              Reset Password
            </button>
          </div>
          <div className=" flex my-4 before:border-t items-center before:flex-1  before:border-gray-300 after:flex-1  after:border-gray-300">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <OAth className=" " />
          <p className="mb-6 text-black text-xs mt-8 ml-16  font-poppins">
            Don't have an account yet?
            <Link
              to="/signup"
              className="text-blue-600 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
            >
              Get Started
            </Link>
          </p>
        </div>
        </form>
        
      </div>
    </div>
  );
}
