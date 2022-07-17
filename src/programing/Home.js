import React from "react";

function Home() {
  const row1 = {
    border: "1px dashed black",
    borderRadius: "5px",
    backgroundColor:"#FFFAFA"
  };
  return (
    <div id="homeMainDiv">
      <div className="row mt-3 m-2 p-2" style={row1}>
        <div className="col-md-6">
          <h1>What is a Programming Language?</h1>
          <p>
            A programming language is a computer language that is used by
            programmers (developers) to communicate with computers. It is a set
            of instructions written in any specific language ( C, C++, Java,
            Python) to perform a specific task. A programming language is mainly
            used to develop desktop applications, websites, and mobile
            applications.
          </p>
        </div>
        <div className="col-md-6">
          <h2>
            What kinds of programming jobs are out there? <br />
            What job duties are involved?
          </h2>
          <ol className="offset-md-3">
            <li>web developmet</li>
            <li> Software application developer</li>
            <li>Networking system </li>
            <li>AI/ML</li>
          </ol>
        </div>
      </div>

      <div className="row m-2 p-2" style={row1}>
        <div className="col-md-6">
          <h1>1.Web Development</h1>
          <p>
            How a website looks and functions is the direct result of a web
            developer's work. All programming careers take patience, but this
            one provides more instant gratification than most. Web developers
            listen well to their client's needs and problem-solve to give them
            the best website possible for their business. At the end of a
            project, you have a working, accessible website to show off your
            hard work. Web developers do well when they can show a portfolio of
            their work and have a deep understanding of coding.
          </p>
          <p>
            Web Development are of 3 types:
            <ul>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Full-stack Development</li>
            </ul>
          </p>
          <div>
            <h3>Frontend Development:</h3>
            <p>
              Front-End is the UI (User Interface), it deals with the website’s
              overall appearance, on how interactive and dynamic it is. For
              mastering it, get clear with all the elements of
              <mark> HTML, CSS, and JavaScript </mark>.
            </p>
          </div>

          <div>
            <h3>Backend Development:</h3>
            <p>
              The code that runs on the server, has logic to send the
              appropriate data from the client and receive it from the server.
              Also, it includes the database which stores all of the data of the
              application. It consists of three parts: a server, an application,
              and a database. Here, the code written by developers transfers
              information from the database to the browser. Code written by
              back-end developers communicates information from the database to
              the browser.
              <br />
              Skills you need to have to back-end developer: programming
              languages, frameworks, databases, servers, and API (Application
              Program Interface).
              <br />
              <b> Programming Languages:</b> Back-end developers should know at
              least one of the programming languages like{" "}
              <mark> Java, Python, and JavaScript. JavaScript </mark>would be
              the best choice as this can be used in both the front-end and
              back-end.
              <br />
              <b> Frameworks: </b>
              Frameworks are generally components or functions that are
              implemented to improve the performance of development. It includes
              the library of tools and modules that builds the architecture of a
              website. Several popular back-end frameworks are
              <mark> Express, Django, Ruby on Rails, etc </mark>.
            </p>
          </div>
          <h3> Full-stack web developer </h3>
          <p>
            looks after both the front-end and the back-end parts. The front-end
            deals with how the websites look when delivered to the customers
            while the back-end stores and processes all the data safely.
            <br />
            <b>MERN : </b> The most popular and trending technology.
            <ul>
              <li> MongoDB : ANoSQL database that deals with data. </li>
              <li>
                {" "}
                Express : A framework forNodeJS and handles GET, PUT, POST,
                DELETE functions.{" "}
              </li>
              <li>
                {" "}
                React : A JavaScript library for building User Interfaces,
                building single-page applications.{" "}
              </li>
              <li> NodeJS : An open-source server environment. </li>
            </ul>
            <b>MEAN :</b> The major difference between MERN and MEAN is MERN
            (written in JavaScript) works on React whereas MEAN deals with
            Angular (a framework written in TypeScript).
          </p>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col">
              <h1>2.Software Developer:</h1>
              <p>
                Much of the actual creation of software programs happens through
                the writing of code, and software developers oversee that.
                Depending on the company where they work, a software developer
                will analyze the needs of the user and then create, test and
                develop software that will solve a problem, provide
                entertainment or simply make life easier for its intended
                audience.
                <br />
                After mapping out the design, creating flowcharts and drafting
                out each step of the process, developers will build diagrams and
                models to instruct programmers how to write the code for the
                program.
                <br />
                Other job duties include mapping out the software to have on
                record for future upgrades and enhancements, testing the
                software, and collaborating with other computer specialists to
                make sure the software is top notch and functioning properly.
                <br />
                skills for software Developers
                <mark>
                  {" "}
                  Java SQL Software engineering JavaScript Python Microsoft C#
                  Linux Git Devops{" "}
                </mark>{" "}
                etc...
              </p>
            </div>

            <div className="md-100"></div>

            <div className="col">
              <h1>3.Networking system: </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
