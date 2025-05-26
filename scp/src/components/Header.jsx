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
                  to="https://siu.in8.nopaperforms.com/"
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

            {/* Animated Mobile menu button */}
            <motion.button
              className="lg:hidden text-gray-700 focus:outline-none relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 flex flex-col justify-center items-center">
                <motion.span 
                  className="block w-6 h-0.5 bg-gray-800 mb-1.5"
                  animate={mobileMenuOpen ? 
                    { rotate: 45, y: 6, backgroundColor: "#1d4ed8" } : 
                    { rotate: 0, y: 0, backgroundColor: "#1f2937" }
                  }
                />
                <motion.span 
                  className="block w-6 h-0.5 bg-gray-800 mb-1.5"
                  animate={mobileMenuOpen ? 
                    { opacity: 0 } : 
                    { opacity: 1 }
                  }
                />
                <motion.span 
                  className="block w-6 h-0.5 bg-gray-800"
                  animate={mobileMenuOpen ? 
                    { rotate: -45, y: -6, backgroundColor: "#1d4ed8" } : 
                    { rotate: 0, y: 0, backgroundColor: "#1f2937" }
                  }
                />
              </div>
            </motion.button>
          </div>

          {/* Premium Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />
                <motion.div 
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: "spring", damping: 25 }}
                  className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-8">
                      <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                        <img src={logo} alt="College Logo" className="h-12" />
                      </Link>
                      <button 
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                      >
                        &times;
                      </button>
                    </div>
                    
                    <div className="flex flex-col space-y-1">
                      {menuItems.map((item, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">
                          {item.links ? (
                            <>
                              <motion.button
                                className="flex items-center justify-between w-full text-gray-800 hover:text-blue-700 font-medium py-4 px-2 transition-colors"
                                onClick={() => setHoveredItem(hoveredItem === index ? null : index)}
                                whileTap={{ scale: 0.98 }}
                              >
                                <span>{item.title}</span>
                                <motion.span
                                  animate={{ rotate: hoveredItem === index ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <FaChevronDown />
                                </motion.span>
                              </motion.button>
                              <AnimatePresence>
                                {hoveredItem === index && (
                                  <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="pl-4 overflow-hidden"
                                  >
                                    {item.links.map((link, i) => (
                                      <motion.li 
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="border-t border-gray-100"
                                      >
                                        <Link
                                          to={link.path}
                                          className="block px-2 py-3 text-gray-700 hover:text-blue-700 rounded transition-colors"
                                          onClick={() => setMobileMenuOpen(false)}
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
                            <motion.div whileTap={{ scale: 0.98 }}>
                              <Link
                                to={item.path}
                                className="block text-gray-800 hover:text-blue-700 font-medium py-4 px-2 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.title}
                              </Link>
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Link
                        to="/apply-now"
                        className="block bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-all shadow-md hover:shadow-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Apply Now
                      </Link>
                    </motion.div>
                    
                    <motion.div 
                      className="mt-8 pt-6 border-t border-gray-200"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">CONTACT INFO</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <FaPhone className="mr-3 text-blue-600" />
                          <span className="text-sm">+1 234 567 890</span>
                        </div>
                        <div className="flex items-center">
                          <FaEnvelope className="mr-3 text-blue-600" />
                          <span className="text-sm">info@college.edu</span>
                        </div>
                        <div className="flex items-start">
                          <FaMapMarkerAlt className="mr-3 mt-1 text-blue-600" />
                          <span className="text-sm">123 College Ave, Education City</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header;