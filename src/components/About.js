const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-2">
            Learn more about our journey, mission, and values.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <section className="bg-white rounded-lg shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            We aim to bridge the gap between technology and real-world problems
            through innovative software solutions. Our mission is to empower
            individuals and businesses with cutting-edge tools that drive
            success and foster growth in the digital era.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2020, we started as a small team of passionate developers
            who wanted to make a difference. Over the years, we have grown into
            a dynamic organization that focuses on delivering exceptional
            products while maintaining our core values of integrity, creativity,
            and customer-centricity.
          </p>
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

export default About;
