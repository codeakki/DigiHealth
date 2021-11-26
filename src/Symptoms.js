import React from "react";
import "./App.css";
import "react-tabs/style/react-tabs.css";


function Symptom() {
  return (
    <div style={{ margin: "20px" }}>

      <h3>Overview</h3>
      <p>
        Coronavirus disease (COVID-19) is an infectious disease caused by a
        newly discovered coronavirus.
      </p>
      <p>
        Most people who fall sick with COVID-19 will experience mild to
        moderate symptoms and recover without special treatment.
      </p>
      <hr />
      <h3>HOW IT SPREADS</h3>
      <p>
        The virus that causes COVID-19 is mainly transmitted through
        droplets generated when an infected person coughs, sneezes, or
        exhales. These droplets are too heavy to hang in the air, and
        quickly fall on floors or surfaces.
      </p>
      <p>
        You can be infected by breathing in the virus if you are within
        close proximity of someone who has COVID-19, or by touching a
        contaminated surface and then your eyes, nose or mouth.
      </p>

      <p>
        COVID-19 affects different people in different ways. Most infected
        people will develop mild to moderate illness and recover without
        hospitalization.
      </p>
      <hr />
      <h3>Symptoms</h3>
      <h4>Most common symptoms:</h4>

      <li>Fever</li>
      <li>Dry Cough</li>
      <li>Tiredness</li>

      <h4>Less common symptoms:</h4>

      <li>Aches and Pains</li>
      <li>Sore Throat</li>
      <li>Diarrhoea</li>
      <li>Conjunctivitis</li>
      <li>Headache</li>
      <li>Loss of taste or smell</li>
      <li>A rash on skin, or discolouration of fingers or toes</li>

      <h4>Serious symptoms:</h4>

      <li>Difficulty breathing or shortness of breath</li>
      <li>Chest pain or pressure</li>
      <li>Loss of speech or movement</li>

      <p>
        Seek immediate medical attention if you have serious symptoms.
        Always call before visiting your doctor or health facility.
      </p>
      <img src="/images/doctor.svg" style={{ height: 350 }} />
      <p>
        People with mild symptoms who are otherwise healthy should manage
        their symptoms at home.
      </p>
      <p>
        On average it takes 5–6 days from when someone is infected with the
        virus for symptoms to show, however it can take up to 14 days.
      </p>
      <h3>Prevention</h3>
      <p>
        Protect yourself and others around you by knowing the facts and
        taking appropriate precautions. Follow advice provided by your local
        public health agency.
      </p>
      <hr />
      <h3>To prevent the spread of COVID-19:</h3>

      <li>
        Clean your hands often. Use soap and water, or an alcohol-based
        hand rub.
        <img src="/images/wash-hand.svg" style={{ height: 450 }} />
      </li>
      <li>
        Maintain a safe distance from anyone who is coughing or sneezing.
        <img src="/images/distance.svg" style={{ height: 350 }} />
      </li>

      <li>Don’t touch your eyes, nose or mouth.</li>
      <li>
        Cover your nose and mouth with your bent elbow or a tissue when
        you cough or sneeze.
      </li>
      <li>Stay home if you feel unwell.</li>
      <li>
        If you have a fever, cough and difficulty breathing, seek medical
        attention. Call in advance.
      </li>
      <li>Follow the directions of your local health authority.</li>

      <p>
        Avoiding unneeded visits to medical facilities allows healthcare
        systems to operate more effectively, therefore protecting you and
        others.
      </p>
      <hr />
      <h3>Treatments</h3>

      <p>
        To date, there are no specific vaccines or medicines for COVID-19.
        Treatments are under investigation, and will be tested through
        clinical trials. World Health Organization
      </p>
      <hr />
      <h4>Self-care</h4>
      <p>
        If you feel sick you should rest, drink plenty of fluid, and eat
        nutritious food. Stay in a separate room from other family members,
        and use a dedicated bathroom if possible. Clean and disinfect
        frequently touched surfaces.
      </p>
      <p>
        Everyone should keep a healthy lifestyle at home. Maintain a healthy
        diet, sleep, stay active, and make social contact with loved ones
        through the phone or internet. Children need extra love and
        attention from adults during difficult times. Keep to regular
        routines and schedules as much as possible.
      </p>
      <img src="/images/home.svg" style={{ height: 150 }} />
      <img src="/images/call.svg" style={{ height: 250 }} />
      <img src="/images/workout.svg" style={{ height: 250 }} />
      <img src="/images/food.svg" style={{ height: 200 }} />
      <p>
        It is normal to feel sad, stressed, or confused during a crisis.
        Talking to people you trust, such as friends and family, can help.
        If you feel overwhelmed, talk to a health worker or counsellor.
      </p>
      <h4>Medical treatments</h4>
      <p>
        If you have mild symptoms and are otherwise healthy, self-isolate
        and contact your medical provider or a COVID-19 information line for
        advice.
      </p>
      <p>
        Seek medical care if you have a fever, a cough, and difficulty
        breathing. Call in advance.
      </p>

    </div >
  );
}

export default Symptom;