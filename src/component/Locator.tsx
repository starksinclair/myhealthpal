// import "./Locator.css";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { useState } from "react";
// import Markdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// const Locator = () => {
//   const [location, setLocation] = useState("");
//   const [viruses, setViruses] = useState("");

//   const checkViruses = async () => {
//     if (location) {
//       const API_KEY = "AIzaSyAYLsAGikd_pbdgJGHfsDABHuE76efHqLg";
//       const genAI = new GoogleGenerativeAI(API_KEY);
//       const model = genAI.getGenerativeModel({
//         model: "gemini-1.5-flash",
//         generationConfig: {
//           responseMimeType: "text/plain",
//           maxOutputTokens: 1000,
//           temperature: 0.8,
//         },
//       });
//       const prompt = `Given the location: ${location}, what are the past predominant viruses in the area? Please provide just the names of the viruses, or return null if there are none. check news, disease databases`;

//       const result = await model.generateContent(prompt);
//       const text = result.response.text();
//       console.log(text);
//       //   const virusesList = text.split("\n").map((virus) => virus.trim());
//       setViruses(text);
//     }
//   };

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   return (
//     <>
//       {" "}
//       <section>
//         <h1>
//           Get health history of any location, at ease. <br />
//           Just tell us the place
//         </h1>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             checkViruses();
//           }}
//         >
//           <input
//             type="text"
//             id="location"
//             placeholder="Enter location"
//             onChange={handleLocationChange}
//           />
//           <button type="submit" title="Search">
//             <i className="fas fa-globe-americas"></i>
//           </button>
//         </form>
//       </section>
//       <hr style={{ marginTop: "2rem", marginRight: "4rem" }} />
//       <section>
//         <div id="history">
//           {" "}
//           <Markdown remarkPlugins={[remarkGfm]}>{viruses}</Markdown>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Locator;
