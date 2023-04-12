import React from 'react'
import "./CreateChatbotLast.css";
import CloseIcon from "../../assets/images/svg/Close.svg";
import MessageIcon from "../../assets/images/svg/Messages.svg";
import OutlineInput from '../../components/OutlineInput/OutlineInput';
import Spinner from '../Spinner';
export default function CreateChatbotLast({ changeChatBotTab }) {
    const [clicked, setClicked] = React.useState(false)
    const [fetchingResults, setFetchingResults] = React.useState(false)

    const fetchResults = () => {
        setFetchingResults(true)
        setTimeout(() => {
            setFetchingResults(false)
            setClicked(true)
        }, 5000);
    }
    return (
        <React.StrictMode>
            <main className='create__chat__bot_last'>
                <div className='create__chat_bot_container'>
                    <h1>
                        Chatbot
                    </h1>
                    <h6>
                        0 custom chatbots
                    </h6>

                    <div className='chat__create__Last__box'>
                        {/* <header className='flex justify-between items-center'>
                            <h1>What will your chatbot do?</h1>
                            <img src={CloseIcon} alt="" />
                        </header>

                        <div className='flex w-full items-center gap-10 pr-4 pt-4 pb-8'>
                            <div className='message_first'>
                                <div className='flex items-center gap-3'>
                                    <img src={MessageIcon} alt="" />
                                    <h4 className='text-lg'>Create an FAQ</h4>
                                </div>
                            </div>
                            <div className='message_second'>
                                <div className='flex items-center gap-3'>
                                    <img src={MessageIcon} alt="" />
                                    <h4 className='text-lg'>Create a business small talk</h4>
                                </div>
                            </div>
                        </div> */}

                        <h1>
                            Build FAQ
                        </h1>
                        <p className='text-sm'>
                            ChatSimple uses technology to create FAQ automatically. Start generating a list of FAQ by inputing an <br /> URL where you would like answers to created from.
                        </p>

                        <div className='flex items-center gap-4 mt-3'>
                            <input type="text" className='border border-solid border-gray-400 outline-none py-3 pl-4 rounded-md text-sm' placeholder='https://www.example.com' />
                            <button className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full' onClick={fetchResults} >
                                {fetchingResults ? "Building" : "Build"}
                            </button>
                        </div>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        {!fetchingResults ? <table
                                            className="min-w-full border-t-4 border-solid mt-4 border-green-400 rounded-md text-center text-sm font-light border-l border-r border-l-gray-200 shadow border-r-black">
                                            <thead className="border-b font-medium border-gray-300">
                                              
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-300 bg-gray-100">
                                                    <td
                                                        className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-300">

                                                    </td>
                                                    <td
                                                        className="whitespace-nowrap border-r px-6 py-4 font-bold text-left border-gray-300">
                                                        Question
                                                    </td>
                                                    <td
                                                        className="whitespace-nowrap border-r px-6 py-4 font-bold text-left border-gray-300">
                                                        Answer
                                                    </td>

                                                </tr>
                                                <tr className="border-b border-gray-300" >
                                                    <td
                                                        className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-300">
                                                        1
                                                    </td>
                                                    <td
                                                        className=" border-r text-left px-6 py-4 border-gray-300">
                                                        {clicked && "What is a ChatSimple Chatbot and how does it work?"}
                                                    </td>
                                                    <td

                                                        className="whitespace-nowrap border-r text-left px-6 py-4 border-gray-300">
                                                        {clicked && "A chatbot is a computer program designed to simulate conversation with human users, typically via messaging applications, websites, or mobile apps.Chatbots use natural language processing (NLP) and artificial intelligence (AI) to understand user input and respond with appropriate messages."}
                                                    </td>

                                                </tr>
                                                <tr className="border-b border-gray-300" colspan="2">
                                                    <td
                                                        className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-300">
                                                        2
                                                    </td>
                                                    <td
                                                        className="whitespace-nowrap text-left border-r px-6 py-4 border-gray-300">
                                                        {clicked && "How can I build a chatbot with ChatSimple?"}
                                                    </td>
                                                    <td
                                                        className="whitespace-nowrap text-left border-r px-6 py-4 border-gray-300">
                                                        {clicked && "Building a chatbot with ChatSimple is quick and easy. Simply sign up for ChatSimple, choose from our pre-built templates or start from scratch, customize your chatbot to match your brand, and integrate it with your preferred platform. Our AI-powered ChatGPT technology will handle the rest."}
                                                    </td>

                                                </tr>
                                                <tr className="border-b border-gray-300" colspan="2">
                                                    <td
                                                        className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-300">
                                                        3
                                                    </td>
                                                    <td
                                                        className="whitespace-nowrap text-left border-r px-6 py-4 border-gray-300">
                                                        {clicked && "What are the benefits of having a chatbot for my business?"}
                                                    </td>
                                                    <td
                                                        className="whitespace-nowrap text-left border-r px-6 py-4 border-gray-300">
                                                        {clicked && "There are many benefits to having a chatbot for your business, including: Improved customer service: Chatbots can answer common questions quickly and accurately, providing customers with the information they need in a timely manner. Increased efficiency: Chatbots can handle multiple customer inquiries simultaneously, freeing up your team to focus on other important tasks. Cost savings: By automating customer service with a chatbot, you can save on labor costs associated with hiring additional customer service representatives. 24/7 availability: Chatbots are always available to assist customers, regardless of the time of day or night. Personalization: Chatbots can be programmed to provide personalized recommendations and assistance based on each customer's unique needs and preferences. Overall, a chatbot can help improve customer satisfaction, streamline operations, and save your business time and money."}
                                                    </td>

                                                </tr>

                                            </tbody>
                                        </table> : <div className='spinner_wrapper_fetch'>
                                            <Spinner />
                                        </div>}
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <button className='text-sm text-gray-600 border border-solid border-gray-300 px-6 py-2 rounded-full' onClick={() => changeChatBotTab(2)}>
                                    Back
                                </button>
                                <button className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full' onClick={() => changeChatBotTab(2)} >
                                    Next
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </React.StrictMode>
    )
}
