import React, { useEffect, useState } from "react";
import "./window.css";

const startapps = [
  { name: "Microsoft Edge", icon: "🌐" },
  { name: "Settings", icon: "⚙️" },
  { name: "File Explorer", icon: "📁" },
  { name: "TIA Portal V18", icon: "🔷" },

  { name: "VS Code", icon: "💻" },
  { name: "GitHub", icon: "🐙" },
  { name: "Chrome", icon: "🌐" },
  { name: "Terminal", icon: "▣" },

  { name: "Word", icon: "📘" },
  { name: "Excel", icon: "📗" },
  { name: "PowerPoint", icon: "📙" },
  { name: "Outlook", icon: "📨" },

  { name: "Calculator", icon: "🧮" },
  { name: "Notepad", icon: "📝" },
  { name: "Paint", icon: "🎨" },
  { name: "Snipping Tool", icon: "✂️" },

  { name: "VLC Media Player", icon: "🍿" },
  { name: "Spotify", icon: "🎵" },
  { name: "WhatsApp", icon: "💬" },
  { name: "Telegram", icon: "✈️" },

  { name: "YouTube", icon: "▶️" },
  { name: "Discord", icon: "🎮" },
  { name: "Steam", icon: "🎮" },
  { name: "Netflix", icon: "🎬" },

  { name: "Arduino IDE", icon: "🔧" },
  { name: "MATLAB", icon: "📊" },
  { name: "SolidWorks", icon: "🛠️" },
  { name: "Proteus", icon: "⚡" },

  { name: "Postman", icon: "📮" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "React", icon: "⚛️" },
];

const recentFiles = [
  {
    name: "react-vite-desktop-ui.zip",
    time: "Today at 12:27",
    icon: "📦",
  },
  {
    name: "Lecture Notes.pdf",
    time: "Yesterday at 14:32",
    icon: "📕",
  },
  {
    name: "Project Report.docx",
    time: "Yesterday at 11:27",
    icon: "📘",
  },
  {
    name: "The Devil Wears Prada 2 2026...",
    time: "Sunday at 16:51",
    icon: "🎬",
  },
  {
    name: "Coyote vs Acme 2026 1080p...",
    time: "Saturday at 20:07",
    icon: "🎬",
  },
  {
    name: "Screenshot (4).png",
    time: "Saturday at 18:12",
    icon: "🖼️",
  },
];

function StartMenu() {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  // Actual time
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredApps = startapps.filter((app) =>
    app.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedApps = showAll
    ? filteredApps
    : filteredApps.slice(0, 28);

  const time = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = dateTime.toLocaleDateString([], {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="start-menu-wrapper">

      <div className="start-menu">

        {/* SEARCH */}
        <div className="start-search">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search for apps, settings, and documents"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* PINNED */}
        <div className="section-header">
          <h3>{search ? "Search results" : "Pinned"}</h3>

          {!search && (
            <button
              className="show-all"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show less" : "All apps  ›"}
            </button>
          )}
        </div>

        {/* APPS */}
        <div className="apps-grid">

          {displayedApps.map((app, index) => (
            <button
              className="app"
              key={index}
              title={app.name}
            >
              <div className="app-icon">
                {app.icon}
              </div>

              <span>{app.name}</span>
            </button>
          ))}

        </div>

        {/* RECENT */}
        {!search && !showAll && (
          <>
            <div className="section-header recommended-header">
              <h3>Recommended</h3>

              <button className="show-all">
                Show all  ›
              </button>
            </div>

            <div className="recent-grid">

              {recentFiles.map((file, index) => (
                <div className="recent-file" key={index}>

                  <div className="file-icon">
                    {file.icon}
                  </div>

                  <div className="file-info">
                    <strong>{file.name}</strong>
                    <small>{file.time}</small>
                  </div>

                </div>
              ))}

            </div>
          </>
        )}

        {/* BOTTOM */}
        <div className="start-bottom">

          <div className="user-section">
            <div className="user-avatar">
              S
            </div>

            <span>samuel</span>
          </div>

          <button
            className="power-button"
            title="Power"
          >
            ⏻
          </button>

        </div>

      </div>

      {/* OPTIONAL DESKTOP TIME */}
      <div className="desktop-clock">
        <strong>{time}</strong>
        <span>{date}</span>
      </div>

    </div>
  );
}

export default StartMenu;