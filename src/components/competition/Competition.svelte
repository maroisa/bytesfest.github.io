<script>
  import CompetitionItem from "./CompetitionItem.svelte";
  import CompetitionDaftar from "./CompetitionDaftar.svelte";

  let daftarActive = $state(false)
  
  function toggleDaftarActive() {
    daftarActive = !daftarActive
  }
  
</script>

<div class="bg-neutral-950 pb-20" id="competition">
  <div class="pt-36 text-center">
    <h1 class="mb-3 text-center text-xl font-semibold tracking-wide text-white sm:text-2xl md:mb-4 md:text-3xl lg:text-4xl">
      Bytes<span class="bg-gradient-to-r from-sky-500 to-cyan-300 bg-clip-text text-transparent">fest</span>
      Competition
      <span class="bg-gradient-to-r from-sky-500 to-cyan-300 bg-clip-text text-transparent">2025</span>
    </h1>
    <div class="mb-6 flex w-full justify-center md:mb-8">
      <div class="h-[3px] w-28 bg-sky-500"></div>
    </div>
    <p class="text-center text-xs text-sky-100">
      - GESER UNTUK INFO LOMBA LAINNYA -
    </p>
  </div>
  <div class="flex justify-center">
    <div class="carousel carousel-center rounded-box p-4 lg:max-w-2/3 lg:p-20 space-x-4">
      <CompetitionItem {toggleDaftarActive} title="Desain Web" image="/img/lomba desain web 2025.jpg">
        Desain Web merupakan Kompetisi perancangan tampilan sebuah web statis atau web yang informasi di
        dalamnya tidak dapat diubah kecuali jika diubah syntax-nya. Tema web yang diusung yaitu "Collaboration
        of Creativity" lomba ini diikuti oleh SMA sederajat dan mahasiswa yang berstatus aktif dari seluruh
        perguruan tinggi di Indonesia dengan jumlah maksimal 3 orang per kelompok
      </CompetitionItem>
      <CompetitionItem {toggleDaftarActive} title="Poster" image="/img/lomba poster 2025.jpg">
        Poster merupakan kompetisi di bidang grafis yang dapat diikuti oleh SMA sederajat dan mahasiswa yang
        berstatus aktif dari seluruh perguruan tinggi di Indonesia. Tema yang diangkat adalah
        "Celebrating Diverse Skills”. Lomba ini bertujuan sebagai wadah untuk mengembangkan kreativitas dan
        kemampuan dalam mendesain.
      </CompetitionItem>
      <CompetitionItem {toggleDaftarActive} title="Futsal" image="/img/lomba futsal 2025.jpg">
        Lomba futsal adalah turnamen atau kompetisi olahraga yang sangat populer dan menghibur yang memungkinkan
        para pemain untuk menunjukkan keterampilan sepak bola mereka dalam lingkungan yang kompetitif. Tim-tim
        futsal terbaik dari seluruh SMA/SMK/MA Sederajat Se-Solo Raya akan bersaing untuk mendapatkan gelar
        juara Bytesfest. Mereka akan membuktikan keterampilan futsal mereka yang spektakuler di lapangan dan
        mengejar gelar juara!
      </CompetitionItem>
      <CompetitionItem {toggleDaftarActive} title="Esai" image="/img/lomba esai 2025.jpg">
        Lomba Esai Nasional BYTESFEST 2025 merupakan kompetisi penulisan ilmiah populer yang terbuka bagi
        pelajar SMA/SMK dan mahasiswa seluruh Indonesia. Tahun ini, lomba mengusung tema “Strategi Inovatif
        Generasi Muda dalam Mendorong Transformasi Digital untuk Masa Depan Berkelanjutan,” yang mengajak
        peserta menggali peran pemuda dalam menciptakan solusi digital yang efisien, adaptif, dan berorientasi
        jangka panjang. Kegiatan ini dilaksanakan secara daring dengan rangkaian pendaftaran dua gelombang,
        pengumpulan karya, penjurian, serta penentuan juara dan “Best Paper”.
      </CompetitionItem>
    </div>
  </div>
</div>
<CompetitionDaftar {daftarActive} {toggleDaftarActive} />