import React from "react";
import { HeaderSection } from "./pages/HeaderSection";
import { JobListingsSection } from "./pages/JobListingsSection/JobListingsSection";
import { MainContentSection } from "./pages/MainContentSection";
import { NavigationBarSection } from "./pages/NavigationBarSection/NavigationBarSection";

export const App = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbff] flex flex-col min-h-screen w-full">
      <div className="bg-[#fbfbff] w-full">
        <header className="w-full">
          <NavigationBarSection />
          <HeaderSection />
        </header>

        <main className="w-full">
          <MainContentSection />
        </main>

        <section className="w-full">
          <JobListingsSection />
        </section>
      </div>
    </div>
  );
};

export {App } from "./App";
