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
            Are you in need of a Frontend Developer who can turn your digital
            dreams into captivating realities? Look no further! With my creative
            flair and meticulous attention to detail, I craft visually stunning
            and user-friendly interfaces that leave a lasting impression. From
            pixel-perfect designs to seamless user experiences, I bring magic to
            every line of code. Embracing the latest web technologies, I ensure
            your website stands out from the crowd, captivating visitors from
            the very first click. Let's collaborate and bring your vision to
            life with a touch of innovation and a dash of brilliance. Elevate
            your online presence with a Frontend Developer who knows how to
            mesmerize your audience and make your brand shine like never before!
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
