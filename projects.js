// EDIT THIS FILE TO ADD YOUR OWN ARTWORK.
// Each project has: id, title, category, year, description, cover and media.
// Categories: image, design, video, audio, model.
// Media entries use type: "image", "video", "audio", "model" or "embed".
// Keep your files in assets/ and use paths like "assets/my-artwork.jpg".
// Use .jpg/.png/.webp for images, .mp4 for video, .mp3 for audio, .glb for 3D.
// You can include DIFFERENT media types inside ONE project.
// For external video, use type "embed" and a trusted iframe URL such as
// https://www.youtube-nocookie.com/embed/VIDEO_ID
// Never paste arbitrary HTML into these fields.

window.LORDFRIES_PROJECTS = [
  {id:'ink-studies',title:'Ink Studies',category:'image',year:'2026',description:'SAMPLE PROJECT. Replace these placeholder illustrations with your own prints, drawings, or other imagery.',cover:'assets/sample-ink.svg',media:[{type:'image',src:'assets/sample-ink.svg',caption:'Illustration sample'}]},
  {id:'posters',title:'Posters & Identities',category:'design',year:'2026',description:'SAMPLE PROJECT. A space for band posters, logos, visual identities, packaging and graphic design.',cover:'assets/sample-poster.svg',media:[{type:'image',src:'assets/sample-poster.svg',caption:'Design sample'}]},
  {id:'moving-image',title:'Moving Image',category:'video',year:'2026',description:'SAMPLE PROJECT. Replace this with an MP4 file or a YouTube/Vimeo embed. The preview is a placeholder until a video is added.',cover:'assets/sample-motion.svg',media:[{type:'video',src:'',poster:'assets/sample-motion.svg',caption:'Add your MP4 path in projects.js'}]},
  {id:'sound-works',title:'Sound Experiments',category:'audio',year:'2026',description:'SAMPLE PROJECT. Display sound design, original music or audio pieces with an embedded player and cover art.',cover:'assets/sample-sound.svg',media:[{type:'audio',src:'',caption:'Add your MP3 file in projects.js'}]},
  {id:'digital-objects',title:'Digital Objects',category:'model',year:'2026',description:'SAMPLE PROJECT. Upload a .glb model and visitors will be able to rotate and zoom it. A download link is also provided.',cover:'assets/sample-3d.svg',media:[{type:'model',src:'',poster:'assets/sample-3d.svg',caption:'Add your GLB file in projects.js'}]},
  {id:'prints',title:'Print & Pattern',category:'image',year:'2026',description:'SAMPLE PROJECT. Use a series of images to show a process, close-up details and finished work.',cover:'assets/sample-pattern.svg',media:[{type:'image',src:'assets/sample-pattern.svg',caption:'Pattern sample'},{type:'image',src:'assets/sample-ink.svg',caption:'Additional sample'}]}
  ,{id:'portrait-work',title:'Portrait Sketches',category:'image',year:'2026',description:'SAMPLE PROJECT. Portraits and figure studies.',cover:'assets/sample-ink.svg',media:[{type:'image',src:'assets/sample-ink.svg',caption:'Portrait placeholder'}]}
  ,{id:'logo-work',title:'Logos & Lettering',category:'design',year:'2026',description:'SAMPLE PROJECT. Custom logos, typography and identity sketches.',cover:'assets/sample-poster.svg',media:[{type:'image',src:'assets/sample-poster.svg',caption:'Logo placeholder'}]}
  ,{id:'printed-editions',title:'Printed Editions',category:'image',year:'2026',description:'SAMPLE PROJECT. A gallery for lino prints and limited edition work.',cover:'assets/sample-pattern.svg',media:[{type:'image',src:'assets/sample-pattern.svg',caption:'Print placeholder'}]}
  ,{id:'short-animation',title:'Animated Loops',category:'video',year:'2026',description:'SAMPLE PROJECT. Add short animations, reels or videos.',cover:'assets/sample-motion.svg',media:[{type:'video',src:'',poster:'assets/sample-motion.svg',caption:'Add your animation file'}]}
  ,{id:'audio-sketchbook',title:'Audio Sketchbook',category:'audio',year:'2026',description:'SAMPLE PROJECT. Add sound work and music.',cover:'assets/sample-sound.svg',media:[{type:'audio',src:'',caption:'Add an audio file'}]}
  ,{id:'digital-sculpture',title:'Digital Sculpture',category:'model',year:'2026',description:'SAMPLE PROJECT. Add a GLB model or more rendered images.',cover:'assets/sample-3d.svg',media:[{type:'model',src:'',poster:'assets/sample-3d.svg',caption:'Add your interactive model'}]}

];
// CONTACT SETTINGS: replace before publishing.
window.LORDFRIES_CONTACT = {email:'lordfries.art@gmail.com', instagram:'https://www.instagram.com/', tiktok:'https://www.tiktok.com/'};
