import * as React from "react";
import "./GaneshWishes.css";
import Marquee from "react-fast-marquee";
// import ReactAudioPlayer from 'react-audio-player';
// import ReactPlayer from 'react-player';
import { StickyContainer, Sticky } from "react-sticky";

const GaneshWishes = (props: { name: string }) => {
  const [action, setAction] = React.useState(false);
  let audio = new Audio("https://a.touchpur.com/en/jaidev.mp3");

  const startSong = () => {
    setAction(true);
    if (typeof audio.loop == "boolean") {
      audio.loop = true;
    } else {
      audio.addEventListener(
        "ended",
        function () {
          this.currentTime = 0;
          this.play();
        },
        false
      );
    }
    audio.play();
  };

  return (
    <StickyContainer>
      <div style={{ background: !action ? "white" : "#e860cc" }}>
        {!action && (
          <div
            style={{
              zIndex: 1,
              transition: "all .100s",
              visibility: action ? "hidden" : "visible",
            }}
          >
            <div>
              <img
                alt="click"
                id="loading"
                src="https://c.tenor.com/xjeIPYCLrtkAAAAi/strawberrystyle-click.gif"
                className="bell"
                onClick={startSong}
              />
            </div>
            <div>
              <img
                alt="ganesha"
                id="loading"
                src="https://c.tenor.com/5CD4e9GsMewAAAAC/ganpati-ganesh.gif"
                className="bell"
                onClick={startSong}
              />
            </div>
          </div>
        )}
        {action && (
          <>
            <Marquee direction="left">
              <img
                alt="ganesh1"
                src="https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png"
                height="90px"
                width="40px"
              />
              <img
                alt="ganesh1"
                src="https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png"
                height="90px"
                width="40px"
              />
            </Marquee>
            <div className="Ideazzonecontainer">
              <div className="Ideazzone-main-greeting">
                <div className="firstClass">
                  <h3 style={{ color: "#090908" }}>
                    <p id="IDEAZZONE"></p>
                  </h3>
                </div>
                <div className="Fourth">
                  <h2 className="font-effect-neon" id="IDEAZZONE-show-name">
                    {props.name}
                  </h2>
                </div>
                <div className="Fifth"></div>
                <div className="font-effect-neon">
                  <p className="fromMessage" id="IDEAZZONE-fromMessage"></p>
                </div>

                <div className="vi">
                  <br></br>
                  <img
                    src="https://1.bp.blogspot.com/-GUjwtVRWuAQ/XzfqJg5vB1I/AAAAAAAABh0/G3rKXyxA9Lg9GvCno6icjo5jalBmP5PsQCNcBGAsYHQ/s507/ganesh1.gif"
                    className="img-responsive"
                    alt="IDEAZZONE"
                    width="85%"
                  />

                  <br />
                  <br />

                  <p>
                    <span>
                      <h3 style={{ color: "#141580" }}>
                        May lord Ganpati bless you
                      </h3>
                    </span>
                    <span>
                      <h3 style={{ color: "#141580" }}>
                        with the treasure of Health,
                      </h3>
                    </span>
                    <span>
                      <h3 style={{ color: "#141580" }}>
                        Wealth & Happiness.🙏🙏🙏
                      </h3>
                    </span>
                    <br />

                    <Sticky>{({ style }) => <form style={style}>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>}</Sticky>
                  </p>
                  <br></br>
                  <img
                    src="https://1.bp.blogspot.com/-H0zGWDwgTr4/XzfqKj01SeI/AAAAAAAABh4/em5TgecKCeAH5IVngHXoYbkZLrdpbBcoQCNcBGAsYHQ/s520/ganesh2.gif"
                    className="img-responsive"
                    alt="IDEAZZONE"
                    width="85%"
                  />
                  {/* Your Ad Here */}
                  <br></br>

                  <p>
                    <span>
                      <h3 style={{ color: "#141580" }}>
                        May the lord Vighna Vinayaka
                      </h3>
                    </span>
                    <br />
                    <span>
                      <h3 style={{ color: "#141580" }}>
                        removes all obstacles &
                      </h3>
                    </span>
                    <br />
                    <span>
                      <h3 style={{ color: "#141580" }}>
                        showers you with bounties.
                      </h3>
                    </span>
                    <br />
                  </p>

                  <br></br>
                  <img
                    src="https://1.bp.blogspot.com/-HWI8b7IJw3c/XzfqfCeRfoI/AAAAAAAABiE/tW-9PA2QXV0KGpoEgwFeIWevsPZL0OKWACNcBGAsYHQ/s475/ganesh3.gif"
                    className="img-responsive"
                    alt="IDEAZZONE"
                    width="85%"
                  />
                  <br />

                  <span>
                    <h3 color="#eef607"> 🙏🙏🙏 🌹🌼🌷🌸🌹 🙏🙏🙏 </h3>
                  </span>
                  <br />

                  <br />
                  <br />
                  <img
                    src="https://1.bp.blogspot.com/-qVxnXgOqcAU/XzfqjP6Vq8I/AAAAAAAABiM/fbfqs7Ebf7Uz_Z89PahSbWGtFBH8CXbIwCNcBGAsYHQ/s501/ganesh4.gif"
                    className="img-responsive"
                    alt="IDEAZZONE"
                    width="85%"
                  />
                  <br />

                  {/* Your Ad Here */}

                  <br />
                  <img
                    src="https://1.bp.blogspot.com/-kGhePjOwEFg/Xzfqfvt8izI/AAAAAAAABiI/s-iWl3WBUS4UcBl6847nja9P5vQ15QFRwCNcBGAsYHQ/s494/ganesh5.gif"
                    className="img-responsive"
                    alt="IDEAZZONE"
                    width="85%"
                  />
                  <br />
                  <br />
                  <br />

                  {/* <center h3 color="#dfff02"> */}

                  <div style={{ textAlign: "center" }}>
                    <span className="IDEAZZONEdot"></span>
                    <span className="IDEAZZONEdot"></span>
                    <span className="IDEAZZONEdot"></span>
                    <span className="IDEAZZONEdot"></span>
                    <span className="IDEAZZONEdot"></span>
                    <span className="IDEAZZONEdot"></span>
                    <span className="IDEAZZONEdot"></span>
                    <span className="IDEAZZONEdot"></span>
                    <span className="IDEAZZONEdot"></span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </StickyContainer>
  );
};

export default GaneshWishes;
