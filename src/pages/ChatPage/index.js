import React from "react";
import Navbar from "src/Section/Navbar";
import Footer from "src/Section/Footer";
import Header from "src/components/Header";
import ChatSection from "src/Section/ChatSection";

function ChatPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <ChatSection />
      <Footer />
    </div>
  );
}

export default ChatPage;
