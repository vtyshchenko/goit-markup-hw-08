(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const mobileMenuClose = document.querySelector('[data-menu-close]');
    
    menuBtnRef.addEventListener("click", () => {
        const extended =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !extended);

        mobileMenuRef.classList.toggle("is-open");
    });
  
    mobileMenuClose.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    });
})();