import {Header, Sidebar} from "./components";

export default function SiteLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="h-screen w-screen bg-background">
      <Header />
      <div className="flex">
        <div className="hidden tablet:flex">
          <Sidebar />
        </div>
        <main className="relative top-21 h-full w-full px-8 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
