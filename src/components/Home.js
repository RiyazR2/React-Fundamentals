const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Machine Coding Details</h1>
          <p className="text-lg mt-2">
            Learn the fundamentals of machine coding with examples and detailed
            explanations
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <section className="bg-white rounded-lg shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            What is Machine Coding?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Machine coding is the process of writing programs that a machine can
            understand and execute directly. It typically involves low-level
            code or instructions that interface directly with hardware.
            Understanding machine coding is essential for building efficient and
            high-performance software systems.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Example 1: Binary Addition
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Binary addition is a fundamental operation in machine coding.
              Learn how machines add binary numbers at the hardware level.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Example 2: Bitwise Operations
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Explore how machines use bitwise operations for tasks like
              setting, toggling, and clearing bits in machine code.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Example 3: Stack Operations
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Understand how machines manage function calls and memory using
              stacks, a core concept in machine coding.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
