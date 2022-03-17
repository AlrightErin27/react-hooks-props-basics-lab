import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
//console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home city={user.city} name={user.name} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}
export default App;

//////////////////////////NOTES ON PROPS PATH//////////////////////////
//------🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥----------------->
// from App.js ->
// function Home({ city, name, color }) {
//   return (
//     <div id="home">
//       <h1 style={{ color: color }}>
//         {name} is a Web Developer from {city}
//       </h1>
//     </div>
//   );
// }
// export default Home;
//------🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥----------------->
//------🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉----------------->
// import Links from "./Links";
// function About({ bio, links }) {
//   return (
//     <div id="about">
//       <h2>About Me</h2>
//       {bio && <p>{bio}</p>}
//       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//       <Links github={links.github} linkedin={links.linkedin} />
//     </div>
//   );
// }
// export default About;
//------🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉----------------->
//------🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨----------------->
// const Links = ({ github, linkedin }) => {
//   return (
//     <div>
//       <h3>Links</h3>
//       <a href={github}>{github}</a>
//       <a href={linkedin}>{linkedin}</a>
//     </div>
//   );
// };
// export default Links;
//------🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨----------------->
