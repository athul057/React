const Contact = () => {
 return (
  <div className="flex justify-center">
   <div className="w-6/12">
    <h1 className="font-bold text-xl text-center mt-5">Contact Us</h1>
    <form className="flex flex-col mt-8">
     {/* Name Field */}
     <div className="flex items-center mb-4">
      <label htmlFor="name" className="w-2/12 font-medium">Name</label>
      <input
       id="name"
       type="text"
       name="name"
       className="border-2 border-black rounded-md w-10/12 p-2"
      />
     </div>

     {/* Email Field */}
     <div className="flex items-center mb-4">
      <label htmlFor="email" className="w-2/12 font-medium">Email</label>
      <input
       id="email"
       type="email"
       name="email"
       className="border-2 border-black rounded-md w-10/12 p-2"
      />
     </div>

     {/* Message Field */}
     <div className="flex items-center mb-4">
      <label htmlFor="message" className="w-2/12 font-medium">Message</label>
      <textarea
       id="message"
       name="message"
       className="border-2 border-black rounded-md w-10/12 p-2 h-24"
      ></textarea>
     </div>

     {/* Submit Button */}
     <div className="flex justify-center">
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
       Submit
      </button>
     </div>
    </form>
   </div>
  </div>
 );
};

export default Contact;
