const Internship = () => {
  return (
    <section id="internship" className="py-20 bg-graphite">
      <div className="container mx-auto px-5 md:px-20">
        <div data-aos="fade-up"
          data-aos-delay="100" >
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-12 text-primary-accent">
          Internship Program
        </h2>
        </div>
        <div   className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div data-aos="fade-right"
          data-aos-delay="100">
            <h3 className="text-2xl font-semibold mb-6 text-white">Join Our Dynamic Team</h3>
            <p className="text-boulder mb-6">
              Launch your career in accounting with our comprehensive internship program. We offer hands-on experience, mentorship from industry experts, and the opportunity to work on real client projects.
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
                Final year students or recent graduates in Accounting, Finance, or related fields. Strong analytical skills and attention to detail required.
              </p>
            </div>
          </div>

          <div data-aos="fade-left"
          data-aos-delay="100" className="bg-secondary-dark p-8 rounded-xl border border-primary-accent/20">
            <h3 className="text-2xl font-semibold mb-6 text-primary-accent">Apply Now</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-primary-accent font-medium mb-2">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-primary-accent font-medium mb-2">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-primary-accent font-medium mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="institution" className="block text-primary-accent font-medium mb-2">Educational Institution *</label>
                <input 
                  type="text" 
                  id="institution" 
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="program" className="block text-primary-accent font-medium mb-2">Program of Study *</label>
                <input 
                  type="text" 
                  id="program" 
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="graduation" className="block text-primary-accent font-medium mb-2">Expected Graduation *</label>
                <input 
                  type="month" 
                  id="graduation" 
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="resume" className="block text-primary-accent font-medium mb-2">Upload Resume (PDF/DOCX) *</label>
                <input 
                  type="file" 
                  id="resume" 
                  accept=".pdf,.docx" 
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="cover-letter" className="block text-primary-accent font-medium mb-2">Cover Letter</label>
                <textarea 
                  id="cover-letter" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="source" className="block text-primary-accent font-medium mb-2">How did you hear about us? *</label>
                <select 
                  id="source" 
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                  required
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
                <label className="block text-primary-accent font-medium mb-2">Availability *</label>
                <div className="flex gap-5">
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
              
              <button 
                type="submit" 
                className="w-full bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:bg-korma hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;