

// import Link from "next/link";
// import React from "react";

// //internal import
// import useGetSetting from "@hooks/useGetSetting";
// import useUtilsFunction from "@hooks/useUtilsFunction";
// import { FiZap } from "react-icons/fi"; // Import the flash icon

// const Banner = () => {
//   const { storeCustomizationSetting } = useGetSetting();
//   const { showingTranslateValue } = useUtilsFunction();

//   // Manually setting the background image URL
//   const backgroundImage = "https://d14vpcucj0dct5.cloudfront.net/filters:form…nal_Category_-_Accessories_-_1920x552_TXp7ZkQ.png"; // replace with your image URL

//   // Banner styles including the background image
//   const bannerStyles = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '80px', // Adjust height as needed
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//   };

//   return (
//     <div className="relative" style={bannerStyles}>
//       {/* Title with flash icons */}
//       <h1 className="text-center text-white text-2xl font-bold flex items-center space-x-3 z-10">
//         {/* Flash icon on the left */}
//         <FiZap className="text-white text-4xl" />

//         <span className="text-white">
//           {showingTranslateValue(
//             storeCustomizationSetting?.home?.promotion_title
//           )}
//         </span>

//         {/* Flash icon on the right */}
//         <FiZap className="text-white text-4xl" />
//       </h1>
//     </div>
//   );
// };

// export default Banner;




import Link from "next/link";
import React from "react";

// Internal import
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import { FiZap } from "react-icons/fi"; // Import the flash icon

const Banner = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  // Manually setting the background image URL
  const backgroundImage = "https://d14vpcucj0dct5.cloudfront.net/filters:form…nal_Category_-_Accessories_-_1920x552_TXp7ZkQ.png"; // replace with your image URL

  // Banner styles including the background image
  const bannerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80px", // Adjust height as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  return (
    <div className="relative" style={bannerStyles}>
      {/* Title with flash icons */}
      <h1 className="text-center text-white font-bold flex items-center space-x-3 z-10">
        {/* Flash icon on the left */}
        <FiZap className="text-white text-4xl" />

        {/* Responsive text */}
        <span
          className="text-white"
          style={{
            fontSize: "clamp(0.8rem, 2vw, 1.3rem)", // Adjust font size based on screen width
          }}
        >
          {showingTranslateValue(
            storeCustomizationSetting?.home?.promotion_title
          )}
        </span>

        {/* Flash icon on the right */}
        <FiZap className="text-white text-4xl" />
      </h1>
    </div>
  );
};

export default Banner;


