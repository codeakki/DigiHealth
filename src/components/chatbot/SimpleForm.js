import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  const config ={
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
            id:'intro', 
            message:'Do you agree to the Terms and Conditions?', 
            trigger:'intro-user',
          },
          {
            id:'intro-user', 
            options:[
            {value:'y', label:'Yes', trigger:'yes-response'},
            {value:'n', label:'No', trigger:'no-response'},
            ] 
          },
          {
            id:'yes-response', 
            message:'Great!', 
            end:true,
          },
          {
            id:'no-response', 
            message:'Sorry to hear that.', 
            end:true,
          },
        ]}
        {...config}
      />
      </ThemeProvider>
    );
  }
       
}

export default SimpleForm;






