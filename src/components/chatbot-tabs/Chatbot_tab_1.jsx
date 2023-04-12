import addIcon from "../../assets/iconadd.png";

const Chatbot_tab_1 = ({changeChatBotTab}) => {
    return (
        <div className='dashboard_tab chatbot_tab'>
            <div>
                <h1>Chatbot</h1>
                <p className="smaller__heading">0 custom chatbots</p>
                <div className='chatbot__tab__info__btn add_button' onClick={()=>changeChatBotTab(2)}>
                    <img src={addIcon} alt="add" />
                    <p>Build</p>
                </div>
                <div className="chatbot__tab1__info">
                    <div className="chatbot__tab1__elevations">
                        <div className="chatbot__tab1__elevations__card">
                            <div className="elevation__card__ellipse_combo">
                                <div className="elevation__card__ellipse">
                                    <div></div>
                                </div>
                                <div className="elevation__card__lines_combo">
                                <div className="elevation__card__line">
                                </div>
                                <div className="elevation__card__line elevation__card__line__2">
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="no_activity">no activity yet</p>
                </div>
            </div>
        </div >
    )
}

export default Chatbot_tab_1