// Copy snippet to clipboard
function copySnippet(buttonElement) {
  const codeBlock = buttonElement.nextElementSibling;
  const textToCopy = codeBlock ? codeBlock.innerText : '';

  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalText = buttonElement.innerText;
      buttonElement.innerText = 'Copied!';
      buttonElement.style.background = '#10b981';
      
      setTimeout(() => {
        buttonElement.innerText = originalText;
        buttonElement.style.background = '';
      }, 2000);
    });
  }
}

// Active link highlighting
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
