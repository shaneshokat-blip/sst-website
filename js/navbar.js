/**
 * SST PSR — Shared Navbar & Footer Injector
 * Automatically replaces any existing <nav class="navbar"> with the
 * standardised full navigation on every page.
 */

(function () {
  'use strict';

  /* ─── Determine active page ─── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  function isActive(href) {
    return currentPage === href ? ' class="nav-link active"' : ' class="nav-link"';
  }

  /* ─── Full Navbar HTML ─── */
  const NAVBAR_HTML = `
<nav class="navbar" id="navbar" role="navigation" aria-label="Main Navigation">
  <div class="container">
    <a href="index.html" class="nav-logo" aria-label="SST Public School Rashidabad Home">
      <img src="https://sstpsr.edu.pk/wp-content/uploads/2021/05/logo.png"
           alt="SST Public School Rashidabad Logo"
           class="logo-img"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
           style="height:54px;width:auto;object-fit:contain;" />
      <div class="logo-text" style="display:none;">
        <div class="name">SST Public School</div>
        <div class="tagline">Rashidabad &middot; Excel to Lead</div>
      </div>
    </a>

    <ul class="nav-menu" id="nav-menu" role="menubar">
      <li class="nav-item" role="none">
        <a href="index.html"${isActive('index.html')} role="menuitem">HOME</a>
      </li>

      <li class="nav-item" role="none">
        <a href="#"${isActive('about-us.html')} role="menuitem" aria-haspopup="true">
          ABOUT <i class="fas fa-chevron-down"></i>
        </a>
        <ul class="dropdown" role="menu">
          <li><a href="about-us.html" class="dropdown-link"><i class="fas fa-school"></i> About Us</a></li>
          <li><a href="message-from-principal.html" class="dropdown-link"><i class="fas fa-user-tie"></i> Principal's Message</a></li>
          <li><a href="video-gallery.html" class="dropdown-link"><i class="fas fa-video"></i> Video Gallery</a></li>
        </ul>
      </li>

      <li class="nav-item" role="none">
        <a href="admissions.html"${isActive('admissions.html')} role="menuitem" aria-haspopup="true">
          ADMISSION <i class="fas fa-chevron-down"></i>
        </a>
        <ul class="dropdown" role="menu">
          <li><a href="how-to-apply.html" class="dropdown-link"><i class="fas fa-question-circle"></i> How to Apply</a></li>
          <li><a href="https://www.sstpsr.edu.pk/new-form-test-2026/" class="dropdown-link" target="_blank" rel="noopener"><i class="fas fa-file-alt"></i> Online Admission Form</a></li>
          <li><a href="fee-structure.html" class="dropdown-link"><i class="fas fa-money-bill-wave"></i> Fee Structure 2026-27</a></li>
          <li><a href="downloads.html" class="dropdown-link"><i class="fas fa-download"></i> Downloads &amp; Prospectus</a></li>
        </ul>
      </li>

      <li class="nav-item" role="none">
        <a href="academics.html"${isActive('academics.html')} role="menuitem" aria-haspopup="true">
          ACADEMICS <i class="fas fa-chevron-down"></i>
        </a>
        <ul class="dropdown" role="menu">
          <li><a href="faculty.html" class="dropdown-link"><i class="fas fa-users"></i> Members of Faculty</a></li>
          <li><a href="position-holders.html" class="dropdown-link"><i class="fas fa-trophy"></i> Position Holders</a></li>
          <li><a href="digital-library.html" class="dropdown-link"><i class="fas fa-book-open"></i> Digital Library</a></li>
          <li><a href="alumni.html" class="dropdown-link"><i class="fas fa-user-graduate"></i> Alumni</a></li>
        </ul>
      </li>

      <li class="nav-item" role="none">
        <a href="#"${isActive('science-labs.html')} role="menuitem" aria-haspopup="true">
          FACILITIES <i class="fas fa-chevron-down"></i>
        </a>
        <ul class="dropdown" role="menu">
          <li><a href="science-labs.html" class="dropdown-link"><i class="fas fa-flask"></i> Science Laboratories</a></li>
          <li><a href="ai-lab.html" class="dropdown-link"><i class="fas fa-robot"></i> AI / IT Laboratories</a></li>
          <li><a href="language-lab.html" class="dropdown-link"><i class="fas fa-language"></i> Language Laboratory</a></li>
          <li><a href="it-lab.html" class="dropdown-link"><i class="fas fa-home"></i> Boarding Houses</a></li>
          <li><a href="library.html" class="dropdown-link"><i class="fas fa-book-reader"></i> Library &amp; Documentation</a></li>
        </ul>
      </li>

      <li class="nav-item" role="none">
        <a href="#"${isActive('co-curricular.html')} role="menuitem" aria-haspopup="true">
          CAMPUS LIFE <i class="fas fa-chevron-down"></i>
        </a>
        <ul class="dropdown" role="menu">
          <li><a href="co-curricular.html" class="dropdown-link"><i class="fas fa-running"></i> Co-Curricular Activities</a></li>
          <li><a href="hobbies-club.html" class="dropdown-link"><i class="fas fa-star"></i> Hobbies Club</a></li>
          <li><a href="field-trips.html" class="dropdown-link"><i class="fas fa-map-signs"></i> Field Trips</a></li>
          <li><a href="gallery.html" class="dropdown-link"><i class="fas fa-images"></i> Photo Gallery</a></li>
          <li><a href="video-gallery.html" class="dropdown-link"><i class="fas fa-video"></i> Video Gallery</a></li>
        </ul>
      </li>

      <li class="nav-item" role="none">
        <a href="#"${isActive('news.html')} role="menuitem" aria-haspopup="true">
          NEWS <i class="fas fa-chevron-down"></i>
        </a>
        <ul class="dropdown" role="menu">
          <li><a href="news.html" class="dropdown-link"><i class="fas fa-newspaper"></i> Latest News</a></li>
          <li><a href="events.html" class="dropdown-link"><i class="fas fa-calendar-alt"></i> Events</a></li>
          <li><a href="notices.html" class="dropdown-link"><i class="fas fa-bullhorn"></i> Notices &amp; Circulars</a></li>
        </ul>
      </li>

      <li class="nav-item" role="none">
        <a href="contact.html"${isActive('contact.html')} role="menuitem">CONTACT</a>
      </li>
    </ul>

    <div class="nav-cta">
      <a href="https://lms.sstpsr.edu.pk" class="btn-login" target="_blank" rel="noopener">
        <i class="fas fa-sign-in-alt"></i> LMS Login
      </a>
      <a href="how-to-apply.html" class="btn-admit" id="btn-admissions">Admissions 2026</a>
    </div>

    <button class="hamburger" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  /* ─── Full Footer HTML ─── */
  const FOOTER_HTML = `
<footer class="footer" id="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <h3>SST Public School</h3>
        <div class="tagline">Rashidabad &middot; Sargodhian Spirit Trust</div>
        <p>Committed to educating young people to become responsible citizens and leaders of Pakistan and the world. <strong>Excel to Lead.</strong></p>
        <div class="footer-contact-info">
          <div class="footer-contact-item"><i class="fas fa-phone-alt"></i><a href="tel:0222-7320016">0222-732001 (6 lines)</a></div>
          <div class="footer-contact-item"><i class="fas fa-envelope"></i><a href="mailto:info@sstpsr.edu.pk">info@sstpsr.edu.pk</a></div>
          <div class="footer-contact-item"><i class="fas fa-map-marker-alt"></i><span>District Tando Allahyar, Sindh, Pakistan</span></div>
          <div class="footer-contact-item"><i class="fas fa-clock"></i><span>Mon&ndash;Sat: 08:00 &ndash; 16:00</span></div>
        </div>
        <div class="footer-social">
          <a href="https://www.facebook.com/sstpsr" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.youtube.com/@sstpsr" target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Admission</h4>
        <div class="footer-divider-gold"></div>
        <div class="footer-links">
          <a href="how-to-apply.html">How to Apply</a>
          <a href="fee-structure.html">Fee Structure 2026-27</a>
          <a href="downloads.html">Downloads &amp; Prospectus</a>
          <a href="https://www.sstpsr.edu.pk/new-form-test-2026/" target="_blank" rel="noopener">Online Admission Form</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Quick Links</h4>
        <div class="footer-divider-gold"></div>
        <div class="footer-links">
          <a href="news.html">News &amp; Updates</a>
          <a href="notices.html">Notices &amp; Circulars</a>
          <a href="events.html">Events</a>
          <a href="gallery.html">Photo Gallery</a>
          <a href="faculty.html">Faculty</a>
          <a href="position-holders.html">Position Holders</a>
          <a href="contact.html">Contact Us</a>
          <a href="privacy-policy.html">Privacy Policy</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Newsletter</h4>
        <div class="footer-divider-gold"></div>
        <form class="newsletter-form" id="newsletter-form-footer" action="https://formspree.io/f/mdapvgyy" method="POST" novalidate>
          <p>Get the latest SSTPSR news and announcements</p>
          <div class="newsletter-input-wrap">
            <input type="email" name="email" placeholder="Your email address" aria-label="Email for newsletter" required />
            <button type="submit" aria-label="Subscribe"><i class="fas fa-paper-plane"></i></button>
          </div>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <span>&copy; 2025 SST Public School Rashidabad. All rights reserved.</span>
      <span>Developed by: <a href="#">Asif Khan</a> &middot; <a href="sitemap.xml">Sitemap</a></span>
    </div>
  </div>
</footer>`;

  /* ─── Inject on DOM ready ─── */
  function inject() {
    // Replace existing nav
    const existingNav = document.querySelector('nav.navbar');
    if (existingNav) {
      existingNav.outerHTML = NAVBAR_HTML;
    } else {
      // Fallback: insert after top-bar or at body start
      const topBar = document.querySelector('.top-bar');
      if (topBar) topBar.insertAdjacentHTML('afterend', NAVBAR_HTML);
      else document.body.insertAdjacentHTML('afterbegin', NAVBAR_HTML);
    }

    // Replace existing footer
    const existingFooter = document.querySelector('footer.footer');
    if (existingFooter) {
      existingFooter.outerHTML = FOOTER_HTML;
    }

    // Highlight active nav link
    const links = document.querySelectorAll('.nav-link, .dropdown-link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href !== '#' && currentPage === href.split('/').pop()) {
        link.classList.add('active');
        const parentLi = link.closest('.nav-item');
        if (parentLi) {
          const parentLink = parentLi.querySelector(':scope > .nav-link');
          if (parentLink) parentLink.style.color = 'var(--accent)';
        }
      }
    });

    // Re-init hamburger (main.js may have run before inject)
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('mobile-open');
        hamburger.setAttribute('aria-expanded', navMenu.classList.contains('mobile-open'));
      });
    }

    // Mobile dropdowns
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          const dropdown = this.querySelector('.dropdown');
          if (dropdown && !e.target.closest('a[href]:not([href="#"])')) {
            this.classList.toggle('mobile-open');
            e.stopPropagation();
          }
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
