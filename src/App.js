import './App.css';
import { Person, Mail, Home, Call } from "@material-ui/icons";

function App() {
  return (
    <div className="App">
      <div className="navigation-bar">
        <a href="https://hng.tech/"  target="_blank">
            <img class="logo" src="images/hng.png"/>
        </a>
    </div>
    <hr/>
    <div id="name">
      
      <h1 className="name">
      <Person className="icon"/> ABDULYEKEEN AFEEZ
      </h1>

      <p><Home/>
        41, Olorunto Street Akinola Bus Stop Iyana Ipaja Lagos State</p>
      <p>
      <Mail className="icon"/>
        afeezdev@gmail.com
      </p>
      <p><Call className="icon"/>08167089828</p>
    </div>
    <hr/>
    <div class="language"> 
        <h2>Programming Languages</h2>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Webpack</li>
          <li>React Js</li>          

        </ul>
    </div> <hr/>

    <div className="career">
      <h2>Career Objective</h2>
      <p>A JavaScript Developer, that is aspiring to be a Senior Full Stack Developer. Right now he is looking for an entry level position with an exciting company.
        I'm aware of web standards and have knowledge of HTML5, CSS3, Boostrap, Node.js, Javascript/ES6, Git/Github, REST API, ReactJS,Mongodb/mongoose, PostgreSQL/knexjs, React-Redux
        Creating websites that are Responsive, user-friendly and effective.
      </p>
      </div> <hr/>

      <div className="current-job">
          <h2>Current Job</h2>
          <p>Intern at HNGi8</p>
      </div> <hr/>

      <div className="personal">
          <h2>PERSONAL SKILLS</h2>
          <li>Team Player</li>
          <li> A keen approach to learning</li>
          <li>Handling criticism well and learning from it</li>  
          <li>Adaptable and able to pick up new techniques</li>
          <li>Innovative and Providing solutions to problems</li>
      </div>

       
      
    </div>
  );
}

export default App;
