import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  Twitter,
} from "lucide-react";
const Home = () => {
  return (
    <>
      <section className="section dark:bg-slate-800">
        <div className="section__container">
          <div className="content">
            <p className="subtitle dark:text-white">HELLO</p>
            <h1 className="title  dark:text-white">
              I'm{" "}
              <span>
                Sudeshna Saha
                <br />a
              </span>{" "}
              Web Developer
            </h1>
            <p className="description text-black dark:text-white">
              Welcome to my web developer portfolio! I'm <b>Sudeshna</b>, a web
              devloper, frontend devloper, AI-ML enthusiast. I love to code,
              create new designs, develop new ideas.
            </p>
            <div className="action__btns">
              {/* <button className="hire__me">My Document</button> */}
              <a href="myResume.pdf">
                <button className="portfolio  dark:text-white">
                  Download Resume
                </button>
              </a>
            </div>

            <div className="flex p-8 gap-6  dark:text-white">
              <a href="https://www.linkedin.com/in/sudeshna-saha-893521251/">
                <Linkedin strokeWidth={1.5} />
              </a>
              <a href="https://www.instagram.com/sudeshna_mam/?igsh=NTVlZGIyZjRkd2Rl">
                <Instagram strokeWidth={1.5} />
              </a>
              <a href="https://github.com/Sudeshna-maam">
                <Github />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100008894379372&sfnsn=wiwspwa&mibextid=RUbZ1f">
                <Facebook />
              </a>
            </div>
          </div>
          <div className="image">
            <img src="picture.jpg" alt="profile" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
