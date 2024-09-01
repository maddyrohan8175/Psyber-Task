import React, { useEffect, useState } from 'react'
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import pic from '../assets/home2.svg'
import loan from '../assets/loan (2).png'
import loan3 from '../assets/loan (3).png'
import refinancing from '../assets/refinancing.png'
import bulding from '../assets/bulding.png'
import family from '../assets/family.jpg'
import images from '../assets/images.png'
import ceo from '../assets/ceo.png'
import ceo1 from '../assets/ceo (1).png'
import founder from '../assets/founder.jpg'
import call from '../assets/call.jpg'
import tw from '../assets/twitter-logo.png'
import wh from '../assets/whatsapp.png'
import wr from '../assets/wordpress.png'
import x from '../assets/multiplication.png'
import tl from '../assets/telegram.png'
import '../App.css'
import '../responsive/Home.css'
export default function Home() {

    const slides = [
        {
            image: img1,
            altText: 'Slide 1',
            title: 'Empowering Financial Security for Everyone',
            description: 'We are commited to providing accesible and reliable financial services ti help individuals and families',
        },
        {
            image: img2,
            altText: 'Slide 2',
            title: 'Empowering Financial Security for Everyone',
            description: 'We are commited to providing accesible and reliable financial services ti help individuals and families',
        },
        {
            image: img3,
            altText: 'Slide 3',
            title: 'Empowering Financial Security for Everyone',
            description: 'We are commited to providing accesible and reliable financial services ti help individuals and families',
        },
        {
            image: img4,
            altText: 'Slide 4',
            title: 'Empowering Financial Security for Everyone',
            description: 'We are commited to providing accesible and reliable financial services ti help individuals and families',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000); // Change slide every 5 seconds

        return () => {
            clearInterval(interval); // Clean up the interval on component unmount
        };
    }, [currentIndex]);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const slides2 = [
        {
            id: 1,
            image: img1,
            title: 'At Alphaa Financial Solutions, we offer a comprehensive range of financial services',
            description: 'We have the expertise to guide you through the process.',
            content: '100+  Simplify The Loan'
        },
        {
            id: 2,
            image: img2,
            title: 'At Alphaa Financial Solutions, we offer a comprehensive range of financial services',
            description: 'We have the expertise to guide you through the process.',
            content: '100+ Simplify The Loan'
        },
        // Add more slides as needed
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides2.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className="slider-container relative w-full h-[600px] overflow-hidden mt-3">
                <div className="slider-content h-[600px]">
                    <img
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].altText}
                        className="slider-image object-cover w-full h-full rounded-md"
                    />
                    <div className="slider-text absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center p-4">
                        <h2 className="title text-[3rem] font-bold max-w-[70%] animate-slide-up">{slides[currentIndex].title}</h2>
                        <p className="text-md mt-8  animate-slide-up">{slides[currentIndex].description}</p>
                    </div>
                </div>
                <div className="slider-controls absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
                    <button
                        onClick={goToPrevious}
                        className="bg-gray-800 text-white h-[50px] flex items-center rounded-[50%]  opacity-50 hover:opacity-100 text-center"
                    >
                        <span className='text-[50px]'><i class="ri-arrow-drop-left-line"></i></span>
                    </button>
                    <button
                        onClick={goToNext}
                        className="bg-gray-800 text-white h-[50px] flex items-center rounded-[50%]  opacity-50 hover:opacity-100 text-center"
                    >
                        <span className='text-[50px]'>  <i class="ri-arrow-drop-right-line"></i></span>
                    </button>
                </div>
            </div>

            <div className='box2 bg-[#2A2C38] w-full h-[350px]  mt-3 border-t-[8px] border-[#FF9021] flex px-16 gap-10 '>
                <div className='bg-white w-[50%] h-[280px] rounded-[20px] border-b-[5px] border-[#FF9021] mt-5 flex flex-col justify-center gap-5 px-10' >
                    <h1 className='font-bold text-2xl'>Our Story</h1>
                    <p className='text-gray-800 ' style={{ wordSpacing: '5px' }}>Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way.</p>
                    <a href="#" className='font-bold hover:text-[#FF9021] relative transition-all duration-600 ease-in-out hover:left-3'>Know More</a>
                </div>
                <div className='bg-white w-[50%] h-[280px] rounded-[20px] border-b-[5px] border-[#FF9021] mt-5 flex flex-col justify-center gap-5 px-10'>
                    <h1 className='font-bold text-2xl'>Our Mission</h1>
                    <p className='text-gray-800' style={{ wordSpacing: '4px' }}>At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success.</p>
                </div>
            </div>

            <div className=' w-full py-20 px-10'>
                <div className='flex justify-center flex-col items-center gap-5 py-8'>
                    <img src={pic} alt="" className='w-[220px]' />
                    <p className='text-[#2A2C38] font-semibold'>Services</p>
                    <h1 className='font-bold text-4xl text-[#2A2C38]'>Our Services</h1>
                </div>
                <div className=' box3 w-full h-[140rem] flex'>
                    <div className='w-[70%]  h-[100%] flex gap-5 flex-wrap mt-20'>
                        <div className='bg-white w-[420px] px-3 py-2 rounded-[20px] shadow-md h-[320px] border-b-[5px] border-[#FF9021] mt-2'>
                            <div className='flex  items-center py-3 border-b-[1px] border-black '>
                                <img src={loan} alt="" className='w-[70px] mr-6' />
                                <h1 className='font-bold text-xl text-[#2A2C38]'>Home Loans</h1>
                            </div>
                            <p className='text-gray-700 py-5 px-4 leading-7' style={{ wordSpacing: '5px' }}>At Alphaa Financial Solutions, we specialize in guiding you through every step of your home loan journey. </p>
                        </div>
                        <div className='bg-white w-[420px] px-3 py-2 rounded-[20px] shadow-md h-[290px] border-b-[5px] border-[#FF9021] mt-2'>
                            <div className='flex  items-center py-3 border-b-[1px] border-black '>
                                <img src={loan} alt="" className='w-[70px] mr-16' />
                                <h1 className='font-bold text-xl text-[#2A2C38] text-center'><span className='font-normal text-[18px] text-gray-700' >Home Loans</span> <br />First home buyer</h1>
                            </div>
                            <p className='text-gray-700 py-5 px-4 leading-7' style={{ wordSpacing: '5px' }}>A first-time homebuyer is an individual or household purchasing a home for the first time.  </p>
                        </div>
                        <div className='bg-white w-[420px] px-3 py-2 rounded-[20px] shadow-md h-[250px] border-b-[5px] border-[#FF9021] '>
                            <div className='flex  items-center py-3 border-b-[1px] border-black '>
                                <img src={refinancing} alt="" className='w-[70px] mr-10 ml-1' />
                                <h1 className='font-bold text-xl text-[#2A2C38] text-center'>Refinancing</h1>
                            </div>
                            <p className='text-gray-700 py-10 px-4 leading-7 ' style={{ wordSpacing: '5px' }}>
                                Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms.  </p>
                        </div>
                        <div className='bg-white w-[420px] px-3 py-2 rounded-[20px] shadow-md h-[260px] border-b-[5px] border-[#FF9021] '>
                            <div className='flex  items-center py-3 border-b-[1px] border-black '>
                                <img src={bulding} alt="" className='w-[70px] mr-10 ml-1' />
                                <h1 className='font-bold text-xl text-[#2A2C38] text-center'>Investment Property</h1>
                            </div>
                            <p className='text-gray-700 py-10 px-4 leading-7 ' style={{ wordSpacing: '5px' }}>
                                An investment property is a real estate asset purchased with the intention of generating income or profit, </p>
                        </div>
                        <div className='bg-white w-[420px] px-3 py-2 rounded-[20px] shadow-md h-[420px] border-b-[5px] border-[#FF9021] '>
                            <div className='flex  items-center py-3 border-b-[1px] border-black '>
                                <img src={refinancing} alt="" className='w-[70px] mr-10 ml-1' />
                                <h1 className='font-bold text-xl text-[#2A2C38] text-center'>Self Managed Super fund
                                    SMSF

                                </h1>
                            </div>
                            <p className='text-gray-700 py-10 px-4 leading-7 ' style={{ wordSpacing: '5px' }}>
                                At Alphaa Financial Solutions, we offer expert guidance on Self-Managed Super Fund (SMSF) loans to help you maximize your investment potential. <br /><br />
                                Whether you’re looking to acquire residential or commercial property through your SMSF, our team provides tailored advice and innovative financing solutions to suit your needs.</p>
                        </div>
                        <div className='bg-white w-[420px] px-3 py-2 rounded-[20px] shadow-md h-[420px] border-b-[5px] border-[#FF9021] mt-[4rem] '>
                            <div className='flex  items-center py-3 border-b-[1px] border-black '>
                                <img src={bulding} alt="" className='w-[70px] mr-10 ml-1' />
                                <h1 className='font-bold text-xl text-[#2A2C38] text-center'>Asset finance
                                </h1>
                            </div>
                            <p className='text-gray-700 py-10 px-4 leading-7 ' style={{ wordSpacing: '5px' }}>
                                At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease.  <br /><br />
                                Whether you’re looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options.

                            </p>
                        </div>
                        <div className='bg-white w-[420px] px-3 py-2 rounded-[20px] shadow-md h-[420px] border-b-[5px] border-[#FF9021] '>
                            <div className='flex  items-center py-3 border-b-[1px] border-black '>
                                <img src={refinancing} alt="" className='w-[70px] mr-10 ml-1' />
                                <h1 className='font-bold text-xl text-[#2A2C38] text-center'>Personal loans
                                </h1>
                            </div>
                            <p className='text-gray-700 py-10 px-4 leading-7 ' style={{ wordSpacing: '5px' }}>
                                At Alphaa Financial Solutions, we offer a range of personal loan options designed to meet your unique financial needs.  <br /><br />
                                Whether you’re looking to consolidate debt, fund a major purchase, or cover unexpected expenses, our team is dedicated to finding the right loan solution for you.
                            </p>
                        </div>
                        <div className='bg-white w-[420px] px-3 py-2 rounded-[20px] shadow-md h-[420px] border-b-[5px] border-[#FF9021] mt-[4rem]'>
                            <div className='flex  items-center py-3 border-b-[1px] border-black '>
                                <img src={bulding} alt="" className='w-[70px] mr-10 ml-1' />
                                <h1 className='font-bold text-xl text-[#2A2C38] text-center'>Expat Loans


                                </h1>
                            </div>
                            <p className='text-gray-700 py-10 px-4 leading-7 ' style={{ wordSpacing: '5px' }}>
                                At Alphaa Financial Solutions, we offer specialized expat loan services designed to meet the unique needs of expatriates.  <br /><br />
                                Whether you’re looking to purchase a property, invest, or manage financial obligations in a new country, our expert team provides tailored solutions and comprehensive support.
                            </p>
                        </div>
                        <div className='bg-white w-[420px] px-3 py-2 rounded-[20px] shadow-md h-[420px] border-b-[5px] border-[#FF9021] mb-20'>
                            <div className='flex  items-center py-3 border-b-[1px] border-black '>
                                <img src={loan3} alt="" className='w-[70px] mr-7 ml-1' />
                                <h1 className='font-bold text-xl text-[#2A2C38] text-center'>Commercial/Business Loans


                                </h1>
                            </div>
                            <p className='text-gray-700 py-10 px-4 leading-7 ' style={{ wordSpacing: '5px' }}>
                                At Alphaa Financial Solutions, we specialize in providing comprehensive commercial and business loan solutions tailored to your unique needs. Whether you’re seeking capital for expansion, equipment purchases, or working capital, our team is dedicated to finding the right financing option to fuel your growth.
                            </p>
                        </div>
                    </div>
                    <div className='w-[30%] rounded-[20px] shadow-md  overflow-hidden relative'>
                        {slides2.map((slide2, index) => (
                            <div
                                key={slide2.id}
                                className={`slide ${index === currentSlide ? 'active' : ''}`}
                            >
                                <img src={slide2.image} alt={slide2.title} />
                                <div className="content bg-black bg-opacity-50 inset-0 flex flex-col items-center justify-center">
                                    <h1 className='font-bold px-4 text-3xl text-start'>{slide2.title}</h1>
                                    <p className='font-normal text-xl text-start px-5 py-5 leading-7'> {slide2.description}</p>
                                    <p className='font-bold mt-10 text-[18px] '>{slide2.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='box4 w-full bg-white h-[450px] flex gap-20 items-center justify-end px-10'>
                <div className='w-[580px] bg-[#F5F5F5] h-[320px] rounded-[20px]'>
                    <img src={family} alt="" className='w-[97%] h-[95%] rounded-[20px]' />
                    <div>
                        <img src='https://www.keylending.com.au/wp-content/uploads/2023/03/img-home-02-min-300x177.png' alt="" className='home absolute left-[40px] w-[350px] top-[250rem]' />
                    </div>
                </div>

                <div className='bg-[#F5F5F5] w-[500px] h-[350px] rounded-[20px]'>

                </div>
            </div>
            <div className='w-full h-[780px] bg-[#F5F5F5]'>
                <div className='w-full h-[500px] bg-[#2A2C38] absolute'></div>

                <div className='box5 h-[780px] bg-[#22232D] w-[90%] absolute right-0 rounded-[20px] shadow-md'>
                    <div className='box6 absolute left-8 top-[250px] px-10'>
                        <img src={pic} alt="" className='w-[180px]' />
                        <h1 className='text-white text-5xl font-bold mt-5 leading-[4rem]'>
                            We believe you're <br />bright</h1>
                    </div>
                    <img src={img1} alt="" className='box7 w-[700px] h-[580px] absolute right-0 object-cover rounded-bl-[20px]' />
                    <div className='box8 flex justify-center items-center flex-col bg-white w-[280px] h-[200px] rounded-[20px] border-b-[8px] border-[#FF9021] shadow-md hover:border-none absolute right-[390px] top-[480px]'>
                        <h1 className='font-bold text-5xl text-[#22232D]'>320+</h1>
                        <h2 className='text-[#22232D] text-xl font-semibold mt-2'>Lenders</h2>
                    </div>
                    <div className='box9 flex justify-center items-center flex-col bg-white w-[280px] h-[200px] rounded-[20px] border-b-[8px] border-[#FF9021] shadow-md hover:border-none absolute right-[50px] top-[530px]'>
                        <h1 className='font-bold text-5xl text-[#22232D]'>20+</h1>
                        <h2 className='text-[#22232D] text-xl font-semibold mt-2'>Years Experience</h2>
                    </div>
                </div>
            </div>
            <div className=' box10 w-full h-[700px] bg-white flex flex-col items-center py-10 shadow-md'>
                <img src={ceo} alt="" className='w-[50px] mt-10' />
                <h1 className='text-4xl font-bold text-[#22232D]  mt-8'>Meet our Founder

                </h1>
                <div className='w-[240px] h-[450px] border-b-[6px] border-[#FF9021] rounded-[20px] mt-10 flex justify-center flex-col items-center'>
                    <img src={founder} alt="" className='w-[90%]' />
                    <h1 className='font-bold mt-5 text-xl text-[#22232D]'>Mr. Pawan Punjabi</h1>
                    <p className='font-semibold text-gray-600'>Founder</p>
                </div>
            </div>
            <div className='box11 w-full bg-white h-[500px] flex justify-center items-center'>
                <div className='w-[45%] h-[85%] flex flex-col justify-start py-10 gap-8'>
                    <h1 className='font-bold text-4xl text-[#22232D]'>Contact Us</h1>
                    <p className='text-gray-7
                    00'>Please feel free to ask if you have any further questions.</p>
                    <ul className='text-gray-800 text-[16px]  flex flex-col items-start h-[60px] gap-3 font-semibold'>
                        <li><span className='mr-4 text-[#FF9021] text-[15px]'><i class="fa-solid fa-location-dot"></i></span>Sydney, Austrailia</li>
                        <li><span className='mr-4 text-[#FF9021] text-[15px]'><i class="fa-solid fa-phone"></i></span>0468328227</li>
                        <li><span className='mr-4  text-[#FF9021] text-[15px]'><i class="fa-solid fa-clock"></i></span>Mon - Fri: 9:00am - 5:00pm </li>
                        <li><span className='mr-4 text-[#FF9021] text-[15px]'><i class="fa-solid fa-clock"></i></span>Weekends Appointments Only</li>
                    </ul>
                    <div className='flex gap-2 mt-20'>

                    <img src={tl} alt="" className='w-[38px]' />
                    <img src={wr} alt="" className='w-[38px]' />
                    <img src={wh} alt="" className='w-[38px]' />
                    <img src={x} alt="" className='w-[38px]' />
                    <img src={tw} alt="" className='w-[38px]' />

                </div>
                </div>
                <div className='w-[45%] h-[85%]'>
                    <img src={call} alt="" className='w-[100%] h-[85%]' />
                </div>
            </div>
            <div className='w-full h-[380px] bg-[#FF9C25] flex flex-col items-center justify-evenly'>
                <img src={ceo1} alt="" className='w-[60px]' />
                <h1 className='text-5xl text-[#22232D] font-bold'>Talk to PAWAN now!</h1>
                <button className='px-10 py-6 bg-white text-black text-[13px] rounded-md font-semibold transform transition-transform duration-300 hover:scale-110'>
                        CONTACT US
                    </button>
                <p className='font-semibold text-[#22232D] text-[18px] text-center'>Feel Free to Get in Touch for a No Obligations <span className='underline'>
                    Call PAWAN !!!</span></p>
            </div>
        </>
    )
}

