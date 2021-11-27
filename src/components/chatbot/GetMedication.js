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
                { value: 1, label: "Healthy Diet", trigger: "diet" },
                { value: 2, label: "Exercise", trigger: "exercise" },
                { value: 3, label: "Adequate Sleep", trigger: "sleep" },
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
                { value: 2, label: "Stomach Aches", trigger: "stomach" },
                { value: 3, label: "Muscle Pains", trigger: "muscle pains" },
              ],
            },
            {
              id: "stomach",
              message:
                "Baking soda for heartburn, mix 1 teaspoon of baking soda in 8 ounces of water and drink it.",
              trigger: "99",
            },
            {
              id: "muscle pains",
              message: "Use a compression bandage to help reduce swelling.",
              trigger: "99",
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
              id: "diet",
              message: "Make most of your meal with vegetables and fruits, whole grains, protein, plant oils.",
              trigger:'99',
            },
            {
              id: "exercise",
              message: "Make you feel happier, weight loss, good for muscles and bones, increase your energy levels, skin health, reduce pain and all.",
              trigger:'99',
            },
            {
              id: "sleep",
              message: "Sleep is an essential function that allows your body and mind to recharge, leaving you refreshed and alert when you wake up.",
              trigger:'99',
            },
            {
              id: "99",
              message: "I hope that may help you, Thank You!!",
              end: true,
            },
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
