import { useState } from "react";
import { ArrowLeft, Shield, Share2, BarChart3, MapPin, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface PrivacyScreenProps {
  onBack: () => void;
}

const PrivacyScreen = ({ onBack }: PrivacyScreenProps) => {
  const [dataSharing, setDataSharing] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [locationTracking, setLocationTracking] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState(false);

  const privacyOptions = [
    {
      icon: Share2,
      label: "Data Sharing",
      description: "Share anonymized data to improve recommendations",
      value: dataSharing,
      onChange: setDataSharing,
    },
    {
      icon: BarChart3,
      label: "Usage Analytics",
      description: "Help us understand how you use the app",
      value: analytics,
      onChange: setAnalytics,
    },
    {
      icon: MapPin,
      label: "Location Services",
      description: "Enable location-based features and suggestions",
      value: locationTracking,
      onChange: setLocationTracking,
    },
    {
      icon: Eye,
      label: "Public Profile",
      description: "Allow others to see your travel stats",
      value: profileVisibility,
      onChange: setProfileVisibility,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <Button variant="ghost" size="icon" onClick={onBack} className="h-8 w-8">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Account</p>
            <h1 className="font-display text-2xl font-bold text-foreground">
              Privacy Settings
            </h1>
          </div>
        </div>
      </div>

      {/* Privacy Info */}
      <div className="px-6 mb-6 animate-slide-up">
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Control how your data is used and shared. Your privacy is important to us -
            all settings can be changed at any time.
          </p>
        </div>
      </div>

      {/* Privacy Options */}
      <div className="px-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <div className="glass-card rounded-2xl overflow-hidden">
          {privacyOptions.map((option, index) => (
            <div
              key={option.label}
              className={`flex items-center justify-between p-4 ${
                index < privacyOptions.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-start gap-3 flex-1 mr-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <option.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-foreground text-sm font-medium block">
                    {option.label}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {option.description}
                  </span>
                </div>
              </div>
              <Switch
                checked={option.value}
                onCheckedChange={option.onChange}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Data Management */}
      <div className="px-6 mt-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="font-display font-semibold text-foreground mb-3">Data Management</h2>
        <div className="glass-card rounded-2xl overflow-hidden">
          <button className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors border-b border-border">
            <span className="text-foreground text-sm">Download My Data</span>
            <span className="text-muted-foreground text-xs">Request copy</span>
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-destructive/5 transition-colors">
            <span className="text-destructive text-sm">Delete Account</span>
            <span className="text-muted-foreground text-xs">Permanent</span>
          </button>
        </div>
      </div>

      {/* Last Updated */}
      <div className="px-6 mt-6 text-center">
        <p className="text-muted-foreground text-xs">
          Privacy policy last updated: December 2024
        </p>
      </div>
    </div>
  );
};

export default PrivacyScreen;
