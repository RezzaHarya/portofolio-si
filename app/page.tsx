import Image from "next/image";
// Import ikon yang dibutuhkan
import { SiLaravel, SiMysql, SiNextdotjs, SiTypescript, SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail, MdArrowForward } from "react-icons/md"; 

export default function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-text">
          <h1 style={{ fontSize: '60px', marginBottom: '20px' }}>
            Hi, Saya <br />
            <span className="text-gradient">Rezza Alfat</span> 👋
          </h1>

          {/* PERBAIKAN: Ditambahkan margin: '0 auto' agar teks max-500px ini mau ke tengah */}
          <p style={{ 
            fontSize: '18px', 
            color: '#a1a1aa', 
            maxWidth: '500px', 
            lineHeight: '1.8',
            margin: '0 auto 30px auto' // Update di sini
          }}>
            Mahasiswa Sistem Informasi yang fokus pada pengembangan
            aplikasi web modern. Spesialis dalam arsitektur skalabel menggunakan ekosistem 
            <span style={{color: '#38bdf8', fontWeight: 'bold'}}> Laravel & MySQL</span>.
          </p>

          {/* Skill Badges */}
          <div className="skill-badges">
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SiLaravel color="#FF2D20" /> Laravel
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SiMysql color="#4479A1" /> MySQL
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SiNextdotjs color="white" /> Next.js
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SiTypescript color="#3178C6" /> TypeScript
            </span>
          </div>
          
          {/* TOMBOL */}
          <div className="hero-btn">
            <a href="/projects" className="btn-neon">
              Lihat Project <MdArrowForward size={20} />
            </a>
            
            <a href="https://github.com/RezzaHarya" className="btn-dark">
              <SiGithub size={20} /> GitHub
            </a>
          </div>
        </div>

        <Image
          src="/profile.jpg"
          alt="Rezza"
          width={350}
          height={350}
          className="profile-img"
        />
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Rezza Alfat. All rights reserved.</p>
        
        <div className="social-links">
          <a href="https://instagram.com/zzaref.al_?igsh=MXNnZDV3MnB3MWgzNA==" target="_blank" rel="noopener noreferrer">
            <SiInstagram size={24} />
          </a>
          <a href="https://github.com/RezzaHarya" target="_blank" rel="noopener noreferrer">
            <SiGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/rezza-alfat-3ba29736b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <SiLinkedin size={24} />
          </a>
          <a href="mailto:rezzaalfat@gmail.com">
            <MdEmail size={26} />
          </a>
        </div>
      </footer>
    </>
  );
}