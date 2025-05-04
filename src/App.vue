<template>
  <div class="mnhaek-landing">
    <!-- Navigation Bar -->
    <nav class="main-nav">
      <div class="nav-logo">MN Hækklipning</div>
      <ul class="nav-links">
        <li><a href="#hero">Forside</a></li>
        <li><a href="#services">Ydelser</a></li>
        <li><a href="#about">Om os</a></li>
        <li><a href="#testimonials">Kundeudtalelser</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>

    <!-- Hero + Calculator Section -->
    <section 
      class="hero" 
      id="hero" 
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    >
      <!-- Gradient overlay is handled by hero::before -->
      <div class="hero-content-container">
        <div class="hero-row">
          <!-- Hero Text Content -->
          <div class="hero-content">
            <h1>Velkommen til MN hækklipning</h1>
            <div class="hero-text">
              <p>Hos MN hækklipning sørger vi for professionel hækklipning og beskæring af din hæk. Vi er din lokale hækklipningsekspert i Syd- og Midtjylland.</p>
              <ul class="hero-benefits">
                <li>✓ Præcis og professionel klipning</li>
                <li>✓ Fleksible tidspunkter</li>
                <li>✓ Konkurrencedygtige priser</li>
                <li>✓ Grundig oprydning efter arbejdet</li>
              </ul>
              <p>Vi kører i Kolding og omegn - klar til at give din hæk den perfekte finish!</p>
            </div>
            <div class="hero-cta-wrapper">
              <!-- Basic button, functionality can be added later -->
              <button class="hero-cta-btn" @click="scrollTo('contact')">Kontakt os</button> 
            </div>
          </div>
          <!-- Calculator Card -->
          <div class="calculator-card">
            <h2>Beregn din pris</h2>
            <form class="calc-form" @submit.prevent="scrollToContact">
              <label>
                Hvor mange meter hæk?
                <input 
                  type="number" 
                  min="1" 
                  step="1" 
                  onkeydown="return event.keyCode !== 190" 
                  @input="validatePositiveInteger($event, 'meter')" 
                  v-model.number="calc.meter"
                  :class="{ 'error': calc.errors.meter }"
                  required 
                />
                <span v-if="calc.errors.meter" class="error-message">{{ calc.errors.meter }}</span>
              </label>
              
              <label>
                Højde på hækken (cm)
                <input 
                  type="number" 
                  min="50" 
                  max="250" 
                  step="1" 
                  onkeydown="return event.keyCode !== 190" 
                  @input="validatePositiveInteger($event, 'height')" 
                  v-model.number="calc.height"
                  :class="{ 'error': calc.errors.height }"
                  required 
                />
                <span v-if="calc.errors.height" class="error-message">{{ calc.errors.height }}</span>
              </label>
              <label>
                Type af hæk
                <select v-model="calc.type" required class="calc-select">
                  <option value="single">Enkeltsidet hæk</option>
                  <option value="double">Dobbeltsidet hæk</option>
                </select>
              </label>
              <label class="checkbox-label">
                <span>Bortkørsel af affald</span>
                <input type="checkbox" v-model="calc.wasteRemoval" />
              </label>
              <div class="calc-guide-link">
                <a href="#" @click.prevent="showGuide = true">Hvordan måler jeg min hæk?</a>
              </div>
              <div class="calc-result">
                <span>Estimeret pris (inkl. moms):</span>
                <span class="price">{{ formattedPrice }}</span>
              </div>
              <button type="submit" class="cta-btn">Få tilbud nu</button>
            </form>
          </div>
        </div> <!-- End hero-row -->
      </div> <!-- End hero-content-container -->
      
      <!-- Scroll Indicator -->
      <div class="scroll-indicator" @click="scrollTo('services')">
        <span class="scroll-text">Rul ned for at høre mere om os</span>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </section>

    <!-- Service Features Section -->
    <section class="features section-padding container" id="services">
      <h2 class="section-heading">Vores Ydelser</h2>
      <div class="features-box">
        <div class="features-grid">
          <div class="feature-item">
            <h3>Professionel hækklipning</h3>
            <p>Vi klipper alle typer hække med præcision og omhu. Uanset om det er liguster, bøg, thuja eller andre arter, sikrer vi et flot og ensartet resultat.</p>
          </div>
          
          <div class="feature-item">
            <h3>Klipning i højden</h3>
            <p>Med det rette udstyr kan vi også håndtere høje hække. Vi har erfaring med hække op til 4 meter og sørger for sikker og præcis klipning, uanset højden.</p>
          </div>

          <div class="feature-item">
            <h3>Sæsonvedligeholdelse</h3>
            <p>Vi tilbyder løbende vedligeholdelse af din hæk gennem hele sæsonen. Med vores ekspertise sikrer vi, at din hæk forbliver sund og velplejet året rundt med rettidig klipning og pleje.</p>
          </div>

          <div class="feature-item">
            <h3>Bortkørsel af hækaffald</h3>
            <p>Vi tilbyder naturligvis bortkørsel af alt afklip. Vi efterlader haven pæn og ryddelig, så du slipper for besværet med oprydning og bortskaffelse.</p>
          </div>

          <div class="feature-item">
            <h3>Faste aftaler</h3>
            <p>Få en fast årlig aftale om hækklipning. Vi husker datoerne og kontakter dig i god tid. Særligt fordelagtige priser ved faste aftaler.</p>
          </div>

          <div class="feature-item">
            <h3>Gratis tilbud</h3>
            <p>Vi giver altid et gratis og uforpligtende tilbud. Kontakt os og få en snak om dine behov - vi finder den bedste løsning til din have.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
      <!-- Inner container needed for padding/max-width because section itself is full-bleed -->
      <div class="about-content container">
        <h2 class="section-heading">Om MN Hækklipning</h2>
        <p>
          Vi er to unge gutter, der brænder for at drive virksomhed og skabe gode resultater for vores kunder. Med en kombination af iværksætterånd og sans for detaljer, sørger vi for at din hæk får den bedste behandling.
        </p>
        <p>
          Vores mål er at levere professionelt arbejde til konkurrencedygtige priser, og vi går op i at efterlade et pænt og ryddeligt resultat hver gang.
        </p>
        <blockquote>"Vi klipper, du slipper"</blockquote>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact section-padding container" id="contact" ref="contactSection">
      <h2 class="section-heading">Kontakt os</h2>
      <div class="contact-box">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <form class="contact-form" @submit.prevent="submitForm">
              <input 
                type="text" 
                v-model="form.name" 
                placeholder="Navn" 
                required 
                :disabled="isSubmitting" 
              />
              <input 
                type="tel" 
                v-model="form.phone" 
                placeholder="Telefon" 
                required 
                :disabled="isSubmitting" 
              />
              <textarea 
                v-model="form.message" 
                placeholder="Besked" 
                rows="4" 
                required 
                :disabled="isSubmitting"
              ></textarea>
              <!-- Use specific class for form messages -->
              <span v-if="form.error" class="form-error-message">{{ form.error }}</span>
              <span v-if="form.success" class="form-success-message">{{ form.success }}</span>
              <button type="submit" class="cta-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sender...' : 'Send en besked' }}
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <!-- Profile Cards -->
            <div class="profile-cards">
              <div class="profile-card">
                <div class="profile-image mathias"></div> <!-- Placeholder style -->
                <div class="profile-info">
                  <h3>Mathias</h3>
                  <a href="tel:+4525540004" class="profile-phone">
                    <svg class="contact-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                    +45 2554 0004
                  </a>
                </div>
              </div>
              <div class="profile-card">
                <div class="profile-image nikolaj"></div> <!-- Placeholder style -->
                <div class="profile-info">
                  <h3>Nikolaj</h3>
                  <a href="tel:+4542776672" class="profile-phone">
                    <svg class="contact-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                    +45 4277 6672
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Email -->
            <div class="contact-email">
              <svg class="contact-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/></svg>
              <a href="mailto:mnhækklipningdk@gmail.com">mnhækklipningdk@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guide Modal -->
    <div v-if="showGuide" class="modal-overlay" @click.self="showGuide = false">
      <div class="modal-content">
        <button class="modal-close" @click="showGuide = false">&times;</button>
        <h3>Sådan måler du din hæk</h3>
        <div class="modal-body">
          <ol>
            <li>Gå ind på <a href="https://www.krak.dk/kort?l=aerial" target="_blank" rel="noopener">krak.dk</a> og indtast adressen til din hæk.</li>
            <li>Klik på lineal-ikonet i bunden af skærmen.</li>
            <li>Vælg linje-værktøjet fra menuen i højre side.</li>
            <li>Klik i den ene ende af hækken, og dernæst i den anden ende. Afslut ved at trykke på den blå cirkel.</li>
            <li>Indtast længden i beregneren.</li>
          </ol>
          <p>Hvis du stadig er i tvivl, så kontakt os, og vi vil hjælpe dig med at måle hækken.</p>
        </div>
        <div class="modal-footer">
          <button class="cta-btn" @click="scrollToContact(); showGuide = false">Kontakt os</button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content container">
        <div class="footer-section">
          <!-- Contact Info Group 1 -->
          <span> 
            <svg class="contact-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            <a href="tel:+4525540004">+45 2554 0004</a>
          </span>
          <!-- Contact Info Group 2 -->
          <span>
            <svg class="contact-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            <a href="tel:+4542776672">+45 4277 6672</a>
          </span>
          <!-- Contact Info Group 3 -->
          <span>
            <svg class="contact-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/></svg>
            <a href="mailto:mnhækklipningdk@gmail.com">mnhækklipningdk@gmail.com</a>
          </span>
        </div>
        <!-- Social Link -->
        <a href="https://www.facebook.com/profile.php?id=61574724682391" target="_blank" rel="noopener" class="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          <span>Følg os på Facebook</span>
        </a>
        <p>© {{ new Date().getFullYear() }} MN Hækklipning</p>
      </div>
    </footer>

  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'LandingPage',
  data() {
    return {
      calc: { meter: 10, height: 150, type: 'single', wasteRemoval: true, errors: { meter: '', height: '' } },
      showGuide: false,
      form: {
        name: '',
        phone: '',
        message: '',
        error: '',
        success: ''
      },
      isSubmitting: false
    }
  },
  mounted() {
    // Initialize EmailJS - replace with your actual public key
    emailjs.init('R-5pSmyto-K4pmOTV'); 
  },
  computed: {
    backgroundImageUrl() {
      // Assuming image is in public/img/
      const baseUrl = process.env.BASE_URL || '/'; 
      return `${baseUrl}img/haek1.jpg`;
    },
    formattedPrice() {
      if (!this.calc.meter || !this.calc.height) return '-';

      let pricePerMeter;
      const height = this.calc.height;
      const isSingle = this.calc.type === 'single';
      const withWaste = this.calc.wasteRemoval;

      // Determine price per meter based on height and type
      if (height <= 150) {
        pricePerMeter = isSingle ? (withWaste ? 25 : 20) : (withWaste ? 40 : 35);
      } else if (height <= 200) {
        pricePerMeter = isSingle ? (withWaste ? 40 : 35) : (withWaste ? 60 : 55);
      } else if (height <= 250) {
        pricePerMeter = isSingle ? (withWaste ? 50 : 45) : (withWaste ? 80 : 75);
      } else {
        return 'Kontakt os for pris';
      }

      const price = this.calc.meter * pricePerMeter;
      // Ensure price is calculated before formatting
      if (isNaN(price)) return '-'; // Handle potential NaN if meter/height are invalid momentarily
      return price.toLocaleString('da-DK', { style: 'currency', currency: 'DKK', maximumFractionDigits: 0 });
    },
  },
  methods: {
    scrollTo(sectionId) {
      console.log('Scroll to:', sectionId); 
      const el = document.getElementById(sectionId);
      if (el) { 
        // Simple scroll, nav bar is not sticky anymore
        el.scrollIntoView({ behavior: 'smooth' }); 
      }
    },
    scrollToContact() {
      const contactEl = this.$refs.contactSection;
      if (contactEl) {
        const nav = document.querySelector('.main-nav');
        const navHeight = nav ? nav.offsetHeight : 60;
        const offset = contactEl.offsetTop - navHeight - 20; // 20px extra padding
        window.scrollTo({ top: offset > 0 ? offset : 0, behavior: 'smooth' });
      } else {
         this.scrollTo('contact'); // Fallback if ref fails
      }
    },
    validatePositiveInteger(event, field) {
      const value = event.target.value;
      this.calc.errors[field] = ''; // Reset error
      
      if (value === '') { // Allow empty field temporarily
        this.calc[field] = ''; // Use empty string instead of null/undefined
        return;
      }

      const numValue = Number(value);
      
      if (isNaN(numValue)) {
        this.calc.errors[field] = 'Venligst indtast kun tal';
        this.calc[field] = value.replace(/[^0-9]/g, ''); // Attempt to strip non-digits
        return;
      }
      
      if (numValue < 0) {
        this.calc.errors[field] = 'Negative tal er ikke gyldige';
        this.calc[field] = 0; // Set to 0 instead of clearing
        return;
      }

      // Remove any decimal points by flooring
      const sanitizedValue = Math.floor(numValue);
      if (sanitizedValue !== numValue || value.includes('.')) {
        // Update model value directly if needed, ensures reactivity
        this.calc[field] = sanitizedValue; 
        // Additionally, update the input field value directly to reflect the change
        event.target.value = sanitizedValue;
      } else {
        // If it's already an integer, update the model
        this.calc[field] = sanitizedValue;
      }
    },
    async submitForm() {
      this.isSubmitting = true;
      this.form.error = '';
      this.form.success = '';
      
      try {
        const templateParams = {
          from_name: this.form.name,
          phone_number: this.form.phone,
          message: this.form.message
        };

        // Replace with your actual Service ID and Template ID
        await emailjs.send(
          'service_xb4jtwm', 
          'template_gimep2q', 
          templateParams
          // Public Key is passed during init
        );

        // Clear form and show success
        this.form = { 
          name: '', 
          phone: '', 
          message: '', 
          error: '',
          success: 'Tak for din besked! Vi vender tilbage hurtigst muligt.' 
        };
      } catch (error) {
        console.error('Failed to send email:', error);
        // Provide a more specific error if possible from 'error' object
        this.form.error = 'Der opstod en fejl under afsendelse. Prøv igen senere, eller ring til os direkte.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style>
/* --- Global Reset & Base --- */
:root {
  --forest-green: #2e6b3d;
  --leaf-green: #82b366;
  --lawn-green: #b7e1cd;
  --white: #fff;
  --light-grey: #f4f4f4;
  font-size: 15px; /* Mobile base font size */
  /* --nav-height removed */
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  width: 100%;
}

body {
  line-height: 1.6;
  font-family: 'Open Sans', Arial, sans-serif;
  color: var(--forest-green);
  background: linear-gradient(to bottom, var(--light-grey) 0%, var(--white) 100%);
  overflow-x: hidden;
  width: 100%;
}

.mnhaek-landing {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

/* --- Navigation (Mobile First) --- */
.main-nav {
  /* Position sticky removed, now static by default */
  background: var(--white);
  box-shadow: 0 2px 8px rgba(46, 107, 61, 0.07);
  display: flex;
  flex-direction: column; /* Stack logo and links */
  align-items: center;
  padding: 0.6rem 1rem;
  min-height: 50px;
  gap: 0.5rem;
}

.nav-logo {
  font-family: 'Poppins', 'Nunito', Arial, sans-serif;
  font-weight: 900;
  font-size: 1.2rem; /* Slightly smaller on mobile */
  color: var(--forest-green);
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 0.2rem 0.5rem; /* Row and column gap */
  list-style: none;
  flex-wrap: wrap; /* Allow wrapping */
  justify-content: center;
  width: 100%;
}

.nav-links li a {
  color: var(--forest-green);
  font-family: 'Nunito', Arial, sans-serif;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  border-radius: 18px;
  transition: background 0.18s, color 0.18s;
  white-space: nowrap;
}

.nav-links li a:hover,
.nav-links li a.active {
  background: var(--lawn-green);
  color: var(--leaf-green);
}

/* --- Desktop & Tablet Adjustments (min-width) --- */

/* Tablet and Medium Screens */
@media (min-width: 601px) {
  :root {
    font-size: 16px; /* Restore base font size */
    /* --nav-height removed */
  }

  .main-nav {
     flex-direction: row; /* Horizontal layout */
     padding: 0.5rem 1.5rem;
     height: 60px;
     gap: 1rem;
     justify-content: flex-start; /* Align logo to start */
   }
   .nav-links {
     width: auto; /* Allow natural width */
     gap: 0.8rem;
     flex-wrap: nowrap;
     margin-left: auto; /* Push links to the right */
   }
   .nav-links li a { font-size: 0.95rem; }
}

/* Desktop / Larger Screens */
@media (min-width: 901px) {
   .main-nav { padding: 0.7rem 2rem; }
   .nav-links { gap: 1rem; }
   .nav-links li a { font-size: 1rem; padding: 0.3rem 0.7rem; }
}

/* --- Hero Section (Mobile First) --- */
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%; 
  flex-grow: 1; /* Let hero fill remaining space */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  /* Padding-top removed, handled by content container */
}

/* Gradient Overlay */
.hero::before {
  content: '';
  position: absolute;
  inset: 0; /* Covers entire element */
  background: linear-gradient(120deg, rgba(46, 107, 61, 0.9) 0%, rgba(46, 107, 61, 0.85) 40%, rgba(130, 179, 102, 0.8) 100%);
  z-index: 1;
}

/* Content Container (above overlay) */
.hero-content-container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column; /* Default stack */
  align-items: center;
  padding: 1.5rem 1rem 1.5rem 1rem; /* Reduced bottom padding */
  flex-grow: 1; /* Make content container fill hero height */
  gap: 1.5rem; 
}

/* Row (used mainly for desktop layout) */
.hero-row {
  display: flex;
  flex-direction: column; /* Mobile default: stack */
  width: 100%;
  max-width: 550px; /* Constrain width on mobile */
  gap: 1.5rem;
  align-items: center;
}

.hero-content {
  color: var(--white);
  width: 100%;
  text-align: center;
}

.hero h1 {
  font-family: 'Poppins', 'Nunito', Arial, sans-serif;
  font-size: clamp(1.7rem, 7vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-text {
  font-size: clamp(0.95rem, 3vw, 1.1rem);
  line-height: 1.6;
  margin-bottom: 1rem;
}
.hero-text p {
  margin-bottom: 1rem;
}

.hero-benefits {
  list-style: none;
  margin: 1rem 0 1.5rem 0;
  padding: 0; /* Ensure no default padding */
  display: inline-block; 
  text-align: left;
}
.hero-benefits li {
  margin-bottom: 0.5rem;
  font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  display: flex;
  align-items: center;
  text-shadow: 0 1px 4px rgba(0,0,0,0.2);
  font-weight: 700;
  font-family: 'Nunito', Arial, sans-serif;
}

.hero-cta-wrapper {
  margin-top: 1.5rem;
}

.hero-cta-btn {
  background: var(--leaf-green);
  color: var(--white);
  border: none;
  border-radius: 30px;
  padding: 0.7rem 1.8rem;
  font-size: 1.1rem;
  font-family: 'Nunito', Arial, sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.hero-cta-btn:hover {
  background: var(--forest-green);
  transform: translateY(-2px);
}

/* Scroll Indicator */
.scroll-indicator {
  color: var(--white);
  cursor: pointer;
  opacity: 0.8;
  z-index: 2; /* Still need to be clickable over gradient */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  margin-top: 1rem; /* Space above indicator */
  margin-bottom: 1rem; /* Space below indicator */
  transition: opacity 0.3s;
}
.scroll-text {
  font-family: 'Nunito', Arial, sans-serif;
  font-size: 0.9rem;
  text-shadow: 0 1px 4px rgba(0,0,0,0.2);
  white-space: nowrap;
}
.scroll-indicator svg { width: 30px; height: 30px; }
.scroll-indicator:hover { opacity: 1; }

/* --- Calculator Card & Form (Mobile First) --- */
.calculator-card {
  background: var(--white);
  border-radius: 22px;
  box-shadow: 0 4px 24px rgba(46, 107, 61, 0.13);
  padding: 1.2rem 1rem;
  width: 100%;
  /* Max-width is handled by .hero-row */
}

.calculator-card h2 {
  font-family: 'Poppins', 'Nunito', Arial, sans-serif;
  font-size: 1.2rem;
  color: var(--forest-green);
  margin-bottom: 1.2rem; /* More margin */
  text-align: center;
}

.calc-form {
  display: flex;
  flex-direction: column;
  gap: 0.9rem; /* Slightly increased gap */
}

.calc-form label {
  font-size: 0.9rem;
  color: var(--forest-green);
  display: flex;
  flex-direction: column;
  width: 100%;
}

.calc-form input[type="number"],
.calc-select {
  border: 1.5px solid var(--lawn-green);
  border-radius: 10px;
  padding: 0.7rem 1rem; /* Slightly larger padding */
  font-size: 1rem;
  margin-top: 0.3rem;
  background: var(--light-grey);
  color: var(--forest-green);
  outline: none;
  transition: border 0.2s;
  width: 100%;
  -moz-appearance: textfield;
}
.calc-form input[type=number]::-webkit-inner-spin-button,
.calc-form input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.calc-form input[type="number"]:focus,
.calc-select:focus {
  border: 1.5px solid var(--leaf-green);
}

.calc-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232e6b3d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  background-size: 1.2em;
  padding-right: 2.5rem;
}

.calc-form .checkbox-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer; /* Make label clickable */
}
.calc-form .checkbox-label input[type="checkbox"] {
  width: auto;
  margin-top: 0;
  accent-color: var(--leaf-green);
  transform: scale(1.1);
  cursor: pointer;
}

.calc-guide-link {
  margin: 0.3rem 0;
  text-align: center;
}
.calc-guide-link a {
  color: var(--leaf-green);
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.18s;
}
.calc-guide-link a:hover {
  color: var(--forest-green);
}

.calc-result {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--lawn-green);
  border-radius: 10px;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  color: var(--forest-green);
  margin: 0.5rem 0;
  font-family: 'Nunito', Arial, sans-serif;
}
.price {
  font-weight: 900;
  font-size: 1.1rem;
}

/* Error Message Styling */
.error-message {
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  display: block; /* Ensure it takes space */
}
.calc-form input.error {
  border-color: #dc3545;
  background-color: #fff8f8;
}

/* General CTA Button Style */
.cta-btn {
  background: var(--leaf-green);
  color: var(--white);
  border: none;
  border-radius: 30px;
  padding: 0.8rem 1.8rem;
  font-size: 1.05rem;
  font-family: 'Nunito', Arial, sans-serif;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(46, 107, 61, 0.12);
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
  margin-top: 0.8rem; 
  text-align: center;
  width: 100%;
}
.cta-btn:hover {
  background: var(--forest-green);
  box-shadow: 0 4px 16px rgba(46, 107, 61, 0.18);
  transform: translateY(-1px);
}
.cta-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

/* --- Modal Styles --- */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(46, 107, 61, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}
.modal-content {
  background: var(--white);
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(46, 107, 61, 0.18);
  padding: 1.5rem;
  max-width: 500px;
  width: 100%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}
.modal-close {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: var(--leaf-green);
  cursor: pointer;
  line-height: 1;
  padding: 0.2rem;
}
.modal-content h3 {
  font-family: 'Poppins', 'Nunito', Arial, sans-serif;
  font-size: 1.2rem;
  color: var(--forest-green);
  margin-bottom: 1rem;
  padding-right: 2rem; /* Space for close button */
}
.modal-body {
  font-size: 0.95rem;
}
.modal-body ol {
  padding-left: 1.5em;
  margin: 0;
}
.modal-body ol li {
  background: #f4f8f4;
  border-radius: 8px;
  margin-bottom: 0.7em;
  padding: 0.8em 1em;
  box-shadow: 0 1px 4px rgba(46, 107, 61, 0.06);
  line-height: 1.5;
}
.modal-body ol li::marker {
  font-weight: bold;
  color: var(--leaf-green);
}
.modal-body ol li a {
  color: var(--leaf-green);
  text-decoration: underline;
  font-weight: 600;
}
.modal-body ol li a:hover { color: var(--forest-green); }
.modal-body p { margin-top: 1rem; }

.modal-footer {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(46, 107, 61, 0.1);
}
.modal-footer .cta-btn {
  width: auto; /* Modal button not full width */
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
}

/* --- Desktop & Tablet Adjustments (min-width) --- */

/* Tablet and Medium Screens */
@media (min-width: 601px) {
  /* No change needed for .hero min-height, flex-grow handles it */
  .hero-content-container { padding: 2rem 1.5rem 2rem 1.5rem; /* Reduced bottom padding */ }
  .hero-row { max-width: 600px; }
  .calculator-card { padding: 1.5rem; }
  .scroll-indicator { margin-top: 1.5rem; margin-bottom: 1.5rem; }
}

/* Desktop / Larger Screens */
@media (min-width: 901px) {
   /* ... existing nav adjustments ... */

   .hero-content-container {
     align-items: center; 
     padding: 3rem 2rem 3rem 2rem; /* Reduced bottom padding */
   }
   .hero-row {
     flex-direction: row; /* << SWITCH TO ROW */
     align-items: flex-start; 
     justify-content: center;
     gap: 2.5rem;
     max-width: 1100px;
   }
   .hero-content {
     flex: 1 1 55%; 
     max-width: 550px;
     text-align: left; 
   }
   .hero h1 { font-size: clamp(2rem, 4vw, 2.6rem); }
   .hero-text { font-size: 1.15rem; }
   .hero-benefits { text-align: left; }
   .hero-benefits li { font-size: 1.1rem; }
   .hero-cta-wrapper { justify-content: flex-start; }

   .calculator-card {
     flex: 1 1 35%; 
     max-width: 380px;
     align-self: center; 
   }

   .section-padding { padding-top: 4rem; padding-bottom: 4rem; }

   .features-grid {
     grid-template-columns: repeat(3, 1fr); /* Three columns */
     gap: 2rem;
   }
   .feature-item { padding: 1.5rem; }
   .scroll-indicator { margin-top: 2rem; margin-bottom: 2rem; }
}

/* --- Utility --- */
.container { /* Simple container for consistent padding */
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 1200px; /* Add max-width for larger screens */
  margin-left: auto;
  margin-right: auto;
}

.section-padding {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.section-heading {
  font-family: 'Poppins', 'Nunito', Arial, sans-serif;
  font-size: clamp(1.5rem, 6vw, 1.8rem); /* Responsive heading */
  color: var(--forest-green);
  margin-bottom: 1.5rem;
  text-align: center;
}

/* --- Features Section (Mobile First) --- */
.features {
  /* Uses .container and .section-padding */
}
.features-box {
  background: var(--white);
  padding: 1.5rem 1rem;
  border-radius: 24px;
  box-shadow: 0 2px 12px rgba(46, 107, 61, 0.06);
}
.features-grid {
  display: grid;
  grid-template-columns: 1fr; /* Single column default */
  gap: 1rem;
}
.feature-item {
  background: var(--light-grey);
  padding: 1.2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}
.feature-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(46, 107, 61, 0.12);
  background: white;
}
.feature-item h3 {
  font-family: 'Nunito', Arial, sans-serif;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
.feature-item p {
  font-size: 0.9rem;
  line-height: 1.5;
}

/* --- Desktop & Tablet Adjustments (min-width) --- */

/* Tablet and Medium Screens */
@media (min-width: 601px) {
  /* ... existing :root, nav, hero, calculator adjustments ... */

  .container { padding-left: 1.5rem; padding-right: 1.5rem; }
  .section-padding { padding-top: 3rem; padding-bottom: 3rem; }

  .features-grid {
    grid-template-columns: repeat(2, 1fr); /* Two columns */
    gap: 1.5rem;
  }
}

/* Desktop / Larger Screens */
@media (min-width: 901px) {
  /* ... existing nav, hero, calculator adjustments ... */

}

/* --- About Section (Mobile First) --- */
.about {
  background: var(--forest-green);
  color: white;
  padding: 3rem 0; /* Vertical padding only */
  margin: 2rem 0;
  /* Full-bleed effect */
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
.about .about-content { /* Inner container */
   max-width: 800px;
   margin: 0 auto;
   /* Inherits .container padding for horizontal spacing */
}
.about .section-heading { /* Override default color */
  color: white;
}
.about p {
  font-size: clamp(0.95rem, 3vw, 1.1rem);
  line-height: 1.7;
  margin-bottom: 1.2rem;
  text-shadow: 0 1px 4px rgba(0,0,0,0.1);
  text-align: center; /* Center text */
}
.about blockquote {
  font-family: 'Nunito', Arial, sans-serif;
  font-size: clamp(1.05rem, 4vw, 1.25rem);
  color: var(--lawn-green);
  margin-top: 1.5rem;
  font-style: italic;
  font-weight: 700;
  text-align: center; /* Center quote */
}

/* --- Desktop & Tablet Adjustments (min-width) --- */

/* Tablet and Medium Screens */
@media (min-width: 601px) {
  /* ... existing :root, nav, hero, calculator, features adjustments ... */

  .about { padding: 3.5rem 0; }
}

/* Desktop / Larger Screens */
@media (min-width: 901px) {
  /* ... existing nav, hero, calculator, features adjustments ... */

  .about { padding: 4rem 0; }
  .about p { font-size: 1.15rem; }
  .about blockquote { font-size: 1.3rem; }
}

/* --- Contact Section (Mobile First) --- */
.contact {
 /* Uses .container and .section-padding */
 padding-bottom: 3rem; /* More bottom padding */
}
.contact-box {
  background: var(--white);
  border-radius: 24px;
  padding: 1.5rem 1rem;
  box-shadow: 0 2px 12px rgba(46, 107, 61, 0.06);
  max-width: 600px; /* Max width for mobile/tablet */
  margin: 0 auto;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr; /* Single column default */
  gap: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-form input,
.contact-form textarea {
  padding: 0.8rem 1rem;
  border: 1.5px solid var(--lawn-green);
  border-radius: 12px;
  font-size: 1rem;
  font-family: 'Open Sans', Arial, sans-serif;
  background: var(--light-grey);
  color: var(--forest-green);
  outline: none;
  transition: all 0.2s ease;
  width: 100%;
}
.contact-form textarea {
  min-height: 100px;
  resize: vertical;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--leaf-green);
  background: white;
  box-shadow: 0 2px 8px rgba(46, 107, 61, 0.08);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.profile-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.profile-card {
  background: var(--light-grey);
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s ease;
}
.profile-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(46, 107, 61, 0.1);
  background: white;
}
.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid var(--leaf-green);
  flex-shrink: 0;
  background-color: var(--lawn-green); /* Placeholder color */
  /* Add specific background images if available */
  background-size: cover;
  background-position: center;
}

.profile-info {
  flex-grow: 1;
}
.profile-info h3 {
  font-family: 'Nunito', Arial, sans-serif;
  font-size: 1.05rem;
  margin: 0 0 0.2rem 0;
}
.profile-phone {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--forest-green);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
  white-space: nowrap;
}
.profile-phone:hover { color: var(--leaf-green); }
.contact-icon { width: 15px; height: 15px; flex-shrink: 0; }

.contact-email {
  background: var(--light-grey);
  border-radius: 16px;
  padding: 1rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  text-align: center; /* Center text */
}
.contact-email:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(46, 107, 61, 0.1);
  background: white;
}
.contact-email a {
  color: var(--forest-green);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}
.contact-email a:hover { color: var(--leaf-green); }

/* Form Messages */
.form-error-message, .form-success-message {
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  text-align: center;
  display: block;
}
.form-error-message {
  color: #dc3545;
  background: #fdeeee;
  border: 1px solid #f5c6cb;
}
.form-success-message {
  color: var(--forest-green);
  background: #eaf7e9;
  border: 1px solid var(--lawn-green);
}

/* --- Desktop & Tablet Adjustments (min-width) --- */

/* Tablet and Medium Screens */
@media (min-width: 601px) {
  /* ... existing adjustments ... */

  .contact-box { padding: 2rem; }
  .contact-grid {
     grid-template-columns: 1fr 1fr; /* Two columns */
     gap: 2rem;
  }
  .contact-form textarea { min-height: 120px; }
}

/* Desktop / Larger Screens */
@media (min-width: 901px) {
  /* ... existing adjustments ... */

  .contact-box { max-width: 900px; padding: 2.5rem; }
  .contact-grid { gap: 2.5rem; }
}

/* --- Footer (Mobile First) --- */
.footer {
  background: var(--forest-green);
  color: white;
  padding: 1.5rem 1rem 0.5rem 1rem; /* Add bottom padding */
  text-align: center;
  margin-top: auto; /* Push to bottom */
  width: 100%;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto 1rem auto; /* Add bottom margin */
  display: flex;
  flex-direction: column; /* Stack items */
  align-items: center;
  gap: 0.8rem;
}
.footer-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.3rem 0.8rem; /* Row and column gap */
  line-height: 1.5; /* Improve wrapping */
}
.footer-section span { /* Group contact items */
 display: inline-flex;
 align-items: center;
 gap: 0.3rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  transition: background-color 0.2s;
  white-space: nowrap;
  font-size: 0.9rem;
  color: white;
  text-decoration: none;
}
.social-link svg { width: 18px; height: 18px; }
.social-link:hover { background-color: rgba(255, 255, 255, 0.1); }
.footer-section a {
  color: white;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-section a:hover { color: var(--lawn-green); }

.footer-bottom {
  padding: 0.8rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.8rem;
  opacity: 0.8;
  margin-top: 1rem;
}
.footer-bottom p { margin: 0; }

/* --- Desktop & Tablet Adjustments (min-width) --- */

/* Tablet and Medium Screens */
@media (min-width: 601px) {
  /* ... existing adjustments ... */

  .footer-content { flex-direction: row; justify-content: center; gap: 1rem; }
  .footer-section { gap: 0.5rem 1rem; }
}

/* Desktop / Larger Screens */
@media (min-width: 901px) {
  /* ... existing adjustments ... */

  /* Footer adjustments often handled by 601px, but can add specifics if needed */
}

</style>
