import "./style.css";

import vk from "./icons/vk.svg";
import telegram from "./icons/telegram.svg";
import discord from "./icons/discord.svg";
import github from "./icons/github.svg";

const Footer = () => {
    return (
        <footer className="footer">
          <div className="container">
              <div className="footer__wrapper">
                  <ul className="social">
                      <li className="social__item"><a href="https://vk.com/djostit" target="_blank" rel="noreferrer"><img src={vk} alt="Link"/></a></li>
                      <li className="social__item"><a href="https://t.me/Djostit" target="_blank" rel="noreferrer"><img src={telegram} alt="Link"/></a></li>
                      <li className="social__item"><a href="https://discord.com/users/340007778062041091/" target="_blank" rel="noreferrer"><img src={discord} alt="Link"/></a></li>
                      <li className="social__item"><a href="https://github.com/Djostit" target="_blank" rel="noreferrer"><img src={github} alt="Link"/></a></li>
                  </ul>
                  <div className="copyright">
                      <p>© 2023 djostit.me</p>
                  </div>
              </div>
          </div>
      </footer>
    );
}
 
export default Footer;