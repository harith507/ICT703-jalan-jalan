import { RotateCcw, User, Bell, Shield, HelpCircle, ChevronRight, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

interface SettingsScreenProps {
  onResetPlanning: () => void;
  onEditProfile: () => void;
  onPrivacySettings: () => void;
}

const SettingsScreen = ({ onResetPlanning, onEditProfile, onPrivacySettings }: SettingsScreenProps) => {
  const [notifications, setNotifications] = useState(true);
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(false);

  const settingsSections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Edit Profile", action: "profile" },
        { icon: Shield, label: "Privacy Settings", action: "privacy" },
      ]
    },
    {
      title: "Preferences",
      items: [
        { icon: Bell, label: "Push Notifications", toggle: true, value: notifications, onChange: setNotifications },
        { icon: Bell, label: "Price Drop Alerts", toggle: true, value: priceAlerts, onChange: setPriceAlerts },
        { icon: Bell, label: "Weekly Summary", toggle: true, value: weeklyReport, onChange: setWeeklyReport },
      ]
    },
    {
      title: "Support",
      items: [
        { icon: HelpCircle, label: "Help Centre", action: "help" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-4">
        <div className="mb-2">
          <p className="text-muted-foreground text-sm">Preferences</p>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Settings
          </h1>
        </div>
      </div>

      {/* User Profile Card */}
      <div className="px-6 mb-6 animate-slide-up">
        <div className="glass-card rounded-2xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">Travel Explorer</h3>
              <p className="text-muted-foreground text-sm">explorer@email.com</p>
              <p className="text-primary text-xs mt-1">Premium Member</p>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      {settingsSections.map((section, sectionIndex) => (
        <div 
          key={section.title} 
          className="px-6 mb-6 animate-slide-up"
          style={{ animationDelay: `${sectionIndex * 0.1}s` }}
        >
          <h2 className="font-display font-semibold text-foreground mb-3">{section.title}</h2>
          <div className="glass-card rounded-2xl overflow-hidden">
            {section.items.map((item, index) => {
              const handleClick = () => {
                if (item.action === "profile") onEditProfile();
                else if (item.action === "privacy") onPrivacySettings();
              };

              const content = (
                <>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{item.label}</span>
                  </div>
                  {item.toggle ? (
                    <Switch
                      checked={item.value}
                      onCheckedChange={item.onChange}
                    />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                </>
              );

              return item.action ? (
                <button
                  key={item.label}
                  onClick={handleClick}
                  className={`w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors ${
                    index < section.items.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  {content}
                </button>
              ) : (
                <div
                  key={item.label}
                  className={`flex items-center justify-between p-4 ${
                    index < section.items.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Reset Travel Planning */}
      <div className="px-6 mb-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <h2 className="font-display font-semibold text-foreground mb-3">Data Management</h2>
        <div className="glass-card rounded-2xl overflow-hidden">
          <button 
            onClick={onResetPlanning}
            className="w-full flex items-center justify-between p-4 hover:bg-warning/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center">
                <RotateCcw className="w-4 h-4 text-warning" />
              </div>
              <div className="text-left">
                <span className="text-foreground text-sm block">Reset Travel Planning</span>
                <span className="text-muted-foreground text-xs">Clear all trips and start fresh</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Sign Out */}
      <div className="px-6 mb-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <Button 
          variant="outline" 
          className="w-full rounded-xl border-destructive/30 text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>

      {/* App Version */}
      <div className="px-6 text-center">
        <p className="text-muted-foreground text-xs">Travel Pulse v1.0.0</p>
      </div>
    </div>
  );
};

export default SettingsScreen;