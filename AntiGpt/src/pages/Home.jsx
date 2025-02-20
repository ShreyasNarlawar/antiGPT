import React from "react";
import Typed from 'react-typed';
import { FaArrowRight } from 'react-icons/fa';
import Shape from "../assets/shape.png";
import Plagiarism from "../assets/plagiarism.png";
import Card1 from "../assets/mint-dark.png";
import Card2 from "../assets/mint-dark2.png";
import Card3 from "../assets/lockup-dark.png";
import Card4 from "../assets/reward-dark.png";


const Home = () => {
    return (
        <>
            <section className="grid items-center w-screen mx-0 mt-[-3em] md:mx-0 relative h-screen scroll-smooth ">
                <div className="flex justify-between w-screen mx-auto px-10 md:px-20 md:my-20 h-96">
                    <div className="place-self-center lg:col-span-7 md:h-screen gap-5 flex flex-col justify-center md:justify-center">
                        <h1 className="max-w-2xl pl-2 md:pl-2 mb-2 md:mb-4 text-3xl font-bold tracking-wider leading-none md:text-5xl xl:text-5xl text-shade2">Transform AI to Human</h1>
                        <h1 className=" text-5xl w-full font-extrabold md:pt-0 md:pb-3 text-shade3" >
                            <Typed
                                className='md:text-6xl sm:text-4xl text-3xl font-bold pl-2'
                                strings={['AI Text to Human Text', 'Image to Text Converter', 'lorem ipsum']}
                                typeSpeed={100}
                                backSpeed={100}
                                loop
                            />
                        </h1>
                        <p className="md:max-w-lg tracking-wide md:leading-8 mx-2 font-light md:mb-8 md:text-xl text-gray-400">Uses intelligent computer programs to study the text and convert it into human form</p>
                        <a href="#section2" className="inline-flex items-center justify-center py-2 px-2 mx-2 w-32 md:px-5 md:w-44 md:py-3 text-base md:font-medium md:text-xl text-center tracking-wider text-shade3 hover:text-shade1 focus:text-shade1 border-2 border-shade1 rounded-lg hover:bg-shade3 focus:ring-2 focus:ring-shade3 focus:bg-shade3">
                            Convert
                            <svg className="w-5 h-5 ml-2 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>

                    <div className="hidden lg:flex lg:items-center">
                        <img src={Shape} alt="mockup" className="h-96 rounded-full" />
                    </div>
                </div>
            </section>

            <section className="pt-20 py-36 h-full md:h-screen" id="section2">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-wider m-auto md:w-full md:text-violet-400 text-indigo-400 text-center mb-10">Our Tools</h1>
                <div className="flex py-0 md:py-8 mx-auto text-center md:px-10 lg:px-6">
                    <dl className="grid gap-5 mx-auto text-gray-900 grid-cols-1 md:grid-cols-4 dark:text-white tracking-wider">
                        <div className="flex flex-col justify-between bg-white h-80 w-80 p-5 rounded-2xl border-4 border-shade1 hover:border-shade2 hover:bg-shade1">
                            <dt className="mb-2 w-full text-3xl md:text-4xl font-extrabold">
                                <img src={Card1} alt="" className="w-20 "/>
                            </dt>
                            <dd className="font-bold text-shade3 text-xl text-left">AI to Human Text</dd>
                            <dd className="font-semibold text-base text-left text-shade2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, atque!</dd>
                            <a href="#section2" className="flex items-center w-32 rounded-md border-2 border-shade2 font-semibold hover:border-shade4 hover:bg-shade2 hover:text-shade1 transition ease-in-out duration-100">
                            <div className="text-sm p-2">Try For Free</div>
                            <svg className="w-3 h-3 ml-2 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        </div>

                        <div className="flex flex-col justify-between bg-white h-80 w-80 p-5 rounded-2xl border-4 border-shade1 hover:border-shade2 hover:bg-shade1">
                            <dt className="mb-2 w-full text-3xl md:text-4xl font-extrabold">
                                <img src={Card2} alt="" className="w-20 "/>
                            </dt>
                            <dd className="font-bold text-shade3 text-xl text-left">AI to Human Text</dd>
                            <dd className="font-semibold text-base text-left text-shade2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, atque!</dd>
                            <a href="#section2" className="flex items-center w-32 rounded-md border-2 border-shade2 font-semibold hover:border-shade4 hover:bg-shade2 hover:text-shade1 transition ease-in-out duration-100">
                            <div className="text-sm p-2">Try For Free</div>
                            <svg className="w-3 h-3 ml-2 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        </div>

                        <div className="flex flex-col justify-between bg-white h-80 w-80 p-5 rounded-2xl border-4 border-shade1 hover:border-shade2 hover:bg-shade1">
                            <dt className="mb-2 w-full text-3xl md:text-4xl font-extrabold">
                                <img src={Card3} alt="" className="w-20 "/>
                            </dt>
                            <dd className="font-bold text-shade3 text-xl text-left">AI to Human Text</dd>
                            <dd className="font-semibold text-base text-left text-shade2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, atque!</dd>
                            <a href="#section2" className="flex items-center w-32 rounded-md border-2 border-shade2 font-semibold hover:border-shade4 hover:bg-shade2 hover:text-shade1 transition ease-in-out duration-100">
                            <div className="text-sm p-2">Try For Free</div>
                            <svg className="w-3 h-3 ml-2 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        </div>

                        <div className="flex flex-col justify-between bg-white h-80 w-80 p-5 rounded-2xl border-4 border-shade1 hover:border-shade2 hover:bg-shade1">
                            <dt className="mb-2 w-full text-3xl md:text-4xl font-extrabold">
                                <img src={Card4} alt="" className="w-20 "/>
                            </dt>
                            <dd className="font-bold text-shade3 text-xl text-left">AI to Human Text</dd>
                            <dd className="font-semibold text-base text-left text-shade2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, atque!</dd>
                            <a href="#section2" className="flex items-center w-32 rounded-md border-2 border-shade2 font-semibold hover:border-shade4 hover:bg-shade2 hover:text-shade1 transition ease-in-out duration-100">
                            <div className="text-sm p-2">Try For Free</div>
                            <svg className="w-3 h-3 ml-2 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        </div>
                    </dl>
                </div>
            </section>

            <section className="pt-20 py-36 px-20 h-full md:h-96" id="section2">
                <hr className="h-1 bg-shade4 mb-8"/>
                <div className="top flex flex-col md:flex-row">
                <div className="left text-5xl font-semibold w-screen">Safety & responsibility</div>
                <div className="right max-w-4xl text-xl leading-8 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia rem cupiditate dolorum odio deleniti ab architecto quidem aliquid earum labore distinctio, ullam facere sed quod tenetur veniam possimus vero nihil</div>
                </div>
            </section>

            <section className="grid items-center relative h-screen scroll-smooth ">
                <div className="flex justify-between gap-8 h-screen max-w-screen-xl mx-auto md:px-0 md:my-2">
                    <div className="hidden lg:flex lg:items-center">
                        <img src={Plagiarism} alt="mockup" className="h-96" />
                    </div>

                    <div className="md:h-screen gap-3 flex flex-col justify-center md:justify-center">
                        <h1 className="max-w-2xl pl-2 md:pl-2 mb-2 md:mb-4 text-3xl font-bold tracking-wider leading-none md:text-5xl xl:text-5xl text-shade2">AI To Human Text Converter</h1>

                        <p className="md:max-w-xl tracking-wide md:leading-8 my-4 mx-2 font-light text-justify md:mb-8 md:text-xl text-gray-400">Uses intelligent computer programs to study the text and convert it into human form Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam qui tempora explicabo expedita eligendi, corrupti molestiae quam impedit corporis natus.</p>
                        <a href="#section2" className="inline-flex items-center justify-center py-2 px-2 mx-2 w-32 md:px-5 md:w-44 md:py-3 text-base md:font-medium md:text-xl text-center tracking-wider text-shade3 hover:text-shade1 focus:text-shade1 border-2 border-shade1 rounded-lg hover:bg-shade3 focus:ring-2 focus:ring-shade3 focus:bg-shade3">
                            Convert
                            <svg className="w-5 h-5 ml-2 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </section>

            <section className="relative">
                {/* <div className="blur w-full h-full absolute z-10 backdrop-blur-[.1em]">
                </div>
                    <button className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-shade2 py-3 px-5 text-xl rounded-md text-shade1">Try For Free</button> */}
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-16 z-0">
                    <dl className="relative overflow-hidden grid max-w-screen-2xl gap-8 mx-auto text-shade2 sm:grid-cols-2 dark:text-shade1">
                        <div className="block overflow-hidden my-5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <div className="title bg-shade2 py-2"><label htmlFor="" className="text-lg text-shade font-bold ">AI</label></div>
                            <textarea id="message" rows="15" className=" w-full text-shade4 tracking-wider leading-6 p-2 outline-none caret-shade4 resize-y" placeholder="Leave a comment..."></textarea>
                        </div>
                        <FaArrowRight className="absolute z-10 w-full top-1/2" />
                        <div className="block overflow-hidden my-5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500">
                            <div className="title bg-shade2 py-2"><label htmlFor="" className="text-lg text-shade font-bold ">Human</label></div>
                            <textarea id="message" rows="15" className=" w-full text-shade4 tracking-wider leading-6 p-2 outline-none caret-shade4 resize-y" placeholder="Leave a comment..."></textarea>
                        </div>
                    </dl>
                </div>
            </section>

            <section className="grid items-center relative h-screen scroll-smooth ">
                <div className="flex justify-between gap-8 h-screen max-w-screen-xl mx-auto md:px-0 md:my-2">
                    <div className="md:h-screen gap-3 flex flex-col justify-center md:justify-center">
                        <h1 className="max-w-2xl pl-2 md:pl-2 mb-2 md:mb-4 text-3xl font-bold tracking-wider leading-none md:text-5xl xl:text-5xl text-shade2">AI To Human Text Converter</h1>

                        <p className="md:max-w-xl tracking-wide md:leading-8 my-4 mx-2 font-light text-justify md:mb-8 md:text-xl text-gray-400">Uses intelligent computer programs to study the text and convert it into human form Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam qui tempora explicabo expedita eligendi, corrupti molestiae quam impedit corporis natus.</p>
                        <a href="#section2" className="inline-flex items-center justify-center py-2 px-2 mx-2 w-32 md:px-5 md:w-44 md:py-3 text-base md:font-medium md:text-xl text-center tracking-wider text-shade3 hover:text-shade1 focus:text-shade1 border-2 border-shade1 rounded-lg hover:bg-shade3 focus:ring-2 focus:ring-shade3 focus:bg-shade3">
                            Convert
                            <svg className="w-5 h-5 ml-2 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:items-center">
                        <img src={Plagiarism} alt="mockup" className="h-96" />
                    </div>
                </div>
            </section>

            <section className="relative">
                {/* <div className="blur w-full h-full absolute z-10 backdrop-blur-[.1em]">
                </div>
                    <button className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-shade2 py-3 px-5 text-xl rounded-md text-shade1">Try For Free</button> */}
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-16 z-0">
                    <dl className="relative overflow-hidden grid max-w-screen-2xl gap-8 mx-auto text-shade2 sm:grid-cols-2 dark:text-shade1">
                        <div className="block overflow-hidden my-5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <div className="title bg-shade2 py-2"><label htmlFor="" className="text-lg text-shade font-bold ">AI</label></div>
                            <textarea id="message" rows="15" className=" w-full text-shade4 tracking-wider leading-6 p-2 outline-none caret-shade4 resize-y" placeholder="Leave a comment..."></textarea>
                        </div>
                        <FaArrowRight className="absolute z-10 w-full top-1/2" />
                        <div className="block overflow-hidden my-5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500">
                            <div className="title bg-shade2 py-2"><label htmlFor="" className="text-lg text-shade font-bold ">Human</label></div>
                            <textarea id="message" rows="15" className=" w-full text-shade4 tracking-wider leading-6 p-2 outline-none caret-shade4 resize-y" placeholder="Leave a comment..."></textarea>
                        </div>
                    </dl>
                </div>
            </section>

            <section className="grid items-center relative h-screen scroll-smooth ">
                <div className="flex justify-between gap-8 h-screen max-w-screen-xl mx-auto md:px-0 md:my-2">
                    <div className="hidden lg:flex lg:items-center">
                        <img src={Plagiarism} alt="mockup" className="h-96" />
                    </div>

                    <div className="md:h-screen gap-3 flex flex-col justify-center md:justify-center">
                        <h1 className="max-w-2xl pl-2 md:pl-2 mb-2 md:mb-4 text-3xl font-bold tracking-wider leading-none md:text-5xl xl:text-5xl text-shade2">AI To Human Text Converter</h1>

                        <p className="md:max-w-xl tracking-wide md:leading-8 my-4 mx-2 font-light text-justify md:mb-8 md:text-xl text-gray-400">Uses intelligent computer programs to study the text and convert it into human form Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam qui tempora explicabo expedita eligendi, corrupti molestiae quam impedit corporis natus.</p>
                        <a href="#section2" className="inline-flex items-center justify-center py-2 px-2 mx-2 w-32 md:px-5 md:w-44 md:py-3 text-base md:font-medium md:text-xl text-center tracking-wider text-shade3 hover:text-shade1 focus:text-shade1 border-2 border-shade1 rounded-lg hover:bg-shade3 focus:ring-2 focus:ring-shade3 focus:bg-shade3">
                            Convert
                            <svg className="w-5 h-5 ml-2 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </section>

            <section className="relative">
                {/* <div className="blur w-full h-full absolute z-10 backdrop-blur-[.1em]">
                </div>
                    <button className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-shade2 py-3 px-5 text-xl rounded-md text-shade1">Try For Free</button> */}
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-16 z-0">
                    <dl className="relative overflow-hidden grid max-w-screen-2xl gap-8 mx-auto text-shade2 sm:grid-cols-2 dark:text-shade1">
                        <div className="block overflow-hidden my-5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <div className="title bg-shade2 py-2"><label htmlFor="" className="text-lg text-shade font-bold ">AI</label></div>
                            <textarea id="message" rows="15" className=" w-full text-shade4 tracking-wider leading-6 p-2 outline-none caret-shade4 resize-y" placeholder="Leave a comment..."></textarea>
                        </div>
                        <FaArrowRight className="absolute z-10 w-full top-1/2" />
                        <div className="block overflow-hidden my-5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500">
                            <div className="title bg-shade2 py-2"><label htmlFor="" className="text-lg text-shade font-bold ">Human</label></div>
                            <textarea id="message" rows="15" className=" w-full text-shade4 tracking-wider leading-6 p-2 outline-none caret-shade4 resize-y" placeholder="Leave a comment..."></textarea>
                        </div>
                    </dl>
                </div>
            </section>
        </>
    )
};

export default Home;
