"use client";
import { useState } from "react";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/footer";
import LeftSidebar from "./components/LeftSidebar";
import "../../styles/admin/css/style.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <Header toggleMobileMenu={toggleMobileMenu} />

      {/* Mobile Menu (toggle visibility on mobile) */}
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />

      {/* Main Content Area */}
      <section className="dashboard-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              {/* Left Sidebar */}
              <LeftSidebar />
            </div>

            <div className="col-lg-9">
              <div className="right-side">
                {/* Main content from child components */}
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
