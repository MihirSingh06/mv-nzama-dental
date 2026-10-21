/* ===== PRACTICE DETAILS (edit here) ===== */
const PRACTICE = {
  email: "gawu@medi.co.za",
  whatsapp: "27818115426",          // international format, digits only
  whatsappDisplay: "081 811 5426",
  instagram: "https://www.instagram.com/mvnzama/",
  instagramHandle: "@mvnzama",
  // Self-service booking in the practice's MyKIT system (one link for both branches)
  bookingUrl: "https://appointments.mykit.co.za/?bhf=9500197",
  montclair: {
    name: "Montclair",
    phone: "031 462 1723",
    address: "139 Montclair Road, Montclair, Durban, 4004",
    addressShort: "139 Montclair Road",
    mapQuery: "139 Montclair Road, Montclair, Durban 4004"
  },
  umlazi: {
    name: "Umlazi",
    phone: "031 909 1848",
    address: "Umlazi AA Medical Centre, 235 Simelane Drive, Umlazi",
    addressShort: "235 Simelane Drive",
    mapQuery: "235 Simelane Drive, Umlazi, Durban"
  },
  // Paste the Google review link from the practice's Google Business Profile
  // ("Get more reviews" > share link). The button stays hidden while this is empty.
  reviewUrl: ""
};
/* ======================================== */

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const enc = encodeURIComponent;
const get = path => path.split(".").reduce((o, k) => o[k], PRACTICE);

$$("[data-bind]").forEach(el => el.textContent = get(el.dataset.bind));
$$("[data-tel]").forEach(el => el.href = "tel:" + PRACTICE[el.dataset.tel || "montclair"].phone.replace(/\s/g,""));
$$("[data-mail]").forEach(el => el.href = "mailto:" + PRACTICE.email);
$$("[data-book]").forEach(el => el.href = PRACTICE.bookingUrl);
$$("[data-ig]").forEach(el => el.href = PRACTICE.instagram);
$$("[data-wa]").forEach(el =>
  el.href = `https://wa.me/${PRACTICE.whatsapp}?text=${enc("Hi, I'd like to know more / book an appointment at MV Nzama Dental.")}`);
$$("[data-map]").forEach(el => el.src = `https://www.google.com/maps?q=${enc(PRACTICE[el.dataset.map].mapQuery)}&output=embed`);
$$("[data-dir]").forEach(el => el.href = `https://www.google.com/maps/dir/?api=1&destination=${enc(PRACTICE[el.dataset.dir].mapQuery)}`);
$$(".yr").forEach(el => el.textContent = new Date().getFullYear());
if(PRACTICE.reviewUrl) $$(".review").forEach(el => { el.href = PRACTICE.reviewUrl; el.classList.add("on"); });

const menu = $("#menu"), menuBtn = $("#menuBtn");
const setMenu = open => { menu.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", open); menuBtn.textContent = open ? "✕" : "☰"; };
menuBtn.onclick = () => setMenu(!menu.classList.contains("open"));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));

/* privacy notice (draft: the practice should review this text) */
document.body.insertAdjacentHTML("beforeend", `
<dialog id="privacy">
  <h2>Privacy notice</h2>
  <p>MV Nzama Dental respects your privacy and handles personal information in line with the Protection of Personal Information Act (POPIA).</p>
  <h3>This website</h3>
  <p>This website has no forms and does not ask for your personal details. Maps and fonts on the page are loaded from Google.</p>
  <h3>Booking and contacting us</h3>
  <ul>
    <li>If you book online, you use our appointment system (MyKIT). The details you enter there go to our practice to manage your appointment.</li>
    <li>If you call, WhatsApp or email us, our practice staff receive your message through those services.</li>
  </ul>
  <p>We use your details only to arrange your visit and care. We do not sell your information or use it for marketing.</p>
  <h3>Your rights</h3>
  <p>You may ask to see, correct or delete the information we hold about you by contacting us on ${PRACTICE.montclair.phone} or ${PRACTICE.email}. If you have a complaint you can contact the Information Regulator of South Africa.</p>
  <h3>Health information</h3>
  <p>Please don't send detailed medical information by WhatsApp or email. Share that with us in person at your consultation.</p>
  <button class="btn btn-primary" type="button" id="closePrivacy">Close</button>
</dialog>`);
const dlg = $("#privacy");
$$("[data-privacy]").forEach(el => el.addEventListener("click", e => { e.preventDefault(); dlg.showModal(); }));
$("#closePrivacy").onclick = () => dlg.close();
dlg.addEventListener("click", e => { if(e.target === dlg) dlg.close(); });

/* lightbox: any [data-zoom] image, or a [data-zoom] wrapper around one */
const lb = $("#lb");
const zoom = img => { lb.firstElementChild.src = img.src; lb.firstElementChild.alt = img.alt; lb.classList.add("on"); };
if(lb){
  $$("[data-zoom]").forEach(el => el.addEventListener("click", () => zoom(el.tagName === "IMG" ? el : el.querySelector("img"))));
  lb.onclick = () => lb.classList.remove("on");
  document.addEventListener("keydown", e => { if(e.key === "Escape") lb.classList.remove("on"); });
}

/* reveal sections as they scroll into view */
const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.12});
$$(".rv").forEach(el => io.observe(el));
