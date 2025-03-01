import { useEffect, useState } from "react";
import { getDishes } from "../service/api";
import { useNavigate } from "react-router-dom";
function Home() {
    const [dishes, setDishes] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 
    const fetchDishes = async () => {
        try {
            const response = await getDishes();

            if (response && response.data) {
                setDishes(response.data);
            } else {
                console.error("Unexpected response structure:", response);
                setError("No dishes found.");
            }
        } catch (error) {
            console.error("Error fetching dishes:", error);
            setError("Failed to fetch dishes.");
        }
    };
    const handleClickRecipe=()=>{
        navigate("/Search"); 
    }
    const handleClickPurchase=()=>{
        navigate("/CartIndex");
    }
    const handleClickContact=()=>{
        navigate("/Contact")
    }
    useEffect(() => {
        fetchDishes();
    }, []);

    return (
        <>
            <div className="w-full h-full">
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
                    <div className="flex justify-center items-center">
                        <img src="diet.png" alt="Diet" className="w-28 h-auto" />
                    </div>
                    <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
                        <h3 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl p-3">Toppings</h3>
                        <span className="bg-blue-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
                        <p className="text-gray-500 mb-10 text-base leading-relaxed">
                            Shares information about food, cooking techniques, recipes, and food products and services
                        </p>
                    </div>
                    <div className="flex justify-center text-center mb-2 md:mb-3 p-6">
                        <h1 className="md:flex md:flex-wrap md:justify-center leading-6 text-black text-kinda-sm tracking-giant font-arvo uppercase">
                            <span className="block md:inline md:mr-2 font-pacifico font-normal text-lg">Simple recipes made for</span>
                            <span className="text-[rgb(115,64,96)] text-lg font-updock font-light">real, actual,everyday life.
                            </span>
                        </h1>
                    </div>

                    <div  className="container px-4 py-6 max-w-full flex flex-wrap gap-3 mx-auto w-full justify-center bg-slate-100">
                        <div  onClick={handleClickContact} className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-96 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div className="w-28 h-28  mt-2 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
                                <img src='https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/images%20(1).jpg? updatedAt=1728388512140' className="size-28 rounded-full" /></div>
                            <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
                                <span className="text-2xl font-semibold">Contact your chief</span>

                            </div>
                        </div>
                        <div  onClick={handleClickRecipe} className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div className="w-28 h-28  mt-2 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
                                <img src='https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/download.jpg?updatedAt=1728382941680' className="size-28 rounded-full" /></div>
                            <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
                                <span className="text-2xl font-semibold">Find your recipe</span>

                            </div>
                        </div>
                        <div onClick={handleClickPurchase} className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div className="w-28 h-28  mt-2 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
                                <img src='https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/food-delivery_662093-1600.avif?updatedAt=1728388511276' className="size-28 rounded-full" /></div>
                            <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
                                <span className="text-2xl font-semibold"> purchase Recipes </span>

                            </div>
                        </div>
                        <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div className="w-28 h-28  mt-2 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
                                <img src='https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/images.png?updatedAt=1728388512250' className="size-28 rounded-full" /></div>
                            <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
                                <span className="text-2xl font-semibold"> Follow Your Favorite</span>
                            </div>
                        </div>

                    </div>
                    <div className="container mx-auto mt-10 p-5 bg-gray-50">

                        <h1 className="text-4xl font-bold mb-8">Featured Recipes</h1>
                        {error ? (
                            <p className="text-red-500">{error}</p> // Display error message if any
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {dishes.slice(2, 5).map((dish, index) => (
                                    <div
                                        key={index}
                                        className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                                    >
                                        <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                                            <p className="text-gray-600">{dish.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap justify-center gap-20">
                        <div className="w-[40rem] h-64 duration-500 group overflow-hidden relative rounded-lg bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
                            <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
                            <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
                            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
                            <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
                            <div className="z-10 flex flex-col justify-evenly w-full h-full">
                                <span className="text-2xl font-bold">Joy of Cooking</span>
                                <p>
                                    Welcome to your ultimate culinary destination! Whether you're a seasoned chef or just starting your cooking journey,
                                    our platform is designed to inspire your inner foodie. Dive into a world where delicious recipes meet quality ingredients,
                                    making every meal an experience to savor.
                                </p>

                            </div>
                        </div>
                        <article className="w-80 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300 mt-5">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                height="24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="w-10 h-10 text-gray-300 bg-gray-600 rounded-full p-1">

                                {/* <path
                                    d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke="currentColor"
                                ></path> */}
                            </svg>
                            <p className="text-xl font-bold text-gray-400">Catchy Slogans to Inspire </p>
                            <p className="text-sm w-full text-gray-400">
                                "Where Every Meal Becomes a Masterpiece!"
                                "Cook, Savor, Repeat!"<br />
                                "Elevate Your Taste Buds!"<br />
                                "From Our Kitchen to Yours!"<br />
                                "Fresh Ingredients, Flavorful Creations!"
                            </p>
                        </article>
                    </div>
                </div>

            </div>


        </>
    );
}

export default Home;