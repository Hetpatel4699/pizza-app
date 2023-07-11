// import React from "react";
// import MultiplePizzas from "../assets/MultiplePizzas.jpeg";
// import '../styles/About.js';

// function About() {
//   return (
//     <div className="about">
//       <div
//         className="aboutTop"
//         style={{ backgroundImage: `url(${MultiplePizzas})` }}
//       >
//       </div>
//       <div className="aboutBottom">
//         <h1> About US</h1>
//         <p> lorem</p>
//       </div>
//     </div>
//   );
// }

// export default About;
import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          exercitationem, dicta voluptatibus qui fuga eaque perspiciatis facere
          fugiat non odio sequi doloremque corrupti temporibus asperiores vitae
          animi, veritatis provident est odit cupiditate voluptatum ea optio
          iste quia? Quis, id officia nulla magni molestias sed omnis quisquam
          et iste, possimus quasi labore voluptate saepe laboriosam vitae amet
          consequatur ratione fugit obcaecati, at vel! Dolor esse modi fugiat
          officiis, maiores quo laudantium praesentium, quibusdam dolorum
          exercitationem, unde reiciendis numquam quaerat! Doloribus
          reprehenderit sunt nobis cupiditate eius iusto adipisci rem tenetur.
          Voluptatem amet alias, odio cum ipsum molestiae hic quasi aliquam
          facilis. Sequi!
        </p>
      </div>
    </div>
  );
}

export default About;
