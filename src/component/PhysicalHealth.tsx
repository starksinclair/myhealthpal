import React, { useState } from "react";
import "./PhysicalHealth.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
function PhysicalHealth() {
  //   const history = useHistory(); // Initialize useHistory
  const [inputs, setInputs] = useState({
    age: "",
    gender: "",
    raceAndEthnicity: "",
    height: "",
    weight: "",
    bmi: "",
    waistCircumference: "",
    waistToHipRatio: "",
    physicalActivityLevel: "",
    dietaryHabit: "",
    medicalRecord: "",
    dailyDietDetails: "",
    exerciseDetails: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseReceived, setResponseReceived] = useState(false); // New state for response tracking
  function calculateBMI(height: string, weight: string): string {
    const heightInMeters = parseInt(height) / 100;
    const weightInKg = parseInt(weight);
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  }
  const inputss = {
    raceEthnicity: "Asian",
    height: "170 cm", // Height in cm
    weight: "70 kg", // Weight in kg
    waistCircumference: "80 cm", // Waist circumference in cm
    waistToHipRatio: "0.9", // Waist-to-hip ratio
    physicalActivityLevel:
      "Moderate (3-4 times a week, 45-minute sessions, mix of cardio and strength training)",
    dietaryHabit:
      "Balanced diet with three meals a day, including vegetables, fruits, lean proteins, occasional fast food (once a week)",
    medicalRecord:
      "No significant medical history, non-smoker, no dietary restrictions",
    age: "28", // Age in years
    gender: "Male", // Gender
    BMI: calculateBMI("170", "70"), // Calculated BMI using height and weight
    dailyDietDetails:
      "Breakfast: Oatmeal with fruits, Lunch: Grilled chicken salad, Dinner: Stir-fried vegetables with tofu, Snacks: Almonds, apple",
    exerciseDetails:
      "Cardio: Running 3 times a week, 30 minutes each; Strength training: 2 times a week, 45 minutes each",
  };

  const [value, setValue] = useState("");
  const data = [
    "Age",
    "Gender",
    "BMI",
    "Race and Ethnicity",
    "Height",
    "Weight",
    "Waist Circumference",
    "Waist to Hip Ratio",
    "Physical Activity Level",
    "Dietary Habit",
    "Medical Record",
    "Daily Diet Details",
    "Exercise Details",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  console.log(Object.values(inputs).join());

  const processValues = async () => {
    setLoading(true);
    console.log(value);
    const API_KEY = "AIzaSyAYLsAGikd_pbdgJGHfsDABHuE76efHqLg";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "text/plain",
        maxOutputTokens: 1000,
        temperature: 0.8,
      },
    });
    const prompt = `
Given the following data:
- Race and Ethnicity: ${inputss.raceEthnicity}
- Height: ${inputss.height}
- Weight: ${inputss.weight}
- Waist Circumference: ${inputss.waistCircumference}
- Waist to Hip Ratio: ${inputss.waistToHipRatio}
- Physical Activity Level: ${inputss.physicalActivityLevel}
- Dietary Habits: ${inputss.dietaryHabit}
- Medical Record: ${inputss.medicalRecord}
- Age: ${inputss.age}
- Gender: ${inputss.gender}

Predict the person's current body health status (whether they are obese, normal weight, or slim). Additionally, predict if the person is likely to become obese in the future if they maintain their current lifestyle and provide a personalized solution to improve or maintain their health.
give me a brief summary, that a user would like to read`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    setLoading(false);
    setValue(text);
    setResponseReceived(true); // Set response received to true

    console.log(text);
    setInputs({
      age: "",
      gender: "",
      bmi: "",
      raceAndEthnicity: "",
      height: "",
      weight: "",
      waistCircumference: "",
      waistToHipRatio: "",
      physicalActivityLevel: "",
      dietaryHabit: "",
      medicalRecord: "",
      dailyDietDetails: "",
      exerciseDetails: "",
    });
  };

  const clearResponse = () => {
    setInputs({
      age: "",
      gender: "",
      bmi: "",
      raceAndEthnicity: "",
      height: "",
      weight: "",
      waistCircumference: "",
      waistToHipRatio: "",
      physicalActivityLevel: "",
      dietaryHabit: "",
      medicalRecord: "",
      dailyDietDetails: "",
      exerciseDetails: "",
    });
    setValue("");
    setResponseReceived(false); // Reset response tracking
  };

  return (
    <div>
      <Link to={"/"} className="back-btn">
        <button>Back</button>
      </Link>
      {/* Back button */}
      <h2>Good Morning</h2>
      <div className="all">
        <div id="first-section">
          <div className="section-container">
            {data.map((key) => (
              <div className="section" key={key}>
                <h3 className="name">{key}</h3>
                <div className="value">
                  <input
                    type="text"
                    name={key}
                    className="input-field"
                    placeholder="Enter value"
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}
            <button id="enter-bar" onClick={processValues}>
              Process
            </button>
          </div>
        </div>
        <div className="response">
          {" "}
          {loading ? (
            <div className="loader">Loading....</div>
          ) : (
            <Markdown remarkPlugins={[remarkGfm]}>{value}</Markdown>
          )}
          {responseReceived && ( // Conditionally render the button
            <button onClick={clearResponse}>Clear Response</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PhysicalHealth;
