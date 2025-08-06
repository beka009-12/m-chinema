import { type FC } from "react";
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import scss from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.columns}>
          <div className={scss.links}>
            <div>
              <h4>Movies</h4>
              <ul>
                <li>Action</li>
                <li>Fantasy</li>
                <li>Horror</li>
                <li>Romance</li>
              </ul>
            </div>
            <div>
              <h4>Series</h4>
              <ul>
                <li>Dorama</li>
                <li>Drama</li>
                <li>Thriller</li>
              </ul>
            </div>
            <div>
              <h4>Help</h4>
              <ul>
                <li>FAQ</li>
                <li>About Content</li>
                <li>About Us</li>
                <li>Support</li>
              </ul>
            </div>
          </div>

          <div className={scss.rightSide}>
            <div className={scss.social}>
              <h4>Follow us</h4>
            </div>
            <div className={scss.qr}>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?data=https://epicmovies.com&size=120x120"
                alt="QR Code"
              />
              <span>Scan to explore</span>
            </div>
          </div>
        </div>

        <div className={scss.bottom}>
          <p>
            © 2025 <strong>EpicMovies</strong>. All rights reserved.
          </p>
          <p>Made with ❤️ for movie lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
