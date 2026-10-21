// Dark Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Dark Mode";
Object.assign(toggleBtn.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "6px",
  border: "none",
  background: "#004080",
  color: "#fff",
});
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Scroll-to-top button
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆️";
Object.assign(scrollBtn.style, {
  position: "fixed",
  bottom: "70px",
  right: "20px",
  padding: "10px",
  borderRadius: "50%",
  border: "none",
  background: "#004080",
  color: "#fff",
  display: "none",
});
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Filter Riwayat Pendidikan dengan animasi smooth
const filterContainer = document.createElement("div");
filterContainer.style.textAlign = "center";
filterContainer.style.marginBottom = "15px";
filterContainer.innerHTML = `
  <button data-filter="all">Semua</button>
  <button data-filter="SD">SD</button>
  <button data-filter="SMP">SMP</button>
  <button data-filter="SMA">SMA</button>
  <button data-filter="Perguruan Tinggi">Kuliah</button>
`;
document.querySelector("#education h2").after(filterContainer);

filterContainer.querySelectorAll("button").forEach((btn) => {
  Object.assign(btn.style, {
    margin: "5px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    background: "#004080",
    color: "#fff",
    cursor: "pointer",
  });

  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    document.querySelectorAll("#education tbody tr").forEach((row) => {
      const match = filter === "all" || row.children[1].textContent === filter;
      if (match) {
        row.classList.remove("hide"); // fade-in
      } else {
        row.classList.add("hide"); // fade-out
      }
    });
  });
});

// Form kontak validasi
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`Terima kasih ${name}, pesanmu sudah terkirim!`);
    form.reset();
  } else {
    alert("Harap isi semua field dengan benar.");
  }
});

// Scroll reveal effect untuk semua section
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Konfirmasi saat klik kontak
document.querySelectorAll("#contact a").forEach((link) => {
  link.addEventListener("click", () => {
    const href = link.getAttribute("href");
    if (href.startsWith("tel:")) {
      alert("Menghubungi Vincent via WhatsApp...");
    } else if (href.includes("instagram.com")) {
      alert("Membuka Instagram Vincent...");
    } else if (href.startsWith("mailto:")) {
      alert("Mengirim email ke Vincent...");
    }
  });
});

// =====================
// Skills Section Animasi
// =====================

// Tombol skill interaktif + highlight saat klik
document.querySelectorAll("#skills .skill-buttons button").forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.15)";
    btn.style.boxShadow = "0 0 15px rgba(0,64,128,0.5)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  });
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("#skills .skill-buttons button")
      .forEach((b) => b.classList.remove("highlight"));
    btn.classList.add("highlight"); // animasi pulse
  });
});

// Pie chart muncul dengan fade-in saat discroll
const pieChart = document.querySelector("#skills .pie-chart");
const revealPieChart = () => {
  const rect = pieChart.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    pieChart.classList.add("visible", "fade-in");
  }
};
window.addEventListener("scroll", revealPieChart);
window.addEventListener("load", revealPieChart);
