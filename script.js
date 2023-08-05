const companyIcons = [
    "/fidypaylogo(1)2.png",
    "/FidyPayLogoWhite.png",
    "/fidypaylogo(1)2.png"
  ];
  
  const companyIconElement = document.querySelector(".company-icon");
  
  function changeCompanyIcon() {
    const randomIndex = Math.floor(Math.random() * companyIcons.length);
    const randomIconUrl = companyIcons[randomIndex];
  
    companyIconElement.style.backgroundImage = `url('${randomIconUrl}')`;
  }
  
  changeCompanyIcon();
  setInterval(changeCompanyIcon, 400);
  