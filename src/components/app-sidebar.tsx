import * as React from "react";
import {
    BookOpen,
    Command,
    LifeBuoy,
    Send,
    Settings2,
    SquareTerminal,
    Star
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import AddTaskModal from "./task/AddTaskModal";
import { useTheme } from "@/providers/ThemeProvider";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg"
    },
    navMain: [
        {
            title: "My Day",
            url: "/",
            icon: SquareTerminal,
            isActive: true,
            items: []
        },
        {
            title: "Favorites",
            url: "#",
            icon: Star,
            items: []
        },
        {
            title: "Projects",
            url: "#",
            icon: BookOpen,
            items: []
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#"
                },
                {
                    title: "Team",
                    url: "#"
                },
                {
                    title: "Billing",
                    url: "#"
                },
                {
                    title: "Limits",
                    url: "#"
                }
            ]
        }
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send
        }
    ],
    projects: []
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (theme === "dark") setTheme("light");
        else setTheme("dark");
    };

    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" onClick={toggleTheme}>
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <Command className="size-4" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">
                                    Acme Inc
                                </span>
                                <span className="truncate text-xs">
                                    Enterprise
                                </span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <div className="pt-4 px-4">
                    <AddTaskModal />
                </div>
                <NavMain items={data.navMain} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
