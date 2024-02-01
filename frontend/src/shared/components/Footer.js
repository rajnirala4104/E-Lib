import { Link } from "react-router-dom";
import "../css/footer.css";
const Footer = (props) => {
  return (
    <footer>
      <div className="footerContent">
        <div className="footerHeading display-4">
          E-<span>Library</span>
        </div>
        <div className="footerDescription">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          maiores exercitationem mollitia reprehenderit numquam veritatis
          nostrum adipisci, repudiandae fugit accusantium repellat eaque,
          eveniet et rem iste
        </div>
        <div className="socialIcons">
          <a
            href="https://www.instagram.com/_raj_nirala_"
            target="_blank"
            className="fa fa-instagram"
          ></a>
          <Link href="https://github.com/rajnirala4104" target="_blank" className="fa fa-github"></Link>
          <Link href="/" target="_blank" className="fa fa-facebook"></Link>
          <Link href="/" target="_blank" className="fa fa-twitter"></Link>
          {/* <Link href="/" target="_blank" className="fa fa-snapchat"></Link> */}
        </div>
      </div>
      <div className="copyrigthDetails">
        Copyright &copy; 2023 | E.Lib | Raj Nirala
      </div>
    </footer>
  );
};

export default Footer;
