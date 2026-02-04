# Agnus – Master Complex Concepts with AI

*Upload. Learn. Master.*

[![Status: Private](https://img.shields.io/badge/status-private-red)](https://github.com/your-org/agnus)
[![Python](https://img.shields.io/badge/python-3.11%2B-blue)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/API-FastAPI-009688?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Deployment: AWS](https://img.shields.io/badge/deploy-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![Development Status](https://img.shields.io/badge/development-active-success)](#development-status)

*Agnus* is your intelligent AI learning agent that transforms any complex document or topic into deep, lasting mastery — quickly and effectively.

Just *upload* your material (PDFs, notes, research papers, textbooks, slides…). Agnus instantly generates powerful study tools so you can *learn* efficiently and truly *master* the subject.

- 📊 Flowcharts & concept maps  
- 🃏 Smart flashcards (Anki-compatible)  
- ✍️ Adaptive quizzes & assessments  
- 🎤 Targeted interview preparation  
- 🔍 Deep research expansions & explanations  
- 🔊 Natural-sounding audio summaries & narrations  

Designed for students, engineers, researchers, domain experts, and professionals who need to rapidly understand and own difficult material.

## ✨ Core Features

| Feature                  | Description                                                                 | Output Formats                  |
|--------------------------|-----------------------------------------------------------------------------|---------------------------------|
| Multi-format Upload      | PDF, Markdown, TXT, DOCX, images with text                                  | —                               |
| Visual Concept Maps      | Auto-generated flowcharts & dependency diagrams                             | PNG, SVG, editable Mermaid      |
| Intelligent Flashcards   | Cloze deletions, Q&A, tagged, spaced-repetition friendly                    | Markdown, .apkg (Anki)          |
| Adaptive Assessments     | MCQs, short answers, code problems; scales with your level                  | Interactive + PDF export        |
| Interview Simulator      | Role-specific technical & behavioral questions + model answers              | Structured Markdown / PDF       |
| Deep Research            | Expands concepts, uncovers connections, highlights open questions           | Report + inline sources         |
| Audio Explanations       | Clear voice narration — summaries, step-by-steps, Feynman-style             | MP3                             |
| Multi-language Support   | Process and generate in 20+ languages                                       | —                               |

## Architecture Overview

- *Frontend*: Next.js 16 + Tailwind CSS (responsive web app)  
- *Backend*: FastAPI (Python 3.11+)  
- *Document Ingestion*: PyMuPDF and OCR model
- *Diagrams*: AI-generated → Mermaid.js rendering  
- *Storage*: Local or S3-compatible (configurable)

## Quick Start (Local / Development)

### Docker (recommended)

```bash
git clone https://github.com/your-org/agnus.git   # or your internal clone URL
cd agnus

cp .env.example .env          # add your API keys & settings
docker compose up --build
