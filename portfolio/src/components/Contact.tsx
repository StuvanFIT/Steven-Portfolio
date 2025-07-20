import { Download, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { LiaLinkedinIn } from 'react-icons/lia'
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', '22e9a23c-dd52-4f97-a73d-a1dee68f0d3b')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      form.reset()
      Swal.fire({
        title: 'Success!',
        text: 'Message has been sent! I will get back to you shortly!',
        icon: 'success',
      })
    } else {
      Swal.fire({
        title: 'Oops...',
        text: 'ERROR: Message failed to send! Please try again!',
        icon: 'error',
      })
    }
  }

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-8">
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

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6">
            Send me a{' '}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Message
            </span>
          </h3>
          <div>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Your Name or Business
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or how we can work together..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg hover:shadow-purple-500/25 group cursor-pointer"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
