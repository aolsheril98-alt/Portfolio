# Sheril Aol – Portfolio Website

## Folder layout
```
index.html        cover page (the poster)
about.html        about, skills, work experience
projects.html     projects, education, certifications, references, contact
css/style.css     design (colours, layout)
js/data.js        ALL YOUR CONTENT  <-- the file you edit
js/script.js      builds the pages from data.js (don't touch)
images/           cover.jpg, sheril.jpg, project screenshots
docs/             CV, certificates, transcripts, letters (PDF)
```

## How to update (on GitHub, no software needed)
1. Open the repository, then `js`, then `data.js`.
2. Click the pencil icon (Edit).
3. Make your change (see below), then click **Commit changes**.
4. Wait about a minute and refresh your website.

## Add a new project
Copy one `{ ... },` block inside `projects: [` , paste it at the top, change the text, and keep the comma:
```js
{
  icon: "📱",
  title: "My New App",
  text: "One or two sentences about what it does.",
  tools: ["Kotlin", "SQLite"],
  link: "https://github.com/yourname/my-new-app",
  linkLabel: "View on GitHub"
},
```

## Add work experience, education, skills, references
Same idea: copy a block inside `experience`, `education`, `skills` or `references`, paste it at the top (newest first) and edit.

## Add certificates, transcripts, letters
1. Upload the PDF into the `docs` folder (Add file, then Upload files).
2. Education documents: add `documents: [{ label: "Transcript", file: "docs/transcript.pdf" }]` to that school.
3. Certificates: add a block to `certifications: [ ... ]` with `file: "docs/your-file.pdf"`. The Certifications section stays hidden until you add one.

## Turn on LinkedIn / GitHub buttons
Paste your links into `linkedin:` and `github:` at the top of `data.js`.

## Show referee phone numbers
Set `showReferencePhones: true`. Only do this if your referees agree, because the site is public.

## Change the photo or cover
Replace `images/sheril.jpg` or `images/cover.jpg` with a new image of the same name.
Note: the cover is a picture, so changing the phone number or email on it needs a new picture.
