import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Academy", path: "/academy" },
  { label: "Organizational Purchase", path: "/organizational-purchase" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "Representation", path: "/representation" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="gradient-primary">
        <div className="container flex items-center justify-between py-2 text-primary-foreground text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +1 (555) 123-4567</span>
            <span className="hidden sm:flex items-center gap-1"><Mail className="w-3 h-3" />sajad.rahmanpour@unitywaresolutions.com</span>
          </div>
          <span className="hidden md:block">Advanced Foot Health Technology Solutions</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="font-heading text-2xl font-bold text-gradient">Unityware Solutions</Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-card border-t"
            >
              <nav className="container py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-primary bg-primary/5"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="gradient-hero text-primary-foreground">
        <div className="container py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">Unityware Solutions</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Leading provider of advanced foot health technology, including 3D scanners,
              medical insole printers, and posture analysis systems.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <p>123 Medical Innovation Blvd</p>
              <p>San Francisco, CA 94102</p>
              <p>+1 (555) 123-4567</p>
              <p>sajad.rahmanpour@unitywaresolutions.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="container py-6 text-center text-sm text-primary-foreground/50">
            © 2026 Unityware Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
