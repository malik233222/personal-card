import profilePhoto from "../assets/images/babak.jpeg";
import { TbFileCv } from "react-icons/tb";
import { FaArrowDown } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";

function ProfileCard() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 relative">
        {/* Logo */}
        <div className="absolute top-4 left-4">
          <div className="w-8 h-8 bg-indigo-950 rounded-full flex items-center justify-center">
            <span className="text-yellow-400 font-bold">Jr</span>
          </div>
        </div>

        {/* Profile Content */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-yellow-400 overflow-hidden">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-indigo-950">Babak Emdadi</h2>
            <p className="text-lg text-indigo-950">Instructor</p>
          </div>

          <div>
            {/* Bio */}
            <p className="text-gray-600 max-w-sm">
              PhD candidate in Nanotechnology (Khazar University, Azerbaijan)
            </p>
            <p className="text-gray-600 max-w-sm">
              MS in Electronics (Seraj University, Iran)
            </p>
          </div>

          {/* Email Button */}
          <button
            className="w-full max-w-xs bg-indigo-950 hover:bg-indigo-900 text-white rounded-full py-2 px-4"
            onClick={() =>
              (window.location.href = "mailto:emdadi.babak2021@khazar.org ")
            }
          >
            emdadi.babak2021@khazar.org
          </button>

          {/* Social Links */}
          <div className="flex space-x-6 pt-4">
            <a
              href="https://khazar.org/uploads/schools/Engineering/Computer_Science/cv/Babak_Emdadi-cv.pdf"
              className="text-indigo-950 hover:text-indigo-800"
            >
              <TbFileCv size={30} />
            </a>
            <a
              href="https://www.researchgate.net/scientific-contributions/Babak-Emdadi-2249571736"
              className="text-indigo-950 hover:text-indigo-800"
            >
              <SiResearchgate size={30} />
            </a>
            <a
              href="https://scholar.google.com/citations?user=1oEqFV0AAAAJ&hl=en"
              className="text-indigo-950 hover:text-indigo-800"
            >
              <FaGoogleScholar size={30} />
            </a>
          </div>

          {/* researches */}
          <div>
            <div className="flex justify-center items-center gap-5 my-4">
              <h4 className="font-bold text-xl">My Researches</h4>
              <FaArrowDown size={20} />
            </div>

            <div className="mt-5">
              <ul className="list-decimal md:text-left ">
                <li className="font-semibold">
                  {" "}
                  Wind Climates and Annual Energy Production
                </li>
                <li className="font-semibold">
                  {" "}
                  Synthesis Methods and Characterization Techniques of
                  Fluoropolymers for Elsevier
                </li>
                <li className=" font-semibold">
                  {" "}
                  Wind climates and annual energy production for Elsevier
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
