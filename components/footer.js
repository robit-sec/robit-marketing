import '../styles/index.css'
import ContactForm from './contact-form'
import { Link, animateScroll as scroll } from 'react-scroll';

const year = () => {
 return new Date().getFullYear()
}

const Footer = () => (

  <footer className="w-full text-white py-12 lg:text-left text-center bg-robitPurple">
   <ContactForm /> 
   <div className="flex lg:flex-row flex-col justify-center">
     <div className="flex flex-1 justify-center mx-auto lg:mb-0 mb-8">
       <ul className="text-sm">
         <li className="text-md uppercase border-b mb-2">Terms and Privacy</li>
         <li><a href="/privacy">Privacy Policy</a></li>
         <li><a href="/terms-of-use">Terms of Use</a></li>
       </ul>
     </div>

     <div className="flex flex-1 justify-center mx-auto lg:mb-0 mb-8">
       <ul className="text-sm">
         <li className="text-md uppercase border-b mb-2">Account and Dashboard</li>
         <li><span className="opacity-50">Account Login</span><span> - Coming Soon!</span></li>
         <li><span className="opacity-50">Profile</span><span> - Coming Soon!</span></li>
         <li><span className="opacity-50">Settings</span><span> - Coming Soon!</span></li>
       </ul>
     </div>

     <div className="flex flex-1 justify-center mx-auto lg:mb-0 mb-8">
       <ul className="text-sm">
         <li className="text-md uppercase border-b mb-2">Support</li>
         <li><a href="https://forms.monday.com/forms/16f85d3ee3365a6d70a6bdc0e1ffedf7">Report an Issue</a></li>
         <li><Link to="contact" smooth={true} duration={700} className="cursor-pointer">Contact Us</Link></li>
       </ul>
     </div>
    </div>
    <div className="flex align-center justify-center mt-12 text-xs">
      &copy; Robit Development, LLC &nbsp;<span id="year">{ year() }</span>
    </div>
  </footer>
);

export default Footer;
