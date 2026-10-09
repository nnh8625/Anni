/* ==========================================================
   CẤU HÌNH - CHỈ CẦN SỬA PHẦN NÀY LÀ XONG
   ========================================================== */
const CONFIG = {
  name1: "Nam Hào",
  name2: "Thành Nguyên",

  // Ngày bắt đầu yêu: năm-tháng-ngày giờ:phút (giờ Việt Nam)
  startDate: "2025-10-10T00:00:00",

  // Nhạc nền (tùy chọn): bỏ file mp3 vào thư mục này rồi điền tên, vd "music.mp3". Để "" nếu không dùng.
  music: "",

  // Các cột mốc. Thêm/bớt tùy ý.
  timeline: [
    { date: "Ngày đầu để ý anh", title: "Lần đầu em để ý anh là lúc học thể chất ở công viên", text: "" },
    { date: "Thân nhau", title: "Bắt đầu thân nhau", text: "Kể từ lúc học Nhiệttt." },
        { date: "Chuyến đi đầu tiên", title: "Chuyến đi cùng nhau", text: "Mình đi Đà Lạt chung nè, không phải 1 mà là 3" },
    { date: "10/10/2025", title: "Chính thức bên nhau", text: "Ngày em nói lời yêu và bắt đầu câu chuyện của hai đứa." },
    { date: "Hôm nay", title: "1 năm yêu thương", text: "Cảm ơn vì đã ở bên em suốt một năm qua. Mong còn nhiều năm nữa." }
  ],

  // Ảnh: bỏ ảnh vào thư mục "photos" rồi điền tên file. Chưa có ảnh thì sẽ hiện ô màu hồng.
  photos: [
    { src: "photos/photos1.jpg.jpg", caption: "Lần đầu mình chụp chung" },
    { src: "photos/photos2.jpg", caption: "Em thích tối nàyyyyy" },
    { src: "photos/photos3.jpg", caption: "Chuyến đi đáng nhớ" },
    { src: "photos/photos4.jpg", caption: "Anh cườiii" },
    { src: "photos/photos5.jpg", caption: "Những bữa ăn chung" },
    { src: "photos/photos6.jpg", caption: "2 đứa mình và 4 cái bóng" },
    { src: "photos/photos7.jpg", caption: "Đi Lò còoooo" },
    { src: "photos/photos8.jpg", caption: "Xem Phùng Khánh Linhhh" },
    { src: "photos/photos9.jpg", caption: "Đi Phan Thiếttt " },
    { src: "photos/photos10.jpg", caption: "Học bàiiii" },
    { src: "photos/photos11.jpg", caption: "Đi quán cà phê mà anh dẫn nyc đi trước đó" },
    { src: "photos/photos12.jpg", caption: "Ở nhà anhhhhh" },
    { src: "photos/photos13.jpg", caption: "Học bài (again)"},
    { src: "photos/photos14.jpg", caption: "Học bài (again)"},
    { src: "photos/photos15.jpg", caption: "Tró NH"}
  ],

  // Những lý do yêu
  reasons: [
    "Vì anh luôn khiến em cười, kể cả những ngày mệt nhất.",
    "Vì anh lắng nghe em, kể cả khi anh nói xàmmmm.",
    "Vì ở bên anh, em thấy bình yên.",
    "Vì anh chịu khó làm chung với em trong nhiều chuyện",
    "Vì anh chỉ bài emmmmmm",
    "Vì anh cố gắng mỗi ngày, và em tự hào về anh.",
    "Vì nụ cười của anh là điều đẹp nhất em từng thấy.",
    "Vì anh là chính anh, và em yêu từng điều nhỏ bé ấy.",
    "Vì anh làm cho những điều bình thường trở nên đặc biệt.",
    "Vì anh chở em đi học nè.",
    "Vì anh lúc nào cũng khen em cho dù em hong có zzz.",
    "Vì anh hay ăn chung dí em, mấy món mà em thích như chân gà, lạp xưởng nướng đá,....",
    "Vì có anh, tương lai trở nên đáng mong chờ."
  ],

  // Thư tình: mỗi phần tử là một đoạn
  letter: {
    to: "Gửi người em thương,",
    paragraphs: [
      "Một năm rồi, cũng không ngắn không dài nhưng đủ để em cảm nhận được cái gọi là tình yêu. Từ vui, hạnh phúc, xúc động,.. đến những lúc mình giận, cãi nhau vì những chuyện nhỏ xíu",
      "Cảm ơn anh vì đã kiên nhẫn với những lần em hay quên, những lần em giận vu vơ, và cả những lần em chưa đủ tốt. Anh luôn chọn ở lại và thương em nhiều hơn.",
      "Em không hứa sẽ hoàn hảo, nhưng em hứa sẽ luôn cố gắng cải thiện bản thân, để mỗi năm tiếp theo của tụi mình đều đáng nhớ hơn năm trước.",
      "Yêu anh nhìuuuuuu."
    ],
    sign: "Boanh"
  },

  finale: "Cảm ơn vì một năm tuyệt vời."
};

/* ==========================================================
   PHẦN MÃ - KHÔNG CẦN SỬA
   ========================================================== */
const $ = (id) => document.getElementById(id);
const pad = (n) => String(n).padStart(2, "0");

// --- Tên & ngày ---
const start = new Date(CONFIG.startDate);
$("name1").textContent = CONFIG.name1;
$("name2").textContent = CONFIG.name2;
$("startLabel").textContent = `${pad(start.getDate())}/${pad(start.getMonth() + 1)}/${start.getFullYear()}`;
$("finaleText").textContent = CONFIG.finale;
document.title = `${CONFIG.name1} & ${CONFIG.name2} - 1 năm yêu thương`;

// --- Đồng hồ đếm ---
function diffParts(from, to) {
  let y = to.getFullYear() - from.getFullYear();
  let m = to.getMonth() - from.getMonth();
  let d = to.getDate() - from.getDate();
  let h = to.getHours() - from.getHours();
  let mi = to.getMinutes() - from.getMinutes();
  let s = to.getSeconds() - from.getSeconds();
  if (s < 0) { s += 60; mi--; }
  if (mi < 0) { mi += 60; h--; }
  if (h < 0) { h += 24; d--; }
  if (d < 0) { d += new Date(to.getFullYear(), to.getMonth(), 0).getDate(); m--; }
  if (m < 0) { m += 12; y--; }
  return { y, m, d, h, mi, s };
}

function tick() {
  const now = new Date();
  if (now < start) return;
  const p = diffParts(start, now);
  $("c-years").textContent = p.y;
  $("c-months").textContent = p.m;
  $("c-days").textContent = p.d;
  $("c-hours").textContent = pad(p.h);
  $("c-minutes").textContent = pad(p.mi);
  $("c-seconds").textContent = pad(p.s);
  $("totalDays").textContent = Math.floor((now - start) / 86400000).toLocaleString("vi-VN");
}
tick();
setInterval(tick, 1000);

// --- Timeline ---
$("timelineList").innerHTML = CONFIG.timeline.map((t) => `
  <li class="tl-item reveal">
    <div class="tl-date">${esc(t.date)}</div>
    <h3>${esc(t.title)}</h3>
    <p>${esc(t.text)}</p>
  </li>`).join("");

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// --- Gallery + lightbox ---
function photoInner(p) {
  // Ảnh lỗi/chưa có thì tự ẩn, để lộ nền hồng + biểu tượng tim
  return `<img src="${esc(p.src)}" alt="${esc(p.caption)}" loading="lazy" onerror="this.remove()">`;
}
$("galleryGrid").innerHTML = CONFIG.photos.map((p, i) => `
  <button class="ph reveal" data-i="${i}" aria-label="${esc(p.caption)}">♥${photoInner(p)}<span class="cap">${esc(p.caption)}</span></button>
`).join("");

let lbIndex = 0;
function openLb(i) {
  lbIndex = (i + CONFIG.photos.length) % CONFIG.photos.length;
  const p = CONFIG.photos[lbIndex];
  $("lbImg").innerHTML = "♥" + photoInner(p);
  $("lbCap").textContent = p.caption;
  $("lightbox").hidden = false;
}
$("galleryGrid").addEventListener("click", (e) => {
  const b = e.target.closest(".ph");
  if (b) openLb(+b.dataset.i);
});
$("lbClose").onclick = () => ($("lightbox").hidden = true);
$("lbPrev").onclick = () => openLb(lbIndex - 1);
$("lbNext").onclick = () => openLb(lbIndex + 1);
$("lightbox").addEventListener("click", (e) => { if (e.target === $("lightbox")) $("lightbox").hidden = true; });
document.addEventListener("keydown", (e) => {
  if ($("lightbox").hidden) return;
  if (e.key === "Escape") $("lightbox").hidden = true;
  if (e.key === "ArrowLeft") openLb(lbIndex - 1);
  if (e.key === "ArrowRight") openLb(lbIndex + 1);
});

// --- Lý do yêu (xoay vòng, không lặp cho đến khi hết) ---
let pool = [], shown = 0;
$("reasonBtn").onclick = () => {
  if (!pool.length) pool = [...CONFIG.reasons].sort(() => Math.random() - 0.5);
  const card = $("reasonCard");
  $("reasonText").textContent = pool.pop();
  card.classList.remove("pop");
  void card.offsetWidth;
  card.classList.add("pop");
  shown++;
  $("reasonCount").textContent = `${shown} lý do đã mở - còn nhiều lắm, em kể không hết đâu`;
  burst(window.innerWidth / 2, window.innerHeight * 0.5, 14);
};

// --- Thư ---
let letterOpened = false;
function openLetter() {
  if (letterOpened) return;
  letterOpened = true;
  $("envelope").style.display = "none";
  const paper = $("paper");
  paper.hidden = false;
  $("letterTo").textContent = CONFIG.letter.to;
  const body = $("letterBody");
  body.classList.add("cursor");
  typeParagraphs(body, CONFIG.letter.paragraphs, () => {
    body.classList.remove("cursor");
    $("letterSign").textContent = CONFIG.letter.sign;
  });
  paper.scrollIntoView({ behavior: "smooth", block: "center" });
}
function typeParagraphs(root, paras, done) {
  let pi = 0, ci = 0, el = null;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  (function step() {
    if (pi >= paras.length) return done();
    if (!el) { el = document.createElement("p"); root.appendChild(el); }
    if (reduce) { el.textContent = paras[pi]; pi++; el = null; return step(); }
    el.textContent = paras[pi].slice(0, ++ci);
    if (ci >= paras[pi].length) { pi++; ci = 0; el = null; setTimeout(step, 450); }
    else setTimeout(step, 28);
  })();
}
$("envelope").onclick = openLetter;
$("envelope").addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLetter(); } });

// --- Tim bay ---
const heartsEl = $("hearts");
function spawnHeart() {
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = Math.random() > 0.3 ? "♥" : "♡";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 10 + Math.random() * 20 + "px";
  h.style.setProperty("--drift", (Math.random() * 120 - 60) + "px");
  h.style.setProperty("--rot", (Math.random() * 60 - 30) + "deg");
  h.style.animationDuration = 9 + Math.random() * 8 + "s";
  heartsEl.appendChild(h);
  setTimeout(() => h.remove(), 18000);
}
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(spawnHeart, 900);

// --- Confetti trái tim ---
const cv = $("confetti"), cx = cv.getContext("2d");
let parts = [], raf = null;
function fit() { cv.width = innerWidth; cv.height = innerHeight; }
fit(); addEventListener("resize", fit);
function burst(x, y, n = 80) {
  const colors = ["#e5566d", "#ff8fa3", "#ffd6dc", "#d9a45b", "#c2384f"];
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, v = 3 + Math.random() * 7;
    parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 4, g: 0.18, s: 10 + Math.random() * 14, c: colors[i % colors.length], life: 90 + Math.random() * 50 });
  }
  if (!raf) raf = requestAnimationFrame(draw);
}
function draw() {
  cx.clearRect(0, 0, cv.width, cv.height);
  parts = parts.filter((p) => p.life-- > 0);
  for (const p of parts) {
    p.vy += p.g; p.x += p.vx; p.y += p.vy; p.vx *= 0.99;
    cx.globalAlpha = Math.min(1, p.life / 30);
    cx.fillStyle = p.c;
    cx.font = p.s + "px serif";
    cx.fillText("♥", p.x, p.y);
  }
  cx.globalAlpha = 1;
  raf = parts.length ? requestAnimationFrame(draw) : null;
  if (!raf) cx.clearRect(0, 0, cv.width, cv.height);
}
$("surpriseBtn").onclick = (e) => {
  const r = e.target.getBoundingClientRect();
  const x = r.left + r.width / 2, y = r.top;
  burst(x, y, 120);
  setTimeout(() => burst(innerWidth * 0.25, innerHeight * 0.6, 70), 250);
  setTimeout(() => burst(innerWidth * 0.75, innerHeight * 0.6, 70), 450);
};

// --- Hiện dần khi cuộn ---
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// --- Nhạc nền ---
if (CONFIG.music) {
  const audio = $("bgm"), btn = $("musicBtn");
  audio.src = CONFIG.music;
  btn.hidden = false;
  audio.addEventListener("error", () => (btn.hidden = true));
  btn.onclick = () => {
    if (audio.paused) { audio.play().then(() => btn.classList.add("on")).catch(() => {}); }
    else { audio.pause(); btn.classList.remove("on"); }
  };
}
