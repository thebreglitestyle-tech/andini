export default function App() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#f8f3ee",
      color: "#222",
      minHeight: "100vh"
    }}>
      <header style={{
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #ddd"
      }}>
        <h2>andini.studio</h2>
        <div>Luxury Boho Bags</div>
      </header>

      <section style={{
        textAlign: "center",
        padding: "100px 20px"
      }}>
        <h1 style={{fontSize:"48px", marginBottom:"20px"}}>
          Handcrafted Beach & Boho Bags
        </h1>
        <p style={{fontSize:"20px", opacity:.7}}>
          Elegant handmade bags for modern women.
        </p>

        <button style={{
          marginTop:"30px",
          padding:"15px 30px",
          fontSize:"18px",
          border:"none",
          background:"#c89b6d",
          color:"#fff",
          borderRadius:"8px"
        }}>
          Shop Now
        </button>
      </section>

      <section style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px",
        padding:"40px"
      }}>
        {["Beach Muse","Golden Coast","Summer Soul"].map((item)=>(
          <div key={item} style={{
            background:"#fff",
            padding:"30px",
            borderRadius:"12px",
            boxShadow:"0 4px 10px rgba(0,0,0,.08)"
          }}>
            <h3>{item}</h3>
            <p>Premium handwoven bag collection.</p>
          </div>
        ))}
      </section>

      <footer style={{
        textAlign:"center",
        padding:"40px",
        opacity:.6
      }}>
        © 2026 andini.studio
      </footer>
    </div>
  );
}    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598533330333-f17387cc873d?q=80&w=800&auto=format&fit=crop'
    ],
    tag: 'Best Seller',
    rating: 4.9,
    reviews: 128
  },
  {
    id: '2',
    name: 'Azure Beach Haze',
    price: 45,
    description: 'Lightweight, ocean-mist inspired knit. Your ultimate seaside companion.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544816153-12ad5d714481?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1fd113962?q=80&w=800&auto=format&fit=crop'
    ],
    tag: 'New Arrival',
    rating: 4.8,
    reviews: 84
  },
  {
    id: '3',
    name: 'Sun-Kissed Fringes',
    price: 48,
    description: 'Golden hour aesthetics in a bag. Features playful fringes and earthy tones.',
    image: 'https://images.unsplash.com/photo-1575032617751-6ddec2089882?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1575032617751-6ddec2089882?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591348113529-6af0a47fb391?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=800&auto=format&fit=crop'
    ],
    tag: 'Best Seller',
    rating: 5.0,
    reviews: 56
  },
  {
    id: '4',
    name: 'Desert Wanderer',
    price: 42,
    description: 'Rugged yet soft. Designed for those who follow the horizon.',
    image: 'https://images.unsplash.com/photo-1544816153-12ad5d714481?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544816153-12ad5d714481?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614179110751-fe75f4d8527a?q=80&w=800&auto=format&fit=crop'
    ],
    tag: 'New Arrival',
    rating: 4.7,
    reviews: 92
  },
  {
    id: '5',
    name: 'Indigo Dreams',
    price: 38,
    description: 'Deep blue hues hand-woven into a timeless bohemian silhouette.',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop'
    ],
    tag: 'Limited Edition',
    rating: 4.9,
    reviews: 43
  },
  {
    id: '6',
    name: 'Terracotta Soul',
    price: 60,
    description: 'Our premium knit featuring intricate clay-toned patterns and patches. Now featuring our "Sea Ritual" edition with hand-knitted fish details.',
    image: 'https://images.unsplash.com/photo-1614179110751-fe75f4d8527a?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1614179110751-fe75f4d8527a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
    ],
    video: 'https://storage.googleapis.com/static.rethink.software/videos/user_uploads/1714016591000-fish.mp4',
    tag: 'Limited Edition',
    rating: 5.0,
    reviews: 31
  },
  {
    id: '7',
    name: 'Meadow Bloom',
    price: 35,
    description: 'Delicate floral embroidery on a soft cream base. Sweet and effortless.',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7d?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1575032617751-6ddec2089882?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544816153-12ad5d714481?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.6,
    reviews: 75
  },
  {
    id: '8',
    name: 'Sunset Mirage',
    price: 52,
    description: 'Gradient knits that mimic the transition from day to night.',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fd113962?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fd113962?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614179110751-fe75f4d8527a?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviews: 62
  },
  {
    id: '9',
    name: 'Artisan Echo',
    price: 40,
    description: 'Geometric minimalism meets traditional hand-knitting techniques.',
    image: 'https://images.unsplash.com/photo-1591348113529-6af0a47fb391?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1591348113529-6af0a47fb391?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1fd113962?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviews: 48
  },
  {
    id: '10',
    name: 'Coastal Current',
    price: 49,
    description: 'Fluid designs inspired by the rhythmic movement of the tide.',
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591348113529-6af0a47fb391?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7d?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.7,
    reviews: 110
  }
];

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <a href="#" className="font-serif text-2xl font-bold tracking-[0.15em] uppercase text-editorial-gold">
            andini.studio
          </a>
          <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.25em] text-editorial-taupe/60">
            <a href="#shop" className="hover:text-editorial-gold transition-colors">The Collection</a>
            <a href="#collections" className="hover:text-editorial-gold transition-colors">Our Craft</a>
            <a href="#about" className="hover:text-editorial-gold transition-colors">Stockists</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-editorial-bone rounded-full transition-colors relative">
            <ShoppingBag size={18} />
            <span className="absolute -top-0 -right-0 bg-editorial-sand text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full leading-none">0</span>
          </button>
          <button 
            className="lg:hidden p-2 hover:bg-editorial-bone rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-editorial-paper border-b border-editorial-border p-8 flex flex-col gap-6 text-center font-serif text-xl overflow-hidden"
          >
            <a href="#shop" onClick={() => setIsOpen(false)}>The Collection</a>
            <a href="#collections" onClick={() => setIsOpen(false)}>Our Craft</a>
            <a href="#about" onClick={() => setIsOpen(false)}>Stockists</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      {/* Video Header Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://storage.googleapis.com/static.rethink.software/videos/user_uploads/1714016591000-fish.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-editorial-paper via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-12 grid grid-cols-12 gap-0 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-12 lg:col-span-6 py-12"
        >
          <span className="text-editorial-sand font-medium tracking-[0.25em] uppercase text-[10px] mb-6 block">
            The Summer Archive 2024
          </span>
          <h1 className="text-6xl lg:text-8xl font-serif italic leading-[1.1] mb-8 text-editorial-ink">
            Elevate Your <br/><span className="not-italic font-bold">Beach Rituals</span>
          </h1>
          <p className="text-lg text-editorial-taupe/80 mb-10 leading-relaxed max-w-sm font-light">
            Hand-knitted bohemian masterpieces. Designed for golden hours, festival fields, and salt-kissed skin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="editorial-button bg-editorial-gold text-white hover:bg-editorial-ink shadow-xl shadow-editorial-gold/10">
              Shop the Edit
            </button>
            <button className="editorial-button border border-editorial-gold text-editorial-gold hover:bg-editorial-bone">
              View Lookbook
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute left-12 bottom-12 hidden lg:flex items-center gap-12 text-[9px] uppercase tracking-[0.3em] font-bold text-editorial-taupe/30">
          <div className="flex items-center gap-3"><Check size={14} /> Worldwide Shipping</div>
          <div className="flex items-center gap-3"><CreditCard size={14} /> Secure Checkout</div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, onClick }: { product: Product; onClick: () => void }) => {
  const handleShare = (e: MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: `andini.studio - ${product.name}`,
        text: product.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`Check out ${product.name} at andini.studio: ${window.location.href}`);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="editorial-card p-0">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          />
          {product.tag && (
            <span className="absolute top-6 left-6 bg-white/95 backdrop-blur px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-editorial-gold">
              {product.tag}
            </span>
          )}
          <button 
            onClick={handleShare}
            className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur rounded-full text-editorial-gold opacity-0 group-hover:opacity-100 transition-all hover:bg-editorial-gold hover:text-white"
            title="Share Product"
          >
            <Share2 size={14} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif text-xl group-hover:text-editorial-gold transition-colors">
              {product.name}
            </h3>
            <span className="font-bold text-sm text-editorial-ink">${product.price}.00</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-editorial-gold/60">
            {product.tag ? 'Artisan Choice' : 'The Classic Edit'}
          </p>
          
          <button className="mt-6 w-full editorial-button border border-editorial-border hover:bg-editorial-bone flex items-center justify-center gap-2 group-hover:border-editorial-gold group-hover:text-editorial-gold">
            The Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ShopSection = ({ onProductSelect }: { onProductSelect: (p: Product) => void }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Best Seller' | 'New Arrival' | 'Limited Edition'>('All');

  const filteredProducts = activeFilter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.tag === activeFilter);

  const filters = ['All', 'Best Seller', 'New Arrival', 'Limited Edition'] as const;

  return (
    <section id="shop" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <span className="text-editorial-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Inventory</span>
            <h2 className="text-5xl font-serif leading-tight text-editorial-ink">Hand-Picked <br/> masterpieces from the edit.</h2>
          </div>

          <div className="flex flex-wrap gap-4 border-b border-editorial-border lg:border-none pb-8 lg:pb-0">
             {filters.map((filter) => (
               <button 
                 key={filter}
                 onClick={() => setActiveFilter(filter)}
                 className={`text-[10px] uppercase font-black tracking-[0.25em] px-6 py-3 rounded-full transition-all border ${
                   activeFilter === filter 
                   ? 'bg-editorial-ink text-white border-editorial-ink shadow-lg shadow-editorial-ink/10' 
                   : 'bg-transparent text-editorial-taupe/40 border-editorial-border hover:border-editorial-gold hover:text-editorial-gold'
                 }`}
               >
                 {filter}
               </button>
             ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => (
              <motion.div 
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ProductCard product={product} onClick={() => onProductSelect(product)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {activeFilter === 'All' && (
          <div className="mt-24 border-t border-editorial-border pt-12 flex justify-between items-center">
            <p className="font-serif italic text-xl text-editorial-ink">Discover our full curation</p>
            <button className="editorial-button bg-editorial-ink text-white hover:bg-editorial-gold transition-colors">Full Collection</button>
          </div>
        )}
      </div>
    </section>
  );
};

const CharitySection = () => {
  return (
    <section className="py-32 bg-editorial-bone relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6 text-editorial-gold">
            <PawPrint size={24} />
            <span className="font-bold uppercase tracking-[0.3em] text-[10px]">andini.studio</span>
          </div>
          <h2 className="text-5xl font-serif leading-tight mb-8">Crafted for Good.</h2>
          <p className="text-lg text-editorial-taupe/70 leading-relaxed mb-10 font-light italic">
            At andini.studio, every stitch carries a purpose beyond fashion. A portion of every purchase is directly channeled toward animal rescue shelters. Your choice helps provide medical care, warm beds, and loving forever homes for cats and dogs in need.
          </p>
          
          <div className="bg-white p-8 border border-editorial-border inline-block pinterest-shadow rounded-2xl">
            <p className="text-[10px] uppercase tracking-widest font-black text-editorial-gold mb-2">Total Donated To Date</p>
            <div className="text-4xl font-serif font-bold text-editorial-ink">$14,250.00</div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white p-2 pinterest-shadow">
            <img 
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop" 
              alt="Artisan with dog" 
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-editorial-paper p-6 rounded-3xl border border-editorial-border pinterest-shadow max-w-[200px]">
            <Heart className="text-red-400 mb-2" fill="currentColor" size={20} />
            <p className="text-xs font-serif leading-relaxed italic">"Thank you for helping us find a home!" — Bailey & Friends</p>
          </div>
        </div>
      </div>
      
      {/* Decorative Paw Prints */}
      <div className="absolute top-20 right-10 text-editorial-gold/5 blur-[2px] rotate-12 scale-150">
        <PawPrint size={100} />
      </div>
    </section>
  );
};

const CustomerGallery = () => {
  const gallery = [
     "https://images.unsplash.com/photo-1520006403993-4740f0967d02?q=80&w=600&auto=format&fit=crop",
     "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
     "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?q=80&w=600&auto=format&fit=crop",
     "https://images.unsplash.com/photo-1518764876911-374a2ee690f6?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-12">
        <div className="text-center mb-24">
          <span className="text-editorial-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">As Seen On You</span>
          <h2 className="text-5xl font-serif text-editorial-ink">Community Rituals</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {gallery.map((img, i) => (
            <motion.div 
               key={i} 
               whileHover={{ y: -10 }}
               className={`aspect-[3/4] overflow-hidden pinterest-shadow rounded-2xl group border-4 border-white ${i % 2 !== 0 ? 'translate-y-12' : ''}`}
            >
              <img src={img} alt={`Customer ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramFeed = () => {
  const feed = [
    { id: 1, type: 'video', url: 'https://storage.googleapis.com/static.rethink.software/videos/user_uploads/1714016591000-fish.mp4' },
    { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=400&auto=format&fit=crop' },
    { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop' },
    { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1575032617751-6ddec2089882?q=80&w=400&auto=format&fit=crop' },
    { id: 5, type: 'image', url: 'https://images.unsplash.com/photo-1544816153-12ad5d714481?q=80&w=400&auto=format&fit=crop' },
    { id: 6, type: 'video', url: 'https://storage.googleapis.com/static.rethink.software/videos/user_uploads/1714015462000-flowers.mp4' },
  ];

  return (
    <section className="py-32 bg-editorial-paper/30">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex items-center justify-between mb-12">
           <div>
              <span className="text-editorial-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Instagram Feed</span>
              <h2 className="text-3xl font-serif text-editorial-ink italic">@andini.studio</h2>
           </div>
           <a href="#" className="editorial-button bg-editorial-ink text-white flex items-center gap-2">
              <Instagram size={16} /> Follow Us
           </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
           {feed.map((post) => (
             <div key={post.id} className="aspect-square relative group overflow-hidden bg-editorial-bone">
                {post.type === 'video' ? (
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                  >
                    <source src={post.url} type="video/mp4" />
                  </video>
                ) : (
                  <img src={post.url} alt="Instagram Post" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                )}
                <div className="absolute inset-0 bg-editorial-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Instagram className="text-white" size={24} />
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

const ReviewSection = () => {
  const reviews = [
    { name: "Elena V.", text: "Absolutely stunning detail. I wore my Muse tote to Coachella and got stopped constantly. It's truly a piece of art.", rating: 5 },
    { name: "Sarah M.", text: "The quality surpassed my expectations. It feels heavy in a good way, very premium material. Plus, I love that it helps shelters!", rating: 5 },
    { name: "Luna J.", text: "Perfect size for beach essentials. The cream color is exactly as pictured. Effortlessly bohemian.", rating: 4.8 },
  ];

  return (
    <section className="py-32 border-t border-editorial-border bg-editorial-paper">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex items-center gap-4 mb-20 overflow-hidden">
          <div className="flex-1 h-[1px] bg-editorial-border" />
          <h2 className="text-3xl font-serif italic text-editorial-gold">Artisan Voices</h2>
          <div className="flex-1 h-[1px] bg-editorial-border" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((r, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-col gap-6"
            >
              <div className="flex text-yellow-400 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <Quote className="text-editorial-gold/20" size={32} />
              <p className="font-serif text-xl italic leading-relaxed text-editorial-ink">"{r.text}"</p>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">{r.name}</p>
                <p className="text-[10px] text-editorial-gold/60 uppercase tracking-[0.15em] font-bold">Verified Wanderer</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="bg-editorial-bone py-24">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col gap-2 max-w-xs text-center md:text-left">
           <Zap className="text-editorial-gold mb-2 mx-auto md:mx-0" size={20} />
           <h4 className="font-serif text-2xl">Swift Travels</h4>
           <p className="text-xs leading-relaxed opacity-60 italic">Free express arrival on orders above $75 for a limited time.</p>
        </div>
        <div className="flex flex-col gap-2 max-w-xs text-center md:text-left">
           <CreditCard className="text-editorial-gold mb-2 mx-auto md:mx-0" size={20} />
           <h4 className="font-serif text-2xl">Secured Craft</h4>
           <p className="text-xs leading-relaxed opacity-60 italic">Complimentary secure payments with Stripe or PayPal hooks.</p>
        </div>
        <div className="flex flex-col gap-2 max-w-xs text-center md:text-left">
           <Star className="text-editorial-gold mb-2 mx-auto md:mx-0" size={20} />
           <h4 className="font-serif text-2xl">Artisan Heirloom</h4>
           <p className="text-xs leading-relaxed opacity-60 italic">Every stitch tells a story of longevity and refined quality.</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-editorial-border py-24">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-12 gap-12 items-start mb-24">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-serif text-3xl font-bold uppercase tracking-[0.1em] text-editorial-gold mb-8">andini.studio</h2>
            <p className="text-lg text-editorial-taupe/60 italic mb-10 leading-relaxed font-light">
              Designing pieces for the free spirit. We believe that accessories should be as adventurous as the souls who wear them.
            </p>
            <div className="flex gap-8">
              {[Instagram, Share2].map((Icon, i) => (
                <a key={i} href="#" className="text-editorial-gold hover:text-editorial-ink transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-span-12 sm:col-span-3 lg:col-span-3 lg:col-start-7">
            <h4 className="editorial-button text-editorial-ink mb-10 opacity-30">Selection</h4>
            <ul className="space-y-6 text-sm font-medium">
              <li><a href="#" className="hover:text-editorial-gold transition-colors">Archived Best Sellers</a></li>
              <li><a href="#" className="hover:text-editorial-gold transition-colors">Summer Series '24</a></li>
              <li><a href="#" className="hover:text-editorial-gold transition-colors">The Weaver's Hand</a></li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-3 lg:col-span-3">
            <h4 className="editorial-button text-editorial-ink mb-10 opacity-30">Client Care</h4>
            <ul className="space-y-6 text-sm font-medium">
              <li><a href="#" className="hover:text-editorial-gold transition-colors">Shipping Logistics</a></li>
              <li><a href="#" className="hover:text-editorial-gold transition-colors">Return Manifest</a></li>
              <li><a href="#" className="hover:text-editorial-gold transition-colors">Artisan Support</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-editorial-border">
          <p className="text-[10px] uppercase tracking-[0.25em] font-bold opacity-30 text-center md:text-left">
            © 2024 andini.studio Collective / An Aura & Weave Production
          </p>
          <div className="flex items-center gap-6 opacity-40 grayscale scale-90">
             <span className="text-[10px] font-black tracking-widest">PAYPAL</span>
             <span className="text-[10px] font-black tracking-widest">VISA</span>
             <span className="text-[10px] font-black tracking-widest">MASTER</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingUI = () => {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPromo(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <button className="fixed bottom-12 right-12 z-50 bg-editorial-gold text-white p-5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all">
         <MessageCircle size={22} />
      </button>

      <AnimatePresence>
        {showPromo && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed top-32 right-0 z-50 bg-editorial-sand text-white py-3 px-6 shadow-xl transform rotate-[-90deg] origin-right translate-y-full rounded-b-lg editorial-button pointer-events-auto"
          >
            <div className="flex items-center gap-4">
              <span>10% Off Your First Order</span>
              <button 
                onClick={() => setShowPromo(false)}
                className="hover:scale-125 transition-transform"
              >
                <X size={10} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ProductDetailModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  const handleMouseMove = (e: MouseEvent) => {
    const { left, top, width, height } = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % (product.images.length + (product.video ? 1 : 0)));
  const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + (product.images.length + (product.video ? 1 : 0))) % (product.images.length + (product.video ? 1 : 0)));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 overflow-y-auto"
    >
      <div className="absolute inset-0 bg-editorial-ink/60 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        className="relative bg-white w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl z-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full text-editorial-ink hover:bg-editorial-ink hover:text-white transition-all z-20"
        >
          <X size={20} />
        </button>

        <div className="grid lg:grid-cols-2">
          {/* Image Side with Zoom and Carousel */}
          <div className="relative group/carousel">
            <div 
              className="relative aspect-[4/5] lg:aspect-auto h-full overflow-hidden bg-editorial-bone cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <AnimatePresence mode="wait">
                {product.video && activeImageIndex === product.images.length ? (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full"
                  >
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="w-full h-full object-cover"
                    >
                      <source src={product.video} type="video/mp4" />
                    </video>
                  </motion.div>
                ) : (
                  <motion.img 
                    key={activeImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: isZoomed ? 2.5 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={product.images[activeImageIndex]} 
                    alt={product.name}
                    className="w-full h-full object-cover origin-center"
                    style={{
                      transformOrigin: isZoomed ? `${zoomPos.x}% ${zoomPos.y}%` : 'center'
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Navigation Arrows */}
              {!isZoomed && (
                <>
                  <motion.button 
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/90 backdrop-blur-md rounded-full text-editorial-ink shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10 border border-editorial-border"
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/90 backdrop-blur-md rounded-full text-editorial-ink shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10 border border-editorial-border"
                  >
                    <ChevronRight size={24} />
                  </motion.button>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {product.images.map((_, i) => (
                      <button 
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setActiveImageIndex(i); }}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeImageIndex ? 'bg-editorial-ink w-4' : 'bg-editorial-ink/30'}`}
                      />
                    ))}
                    {product.video && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); setActiveImageIndex(product.images.length); }}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${activeImageIndex === product.images.length ? 'bg-editorial-ink w-4' : 'bg-editorial-ink/30'}`}
                      />
                    )}
                  </div>

                  <div className="absolute top-6 left-6 text-white text-[10px] uppercase tracking-[0.2em] font-bold bg-editorial-ink/20 backdrop-blur px-4 py-2 rounded-full">
                    Hover to see artisan texture
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Details Side */}
          <div className="flex flex-col h-full max-h-[90vh] relative">
            <div className="flex-1 overflow-y-auto p-8 lg:p-16 pb-0">
              <span className="text-editorial-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                {product.tag || 'Artisan Series'}
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif mb-6">{product.name}</h2>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl font-bold text-editorial-ink">${product.price}.00</span>
                <div className="flex text-yellow-400 gap-1 border-l border-editorial-border pl-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />)}
                  <span className="text-xs font-bold text-editorial-ink ml-1">{product.rating}</span>
                </div>
              </div>
              
              <p className="text-lg text-editorial-taupe/70 leading-relaxed mb-10 font-light italic">
                {product.description} Crafted with recycled cotton and infused with a bohemian spirit perfect for those sun-inspired journeys.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-12">
                 <div className="border border-editorial-border rounded-sm py-4 px-6 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-widest bg-editorial-paper/30">
                    <CreditCard size={14} /> Secure Payment
                 </div>
                 <div className="border border-editorial-border rounded-sm py-4 px-6 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-widest bg-editorial-paper/30">
                    <Zap size={14} /> Fast Arrival
                 </div>
              </div>

              {/* Recommendations */}
              <div className="pt-12 border-t border-editorial-border mb-8">
                <h4 className="font-serif italic text-xl mb-8">You Might Also Like</h4>
                <div className="grid grid-cols-3 gap-4 pb-8">
                   {relatedProducts.map(rp => (
                     <div key={rp.id} className="group cursor-pointer">
                        <div className="aspect-[3/4] overflow-hidden rounded-xl mb-3">
                           <img src={rp.image} alt={rp.name} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-editorial-gold truncate">{rp.name}</p>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Sticky Action Bar */}
            <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-editorial-border p-6 lg:px-16 flex items-center justify-between gap-6 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
               <div className="hidden sm:block">
                  <p className="text-[9px] uppercase font-black text-editorial-gold tracking-widest mb-1">Selection Total</p>
                  <p className="text-xl font-bold">${product.price}.00</p>
               </div>
               <button className="flex-1 lg:flex-none lg:min-w-[240px] editorial-button bg-editorial-gold text-white hover:bg-editorial-ink py-4 shadow-xl shadow-editorial-gold/10">
                 Add to Collection
               </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  return (
    <div className="relative selection:bg-editorial-gold selection:text-white min-h-screen">
      {/* Subtle Video Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-[0.07] grayscale-[0.3]"
        >
          <source src="https://storage.googleapis.com/static.rethink.software/videos/user_uploads/1714015462000-flowers.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-editorial-paper/40"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <ShopSection onProductSelect={setSelectedProduct} />
        <CharitySection />
        <CustomerGallery />
        <InstagramFeed />
        <ReviewSection />
        <Features />
        
        {/* Secondary Banner */}
        <section className="py-32 max-w-7xl mx-auto px-12">
           <div className="relative overflow-hidden min-h-[600px] flex items-center group">
              <img 
                src="https://images.unsplash.com/photo-1575032617751-6ddec2089882?q=80&w=1200&auto=format&fit=crop" 
                alt="Lifestyle" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-editorial-ink/40 backdrop-blur-[1px]"></div>
              <div className="relative z-10 px-12 lg:px-24 py-12 text-white max-w-2xl border-l border-white/20 ml-12 lg:ml-24">
                 <h2 className="text-5xl lg:text-8xl font-serif font-bold mb-8 italic leading-[1.1] text-white">The Art of <br /> Festival Slow.</h2>
                 <p className="text-xl opacity-90 mb-12 leading-relaxed font-light italic">
                   Our bags aren't just accessories; they are companions for your most vibrant memories. From the desert dust of Indio to the salty air of Bali.
                 </p>
                 <button className="editorial-button bg-white text-editorial-ink hover:bg-editorial-sand hover:text-white">
                   Join The Collective
                 </button>
              </div>
           </div>
        </section>
      </main>
      <Footer />
      <FloatingUI />

      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
