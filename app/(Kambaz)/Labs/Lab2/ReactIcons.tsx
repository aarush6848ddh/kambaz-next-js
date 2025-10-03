import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

export default function ReactIcons() {
  return (
    <div id="wd-react-icons">
      <h3>React Icons Sampler</h3>
      <div className="wd-flex-row-container">
        <VscAccount className="fs-3 text-primary" aria-label="Account icon" />
        <AiOutlineDashboard className="fs-3 text-primary" aria-label="Dashboard icon" />
        <FaBookBible className="fs-3 text-primary" aria-label="Book icon" />
        <FaCalendar className="fs-3 text-primary" aria-label="Calendar icon" />
        <FaEnvelopeOpenText className="fs-3 text-primary" aria-label="Email icon" />
        <FaRegClock className="fs-3 text-primary" aria-label="Clock icon" />
      </div>
    </div>
  );
}

