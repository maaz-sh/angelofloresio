import { useRef } from 'react'
import './About.css'

function About() {
  const eduRef = useRef<HTMLDivElement>(null)

  function scrollEdu(dir: 'left' | 'right') {
    eduRef.current?.scrollBy({ left: dir === 'right' ? 250 : -250, behavior: 'smooth' })
  }

  return (
    <div className="container py-5">
      <h2>About</h2>
      <p className="mt-3">
        My name is Angelo Flores. I am a developer and this is my home website.
        I'm currently embarking on a journey to return to the technology field.
      </p>

      <hr className="my-5" />

      <section className="stack-section">
        <h2>Stack</h2>
        <p className="mt-1 mb-3 text-white" style={{ fontSize: '0.9rem' }}>Technologies I've worked on.</p>

        <div className="stack-row">
          <h3 className="stack-category">FRONTEND</h3>
          <div className="stack-chips">
            {/* React */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="20" height="20" aria-hidden="true">
                <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
              React
            </button>

            {/* HTML5 */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" aria-hidden="true">
                <path fill="#e34f26" d="M71 460 30 0h452l-41 460-185 52z"/>
                <path fill="#ef652a" d="M256 472l149-41 35-394H256z"/>
                <path fill="#fff" d="M256 208h-75l-5-58h80V92H114l14 150h128zm0 136-64-17-4-49h-58l8 91 118 33z"/>
                <path fill="#ebebeb" d="M256 208v58h70l-7 74-63 17v60l118-33 9-101 9-75zm0-116v58h137l-4-58z"/>
              </svg>
              HTML
            </button>

            {/* Vue */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69" width="20" height="18" aria-hidden="true">
                <path fill="#41b883" d="M161.1 0 130.88 53.35 100.66 0H0l130.88 226.69L261.76 0z"/>
                <path fill="#34495e" d="M161.1 0l-30.22 53.35L100.66 0H52.44l78.44 135.87L209.32 0z"/>
              </svg>
              Vue
            </button>

            {/* Vite */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410 404" width="18" height="18" aria-hidden="true">
                <path fill="#41d1ff" d="M399.5 60.5 215 375.5c-4 7-14 7-18 0L12.5 60.5c-4.4-7.4.9-16.5 9.5-16.5h368c8.6 0 13.9 9.1 9.5 16.5z" opacity=".8"/>
                <path fill="#bd34fe" d="M292 44 205 375.5 118 44l87-44z"/>
                <path fill="#41d1ff" d="M292 44l107.5 16.5-87 87z" opacity=".5"/>
                <path fill="#bd34fe" d="M118 44L10.5 60.5l87 87z" opacity=".5"/>
                <path fill="#fff" d="M205 375.5l-87-228h174z" opacity=".2"/>
              </svg>
              Vite
            </button>

            {/* TypeScript */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="18" height="18" aria-hidden="true">
                <rect width="400" height="400" rx="50" fill="#3178c6"/>
                <path fill="#fff" d="M227 154v35h-66v183h-41V189H54v-35zm34 87c0-8 6-15 17-15 10 0 16 5 19 13l36-12c-8-20-28-33-55-33-34 0-58 20-58 49 0 55 78 46 78 75 0 9-7 16-20 16-14 0-22-8-26-20l-38 13c9 24 31 37 64 37 37 0 62-20 62-50 0-58-79-49-79-73z"/>
              </svg>
              TypeScript
            </button>

            {/* Next.js */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="18" height="18" aria-hidden="true">
                <circle cx="90" cy="90" r="90" fill="#fff"/>
                <path fill="#000" d="M149.5 154.4 69.2 50H50v79.9h15.8V70.5l72.6 93.7a90.5 90.5 0 0 0 11.1-9.8z"/>
                <path fill="#000" d="M115 50h16v80h-16z"/>
              </svg>
              NextJS
            </button>

            {/* CSS */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" aria-hidden="true">
                <path fill="#264de4" d="M71 460 30 0h452l-41 460-185 52z"/>
                <path fill="#2965f1" d="M256 472l149-41 35-394H256z"/>
                <path fill="#fff" d="M256 308l-63-17-4-45h-56l8 89 115 32v-59zm0-154h65l-4 49-61 17v57l115-32 8-91 2-22H141l8 119h107v-97z"/>
                <path fill="#ebebeb" d="M256 308v59l62-17 6-63H256zm0-211v57h125l-2 22H256v57h117l-11 121-106 29v59l115-32 17-192 2-21 11-120z"/>
              </svg>
              CSS
            </button>
          </div>
        </div>

        <div className="stack-row">
          <h3 className="stack-category">BACKEND &amp; INFRASTRUCTURE</h3>
          <div className="stack-chips">
            {/* Java */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="18" aria-hidden="true">
                <path fill="#e76f00" d="M165 314s-17 10 12 13c35 4 53 3 92-4 0 0 10 6 24 12-86 37-194-2-128-21zm-11-55s-19 14 10 17c37 4 66 4 116-6 0 0 7 7 18 11-103 30-218 2-144-22z"/>
                <path fill="#e76f00" d="M250 174c21 24-5 46-5 46s53-27 29-61c-23-31-40-47 54-100 0 0-147 37-78 115z"/>
                <path fill="#e76f00" d="M365 357s13 10-14 18c-50 15-208 20-252 1-16-7 14-17 23-19 10-2 15-2 15-2-17-12-112 24-48 34 164 27 299-12 276-32zm-193-96s-79 19-28 26c22 3 65 2 105-1 33-3 66-9 66-9s-12 5-20 10c-81 21-237 12-192-10 38-19 69-16 69-16zm142 80c82-43 44-84 18-78-6 1-9 3-9 3s2-4 7-5c50-18 89 52-17 79 0 0 1-1 1-2z"/>
                <path fill="#e76f00" d="M286 6s45 46-43 116c-71 56-16 88 0 124-41-37-71-70-51-100 29-46 110-68 94-140z"/>
                <path fill="#5383a1" d="M299 436c79 4 200-2 203-32 0 0-6 14-65 25-67 12-149 11-198 3 0 0 10 8 60 4z"/>
              </svg>
              Java
            </button>

            {/* Python */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 255" width="18" height="18" aria-hidden="true">
                <defs>
                  <linearGradient id="pyTop" x1="12%" y1="12%" x2="75%" y2="88%">
                    <stop offset="0" stop-color="#387EB8"/>
                    <stop offset="1" stop-color="#366994"/>
                  </linearGradient>
                  <linearGradient id="pyBot" x1="25%" y1="12%" x2="88%" y2="88%">
                    <stop offset="0" stop-color="#FFE052"/>
                    <stop offset="1" stop-color="#FFC331"/>
                  </linearGradient>
                </defs>
                <path fill="url(#pyTop)" d="M126.9 0C62 0 66 27 66 27l.1 28h62v8H41S0 58 0 128s35 67 35 67h21V167s-1-35 34-35h60s33 1 33-32V34s5-34-57-34zm-33 19a11 11 0 1 1 0 22 11 11 0 0 1 0-22z"/>
                <path fill="url(#pyBot)" d="M129 255c65 0 61-27 61-27l-.1-28H128v-8h87s41 5 41-65-35-67-35-67h-21v28s1 35-34 35H106s-33-1-33 32v54s-5 34 57 34zm33-19a11 11 0 1 1 0-22 11 11 0 0 1 0 22z"/>
              </svg>
              Python
            </button>

            {/* Node.js */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 289" width="16" height="18" aria-hidden="true">
                <path fill="#539e43" d="M128 288a16 16 0 0 1-8-2l-25-15c-4-2-2-3-1-3 5-2 6-2 11-5l1-1 19 12a2 2 0 0 0 2 0l77-45a2 2 0 0 0 1-2V72a2 2 0 0 0-1-2l-77-44a2 2 0 0 0-2 0L49 70a2 2 0 0 0-1 2v89a2 2 0 0 0 1 2l21 12c11 6 18-1 18-8V80a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v95c0 16-9 25-24 25-5 0-9 0-19-5l-20-12a16 16 0 0 1-8-14V72a16 16 0 0 1 8-14l77-44a17 17 0 0 1 16 0l77 44a16 16 0 0 1 8 14v145a16 16 0 0 1-8 14l-77 45a16 16 0 0 1-8 2z"/>
                <path fill="#539e43" d="M152 204c-34 0-41-15-41-28a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2c1 9 5 14 28 14 17 0 25-4 25-13 0-5-2-9-28-12-22-3-35-9-35-25 0-17 14-27 38-27 26 0 39 9 41 28a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2c-3-11-9-15-28-15-20 0-22 7-22 12 0 6 3 8 27 12 24 3 36 9 36 25 0 18-15 28-41 28z"/>
              </svg>
              NodeJS
            </button>

            {/* MySQL */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18" aria-hidden="true">
                <ellipse cx="32" cy="13" rx="26" ry="8" fill="#00618a"/>
                <path fill="#00618a" d="M6 13v10c0 4.4 11.6 8 26 8s26-3.6 26-8V13c-4 3-14.4 5-26 5S10 16 6 13z"/>
                <path fill="#e48e00" d="M6 23v10c0 4.4 11.6 8 26 8s26-3.6 26-8V23c-4 3-14.4 5-26 5S10 26 6 23z"/>
                <path fill="#00618a" d="M6 33v10c0 4.4 11.6 8 26 8s26-3.6 26-8V33c-4 3-14.4 5-26 5S10 36 6 33z"/>
              </svg>
              MySQL
            </button>

            {/* Spring Boot */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="18" height="18" aria-hidden="true">
                <circle cx="30" cy="30" r="28" fill="#6db33f"/>
                {/* Power button arc */}
                <path fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round"
                  d="M20 18 A16 16 0 1 0 40 18"/>
                {/* Power button stem */}
                <line x1="30" y1="12" x2="30" y2="26" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              Spring Boot
            </button>

            {/* C# */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
                <rect width="18" height="18" rx="3" fill="#9b4f96"/>
                <text x="9" y="13" text-anchor="middle"
                      font-size="9" font-weight="700" font-family="Arial, sans-serif"
                      fill="#fff">C#</text>
              </svg>
              C#
            </button>

            {/* Kafka */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="18" height="18" aria-hidden="true">
                {/* Central node */}
                <circle cx="20" cy="20" r="4" fill="#fff"/>
                {/* Top node */}
                <circle cx="20" cy="5"  r="3.5" fill="none" stroke="#fff" strokeWidth="1.5"/>
                {/* Bottom node */}
                <circle cx="20" cy="35" r="3.5" fill="none" stroke="#fff" strokeWidth="1.5"/>
                {/* Left node */}
                <circle cx="5"  cy="20" r="3.5" fill="none" stroke="#fff" strokeWidth="1.5"/>
                {/* Right node */}
                <circle cx="35" cy="20" r="3.5" fill="none" stroke="#fff" strokeWidth="1.5"/>
                {/* Lines from centre to outer nodes */}
                <line x1="20" y1="16" x2="20" y2="8.5"  stroke="#fff" strokeWidth="1.5"/>
                <line x1="20" y1="24" x2="20" y2="31.5" stroke="#fff" strokeWidth="1.5"/>
                <line x1="16" y1="20" x2="8.5" y2="20"  stroke="#fff" strokeWidth="1.5"/>
                <line x1="24" y1="20" x2="31.5" y2="20" stroke="#fff" strokeWidth="1.5"/>
              </svg>
              Kafka
            </button>
          </div>
        </div>

        <div className="stack-row">
          <h3 className="stack-category">CLOUD</h3>
          <div className="stack-chips">
            {/* AWS */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 48" width="26" height="18" aria-hidden="true">
                {/* Orange cloud body */}
                <path fill="#ff9900" d="M52 20c0-1 0-2-1-3a12 12 0 0 0-23-3 8 8 0 0 0-12 7 9 9 0 0 0 2 18h33a9 9 0 0 0 1-19z"/>
                {/* AWS text inside cloud */}
                <text x="32" y="27" textAnchor="middle" fontSize="11" fontWeight="900"
                      fontFamily="Arial Black, Arial, sans-serif" fill="#fff">AWS</text>
              </svg>
              AWS
            </button>

            {/* GCP */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18" aria-hidden="true">
                {/* Cloud shape */}
                <path fill="#4285f4" d="M38 16c-5 0-9 3-11 7-1-1-3-1-5-1-6 0-10 4-10 10s4 10 10 10h30c5 0 9-4 9-9s-4-9-9-9c0 0 0-8-14-8z"/>
                {/* Red/yellow/green/blue dots - GCP brand colours */}
                <circle cx="20" cy="52" r="4" fill="#ea4335"/>
                <circle cx="32" cy="52" r="4" fill="#fbbc04"/>
                <circle cx="44" cy="52" r="4" fill="#34a853"/>
              </svg>
              GCP
            </button>
          </div>
        </div>

        <div className="stack-row">
          <h3 className="stack-category">AI, COPILOTS &amp; SDKS</h3>
          <div className="stack-chips">
            {/* Claude */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="18" height="18" aria-hidden="true">
                <circle cx="20" cy="20" r="19" fill="#d97757"/>
                {/* Anthropic / Claude "A" mark — simplified rising sun rays */}
                <g fill="#fff">
                  <rect x="19" y="7"  width="2" height="9"  rx="1" transform="rotate(0   20 20)"/>
                  <rect x="19" y="7"  width="2" height="7"  rx="1" transform="rotate(40  20 20)"/>
                  <rect x="19" y="7"  width="2" height="5"  rx="1" transform="rotate(80  20 20)"/>
                  <rect x="19" y="7"  width="2" height="5"  rx="1" transform="rotate(-40 20 20)"/>
                  <rect x="19" y="7"  width="2" height="7"  rx="1" transform="rotate(-80 20 20)"/>
                </g>
              </svg>
              Claude
            </button>

            {/* OpenAI */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" width="18" height="18" aria-hidden="true">
                <path fill="#fff" d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-7.505-3.360 10.079 10.079 0 0 0-9.612 6.977 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 7.504 3.359 10.078 10.078 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.813zM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496zM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103L16.759 33.1a7.505 7.505 0 0 1-10.368-2.094zm-2.301-16.484A7.469 7.469 0 0 1 7.997 10.9c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L7.044 24.4a7.504 7.504 0 0 1-2.953-9.878zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l7.847 4.528a7.505 7.505 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.446-1.01zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l7.924-4.573a7.505 7.505 0 0 1 11.26 7.69zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.505 7.505 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.5v4.999l-4.331 2.5-4.331-2.5V19.902z"/>
              </svg>
              OpenAI
            </button>

            {/* Copilot */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="18" height="18" aria-hidden="true">
                <defs>
                  <linearGradient id="cpl-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#2ec8ee"/>
                    <stop offset="50%"  stopColor="#1b7fe3"/>
                    <stop offset="100%" stopColor="#1251aa"/>
                  </linearGradient>
                  <linearGradient id="cpl-warm" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#f5a800"/>
                    <stop offset="40%"  stopColor="#e6355a"/>
                    <stop offset="100%" stopColor="#9b4fff"/>
                  </linearGradient>
                </defs>
                {/* Blue/teal ribbon — top-left wing */}
                <path fill="url(#cpl-blue)"
                  d="M20 4
                     C13 4 7 9 6 16
                     L6 21 C6 23 8 25 11 25
                     L16 25 C18 25 19 24 19 22
                     L19 19 C19 17 20 16 22 15
                     L31 11
                     C28 7 24 4 20 4Z"/>
                {/* Orange/purple ribbon — bottom-right wing */}
                <path fill="url(#cpl-warm)"
                  d="M20 36
                     C27 36 33 31 34 24
                     L34 19 C34 17 32 15 29 15
                     L24 15 C22 15 21 16 21 18
                     L21 21 C21 23 20 24 18 25
                     L9 29
                     C12 33 16 36 20 36Z"/>
              </svg>
              Copilot
            </button>

            {/* JDK */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="18" height="18" aria-hidden="true">
                {/* Java duke hat — simplified */}
                <path fill="#e76f00" d="M20 3 L30 12 L28 14 L20 7 L12 14 L10 12 Z"/>
                {/* Coffee cup */}
                <rect x="10" y="16" width="16" height="13" rx="2" fill="#e76f00"/>
                <path fill="#e76f00" d="M26 20 Q34 20 34 24 Q34 28 26 28 V26 Q31 26 31 24 Q31 22 26 22 Z"/>
                <rect x="10" y="29" width="16" height="2.5" rx="1" fill="#5383a1"/>
                <text x="18" y="26" textAnchor="middle" fontSize="8" fontWeight="900"
                      fontFamily="Arial Black, Arial, sans-serif" fill="#fff">JDK</text>
              </svg>
              JDK
            </button>
          </div>
        </div>

        <div className="stack-row">
          <h3 className="stack-category">TOOLS, ECT</h3>
          <div className="stack-chips">
            {/* Git */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" width="18" height="18" aria-hidden="true">
                <path fill="#f34f29" d="M90.2 41.6 50.4 1.8a6.1 6.1 0 0 0-8.6 0l-8.5 8.5 10.8 10.8a7.2 7.2 0 0 1 9.1 9.2l10.4 10.4a7.2 7.2 0 1 1-4.3 4.1L49.1 34.6v26.7a7.2 7.2 0 1 1-5.9-.2V34.1a7.2 7.2 0 0 1-3.9-9.4L28.6 13.9 1.8 40.7a6.1 6.1 0 0 0 0 8.6l39.8 39.8a6.1 6.1 0 0 0 8.6 0l40-40a6.1 6.1 0 0 0 0-8.5z"/>
              </svg>
              Git
            </button>

            {/* GitHub */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" width="18" height="18" aria-hidden="true">
                <path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M49 0C21.9 0 0 22 0 49.2c0 21.8 14 40.2 33.4 46.7 2.4.5 3.3-1.1 3.3-2.4v-8.4c-13.5 3-16.3-6.5-16.3-6.5-2.2-5.6-5.4-7.1-5.4-7.1-4.4-3 .3-3 .3-3 4.9.4 7.4 5 7.4 5 4.3 7.4 11.3 5.3 14 4 .4-3.1 1.7-5.3 3-6.5-10.8-1.2-22.1-5.4-22.1-24 0-5.3 1.9-9.6 5-13-.5-1.3-2.2-6.2.5-12.9 0 0 4.1-1.3 13.4 5a46.6 46.6 0 0 1 24.4 0c9.3-6.4 13.4-5 13.4-5 2.7 6.7 1 11.6.5 12.9 3.1 3.4 5 7.7 5 13 0 18.6-11.3 22.7-22.1 23.9 1.7 1.5 3.3 4.5 3.3 9v13.3c0 1.3.8 2.9 3.3 2.4C84 89.4 98 71 98 49.2 98 22 76.1 0 49 0z"/>
              </svg>
              GitHub
            </button>

            {/* Bash */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18" aria-hidden="true">
                {/* Outer hexagon — light outline */}
                <polygon points="32,3 58,17 58,47 32,61 6,47 6,17"
                  fill="#e8e8e8" stroke="#c8c8c8" strokeWidth="1.5"/>
                {/* Dark right face of the 3-D cube */}
                <polygon points="32,3 58,17 58,47 32,33"
                  fill="#2b2b2b"/>
                {/* Lighter left face */}
                <polygon points="32,3 6,17 6,47 32,33"
                  fill="#f2f2f2"/>
                {/* Bottom face */}
                <polygon points="6,47 32,33 58,47 32,61"
                  fill="#d0d0d0"/>
                {/* $ sign on dark face */}
                <text x="47" y="34" textAnchor="middle"
                      fontSize="16" fontWeight="700"
                      fontFamily="monospace, Courier New"
                      fill="#ffffff">$</text>
                {/* Green underscore/dash on dark face */}
                <rect x="38" y="40" width="10" height="2.5" rx="1" fill="#4eaa25"/>
              </svg>
              Bash
            </button>

            {/* GitLab */}
            <button className="tech-chip" type="button" tabIndex={-1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 586 559" width="18" height="18" aria-hidden="true">
                <path fill="#e24329" d="M293 559l107-329H186z"/>
                <path fill="#fc6d26" d="M293 559L186 230H34z"/>
                <path fill="#fca326" d="M34 230L4 324a20 20 0 0 0 7 22l282 213z"/>
                <path fill="#e24329" d="M34 230h152L120 68c-5-17-29-17-34 0z"/>
                <path fill="#fc6d26" d="M293 559l107-329h152z"/>
                <path fill="#fca326" d="M552 230l30 94a20 20 0 0 1-7 22L293 559z"/>
                <path fill="#e24329" d="M552 230H400l66-162c5-17 29-17 34 0z"/>
              </svg>
              GitLab
            </button>
          </div>
        </div>
      </section>

      <hr className="my-5" />

      <section className="stack-section">
        <h2>Education</h2>
        <p className="mt-1 mb-3 text-white" style={{ fontSize: '0.9rem' }}>Academic background and certifications.</p>

        <div className="edu-carousel-wrapper">
          <div className="edu-carousel" ref={eduRef}>

            <div className="edu-card edu-card--green-river">
              <div className="edu-card-overlay">
                <span className="edu-card-title">Green River Community College</span>
                <span className="edu-card-years">2005 – 2012</span>
              </div>
            </div>

            <div className="edu-card edu-card--olympic">
              <div className="edu-card-overlay">
                <span className="edu-card-title">Olympic College</span>
                <span className="edu-card-years">2013 – 2016</span>
              </div>
            </div>

            <div className="edu-card edu-card--uw">
              <div className="edu-card-overlay">
                <span className="edu-card-title">University of Washington</span>
                <span className="edu-card-years">2016 – 2017</span>
              </div>
            </div>

            <div className="edu-card edu-card--smu">
              <div className="edu-card-overlay">
                <span className="edu-card-title">Saint Martin's University</span>
                <span className="edu-card-years">2017 – 2018</span>
              </div>
            </div>

          </div>
        </div>

        <div className="cert-row">
          <div className="cert-card cert-card--coursera">
            <span className="cert-title">Neural Networks and Deep Learning</span>
          </div>
          <div className="cert-card cert-card--coursera">
            <span className="cert-title">Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization</span>
          </div>
          <div className="cert-card cert-card--mos">
            <span className="cert-title">Microsoft Office Specialist Master Certification (MOS)</span>
          </div>
        </div>

      </section>
    </div>
  )
}

export default About
