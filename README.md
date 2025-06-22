# Fantasy Novel Planning System

Ever tried juggling fifteen different documents just to keep track of your fantasy world's magic system, timeline, and whether your protagonist's best friend is actually their long-lost sibling? Yeah, we've been there.

This React-powered planning tool puts everything in one place—your worldbuilding notes, character arcs, magic rules, plot beats, and that epic trilogy you're definitely going to finish this time. Think of it as a digital notebook that actually makes sense, with the bonus of autosave so you'll never lose that brilliant 2 AM plot twist again.

## ✨ What You Get

**Everything in One Place**  
No more bouncing between seventeen browser tabs. Your worldbuilding, characters, magic system, story structure, trilogy planning, and timeline all live together in a clean, spreadsheet-style interface that won't make your eyes bleed.

**Actually Saves Your Work**  
Fields automatically save as you type (or when you click away), plus there's a backup save every 30 seconds. Because nothing hurts more than losing three hours of character development to a browser crash.

**Export When You Need It**  
Hit one button and download everything as a clean JSON file. Perfect for backups, sharing with beta readers, or when you inevitably want to reorganize everything in a different tool.

**Built for Writers, by Developers**  
The whole thing is component-based and data-driven, which is fancy talk for "it's easy to customize." Want to add a new section for your invented languages? The structure makes it simple to extend.

## 🚀 Getting This Running

You'll need Node.js (version 16.5 or newer works great) and either npm or yarn installed on your computer.

**Grab the code:**

```bash
git clone https://github.com/your-username/fantasy-planner.git
cd fantasy-planner
npm install
```

## 📦 Available Scripts

- `npm run dev` — start dev server (HMR)
- `npm run build` — production build into `/dist`
- `npm run preview` — serve the production build locally

**Fire it up:**

```bash
npm run dev
```

Then open your browser to wherever Vite tells you to go (usually `http://localhost:5173`).

**Ready to deploy:**

```bash
npm run build
```

This creates a `dist` folder with everything you need to host anywhere that serves static files.

## 🛠 How It's Built

This isn't just thrown together—it's got a clean structure that makes sense:

- **React components** handle all the UI pieces (header, tabs, tables, export button)
- **JavaScript objects** define what goes in each table, so adding new fields is straightforward
- **Custom hooks** manage the autosave magic and data persistence
- **Separated styling** keeps all the CSS in one place instead of scattered everywhere

The data lives in your browser's session storage while you work, and you can export it as JSON whenever you want a permanent backup.

## Project Structure

```text
fantasy-planner/
├── index.html        # Vite entrypoint, mounts <App/> into #root
├── public/           # Static assets (favicon, etc.)
├── src/
│   ├── main.jsx      # React bootstrap + global CSS import
│   ├── App.jsx       # High-level layout & state wiring
│   ├── components/   # Reusable UI pieces
│   │   ├── Header.jsx
│   │   ├── TabNav.jsx
│   │   ├── Spreadsheet.jsx   # Renders each “sheet” based on data config
│   │   └── ExportButton.jsx
│   ├── hooks/
│   │   └── useAutoSave.js    # Persist form data to sessionStorage
│   ├── utils/
│   │   └── exportData.js     # Gathers fields and triggers JSON download
│   └── styles/
│       └── style.css         # All app-wide CSS
├── vite.config.js    # Vite configuration
├── package.json
└── README.md         # You are here
```

## 🎯 Perfect For

- Fantasy authors who are tired of losing track of their world's rules
- Anyone planning a series and needs to keep multiple storylines straight
- Writers who want something more flexible than a traditional outline but less chaotic than scattered notes
- People who like having their planning tools actually save their work automatically

## 🔧 Customization

- Add or Reorder Tabs
  In src/Spreadsheet.jsx, update the sections array. Each section object controls one tab’s table.

- Define New Rows
  Under sections[i].rows, add objects with isTitle or fields arrays (type: 'static' | 'input' | 'textarea').

- Styling
  All styles live in src/styles/style.css. Use classNames like .section-title, .character-arc, .plot-point to target rows.

## 🤝 Want to Contribute?

Found a bug? Have an idea for a feature that would make your writing life easier? Issues and pull requests are welcome. This tool exists to make fantasy writing less of a logistical nightmare, so if you've got ideas to make it better, we'd love to hear them.

1. Fork the repo & create a feature branch:

```
   git checkout -b feature/YourFeature
```

2. Commit your changes & push:

```
   git commit -m "Add YourFeature"
```

3. Open a Pull Request against main.

Please keep code style consistent, and update this README if you add significant features.

---

_Now stop procrastinating and go write that novel._ ✍️

## 📄 License

This project is released under the MIT License with the Commons Clause—
permission granted for personal/non-commercial use only. Commercial use,
distribution, or derivative works require a separate license from the author. See [LICENSE](LICENSE.txt) for details.
