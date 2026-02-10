import { NextResponse } from "next/server";

// Simple API route for chatbot (no OpenAI API needed for basic version)
export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    const lastMessage = messages[messages.length - 1]?.content || "";

    // Simple response logic (replace with OpenAI API if you want real AI)
    let response =
      "I'm a basic demo of Benson's chatbot. To implement full AI capabilities, you'd need an OpenAI API key.";

    if (lastMessage.toLowerCase().includes("project")) {
      response =
        "Benson has built several projects including GreenLeaf Dispensary (e-commerce), AgriInfo (offline-first app), Ashen Bites (food platform), and Styles N Tunes. You can see them all on his Projects page!";
    } else if (
      lastMessage.toLowerCase().includes("skill") ||
      lastMessage.toLowerCase().includes("tech")
    ) {
      response =
        "Benson specializes in Next.js, React, TypeScript, Node.js, and modern web development. He's also experienced with UI/UX design and mobile development with React Native.";
    } else if (
      lastMessage.toLowerCase().includes("contact") ||
      lastMessage.toLowerCase().includes("hire")
    ) {
      response =
        "You can contact Benson via WhatsApp (+254746562072), email (benshomwiti@gmail.com), or through the contact form on his website. He's available for remote work and new projects!";
    } else if (
      lastMessage.toLowerCase().includes("hello") ||
      lastMessage.toLowerCase().includes("hi")
    ) {
      response =
        "Hello! I'm Benson's portfolio assistant. I can tell you about his projects, skills, and how to contact him. What would you like to know?";
    }

    return NextResponse.json({ message: response });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        message:
          "Sorry, I encountered an error. Please contact Benson directly via WhatsApp or email.",
      },
      { status: 500 },
    );
  }
}
