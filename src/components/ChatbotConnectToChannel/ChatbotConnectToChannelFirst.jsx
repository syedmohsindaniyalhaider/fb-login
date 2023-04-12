import React from 'react'
import "./ChatbotConnectToChannelFirst.css";
import Closeicon from "../../assets/images/svg/Close.svg"
import Faqsicon from "../../assets/images/svg/Faqs.svg";
import ArrowDown from "../../assets/images/svg/ArrowDown.svg";
import MessengerImage from "../../assets/images/svg/messenger.svg";
import InstaImage from "../../assets/images/svg/instagram.png";
import ConfigureBot from '../chatbot-tabs/ConfigureBot';

export default function ChatbotConnectToChannelFirst({ changeChatBotTab }) {
    const [first, setfirst] = React.useState(false)
    const [deploying, setDeploying] = React.useState(false)
    const [deployed, setDeployed] = React.useState(false)
    function ShowHide() {
        setfirst(true);
    }

    const deployBot = () => {
        console.log("deploying")
        setDeploying(true)
        setTimeout(() => {
            setDeploying(false)
            setDeployed(true)
            console.log("deployed")
        }, 3000);
        setTimeout(() => {
            setDeployed(false)
        }, 10000);
    }
    return (
        <React.StrictMode>
            <main className='chat__box__connect__to__channel__main'>
                <div className="chat__box__connect__to__channel__container">
                    <h1>
                        Chatbot
                    </h1>
                    <p>
                        0 custom chatbots
                    </p>

                    <div className="chat_bot_first_channel__box mt-4">
                        <div className='flex justify-between items-center'>
                            <h2 className='text-l'>
                                Connect your chatbot to a channels:
                            </h2>
                            <img src={Closeicon} alt="" onClick={() => changeChatBotTab(2)} />
                        </div>
                        <div className='faq__yellow flex items-center pl-8'>
                            <div className='flex items-center gap-3'>
                                <img src={Faqsicon} alt="" />
                                <h4 className='text-base font-medium'>FAQ Capiblities</h4>
                            </div>

                        </div>
                        {deployed && <div className='success_deployed'>
                            <p className=''>Successfully deployed!</p>
                        </div>}
                       {deploying && <div className='success_deployed bg-white text-slate-950 border-2'>
                            <p className=''>Deploying chat bot via messenger.....</p>
                        </div>}
                        <div className='faq__channel__select'>
                            {/* <span className='text-sm'>
                                Channel
                            </span>
                            <img src={ArrowDown} alt="" onClick={()=>setfirst(!first)} />
                            {first ?
                                <div className='absolute left-0 cursor-default top-8 w-32 bg-[#F7FEF8] h-20'>
                                    <div class="flex items-center justify-between mb-0 p-2">
                                        <label for="messenger" class="ml-2 text-sm font-medium text-gray-900">Messenger</label>
                                        <input id="messenger" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                    <div class="flex items-center justify-between mb-4 p-2">
                                        <label for="insta" class="ml-2 text-sm font-medium text-gray-900">Instagram</label>
                                        <input id="insta" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </div> : null
                            } */}
                            <h5>Channel</h5>
                            <div className='channel__chat__bots'>
                                <ConfigureBot type="Facebook" typeIcon={MessengerImage} botName="chat_simple" botIcon={MessengerImage} />
                                <ConfigureBot type="Instagram" typeIcon={InstaImage} botName="chat_simple" botIcon={MessengerImage} />
                            </div>
                        </div>

                        <div className='absolute bottom-6 left-6'>
                            <div className='flex items-center gap-3'>
                                <button className='text-sm text-gray-600 border border-solid border-gray-300 px-6 py-2 rounded-full' onClick={() => changeChatBotTab(2)}>
                                    Back
                                </button>
                                <button className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full' onClick={deployBot}>
                                    {deploying ? "Deploying" : "Deploy"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.StrictMode>
    )
}
