'use client';

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import useMousePosition from '../../app/utils/useMousePosition';
import styles from './page.module.scss';

export default function Home() {
  const router = useRouter();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values for each line based on scroll
  const line1X = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const line2X = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const line3X = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = [
    {
      title: 'What is SEO?',
      shortDescription: 'SEO improves your website’s visibility on search engines.',
      detailedDescription: 'Search Engine Optimization (SEO) is the process of improving a website’s visibility on search engines like Google. It involves optimizing content, structure, and technical elements to make the site more relevant and authoritative for specific search queries.',
      icon: '🔍',
      path: '/seo/what-is-seo',
    },
    {
      title: 'How Does SEO Work?',
      shortDescription: 'SEO aligns your site with search engine algorithms.',
      detailedDescription: 'SEO works by aligning your website with search engine algorithms. This includes optimizing on-page elements (like meta tags, headers, and keywords), building high-quality backlinks, and ensuring technical factors like site speed and mobile-friendliness are in place.',
      icon: '⚙️',
      path: '/seo/how-it-works',
    },
    {
      title: 'Why is SEO Important?',
      shortDescription: 'SEO drives organic traffic and builds trust.',
      detailedDescription: 'SEO is crucial because it drives organic traffic to your website, which is cost-effective and sustainable. It improves your site’s visibility, builds trust with users, and helps you compete effectively in your industry by ranking higher in search results.',
      icon: '📈',
      path: '/seo/importance',
    },
    {
      title: 'SEO Best Practices',
      shortDescription: 'Learn the best practices for effective SEO.',
      detailedDescription: 'Effective SEO involves keyword research, creating high-quality content, optimizing meta tags, improving site speed, ensuring mobile responsiveness, and building authoritative backlinks. Regularly auditing your site and staying updated with algorithm changes is also essential.',
      icon: '📘',
      path: '/seo/best-practices',
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <main className="min-h-screen bg-zinc-900 font-['Lilita_One']" ref={targetRef}>
      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
      `}</style>
      
      {/* Navigation */}
      <nav className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-white text-xl">siteElevate</span>
              </Link>
         
            </div>
            <div className="flex items-center">
              <Link 
                href="/login" 
                className="ml-4 inline-flex items-center px-4 py-2 border border-zinc-700 rounded-full text-sm text-white hover:bg-zinc-800 focus:outline-none transition duration-150 ease-in-out"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-20 relative">
        <div className="max-w-4xl mx-auto px-4 overflow-hidden">
          <span className="text-orange-500 text-xl">#</span>
          <div className="mb-6">
            <motion.h1 
              style={{ x: line1X }} 
              className="text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight"
            >
              BOOST YOUR WEBSITE
            </motion.h1>
            <motion.h1 
              style={{ x: line2X }} 
              className="text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight"
            >
              SEO WITH AI-POWERED
            </motion.h1>
            <motion.h1 
              style={{ x: line3X }} 
              className="text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight"
            >
              CONTENT OPTIMIZATION
            </motion.h1>
          </div>
          <div className="flex flex-col items-center mt-8 space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={() => router.push('/gettingStarted')} // Updated to navigate to the GettingStarted page
                className="inline-flex items-center px-6 py-3 border border-zinc-700 rounded-full text-base text-white bg-zinc-800 hover:bg-zinc-700 focus:outline-none transition duration-150 ease-in-out"
              >
                Get Started
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
            <p className="text-[#FF5C39] max-w-xl mt-4">
              Paste your website link and let our AI analyze your site, rewrite your content, and deliver SEO-optimized copy that drives more traffic and boosts your Google rankings.
            </p>
          </div>
        </div>

        {/* Floating benefits around the headline */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* AI Analysis */}
          <motion.div
            className="absolute top-[5%] left-[5%] pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [-20, 30, -10, 20, -15], y: [-10, 20, -15, 5, -20] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <h3 className="text-xl font-bold text-white mb-3">AI-Powered Website Analysis</h3>
          </motion.div>
          {/* Content Suggestions */}
          <motion.div
            className="absolute top-[10%] right-[5%] pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [15, -25, 10, -20, 15], y: [-15, 25, -5, 15, -10] }}
            transition={{ duration: 17, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <h3 className="text-xl font-bold text-white mb-3">SEO-Optimized Content</h3>
          </motion.div>
          {/* One-Click Improvement */}
          <motion.div
            className="absolute bottom-[15%] left-[10%] pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [-10, 20, -15, 10, -5], y: [10, -20, 15, -5, 10] }}
            transition={{ duration: 21, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <h3 className="text-xl font-bold text-white mb-3">One-Click Optimization</h3>
          </motion.div>
          {/* Real Results */}
          <motion.div
            className="absolute bottom-[10%] right-[10%] pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [10, -20, 15, -10, 5], y: [15, -10, 20, -15, 5] }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <h3 className="text-xl font-bold text-white mb-3">See Real SEO Results</h3>
          </motion.div>
        </div>
      </div>

      {/* Visual Designer Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <main className={styles.main}>
            <motion.div 
              className={styles.mask}
              animate={{
                WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
                WebkitMaskSize: `${size}px`,
              }}
              transition={{ type: "tween", ease: "backOut", duration:0.5}}
            >
              <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
              
              <p>Google is like a picky librarian it scans tons of websites to <span> find the best answer.</span>SEO helps your site stand out with the right look, voice, and creds so Google says, “This one’s a star!” More visibility = more clicks!</p>
              </p>
            </motion.div>

            <div className={styles.body}>
            <p>SEO is like giving your website a megaphone  on Google. It helps people find you faster when they search for stuff. No ads, just smart tweaks that make your site pop up first!</p>

            </div>
          </main>
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {buttons.map((button, index) => (
            <motion.div
              key={button.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setSelectedButton(button)}
                className="w-full h-full bg-zinc-800 text-white rounded-lg p-4 hover:bg-zinc-700 transition duration-150 ease-in-out"
              >
                {button.title}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}