import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const RecruitersShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recruiters = [
    { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
    { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
    { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
    { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
    { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
    { name: "HCL", logo: "https://logo.clearbit.com/hcltech.com" },
    {
      name: "Tech Mahindra",
      logo: "https://logo.clearbit.com/techmahindra.com",
    },
    { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
    { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
    { name: "Qualcomm", logo: "https://logo.clearbit.com/qualcomm.com" },
    { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
    { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
  ];

  const itemsPerSlide = 8;
  const totalSlides = Math.ceil(recruiters.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentRecruiters = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return recruiters.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-college-navy mb-4 bg-gradient-to-r from-college-navy to-college-blue bg-clip-text text-transparent">
            Our Recruiters
          </h2>
          <p className="text-xl text-gray-600">
            Industry leaders who trust our talent
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-college-blue to-college-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
            <CardTitle className="text-college-navy flex items-center justify-center">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
              Industry Partners
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="relative">
              <div className="grid grid-cols-4 gap-6">
                {getCurrentRecruiters().map((company, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-16 object-contain rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-college-blue transition-colors duration-300">
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full"
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-college-blue shadow-lg scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RecruitersShowcase;
