import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="section">
      <Image
        src="/profile.jpg"
        alt="Rezza"
        width={180}
        height={180}
        style={{ borderRadius: "50%" }}
      />

      <h1>Tentang Saya</h1>

      <p>
        Saya merupakan mahasiswa Sistem Informasi Angkatan 2024 UNIVERSITAS AMIKOM YOGYAKARTA, saya memiliki
        ketertarikan yang besar dalam pengembangan aplikasi web modern. Di sisi lain saya juga memiliki minat dalam
        Data Science dan Machine Learning. Dengan keahlian saya yang sudah mencoba untuk mengerjakan pengembangan web dan pembelajaran Data Science,
        saya berkomitmen untuk terus belajar dan mengembangkan keterampilan saya di bidang teknologi informasi.
        Saya berharap dapat memberikan kontribusi yang berarti dalam dunia teknologi melalui karya-karya saya.
      </p>
    </main>
  );
}