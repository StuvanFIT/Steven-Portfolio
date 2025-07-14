import { Download, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { LiaLinkedinIn } from 'react-icons/lia'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Get in{' '}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can work together to bring your
            ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                {' '}
                Contact Information
              </h3>
              <div className="space-y-6">
                {/*Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>

                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href=""
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    kaingsteven123@gmail.com
                  </a>
                </div>
                {/*Phone No. */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>

                  <p className="text-gray-400 text-sm">Mobile</p>
                  <a
                    href=""
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    (+61) 0401206668
                  </a>
                </div>
                {/*Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Melbourne, Victoria, Australia</p>
                  </div>
                </div>
              </div>
            </div>

            {/*Download my resume */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/StevenKaingCV.pdf"
                download
                className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-colors duration-200 font-medium"
              >
                <Download className="w-5 h-5" />
                Download My Resume
              </a>
            </div>
          </div>

          {/*Social media links */}
          <div className="space-y-8">
            {/* GitHub */}
            <a
              href="https://github.com/StuvanFIT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-600/50 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center group-hover:bg-gray-500 transition-colors">
                <FaGithub className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">GitHub</p>
                <p className="text-gray-400 text-sm">@StuvanFIT</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </a>

            {/*LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/stevenkaing/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-blue-600/20 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <LiaLinkedinIn className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">LinkedIn</p>
                <p className="text-gray-400 text-sm">Steven Kaing</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>

            {/*INSTAGRAM */}
            <a
              href="https://www.instagram.com/steven_kaing/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-blue-600/20 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <FaInstagram className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Instagram</p>
                <p className="text-gray-400 text-sm">Steven Kaing</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
