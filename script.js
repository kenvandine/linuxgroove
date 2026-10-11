// The screenshot viewer: the filmstrip's links open their picture in a dialog,
// with arrow keys or buttons for the next one. Without JavaScript the links
// just open the picture.
(() => {
  const viewer = document.getElementById('viewer');
  const links = [...document.querySelectorAll('a[data-view]')];
  if (!viewer || typeof viewer.showModal !== 'function' || links.length === 0) return;

  const img = viewer.querySelector('img');
  const caption = viewer.querySelector('figcaption');
  let at = 0;

  function show(i) {
    at = (i + links.length) % links.length;
    const thumb = links[at].querySelector('img');
    img.src = links[at].href;
    img.alt = thumb ? thumb.alt : '';
    caption.textContent = `${img.alt} (${at + 1} of ${links.length})`;
  }

  links.forEach((link, i) => {
    link.addEventListener('click', (event) => {
      // Let a new tab or window open the picture as usual.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      show(i);
      viewer.showModal();
    });
  });

  viewer.querySelector('.close').addEventListener('click', () => viewer.close());
  viewer.querySelector('.prev').addEventListener('click', () => show(at - 1));
  viewer.querySelector('.next').addEventListener('click', () => show(at + 1));
  // A click on the dark backdrop around the picture closes it.
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') show(at + 1);
    else if (event.key === 'ArrowLeft') show(at - 1);
  });
  viewer.addEventListener('close', () => links[at].focus());
})();
