import React from "react";
import { Users, Award, BookOpen } from "lucide-react";
import Layout from "../components/Layout";

export default function AboutUs() {
  return (
    <Layout >
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          About Saroj College of Pharmacy
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12 text-center">
          Saroj College of Pharmacy is committed to excellence in pharmaceutical education, research, and community healthcare. 
          We empower students to become leaders in the pharmacy profession by fostering innovation, integrity, and compassion.
        </p>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-4 text-blue-600">
              <Award className="w-8 h-8" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide quality pharmacy education and cutting-edge research that advances healthcare and improves patient outcomes.
              We strive to nurture skilled, ethical professionals ready to serve society.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-4 text-green-600">
              <Users className="w-8 h-8" />
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be recognized as a premier institution in pharmaceutical sciences,
              leading innovation in education and research to meet the evolving needs of healthcare globally.
            </p>
          </div>

          {/* Programs */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-4 text-purple-600">
              <BookOpen className="w-8 h-8" />
              <h3 className="text-xl font-semibold">Our Programs</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Offering comprehensive programs including B.Pharm, M.Pharm, and specialized research initiatives, 
              Saroj College equips students with the knowledge and skills to excel in pharmaceutical sciences.
            </p>
          </div>
        </div>

        {/* CTA / Contact */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
            Join Saroj College of Pharmacy and be a part of shaping the future of healthcare through excellence in education and research.
          </p>
          <a
            href="mailto:info@sarojpharmacy.edu.in"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
    </Layout>
  );
}
