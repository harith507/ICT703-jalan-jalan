import { useState, useEffect } from "react";
import OnboardingScreen from "@/components/travel/OnboardingScreen";
import DashboardScreen from "@/components/travel/DashboardScreen";
import InsightsScreen from "@/components/travel/InsightsScreen";
import PlannerScreen from "@/components/travel/PlannerScreen";
import TripExpenseScreen from "@/components/travel/TripExpenseScreen";
import NudgeOverlay from "@/components/travel/NudgeOverlay";
import ReflectionScreen from "@/components/travel/ReflectionScreen";
import SettingsScreen from "@/components/travel/SettingsScreen";
import ProfileScreen from "@/components/travel/ProfileScreen";
import PrivacyScreen from "@/components/travel/PrivacyScreen";
import BottomNavigation from "@/components/travel/BottomNavigation";
import { toast } from "@/hooks/use-toast";

type Screen = "onboarding" | "dashboard" | "insights" | "planner" | "expenses" | "nudge" | "reflection" | "settings" | "profile" | "privacy";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("onboarding");
  const [activeNav, setActiveNav] = useState("home");
  const [showNudge, setShowNudge] = useState(false);

  const handleOnboardingComplete = () => {
    toast({
      title: "Profile Created!",
      description: "Your travel DNA has been saved.",
    });
    setCurrentScreen("dashboard");
  };

  const handleNavigate = (screen: string) => {
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setActiveNav(screen);
    if (screen === "home") {
      setCurrentScreen("dashboard");
    } else if (screen === "insights") {
      setCurrentScreen("insights");
    } else if (screen === "planner") {
      setCurrentScreen("planner");
    } else if (screen === "reflection") {
      setCurrentScreen("reflection");
    } else if (screen === "settings") {
      setCurrentScreen("settings");
    }
  };

  // Scroll to top whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  // When expenses screen is shown, set nav to planner
  const handleExpenseTrack = () => {
    setCurrentScreen("expenses");
    setActiveNav("planner");
  };

  const goBackToPlanner = () => {
    setCurrentScreen("planner");
    setActiveNav("planner");
  };

  const handleTripSelect = () => {
    setShowNudge(true);
  };

  const handleNudgeIgnore = () => {
    setShowNudge(false);
  };

  const handleNudgeAccept = () => {
    toast({
      title: "Smart Choice!",
      description: "Showing hotels in city centre.",
    });
    setShowNudge(false);
  };

  const handleReflectionSave = () => {
    toast({
      title: "Lesson Saved!",
      description: "Your insights have been added to your profile.",
    });
    setCurrentScreen("dashboard");
    setActiveNav("home");
  };

  const handleResetPlanning = () => {
    toast({
      title: "Travel Planning Reset",
      description: "All your trips and preferences have been cleared.",
    });
    setCurrentScreen("onboarding");
    setActiveNav("home");
  };

  const handleEditProfile = () => {
    setCurrentScreen("profile");
  };

  const handlePrivacySettings = () => {
    setCurrentScreen("privacy");
  };

  const goBackToSettings = () => {
    setCurrentScreen("settings");
    setActiveNav("settings");
  };

  // Show bottom nav only on root pages (not nested pages like expenses, profile, privacy)
  const showBottomNav = currentScreen !== "onboarding" && 
                       currentScreen !== "expenses" && 
                       currentScreen !== "profile" && 
                       currentScreen !== "privacy";

  return (
    <main className="min-h-screen bg-background">
      {currentScreen === "onboarding" && (
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      )}
      {currentScreen === "dashboard" && (
        <DashboardScreen />
      )}
      {currentScreen === "insights" && (
        <InsightsScreen />
      )}
      {currentScreen === "planner" && (
        <PlannerScreen onTripSelect={handleTripSelect} onExpenseTrack={handleExpenseTrack} />
      )}
      {currentScreen === "expenses" && (
        <TripExpenseScreen onBack={goBackToPlanner} />
      )}
      {currentScreen === "reflection" && (
        <ReflectionScreen onSave={handleReflectionSave} />
      )}
      {currentScreen === "settings" && (
        <SettingsScreen
          onResetPlanning={handleResetPlanning}
          onEditProfile={handleEditProfile}
          onPrivacySettings={handlePrivacySettings}
        />
      )}
      {currentScreen === "profile" && (
        <ProfileScreen onBack={goBackToSettings} />
      )}
      {currentScreen === "privacy" && (
        <PrivacyScreen onBack={goBackToSettings} />
      )}

      {/* Nudge Overlay - shown on top of any screen */}
      {showNudge && (
        <NudgeOverlay onIgnore={handleNudgeIgnore} onAccept={handleNudgeAccept} />
      )}

      {/* Bottom Navigation - shown on all screens except onboarding */}
      {showBottomNav && (
        <BottomNavigation activeScreen={activeNav} onNavigate={handleNavigate} />
      )}
    </main>
  );
};

export default Index;