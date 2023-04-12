import React from 'react'
import Chatbot_tab_1 from './chatbot-tabs/Chatbot_tab_1'
import Chatbot_tab_2 from './chatbot-tabs/Chatbot_tab_2'
import Chatbot_tab_3 from './chatbot-tabs/Chatbot_tab_3'
import ChatbotConnectToChannel from './ChatbotConnectToChannel/ChatbotConnectToChannel'
import ChatbotConnectToChannelFirst from './ChatbotConnectToChannel/ChatbotConnectToChannelFirst'
import Chatbotfinish from './Chatbotfinish/Chatbotfinish'
import CreateChatbotLast from './CreateChatbotLast/CreateChatbotLast'

const Chatbot = () => {
    const [chatbotTab, setChatbotTab] = React.useState(1)
    const changeChatBotTab = (tab) => {
        setChatbotTab(tab)
    }
    return (
        <div>
            {chatbotTab === 1 && <Chatbot_tab_1 changeChatBotTab={changeChatBotTab} />}
            {chatbotTab === 2 && <Chatbot_tab_2 changeChatBotTab={changeChatBotTab} />}
            {chatbotTab === 3 && <ChatbotConnectToChannelFirst changeChatBotTab={changeChatBotTab} />}
            {chatbotTab === 4 && <ChatbotConnectToChannel changeChatBotTab={changeChatBotTab} />}
            {chatbotTab === 5 && <Chatbotfinish changeChatBotTab={changeChatBotTab} />}
            {chatbotTab === 6 && <CreateChatbotLast changeChatBotTab={changeChatBotTab} />}
        </div>
    )
}

export default Chatbot