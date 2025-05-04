<template>
  <div class="mnhaek-landing">
    <!-- Navigation Bar -->
    <nav class="main-nav">
      <div class="nav-logo">MN Hækklipning</div>
      <ul class="nav-links">
        <li><a href="#hero" @click.prevent="scrollTo('hero')">Forside</a></li>
        <li><a href="#services" @click.prevent="scrollTo('services')">Ydelser</a></li>
        <li><a href="#about" @click.prevent="scrollTo('about')">Om os</a></li>
        <li><a href="#testimonials" @click.prevent="scrollTo('testimonials')">Kundeudtalelser</a></li>
        <li><a href="#contact" @click.prevent="scrollTo('contact')">Kontakt</a></li>
      </ul>
    </nav>
    <!-- Hero + Calculator Section (side by side) -->
    <section 
      class="hero hero-with-calc" 
      id="hero" 
      :style="{ 
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }"
    >
      <div class="hero-overlay hero-row">
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
            <button class="hero-cta-btn" @click="scrollTo('contact')">Kontakt os</button>
          </div>
        </div>
        <div class="calculator-card">
          <h2>Beregn din pris</h2>
          <form class="calc-form" @submit.prevent="scrollToContact">
            <label>
              Hvor mange meter hæk?
              <input type="number" min="1" step="1" onkeydown="return event.keyCode !== 190" @input="validatePositiveInteger($event, 'meter')" v-model.number="calc.meter" required />
            </label>
            
            <label>
              Højde på hækken (cm)
              <input type="number" min="50" max="250" step="1" onkeydown="return event.keyCode !== 190" @input="validatePositiveInteger($event, 'height')" v-model.number="calc.height" required />
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
      </div>
      <div class="scroll-indicator" @click="scrollTo('services')">
        <span class="scroll-text">Rul ned for at høre mere om os</span>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
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

    <!-- Service Features Section -->
    <section class="features" id="services">
      <h2>Vores ydelser</h2>
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
    </section>

    <!-- About Section -->
    <section class="about" id="about">
      <h2>Om MN Hækklipning</h2>
      <p>
        Vi er to unge gutter, der brænder for at drive virksomhed og skabe gode resultater for vores kunder. Med en kombination af iværksætterånd og sans for detaljer, sørger vi for at din hæk får den bedste behandling.
      </p>
      <p>
        Vores mål er at levere professionelt arbejde til konkurrencedygtige priser, og vi går op i at efterlade et pænt og ryddeligt resultat hver gang.
      </p>
      <blockquote>"Vi klipper, du slipper"</blockquote>
    </section>

    <!-- Testimonials / Gallery Section (Placeholder) -->
    <section class="testimonials" id="testimonials">
      <h2>Kundeudtalelser & Før/Efter</h2>
      <div class="testimonial-gallery">
        <div class="testimonial-card placeholder">
          <div class="testimonial-img"></div>
          <div class="testimonial-quote">"Super flot arbejde – og alt blev ryddet op!"</div>
          <div class="testimonial-name">– Tidligere kunde</div>
        </div>
        <div class="testimonial-card placeholder">
          <div class="testimonial-img"></div>
          <div class="testimonial-quote">"Hurtig respons og god pris. Kan varmt anbefales."</div>
          <div class="testimonial-name">– Privatkunde</div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact" ref="contactSection">
      <h2>Kontakt os</h2>
      <div class="contact-container">
        <div class="contact-form-column">
          <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
            <input type="text" name="name" placeholder="Navn" required />
            <input type="tel" name="phone" placeholder="Telefon" required />
            <textarea name="message" placeholder="Besked" rows="3" required></textarea>
            <button type="submit" class="cta-btn">Send en besked</button>
          </form>
        </div>
        <div class="contact-profiles">
          <div class="profile-card">
            <div class="profile-image mathias"></div>
            <div class="profile-info">
              <h3>Mathias</h3>
              <a href="tel:+4525540004" class="profile-phone">
                <svg class="contact-icon" viewBox="0 0 24 24" width="14" height="14">
                  <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                +45 2554 0004
              </a>
            </div>
          </div>
          <div class="profile-card">
            <div class="profile-image nikolaj"></div>
            <div class="profile-info">
              <h3>Nikolaj</h3>
              <a href="tel:+4542776672" class="profile-phone">
                <svg class="contact-icon" viewBox="0 0 24 24" width="14" height="14">
                  <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                +45 4277 6672
              </a>
            </div>
          </div>
          <div class="contact-email">
            <svg class="contact-icon" viewBox="0 0 24 24" width="14" height="14">
              <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/>
            </svg>
            <a href="mailto:mnhækklipningdk@gmail.com">mnhækklipningdk@gmail.com</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <span>
            <svg class="contact-icon" viewBox="0 0 24 24" width="14" height="14">
              <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg><a href="tel:+4525540004">+45 2554 0004</a>
            <div class="footer-divider"></div>
            <svg class="contact-icon" viewBox="0 0 24 24" width="14" height="14">
              <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg><a href="tel:+4542776672">+45 4277 6672</a>
            <div class="footer-divider"></div>
            <svg class="contact-icon" viewBox="0 0 24 24" width="14" height="14">
              <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/>
            </svg><a href="mailto:mnhækklipningdk@gmail.com">mnhækklipningdk@gmail.com</a>
          </span>
        </div>
        <div class="footer-divider"></div>
        <a href="https://www.facebook.com/profile.php?id=61574724682391" target="_blank" rel="noopener" class="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          <span>Følg os på Facebook</span>
        </a>
      </div>
      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} MN Hækklipning</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      calc: {
        meter: 10,
        height: 150,
        type: 'single',
        wasteRemoval: true
      },
      showGuide: false
    }
  },
  computed: {
    backgroundImageUrl() {
      const baseUrl = process.env.NODE_ENV === 'production' 
        ? '/mnhaekklipning-website' 
        : '';
      return `${baseUrl}/img/haek1.jpg`;
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
      return price.toLocaleString('da-DK', { style: 'currency', currency: 'DKK', maximumFractionDigits: 0 });
    }
  },
  methods: {
    scrollTo(section) {
      const el = document.getElementById(section);
      if (el) {
        const navHeight = window.innerWidth <= 900 ? 90 : 60;
        const extraPadding = 40;
        const offset = el.offsetTop - navHeight - extraPadding;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    },
    validatePositiveInteger(event, field) {
      const value = event.target.value;
      // Remove any decimal points and non-numeric characters
      const sanitizedValue = Math.floor(Math.abs(Number(value)));
      if (sanitizedValue !== Number(value)) {
        this.calc[field] = sanitizedValue;
      }
    },
    scrollToContact() {
      const navHeight = window.innerWidth <= 900 ? 90 : 60;
      const extraPadding = 40;
      const offset = this.$refs.contactSection.offsetTop - navHeight - extraPadding;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>
:root {
  --forest-green: #2e6b3d;
  --leaf-green: #82b366;
  --lawn-green: #b7e1cd;
  --white: #fff;
  --light-grey: #f4f4f4;
}
.mnhaek-landing {
  font-family: 'Open Sans', Arial, sans-serif;
  background: linear-gradient(
    to bottom,
    var(--light-grey) 0%,
    var(--white) 100%
  );
  color: var(--forest-green);
}
/* Navigation Bar Styles */
.main-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--white);
  box-shadow: 0 2px 8px rgba(46,107,61,0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 2.5vw;
  height: 60px;
}
.nav-logo {
  font-family: 'Poppins', 'Nunito', Arial, sans-serif;
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--forest-green);
  letter-spacing: 1px;
}
.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-links li a {
  color: var(--forest-green);
  font-family: 'Nunito', Arial, sans-serif;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.05rem;
  padding: 0.3rem 0.7rem;
  border-radius: 18px;
  transition: background 0.18s, color 0.18s;
}
.nav-links li a:hover, .nav-links li a.active {
  background: var(--lawn-green);
  color: var(--leaf-green);
}
@media (max-width: 900px) {
  .main-nav {
    height: 90px;
    flex-direction: column;
    padding: 0.7rem 1vw;
  }
  .nav-links {
    gap: 0.7rem;
  }
  .hero {
    height: auto;
    min-height: calc(100vh - 90px);
    margin-bottom: 2rem;
  }
  .hero-overlay.hero-row {
    height: 100%;
    min-height: 100%;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.2rem 0.5rem 4rem 0.5rem;
  }
  .calculator-card {
    max-width: 98vw;
    margin-top: 0;
  }
}
.hero {
  height: calc(100vh - 60px);
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 3rem;
  overflow: hidden;
}
.hero-overlay.hero-row {
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, 
    rgba(46,107,61,0.9) 0%,
    rgba(46,107,61,0.85) 40%,
    rgba(130,179,102,0.8) 100%
  );
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
  position: relative;
  padding: 2.5rem 1rem 4rem 1rem;
}
.hero-content {
  text-align: left;
  color: var(--white);
  max-width: 500px;
  flex: 1 1 340px;
  padding: 1rem;
}
.hero h1 {
  font-family: 'Poppins', 'Nunito', Arial, sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--white);
}
.hero-text {
  font-size: 1.2rem;
  line-height: 1.6;
  flex-grow: 1;
}
.hero-text p {
  margin-bottom: 1rem;
}
.hero-cta-wrapper {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 1.5rem;
}
.hero-cta-btn {
  background: var(--leaf-green);
  color: var(--white);
  border: none;
  border-radius: 30px;
  padding: 0.85rem 2.5rem;
  font-size: 1.2rem;
  font-family: 'Nunito', Arial, sans-serif;
  font-weight: 700;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.hero-cta-btn:hover {
  background: var(--forest-green);
  transform: translateY(-2px);
}
.calculator-card {
  background: var(--white);
  border-radius: 22px;
  box-shadow: 0 4px 24px rgba(46,107,61,0.13);
  padding: 1.5rem;
  max-width: 350px;
  width: 100%;
  position: relative;
  z-index: 10;
  margin-top: 1rem;
  box-sizing: border-box;
}
.calculator-card h2 {
  font-family: 'Poppins', 'Nunito', Arial, sans-serif;
  font-size: 1.25rem;
  color: var(--forest-green);
  margin-bottom: 1rem;
}
.calc-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  text-align: left;
  box-sizing: border-box;
}
.calc-form label {
  font-size: 1rem;
  color: var(--forest-green);
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', Arial, sans-serif;
  width: 100%;
  box-sizing: border-box;
}
.calc-form input[type="number"],
.calc-select {
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
}
.calc-form input[type="number"] {
  border: 1.5px solid var(--lawn-green);
  border-radius: 10px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  margin-top: 0.2rem;
  background: var(--light-grey);
  color: var(--forest-green);
  outline: none;
  transition: border 0.2s;
}
.calc-form input[type="number"]:focus {
  border: 1.5px solid var(--leaf-green);
}
.calc-select {
  border: 1.5px solid var(--lawn-green);
  border-radius: 10px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  margin-top: 0.2rem;
  background: var(--light-grey);
  color: var(--forest-green);
  outline: none;
  transition: border 0.2s;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232e6b3d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  background-size: 1.2em;
  padding-right: 2.5rem;
}
.calc-select:focus {
  border: 1.5px solid var(--leaf-green);
}
.calc-guide-link {
  margin: 0.3rem 0;
  text-align: center;
  width: 100%;
}
.calc-result {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--lawn-green);
  border-radius: 10px;
  padding: 0.7rem 1rem;
  font-size: 1.08rem;
  color: var(--forest-green);
  margin: 0.5rem 0;
  font-family: 'Nunito', Arial, sans-serif;
}
.calc-form .checkbox-label {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: nowrap;
  width: 100%;
}
.calc-guide-link a {
  color: var(--leaf-green);
  font-size: 0.98rem;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.18s;
}
.calc-guide-link a:hover {
  color: var(--forest-green);
}
.price {
  font-weight: 900;
  font-size: 1.15rem;
  color: var(--forest-green);
}
.cta-btn {
  background: var(--leaf-green);
  color: var(--white);
  border: none;
  border-radius: 30px;
  padding: 0.85rem 2.2rem;
  font-size: 1.1rem;
  font-family: 'Nunito', Arial, sans-serif;
  font-weight: 900;
  box-shadow: 0 2px 8px rgba(46,107,61,0.12);
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  margin-top: 0.5rem;
}
.cta-btn:hover {
  background: var(--forest-green);
  box-shadow: 0 4px 16px rgba(46,107,61,0.18);
}
.features {
  background: var(--white);
  padding: 4rem 1.2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}
.features h2 {
  font-family: 'Poppins', 'Nunito', Arial, sans-serif;
  font-size: 1.8rem;
  color: var(--forest-green);
  margin-bottom: 2.5rem;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 1rem;
}
.feature-item {
  background: var(--light-grey);
  padding: 1.8rem;
  border-radius: 12px;
  text-align: left;
  transition: all 0.3s ease;
}
.feature-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(46,107,61,0.12);
  background: white;
}
.feature-item h3 {
  color: var(--forest-green);
  font-family: 'Nunito', Arial, sans-serif;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}
.feature-item p {
  color: var(--forest-green);
  font-size: 1rem;
  line-height: 1.5;
}
@media (max-width: 1000px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .features {
    padding: 3rem 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .features h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .feature-item {
    padding: 1.5rem;
  }
}
.about {
  background: var(--forest-green);
  padding: 4rem 1.2rem;
  text-align: center;
  color: white;
  margin: 3rem 0;
}
.about h2 {
  font-family: 'Poppins', 'Nunito', Arial, sans-serif;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: white;
}
.about p {
  max-width: 800px;
  margin: 0 auto 1.2rem auto;
  font-size: 1.15rem;
  line-height: 1.6;
  text-shadow: 0 1px 4px rgba(0,0,0,0.1);
}
.about blockquote {
  font-family: 'Nunito', Arial, sans-serif;
  font-size: 1.3rem;
  color: var(--lawn-green);
  margin-top: 2rem;
  font-style: italic;
  font-weight: 700;
}
@media (max-width: 600px) {
  .about {
    padding: 3rem 1rem;
  }
  
  .about h2 {
    font-size: 1.5rem;
  }
  
  .about p {
    font-size: 1.1rem;
  }
  
  .about blockquote {
    font-size: 1.2rem;
  }
}
.testimonials {
  background: var(--white);
  border-radius: 24px;
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem 1.2rem 1.5rem 1.2rem;
  box-shadow: 0 2px 12px rgba(46,107,61,0.06);
  text-align: center;
}
.testimonials h2 {
  font-family: 'Poppins', 'Nunito', Arial, sans-serif;
  font-size: 1.3rem;
  color: var(--forest-green);
  margin-bottom: 1.2rem;
}
.testimonial-gallery {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}
.testimonial-card {
  background: var(--lawn-green);
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(46,107,61,0.08);
  padding: 1.2rem 1rem 1rem 1rem;
  max-width: 260px;
  min-width: 180px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.testimonial-img {
  width: 100%;
  height: 80px;
  background: var(--leaf-green);
  border-radius: 12px;
  margin-bottom: 0.7rem;
  opacity: 0.3;
}
.testimonial-quote {
  font-size: 1rem;
  color: var(--forest-green);
  margin-bottom: 0.5rem;
}
.testimonial-name {
  font-size: 0.95rem;
  color: #3a5c3d;
  font-style: italic;
}
.contact {
  background: var(--white);
  border-radius: 24px;
  max-width: 900px;
  margin: 2.5rem auto 2rem auto;
  padding: 2rem 1.2rem 1.5rem 1.2rem;
  box-shadow: 0 2px 12px rgba(46,107,61,0.06);
  text-align: center;
}
.contact h2 {
  font-family: 'Poppins', 'Nunito', Arial, sans-serif;
  font-size: 1.3rem;
  color: var(--forest-green);
  margin-bottom: 1.5rem;
}
.contact-container {
  display: flex;
  gap: 2rem;
  align-items: stretch;
  min-height: 360px;
}
.contact-form-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
}
.contact-form input,
.contact-form textarea {
  border: 1.5px solid var(--lawn-green);
  border-radius: 12px;
  font-size: 1rem;
  font-family: 'Open Sans', Arial, sans-serif;
  background: var(--light-grey);
  color: var(--forest-green);
  outline: none;
  transition: border 0.2s;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border: 1.5px solid var(--leaf-green);
}
.contact-form input {
  padding: 0.8rem 1rem;
}
.contact-form textarea {
  flex-grow: 1;
  min-height: 140px;
  resize: vertical;
  padding: 1rem;
}
.contact-profiles {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
  height: 100%;
}
.profile-card {
  background: var(--light-grey);
  border-radius: 16px;
  padding: 1.5rem;
  width: 100%;
  max-width: 280px;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
.profile-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(46,107,61,0.1);
}
.profile-image {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  border: 3px solid var(--leaf-green);
  flex-shrink: 0;
}
.profile-image.mathias {
  /* Using placeholder color until we have the actual image */
  background-color: var(--lawn-green);
}
.profile-image.nikolaj {
  /* Using placeholder color until we have the actual image */
  background-color: var(--lawn-green);
}
.profile-info {
  text-align: left;
  flex-grow: 1;
}
.profile-info h3 {
  color: var(--forest-green);
  font-family: 'Nunito', Arial, sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.profile-phone {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--forest-green);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}
.profile-phone:hover {
  color: var(--leaf-green);
}
.contact-email {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding: 0.8rem;
  background: var(--light-grey);
  border-radius: 12px;
  width: 100%;
  max-width: 280px;
  margin-top: auto;
}
.contact-email a {
  color: var(--forest-green);
  text-decoration: none;
  transition: color 0.2s;
}
.contact-email a:hover {
  color: var(--leaf-green);
}
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    min-height: auto;
    gap: 1.5rem;
  }
  .contact-form textarea {
    min-height: 120px;
  }
  .contact-form .cta-btn {
    margin-top: 0.3rem;
  }
  .contact-profiles {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    height: auto;
  }
  .profile-card {
    padding: 1rem;
    min-width: 280px;
  }
  .profile-image {
    width: 70px;
    height: 70px;
  }
  .profile-info h3 {
    font-size: 1.1rem;
  }
  .contact-email {
    margin-top: 0.5rem;
  }
}
.hero-benefits {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}
.hero-benefits li {
  margin: 0.5rem 0;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  color: white;
  text-shadow: 0 1px 4px rgba(0,0,0,0.2);
  font-weight: 700;
  font-family: 'Nunito', Arial, sans-serif;
}
.hero-text p {
  margin-bottom: 1rem;
  font-size: 1.1em;
  color: white;
  text-shadow: 0 1px 4px rgba(0,0,0,0.2);
  font-weight: normal;
}
@media (max-width: 900px) {
  .hero-benefits {
    display: inline-block;
    text-align: left;
    margin: 1rem auto;
  }
  
  .hero-benefits li {
    font-size: 1em;
  }
  
  .hero-text p {
    font-size: 1em;
  }
}
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--white);
  cursor: pointer;
  opacity: 0.8;
  animation: bounce 2s infinite;
  transition: opacity 0.3s;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.scroll-text {
  font-family: 'Nunito', Arial, sans-serif;
  font-size: 1.1rem;
  text-align: center;
  text-shadow: 0 1px 4px rgba(0,0,0,0.2);
  white-space: nowrap;
}

.scroll-indicator:hover {
  opacity: 1;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(46,107,61,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-content {
  background: var(--white);
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(46,107,61,0.18);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  max-width: 500px;
  width: 95vw;
  position: relative;
  text-align: left;
}

.modal-close {
  position: absolute;
  top: 0.7rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--leaf-green);
  cursor: pointer;
  line-height: 1;
}

.modal-content h3 {
  font-family: 'Poppins', 'Nunito', Arial, sans-serif;
  font-size: 1.18rem;
  color: var(--forest-green);
  margin-bottom: 0.7rem;
}

.modal-body {
  font-size: 1rem;
  color: var(--forest-green);
}

.modal-body ol {
  padding-left: 1.2em;
  margin: 0;
}

.modal-body ol li {
  background: #f4f8f4;
  border-radius: 10px;
  margin-bottom: 0.7em;
  padding: 0.7em 1em;
  color: var(--forest-green);
  font-size: 1.04em;
  box-shadow: 0 1px 4px rgba(46,107,61,0.06);
  transition: background 0.2s;
  line-height: 1.5;
  list-style-position: inside;
}

.modal-body ol li:last-child {
  margin-bottom: 0;
}

.modal-body ol li a {
  color: var(--leaf-green);
  text-decoration: underline;
}

.modal-body ol li a:hover {
  color: var(--forest-green);
}

@media (max-width: 600px) {
  .modal-content {
    max-width: 98vw;
    padding: 1.2rem 0.5rem 1rem 0.5rem;
    font-size: 0.98rem;
  }
}

.modal-footer {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(46,107,61,0.1);
}

.modal-footer .cta-btn {
  background: var(--leaf-green);
  color: var(--white);
  border: none;
  border-radius: 30px;
  padding: 0.85rem 2.2rem;
  font-size: 1.1rem;
  font-family: 'Nunito', Arial, sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 2px 8px rgba(46,107,61,0.12);
}

.modal-footer .cta-btn:hover {
  background: var(--forest-green);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(46,107,61,0.18);
}

.footer {
  background: var(--forest-green);
  color: white;
  padding: 0.8rem 2rem;
  margin-top: 4rem;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.footer-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-section span {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
}

.footer-divider {
  width: 1px;
  height: 20px;
  background: rgba(255,255,255,0.2);
  margin: 0 0.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  transition: background-color 0.2s;
  white-space: nowrap;
  font-size: 0.95rem;
  color: white;
  text-decoration: none;
}

.social-link:hover {
  background-color: rgba(255,255,255,0.1);
}

.contact-icon {
  vertical-align: middle;
  opacity: 0.9;
}

.footer-section a {
  color: white;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-section a:hover {
  color: var(--lawn-green);
}

.footer-bottom {
  text-align: center;
  margin-top: 0.8rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 0.85rem;
  opacity: 0.8;
}

.footer-bottom p {
  margin: 0;
}

@media (max-width: 800px) {
  .footer {
    padding: 0.8rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .footer-section span {
    flex-wrap: wrap;
    justify-content: center;
    line-height: 1.8;
  }
  
  .social-link {
    justify-content: center;
  }
}

@media (max-width: 900px) {
  .calculator-card {
    max-width: 95%;
    padding: 1.2rem;
  }
}
</style>
