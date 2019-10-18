import React from 'react';
import ChatBot from 'react-simple-chatbot';

export default class Claim extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    render() {
        let visible = this.state.visible;
        return visible ? (
                <ChatBot 
                    steps={[
                        {
                            id: 'hello-world',
                            message: 'Hello I hope you are doing good. Let us know how we can help you',
                            end: false,
                        },
                        {
                            id: 'helo-world',
                            message: 'Aur Bhsi!',
                            end: false,
                        },
                        {
                            id: 'helworld',
                            message: 'BC',
                            end: false,
                        },
                        {
                            id: 'hrld',
                            message: 'Ok',
                            end: false,
                        }
                    ]}
                />
        ) : 
        <button  style = {{
            height: "80px",
            width: "80px",
            borderRadius: "40px",
            backgroundColor: "black",
            color: "white",
            bottom: "30px",
            position: "fixed",
            right: "5px",
            margin: "0px ,25px"
        }}onClick={() => {
            this.setState({visible: !this.state.visible}
            );
        }}>
            Claim
        </button>
    }
}