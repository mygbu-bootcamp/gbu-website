
const HodMessage = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            From the Desk of HOD, CSE
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                  alt="Dr. Rajesh Kumar - Head of Department"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground">Dr. Rajesh Kumar</h3>
              <p className="text-blue-600 font-medium">Head of Department</p>
              <p className="text-sm text-muted-foreground">PhD Computer Science, IIT Delhi</p>
            </div>

            <div className="md:col-span-2 space-y-4 text-muted-foreground bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <p className="text-lg leading-relaxed">
                Welcome to the Department of Computer Science and Engineering. As we stand at the forefront of
                technological innovation, our department is committed to nurturing the next generation of computer
                scientists and engineers who will shape our digital future.
              </p>

              <p className="leading-relaxed">
                Our curriculum is designed to provide students with a strong foundation in computer science
                fundamentals while exposing them to cutting-edge technologies in artificial intelligence,
                machine learning, cybersecurity, and software engineering. We believe in hands-on learning
                and encourage our students to participate in research projects, internships, and industry
                collaborations.
              </p>

              <p className="leading-relaxed">
                With state-of-the-art laboratories, experienced faculty, and strong industry partnerships,
                we ensure that our graduates are well-prepared to meet the challenges of the rapidly evolving
                technology landscape. Our alumni have gone on to successful careers in leading technology
                companies, research institutions, and have founded innovative startups.
              </p>

              <p className="leading-relaxed">
                I invite you to explore our programs and discover how the Department of Computer Science and
                Engineering can help you achieve your academic and professional goals.
              </p>

              <div className="pt-4">
                <p className="font-semibold text-foreground">Dr. Rajesh Kumar</p>
                <p className="text-sm">Head of Department - CSE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HodMessage;
