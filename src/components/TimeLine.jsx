import { Chrono } from "react-chrono";

export default function TimeLine({ onYearChange }) {
  const items = [
    { title: "2019", cardTitle: "Temporada 2019" },
    { title: "2020", cardTitle: "Temporada 2020" },
    { title: "2021", cardTitle: "Temporada 2021" },
    { title: "2022", cardTitle: "Temporada 2022" },
    { title: "2023", cardTitle: "Temporada 2023" },
    { title: "2024", cardTitle: "Temporada 2024" },
    { title: "2025", cardTitle: "Temporada 2025" },
  ];

  const handleSelect = (item) => {
    const year = item.title;
    if (onYearChange) onYearChange(year);
  };

  return (
    <div className="bg-slate-900 text-gray-100 py-6 px-2 flex justify-center">
      <div className="w-full md:w-3/4">
        <Chrono
          items={items}
          mode="HORIZONTAL"
          theme={{
            primary: "#00BFFF",
            secondary: "#001F3F",
            cardBgColor: "#002B5B",
            titleColorActive: "#00E6FF",
          }}
          slideShow
          cardHeight={80}
          onItemSelected={handleSelect}
        />
      </div>
    </div>
  );
}
