import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleBackToTop}
      className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollToTop;
