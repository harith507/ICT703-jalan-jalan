import { Home, LineChart, Calendar, BookOpen, Settings } from "lucide-react";

interface BottomNavigationProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

const BottomNavigation = ({ activeScreen, onNavigate }: BottomNavigationProps) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "insights", icon: LineChart, label: "Insights" },
    { id: "planner", icon: Calendar, label: "Planner" },
    { id: "reflection", icon: BookOpen, label: "Reflection" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border px-4 py-2 max-w-md mx-auto">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`nav-item ${activeScreen === item.id ? 'nav-item-active' : 'text-muted-foreground'}`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;