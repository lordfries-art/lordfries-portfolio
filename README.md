# LORDFRIES Portfolio, version 2

Open `index.html` in a web browser to preview. Use a local web server for reliable loading of interactive 3D models.

## Edit text and media
- `index.html`: headings, About biography, contact form labels, social display.
- `projects.js`: portfolio content and social links. Add **as many projects as you want**, using categories `image`, `design`, `video`, `audio`, `model`. Put uploaded media in `assets/` and reference with `assets/filename.ext`.
- `style.css`: design and colours.
- `assets/about-photo-placeholder.svg`: replace with your photo and change the `src` in `index.html` to the photo filename. Also update the alternative text.

## Gallery
Each project supports multiple media entries, including images, MP4, MP3, GLB and approved video embeds. Click **VIEW FULL SCREEN** on images to open the viewer. Press Escape or CLOSE to return. Native video full-screen controls are available on compatible browsers. For 3D interaction the external model-viewer script requires an internet connection.

## Contact form: important
The form POSTs to `https://formsubmit.co/lordfries.art@gmail.com`. FormSubmit requires the owner of that email address to confirm activation on first submission. It does **not** deliver submissions until activated, and you should test it after publishing. This is a third-party service, not an independent mail server. Do not use dummy sensitive data during testing. FormSubmit's captcha may be displayed. Direct email remains available as a fallback. Do not remove the privacy link without considering the form and other third-party services.

## Social profiles
In `projects.js`, replace the Instagram and TikTok homepage URLs under `window.LORDFRIES_CONTACT` with your real profile links. The default URLs go to the platforms, **not** your accounts. Then remove the placeholder warning sentence in `index.html` and update link labels.

## Privacy
`privacy.html` is an informational **draft, not legal advice**. Review the factual claims and your business's actual practices before publication. Whether the Australian Privacy Act formally applies depends on circumstances, including turnover and activities. Additional consumer and spam/privacy considerations may apply.

## Publishing
Upload this folder's *contents* to a GitHub repository and enable GitHub Pages in Settings > Pages > Deploy from a branch. Use root of main, wait for deployment. Static hosting can serve this website but cannot send emails on its own. Video, audio and 3D files may be large. Optimise media, or embed hosted media for faster loading. GitHub also has repository/file limits.


## VISUAL PORTFOLIO MANAGER

Open `manager.html` in Chrome, Firefox or Edge. Create projects, update their details, upload media, and use the up/down arrows to set display order. All changes are saved to this browser locally. Click **EXPORT WEBSITE ZIP** to create a complete, deployable static site ZIP. Extract it and upload the **contents** of its `lordfries-portfolio` folder to the root of your GitHub Pages repository. The manager is not part of the public ZIP.

**IMPORTANT:** Click **BACKUP DATA** regularly and keep the JSON backup separately. `RESTORE BACKUP` imports that JSON and its included uploads. Local browser storage can be cleared and large uploads may exceed browser quota. The manager only supports self-contained image files, MP4/WebM/MOV videos, MP3/WAV/OGG/M4A audio, GLB 3D files, and YouTube/Vimeo embeds. For larger media, consider external video hosting to avoid giant GitHub repositories. For GLB uploads, add at least one image to the project and use it as a cover.

Content of the site's About section, social URLs and contact form must still be edited in the HTML/`projects.js` source for now. A manager export includes the original website layout and configured placeholder social links. To change social URLs, update `window.LORDFRIES_CONTACT` in the manager's `projects.js` source.
