import "../styles/index.css";
import CheckBox from "../public/checkbox.svg";
import Robit1 from "../public/robit-1.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const HomeHero = () => (
  <div className="min-w-full home-hero">
    <div className="container mx-auto flex flex-col-reverse lg:flex-row">
      <div className="flex flex-1 items-center justify-center my-12">
        <div>
          <h1 className="text-4xl text-white font-bold mb-8">RoBit Security</h1>
          <ul>
            <li className="flex text-xl text-white">
              <span>
                <CheckBox />
              </span>
              &nbsp;Veteran Owned
            </li>
            <li className="flex text-xl text-white">
              <span>
                <CheckBox />
              </span>
              &nbsp;Certified Engineers
            </li>
            <li className="flex text-xl text-white">
              <span>
                <CheckBox />
              </span>
              &nbsp;Remote & Distributed
            </li>
          </ul>
          <div className="mt-12">
            <Link
              to="contact"
              smooth={true}
              duration={700}
              className="cursor-pointer btn-primary py-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center py-12">
        <Robit1 />
      </div>
    </div>
  </div>
);

export default HomeHero;
