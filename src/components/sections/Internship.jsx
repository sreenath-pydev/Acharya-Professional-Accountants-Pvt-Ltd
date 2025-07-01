import { useRef, useState, useEffect } from "react";

const CLOUD_NAME = "dgmvtym2p";
const UPLOAD_PRESET = "resume_upload";

const Internship = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resumeType, setResumeType] = useState("link");

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = formRef.current;
    const formData = new FormData(form);
    const data = {};
    let fileURL = "";

    try {
      if (resumeType === "file") {
        const file = formData.get("resume");
        if (file && file.size > 0) {
          const uploadData = new FormData();
          uploadData.append("file", file);
          uploadData.append("upload_preset", UPLOAD_PRESET);
          uploadData.append("resource_type", "raw");

          const cloudinaryRes = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`,
            { method: "POST", body: uploadData }
          );

          const result = await cloudinaryRes.json();
          if (!result.secure_url) throw new Error("Cloudinary upload failed");
          fileURL = result.secure_url;
        } else {
          alert("Please upload a valid resume file.");
          setLoading(false);
          return;
        }
      } else {
        fileURL = formData.get("resume_link");
      }

      formData.forEach((value, key) => {
        if (key === "cover_letter") {
          data["cover_latter"] = value;
        } else if (key !== "resume" && key !== "resume_link") {
          data[key] = value;
        }
      });

      data.resume = fileURL;

      const response = await fetch("https://sheetdb.io/api/v1/x6rugayjuae9i", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
        form.reset();
        setResumeType("link");
        setSubmitted(true);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="internship" className="py-16 md:py-20 bg-graphite overflow-hidden">
      <div  className="container mx-auto px-4 md:px-20">
        <div data-aos="fade-up" data-aos-delay="50">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-10 text-primary-accent">
          Internship Program
        </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div data-aos="fade-right" data-aos-delay="50" >
            <h3 className="text-2xl font-semibold mb-6 text-white">Join Our Dynamic Team</h3>
            <p className="text-boulder mb-6">
              Kickstart your accounting career with our hands-on internship program designed to build real-world skills and professional confidence. Gain practical exposure to accounting practices, work alongside experienced professionals, and enhance your resume with meaningful experience. This is your opportunity to bridge the gap between academic learning and industry expectations.
              <br /><br />
              Through structured training, live projects, and continuous mentorship, you’ll develop a strong foundation in financial reporting, taxation, auditing, and compliance. Our flexible work environment and supportive team culture ensure that you grow both professionally and personally. Whether you're aiming for a future in corporate finance, audit firms, or independent practice, this internship is the perfect first step.
            </p>

            <h4 className="text-primary-accent text-xl mb-2">Program Benefits:</h4>
            <ul className="text-boulder list-disc pl-6 mb-6 space-y-2">
              <li>Real-world experience</li>
              <li>Mentorship from experts</li>
              <li>Flexible scheduling</li>
              <li>Certificate & job opportunity</li>
              <li>Hands-on training in accounting software (Tally, Excel, etc.)</li>
              <li>Exposure to GST, Income Tax, and audit procedures</li>
              <li>Resume building and interview preparation support</li>
              <li>Networking opportunities with industry professionals</li>
              <li>Letter of recommendation for top performers</li>
              <li>Possibility of full-time employment after completion</li>
            </ul>

            <h4 className="text-primary-accent text-xl mb-2">Eligibility:</h4>
            <p className="text-boulder">
              Final year students or recent graduates in Accounting, Finance, or related fields are eligible to apply. Candidates with a strong interest in taxation, auditing, or corporate finance are encouraged to join. Basic knowledge of MS Excel or accounting software is an added advantage. We welcome passionate learners who are eager to gain practical experience and grow in the finance and accounting domain.
            </p>
          </div>

          <div data-aos="fade-left" data-aos-delay="50" className="bg-secondary-dark p-6 sm:p-8 rounded-xl border border-primary-accent/20">
            <h3 className="text-2xl font-semibold mb-6 text-primary-accent">Apply Now</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: "name", name: "name", label: "Full Name", type: "text" },
                { id: "email", name: "email", label: "Email Address", type: "email" },
                { id: "phone", name: "phone", label: "Phone Number", type: "tel" },
                { id: "institution", name: "institution", label: "Educational Institution", type: "text" },
                { id: "program", name: "program", label: "Program of Study", type: "text" },
                { id: "graduation", name: "graduation", label: "Year of Graduation", type: "month" },
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
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent"
                  />
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="block text-primary-accent font-medium mb-2">Resume Submission Method *</label>
                <div className="flex gap-6 mb-4 text-white">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="resume_type"
                      value="link"
                      checked={resumeType === "link"}
                      onChange={() => setResumeType("link")}
                      className="mr-2"
                      required
                    />
                    Share Link (Drive/Dropbox)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="resume_type"
                      value="file"
                      checked={resumeType === "file"}
                      onChange={() => setResumeType("file")}
                      className="mr-2"
                      required
                    />
                    Upload PDF
                  </label>
                </div>

                {resumeType === "link" ? (
                  <div>
                    <label htmlFor="resume_link" className="block text-primary-accent font-medium mb-2">
                      Resume Link *
                    </label>
                    <input
                      type="url"
                      id="resume_link"
                      name="resume_link"
                      placeholder="https://drive.google.com/..."
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white"
                    />
                  </div>
                ) : (
                  <div>
                    <label htmlFor="resume" className="block text-primary-accent font-medium mb-2">
                      Upload Resume (PDF) *
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white"
                    />
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="cover_letter" className="block text-primary-accent font-medium mb-2">
                  Cover Letter
                </label>
                <textarea
                  id="cover_letter"
                  name="cover_letter"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="source" className="block text-primary-accent font-medium mb-2">
                  How did you hear about us? *
                </label>
                <select
                  id="source"
                  name="source"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white"
                >
                  <option value="">Select an option</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="university">University Career Center</option>
                  <option value="job-board">Job Board</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-primary-accent font-medium mb-2">Availability *</label>
                <div className="flex gap-5 text-white">
                  <label className="flex items-center">
                    <input type="radio" name="availability" value="Full-time" className="mr-2" required />
                    Full-time
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="availability" value="Part-time" className="mr-2" required />
                    Part-time
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:bg-korma hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>

              {submitted && (
                <div className="md:col-span-2 mt-4 bg-green-600/20 text-green-300 px-4 py-4 rounded-xl flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400 text-xl"></i>
                  <span className="font-medium text-base">
                    Thank you! Your application was successfully submitted.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
