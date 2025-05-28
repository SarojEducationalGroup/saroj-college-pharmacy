import React from "react";
import { Award, CheckCircle, Clock, BriefcaseMedical } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const dpharmProgram = {
  id: "dpharma",
  title: "Diploma in Pharmacy (D.Pharm)",
  duration: "2 Years",
  description:
    "A comprehensive diploma program providing foundational knowledge and practical skills for pharmacy practice, preparing students for rewarding careers in community pharmacies, hospitals, and pharmaceutical industries.",
  icon: <BriefcaseMedical className="w-8 h-8 text-indigo-600" />,
  highlights: [
    "PCI-approved curriculum",
    "Hands-on laboratory training",
    "Industry-aligned coursework",
    "Hospital & retail pharmacy internships",
    "Eligibility for Pharmacy Council registration"
  ],
  stats: [
    { value: "100%", label: "Practical Exposure", icon: <CheckCircle /> },
    { value: "2 Years", label: "Program Duration", icon: <Clock /> },
    { value: "500+", label: "Successful Graduates", icon: <Award /> }
  ]
};

export default function CoursesPage() {
  return (
    <Layout>
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16 px-6 md:px-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%233334ff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Page Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
            Diploma in Pharmacy Program
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Launch your pharmacy career with our PCI-approved 2-year diploma program combining theoretical knowledge with hands-on training.
          </p>
        </div>

        {/* Program Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Program Image */}
              <div className="md:w-2/5 bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-6">
                    {dpharmProgram.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{dpharmProgram.title}</h2>
                  <p className="text-blue-600 font-medium mt-2">{dpharmProgram.duration} Program</p>
                </div>
              </div>

              {/* Program Details */}
              <div className="md:w-3/5 p-8 md:p-12">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {dpharmProgram.description}
                </p>

                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 text-indigo-600 mr-2" />
                    Program Highlights
                  </h3>
                  <ul className="space-y-3">
                    {dpharmProgram.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 bg-gray-50 rounded-xl p-4">
                  {dpharmProgram.stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-3">
                      <div className="text-2xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 flex items-center justify-center">
                        {stat.icon && React.cloneElement(stat.icon, { className: "w-4 h-4 mr-1 text-blue-500" })}
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Start Your Pharmacy Journey?</h3>
          <Link
            to="https://seglko.in8.nopaperforms.com/"
            className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply for D.Pharm Program
          </Link>
        </div>
      </section>
    </Layout>
  );
}