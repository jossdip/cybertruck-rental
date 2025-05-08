'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images, animations, colors } from './constants';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Data
const features = [
  {
    title: "Innovation",
    description: "Le premier et unique loueur de Cybertruck en Europe",
    icon: "🚀"
  },
  {
    title: "Exclusivité",
    description: "Accédez à la voiture la plus futuriste du marché",
    icon: "💎"
  },
  {
    title: "Service Premium",
    description: "Une expérience de location sur mesure pour les professionnels",
    icon: "⭐"
  }
];

const specs = {
  performance: [
    "0-100 km/h en 2.9 secondes",
    "Autonomie jusqu'à 800 km",
    "Capacité de remorquage de 6.3 tonnes",
    "Vitesse maximale de 209 km/h",
    "Puissance moteur de 845 ch"
  ],
  technologie: [
    "Carrosserie en acier inoxydable",
    "Système de suspension adaptative",
    "Interface tactile 17 pouces",
    "Système audio premium",
    "Autopilot avancé"
  ]
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll-based animations with improved timing
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -30]);

  const featuresOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const featuresY = useTransform(scrollYProgress, [0.1, 0.2], [30, 0]);

  const specsOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const specsY = useTransform(scrollYProgress, [0.2, 0.3], [30, 0]);

  const galleryOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const galleryY = useTransform(scrollYProgress, [0.3, 0.4], [30, 0]);

  const contactOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const contactY = useTransform(scrollYProgress, [0.4, 0.5], [30, 0]);

  // Parallax effects
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <main ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="absolute inset-0"
        >
          <Image
            src={images.hero}
            alt="Tesla Cybertruck"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-b from-black/50 to-black/80"
        >
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={animations.staggerContainer}
            className="text-center"
          >
            <motion.h1 
              variants={animations.fadeInUp}
              className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter gradient-text text-glow"
            >
              CYBERTRUCK
            </motion.h1>
            <motion.p 
              variants={animations.fadeInUp}
              className="text-2xl md:text-3xl mb-8 text-gray-300"
            >
              L'avenir de la mobilité est là
            </motion.p>
            <motion.div variants={animations.fadeInUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="modern-button"
              >
                <span>Découvrir</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen bg-black py-20 px-4 md:px-8 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.backgrounds.features}
            alt="Features Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <motion.div
          style={{ opacity: featuresOpacity, y: featuresY }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={animations.fadeInUp}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-20 text-center tracking-tighter gradient-text text-glow"
          >
            Une expérience unique
          </motion.h2>
          <motion.div 
            variants={animations.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={animations.scaleUp}
                className="modern-card p-8 neon-border transform-3d relative overflow-hidden"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={images.features[index].url}
                    alt={images.features[index].alt}
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Specs Section */}
      <section className="min-h-screen bg-black py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.backgrounds.specs}
            alt="Specs Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <motion.div
          style={{ opacity: specsOpacity, y: specsY }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={animations.fadeInUp}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-20 text-center tracking-tighter gradient-text text-glow"
          >
            Caractéristiques
          </motion.h2>
          <motion.div 
            variants={animations.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            <motion.div
              variants={animations.scaleUp}
              className="modern-card p-8 neon-border transform-3d relative overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={images.specs.performance}
                  alt="Performance"
                  fill
                  className="object-cover opacity-20"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 gradient-text">Performance</h3>
                <ul className="space-y-4 text-gray-300">
                  {specs.performance.map((spec, index) => (
                    <motion.li 
                      key={index}
                      variants={animations.slideIn}
                      className="flex items-center"
                    >
                      <span className="mr-2 text-primary">•</span> {spec}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              variants={animations.scaleUp}
              className="modern-card p-8 neon-border transform-3d relative overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={images.specs.technology}
                  alt="Technologie"
                  fill
                  className="object-cover opacity-20"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 gradient-text">Technologie</h3>
                <ul className="space-y-4 text-gray-300">
                  {specs.technologie.map((spec, index) => (
                    <motion.li 
                      key={index}
                      variants={animations.slideIn}
                      className="flex items-center"
                    >
                      <span className="mr-2 text-primary">•</span> {spec}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="min-h-screen bg-black py-20 px-4 md:px-8 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.backgrounds.gallery}
            alt="Gallery Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <motion.div
          style={{ opacity: galleryOpacity, y: galleryY }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={animations.fadeInUp}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-20 text-center tracking-tighter gradient-text text-glow"
          >
            Galerie
          </motion.h2>
          <motion.div 
            variants={animations.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {images.gallery.map((image, index) => (
              <motion.div 
                key={index}
                variants={animations.scaleUp}
                className="relative h-[400px] rounded-2xl overflow-hidden image-hover transform-3d"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Parallax Section */}
      <section className="h-screen relative overflow-hidden">
        {images.parallax.map((image, index) => (
          <motion.div
            key={index}
            style={{
              y: index === 0 ? parallaxY1 : index === 1 ? parallaxY2 : parallaxY3
            }}
            className="absolute inset-0"
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover opacity-30"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      </section>

      {/* Contact Section */}
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4 md:px-8 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.backgrounds.contact}
            alt="Contact Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <motion.div
          style={{ opacity: contactOpacity, y: contactY }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={animations.fadeInUp}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter gradient-text text-glow"
          >
            Prêt à vivre l'expérience ?
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            variants={animations.fadeInUp}
            viewport={{ once: true }}
            className="text-xl md:text-2xl mb-12 text-gray-300"
          >
            Contactez-nous dès maintenant pour découvrir nos offres exclusives de location
          </motion.p>
          <motion.a
            href="mailto:contact@cybertruck-location.com"
            initial="hidden"
            whileInView="visible"
            variants={animations.fadeInUp}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="modern-button inline-block"
          >
            <span>Nous contacter</span>
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Cybertruck Location</h3>
              <p className="text-gray-400">Premier loueur de Cybertruck en Europe</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Liens utiles</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link></li>
                <li><Link href="/cgv" className="hover:text-primary transition-colors">Conditions générales de vente</Link></li>
                <li><Link href="/cgv" className="hover:text-primary transition-colors">Conditions générales d'utilisation</Link></li>
                <li><Link href="/politique-confidentialite" className="hover:text-primary transition-colors">Politique de confidentialité</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@cybertruck-location.com</li>
                <li>Tél: +33 1 23 45 67 89</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 Cybertruck Location. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 