import { TrendingUp, TrendingDown, PieChart, BarChart3, MapPin, Utensils, Hotel, Plane, Calendar, ShoppingBag, Coffee, Ticket } from "lucide-react";

interface InsightsScreenProps {
  // No props needed - navigation handled by BottomNavigation
}

const InsightsScreen = () => {
  const spendingCategories = [
    { name: "Accommodation", icon: Hotel, amount: 4200, percentage: 35, trend: "down", change: -5 },
    { name: "Food & Dining", icon: Utensils, amount: 3000, percentage: 25, trend: "up", change: 12 },
    { name: "Transportation", icon: Plane, amount: 2400, percentage: 20, trend: "down", change: -8 },
    { name: "Activities", icon: Ticket, amount: 1200, percentage: 10, trend: "up", change: 3 },
    { name: "Shopping", icon: ShoppingBag, amount: 720, percentage: 6, trend: "up", change: 15 },
    { name: "Others", icon: Coffee, amount: 480, percentage: 4, trend: "down", change: -2 },
  ];

  const monthlyData = [
    { month: "Jan", spent: 2800, budget: 3000 },
    { month: "Feb", spent: 1900, budget: 2500 },
    { month: "Mar", spent: 4200, budget: 4000 },
    { month: "Apr", spent: 3500, budget: 3500 },
    { month: "May", spent: 5100, budget: 5000 },
    { month: "Jun", spent: 3800, budget: 4000 },
  ];

  const destinationStats = [
    { destination: "Europe", trips: 3, avgSpend: 6500, satisfaction: 92 },
    { destination: "Southeast Asia", trips: 5, avgSpend: 2800, satisfaction: 88 },
    { destination: "Local (Malaysia)", trips: 8, avgSpend: 650, satisfaction: 85 },
    { destination: "East Asia", trips: 2, avgSpend: 5200, satisfaction: 95 },
  ];

  const travelPatterns = [
    { label: "Average Trip Duration", value: "6.5 days", trend: "up" },
    { label: "Preferred Booking Window", value: "3 weeks", trend: "stable" },
    { label: "Most Visited Month", value: "December", trend: "stable" },
    { label: "Budget Adherence Rate", value: "78%", trend: "up" },
  ];

  const maxSpent = Math.max(...monthlyData.map(d => d.spent));

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-4">
        <div className="mb-2">
          <p className="text-muted-foreground text-sm">Analytics</p>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Spending Insights
          </h1>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="px-6 mb-6 animate-slide-up">
        <div className="grid grid-cols-2 gap-3">
          <div className="glass-card rounded-2xl p-4 text-center">
            <p className="text-muted-foreground text-xs mb-1">Total Spent (YTD)</p>
            <p className="font-display text-xl font-bold text-foreground">RM {monthlyData.reduce((sum, d) => sum + d.spent, 0).toLocaleString()}</p>
            <span className="text-success text-xs">↓ 8% vs last year</span>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <p className="text-muted-foreground text-xs mb-1">Trips This Year</p>
            <p className="font-display text-xl font-bold text-foreground">18</p>
            <span className="text-primary text-xs">↑ 3 more than 2023</span>
          </div>
        </div>
      </div>

      {/* Monthly Trend Chart */}
      <div className="px-6 mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <div className="glass-card rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-foreground">Monthly Spending</h2>
            <div className="flex items-center gap-1 text-success text-sm">
              <TrendingDown className="w-4 h-4" />
              <span>-8% vs last year</span>
            </div>
          </div>
          
          {/* Simple Bar Chart */}
          <div className="h-32 flex items-end justify-between gap-2">
            {monthlyData.map((data, index) => {
              // Calculate bar height: container is 128px (h-32), reserve 36px for labels
              const chartHeight = 92; // 128px - 36px for labels
              const barHeightPx = Math.max((data.spent / maxSpent) * chartHeight, 20); // Minimum 20px
              const isOverBudget = data.spent > data.budget;
              return (
                <div key={data.month} className="flex flex-col items-center justify-end gap-2 flex-1" style={{ height: '100%' }}>
                  <div 
                    className="w-full rounded-t-lg"
                    style={{ 
                      height: `${barHeightPx}px`,
                      minHeight: '20px',
                      backgroundColor: isOverBudget ? 'hsl(var(--warning))' : 'hsl(var(--primary))'
                    }}
                  />
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="text-xs text-muted-foreground font-medium">{data.month}</span>
                    <span className="text-[10px] text-muted-foreground/70">RM{(data.spent / 1000).toFixed(1)}k</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spending by Category */}
      <div className="px-6 mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="font-display font-semibold text-foreground mb-3">By Category</h2>
        <div className="space-y-3">
          {spendingCategories.map((category, index) => (
            <div 
              key={category.name}
              className="glass-card rounded-2xl p-4 animate-slide-up"
              style={{ animationDelay: `${0.25 + index * 0.05}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-foreground">{category.name}</span>
                    <span className="font-display font-semibold text-foreground">
                      RM {category.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                    <div className={`flex items-center gap-1 text-xs ${category.trend === 'up' ? 'text-warning' : 'text-success'}`}>
                      {category.trend === 'up' ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      <span>{category.change > 0 ? '+' : ''}{category.change}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Stats */}
      <div className="px-6 mb-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <h2 className="font-display font-semibold text-foreground mb-3">By Destination</h2>
        <div className="space-y-3">
          {destinationStats.map((dest, index) => (
            <div 
              key={dest.destination}
              className="glass-card rounded-2xl p-4"
              style={{ animationDelay: `${0.35 + index * 0.05}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">{dest.destination}</span>
                </div>
                <span className="text-xs text-muted-foreground">{dest.trips} trips</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Avg. Spend: <span className="text-foreground font-semibold">RM {dest.avgSpend.toLocaleString()}</span></span>
                <span className="text-success text-xs">{dest.satisfaction}% satisfaction</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Patterns */}
      <div className="px-6 mb-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <h2 className="font-display font-semibold text-foreground mb-3">Travel Patterns</h2>
        <div className="glass-card rounded-2xl p-4 space-y-4">
          {travelPatterns.map((pattern) => (
            <div key={pattern.label} className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">{pattern.label}</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground">{pattern.value}</span>
                {pattern.trend === 'up' && <TrendingUp className="w-3 h-3 text-success" />}
                {pattern.trend === 'down' && <TrendingDown className="w-3 h-3 text-warning" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Behavioral Patterns */}
      <div className="px-6 mb-6 animate-slide-up" style={{ animationDelay: "0.5s" }}>
        <h2 className="font-display font-semibold text-foreground mb-3">Behavioural Insights</h2>
        <div className="glass-card rounded-2xl p-4 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-4 h-4 text-warning" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">Peak Spending Days</p>
              <p className="text-muted-foreground text-xs">You spend 40% more on Saturdays</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
              <PieChart className="w-4 h-4 text-success" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">Budget Adherence</p>
              <p className="text-muted-foreground text-xs">You stayed under budget on 14 of 18 trips</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">Seasonal Preference</p>
              <p className="text-muted-foreground text-xs">You prefer travelling during school holidays</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsScreen;