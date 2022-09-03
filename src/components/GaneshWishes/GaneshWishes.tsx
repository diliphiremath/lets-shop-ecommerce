/* eslint-disable jsx-a11y/no-distracting-elements */
import * as React from "react";
import "./GaneshWishes.css";
// import Marquee from "react-fast-marquee";
// import ReactAudioPlayer from 'react-audio-player';
// import ReactPlayer from 'react-player';
// import { StickyContainer } from "react-sticky";
import Marquee from "react-marquee-master";
import { Link } from "react-router-dom";

const GaneshWishes = (props: { name: string, share: boolean }) => {
  const [action, setAction] = React.useState(false);
  const imagesArray = ["https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',
    "https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png",
    'https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png',

  ]
  let audio = new Audio("https://a.touchpur.com/en/jaidev.mp3");
  let img1 = (src: any) => <div><img alt="ganesh1"
    src={src}
    height="90px"
    width="40px" /></div>
  // let img2 = 
  let marqueeItems: any = []
  for (let x in imagesArray) {
    marqueeItems.push(img1(imagesArray[x]))
  }

  // input box
  const [value, setValue] = React.useState(props.name);

  let shareString = ''
  shareString += "*" + props.name + "*";
  shareString += " has sent a special gift for you, click on the blue line%0A👉"

  React.useEffect(() => {
    if (props.share) {
      setAction(true)
    }
  }, [action, props.share]);



  function onChange(e: any) {
    setValue(e.target.value);
  }

  const startSong = () => {
    // marqueeItems.push(img1)
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
          <div className="Ideazzonecontainer">

            <div className="Ideazzone-main-greeting">
              <div className="marLeft">
                <Marquee marqueeItems={marqueeItems} />
              </div>
              <div className="marRight">
                <Marquee marqueeItems={marqueeItems} />
              </div>
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
                {!props.share &&
                  <p className="fromMessage" id="IDEAZZONE-fromMessage">Wishing you</p>
                }{props.share &&
                  <p className="fromMessage" id="IDEAZZONE-fromMessage">Share on Whatsapp with your friends and family</p>}
              </div>

              <div className="vi">
                <br></br>
                <img
                  src="https://1.bp.blogspot.com/-GUjwtVRWuAQ/XzfqJg5vB1I/AAAAAAAABh0/G3rKXyxA9Lg9GvCno6icjo5jalBmP5PsQCNcBGAsYHQ/s507/ganesh1.gif"
                  className="img-responsive"
                  alt="IDEAZZONE"
                  width="85%" />

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
                  {/* { !props.share && 
                    <Sticky>{({ style }) => <form id="formBox" style={style}>
      
                      <label>
                        Name:
                        <input id="nameTextBox" type="text" name="name" onChange={e => {
              onChange(e);
            }} />
                      </label>
                      <Link to={`/ganeshWishes/${value}/share`}>
                      <input id="goButton" type="submit" value="Submit" />
                      </Link>
                    </form>}</Sticky>}
                    { props.share && 
                    <Sticky>{({ style }) => <div style={style}>
                      <a href={`whatsapp://send?text= Please Visit https://festivalwishesapp.com/ganeshWishes/${props.name}`}  rel="nofollow noopener" target="_blank" className="share-icon"><img src="https://www.freeiconspng.com/img/46044" style={{height:'36px'}}/>Share via Whatsapp</a>
                    </div>}</Sticky>} */}
                </p>
                <br></br>
                <img
                  src="https://1.bp.blogspot.com/-H0zGWDwgTr4/XzfqKj01SeI/AAAAAAAABh4/em5TgecKCeAH5IVngHXoYbkZLrdpbBcoQCNcBGAsYHQ/s520/ganesh2.gif"
                  className="img-responsive"
                  alt="IDEAZZONE"
                  width="85%" />
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
                  width="85%" />
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
                  width="85%" />
                <br />

                {/* Your Ad Here */}

                <br />
                <img
                  src="https://1.bp.blogspot.com/-kGhePjOwEFg/Xzfqfvt8izI/AAAAAAAABiI/s-iWl3WBUS4UcBl6847nja9P5vQ15QFRwCNcBGAsYHQ/s494/ganesh5.gif"
                  className="img-responsive"
                  alt="IDEAZZONE"
                  width="85%" />
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
          </div></>
      )}
      {action && !props.share &&
        <form id="formBox">
            <input id="nameTextBox" type="text" name="name" placeholder="Enter your name" onChange={e => {
              onChange(e);
            }} />
          <Link to={`/ganeshWishes/${value}/share`}>
            <input id="goButton" type="submit" value="Click" />
          </Link>
        </form>
      }
      {action && props.share &&
        <div>
          <a className="footerbtn" href={`whatsapp://send?text= ${shareString} https://festivalwishesapp.com/ganeshWishes/${props.name}`}>
            <img alt='whatsapp' width="25px" height="25px"
              src="https://1.bp.blogspot.com/-CuxvYyb3Txc/XXDVxoh7WEI/AAAAAAAAAow/TxThSAjwax8jkYLJIS8c8PqXL8QOqU92wCLcBGAs/s1600/ideazzonewhats.png" />
            <b style={{ fontSize: '15px', position: 'relative', top: '-3px', margin: '0 10px' }}>Share with your Friends</b>
            <img alt='whatsapp' width="25px" height="25px"
              src="https://1.bp.blogspot.com/-CuxvYyb3Txc/XXDVxoh7WEI/AAAAAAAAAow/TxThSAjwax8jkYLJIS8c8PqXL8QOqU92wCLcBGAs/s1600/ideazzonewhats.png" />
          </a>
        </div>
      }
    </div>
  );
};

export default GaneshWishes;
