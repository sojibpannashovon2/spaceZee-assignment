const AboutUs = () => {
  return (
    <div className="mx-auto xl:lg:w-[1280px] bg-blueGray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-blueGray-700">About Us</h2>
          <p className="text-lg text-blueGray-600 mt-4">
            Welcome to [Company Name], where innovation and technology meet to
            create world-class solutions.
          </p>
        </div>

        {/* Company Overview Section */}
        <div className="flex flex-wrap items-center mb-16">
          <div className="w-full md:w-6/12 px-4">
            <img
              src="/path/to/your/company-image.jpg"
              alt="Company Overview"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="w-full md:w-6/12 px-4 mt-8 md:mt-0">
            <h3 className="text-3xl font-semibold text-blueGray-700">
              Who We Are
            </h3>
            <p className="text-lg text-blueGray-600 mt-4">
              At [Company Name], we are driven by the desire to create
              innovative solutions to address modern challenges.
            </p>
            <p className="text-lg text-blueGray-600 mt-4">
              Our platform is designed to make tasks easier, more efficient, and
              more enjoyable for users around the globe. From intuitive designs
              to seamless experiences, we’re here to transform the way you work
              and collaborate.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="flex flex-wrap mb-16">
          <div className="w-full md:w-6/12 px-4 mb-8 md:mb-0">
            <h3 className="text-3xl font-semibold text-blueGray-700">
              Our Mission
            </h3>
            <p className="text-lg text-blueGray-600 mt-4">
              Our mission is to revolutionize the way people interact with
              technology, creating solutions that are accessible, intuitive, and
              scalable for all.
            </p>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <h3 className="text-3xl font-semibold text-blueGray-700">
              Our Vision
            </h3>
            <p className="text-lg text-blueGray-600 mt-4">
              We aim to be a global leader in technological innovation,
              empowering individuals and organizations to achieve their fullest
              potential.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-blueGray-700 text-center mb-8">
            Meet Our Team
          </h3>
          <div className="flex flex-wrap justify-center">
            {/* Team Member 1 */}
            <div className="w-full sm:w-4/12 md:w-3/12 px-4 mb-8">
              <div className="text-center">
                <img
                  src="/path/to/team-member1.jpg"
                  alt="Team Member 1"
                  className="rounded-full shadow-lg w-32 mx-auto"
                />
                <h5 className="text-xl text-blueGray-700 mt-4">John Doe</h5>
                <p className="text-lg text-blueGray-600">CEO & Founder</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="w-full sm:w-4/12 md:w-3/12 px-4 mb-8">
              <div className="text-center">
                <img
                  src="/path/to/team-member2.jpg"
                  alt="Team Member 2"
                  className="rounded-full shadow-lg w-32 mx-auto"
                />
                <h5 className="text-xl text-blueGray-700 mt-4">Jane Smith</h5>
                <p className="text-lg text-blueGray-600">Lead Designer</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="w-full sm:w-4/12 md:w-3/12 px-4 mb-8">
              <div className="text-center">
                <img
                  src="/path/to/team-member3.jpg"
                  alt="Team Member 3"
                  className="rounded-full shadow-lg w-32 mx-auto"
                />
                <h5 className="text-xl text-blueGray-700 mt-4">Alex Lee</h5>
                <p className="text-lg text-blueGray-600">
                  Chief Technology Officer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap items-center mb-12">
          <div className="w-full md:w-6/12 px-4">
            <h3 className="text-3xl font-semibold text-blueGray-700">
              Contact Us
            </h3>
            <p className="text-lg text-blueGray-600 mt-4">
              We’d love to hear from you! Reach out to us for any inquiries,
              feedback, or collaboration opportunities.
            </p>
            <p className="text-lg text-blueGray-600 mt-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@company.com"
                className="text-blueGray-800"
              >
                contact@company.com
              </a>
            </p>
            <p className="text-lg text-blueGray-600 mt-4">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-lg text-blueGray-600 mt-4">
              <strong>Address:</strong> 123 Company St, City, Country
            </p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-6/12 px-4 mt-8 md:mt-0">
            <h3 className="text-3xl font-semibold text-blueGray-700">
              Follow Us
            </h3>
            <div className="flex mt-6">
              <a
                href="https://twitter.com"
                className="text-blue-400 hover:text-blue-600 mr-4"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://facebook.com"
                className="text-blue-600 hover:text-blue-800 mr-4"
              >
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a
                href="https://github.com"
                className="text-gray-800 hover:text-gray-900 mr-4"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://dribbble.com"
                className="text-pink-400 hover:text-pink-600"
              >
                <i className="fab fa-dribbble text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Section */}
      </div>
    </div>
  );
};

export default AboutUs;
