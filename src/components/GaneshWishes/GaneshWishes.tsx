import * as React from 'react';
import './GaneshWishes.css';
import Marquee from "react-fast-marquee";
import ReactPlayer from 'react-player';

const GaneshWishes = (props: { name: string }) => {
    return (

        <div>
            <div>
                <ReactPlayer
                    url="https://file-examples.com/storage/fe8bd9dfd063066d39cfd5a/2017/11/file_example_MP3_700KB.mp3"
                    width="400px"
                    height="50px"
                    playing={true}
                    controls={false}
                />
            </div>
            <Marquee direction='left'>
                <img alt="ganesh1"
                    src="https://1.bp.blogspot.com/-grbQoykawp4/XzfpWzK8YjI/AAAAAAAABhc/zQLtefPm9jYpl5_R_hd1c2pTrSSCcZYDACNcBGAsYHQ/s1280/ganeshas1.png"
                    height="90px" width="40px" />
                <img alt="ganesh1"
                    src="https://1.bp.blogspot.com/-u68A3yKlCSs/XzfpXTEIBsI/AAAAAAAABhg/q5iP_nCBcd4KyP27qxDw2CIzihHk9_TFwCNcBGAsYHQ/s640/ganeshass2.png"
                    height="90px" width="40px" />
            </Marquee>
            <div className="Ideazzonecontainer">
                <div className="Ideazzone-main-greeting">
                    <div className='firstClass'>

                        <h3 style={{ color: "#090908" }}>
                            <p id="IDEAZZONE"></p>
                        </h3>
                    </div>
                    <div className='Fourth' >
                        <h2 className="font-effect-neon" id="IDEAZZONE-show-name">{props.name}</h2>
                    </div>
                    <div className='Fifth'>
                    </div>
                    <div className="font-effect-neon">
                        <p className="fromMessage" id="IDEAZZONE-fromMessage"></p>
                    </div>

                    <div className="vi">

                        <br>
                        </br>
                        <img
                            src="https://1.bp.blogspot.com/-GUjwtVRWuAQ/XzfqJg5vB1I/AAAAAAAABh0/G3rKXyxA9Lg9GvCno6icjo5jalBmP5PsQCNcBGAsYHQ/s507/ganesh1.gif"
                            className="img-responsive" alt="IDEAZZONE" width="85%" />

                        <br />
                        <br />

                        <p>
                            <span>
                                <h3 style={{ color: "#141580" }}>May lord Ganpati bless you</h3>
                            </span>
                            <span>
                                <h3 style={{ color: "#141580" }}>with the treasure of Health,</h3>
                            </span>
                            <span>
                                <h3 style={{ color: "#141580" }}>Wealth & Happiness.🙏🙏🙏</h3>
                            </span><br />
                        </p>
                        <br>
                        </br>
                        <img
                            src="https://1.bp.blogspot.com/-H0zGWDwgTr4/XzfqKj01SeI/AAAAAAAABh4/em5TgecKCeAH5IVngHXoYbkZLrdpbBcoQCNcBGAsYHQ/s520/ganesh2.gif"
                            className="img-responsive" alt="IDEAZZONE" width="85%" />
                        {/* Your Ad Here */}
                        <br>
                        </br>

                        <p>
                            <span>
                                <h3 style={{ color: "#141580" }}>May the lord Vighna Vinayaka</h3>
                            </span><br />
                            <span>
                                <h3 style={{ color: "#141580" }}>removes all obstacles &</h3>
                            </span><br />
                            <span>
                                <h3 style={{ color: "#141580" }}>showers you with bounties.</h3>
                            </span><br />
                        </p>


                        <br>
                        </br>
                        <img
                            src="https://1.bp.blogspot.com/-HWI8b7IJw3c/XzfqfCeRfoI/AAAAAAAABiE/tW-9PA2QXV0KGpoEgwFeIWevsPZL0OKWACNcBGAsYHQ/s475/ganesh3.gif"
                            className="img-responsive" alt="IDEAZZONE" width="85%" />
                        <br />

                        <span>
                            <h3 color="#eef607"> 🙏🙏🙏 🌹🌼🌷🌸🌹 🙏🙏🙏 </h3>
                        </span><br />

                        <br />
                        <br />
                        <img
                            src="https://1.bp.blogspot.com/-qVxnXgOqcAU/XzfqjP6Vq8I/AAAAAAAABiM/fbfqs7Ebf7Uz_Z89PahSbWGtFBH8CXbIwCNcBGAsYHQ/s501/ganesh4.gif"
                            className="img-responsive" alt="IDEAZZONE" width="85%" />
                        <br />

                        {/* Your Ad Here */}


                        <br />
                        <img
                            src="https://1.bp.blogspot.com/-kGhePjOwEFg/Xzfqfvt8izI/AAAAAAAABiI/s-iWl3WBUS4UcBl6847nja9P5vQ15QFRwCNcBGAsYHQ/s494/ganesh5.gif"
                            className="img-responsive" alt="IDEAZZONE" width="85%" />
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

                        <script>
                            var sample = document.getElementById("tah_audio");
                            sample.play();
                        </script>

                        {/* <script>
          var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
          if (!isChrome) {
            $('#iframeAudio').remove()
          }
          else {
            $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
          }
        </script> */}


                        {/* <script>
          var slideIndex = 0;
          showSlides();

          function showSlides() {
            var i;
            var slides = document.getElementsByClassName("IDEAZZONESlides");
            var dots = document.getElementsByClassName("IDEAZZONEdot");
            for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 2000); // Change image every 3 seconds
          }
        </script> */}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default GaneshWishes;
