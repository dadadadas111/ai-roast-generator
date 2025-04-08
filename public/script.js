const roastBtn = document.getElementById("roastBtn");
const output = document.getElementById("output");
let lastInput = "";

const advancedSettingsBtn = document.getElementById("advancedSettingsBtn");
const advancedSettingsModal = document.getElementById("advancedSettingsModal");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const roastLevel = document.getElementById("roastLevel");
const humorLevel = document.getElementById("humorLevel");
const responseLength = document.getElementById("responseLength");
const languageSelect = document.getElementById("languageSelect");

advancedSettingsBtn.onclick = () => {
  advancedSettingsModal.style.display = "flex";
};

closeSettingsBtn.onclick = () => {
  advancedSettingsModal.style.display = "none";
};

// Function to load localization data and update UI
async function updateLocalization(language) {
  try {
    const response = await fetch("localization.json");
    const localization = await response.json();
    const translations = localization[language];

    if (translations) {
      document.querySelector("h1").textContent = translations.title;
      document.getElementById("userInput").placeholder = translations.placeholder;
      document.getElementById("roastBtn").textContent = translations.roastBtn;
      document.getElementById("advancedSettingsBtn").textContent = translations.advancedSettingsBtn;
      document.querySelector("label[for='roastLevel']").textContent = translations.roastLevel;
      document.querySelector("label[for='humorLevel']").textContent = translations.humorLevel;
      document.querySelector("label[for='responseLength']").textContent = translations.responseLength;
      document.getElementById("closeSettingsBtn").textContent = translations.closeSettingsBtn;
    }
  } catch (error) {
    console.error("Error loading localization:", error);
  }
}

// Event listener for language change
languageSelect.addEventListener("change", (event) => {
  updateLocalization(event.target.value);
});

// Initialize with default language
updateLocalization(languageSelect.value);

roastBtn.onclick = async () => {
  const input = document.getElementById("userInput").value.trim();
  const language = document.getElementById("languageSelect").value;
  if (!input) return;

  // disable hidden output
  output.style.display = "block";

  output.textContent = "Cooking up a roast...";
  lastInput = input;

  try {
    const response = await fetch("/roast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        input,
        language,
        roastLevel: roastLevel.value,
        humorLevel: humorLevel.value,
        responseLength: responseLength.value
      })
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    output.innerHTML = marked.parse(data.roast); // Render Markdown
  } catch (error) {
    console.error("Error fetching roast:", error);
    output.textContent = "Sorry, something went wrong. Please try again later.";
  }
};

roastAgainBtn.onclick = () => {
  roastBtn.onclick(); // Reuse the same logic for roasting again
};