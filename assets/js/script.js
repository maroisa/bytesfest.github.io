// ketika melakukan scrolling, beri background pada navigation
const navbar = document.querySelector(".navigation");
const mybutton = document.getElementById("btn-back-to-top");
const modalSubmission = document.getElementById("modal-submission");
const modalDaftar = document.getElementById("modal-daftar");

const countDownDay = document.getElementById("countDownDay");
const countDownHour = document.getElementById("countDownHour");
const countDownMinute = document.getElementById("countDownMinute");
const countDownSecond = document.getElementById("countDownSecond");

const linkLomba = {
  web: {
    registrasi: "https://docs.google.com/forms/d/e/1FAIpQLSdWc_JHOPzmnIUEacKaEK_l0Vkw4j1Hy_eMFIpUwK_r9DTVow/viewform",
    konfirmasi: "https://api.whatsapp.com/send?phone=6289519694775&text=*~%20Konfirmasi%20Pembayaran%20Lomba%20Desain%20Web%20%7C%20Bytefest%202024%20~*%0A%0ANama%20%3A%20%0AAsal%20Sekolah%2FUniversitas%2FInstansi%20%3A%20%0ABayar%20Via%20(Dana%2FSeaBank)%20%3A%0A%0A_(Sertakan%20bukti%20transaksi%20pembayaran)_",
	guidebook: "https://drive.google.com/file/d/1yQOFwr6ptQqnJ5HdLNKDzXAffs65ttq8/view"
  },
  poster: {
    registrasi: "https://docs.google.com/forms/d/e/1FAIpQLScA_7TAQhJbWoqjqhqjJ9J0QffCGRxUBYvWJ0XcLnNeoputNw/viewform",
    konfirmasi: "https://api.whatsapp.com/send?phone=6281233329103&text=*Konfirmasi%20Pembayaran%20Lomba%20Poster%202024*%0A%0A%0ANama%3A%20%0AAsal%20Sekolah%3A%20%0ABayar%20via%3A%20(rekening%2Fnomor)%0ABukti%20Pembayaran%20%3A%0A%0A%0ATerima%20kasih%20%F0%9F%98%8A%F0%9F%98%8E",
	guidebook: "https://drive.google.com/file/d/1yVT8j1xjLef-r1HN_Iu_AeXOPz_pe_iH/view"
  },
  ml: {
    registrasi: "https://docs.google.com/forms/d/e/1FAIpQLSdirt3DWzO3VRjKBbVHslrfuo_Fae-N43ej_aONtTYghwZ1sA/viewform",
    konfirmasi: "https://forms.gle/Ce5HHE9mqiykciGj6",
	guidebook: "https://drive.google.com/file/d/1z3rA9QSkjFXaCY-bZiXAWkCXzsCeH0II/view"
  },
  futsal: {
    registrasi: "https://docs.google.com/forms/d/1k-4EXf101HpOab8kxf2tTcCjv413QH5Wq-krAclGDkc/viewform?edit_requested=true",
    konfirmasi: "https://api.whatsapp.com/send/?phone=6282221782003&text=%0A%0A+++++++++++++++++++%2A%2AKONFIRMASI+PENDAFTARAN+LOMBA+FUTSAL+BYTESFEST+2024%2A%2A++++++++++++++++++%0A%0AHalo+Panitia+Bytesfest%2C%0A%0ADengan+pesan+ini%2C+kami+ingin+mengonfirmasi+pendaftaran+tim+futsal+sekolah+kami+untuk+acara+lomba+futsal+Bytesfest+2024.+Berikut+adalah+informasi+tim+kami%3A%0A%0A%2ANama+Sekolah%2A+%3A+%5Bisi+nama+sekolah%5D%0A%2ANama+Penanggung+Jawab%2FOfficial%2A+%3A+%5Bisi+nama+penanggung+jawab%5D%0A%2ANomor+Penanggung+Jawab%2FOfficial%2A+%3A+%5Bisi+nomor+penanggung+jawab%5D%0A%0ATerima+kasih+atas+perhatiannya.+Kami+menunggu+konfirmasi+selanjutnya+dari+pihak+panitia.%0A%0ABest+Regards%2C%0ATim+Futsal+%5Bisi+nama+sekolah%5D&type=phone_number&app_absent=0",
	guidebook: "https://drive.google.com/file/d/1yNaPjn7_KGG5SZ9OskSB5L5HspRL2ckS/view"
  },
  
};

const linkSubmission = {
  poster: "https://docs.google.com/forms/d/e/1FAIpQLSeGDJ37u5TS3OMmLh5Hald4FXhkxSw3D6fOsIF5pGDQU3JFIg/viewform",
  desweb: "https://docs.google.com/forms/d/e/1FAIpQLSfb0PX4iRhddHZ51QxHVU2yvazYb4G7tOg9bMl89yFX8_sMXA/viewform",
};

window.onscroll = function () {
  scrollFunction();
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("navbar-scrolling");
  } else {
    navbar.classList.remove("navbar-scrolling");
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.setProperty("display", "block", "important");
  } else {
    mybutton.style.setProperty("display", "none", "important");
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// init Swiper:
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 100,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  // autoplay: {
  // 	delay: 3000,
  // 	disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// navigation for mobile
let hamburgerMenu = document.querySelector("#hamburger");
let navigationMenu = document.querySelector("#navigation-menu");
let navigationMenuBg = navigationMenu.querySelector("ul");

// hamburger-line
const hamburgerLine1 = hamburgerMenu.querySelector("span:nth-child(1)");
const hamburgerLine2 = hamburgerMenu.querySelector("span:nth-child(2)");
const hamburgerLine3 = hamburgerMenu.querySelector("span:nth-child(3)");

hamburgerMenu.addEventListener("click", function () {
  setTimeout(() => {
    hamburgerLine1.classList.add("hamburger-line-1");
    hamburgerLine2.classList.add("hamburger-line-2");
    hamburgerLine3.classList.add("hamburger-line-3");
  }, 50);

  navigationMenu.classList.toggle("hidden");
  navigationMenu.classList.toggle("flex");
  setTimeout(() => {
    navigationMenu.classList.toggle("opacity-0");
    navigationMenu.classList.toggle("opacity-100");
    // setTimeout(() => {
    //   navigationMenuBg.classList.toggle("opacity-100");
    // }, 50);
  }, 100);
});

const countDownDate = new Date("Juli 30, 2024 00:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countDownDay.innerHTML = ("0" + days).slice(-2);
  countDownHour.innerHTML = ("0" + hours).slice(-2);
  countDownMinute.innerHTML = ("0" + minutes).slice(-2);
  countDownSecond.innerHTML = ("0" + seconds).slice(-2);

  if (distance < 0) {
    clearInterval(x);
    countDownDay.innerHTML = "00";
    countDownHour.innerHTML = "00";
    countDownMinute.innerHTML = "00";
    countDownSecond.innerHTML = "00";
  }
}, 1000);

const closeModal = () => {
  console.log("tes modal");
  modalDaftar.classList.toggle("opacity-100");
  modalDaftar.classList.toggle("opacity-0");
  setTimeout(() => {
    modalDaftar.classList.toggle("hidden");
  }, 300);
};

document.getElementById("backdrop").addEventListener("click", closeModal);
document.getElementById("close-button").addEventListener("click", closeModal);

const closeModalSubmission = () => {
  console.log("tes modal sub");
  modalSubmission.classList.toggle("opacity-100");
  modalSubmission.classList.toggle("opacity-0");
  setTimeout(() => {
    modalSubmission.classList.toggle("hidden");
  }, 300);
};

document
  .getElementById("backdrop-submission")
  .addEventListener("click", closeModalSubmission);
document
  .getElementById("close-button-submission")
  .addEventListener("click", closeModalSubmission);

  //const closeModalWebinar = () => {
	//console.log("tes modal sub");
	//modalWebinar.classList.toggle("opacity-100");
	//modalWebinar.classList.toggle("opacity-0");
	//setTimeout(() => {
	//  modalWebinar.classList.toggle("hidden");
	//}, 300);
  //};

  //document
  //.getElementById("backdrop-webinar")
  //.addEventListener("click", closeModalWebinar);

  //const closeModalRegistrasiWebinar = () => {
	//modalRegistrasiWebinar.classList.toggle("opacity-100");
	//modalRegistrasiWebinar.classList.toggle("opacity-0");
	//setTimeout(() => {
	//  modalRegistrasiWebinar.classList.toggle("hidden");
	//}, 300);
  //};

  //document
  //.getElementById("backdrop-registrasi-webinar")
  //.addEventListener("click", closeModalRegistrasiWebinar);
//document
  //.getElementById("close-button-registrasi-webinar")
  //.addEventListener("click", closeModalRegistrasiWebinar);

//function moreInfoWebinar() {
	//event.preventDefault();
  
	//modalWebinar.classList.toggle("hidden");
	//setTimeout(() => {
	 // modalWebinar.classList.toggle("opacity-0");
	 // modalWebinar.classList.toggle("opacity-100");
	//}, 100);
  //}

function goToGuidebook(lomba) {
	event.preventDefault();
	const link = linkLomba[lomba]['guidebook']
	if(link != "#") {
		window.open(link, "_blank");
	}
	
}

function daftarLomba(lomba) {
  event.preventDefault();

  console.log(linkLomba[lomba]);
  document
    .getElementById("btnRegistrasi")
    .setAttribute("href", linkLomba[lomba]["registrasi"]);
  document
    .getElementById("btnKonfirmasi")
    .setAttribute("href", linkLomba[lomba]["konfirmasi"]);
  modalDaftar.classList.toggle("hidden");
  setTimeout(() => {
    modalDaftar.classList.toggle("opacity-0");
    modalDaftar.classList.toggle("opacity-100");
  }, 100);
}

//function daftarWebinar() {
	//event.preventDefault();
  
	//modalRegistrasiWebinar.classList.toggle("hidden");
	//setTimeout(() => {
	  //modalRegistrasiWebinar.classList.toggle("opacity-0");
	  //modalRegistrasiWebinar.classList.toggle("opacity-100");
	//}, 100);
  //}

function submissionLomba() {
  event.preventDefault();
  document
    .getElementById("btnSubmissionPoster")
    .setAttribute("href", linkSubmission.Poster);
  document
    .getElementById("btnSubmissionDesainWeb")
    .setAttribute("href", linkSubmission.DesainWeb);
  modalSubmission.classList.toggle("hidden");
  setTimeout(() => {
    modalSubmission.classList.toggle("opacity-0");
    modalSubmission.classList.toggle("opacity-100");
  }, 100);
}

// SCRIPT DI BAWAH INI UNTUK LOAD ANIMATION START

// anime-js
// loading - animation - script

loadingText = document.querySelector(".loading-value");
loadingContainer = document.querySelector(".loading-container");
loadingValue = {
  progress: 0,
};

const loadingTimeline = anime.timeline({});

anime({
  targets: loadingValue,
  progress: 100,
  easing: "easeInQuad",
  duration: 800, // loading-duration
  round: 1,
  update: () => {
    loadingText.innerHTML = loadingValue.progress;
    anime({
      targets: ".loading-line",
      width: loadingValue.progress + "%",
      duration: 0,
    });
  },
  complete: () => {
    loadingContainer.classList.add("hidden");
  },
});

const proudlyPresentContainer = document.querySelector(
  ".proudly-present-container"
);
const proudlyPresentTitle = document.querySelector(".proudly-present-title");
const proudlyPresentSubtitle = document.querySelector(
  ".proudly-present-subtitle"
);

setTimeout(() => {
  proudlyPresentContainer.classList.remove("opacity-0");
  proudlyPresentContainer.classList.add("opacity-100");
}, 900);

// proudly-present-appear
setTimeout(() => {
  proudlyPresentTitle.classList.remove("opacity-0");
  proudlyPresentTitle.classList.add("opacity-100");
}, 900);
setTimeout(() => {
  proudlyPresentSubtitle.classList.remove("opacity-0");
  proudlyPresentSubtitle.classList.add("opacity-100");
}, 900);

// proudly-present-disappear
setTimeout(() => {
  proudlyPresentTitle.classList.remove("opacity-100");
  proudlyPresentTitle.classList.add("opacity-0");
}, 2500);
setTimeout(() => {
  proudlyPresentSubtitle.classList.remove("opacity-100");
  proudlyPresentSubtitle.classList.add("opacity-0");
}, 2500);

setTimeout(() => {
  proudlyPresentContainer.classList.add("hidden");
}, 3200);

// bytefest-title-state
const bytesfestStartContainer = document.querySelector(
  ".bytesfest-start-container"
);
setTimeout(() => {
  bytesfestStartContainer.classList.remove("opacity-0");
  bytesfestStartContainer.classList.add("opacity-100");
}, 3200);

const backdropBg = document.querySelector(".backdrop-bg");

setTimeout(() => {
  backdropBg.classList.remove("hidden");
}, 3200);
setTimeout(() => {
  backdropBg.classList.remove("backdrop-blur-lg");
  backdropBg.classList.add("backdrop-blur-0");
}, 3500);

const startAnimationBg = document.querySelector(".start-animation-bg");
const lightBg = document.querySelector(".light-bg");
setTimeout(() => {
  startAnimationBg.classList.add("hidden");
  lightBg.classList.add("opacity-0");
}, 5500);

setTimeout(() => {
  lightBg.classList.add("hidden");
}, 6000);
