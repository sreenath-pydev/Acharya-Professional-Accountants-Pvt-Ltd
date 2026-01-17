import { Link } from 'react-router-dom';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const CoursesTeaser = () => {
    const courses = [
        {
            name: 'C-PAT',
            fullName: 'Certified Professional Accounting Training',
            description: 'Hands-on accounting & GST training to make you job-ready.',
            link: '/courses/c-pat',
        },
        {
            name: 'C-PRO',
            fullName: 'Corporate Professional Readiness Program',
            description: 'Data-driven corporate reporting program for analyst roles.',
            link: '/courses/c-pro',
        },
        {
            name: 'GLOBAL - PRO',
            fullName: 'International Career Readiness Program',
            description: 'UAE / GCC-focused international accounting training.',
            link: '/courses/globalpro',
        },
    ];

    return (
        <section className="py-20 bg-dark-bg border-b border-primary-accent/10">
            <div className="container mx-auto px-4 md:px-20" data-aos="fade-up">
                <div className="text-center mb-12">
                    <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3 font-semibold">
                        Career Training
                    </p>
                    <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-white">
                        Practical Accounting & GST Training
                    </h2>
                    <p className="text-boulder text-lg max-w-2xl mx-auto">
                        Bridge the gap between academic learning and corporate requirements with our expert-led, job-oriented courses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {courses.map((course) => (
                        <div
                            key={course.name}
                            className="bg-secondary-dark/50 border border-primary-accent/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group"
                        >
                            <h3 className="font-montserrat text-2xl font-bold text-white mb-1 group-hover:text-primary-accent transition-colors">
                                {course.name}
                            </h3>
                            <p className="text-xs text-primary-accent mb-4 font-semibold uppercase tracking-wide opacity-80">
                                {course.fullName}
                            </p>
                            <p className="text-boulder mb-6 text-sm leading-relaxed">
                                {course.description}
                            </p>
                            <Link
                                to={course.link}
                                className="inline-flex items-center text-white font-semibold hover:text-primary-accent transition-colors text-sm"
                            >
                                <span>Details</span>
                                <DynamicFaIcon name="fa-arrow-right" className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/courses"
                        className="inline-flex items-center gap-2 bg-transparent border border-primary-accent text-primary-accent font-semibold px-8 py-3 rounded-full hover:bg-primary-accent hover:text-dark-bg transition-all duration-300"
                    >
                        <span>View All Courses</span>
                        <DynamicFaIcon name="fa-arrow-right" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CoursesTeaser;
