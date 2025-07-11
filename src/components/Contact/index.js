import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is imported

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId); // Cleanup: Clear the timeout when the component unmounts.
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_us14y0q",
        "template_x075zbo",
        refForm.current,
        "u8xmJBjXvGSis2ONO"
      )
      .then(
        () => {
          alert("Message Successfully Sent!");
          window.location.reload(); // Reload the page after sending email
        },
        () => {
          alert("Failed, please try again.");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <p>
            <b>Looking for a Frontend Developer</b> who can turn ideas into stunning
            digital experiences? With a keen eye for design and a passion for
            clean, responsive code, I create user-friendly interfaces that
            captivate from the first click. Using the latest web technologies, I
            build modern, pixel-perfect websites that elevate your brand and
            engage your audience. Let’s bring your vision to life with
            creativity, precision, and innovation.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li className="half">
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Somnath Prajapati,
          <br />
          India,
          <br />
          KKWIEER, Nashik <br />
          Maharashtra
          <br />
          <span>somnathdp999@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[20.01338385102535, 73.82191333584936]}
            zoom={13}
            style={{ height: "100%", width: "100%" }} // Ensure map has a height and width
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[20.01338385102535, 73.82191333584936]}>
              <Popup>
                Somnath lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
