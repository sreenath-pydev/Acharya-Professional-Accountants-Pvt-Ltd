import { useState, useRef } from "react";

const Internship = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdkzpbln", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="internship" className="py-16 md:py-20 bg-graphite overflow-hidden">
      <div className="container mx-auto px-4 md:px-20">
        <div data-aos="fade-up" data-aos-delay="50">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary-accent">
            Internship Program
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div data-aos="fade-right" data-aos-delay="50">
            <h3 className="text-2xl font-semibold mb-6 text-white">Join Our Dynamic Team</h3>
            <p className="text-boulder mb-6">
              Launch your career in accounting with our comprehensive internship program. We offer hands-on
              experience, mentorship from industry experts, and the opportunity to work on real client projects.
            </p>
            <div className="mb-8">
              <h4 className="text-primary-accent text-xl mb-4">Program Benefits:</h4>
              <ul className="text-boulder list-disc pl-6 space-y-2">
                <li>Real-world experience with client projects</li>
                <li>One-on-one mentorship from senior professionals</li>
                <li>Flexible scheduling around academic commitments</li>
                <li>Certificate of completion</li>
                <li>Potential for full-time employment</li>
                <li>Professional network development</li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary-accent text-xl mb-4">Eligibility:</h4>
              <p className="text-boulder">
                Final year students or recent graduates in Accounting, Finance, or related fields. Strong analytical
                skills and attention to detail required.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div
            data-aos="fade-left"
            data-aos-delay="50"
            className="bg-secondary-dark p-6 sm:p-8 rounded-xl border border-primary-accent/20"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-accent">Apply Now</h3>

            <form
              onSubmit={handleSubmit}
              ref={formRef}
              encType="multipart/form-data"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                { id: "name", name: "name", label: "Full Name", type: "text" },
                { id: "email", name: "email", label: "Email Address", type: "email" },
                { id: "phone", name: "phone", label: "Phone Number", type: "tel" },
                { id: "institution", name: "institution", label: "Educational Institution", type: "text" },
                { id: "program", name: "program", label: "Program of Study", type: "text" },
                { id: "graduation", name: "graduation", label: "Expected Graduation", type: "month" },
              ].map(({ id, name, label, type }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-primary-accent font-medium mb-2">
                    {label} *
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={name}
                    required
                    className="w-full min-w-0 px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="resume-link" className="block text-primary-accent font-medium mb-2">
                  Resume Link (Google Drive/Dropbox) *
                </label>
                <input
                  type="url"
                  id="resume-link"
                  name="resume_link"
                  placeholder="Paste your resume shareable link"
                  required
                  className="w-full min-w-0 px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="source" className="block text-primary-accent font-medium mb-2">
                  How did you hear about us? *
                </label>
                <select
                  id="source"
                  name="source"
                  required
                  className="w-full min-w-0 px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="university">University Career Center</option>
                  <option value="job-board">Job Board</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="cover-letter" className="block text-primary-accent font-medium mb-2">
                  Cover Letter
                </label>
                <textarea
                  id="cover-letter"
                  name="cover_letter"
                  rows="4"
                  className="w-full min-w-0 px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                ></textarea>
              </div>
              <div>
                <label className="block text-primary-accent font-medium mb-2">Availability *</label>
                <div className="flex flex-wrap gap-5">
                  <label className="flex items-center">
                    <input type="radio" name="availability" value="full-time" className="mr-2" required />
                    Full-time
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="availability" value="part-time" className="mr-2" required />
                    Part-time
                  </label>
                </div>
              </div>

              <input type="hidden" name="_captcha" value="false" />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:bg-korma hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>

            {/* Thank You Message */}
            {submitted && (
              <div
                className="mt-6 flex items-center gap-3 bg-green-700/20 border border-green-600 text-green-300 px-4 py-4 rounded-xl"
                id="newsletterSuccess"
              >
                <i className="fas fa-check-circle text-green-400 text-xl"></i>
                <span className="font-medium text-base">Thank you for applying! We’ll get back to you soon.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
