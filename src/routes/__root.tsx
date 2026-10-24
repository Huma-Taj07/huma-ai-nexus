import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFFDF8] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-extrabold">404</h1>
        <p className="mt-4 text-sm text-muted-foreground">Page not found.</p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-[#FFC83D] px-6 py-3 text-sm font-bold"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Huma Taj — AI Engineer & Researcher" },
      {
        name: "description",
        content:
          "AI Engineer & Researcher building intelligent systems with Computer Vision and scalable backend architecture.",
      },
      { name: "author", content: "Huma Taj" },
      { property: "og:title", content: "Huma Taj — AI Engineer & Researcher" },
      {
        property: "og:description",
        content: "Turning complex problems into intelligent systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
