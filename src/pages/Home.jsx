import Slider from '../components/Slider.jsx'
import Services from '../components/Services.jsx'
import WorkingPractice from '../components/WorkingPractice.jsx'
import CustomerReviews from '../components/CustomerReviews.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Star } from "lucide-react";

const Home = () => {
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const getReviews = async () => {
        try {
            const resp = await axios.get("https://lam-backend-sooty.vercel.app/api/v1/reviews/get-reviews")
            if (resp.data.success) {
                setReviews(resp.data.data)
                console.log(resp.data.data)
            }

        } catch (error) {
            setError(error.response.data.message)
        }
    }

    useEffect(() => {
        getReviews()
    }, [])

    return (
        <div>
            <Slider />
            <Services />
            <WorkingPractice />
            <div className='flex flex-col items-center gap-5 mt-4 w-full'>
                <h1 className='text-2xl font-semibold'>Customer Reviews</h1>
                <div className='w-[90%] flex flex-col lg:flex-row justify-center gap-3 flex-wrap'>
                    {reviews.slice(0,4).map((review) => (
                        <div
                            key={review.cr}
                            className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition lg:w-1/3"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center ">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {review.cname}
                                </h3>
                                <span className="text-sm text-gray-500">{review.rdate.split("T")[0]}</span>
                            </div>
                            <h3 className='text-lg font-semibold'>{review.remarks}</h3>
                            {/* Comment */}
                            <p className="text-gray-600 mb-4 mt-2">{review.comment}</p>

                            {/* Rating */}
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={20}
                                        className={`${review.crate >= star
                                            ? "text-yellow-400 fill-yellow-400"
                                            : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={() => navigate("/reviews")} className='bg-blue-500 py-1 px-2 rounded text-white w-fit self-center text-xl cursor-pointer'>More Reviews</button>
            </div>
        </div>
    )
}

export default Home
