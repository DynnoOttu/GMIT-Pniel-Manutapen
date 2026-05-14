import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function HomePage() {
  const upcomingService = {
    title: "Ibadah Minggu Umum",
    date: "Minggu, 17 Mei 2026",
    startTime: "08:00 WITA",
    endTime: "10:00 WITA",
    theme: "Nama Baik Lebih Berharga Daripada Kekayaan",
    preacher: "Pdt. Dhayana Babys-Fhunu, S.Si",
    additionalNotes: "Jemaat diharapkan hadir 15 menit sebelum ibadah dimulai.",
    liturgyUrl: "#",
    bulletinUrl: "#",
  };

  const devotionals = [
    {
      id: 1,
      title: "Belajar Percaya Dalam Segala Situasi",
      verse: "Amsal 3:5-6",
      youtubeUrl: "#",
    },
    {
      id: 2,
      title: "Kasih Tuhan Tidak Pernah Gagal",
      verse: "Ratapan 3:22-23",
      youtubeUrl: "#",
    },
    {
      id: 3,
      title: "Tetap Setia Melayani",
      verse: "Galatia 6:9",
      youtubeUrl: "#",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Persekutuan Pemuda Jumat",
      description:
        "Persekutuan pemuda dilaksanakan hari Jumat pukul 19.00 WITA.",
    },
    {
      id: 2,
      title: "Latihan Paduan Suara",
      description:
        "Latihan paduan suara dilaksanakan setiap Sabtu pukul 17.00 WITA.",
    },
    {
      id: 3,
      title: "Pelayanan Diakonia",
      description:
        "Bagi jemaat yang ingin terlibat pelayanan diakonia dapat menghubungi admin gereja.",
    },
  ];

  const gallery = [
    "/assets/images/gallery/pniel-manutapen-1.jpg",
    "/assets/images/gallery/pniel-manutapen-2.jpg",
    "/assets/images/gallery/pniel-manutapen-3.jpg",
    "/assets/images/gallery/pniel-manutapen-4.jpg",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[url('https://res.cloudinary.com/deevvbquc/image/upload/v1778745221/WhatsApp_Image_2025-02-26_at_18.55.39_f9135155_pj0ykk.jpg')] bg-cover bg-center bg-no-repeat text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/90 via-[#121212]/75 to-[#121212]/50" />

        <div className="relative z-10 min-h-screen">
          <Navbar />

          <div className="container max-w-[1130px] mx-auto pt-[120px] pb-[120px] flex flex-col gap-[40px]">
            <div className="max-w-[700px] flex flex-col gap-6">
              <div className="inline-flex w-fit bg-[#7C66FF]/20 border border-[#7C66FF]/30 backdrop-blur-md px-5 py-3 rounded-full">
                <p className="text-[#D6CCFF] font-medium">
                  GMIT Pniel Manutapen
                </p>
              </div>

              <h1 className="font-extrabold text-[64px] leading-[74px] drop-shadow-2xl">
                Bertumbuh Bersama Dalam Kasih Kristus
              </h1>

              <p className="text-lg leading-[34px] text-gray-200">
                Selamat datang di website resmi GMIT Pniel Manutapen. Temukan
                jadwal ibadah, renungan harian, warta jemaat, dan berbagai
                informasi pelayanan gereja.
              </p>

              <div className="flex gap-4">
                <Link
                  href="#jadwal-ibadah"
                  className="bg-[#5B3DF5] hover:bg-[#4B30D4] transition-all duration-300 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg shadow-[#5B3DF5]/30"
                >
                  Lihat Jadwal Ibadah
                </Link>

                <Link
                  href="#renungan"
                  className="border border-white/30 backdrop-blur-md hover:bg-white/10 transition-all duration-300 px-6 py-4 rounded-2xl font-semibold"
                >
                  Renungan Harian
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[24px] p-5">
                  <p className="text-[#C7BBFF] text-sm">Ibadah Minggu</p>

                  <p className="text-white font-bold text-xl mt-2">
                    08.00 WITA
                  </p>

                  <p className="text-gray-300 text-sm mt-1">
                    Gedung Utama GMIT Pniel
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[24px] p-5">
                  <p className="text-[#C7BBFF] text-sm">Tema Minggu Ini</p>

                  <p className="text-white font-bold text-xl mt-2">
                    Nama Baik Lebih Berharga
                  </p>

                  <p className="text-gray-300 text-sm mt-1">Amsal 22 : 1</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[24px] p-5">
                  <p className="text-[#C7BBFF] text-sm">Pelayan Firman</p>

                  <p className="text-white font-bold text-xl mt-2">
                    Pdt. Dhayana Babys
                  </p>

                  <p className="text-gray-300 text-sm mt-1">
                    GMIT Pniel Manutapen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JADWAL IBADAH */}
      <section
        id="jadwal-ibadah"
        className="bg-gradient-to-b from-[#F7F7FB] to-white py-[100px]"
      >
        <div className="container max-w-[1130px] mx-auto flex flex-col gap-10">
          <div className="text-center">
            <h2 className="font-bold text-[40px] text-[#121212]">
              Informasi Kebaktian Utama
            </h2>

            <p className="text-gray-500 mt-3">
              Informasi ibadah minggu dan pelayanan gereja
            </p>
          </div>

          <div className="bg-white rounded-[32px] shadow-[0_10px_40px_rgba(91,61,245,0.08)] p-10 border border-[#ECE8FF] flex flex-col gap-8">
            <div className="flex justify-between items-center flex-wrap gap-5">
              <div>
                <p className="text-gray-500">Jadwal Ibadah</p>

                <h3 className="font-bold text-[32px] text-[#121212]">
                  {upcomingService.title}
                </h3>
              </div>

              <div className="bg-[#EEE9FF] text-[#5B3DF5] px-6 py-4 rounded-2xl font-semibold">
                {upcomingService.date}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F7F7FB] border border-[#ECE8FF] rounded-2xl p-5">
                <p className="text-gray-500">Jam Ibadah</p>

                <p className="font-bold text-xl text-[#121212] mt-2">
                  {upcomingService.startTime} -{upcomingService.endTime}
                </p>
              </div>

              <div className="bg-[#F7F7FB] border border-[#ECE8FF] rounded-2xl p-5">
                <p className="text-gray-500">Tema Firman</p>

                <p className="font-bold text-xl text-[#121212] mt-2">
                  {upcomingService.theme}
                </p>
              </div>

              <div className="bg-[#F7F7FB] border border-[#ECE8FF] rounded-2xl p-5">
                <p className="text-gray-500">Pelayan Firman</p>

                <p className="font-bold text-xl text-[#121212] mt-2">
                  {upcomingService.preacher}
                </p>
              </div>

              <div className="bg-[#F7F7FB] border border-[#ECE8FF] rounded-2xl p-5">
                <p className="text-gray-500">Keterangan</p>

                <p className="font-medium text-[#121212] mt-2">
                  {upcomingService.additionalNotes}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={upcomingService.liturgyUrl}
                className="bg-[#121212] hover:bg-black transition-all duration-300 text-white px-6 py-4 rounded-2xl font-semibold"
              >
                Download Liturgi
              </Link>

              <Link
                href={upcomingService.bulletinUrl}
                className="bg-[#5B3DF5] hover:bg-[#4B30D4] transition-all duration-300 text-white px-6 py-4 rounded-2xl font-semibold"
              >
                Download Warta Jemaat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RENUNGAN */}
      <section id="renungan" className="bg-[#F7F7FB] py-[100px]">
        <div className="container max-w-[1130px] mx-auto flex flex-col gap-10">
          <div className="text-center">
            <h2 className="font-bold text-[40px] text-[#121212]">
              Renungan Harian
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {devotionals.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#ECE8FF] rounded-[24px] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="rounded-2xl overflow-hidden h-[220px]">
                  <Image
                    src="/assets/images/thumbnail/devotional.jpg"
                    alt="thumbnail"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[#5B3DF5] font-semibold">{item.verse}</p>

                  <h3 className="font-bold text-2xl text-[#121212]">
                    {item.title}
                  </h3>
                </div>

                <Link
                  href={item.youtubeUrl}
                  className="bg-[#5B3DF5] hover:bg-[#4B30D4] transition-all duration-300 text-white px-5 py-3 rounded-xl text-center font-semibold"
                >
                  Tonton Renungan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PENGUMUMAN */}
      <section className="bg-white py-[100px]">
        <div className="container max-w-[1130px] mx-auto flex flex-col gap-10">
          <div className="text-center">
            <h2 className="font-bold text-[40px] text-[#121212]">Pengumuman</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements.map((item) => (
              <div
                key={item.id}
                className="bg-[#F7F7FB] border border-[#ECE8FF] rounded-[24px] p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-bold text-2xl text-[#121212]">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8 mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section className="bg-[#121212] text-white py-[100px]">
        <div className="container max-w-[1130px] mx-auto flex flex-col gap-10">
          <div className="text-center flex flex-col gap-3">
            <h2 className="font-bold text-[40px]">Tentang Gereja</h2>

            <p className="text-gray-300 max-w-[800px] mx-auto leading-8">
              GMIT Pniel Manutapen adalah komunitas orang percaya yang bertumbuh
              dalam iman, kasih, dan pelayanan untuk memuliakan Tuhan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[24px] p-8">
              <h3 className="font-bold text-2xl mb-4">Visi</h3>

              <p className="leading-8 text-gray-300">
                Menjadi jemaat yang menghadirkan kasih Kristus dan menjadi
                berkat bagi masyarakat.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[24px] p-8">
              <h3 className="font-bold text-2xl mb-4">Misi</h3>

              <ul className="list-disc ml-5 leading-8 text-gray-300">
                <li>Membimbing jemaat bertumbuh dalam iman.</li>

                <li>Membangun persekutuan yang saling mengasihi.</li>

                <li>Melayani masyarakat dengan kasih Kristus.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-gradient-to-b from-white to-[#F7F7FB] py-[100px]">
        <div className="container max-w-[1130px] mx-auto flex flex-col gap-10">
          <div className="text-center">
            <h2 className="font-bold text-[40px] text-[#121212]">
              Gallery Gereja
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[24px] h-[250px] group relative shadow-md"
              >
                <Image
                  src={item}
                  alt="gallery"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F0F12] text-white py-[80px] border-t border-white/10">
        <div className="container max-w-[1130px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl">GMIT Pniel Manutapen</h3>

            <p className="text-gray-400 leading-8">
              Jl. Pniel No. 3, Manutapen, Kecamatan Alak, Kota Kupang, Nusa
              Tenggara Timur
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Kontak</h3>

            <p className="text-gray-400">(0380) 8444786</p>

            <p className="text-gray-400">pnielmanutapen@gmail.com</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Social Media</h3>

            <p className="text-gray-400">Instagram: @gmitpnielmanutapen</p>

            <p className="text-gray-400">YouTube: GMIT Pniel Manutapen</p>
          </div>
        </div>

        <p className="text-center mt-10 text-gray-500 border-t border-white/10 pt-8">
          © 2026 GMIT Pniel Manutapen. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
