import {Header, Sidebar} from "./components";

export default function SiteLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="min-h-screen h-full p-4 screen-870:ml-64">
        <div className="mt-36 h-auto">{children}</div>
      </main>
    </>
  );
}
