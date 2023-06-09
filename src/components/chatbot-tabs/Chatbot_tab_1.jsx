import { useDispatch, useSelector } from "react-redux";
import addIcon from "../../assets/iconadd.png";
import { allChatBots, createChatBot } from "../../redux/reducers/chatbotSlice";
import { useEffect, useState } from "react";

// this file

const Chatbot_tab_1 = ({ changeChatBotTab }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { chatBots } = useSelector((state) => state.chatbot); // this has all the chat-bots list for a user that is logged in

  const [chatbotTitle, setChatbotTitle] = useState("");

  const chatbotHandler = () => {
    // for chat bot creation
    if (!!chatbotTitle) {
      const data = {
        userID: user?.user_id,
        chatbotDetail: {
          timezone: "UTC",
          platforms: { first: "messenger" },
          chatbot_title: chatbotTitle,
        },
        chatbotID: "098765",
      };
      dispatch(createChatBot(data));
    }
  };

  useEffect(() => {
    const data = {
      userID: user?.user_id,
      pageToken: {
        page_token: { last_time: "2023-03-20 04:54:32.547084+00:00" },
      },
    };
    dispatch(allChatBots(data));
  }, [user]);

  console.log("chatBots", chatBots);

  return (
    <div className="dashboard_tab chatbot_tab">
      <div>
        <h1>Chatbot</h1>
        <p className="smaller__heading">0 custom chatbots</p>
        <div
          className="chatbot__tab__info__btn add_button"
          onClick={() => changeChatBotTab(2)}
        >
          <img src={addIcon} alt="add" />
          <p>Build</p>
        </div>
        <div>
          <input
            value={chatbotTitle}
            onChange={(e) => setChatbotTitle(e.target.value)}
            placeholder="Enter chatbot title"
          />
          <button
            style={{
              backgroundColor: "ButtonShadow",
              padding: "4px",
            }}
            onClick={chatbotHandler}
          >
            Submit
          </button>
        </div>
        <div className="chatbot__tab1__info">
          <div className="chatbot__tab1__elevations">
            <div className="chatbot__tab1__elevations__card">
              <div className="elevation__card__ellipse_combo">
                <div className="elevation__card__ellipse">
                  <div></div>
                </div>
                <div className="elevation__card__lines_combo">
                  <div className="elevation__card__line"></div>
                  <div className="elevation__card__line elevation__card__line__2"></div>
                </div>
              </div>
            </div>
          </div>
          <p className="no_activity">no activity yet</p>
        </div>
      </div>
    </div>
  );
};

export default Chatbot_tab_1;
