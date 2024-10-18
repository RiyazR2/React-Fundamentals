const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg mt-2">
            We're here to answer your questions and help you with our services.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Feel free to contact us by filling the form below or emailing us at
            <a href="mailto:support@machinecoding.com" className="text-blue-600 underline"> support@machinecoding.com</a>.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                rows="4"
                placeholder="Your Message"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-6 mt-10">
        <div className="container mx-auto px-4">
          <p className="text-center">
            © 2024 Machine Coding. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
