
// Set footer
const footer = async () => {
  const footerData = await fetch('/footer.html');
  const text = await footerData.text();
  document.getElementById('footer-container').innerHTML = text;
  document.getElementById('footer-text').innerHTML = `${new Date().getFullYear()} &copy; Jay Clark<br>All rights reserved</p> `
};

footer();