export const images = {
  hero: "https://images.pexels.com/photos/24589308/pexels-photo-24589308/free-photo-of-tesla-cybertruck-on-street-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200",
  gallery: [
    {
      url: "https://images.pexels.com/photos/31701330/pexels-photo-31701330/free-photo-of-cybertruck-and-urban-skyline-panorama.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Cybertruck et skyline urbaine",
      category: "exterior"
    },
    {
      url: "https://images.pexels.com/photos/19052331/pexels-photo-19052331/free-photo-of-tesla-cybertruck-on-road.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Cybertruck sur la route",
      category: "interior"
    },
    {
      url: "https://images.pexels.com/photos/28771867/pexels-photo-28771867/free-photo-of-detailed-close-up-of-modern-cybertruck-design.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Détails du design Cybertruck",
      category: "performance"
    },
    {
      url: "https://images.pexels.com/photos/31225374/pexels-photo-31225374/free-photo-of-futuristic-electric-truck-in-new-york-showroom.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Cybertruck en showroom",
      category: "technology"
    }
  ],
  features: [
    {
      url: "https://images.pexels.com/photos/28468171/pexels-photo-28468171/free-photo-of-cybertruck-with-dog-overlooking-lake-tahoe.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Cybertruck au lac Tahoe",
      category: "innovation"
    },
    {
      url: "https://images.pexels.com/photos/28468165/pexels-photo-28468165/free-photo-of-tesla-cybertruck-with-dog-crate-in-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Cybertruck en montagne",
      category: "exclusivity"
    },
    {
      url: "https://images.pexels.com/photos/30364232/pexels-photo-30364232/free-photo-of-classic-and-modern-cars-on-santa-monica-street.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Cybertruck à Santa Monica",
      category: "service"
    }
  ],
  specs: {
    performance: "https://images.pexels.com/photos/30163134/pexels-photo-30163134/free-photo-of-futuristic-vehicle-display-in-ankara-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1200",
    technology: "https://images.pexels.com/photos/31701330/pexels-photo-31701330/free-photo-of-cybertruck-and-urban-skyline-panorama.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  parallax: [
    {
      url: "https://images.pexels.com/photos/24589308/pexels-photo-24589308/free-photo-of-tesla-cybertruck-on-street-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Parallax 1",
      speed: 0.5
    },
    {
      url: "https://images.pexels.com/photos/28468171/pexels-photo-28468171/free-photo-of-cybertruck-with-dog-overlooking-lake-tahoe.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Parallax 2",
      speed: 0.3
    },
    {
      url: "https://images.pexels.com/photos/28468165/pexels-photo-28468165/free-photo-of-tesla-cybertruck-with-dog-crate-in-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Parallax 3",
      speed: 0.7
    }
  ],
  backgrounds: {
    features: "https://images.pexels.com/photos/31701330/pexels-photo-31701330/free-photo-of-cybertruck-and-urban-skyline-panorama.jpeg?auto=compress&cs=tinysrgb&w=1200",
    specs: "https://images.pexels.com/photos/24589308/pexels-photo-24589308/free-photo-of-tesla-cybertruck-on-street-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: "https://images.pexels.com/photos/28468171/pexels-photo-28468171/free-photo-of-cybertruck-with-dog-overlooking-lake-tahoe.jpeg?auto=compress&cs=tinysrgb&w=1200",
    contact: "https://images.pexels.com/photos/28468165/pexels-photo-28468165/free-photo-of-tesla-cybertruck-with-dog-crate-in-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
};

export const video = {
  showroom: {
    url: "https://player.vimeo.com/external/19343052.sd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=164&oauth2_token_id=57447761",
    poster: "https://images.pexels.com/photos/31225374/pexels-photo-31225374/free-photo-of-futuristic-electric-truck-in-new-york-showroom.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Cybertruck en showroom - Vidéo"
  }
};

export const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  slideIn: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
};

export const colors = {
  primary: "#00FFD1",
  secondary: "#FF00FF",
  accent: "#00FFFF",
  background: {
    dark: "#000000",
    light: "#111111",
    gradient: "linear-gradient(135deg, #000000 0%, #111111 100%)"
  }
}; 