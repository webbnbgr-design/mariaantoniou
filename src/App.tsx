import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  Handshake, 
  Users, 
  Briefcase, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  ChevronRight, 
  Clock, 
  ShieldCheck, 
  Coins,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Υπηρεσίες', href: '#services' },
    { name: 'Εξειδίκευση', href: '#specialization' },
    { name: 'Διαμεσολάβηση', href: '#mediation' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-sage flex items-center justify-center rounded-lg">
            <Scale className="text-white w-6 h-6" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-charcoal' : 'text-charcoal'}`}>
            Μαρία Αντωνίου
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-charcoal/70 hover:text-sage transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-sage text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-sage-dark transition-all shadow-md hover:shadow-lg"
          >
            Επικοινωνία
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-charcoal"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-sage text-white px-6 py-4 rounded-xl text-center font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Κλείστε Συνεδρία
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-soft-teal/30">
      {/* Background Abstract Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-soft-teal/20 -skew-x-12 transform translate-x-1/4 z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sage/10 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Δικηγορία & Διαμεσολάβηση
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.1] mb-6">
            Μαρία Αντωνίου: <br />
            <span className="text-sage">Νομική Εκπροσώπηση</span> & <br />
            Διαμεσολάβηση.
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 mb-10 max-w-lg leading-relaxed">
            Σύγχρονες λύσεις για σύνθετα νομικά ζητήματα με επίκεντρο τον άνθρωπο και την αποτελεσματική επίλυση διαφορών.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-sage text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sage-dark transition-all shadow-lg hover:shadow-sage/30 text-center"
            >
              Κλείστε μια Συνεδρία
            </a>
            <a 
              href="#services" 
              className="bg-white text-charcoal px-8 py-4 rounded-full font-bold text-lg border border-charcoal/10 hover:border-sage transition-all text-center"
            >
              Οι Υπηρεσίες μας
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative border border-sage/20">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000" 
              alt="Scales of Justice - Legal Profession" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
          </div>
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-sage/20 hidden lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center">
                <ShieldCheck className="text-sage w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-charcoal/50 font-bold uppercase tracking-wider">Διαπιστευμένη</p>
                <p className="text-charcoal font-bold">Mediator (ΥΔΔΑΔ)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SplitServices = () => {
  return (
    <section id="services" className="white-space-section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Διπλή Προσέγγιση στην Επίλυση</h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
            Προσφέρουμε ολοκληρωμένες νομικές υπηρεσίες, επιλέγοντας την καταλληλότερη οδό για την περίπτωσή σας.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Lawyering */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group p-10 rounded-[2.5rem] bg-soft-teal/20 border border-sage/10 transition-all"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-sage group-hover:text-white transition-all">
              <Scale className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Δικηγορία</h3>
            <p className="text-charcoal/70 mb-8 text-lg leading-relaxed">
              Δυναμική εκπροσώπηση ενώπιον των δικαστηρίων και εξειδικευμένη σύνταξη νομικών εγγράφων. Προστατεύουμε τα δικαιώματά σας με συνέπεια και επιστημονική αρτιότητα.
            </p>
            <ul className="space-y-4 mb-10">
              {['Δικαστική Εκπροσώπηση', 'Σύνταξη Συμβολαίων & Εγγράφων', 'Νομικές Συμβουλές', 'Διαχείριση Υποθέσεων'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-charcoal/80 font-medium">
                  <ChevronRight className="w-5 h-5 text-sage" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mediation */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group p-10 rounded-[2.5rem] bg-charcoal text-white transition-all"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-sage transition-all">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Διαμεσολάβηση</h3>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              Εξωδικαστική επίλυση διαφορών με στόχο την αμοιβαία ικανοποίηση. Μια σύγχρονη, πολιτισμένη και αποτελεσματική εναλλακτική στη δικαστική οδό.
            </p>
            <ul className="space-y-4 mb-10">
              {['Οικογενειακές Διαφορές', 'Εμπορικές & Αστικές Υποθέσεις', 'Εργατικές Διαφορές', 'Σχολική Διαμεσολάβηση'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80 font-medium">
                  <ChevronRight className="w-5 h-5 text-sage" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyMediation = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Ταχύτητα",
      desc: "Επίλυση σε λίγες μόνο συνεδρίες, αποφεύγοντας τις πολυετείς δικαστικές διαμάχες."
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Χαμηλότερο Κόστος",
      desc: "Σημαντική μείωση δικαστικών εξόδων, παραβόλων και αμοιβών μακροχρόνιων διαδικασιών."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Ιδιωτικότητα",
      desc: "Η διαδικασία είναι απόλυτα εμπιστευτική, προστατεύοντας την προσωπική και επαγγελματική σας ζωή."
    }
  ];

  return (
    <section id="mediation" className="white-space-section bg-soft-teal/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Γιατί να επιλέξετε τη Διαμεσολάβηση;</h2>
            <p className="text-charcoal/70 text-lg mb-12 leading-relaxed">
              Η διαμεσολάβηση είναι μια εθελοντική διαδικασία όπου τα μέρη, με τη βοήθεια ενός ουδέτερου τρίτου (του διαμεσολαβητή), προσπαθούν να βρουν μια βιώσιμη λύση στη διαφορά τους. Είναι ο δρόμος της συνεννόησης που εξοικονομεί χρόνο, χρήμα και ψυχική ενέργεια.
            </p>
            <div className="space-y-8">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-sage">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                    <p className="text-charcoal/60">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-sage/10">
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000" 
                alt="Law Books and Legal Foundation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sage rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Specialization = () => {
  const fields = [
    { icon: <Users />, title: "Αστικό Δίκαιο", desc: "Ενοχικό, Εμπράγματο, Κληρονομικό δίκαιο και προστασία δικαιωμάτων." },
    { icon: <Handshake />, title: "Οικογενειακές Διαφορές", desc: "Διαζύγια, επιμέλεια τέκνων, διατροφές και περιουσιακές διευθετήσεις." },
    { icon: <Briefcase />, title: "Εμπορικές Υποθέσεις", desc: "Εταιρικό δίκαιο, εμπορικές συμβάσεις και επίλυση επιχειρηματικών διαφορών." },
    { icon: <Scale />, title: "Εργατικό Δίκαιο", desc: "Συμβάσεις εργασίας, αποζημιώσεις και εργασιακές διεκδικήσεις." },
  ];

  return (
    <section id="specialization" className="white-space-section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">Τομείς Εξειδίκευσης</h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
            Εξειδικευμένη γνώση και εμπειρία σε καίριους τομείς του δικαίου.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fields.map((field, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-charcoal/5 hover:border-sage/30 hover:shadow-xl hover:shadow-sage/5 transition-all"
            >
              <div className="w-12 h-12 bg-soft-teal rounded-xl flex items-center justify-center mb-6 text-sage-dark">
                {field.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{field.title}</h4>
              <p className="text-charcoal/60 leading-relaxed">{field.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="white-space-section bg-soft-teal/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Επικοινωνήστε μαζί μας</h2>
          <p className="text-charcoal/70 text-lg mb-12">
            Είμαστε εδώ για να σας ακούσουμε και να βρούμε μαζί την καλύτερη λύση για το νομικό σας ζήτημα.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-sage/10">
              <div className="w-12 h-12 bg-soft-teal rounded-full flex items-center justify-center text-sage-dark mx-auto mb-4">
                <MapPin />
              </div>
              <p className="font-bold mb-2">Διεύθυνση</p>
              <p className="text-charcoal/60 text-sm">Πανιωνίου 32, Καισαριανή, 16121</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-sage/10">
              <div className="w-12 h-12 bg-soft-teal rounded-full flex items-center justify-center text-sage-dark mx-auto mb-4">
                <Phone />
              </div>
              <p className="font-bold mb-2">Τηλέφωνο</p>
              <p className="text-charcoal/60 text-sm">+30 210 1234567</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-sage/10">
              <div className="w-12 h-12 bg-soft-teal rounded-full flex items-center justify-center text-sage-dark mx-auto mb-4">
                <Mail />
              </div>
              <p className="font-bold mb-2">Email</p>
              <p className="text-charcoal/60 text-sm">info@antoniou-law.gr</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-80 bg-white rounded-[3rem] overflow-hidden relative border border-sage/10 shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-sage" />
              </div>
              <p className="font-bold text-xl text-sage-dark">Πανιωνίου 32, Καισαριανή</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-sage text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-sage-dark transition-all shadow-lg"
              >
                Άνοιγμα στους Χάρτες
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sage flex items-center justify-center rounded-lg">
            <Scale className="text-white w-4 h-4" />
          </div>
          <span className="font-bold text-lg tracking-tight text-charcoal">
            Μαρία Αντωνίου
          </span>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-charcoal/50">
          <a href="#" className="hover:text-sage transition-colors">Όροι Χρήσης</a>
          <a href="#" className="hover:text-sage transition-colors">Πολιτική Απορρήτου</a>
          <a href="#" className="hover:text-sage transition-colors">Cookies</a>
        </div>

        <p className="text-sm text-charcoal/40">
          © {new Date().getFullYear()} Μαρία Αντωνίου. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-sage/30 selection:text-sage-dark">
      <Navbar />
      <main>
        <Hero />
        <SplitServices />
        <WhyMediation />
        <Specialization />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
