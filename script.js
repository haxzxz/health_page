// For initializing Header
function initializeHeader() {
  const menu = document.querySelector("#menu");
  const close = document.querySelector("#close");
  const nav = document.querySelector("#nav");
  const header = document.querySelector("#header");
  const body = document.querySelector("body");
  const headerHeight = header.getBoundingClientRect().height;

  menu.addEventListener("click", () => {
    nav.classList.add("open-nav");
  });

  close.addEventListener("click", () => {
    nav.classList.remove("open-nav");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
      body.style.marginTop = headerHeight + "px";
      header.classList.add("sticky");
    } else {
      body.style.marginTop = "0px";
      header.classList.remove("sticky");
    }
  });
}

initializeHeader();

// Script for Hovering Cards
function setupHoverCard(cardId, summaryHTML, detailHTML) {
  const card = document.getElementById(cardId);
  const text = card.querySelector(".card-text");
  text.innerHTML = summaryHTML;

  card.addEventListener("mouseenter", () => {
    text.innerHTML = detailHTML;
  });

  card.addEventListener("mouseleave", () => {
    text.innerHTML = summaryHTML;
  });
}

const arrowSVG = `
      <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10V0L5 5L0 10Z" fill="#2A1613" />
      </svg>`;

setupHoverCard(
  "mon",
  `<div class="note">${arrowSVG} Checkup for <br> Adult and Kids</div>`,
  `<div class = "hidden" style="padding-top: 50px; font-size: 14px;"> ${arrowSVG} <span style="line-height: 40px"><strong style"color: #eb0000">Kids:</strong> Cough, colds, fever.<br></span>
   ${arrowSVG} <strong style="color: #eb0000;">Adults:</strong> Blood pressure monitoring, hypertension, medicine/maintenance
   follow-ups, general medical inquiries, and dog/cat bite consultations.</div>`
);

setupHoverCard(
  "tue",
  `<div class="note"><strong>Morning</strong><br>
   <p>${arrowSVG} Diabetic<p> <br>
  <strong>Afternoon</strong> <br>
   <p>${arrowSVG} General Consultation<p></div>`,
  `<div class="hidden" style="padding: 20px 0; font-size: 14px;"><strong style="line-height: 40px; font-size: 16px;">MORNING</strong> <br>
  ${arrowSVG} <span>Procedure:</span> Only Random Blood Sugar (RBS) is taken. <br>
  ${arrowSVG} If diagnosed with diabetes, patients will receive free short-term medication. <br>
  ${arrowSVG} <span>Note: </span> No requirements such as ID are needed. However, once the free
  medication is used up, follow-up check-ups at hospitals are required to assess if new
  prescriptions are needed. <br>
  <strong style="line-height: 40px; font-size: 16px;">AFTERNOON</strong> <br>
  ${arrowSVG} Only for minor concerns such as fever, cough, colds, and general discomfort.</div>`
);

setupHoverCard(
  "wed",
  `<div class="note">${arrowSVG} Immunization Day For Babies.</div>`,
  `<div class="hidden" style="padding: 20px 0; font-size: 14px;"><span id="red-desc"><strong>For Babies:</strong> Free vaccines and Vitamins</span> <br>
  <p style="line-height: 30px">Vaccines Offered:</p>
  <div style="font-size: 12px; padding-left: 20px;">
  ${arrowSVG} BCG (Bacillus Calmette-Guérin) <br>
  ${arrowSVG} Penta (5 in 1) <br>
  ${arrowSVG} OPV (Oral Polio Vaccine) <br>
  ${arrowSVG} PCV (Pneumococcal Vaccine) <br>
  ${arrowSVG} IPV (Inactived Polio Vaccine) <br>
  ${arrowSVG} Measles <br>
  ${arrowSVG} MMR (Measles-Mumps-Rubella) <br>
  ${arrowSVG} Vitamin A <br><br>
  </div>
  <span id="red-desc"><strong>For Mothers: </strong>Free Vitamins.</span>
  <span id="b-desc"><strong>Requirement: </strong>If the child was born in a private hospital, a
  document from the attending physician indicating the vaccines already administered is
  required to avoid duplication.</span></div>`
);

setupHoverCard(
  "thu",
  `<div class="note">${arrowSVG} Maternal Day</div>`,
  `<div style="padding: 20px 0px; font-size: 14px;">${arrowSVG} <strong>Services offered for pregnant woman: </strong> <br>
  Free check-ups for HIV Screening and RBS to monitor for diabetes. <br>
  ${arrowSVG} No ultrasound services at the Barangay; referrals are made 
  to the Municipal Health Office for ultrasound. <br> <br>
  <strong>Free Vitamins</strong> <br>
  <span id="list">${arrowSVG} <strong>For Mothers: </strong> Ferrous Sulfate <br></span>
  <span id="list">${arrowSVG} <strong>For Babies: </strong> Ascorbic Acid and Multivitamins</span></div>`
)
setupHoverCard(
  "fri",
  `<div class="note">${arrowSVG} Maternal Day</div>`,
  `<div class="hidden" style="padding: 20px 0px; font-size: 14px;">${arrowSVG} For minor illnesses such as cough, colds, 
  blood pressure check-ups, minor wounds, or animal bites. <br></div>`
)
setupHoverCard(
  "weeknd_sun",
  `<div>${arrowSVG} <strong>Rest Day</strong><div>`,
  `<div style="display: flex; justify-content: center; align-items: center;align-contents: center;"><em>(no consultation on weekends)</em</div>`
)
setupHoverCard(
  "weeknd_sat",
  `<div>${arrowSVG} <strong>Rest Day</strong><div>`,
  `<em>(no consultation on weekends)</em`
)

function setupHoverCard(cardId, summaryHTML, detailHTML) {
  const card = document.getElementById(cardId);
  const text = card.querySelector(".card-text");
  text.innerHTML = summaryHTML;

  card.addEventListener("mouseenter", () => {
    text.innerHTML = detailHTML;
  });

  card.addEventListener("mouseleave", () => {
    text.innerHTML = summaryHTML;
  });
}

function setupClickCard(cardId, summaryHTML, detailHTML) {
  const card = document.getElementById(cardId);
  const text = card.querySelector(".card-text");
  let showingDetail = false;

  text.innerHTML = summaryHTML;

  card.addEventListener("click", () => {
    if (showingDetail) {
      text.innerHTML = summaryHTML;
    } else {
      text.innerHTML = detailHTML;
    }
    showingDetail = !showingDetail;
  });
}

function setupToggleContent(buttonId, contentId, originalHTML, newHTML) {
  const button = document.getElementById(buttonId);
  const content = document.getElementById(contentId);
  let showingOriginal = true;

  content.innerHTML = originalHTML;

  button.addEventListener("click", () => {
    content.classList.add("fade-out");

    setTimeout(() => {
      content.innerHTML = showingOriginal ? newHTML : originalHTML;
      content.classList.remove("fade-out");
      showingOriginal = !showingOriginal;
    }, 400); // duration matches CSS transition
  });
}

// Call the function with your content
setupToggleContent(
  "toggleBtn",
  "content",
  `<p>This is the original content.</p>`,
  `<h2>New Content</h2><p>This content has replaced the original section.</p>`
);

setupToggleContent(
  "toggleBtn",
  
)