import { LuPhone } from "react-icons/lu";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { PiMailboxDuotone } from "react-icons/pi";
import "../css/SocialMediaIcons.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="mt-auto bg-[#fff9f2]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(/FooterBg.png)`,
        backgroundSize: "contain",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Content */}
      <div className="px-6 py-12 md:px-12 lg:px-16 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:justify-between lg:justify-center gap-8">
        {/* Contact Section */}
        <div className="w-full md:w-[45%] lg:w-1/5 flex flex-col gap-6 p-4">
          <div className="flex flex-col gap-3">
            <Link
              href="/locations"
              className="group flex items-center gap-2 hover:text-blue-400"
            >
              <p className="bg-yellow-400 rounded-xl p-2 text-xl group-hover:text-black">
                <CiLocationOn />
              </p>
              <p className="group-hover:text-blue-400">Our Locations</p>
            </Link>
            <a
              href="mailto:admission.cell@seglko.org"
              className="group flex items-center gap-2 hover:text-blue-400"
            >
              <p className="bg-yellow-400 rounded-xl p-2 text-xl group-hover:text-black">
                <PiMailboxDuotone />
              </p>
              <p className="group-hover:text-blue-400">Mail Us</p>
            </a>
          </div>

          <div className="flex flex-col gap-2 font-light">
            <h1 className="font-extrabold">Quick Contact</h1>
            <a href="tel:09555699988" className="flex items-center gap-2">
              <LuPhone />
              09555699988
            </a>
            <a href="tel:09810054878" className="flex items-center gap-2">
              <LuPhone />
              09810054878
            </a>
            <a
              href="mailto:admission.cell@seglko.org"
              className="flex items-center gap-2"
            >
              <CiMail />
              admission.cell@seglko.org
            </a>
          </div>

          {/* Social Media Icons */}
          <div>
            <ul className="iconsFooter flex mt-2">
              <li className="icon-contentFooter">
                <a
                  href="https://www.instagram.com/segindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  data-social="instagram"
                >
                  <div className="filledFooter" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>

              <li className="icon-contentFooter">
                <a
                  href="https://www.linkedin.com/company/saroj-educational-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  data-social="linkedin"
                >
                  <div className="filledFooter" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>

              <li className="icon-contentFooter">
                <a
                  href="https://www.facebook.com/SEGofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  data-social="facebook"
                >
                  <div className="filledFooter" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                      fill="currentcolor"
                    />
                  </svg>
                </a>
              </li>

              <li className="icon-contentFooter">
                <a
                  href="https://www.youtube.com/@sarojeducationalgroup1018"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                  data-social="youtube"
                >
                  <div className="filledFooter" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Programs */}
        <div className="w-full md:w-[45%] lg:w-1/5 flex flex-col gap-3 p-4">
          <h3 className="text-black text-lg text-center md:text-left">
            Programs
          </h3>
          <div className="flex flex-wrap justify-between gap-2 text-gray-500">
            <div>
              <p>
                <Link to="/programs/master-of-business-administration">
                  MBA
                </Link>
              </p>

              <p>
                <Link to="/programs/bachelor-of-business-administration">
                  BBA
                </Link>
              </p>
              <p>
                <Link to="/programs/master-of-computer-application">MCA</Link>
              </p>
              <p>
                <Link to="/programs/master-of-technology">M.Tech</Link>
              </p>
              <p>
                <Link to="/programs/bachelor-of-computer-application">
                  BCA
                </Link>
              </p>
            </div>
            <div>
              <p>
                <Link to="/programs/bachelor-of-technology">B.Tech</Link>
              </p>
              <p>
                <Link to="/programs/m-pharma">M.Pharma</Link>
              </p>
              <p>
                <Link to="/programs/d-pharma">D.Pharma</Link>
              </p>
              <p>
                <Link to="/programs/b-pharma">B.Pharma</Link>
              </p>
              <p>
                <Link to="/programs/polytechnic">Polytechnic</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Admissions */}
        <div className="w-full md:w-[45%] lg:w-1/5 flex flex-col gap-3 p-4 text-gray-500">
          <h3 className="text-black text-lg text-center md:text-left">
            Admissions
          </h3>
          <Link to="/admission/admission-process">Admission Process</Link>
          <Link to="/admission/eligibility">Eligibility Criteria</Link>
          <Link to="">Fee Structure</Link>
        </div>

        {/* Campus */}
        <div className="w-full md:w-[45%] lg:w-1/5 flex flex-col gap-3 p-4 text-gray-500">
          <h3 className="text-black text-lg text-center md:text-left">
            Campus
          </h3>
          <div className="flex flex-wrap justify-between gap-2">
            <div>
              <p>Lecture Halls</p>
              <p>Library</p>
              <p>Gallery</p>
              <p>Computer Lab</p>
              <p>Cafeteria</p>
            </div>
            <div>
              <p>Sports</p>
              <p>Campus</p>
              <p>Transport</p>
              <p>Hostel</p>
              <p>Medical</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full lg:w-3/12 flex flex-col justify-between gap-12 p-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-black text-lg text-center sm:text-start">
              Quick Links
            </h3>
            <div className="flex flex-row items-start gap-2">
              <p>→</p>
              <p>Saroj Institute of Technology & Management</p>
            </div>
            <div className="flex flex-row items-start gap-2">
              <p>→</p>
              <p>Shivdan Singh Institute of Technology & Management</p>
            </div>
            <div className="flex flex-row items-start gap-2">
              <p>→</p>
              <p>Saroj College Of Pharmacy</p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <hr className="w-full h-[1px] border-none bg-green-400" />
            <Link to="/privacy-policy">→ Privacy Policy</Link>
            <Link to="/terms-and-conditions">→ Terms and Conditions</Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black text-white text-center p-3">
        © {new Date().getFullYear()} Saroj College Of Pharmacy (SCP). All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
