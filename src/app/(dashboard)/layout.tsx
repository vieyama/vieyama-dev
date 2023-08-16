import {Header, Sidebar} from "./components";

export default function SiteLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="min-h-screen bg-background p-4 screen-870:ml-64">
        <div className="mt-24 h-auto">{children}</div>
      </main>
    </>
  );
}
