const pages = [document.getElementById('page1'), document.getElementById('page2')];
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentPage = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle('active', i === index);
  });
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === pages.length - 1;
  currentPage = index;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    showPage(currentPage - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1);
  }
});
