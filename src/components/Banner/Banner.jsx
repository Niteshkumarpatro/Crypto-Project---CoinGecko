import BannerImage from "../../assets/BANNER.PNG";

function Banner() {
    return (
        <>

            <div className="w-full h-25rem relative">
                <img src={BannerImage} alt="Banner" className="w-full h-[400px] " />

            </div>
            <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">
                <div className="flex flex-col gap-4">


                    <div className="font-semibold text-5xl text-white">


                        Crypto Tracker

                    </div>
                    <div className="font-semibold text-sm text-gray-300 text-center">

                        Track the latest cryptocurrency prices and market trends

                    </div>

                </div>

            </div>




        </>


    )

}
export default Banner;