import ThemeToggle from "./ThemeToggle";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="bg-transparent">
      <div className="flex flex-col justify-between p-8">
        <div className="mb-4 bg-transparent">
          <ThemeToggle />
        </div>
        <MusicPlayer />
        <Footer />
      </div>
    </div>
  );
}

export default App;