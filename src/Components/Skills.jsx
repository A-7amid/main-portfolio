import React from "react";

const skills = [
  { name: "React JS", level: 7 },
  { name: "Node JS", level: 6 },
  { name: "Tailwind CSS", level: 7 },
  { name: "Express JS", level: 8 },
  { name: "JavaScript", level: 9 },
  { name: "Next JS", level: 7 },
];

const Skills = () => {
  let skill1 = [];
  // for (let x = 0; x < skills.length; x++) {
  //   for (let i = 0; i < skills[x].level; i++) {
  //     skill1.push(<span className="bg-black flex size-5 rounded-full"></span>);
  //   }
  // }

  for (let i = 0; i < 4; i++) {
    skill1.push(<span className="bg-black flex size-5 rounded-full"></span>);
  }

  return (
    <div id="skills" className="font-medium pb-8">
      <h2 className="font-semibold text-6xl mb-16">My Skills</h2>
      <div>
        {/* <Skill skills={skills} /> */}

        <div className="grid grid-cols-2 gap-5 w-10/12 ml-20 cursor-default">
          {/* <span className="flex items-center gap-2">
            <span className="flex flex-1">React JS</span>

            <span className="bg-black flex size-5 rounded-full"></span>
          </span> */}

          <span className="flex items-center gap-4">
            <h1 className="flex flex-1">React JS</h1>
            <div className="flex gap-2 justify-end mr-7">
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
            </div>
          </span>

          <span className="flex items-center gap-4">
            <h1 className="flex flex-1">Tailwind CSS</h1>
            <div className="flex gap-2 justify-end mr-7">
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
            </div>
          </span>

          <span className="flex items-center gap-4">
            <h1 className="flex flex-1">Next JS</h1>
            <div className="flex gap-2 justify-end mr-7">
              <span className="dots bg-black flex size-4 rounded-full"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
            </div>
          </span>

          <span className="flex items-center gap-4">
            <h1 className="flex flex-1">Node JS</h1>
            <div className="flex gap-2 justify-end mr-7">
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
            </div>
          </span>

          <span className="flex items-center gap-4">
            <h1 className="flex flex-1">TypeScript</h1>
            <div className="flex gap-2 justify-end mr-7">
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
            </div>
          </span>

          <span className="flex items-center gap-4">
            <h1 className="flex flex-1">SQL</h1>
            <div className="flex gap-2 justify-end mr-7">
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
              <span className="dots2"></span>
            </div>
          </span>
        </div>
        {/* <div className="items-center flex gap-2">
          <span className="mr-10">React JS</span>
          {skill.map((skill) => skill)}
        </div> */}
      </div>
    </div>
  );
};

// const Skill = ({ skills }) => {
//   const skillLoop = (time) => {
//     for (let i = 0; i < 5; i++) {
//       //   <span className="flex rounded-full size-5 bg-black"></span>;
//       <div>Hi</div>;
//     }
//   };

//   console.log(skillLoop());

//   return (
//     <div className="grid grid-rows-3 w-full gap-4">
//       <span>React JS</span>
//       <span>React JS</span>
//       <span>React JS</span>
//       <span>React JS</span>
//       <span>React JS</span>
//       {/* {skills.map((skill, index) => (
//         <span key={index} className="flex text-lg gap-4 items-center">
//           {skill.name}
//           {skill.level == 70
//             ? // <span ref={}></span>
//               ""
//             : ""}
//         </span>
//       ))} */}
//     </div>
//   );
// };

export default Skills;
