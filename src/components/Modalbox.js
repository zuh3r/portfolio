import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "Mortal Kombat - Tic Tac Toe",
      tag: "JavaScript, HTML, CSS, GitHub",
      desc: [
        { p: "- This app is a Mortal Kombat themed adaptation of the classic Tic-Tac-Toe game with the ability to loop the theme song while playing." },
        { p: "- The game's functionality was developed using JavaScript and DOM manipulation."},
        { p: "- Once completed, a summary screen shows the winner and the final score between the players." },
        { p: "Tech Stack: JavaScript, HTML, CSS, GitHub" }
      ],
      appLink: "https://zuh3r.github.io/tic-tac-toe/",
      gitLink: "https://github.com/zuh3r/tic-tac-toe"

    },
    {
      name: "Filmarket",
      tag: "Ruby, Sinatra, CSS, PostgreSQL, Heroku",
      desc: [
        { p: "- The app allows users to purchase art from a marketplace, adding it to their gallery. Data is transferred between tables using SQL." },
        { p: "- This is a CRUD app created with Ruby and Sinatra using MVC architecture. CSS was used to style the application and it was deployed with Heroku." },
        { p: "- There is log-in functionality with BCrypt used to encrypt user passwords. This means passwords are not stored locally and cannot be seen by anyone." },
        { p: "Ruby, Sinatra, CSS, PostgreSQL, Heroku" }
      ],
      appLink: "https://filmarket-project.herokuapp.com/",
      gitLink: "https://github.com/zuh3r/filmarket"
    },
    {
      name: "Cricket Live",
      tag: "JavaScript, Express.JS, API's, CSS, HTML, GitHub Collaboration", 
      desc: [
        { p: "- This app uses a Sportsradar API to show past, live and future cricket games around the world and news articles from various sources. Axios is used to communicate with the API." },
        { p: "- There is log-in functionality with BCrypt used to encrypt user passwords. This means passwords are not stored locally and cannot be seen by anyone. This allows users to save their favourite leagues and teams." },
        { p: "- This was a group project, GitHub was used to collaborate as the group worked on separate features on the application." },
        { p: "JavaScript, Express.JS, API's, CSS, HTML, GitHub Collaboration" }
      ],
      appLink: "https://apkzmedia.herokuapp.com",
      gitLink: "https://github.com/zuh3r/Cricket-live"

    },
    {
      name: "Catch",
      tag: "React JS, Express.js, Socket.IO, Back-End Server",
      desc: [
        { p: "- This is a React app that allows users to communicate in various chatrooms. Users can move between rooms based on their preferences and messages are saved in chat. There is also a live counter showing the number of users in a room." },
        { p: "- React was used for the front-end and Express JS was used to created the server on the back-end. Socket.IO was used to allow messages to be sent." },
        { p: "- There is a known bug that doesn't allow new rooms to be created which is being worked on." },
        { p: "React JS, Socket.IO, Back-End Server, Front-End App" }
      ],
      appLink: "https://afternoon-everglades-98805.herokuapp.com",
      gitLink: "https://github.com/zuh3r/Catch-Frontend"

    }
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="resumo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map(
              (d, i) =>
                i + 1 == index && (
                  <div key={i}>
                    <h3 className="fn__title">{d.name}</h3>
                    <p className="fn__cat">Check out the <a className="fn__cat" href={d.appLink}>App</a> or the <a className="fn__cat" href={d.gitLink}>Code!</a></p>
                    <div className="img_holder">
                      <img src="/img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img={`/img/portfolio/${index}.jpg`}
                      />
                    </div>
                    {d.desc.map((des,i) => (
                      <p key={i} className="fn__desc">
                        {des.p}
                      </p>
                    ))}
                  </div>
                )
            )}
          </div>

          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? 4 : index - 1);
              }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 4 ? 1 : index + 1);
              }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;