import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
// import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Colconnect</title>
        {/* <link rel="icon" href="/logo2.png" /> */}
      </Head>

      {/* Top bar - header */}
      <Header />

      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
        {/* <Rightbar /> */}
      </main>
    </div>
  );
}
