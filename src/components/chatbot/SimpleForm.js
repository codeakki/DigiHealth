import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Courier New',
  headerBgColor: '#2f3578',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#2f3578',
  botFontColor: '#fff',
  userBubbleColor: '#0099ff',
  userFontColor: '#fff',
};
const config = {
  width: "400px",
  height: "500px",
  floating: true,
};

class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: 'intro',
              message: 'Do you agree to the Terms and Conditions?',
              trigger: 'intro-user',
            },
            {
              id: 'intro-user',
              options: [
                { value: 'y', label: 'Yes', trigger: 'yes-response' },
                { value: 'n', label: 'No', trigger: 'no-response' },
              ]
            },
            {
              id: 'yes-response',
              message: 'Great!',
              end: true,
            },
            {
              id: 'no-response',
              message: 'Sorry to hear that.',
              end: true,
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    );
  }

}

export default SimpleForm;






