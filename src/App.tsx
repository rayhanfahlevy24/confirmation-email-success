// import './App.css'

// function App() {

//   return (
//     <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4 py-10">
//       <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 text-center">
//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <img
//             src="/Obj.png" 
//             alt="Obj Logo"
//             className="h-20 w-24"
//           />
//         </div>

//         {/* Heading */}
//         <h1 className="font-semibold text-lg mb-4">
//           Thank you for joining Obj.
//         </h1>

//         {/* Description */}
//         <p className="text-gray-600 mb-4">
//           Obj is an application specialized for photography to upload pictures in the form of scenery.
//         </p>

//         {/* Signature */}
//         <p className="text-gray-700 font-semibold">Our Best,</p>
//         <p className="text-gray-700 font-semibold">Obj team</p>
//       </div>
//     </div>
//   )
// }

// export default App

import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/Obj.png"
            alt="Obj Logo"
            className="h-20 w-24"
          />
        </div>

        {/* Heading */}
        <h1 className="font-semibold text-xl mb-4">
          Thank you for joining Obj.
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-4 max-w-md mx-auto">
          Obj is an application specialized for photography to upload pictures in the form of scenery.
        </p>

        {/* Signature */}
        <p className="text-gray-700 text-lg font-semibold">Our Best,</p>
        <p className="text-gray-700 text-lg font-semibold">Obj team</p>
      </div>
    </div>
  )
}

export default App

