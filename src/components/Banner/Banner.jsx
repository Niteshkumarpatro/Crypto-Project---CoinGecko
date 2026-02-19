import BannerImage from "../../assets/Banner.png";

function Banner() {
    return (
        <>

            <div className="w-full h-25rem relative">
                <img src={BannerImage} alt="Banner" className="w-full h-[300px] object-cover" />

            </div>
            <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">
                <div className="flex flex-col gap-4">


                    <div className="font-semibold text-5xl text-black">


                        Crypto Tracker

                    </div>
                    <div className="font-semibold text-sm text-black text-center">

                        Track the latest cryptocurrency prices and market trends

                    </div>

                </div>

            </div>




        </>


    )

}
export default Banner;