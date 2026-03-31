# 📚 Project Documentation

## 📖 Overview

This directory contains automatically generated documentation for the **Crossword App** project.

The documentation is created using **JSDoc** and provides a structured overview of the source code, including components, functions, and modules.

---

## ⚙️ How Documentation is Generated

Documentation is generated using the following configuration:

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

## 🚀 Generate Documentation

To regenerate the documentation, run:

```bash
npx jsdoc -c jsdoc.json
```

---

## 📂 Structure

The documentation includes:

* **Modules** – logical parts of the application
* **Components** – React components
* **Functions** – business logic
* **Constants** – static data

Main entry point:

```
docs/index.html
```

---

## 🧭 How to Use

1. Open `docs/index.html` in your browser
2. Navigate through sidebar sections
3. Explore components and functions
4. View parameters, return types, and examples

---

## 🛠️ Tools Used

* JSDoc
* Docdash (theme)

---

## 🔄 Updating Documentation

Whenever source code changes:

1. Update JSDoc comments in `src/`
2. Run:

   ```bash
   npx jsdoc -c jsdoc.json
   ```
3. Commit updated `docs/` folder

---

## 📌 Notes

* Documentation is generated automatically
* Do not edit files inside `docs/` manually
* All changes should be made in source files (`src/`)

---

## 👨‍💻 Author

Denys Lyhun

---
