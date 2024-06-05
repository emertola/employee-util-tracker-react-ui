import {
  Bell,
  CircleUser,
  Home,
  Menu,
  Package2,
  Search,
  UsersRound,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FC } from 'react';

const BaseLayout: FC = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Button
              variant="link"
              className="flex items-center gap-2 font-semibold hover:no-underline">
              <Package2 className="h-6 w-6" />
              <span className="">Logo</span>
            </Button>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Button
                variant="link"
                className="flex items-center justify-start gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:no-underline hover:bg-slate-200">
                <Home className="h-4 w-4" />
                Dashboard
              </Button>
              <Button
                variant="link"
                className="flex items-center justify-start gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:no-underline hover:bg-slate-200">
                <UsersRound className="h-4 w-4" />
                Users
              </Button>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Button
                  variant="link"
                  className="flex items-center gap-2 text-lg font-semibold hover:no-underline">
                  <Package2 className="h-6 w-6" />
                  <span className="">Logo</span>
                </Button>
                <Button
                  variant="link"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground hover:no-underline hover:bg-slate-200">
                  <Home className="h-4 w-4" />
                  Dashboard
                </Button>
                <Button
                  variant="link"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground hover:no-underline hover:bg-slate-200">
                  <UsersRound className="h-4 w-4" />
                  Users
                </Button>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Content here</h1>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BaseLayout;
