setInterval(() => {
    document.querySelectorAll('div[data-testid="unlike"]')[0].click(); 
    window.scrollTo(0, window.pageYOffset+300);
  }, 2000); 
