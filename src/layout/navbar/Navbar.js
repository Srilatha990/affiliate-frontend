import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser, FiBell } from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";

//internal import
import { getUserSession } from "@lib/auth";
import useGetSetting from "@hooks/useGetSetting";
import { handleLogEvent } from "src/lib/analytics";
import NavbarPromo from "@layout/navbar/NavbarPromo";
import CartDrawer from "@components/drawer/CartDrawer";
import { SidebarContext } from "@context/SidebarContext";

const Navbar = () => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState("");
  const { toggleCartDrawer } = useContext(SidebarContext);
  const { totalItems } = useCart();
  const router = useRouter();

  const userInfo = getUserSession();

  const { storeCustomizationSetting } = useGetSetting();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText("");
      handleLogEvent("search", `searched ${searchText}`);
    } else {
      router.push(`/`, null, { scroll: false });
      setSearchText("");
    }
  };

  return (
    <>
      <CartDrawer />
      <div className="sticky top-0 z-20" style={{ backgroundColor: "#0b5052" }}>
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="top-bar h-20 flex items-center justify-between py-4 mx-auto">
            <Link
              href="/"
              className="mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block"
            >
              <div className="relative">
                {/* You can use your custom logo or just display text as a placeholder */}
                <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "white" }}>
                AffiliateInsight
                </h1>
              </div>
            </Link>
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                <div className="flex flex-col mx-auto w-full">
                  <form
                    onSubmit={handleSubmit}
                    className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full"
                  >
                    <label className="flex items-center py-0.5">
                      <input
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                        // placeholder={t(`common:search-placeholder`)}
                        placeholder="Search for products...."
                      />
                    </label>

                    {/* Updated button with background color for the box */}
                    <button
                      aria-label="Search"
                      type="submit"
                      className="outline-none absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out"
                      style={{
                        backgroundColor: "#ff9e20",
                        borderRadius: "5px",
                      }}
                    >
                      <IoSearchOutline className="text-white w-6 h-6" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                className="pr-5 text-white text-2xl font-bold"
                aria-label="Alert"
              >
                <FiBell className="w-6 h-6 drop-shadow-xl" />
              </button>
              {/* <button
                aria-label="Total"
                onClick={toggleCartDrawer}
                className="relative px-5 text-white text-2xl font-bold"
              >
                <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {totalItems}
                </span>
                <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
              </button> */}

              {/* <button
                className="pl-5 text-white text-2xl font-bold"
                aria-label="Login"
              >
                {userInfo?.image ? (
                  <Link
                    href="/user/dashboard"
                    className="relative top-1 w-6 h-6"
                  >
                    <Image
                      width={29}
                      height={29}
                      src={userInfo?.image}
                      alt="user"
                      className="bg-white rounded-full"
                    />
                  </Link>
                ) : userInfo?.name ? (
                  <Link
                    href="/user/dashboard"
                    className="leading-none font-bold font-serif block"
                  >
                    {userInfo?.name[0]}
                  </Link>
                ) : (
                  <Link href="/auth/login">
                    <FiUser className="w-6 h-6 drop-shadow-xl" />
                  </Link>
                )}
              </button> */}
            </div>
          </div>
        </div>

        {/* second header */}
        <NavbarPromo />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });



