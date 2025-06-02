import * as React from "react";
import "../assets/css/404.css";
import Page from "../components/Page";
import evilCow from "../assets/evil-cow.svg";
import useWindowWidth from "../utils/useWindowWidth";
import { MAX_WIDTH_MOBILE } from "../utils/constants";

export default function NotFoundPage() {
  const windowWidth = useWindowWidth();

  return (
    <Page hasBackButton={false}>
      <div
        className={
          windowWidth < MAX_WIDTH_MOBILE
            ? "not-found-page small"
            : "not-found-page"
        }
      >
        <header>
          <img
            src={evilCow}
            alt="Red and Pink cow with horns"
            data-pin-no-hover="true"
          />
          <div>
            <h1>404</h1>
            <h2>I think the cow got to this page again...</h2>
          </div>
        </header>
        <section>
          <h3>Can I interest you in anything else?</h3>
          <div className={windowWidth > MAX_WIDTH_MOBILE ? "flex" : ""}>
            <div>
              {/* Fun JS Projects */}
              <p><strong>Fun JS Projects:</strong></p>
              <a
                href="https://maija.xyz/JSProjects/Quiz/home.html"
                target="_blank"
                rel="noreferrer"
              >
                Personality Test
              </a>
              <a
                href="https://maija.xyz/JSProjects/TicTacToe/home.html"
                target="_blank"
                rel="noreferrer"
              >
                TicTacToe
              </a>
              <a
                href="https://maija.xyz/JSProjects/login-auth/home.html"
                target="_blank"
                rel="noreferrer"
              >
                Login Auth
              </a>
              <a
                href="https://maija.xyz/JSProjects/random/home.html"
                target="_blank"
                rel="noreferrer"
              >
                Notes
              </a>
              <a
                href="https://maija.xyz/JSProjects/clock/home.html"
                target="_blank"
                rel="noreferrer"
              >
                Clock
              </a>
              <a
                href="https://maija.xyz/JSProjects/Calculator/home.html"
                target="_blank"
                rel="noreferrer"
              >
                Calculator
              </a>
            </div>
            <div>
              {/* RIT Websites */}
              <p><strong>RIT Websites:</strong></p>
              <a
                href="https://maija.xyz/2021/rit/project1/index.html"
                target="_blank"
                rel="noreferrer"
              >
                The Sawmill Restaurant Redesign
              </a>
              <a
                href="https://maija.xyz/2021/rit/project2/index.html"
                target="_blank"
                rel="noreferrer"
              >
                New Ways of Working Post Covid Web Report
              </a>
              <a
                href="https://maija.xyz/2021/rit/project3/index.html"
                target="_blank"
                rel="noreferrer"
              >
                Niall Horan
              </a>
            </div>
          </div>
          <div className={windowWidth > MAX_WIDTH_MOBILE ? "flex" : ""}>
            <div>
              {/* Past Redesigns */}
              <p><strong>Past Redesigns:</strong></p>
              <p>2024</p>
              <a
                href="https://maija.xyz/2024/funky-purple"
                target="_blank"
                rel="noreferrer"
              >
                Funky Purple
              </a>
              <p>2021</p>
              <a
                href="https://maija.xyz/2021/themesite/home.html"
                target="_blank"
                rel="noreferrer"
              >
                Minimalist Modern Resume Site
              </a>
              <a
                href="https://maija.xyz/2021/artsite/home.html"
                target="_blank"
                rel="noreferrer"
              >
                Art Site
              </a>
              <a
                href="https://maija.xyz/2021/neumorphism/home.html"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Neumorphism
              </a>
              <p>2020</p>
                <a
                  href="https://maija.xyz/2020/minimalistic/home.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Minimalistic
                </a>
              <p>2019</p>
                <a
                  href="https://maija.xyz/2019/mapleleafeq/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Maple Leaf Equestrian
                </a>
            </div>
            <div>
              {/* 2018 */}
              <p>2018</p>
              <a
                href="https://maija.xyz/2018/ButtonCreatures/"
                target="_blank"
                rel="noreferrer"
              >
                Button Creatures
              </a>
              <a
                href="https://maija.xyz/2018/bankGame/mainPage.html"
                target="_blank"
                rel="noreferrer"
              >
                Bank Game
              </a>
              <a
                href="https://maija.xyz/2018/maijaphilip/home.html"
                target="_blank"
                rel="noreferrer"
              >
                Newspaper Redesign
              </a>
              <a
                href="https://maija.xyz/2018/oldSite/home.html"
                target="_blank"
                rel="noreferrer"
              >
                Picture Blocks Redesign
              </a>
              <a
                href="https://maija.xyz/2018/resume/home.html"
                target="_blank"
                rel="noreferrer"
              >
                Resume Site v1
              </a>
              <a
                href="https://maija.xyz/2018/world/home.html"
                target="_blank"
                rel="noreferrer"
              >
                iEarth
              </a>
              <p>2017</p>

              <a
                href="https://maija.xyz/2017/maija-oldsite/MaijaBloggySite.html"
                target="_blank"
                rel="noreferrer"
              >
                First Site Ever
              </a>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
