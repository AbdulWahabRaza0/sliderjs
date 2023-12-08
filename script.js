document.addEventListener("DOMContentLoaded", function () {
  const slidesArr = [
    {
      src: "./team/t2.png",
      info: {
        name: "Mustafa Zahid",
        role: "CEO",
        quote: ` "Le change management\ncommence par soe-meme"`,
      },
    },
    {
      src: "./team/t1.png",
      info: {
        name: "Ibrahime Habi",
        role: "CEO",
        quote: ` "Le change management\ncommence par soe-meme"`,
      },
    },
    {
      src: "./team/t3.png",
      info: {
        name: "Jawad",
        role: "Sub Lead",
        quote: ` "Le change management\ncommence par soe-meme"`,
      },
    },
    {
      src: "./team/t2.png",
      info: {
        name: "Ahmad Khan",
        role: "CEO",
        quote: ` "Le change management\ncommence par soe-meme"`,
      },
    },
    {
      src: "./team/t5.png",
      info: {
        name: "Niazi",
        role: "Lead",
        quote: ` "Le change management\ncommence par soe-meme"`,
      },
    },
  ];
  const myLinkedInIcon = "./l.png";
  const myFacebookIcon = "./f.png";
  const myInstaIcon = "./i.png";
  function handleResize() {
    const temp = window.innerWidth;
    return temp;
  }
  const myWidth = handleResize();
  const myFourthImage =
    myWidth > 1380
      ? 4
      : myWidth > 1100
      ? 3
      : myWidth > 865
      ? 2
      : myWidth > 730
      ? 1
      : 0;
  const isResponsive = myWidth > 655 ? false : true;
  const myActiveImageHeight = "625px";
  const myActiveImageWidth = "317px";
  const myActiveContentHeight = "65vh";
  const myActiveContentWidth = "20vw";
  const myActiveInnerContentHeight = "64vh";
  const myNormalImageHeight = "216px";
  const myNormalImageWidth = "147px";

  let parentElement = document.querySelector(".swiper-wrapper");

  let childElements = null;
  while (true) {
    if (parentElement) {
      childElements = parentElement.children;
      break;
    }
  }
  //my code
  function createTeamSlide(name, role, quote, imageUrl) {
    // Create elements

    if (!isResponsive) {
      const swiperSlide = document.createElement("div");
      swiperSlide.className = "swiper-slide";

      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;

      imgElement.style.filter = "grayscale(100%)";
      const infoDiv = document.createElement("div");
      infoDiv.className = "info-div";

      const insideInfoDiv = document.createElement("div");
      insideInfoDiv.className = "inside-info";

      const headerInsideInfo = document.createElement("div");
      headerInsideInfo.className = "header-inside-info";

      const nameElement = document.createElement("h3");
      nameElement.textContent = name;
      nameElement.classList = "name";
      const roleElement = document.createElement("p");
      roleElement.textContent = role;
      roleElement.className = "role";
      const quoteElement = document.createElement("h2");
      quoteElement.innerHTML = `${quote}`;
      quoteElement.className = "quote";

      const footerInsideInfo = document.createElement("div");
      footerInsideInfo.className = "footer-inside-info";

      const linkedinIcon = document.createElement("img");
      linkedinIcon.src = myLinkedInIcon;
      linkedinIcon.alt = "icon";

      const facebookIcon = document.createElement("img");
      facebookIcon.src = myFacebookIcon;
      facebookIcon.alt = "icon";

      const messageIcon = document.createElement("img");
      messageIcon.src = myInstaIcon;
      messageIcon.alt = "icon";

      // Append elements to their respective parents
      headerInsideInfo.appendChild(nameElement);
      headerInsideInfo.appendChild(roleElement);
      headerInsideInfo.appendChild(quoteElement);

      footerInsideInfo.appendChild(linkedinIcon);
      footerInsideInfo.appendChild(facebookIcon);
      footerInsideInfo.appendChild(messageIcon);

      insideInfoDiv.appendChild(headerInsideInfo);
      insideInfoDiv.appendChild(footerInsideInfo);

      infoDiv.appendChild(insideInfoDiv);

      swiperSlide.appendChild(imgElement);
      swiperSlide.appendChild(infoDiv);

      return swiperSlide;
    } else {
      const swiperSlide = document.createElement("div");
      swiperSlide.className = "swiper-slide";

      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.alt = "team-img";
      imgElement.style.filter = "grayscale(100%)";
      const infoDiv = document.createElement("div");
      infoDiv.className = "content-wrapper-resp";
      infoDiv.style.width = "100%";
      const nameElement = document.createElement("p");
      nameElement.textContent = name;
      nameElement.className = "name";
      const roleElement = document.createElement("p");
      roleElement.textContent = role;
      roleElement.className = "role";
      const quoteElement = document.createElement("p");
      quoteElement.innerHTML = `${quote}`;
      quoteElement.className = "quote";
      const iconWrapper = document.createElement("div");
      iconWrapper.className = "icon-wraper-resp";
      const linkedinIcon = document.createElement("img");
      linkedinIcon.src = myLinkedInIcon;
      linkedinIcon.alt = "icon";

      const facebookIcon = document.createElement("img");
      facebookIcon.src = myFacebookIcon;
      facebookIcon.alt = "icon";

      const messageIcon = document.createElement("img");
      messageIcon.src = myInstaIcon;
      messageIcon.alt = "icon";
      infoDiv.appendChild(nameElement);
      infoDiv.appendChild(roleElement);
      infoDiv.appendChild(quoteElement);
      iconWrapper.appendChild(linkedinIcon);
      iconWrapper.appendChild(facebookIcon);
      iconWrapper.appendChild(messageIcon);
      infoDiv.appendChild(iconWrapper);

      swiperSlide.appendChild(imgElement);
      swiperSlide.appendChild(infoDiv);

      return swiperSlide;
    }
  }
  if (isResponsive) {
    for (let i = 0; i < slidesArr.length; i++) {
      if (i === myFourthImage) {
        const createdSlide = createTeamSlide(
          slidesArr[i].info.name,
          slidesArr[i].info.role,
          slidesArr[i].info.quote,
          slidesArr[i].src
        );
        const imageElement = createdSlide.querySelector("img");
        imageElement.style.filter = "none";
        imageElement.style.height = myActiveImageHeight;
        imageElement.style.width = myActiveImageWidth;
        imageElement.classList.add("my-transition-image");

        parentElement.appendChild(createdSlide);
      } else if (i > myFourthImage) {
        const createdSlide = createTeamSlide(
          slidesArr[i].info.name,
          slidesArr[i].info.role,
          slidesArr[i].info.quote,
          slidesArr[i].src
        );
        createdSlide.style.display = "none";
        parentElement.appendChild(createdSlide);
      } else {
        const createdSlide = createTeamSlide(
          slidesArr[i].info.name,
          slidesArr[i].info.role,
          slidesArr[i].info.quote,
          slidesArr[i].src
        );
        createdSlide.style.display = "none";
        parentElement.appendChild(createdSlide);
      }
    }
  } else {
    for (let i = 0; i < slidesArr.length; i++) {
      if (i === myFourthImage) {
        const createdSlide = createTeamSlide(
          slidesArr[i].info.name,
          slidesArr[i].info.role,
          slidesArr[i].info.quote,
          slidesArr[i].src
        );
        const imageElement = createdSlide.querySelector("img");
        const contentElement = createdSlide.querySelector(".info-div");
        const innerContentElement = createdSlide.querySelector(".inside-info");
        imageElement.style.height = myActiveImageHeight;
        imageElement.style.width = myActiveImageWidth;
        imageElement.style.filter = "none";
        imageElement.classList.add("my-transition-image");
        imageElement.style.filter = "none !important";
        contentElement.style.display = "flex";
        contentElement.style.height = myActiveContentHeight;
        contentElement.style.width = myActiveContentWidth;
        innerContentElement.style.height = myActiveInnerContentHeight;
        innerContentElement.style.display = "flex";
        innerContentElement.style.flexDirection = "column";
        innerContentElement.style.alignItems = "start";
        innerContentElement.style.justifyContent = "space-between";

        parentElement.appendChild(createdSlide);
      } else if (i > myFourthImage) {
        const createdSlide = createTeamSlide(
          slidesArr[i].info.name,
          slidesArr[i].info.role,
          slidesArr[i].info.quote,
          slidesArr[i].src
        );
        createdSlide.style.display = "none";
        parentElement.appendChild(createdSlide);
      } else {
        const createdSlide = createTeamSlide(
          slidesArr[i].info.name,
          slidesArr[i].info.role,
          slidesArr[i].info.quote,
          slidesArr[i].src
        );
        parentElement.appendChild(createdSlide);
      }
    }
  }

  const reset = (childElements, event) => {
    if (!isResponsive) {
      for (let i = 0; i < childElements.length; i++) {
        const imageElement = childElements[i].querySelector("img");
        const contentElement = childElements[i].querySelector(".info-div");
        const innerContentElement =
          childElements[i].querySelector(".inside-info");
        if (i === myFourthImage) {
          imageElement.style.height = myActiveImageHeight;
          imageElement.style.width = myActiveImageWidth;
          imageElement.style.filter = "none";
          imageElement.classList.remove("my-transition-image");
          imageElement.classList.remove("my-transition-image-prev");
          if (event === "next") {
            imageElement.classList.add("my-transition-image");
          } else {
            imageElement.style.opacity = 0;
            setTimeout(function () {
              imageElement.style.opacity = 1;
              imageElement.style.transition = "opacity 1s ease-in-out";
            }, 700);
          }
          childElements[i].style.display = "flex";
          contentElement.style.display = "flex";
          contentElement.style.flexDirection = "row";
          contentElement.style.height = myActiveContentHeight;
          contentElement.style.width = myActiveContentWidth;
          innerContentElement.style.height = myActiveInnerContentHeight;
          innerContentElement.style.display = "flex";
          innerContentElement.style.flexDirection = "column";
          innerContentElement.style.alignItems = "start";
          innerContentElement.style.justifyContent = "space-between";
          const myH3 = innerContentElement.querySelector("h2");
          myH3.classList.add("my-transition-text");
        } else if (i > myFourthImage) {
          imageElement.style.height = myNormalImageHeight;
          imageElement.style.width = myNormalImageWidth;
          imageElement.classList.remove("my-transition-image");
          imageElement.classList.remove("my-transition-image-prev");
          imageElement.style.filter = "grayscale(100%)";
          childElements[i].style.display = "none";
          const myH3 = innerContentElement.querySelector("h2");
          myH3.classList.remove("my-transition-text");
        } else {
          if (i > 1 && i < childElements.length && i === myFourthImage - 1) {
            imageElement.classList.remove("my-transition-image-prev");
            imageElement.classList.remove("my-transition-image");
            imageElement.style.height = myNormalImageHeight;
            imageElement.style.width = myNormalImageWidth;
            imageElement.style.filter = "grayscale(100%)";
            if (event === "prev") {
              imageElement.classList.add("my-transition-image-prev");
            }
            const myH3 = innerContentElement.querySelector("h2");
            myH3.classList.remove("my-transition-text");
            contentElement.style.display = "none";
          } else {
            imageElement.style.height = myNormalImageHeight;
            imageElement.style.width = myNormalImageWidth;
            imageElement.style.filter = "grayscale(100%)";
            imageElement.classList.remove("my-transition-image-prev");
            imageElement.classList.remove("my-transition-image");

            const myH3 = innerContentElement.querySelector("h2");
            myH3.classList.remove("my-transition-text");
            contentElement.style.display = "none";
          }
        }
      }
    } else {
      for (let i = 0; i < childElements.length; i++) {
        const myMainSlideContainer = childElements[i];
        const imageElement = childElements[i].querySelector("img");
        if (i === myFourthImage) {
          const myActiveImageContent = childElements[i].querySelector(
            ".content-wrapper-resp"
          );

          myMainSlideContainer.style.display = "block";
          imageElement.style.height = myActiveImageHeight;
          imageElement.style.width = myActiveImageWidth;
          imageElement.classList.remove("my-transition-image");
          imageElement.classList.remove("my-transition-image-prev");
          imageElement.style.filter = "none";
          myActiveImageContent.style.opacity = 0;
          setTimeout(function () {
            myActiveImageContent.style.opacity = 1;
            myActiveImageContent.style.transition = "opacity 1s ease-in-out";
          }, 700);
          if (event === "next") {
            imageElement.classList.add("my-transition-image");
          } else {
            // imageElement.style.opacity = 0;
            // setTimeout(function () {
            //   imageElement.style.opacity = 1;
            //   imageElement.style.transition = "opacity 1s ease-in-out";
            // }, 700);
          }
        } else if (i > myFourthImage) {
          imageElement.style.height = myNormalImageHeight;
          imageElement.style.width = myNormalImageWidth;
          imageElement.classList.remove("my-transition-image");
          imageElement.classList.remove("my-transition-image-prev");
          imageElement.style.filter = "grayscale(100%)";
          childElements[i].style.display = "none";
        } else {
          if (i > 1 && i < childElements.length && i === myFourthImage - 1) {
            imageElement.classList.remove("my-transition-image-prev");
            imageElement.classList.remove("my-transition-image");
            imageElement.style.height = myNormalImageHeight;
            imageElement.style.width = myNormalImageWidth;
            imageElement.style.filter = "grayscale(100%)";
            if (event === "prev") {
              imageElement.classList.add("my-transition-image-prev");
            }
            childElements[i].style.display = "none";
          } else {
            imageElement.style.height = myNormalImageHeight;
            imageElement.style.width = myNormalImageWidth;
            imageElement.classList.remove("my-transition-image-prev");
            imageElement.classList.remove("my-transition-image");
            imageElement.style.filter = "grayscale(100%)";
            childElements[i].style.display = "none";
          }
        }
      }
    }
  };

  window.addEventListener("resize", handleResize);

  const nextSlide = () => {
    const lastElem = childElements[childElements.length - 1].cloneNode(true);
    lastElem.style.display = "block";
    childElements[childElements.length - 1].remove();
    parentElement.insertBefore(lastElem, childElements[0]);
    childElements = parentElement.children;
    reset(childElements, "next");
  };
  const prevSlide = () => {
    const firstElem = childElements[0].cloneNode(true);
    firstElem.style.display = "block";
    childElements[0].remove();
    parentElement.appendChild(firstElem);

    childElements = parentElement.children;
    reset(childElements, "prev");
  };
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", function () {
    nextSlide();
  });
  prevBtn.addEventListener("click", function () {
    prevSlide();
  });
});
