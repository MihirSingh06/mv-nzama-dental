# MV Nzama Dental website

Static one-page website for MV Nzama Dental, a family-centred dental practice at 139 Montclair Road, Montclair, Durban 4004. Tagline: "We honour your trust". Built for the owner (Mihir) as a client project. No build step, no framework.

## Files
- `index.html` holds all HTML, CSS and JS. Practice details live in the `PRACTICE` object at the bottom of the file (email, phone, WhatsApp, address, map query, form endpoint, review URL).
- `images/` holds `waiting-room`, `surgery-1`, `reception`, `result-1`, `result-2` (all .jpg). `surgery-1` and `reception` were cropped to remove an Instagram profile bubble from the bottom corner.

## Page sections (in order)
Hero collage, "ways to book" strip, Treatments (incl. in-house surgeon group), "Everything under one roof" process band, Smile transformations (before/after), Tour (practice photos, click to enlarge), Team, Booking form, Map. The About section was removed at the doctor's request. Staff photos were removed on purpose, so do not re-add them.

## Booking
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
- **Vercel Authentication is ON by default, which blocks the public.** Turn it off in Project, Settings, Deployment Protection before launch.
- Git remote `origin` is https://github.com/MihirSingh06/mv-nzama-dental.git. A push has NOT succeeded yet. Windows had a saved pcg GitHub login (MihirPCG) that was refused, and it was then cleared. Run `git push -u origin main` in a normal terminal and sign in as MihirSingh06. The repo must exist first (private).
- The Vercel project is not yet connected to the GitHub repo (connect it after the first push for auto-deploys).
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

## Done since first version
Phone menu button (hamburger under 820px), tooth favicon (inline SVG), red emergency bar at the top ("Toothache or swelling? Call us now").

## Checks done
Screenshots at about 390px (phone) and 820px (tablet) looked fine at the top of the page. Not tested on a real device. The map, the form submission, the WhatsApp and email buttons, and the lightbox were not tested.

## Design notes
Green palette from the practice's flyer (`--green` #2a9d44, `--green-dark` #1b6e30) with red and orange accents. Fonts: DM Serif Display and Inter (Google Fonts). Responsive breakpoints at 820px and 700px.
