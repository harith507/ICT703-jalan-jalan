import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Plane, TrendingUp } from "lucide-react";

interface OnboardingScreenProps {
  onComplete: () => void;
}

const OnboardingScreen = ({ onComplete }: OnboardingScreenProps) => {
  const [comfortCost, setComfortCost] = useState([50]);
  const [pacing, setPacing] = useState([50]);
  const [budget, setBudget] = useState("15000");

  return (
    <div className="min-h-screen bg-background flex flex-col px-6 py-8 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-10 animate-slide-up">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-2">
          Define Your Travel DNA
        </h1>
        <p className="text-muted-foreground text-sm">
          Help us understand your travel style
        </p>
      </div>

      {/* Sliders */}
      <div className="space-y-8 flex-1">
        {/* Comfort vs Cost Slider */}
        <div 
          className="glass-card rounded-2xl p-6 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-success" />
            </div>
            <span className="font-medium text-foreground">Comfort vs. Cost</span>
          </div>
          
          <Slider
            value={comfortCost}
            onValueChange={setComfortCost}
            max={100}
            step={1}
            className="my-6"
          />
          
          <div className="flex justify-between text-xs">
            <span className={`px-3 py-1 rounded-full transition-all ${comfortCost[0] < 50 ? 'bg-success/20 text-success font-medium' : 'text-muted-foreground'}`}>
              Value Saver
            </span>
            <span className={`px-3 py-1 rounded-full transition-all ${comfortCost[0] >= 50 ? 'bg-primary/20 text-primary font-medium' : 'text-muted-foreground'}`}>
              Luxury/Comfort
            </span>
          </div>
        </div>

        {/* Pacing Slider */}
        <div 
          className="glass-card rounded-2xl p-6 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Plane className="w-4 h-4 text-accent" />
            </div>
            <span className="font-medium text-foreground">Pacing</span>
          </div>
          
          <Slider
            value={pacing}
            onValueChange={setPacing}
            max={100}
            step={1}
            className="my-6"
          />
          
          <div className="flex justify-between text-xs">
            <span className={`px-3 py-1 rounded-full transition-all ${pacing[0] < 50 ? 'bg-accent/20 text-accent font-medium' : 'text-muted-foreground'}`}>
              Relaxed
            </span>
            <span className={`px-3 py-1 rounded-full transition-all ${pacing[0] >= 50 ? 'bg-primary/20 text-primary font-medium' : 'text-muted-foreground'}`}>
              Packed Itinerary
            </span>
          </div>
        </div>

        {/* Budget Input */}
        <div 
          className="glass-card rounded-2xl p-6 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <label className="block font-medium text-foreground mb-4">
            Annual Travel Budget Goal
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
              RM
            </span>
            <Input
              type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value.replace(/\D/g, ""))}
              className="pl-12 h-14 text-xl font-display font-semibold bg-secondary/50 border-0 rounded-xl"
              placeholder="15,000"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            This helps us track your spending patterns
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <Button 
          onClick={onComplete}
          className="w-full h-14 text-base"
          size="lg"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Start My Journey
        </Button>
        <p className="text-center text-xs text-muted-foreground mt-4">
          You can adjust these anytime in settings
        </p>
      </div>
    </div>
  );
};

export default OnboardingScreen;
