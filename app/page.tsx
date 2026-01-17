import Image from "next/image";
// Import ikon yang dibutuhkan (Instagram, GitHub, LinkedIn, Email)
import { SiLaravel, SiMysql, SiNextdotjs, SiTypescript, SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail, MdArrowForward } from "react-icons/md"; // Tambah panah untuk tombol


export default function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-text">
          <h1 style={{ fontSize: '60px', marginBottom: '20px' }}>
            Hi, Saya <br />
            {/* Nama diberi efek gradasi */}
            <span className="text-gradient">Rezza Alfat</span> 👋
          </h1>

          <p style={{ fontSize: '18px', color: '#a1a1aa', maxWidth: '500px', lineHeight: '1.8' }}>
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
          
          {/* TOMBOL BARU */}
          <div className="hero-btn">
            {/* Tombol Neon dengan Panah */}
            <a href="/projects" className="btn-neon">
              Lihat Project <MdArrowForward size={20} />
            </a>
            
            {/* Tombol GitHub Dark */}
            <a href="https://github.com/username" className="btn-dark">
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

      {/* --- BAGIAN FOOTER BARU --- */}
      <footer className="footer">
        <p>© 2026 Rezza Alfat. All rights reserved.</p>
        
        {/* Ikon Sosial Media (Urutan: IG, Github, LinkedIn, Email) */}
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