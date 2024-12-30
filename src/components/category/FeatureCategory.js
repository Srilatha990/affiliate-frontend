

// import Image from "next/image";
// import { useRouter } from "next/router";
// import { useContext } from "react";
// import { IoChevronForwardSharp } from "react-icons/io5";

// // internal imports
// import useAsync from "@hooks/useAsync";
// import CategoryServices from "@services/CategoryServices";
// import CMSkeleton from "@components/preloader/CMSkeleton";
// import { SidebarContext } from "@context/SidebarContext";
// import useUtilsFunction from "@hooks/useUtilsFunction";

// const FeatureCategory = () => {
//   const router = useRouter();
//   const { isLoading, setIsLoading } = useContext(SidebarContext);
//   const { showingTranslateValue } = useUtilsFunction();

//   const { data, error, loading } = useAsync(
//     CategoryServices.getShowingCategory
//   );

//   // Handle category click
//   const handleCategoryClick = (id, categoryName) => {
//     const category_name = categoryName
//       .toLowerCase()
//       .replace(/[^A-Z0-9]+/gi, "-");
//     const url = `/search?category=${category_name}&_id=${id}`;
//     router.push(url);
//     setIsLoading(!isLoading);
//   };

//   return (
//     <>
//       {loading ? (
//         <CMSkeleton count={10} height={20} error={error} loading={loading} />
//       ) : (
//         <div className="grid grid-cols-7 gap-1">
//           {data[0]?.children?.map((category, i) => (
//             <div className="flex justify-center items-center" key={i}>
//               <div className="flex flex-col items-center justify-center">
//                 {/* Category Image with hover effect */}
//                 <div className="w-32 h-32 mb-3 bg-white border-4 border-gray-100 rounded-full flex justify-center items-center shadow-lg group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out">
//                   {category.icon ? (
//                     <Image
//                       src={category?.icon}
//                       alt="category"
//                       width={120}
//                       height={120}
//                       className="object-cover rounded-full"
//                     />
//                   ) : (
//                     <Image
//                       src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
//                       alt="category"
//                       width={120}
//                       height={120}
//                       className="object-cover rounded-full"
//                     />
//                   )}
//                 </div>

//                 {/* Category Name */}
//                 <h3
//                   onClick={() =>
//                     handleCategoryClick(
//                       category._id,
//                       showingTranslateValue(category?.name)
//                     )
//                   }
//                   className="text-lg text-gray-800 font-semibold leading-tight text-center cursor-pointer hover:text-emerald-600 transition duration-300"
//                 >
//                   {showingTranslateValue(category?.name)}
//                 </h3>

//                 {/* Subcategories */}
//                 <ul className="pt-1 mt-1">
//                   {category?.children?.slice(0, 3).map((child) => (
//                     <li key={child._id} className="pt-1">
//                       <a
//                         onClick={() =>
//                           handleCategoryClick(
//                             child._id,
//                             showingTranslateValue(child?.name)
//                           )
//                         }
//                         className="flex items-center text-xs text-gray-500 cursor-pointer hover:text-emerald-600 transition duration-200"
//                       >
//                         <IoChevronForwardSharp className="mr-2 text-xs" />
//                         {showingTranslateValue(child?.name)}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default FeatureCategory;





import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

// internal imports
import useAsync from "@hooks/useAsync";
import CategoryServices from "@services/CategoryServices";
import CMSkeleton from "@components/preloader/CMSkeleton";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";

const FeatureCategory = () => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { showingTranslateValue } = useUtilsFunction();

  const { data, error, loading } = useAsync(
    CategoryServices.getShowingCategory
  );

  // Handle category click
  const handleCategoryClick = (id, categoryName) => {
    const category_name = categoryName
      .toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");
    const url = `/search?category=${category_name}&_id=${id}`;
    router.push(url);
    setIsLoading(!isLoading);
  };

  return (
    <>
      {loading ? (
        <CMSkeleton count={10} height={20} error={error} loading={loading} />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 p-4">
          {data[0]?.children?.map((category, i) => (
            <div className="flex justify-center items-center" key={i}>
              <div className="flex flex-col items-center justify-center">
                {/* Category Image with hover effect */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-3 bg-white border-4 border-gray-100 rounded-full flex justify-center items-center shadow-lg group hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out">
                  {category.icon ? (
                    <Image
                      src={category?.icon}
                      alt="category"
                      width={120}
                      height={120}
                      className="object-cover rounded-full"
                    />
                  ) : (
                    <Image
                      src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                      alt="category"
                      width={120}
                      height={120}
                      className="object-cover rounded-full"
                    />
                  )}
                </div>

                {/* Category Name */}
                <h3
                  onClick={() =>
                    handleCategoryClick(
                      category._id,
                      showingTranslateValue(category?.name)
                    )
                  }
                  className="text-sm sm:text-md md:text-lg text-gray-800 font-semibold leading-tight text-center cursor-pointer hover:text-emerald-600 transition duration-300"
                >
                  {showingTranslateValue(category?.name)}
                </h3>

                {/* Subcategories */}
                <ul className="pt-1 mt-1 text-xs sm:text-sm md:text-base">
                  {category?.children?.slice(0, 3).map((child) => (
                    <li key={child._id} className="pt-1">
                      <a
                        onClick={() =>
                          handleCategoryClick(
                            child._id,
                            showingTranslateValue(child?.name)
                          )
                        }
                        className="flex items-center text-gray-500 cursor-pointer hover:text-emerald-600 transition duration-200"
                      >
                        <IoChevronForwardSharp className="mr-2 text-xs" />
                        {showingTranslateValue(child?.name)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FeatureCategory;
