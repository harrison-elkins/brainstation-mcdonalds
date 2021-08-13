import "./Header.scss";
import headbar from "../../assets/head-bar.svg";

export default function Header() {
  return (
    <div className="header-wrapper">
      <img src={headbar} />
    </div>
  );
}
