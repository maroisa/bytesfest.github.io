
# ⚠️ Informasi Branch Repository

## Status Branch `master`
Branch **`master` TIDAK DIGUNAKAN** dan **TIDAK AKTIF** untuk pengembangan maupun deployment.

Branch ini hanya berfungsi sebagai:
- Placeholder
- Arsip
- Referensi umum repository

❌ **Jangan melakukan commit, merge, atau deployment dari branch `master`.**

---

## ✅ Branch Aktif (Per Tahun)

Pengembangan proyek dilakukan menggunakan **branch tahunan**, dengan format:
bytesfestYYYY

### Daftar Branch:
- [`bytesfest2022`](https://github.com/bytesfest/bytesfest.github.io/tree/bytesfest2022)
- [`bytesfest2023`](https://github.com/bytesfest/bytesfest.github.io/tree/bytesfest2023)
- [`bytesfest2024`](https://github.com/bytesfest/bytesfest.github.io/tree/bytesfest2024)
- [`bytesfest2025`](https://github.com/bytesfest/bytesfest.github.io/tree/bytesfest2025)
- [`bytesfest2026`](https://github.com/bytesfest/bytesfest.github.io/tree/bytesfest2026)

📌 **Setiap tahun akan bertambah satu branch baru** dengan pola yang sama.

---

## ✅ Aturan Penggunaan
- Selalu gunakan **branch sesuai tahun berjalan**
- Jangan menggabungkan (merge) ke `master`
- Update, bugfix, dan fitur **hanya** dikerjakan di branch tahun terkait

Contoh:
- Tahun 2026 → gunakan **`bytesfest2026`**
- Tahun 2027 → akan dibuat **`bytesfest2027`**

---

## 🌐 Pengaturan GitHub Pages (WAJIB Saat Branch Baru Dibuat)

Setiap kali membuat **branch tahunan baru**, lakukan pengaturan **GitHub Pages** sebagai berikut:

1. Buka **Repository → Settings → Pages**
2. Pada bagian **Source**:
   - Branch: **branch bytesfest terbaru** (contoh: `bytesfest2026`)
   - Folder: `/ (root)` atau `/docs` (sesuai struktur project)
3. Klik **Save**
4. Pastikan website berhasil build dan publish tanpa error

⚠️ **GitHub Pages HARUS selalu menunjuk ke branch bytesfest terbaru**,  
bukan ke `master`.

---

## ❓ Pertanyaan
Jika ragu memilih branch atau membutuhkan branch baru:
- Hubungi maintainer repository

---

⚠️ **Peringatan:**  
Perubahan pada branch yang salah dapat menyebabkan konflik, kegagalan build, atau kesalahan deployment.
