import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/scp-logo.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

const menuItems = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: "About",
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Chairman Message', path: '/chairman-message' },
      { name: 'Vision & Mission', path: '/vision-mission' },
      { name: 'Infrastructure', path: '/infrastructure' },
      { name: 'Faculty', path: '/faculty' },
    ]
  },
  {
    title: 'Admission',
    links: [
      { name: 'Admission Process', path: '/admission-process' },
      { name: 'Fee Structure', path: '/fee-structure' },
      { name: 'Scholarships', path: '/scholarships' },
      { name: 'International Students', path: '/international-students' },
    ]
  },
  {
    title: 'Academics',
    links: [
      { name: 'Courses', path: '/courses' },
      { name: 'Syllabus', path: '/syllabus' },
      { name: 'Academic Calendar', path: '/academic-calendar' },
      { name: 'Examination', path: '/examination' },
    ]
  },
  {
    title: 'Contact',
    path: '/contact',
  }
];

// Enhanced animation variants
const dropdownVariants = {
  hidden: { 
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);

  return (
    <>
      {/* Premium Top info bar with gradient */}
      <motion.div 
        className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-sm"
      >
        <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <motion.div  
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <FaPhone className="mr-2 text-blue-300" />
              <a href='tel:5222239810'>+91 5222239810</a>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <FaEnvelope className="mr-2 text-blue-300" />
              <a href='mailto:info@seglko.org'>info@seglko.org</a>
            </motion.div>
           
          </div>
         
        </div>
      </motion.div>

    

      {/* Main header with glass morphism effect */}
      <motion.header 
        className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Animated Logo with shine effect */}
            <Link to="/" className="flex items-center group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden"
              >
                <motion.img 
                  src={logo} 
                  alt="College Logo" 
                  className="h-16"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: -100 }}
                  animate={{ x: 200 }}
                  transition={{ 
                    delay: 0.3,
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />
              </motion.div>
            
            </Link>

            {/* Desktop Navigation with elegant dropdowns */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.links ? (
                    <>
                      <motion.button
                        className="flex items-center text-gray-800 hover:text-blue-700 px-4 py-3 font-medium transition-colors relative group"
                        whileHover={{ 
                          color: "#1d4ed8",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <span>{item.title}</span>
                        <motion.span
                          animate={{ 
                            rotate: hoveredItem === index ? 180 : 0,
                            color: hoveredItem === index ? "#1d4ed8" : "#1f2937"
                          }}
                          transition={{ duration: 0.2 }}
                          className="ml-1"
                        >
                          <FaChevronDown size={12} />
                        </motion.span>
                        <motion.div 
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 origin-left scale-x-0 group-hover:scale-x-100"
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </motion.button>
                      
                      <AnimatePresence>
                        {hoveredItem === index && (
                          <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                            className="absolute left-1/2 top-full -translate-x-1/2 mt-1 w-64 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                            style={{ 
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                          >
                            {item.links.map((link, i) => (
                              <motion.li 
                                key={i}
                                variants={itemVariants}
                                whileHover={{ 
                                  x: 5,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <Link
                                  to={link.path}
                                  className="block px-6 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors border-l-4 border-transparent hover:border-blue-700"
                                >
                                  {link.name}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div 
                      className="relative group h-full flex items-center"
                      whileHover={{ 
                        color: "#1d4ed8",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Link
                        to={item.path}
                        className="px-4 py-3 font-medium transition-colors"
                      >
                        {item.title}
                      </Link>
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 origin-left scale-x-0 group-hover:scale-x-100"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </motion.div>
                  )}
                </div>
              ))}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="ml-4"
              >
                <Link
                  to="/apply-now"
                  className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center"
                >
                  <span>Apply Now</span>
                  <motion.span 
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 1.5
                    }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </nav>


</div>


        </div>
      </motion.header>
    </>
  );
};

export default Header;