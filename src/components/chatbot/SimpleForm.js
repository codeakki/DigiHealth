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
              id:'1', 
              message:'Heya!, What is your name?', 
              trigger:'intro-user'
            },
            {
              id:'intro-user', 
              user:true,
              trigger:'response'
            },
            {
              id:'response', 
              message:'Great!, Hi {previousValue}! What is your gender?', 
              trigger:'gender'
            },
            {
              id:'gender', 
              options: [
                { value: "male", label: "Male", trigger: "5" },
                { value: "female", label: "Female", trigger: "5" }
              ]
            },
            {
              id: "5",
              message: "How old are you?",
              trigger: "age"
            },
            {
           id: "age",
            user:true,
            trigger: "end-msg"
            },
              {
                id: "end-msg",
                message: "Thanks! Your data was submitted successfully!",
                end: true
              },
            ]}
            {...config}
        />
      </ThemeProvider>
    );
  }

}

export default SimpleForm;






