import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import PlaceStudents from "../data/placementData.json";

const placedStudents = [...PlaceStudents.placementData]
  .sort((a, b) => parseInt(b.package) - parseInt(a.package))
  .slice(0, 4);

export default function PlacedStudents() {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Enhanced Attractive Heading Section */}
        <motion.div 
          initial={{ opacity: 100, y: 20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Record-Breaking
          </span> Placements,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Life-Changing
          </span> Outcomes
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our students aren't just getting jobs - they're launching careers at the world's most innovative companies with compensation packages that set new standards.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 w-24 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Student Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {placedStudents.map((student, index) => (
            <motion.div
              key={student.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full border border-gray-100 overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {student.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      Placed at {student.company}
                    </p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    #{index + 1}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="relative">
                    <img
                      src={student.photo}
                      alt={student.company}
                      className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-md group-hover:border-blue-300 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                      {student.batch}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-800">
                      ₹{student.package}
                    </p>
                    <p className="text-sm text-gray-500">Annual Package</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Role:</span> {student.role || "Software Engineer"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}