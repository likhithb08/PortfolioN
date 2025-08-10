import React from "react";

const Location = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 sm:gap-10 p-5 sm:p-20 bg-[url(https://static.vecteezy.com/system/resources/thumbnails/049/194/562/small_2x/stone-platform-with-grass-in-a-mountain-valley-photo.jpeg)] bg-cover bg-center h-full">
      {/* Animated Heading */}
      <div className="group relative inline-block text-lg p-2 sm:p-3">
        <h1 className='text-2xl sm:text-3xl font-bold'>
          <span>LOCATION</span>
        </h1>
        <span className="absolute -bottom-0 -left-0 rounded h-[2px] sm:h-[3px] w-0 bg-[#BF4408] transition-all duration-500 group-hover:w-full"></span>
        <span className="absolute -bottom-0 -right-0 rounded w-[2px] sm:w-[3px] h-0 bg-[#BF4408] transition-all duration-500 delay-300 group-hover:h-full"></span>
        <span className="absolute -top-0 -right-0 rounded w-0 h-[2px] sm:h-[3px] bg-[#BF4408] transition-all duration-500 delay-600 group-hover:w-full"></span>
        <span className="absolute -top-0 -left-0 rounded w-[2px] sm:w-[3px] h-0 bg-[#BF4408] transition-all duration-500 delay-[900ms] group-hover:h-full"></span>
      </div>

      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.600624882868!2d77.58205607483957!3d12.869051987436992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUyJzA4LjYiTiA3N8KwMzUnMDQuNyJF!5e0!3m2!1sen!2sin!4v1754644206029!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title='Google Map'
        className="h-[300px] w-full sm:h-[350px] sm:w-[600px] rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl"
        frameBorder='1'
      ></iframe>
    </div>
  );
};

export default Location;