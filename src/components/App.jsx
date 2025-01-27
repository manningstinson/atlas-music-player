import ThemeToggle from "./ThemeToggle";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#464659]">
      <div className="h-full flex flex-col justify-between p-8">
        <div className="mb-4">
          <ThemeToggle />
        </div>
        <MusicPlayer />
        <Footer />
      </div>
    </div>
  );
}

export default App;