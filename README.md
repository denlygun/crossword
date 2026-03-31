# 🧩 Crossword App

<img width="946" height="819" alt="image" src="https://github.com/user-attachments/assets/b64da544-741a-4531-b888-c8a589051d39" />


## 📖 Description

**Crossword App** is a web application for generating and solving crossword puzzles.
The project demonstrates modern frontend development practices, including component-based architecture, state management, documentation generation, and GDPR compliance.

---

## 🚀 Features

* 🧠 Crossword puzzle generation
* 🎮 Interactive solving interface
* ⚙️ Game settings (grid size, timer)
* 📱 Responsive UI
* 🍪 Cookie consent (GDPR compliant)
* 📚 Auto-generated documentation (JSDoc)
* 🎨 UI component showcase (Storybook)

---

## 🛠️ Technologies

* React
* JavaScript (ES6+)
* Formik + Yup (forms & validation)
* Redux (state management)
* JSDoc (documentation generation)
* Storybook (UI components)

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/denlygun/crossword.git
cd crossword
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Project

Start development server:

```bash
npm start
```

Build project:

```bash
npm run build
```

---

## 📚 Documentation (JSDoc)

The project includes fully generated documentation.

### Generate documentation:

```bash
npx jsdoc -c jsdoc.json
```

### Open documentation:

Open in browser:

```
docs/index.html
```

### Documentation includes:

* Components
* Functions
* Modules
* Constants
* Props and examples

📄 Additional info:

```
docs/README.md
```

---

## 🎨 Storybook

Storybook is used to document and test UI components.

### Run Storybook:

```bash
npm run storybook
```

### Included components:

* 🔘 Button (basic component)

  * Default
  * Primary
  * Disabled
* 🧩 CrosswordGrid (complex component)

  * Empty grid
  * Filled grid
  * Interactive mode

---

## 🍪 GDPR & Cookies

This project includes a cookie consent popup compliant with GDPR.

Users can:

* Accept cookies
* Decline cookies
* Manage preferences

---

## 🔐 Privacy & Legal

The project includes required legal documentation:

* 📄 `PRIVACY_POLICY.md` — privacy policy and usage terms
* 📄 `GDPR.md` — GDPR compliance details
* 📄 `licenses.txt` — dependency licenses report

---

## 📜 License

This project is licensed under the MIT License.

---

## 🎥 Demo Video

📺 Demo video (required for submission):
👉 [Click!](https://drive.google.com/file/d/1v29LTfKO7cTdNjMiYslpi4ssxBoyr8U_/view?usp=sharing)

### Video should demonstrate:

* Documentation (JSDoc)
* Storybook components

---

## 📁 Project Structure

```
src/
 ├── components/
 ├── hooks/
 ├── pages/
 ├── store/
 ├── data/
 └── styles/

docs/              # Generated documentation (JSDoc)
.storybook/        # Storybook configuration
```

---

## ⚙️ Configuration

JSDoc config (`jsdoc.json`):

```json
{
  "source": {
    "include": ["src"]
  },
  "opts": {
    "destination": "./docs",
    "template": "node_modules/docdash",
    "recurse": true
  },
  "templates": {
    "default": {
      "includeDate": false
    }
  }
}
```

---

## 👨‍💻 Author

Denys Lyhunn
ipz233_lda@student.ztu.edu.ua

---

