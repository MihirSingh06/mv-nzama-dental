# MV Nzama Dental website

Static one-page website for MV Nzama Dental, a family-centred dental practice at 139 Montclair Road, Montclair, Durban 4004. Tagline: "We honour your trust". Built for the owner (Mihir) as a client project. No build step, no framework.

## Files
- `index.html` holds all HTML, CSS and JS. Practice details live in the `PRACTICE` object at the bottom of the file (email, phone, WhatsApp, address, map query, form endpoint, review URL).
- `images/` holds `waiting-room`, `surgery-1`, `reception`, `result-1`, `result-2` (all .jpg). `surgery-1` and `reception` were cropped to remove an Instagram profile bubble from the bottom corner.

## Page sections (in order)
Hero collage, "ways to book" strip, Treatments (incl. in-house surgeon group), "Everything under one roof" process band, Smile transformations (before/after), Tour (practice photos, click to enlarge), Team, Booking form, Map. The About section was removed at the doctor's request. Staff photos were removed on purpose, so do not re-add them.

## Booking
**Superseded (2026-10-21):** the request form, FormSubmit, the consent box and the "Send by WhatsApp/Email" buttons were removed. Booking is now MyKIT plus call/WhatsApp; see Round 3 below. The notes in this section are history.
- The form posts to FormSubmit (`https://formsubmit.co/ajax/melodious@medi.co.za`). **The first submission triggers an activation email to that address, and someone at the practice must click the link once**, otherwise requests never arrive.
- "Send by WhatsApp" opens wa.me with the message pre-filled. "Send by Email" opens a mailto.
- A consent tick box is required, and there is a POPIA privacy notice in a dialog. **The privacy text is a draft and the practice should review it.**
- Patients can also phone or walk in.

## Facts used (confirm with the practice)
- Phone 031 462 1723. WhatsApp 081 811 5426 (wa.me/27818115426). Email melodious@medi.co.za. All taken from their flyer.
- The flyer also lists 031 909 1848 and a second branch at 235 Simelane Drive, Umlazi. Both were left out because the client's message only mentions Montclair.
- Opening hours are unknown, so none are shown. Do not invent them.
- Ms Mngonyama is the Clinical Practitioner (5+ years). The in-house surgeon and the dental assistant are unnamed.
- The treatment list comes from the client's message. Flyer-only extras (braces, recementation of crowns) were not used.
- Do not add made-up statistics or claims.
- The before/after photos show real patients. Confirm consent before the site goes public.

## Deployment and accounts
- **Use the personal accounts only, never the pcg work account.** Git identity in this repo is set locally to Mihir Singh <Mihirsinghcs@gmail.com> and the global git identity is the work one. GitHub user: MihirSingh06. Vercel scope: mihirsingh06s-projects.
- Vercel project: `dental-website`. Production URL: https://dental-website-nu-seven.vercel.app. Redeploy with `npx vercel --prod` from this folder.
- **Status (end of session 1):** latest version deployed to Vercel and publicly reachable. The main link was public even while Vercel Authentication was on, and the owner has since disabled that setting, so every deployment URL is public. Anyone with the link can open the site and the booking form works for them. To hide it again before launch, take the deployment down or use paid Password Protection.
- Git remote `origin` is https://github.com/MihirSingh06/mv-nzama-dental.git. First push succeeded on 2026-10-19 (main tracks origin/main).
- The Vercel project was connected to the GitHub repo on 2026-10-19, but on 2026-10-21 a push to main did **not** trigger a deploy (no new deployment appeared). Round 3 went live via `npx vercel --prod --yes --scope mihirsingh06s-projects`. After each push, check `npx vercel ls dental-website --scope mihirsingh06s-projects` and deploy with the CLI if nothing new appears. Check the Git connection in the Vercel project settings.
- Pushing from Claude Code: the session sets GCM_INTERACTIVE=never and GIT_TERMINAL_PROMPT=0. Clearing them for the push command (`Remove-Item Env:GCM_INTERACTIVE, Env:GIT_TERMINAL_PROMPT, Env:GIT_ASKPASS`) lets Git Credential Manager use the saved personal login.
- The owner is waiting to be paid before going live, so do not publish the site or point a domain without checking.

## Still to do
- Turn off Vercel Authentication, activate FormSubmit and run a test booking on the live site.
- Push to GitHub. Connect the real domain (flyer says mvnzamadental.com, the guide site is mvnzamadental.co.za).
- Add the Google Business Profile review link to `PRACTICE.reviewUrl` (the review button stays hidden while it is empty).
- Add `og:image` and `og:url` once the domain is known (there is a TODO comment in `<head>`).
- Possible additions: FAQ section (needs the practice's answers on medical aid, pricing and walk-ins), testimonials, more before/after photos, exterior photo, equipment photos, a video tour, opening hours with an "open now" badge, a phone menu button (nav links are hidden under 820px), the Umlazi branch.

## Ideas saved for later
- Clearer "request received" confirmation panel (needs the practice's usual reply time).
- Accessibility pass: colour contrast, keyboard use, photo descriptions.
- isiZulu / English switch (translations must be checked by a native speaker).
- Umlazi branch: two location cards and maps, plus a "choose your branch" step in the form.
- Real booking calendar (Cal.com or Calendly free plan) if the practice wants patients to pick slots.
- Privacy-friendly visitor stats (Plausible or Cloudflare Analytics), including WhatsApp and call taps.
- FAQ, testimonials, more before/after photos, exterior and equipment photos, video tour, opening hours with an "open now" badge.
- End-to-end test of the booking form with the practice on a real phone before launch.

## Redesign (live since 2026-10-16)
The client said the site "reads like a blog", so it was redesigned to be more visual. The redesign is now index.html. Order: full-screen photo hero with booking options in a strip, Our Work (Before/During/After viewer plus a CTA, scaling result), treatments as two tile panels (general / in-house surgeon), steps on a photo background, full-width photo strip (tour), single team card, booking, map. It adds scroll reveal and respects reduced motion. The viewer uses `images/smile-before|during|after.jpg`, cut from `result-2.jpg`. The previous version is in git history.

## Done since first version
Phone menu button (hamburger under 820px), tooth favicon (inline SVG), red emergency bar at the top ("Toothache or swelling? Call us now").

## Checks done
Screenshots at about 390px (phone) and 820px (tablet) looked fine at the top of the page. Not tested on a real device. The map, the form submission, the WhatsApp and email buttons, and the lightbox were not tested.

## Design notes
Green palette from the practice's flyer (`--green` #2a9d44, `--green-dark` #1b6e30) with red and orange accents. Fonts: DM Serif Display and Inter (Google Fonts). Responsive breakpoints at 820px and 700px.


## Round 2 client feedback (2026-10-19), now in index.html
Supersedes "Files", "Page sections" and "Design notes" above.
- **Files:** `index.html` (the whole site, one page), `styles.css` (shared), `site.js` (the `PRACTICE` object with `montclair` and `umlazi` branches, bindings, menu, privacy dialog, lightbox, reveal). The privacy dialog is injected by site.js.
- **Home order:** hero (waiting room photo, building inset, 4 contact cards), About ("Welcome to our practice / Good dental care begins with trust", "Care that listens"), Services ("How can we help you? / Care for every smile", General care plus "Special care, with our in-house surgeon" in handwriting, custom SVG icons), Your Visit (3 steps: warm welcome, clear assessment, plan made for you, plus "A healthy smile is part of a healthy, confident life"), Gallery (Before/During/After viewer, the client's favourite smile photo `smile-fav.jpg` under it, scaling result, then practice photos; client wanted it on the home page, not a separate page), Booking (with practice picker), Find your practice (two maps).
- **Removed at client request:** red emergency bar, Tour strip, Team section, "no referrals" and "under one roof" copy, the 4th "specialist/referral" step. Before/after moved into the Gallery section.
- **Palette** from the client's reference ad: cream `#f4efe3`, lime `#8cb811`, forest `#2d5a43` / `#1f4231`. Fonts: Outfit (headings), Inter (body), Caveat (handwriting).
- **Umlazi** (from the business card photo): Umlazi AA Medical Centre, 235 Simelane Drive, tel 031 909 1848. Check that the Umlazi map pin lands on the right building.
- The card shows email gawu@medi.co.za and Res 031 572 6722, while the site uses melodious@medi.co.za. Ask which email the practice wants.
- The hero/about chips (gentle dental care, kiddies friendly, affordable cash rates, contracted to all medical aids) are copied from the practice's own street sign.
- `new images/` holds the client's raw photos (not referenced by the site; don't deploy it, ~55MB incl. an MP4). The clinical close-ups were not used because nobody has said which shots are before/after pairs.
- **Instagram flyer (posted 2025-11-03, sent by owner 2026-10-19)** confirms: email melodious@medi.co.za (so the email question is settled), Montclair 031 462 1723, Umlazi 031 909 1848, 235 Simelane Drive Umlazi AA, WhatsApp 081 811 5426, website www.mvnzamadental.com, Instagram @mvnzama (linked in booking contacts, footer and structured data), "family oriented and child friendly practice". Services "at the premises": scaling & polishing, extraction, X-rays, fillings, root canal, prosthetics (false teeth), teeth bleaching, braces, crown/veneer, removal of gold/silver, recementation of crown. Braces and crown recementation are now on the site. Braces sits under Special care and recementation under General care; confirm with the practice.

## Round 3 client feedback (2026-10-21)
- **Email is now gawu@medi.co.za** (client: "melodious" is long and often misspelt). This supersedes the email notes above. (FormSubmit no longer applies; the form was removed.)
- General care gained Oral hygiene instructions, Dietary counselling and Children's dentistry tiles. Fillings now say "using biomimetic dental materials".
- Safe parking, wheelchair ramp to the front door and accessible toilet apply to **both** branches (confirmed). Mentioned in the "Our practice" line and the Find us intro.
- "Since 1996" is in the hero, the About eyebrow and text, the footer and the structured data (`foundingDate`). It refers to the practice as a whole, so it applies to both branches (confirmed).
- **MyKIT online booking:** `PRACTICE.bookingUrl` = https://appointments.mykit.co.za/?bhf=9500197, the same link for both branches (confirmed, even though MyKIT shows the Montclair address). The booking section is now a "Book a slot yourself" card (left) opening MyKIT in a new tab, and a "Can't sign in, or new to the practice?" panel (right, `#branches`) with both phone numbers, a WhatsApp button, email and Instagram. The request form was removed on 2026-10-21 (owner's call: one booking route, fewer moving parts), so FormSubmit is no longer used and needs no activation. The privacy notice (in site.js, still a draft for the practice to review) was rewritten to match: no forms on the site; MyKIT, phone, WhatsApp and email handle details. It is a link, not an iframe, because embedded sign-in pages often lose their session on phones. MyKIT asks for the main member's ID or cell number. The client wants people who fail that login sent to the call section. The site cannot detect a failed MyKIT login (it is another site in another tab), so the card has a "Can't sign in, or new to the practice? Call your nearest practice" link to `#branches`.
- **Old site:** the client's Google link resolves to https://www.mvnzamadental.co.za/ (an existing generic site: "Your smile, honoured", services list, 4-point approach, 3-step first visit). Its "approach" points (listen first, explain clearly, you decide / no unnecessary pressure, dignity) were added to About as a list, and Children's dentistry came from there. Plan: one site, point both mvnzamadental.co.za and .com at Vercel. The owner (Mihir) is finding out who controls the .co.za domain and its current host.

## Round 4 (2026-10-23)
- **Domain:** www.nzamadental.co.za (not mvnzamadental). To be connected to Vercel after the round 4 site updates.
- Hero photo is now `images/family.jpg` (family of four, from `newer images/`, sent by the client). The hero frame was reshaped for a landscape photo (1.2:1, inset bottom-left, note top-right). The waiting room photo stays in the gallery as "Waiting area". The family photo looks like a stock image: check that the practice has the right to use it.
- `newer images/` (client's raw photos from 2026-10-23: the family photo, two clinical close-ups, a new Montclair building photo) is git- and vercel-ignored.
