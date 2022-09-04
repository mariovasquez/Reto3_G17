const header = () => {
    const header = document.querySelector('.header');
    
    document.addEventListener('scroll', () => {
      header.classList.toggle('header--scroll', scrollY > 0);
    });

};
  
export default header;