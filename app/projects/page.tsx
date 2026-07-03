import { brillant } from "../fonts";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section
        className="min-h-screen bg-black bg-center bg-cover flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/circle.gif')",
        }}
      >
        <div className="text-center">
          <h1 className={`${brillant.className} text-5xl`}>🧩 Projects</h1>

          <p className="mt-4 text-xl">
            I craft beautiful, functional web experiences.
          </p>
        </div>
      </section>

      <ProjectCard
        title="Smart India Hackathon 2025 Finalist: DocuLynk - KMRL Document Intelligence"
        description="Designed and developed an AI-powered document intelligence platform for Kochi Metro Rail Limited during Smart India Hackathon 2025. The platform enables multilingual document ingestion, OCR-based text extraction, semantic search, AI summarization, duplicate detection, and collaborative document workflows."
        stack="React • Django REST Framework • PostgreSQL • AWS S3 • OCR"
        github="https://github.com/KMRL-Org/KMRL"
        video="https://youtube.com/embed/4YpT1sfRQTU?si=WiOHFVSX20DfDtpE"
        note=""
      />

      <ProjectCard
        title="HerWay"
        description="AI-powered intelligent safety assistant for solo female travelers featuring multilingual threat detection, SOS alerts and community safety tools."
        stack="React • FastAPI • SQLite • Whisper • Gemini AI"
        github="https://drive.google.com/drive/folders/15PFEx96CA95WZVL6uSfkVNR3sCt58CBA?usp=sharing"
        video="https://www.youtube.com/embed/..."
        note="Video walkthrough coming soon"
      />

      <ProjectCard
        title="CyberVoid Dash"
        description="Developed CyberVoid Dash, a retro-inspired 2D platformer in Godot 4.4.1 featuring gravity-switching gameplay inspired by G-Switch. Designed nearly all game assets, including pixel-art sprites, environments, animations, and gameplay systems, while implementing multiple levels and progression mechanics."
        stack="Godot 4.4.1 • GDScript • Aseprite • Pixel Art"
        github="https://github.com/SphurtiD/CyberVoid-Dash"
        video="https://www.youtube.com/embed/Y_AOzUXCpEU"
        note=""
      />

      <ProjectCard
        title="RAYS – Intelligent Healthcare Assistant"
        description="Built an AI-powered healthcare platform featuring a RAG-based medical chatbot, secure health record vault, disease prediction models, and interactive wellness assessment tools for preliminary health screening."
        stack="React.js • Django REST Framework • Next.js (Prototype UI) • RAG • LLM"
        note="The showcased repository contains the Next.js frontend prototype. The complete React + Django implementation is linked in the YouTube video description."
        github="https://github.com/SphurtiD/code_trial"
        video="https://www.youtube.com/embed/hJ8C7MjFArs"
      />
    </div>
  );
}
