# AI Roast Generator 🔥

AI Roast Generator is a fun web application that generates personalized roasts based on user input. It uses advanced AI models to craft witty, humorous, and sometimes savage responses. The app supports multiple languages and allows users to customize the roast's tone and length.

---

## Features

- **Personalized Roasts**: Enter your name and a fun fact, and let the AI do the rest.
- **Language Support**: Generate roasts in English, Spanish, French, and Vietnamese.
- **Advanced Settings**: Adjust roast level, humor level, and response length.
- **Interactive UI**: A sleek and responsive interface for a seamless experience.
- **Localization**: Dynamic UI updates based on the selected language.

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **AI Integration**: Gemini API
- **Environment Management**: dotenv
- **HTTP Requests**: Axios

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm installed
- A Gemini API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dadadadas111/ai-roast-generator.git
   cd ai-roast-generator
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory and add your API key:
   ```
   GEMINI_API_KEY=your-gemini-api-key
   ```

4. Start the server:
   ```bash
   pnpm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## File Structure

- **`public/`**: Contains static files like HTML, CSS, JavaScript, and localization data.
  - `index.html`: Main HTML file for the app.
  - `style.css`: Stylesheet for the app.
  - `script.js`: Frontend logic for interacting with the backend and updating the UI.
  - `localization.json`: Translations for supported languages.

- **`server.js`**: Backend logic for handling API requests and communicating with the Gemini API.

- **`.env`**: Environment variables for the API key (not included in the repository).

- **`package.json`**: Project metadata and dependencies.

- **`pnpm-lock.yaml`**: Lockfile for dependency management.

---

## Usage

1. Open the app in your browser.
2. Enter your name and a fun fact in the input box.
3. Select your preferred language from the dropdown.
4. Click "Roast Me" to generate a roast.
5. Use the "Advanced Settings" button to customize the roast level, humor level, and response length.
6. Enjoy the roast and share it with your friends!

---

## Localization

The app supports the following languages:
- English (`en`)
- Spanish (`es`)
- French (`fr`)
- Vietnamese (`vi`)

To add more languages:
1. Update the `localization.json` file with translations for the new language.
2. Add the language option in the `index.html` dropdown.

---

## API Integration

### Gemini API
Handles the roast generation logic with advanced AI models.

---

## Troubleshooting

- **Error: "Gemini API error"**  
  Ensure your `GEMINI_API_KEY` is valid and correctly set in the `.env` file.

- **Localization not working**  
  Check the `localization.json` file for syntax errors or missing translations.

- **Server not starting**  
  Ensure all dependencies are installed and Node.js is properly set up.

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- [Gemini](https://gemini.com) for their advanced language models.
- [Marked.js](https://marked.js.org) for rendering Markdown in the browser.

Enjoy roasting responsibly! 🔥
