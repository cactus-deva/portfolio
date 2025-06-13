import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SocialLinks } from "./SocialLinks";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SocialLinks />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
