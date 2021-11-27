import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Courier New",
  headerBgColor: "#ff0000",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#ff0000",
  botFontColor: "#fff",
  userBubbleColor: "#0099ff",
  userFontColor: "#fff",
};
const config = {
  width: "600px",
  height: "500px",
  margin:"15%",
  floating: false,
};

class GetMedication extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Get Medications"
          recognitionEnable={true}
          speechSynthesis={{ enable: true, lang: "en" }}
          steps={[
            {
              id: "1",
              message: "Heya!, What is your name?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Great!, Hi {previousValue}! How may I help you ?",
              trigger: "on",
            },
            {
              id: "on",
              options: [
                { value: 1, label: "Need Info", trigger: "4" },
                {
                  value: 2,
                  label: "Not Feeling Well",
                  trigger: "5",
                },
              ],
            },
            {
              id: "4",
              message: "Boost Immune System",
              trigger: "9",
            },
            {
              id: "9",
              options: [
                { value: 1, label: "Healthy Diet", trigger: "11" },
                { value: 2, label: "Exercise", trigger: "11" },
                { value: 3, label: "Adequate Sleep", trigger: "11" },
              ],
            },
            {
              id: "5",
              message: "What happen?",
              trigger: "77",
            },

            {
              id: "77",
              options: [
                { value: 1, label: "Fever", trigger: "fever" },
                { value: 2, label: "Stomach Aches", trigger: "11" },
                { value: 3, label: "Muscle Pains", trigger: "11" },
              ],
            },
            {
              id: "11",
              message: "well done",
              end: true,
            },

            {
              id: "fever",
              message: "What is your age between?",
              trigger: "op",
            },

            {
              id: "op",
              options: [
                { value: 1, label: "2-17 years", trigger: "2-17" },
                { value: 2, label: "18 years and up", trigger: "18" },
              ],
            },
            {
              id: "2-17",
              message:
                "Medications such as paracetamol, Avoid giving children aspirin because this may cause a rare, serious condition.",
              trigger: "99",
            },
            {
              id: "18",
              message:
                "Drinking plenty of fluids,Resting,Taking warm baths,Taking OTC medications",
              trigger: "99",
            },
            {
              id: "99",
              message: "I hope that my help you, Thank You!!",
              end: true,
            },
            // {
            //   id: '',
            //   message: '',
            //   trigger: '',
            // },
            //   {
            //     id:'gender',
            //     options: [
            //       { value: "male", label: "Male", trigger: "5" },
            //       { value: "female", label: "Female", trigger: "5" }
            //     ]
            //   },
            //   {
            //     id: "5",
            //     message: "How old are you?",
            //     trigger: "6"
            //   },
            //   {
            //  id: "6",
            //   user:true,
            //   trigger: "end-msg"
            //   },
            //     {
            //       id: "end-msg",
            //       message: "Thanks! Your data was submitted successfully!",
            //       end: true
            //     },
          ]}
          {...config}
          floatingStyle={{
            left: "calc(50% - 28px)",
        /*     transformOrigin: "bottom center", */
            borderRadius: 0,
          }}
          style={{
            left: "calc(50% - 175px)",
          }}
        />
      </ThemeProvider>
    );
  }
}

export default GetMedication;