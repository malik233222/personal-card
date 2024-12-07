import profilePhoto from "../assets/images/babak.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProfileCard() {
  return (
    <div className="min-h-screen bg-purple-200 flex items-center justify-center p-4">
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

          {/* Bio */}
          <p className="text-gray-600 max-w-sm">
            PhD candidate in Nanotechnology (Khazar University, Azerbaijan) MS
            in Electronics (Seraj University, Iran)
          </p>

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
            <a href="#" className="text-indigo-950 hover:text-indigo-800">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm7.291 8.207c-.311 1.669-1.429 7.902-2.021 10.481-.25 1.095-.959 1.462-1.549 1.5-1.316.082-2.316-.841-3.587-1.649-1.992-1.264-3.116-2.05-5.039-3.277-2.231-1.415-.788-2.195.484-3.47.332-.334 6.078-5.576 6.188-6.051.014-.062.026-.293-.114-.416s-.352-.089-.498-.056c-.212.047-3.574 2.27-10.086 6.668-.954.591-1.821.892-2.598.901-.854.011-2.497-.265-3.715-.828-.982-.457-1.762-.699-1.694-1.475.036-.407.407-.748 1.114-1.022 4.361-1.894 7.271-3.146 8.729-3.756 4.153-1.739 5.016-2.039 5.581-2.049 1.238-.022 1.789.731 1.834 1.045.045.314.078 1.006-.015 1.499z" />
              </svg>
            </a>
            <a href="#" className="text-indigo-950 hover:text-indigo-800">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
            <a href="#" className="text-indigo-950 hover:text-indigo-800">
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in"  />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
