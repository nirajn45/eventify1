'use client'

import * as React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { CalendarDays, LogOut, PieChart, Settings, Users, Search, Bell, ChevronDown } from "lucide-react"

// Utility function
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

// Button component
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
    size?: 'default' | 'sm' | 'lg' | 'icon'
  }
>(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90',
        variant === 'destructive' && 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        variant === 'outline' && 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        variant === 'secondary' && 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        variant === 'ghost' && 'hover:bg-accent hover:text-accent-foreground',
        variant === 'link' && 'text-primary underline-offset-4 hover:underline',
        size === 'default' && 'h-10 px-4 py-2',
        size === 'sm' && 'h-9 rounded-md px-3',
        size === 'lg' && 'h-11 rounded-md px-8',
        size === 'icon' && 'h-10 w-10',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

// Card components
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

// DropdownMenu components
const DropdownMenu = ({ trigger, children }: { trigger: React.ReactNode, children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="relative inline-block text-left">
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

const DropdownMenuItem = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    role="menuitem"
    {...props}
  >
    {children}
  </div>
)

// Input component
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

// ScrollArea component
const ScrollArea = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("overflow-auto", className)}>
      {children}
    </div>
  )
}

// Dashboard component
export default function DashboardPage() {
  const [activeView, setActiveView] = React.useState('dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

  const organizerName = "John Doe"
  const totalEvents = 15
  const upcomingEventsCount = 5
  const totalAttendees = 1200

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const monthlyEventData = [
    { name: 'Jan', events: 4 },
    { name: 'Feb', events: 3 },
    { name: 'Mar', events: 2 },
    { name: 'Apr', events: 5 },
    { name: 'May', events: 7 },
    { name: 'Jun', events: 6 },
  ]

  const attendeeGrowthData = [
    { name: 'Jan', attendees: 200 },
    { name: 'Feb', attendees: 350 },
    { name: 'Mar', attendees: 450 },
    { name: 'Apr', attendees: 600 },
    { name: 'May', attendees: 800 },
    { name: 'Jun', attendees: 1200 },
  ]

  const upcomingEvents = [
    { id: 1, name: 'Tech Conference 2024', date: '2024-03-15', attendees: 500 },
    { id: 2, name: 'Annual Charity Gala', date: '2024-03-22', attendees: 300 },
    { id: 3, name: 'Product Launch Event', date: '2024-04-05', attendees: 250 },
    { id: 4, name: 'Summer Music Festival', date: '2024-06-10', attendees: 1000 },
    { id: 5, name: 'Business Networking Mixer', date: '2024-04-18', attendees: 150 },
  ]

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalEvents}</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{upcomingEventsCount}</div>
                  <p className="text-xs text-muted-foreground">Next event in 3 days</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Attendees</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalAttendees}</div>
                  <p className="text-xs text-muted-foreground">+180 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Satisfaction</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M8 11.857l2.5 2.5L15.857 9M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8</div>
                  <p className="text-xs text-muted-foreground">+0.3 from last month</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Monthly Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyEventData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="events" fill="#8884d8" animationDuration={1500} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Attendee Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={attendeeGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="attendees" stroke="#8884d8" strokeWidth={2} animationDuration={1500} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>You have {upcomingEventsCount} upcoming events this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] w-full">
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-center">
                        <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                        <div className="ml-4 space-y-1 flex-1">
                          <p className="text-sm font-medium leading-none">{event.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Date: {new Date(event.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="ml-auto font-medium">{event.attendees} attendees</div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </>
        )
      case 'events':
        return <h2 className="text-2xl font-semibold">Events Management</h2>
      case 'attendees':
        return <h2 className="text-2xl font-semibold">Attendees Management</h2>
      case 'settings':
        return <h2 className="text-2xl font-semibold">Settings</h2>
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white text-gray-800 w-64 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Eventify</h1>
        </div>
        <nav className="mt-6">
          {[
            { name: 'Dashboard', icon: PieChart },
            { name: 'Events', icon: CalendarDays },
            { name: 'Attendees', icon: Users },
            { name: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveView(item.name.toLowerCase())}
              className={`flex items-center w-full px-4 py-2 mt-2 text-sm transition-colors duration-200 ${
                activeView === item.name.toLowerCase()
                  ? 'bg-gray-200 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5 mr-2" />
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h2 className="text-2xl font-semibold text-gray-800 ml-4">{activeView.charAt(0).toUpperCase() + activeView.slice(1)}</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-64 pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <DropdownMenu
                trigger={
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="User avatar"
                      className="rounded-full"
                      width={32}
                      height={32}
                    />
                  </Button>
                }
              >
                <div className="px-4 py-3">
                  <p className="text-sm font-medium leading-none">{organizerName}</p>
                  <p className="text-xs leading-none text-gray-400 mt-1">
                    john.doe@example.com
                  </p>
                </div>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}