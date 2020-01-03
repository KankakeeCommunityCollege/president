document.addEventListener('DOMContentLoaded', function() {
  const COPYRIGHT_YEAR_SPAN_ID = 'currentYear';
  const d = new Date();

  document.getElementById(COPYRIGHT_YEAR_SPAN_ID).innerHTML = d.getFullYear();
});
