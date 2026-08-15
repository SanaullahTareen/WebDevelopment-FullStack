# 🚀 Full-Stack AI & Portfolio Web Application

[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![PyTorch](https://img.shields.io/badge/PyTorch-2.0+-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)](https://pytorch.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

A modern, high-performance **Full-Stack Portfolio & Machine Learning Showcase Platform** designed to display interactive AI/ML projects, serve heavy deep learning models in real-time, and present clean, responsive web architecture.

This platform bridges cutting-edge **Frontend Engineering** (`.tsx`, `.jsx`, `.js`, Next.js, React, HTML/CSS) with robust **Backend Microservices** (`.py`, FastAPI, PyTorch, OpenCV, LLMs, YOLO) to deliver seamless, production-ready live web demos.

---

## 🌟 Key Highlights & Features

- **⚡ Modern Full-Stack Architecture**: Built with Next.js 14 App Router (`.tsx`/`.jsx`) on the frontend and asynchronous FastAPI (`.py`) on the backend.
- **🤖 Heavy ML Model Serving**: High-throughput inference API deployment for large models (Computer Vision, Ultralytics YOLOv11/v8, LLMs/RAG, PyTorch Transformers, ONNX Runtime).
- **🎨 Dynamic & Responsive UI**: Styled with Tailwind CSS and Framer Motion, featuring dark/light modes, interactive model parameter sliders, and real-time visualization canvas.
- **📡 Real-Time Streaming & WebSockets**: Server-Sent Events (SSE) and WebSocket connections for real-time LLM token streaming and live frame object detection feeds.
- **📊 Interactive Project Sandbox**: Built-in interactive demos allowing visitors to test models with custom sample inputs (images, audio, text prompts) directly in the browser.
- **🐳 Production-Ready Containerization**: Fully dockerized backend service with optimized multi-stage builds for seamless cloud deployment (Render, AWS, Vercel).

---

## 🛠️ Tech Stack & Languages

### **Frontend (`.tsx`, `.jsx`, `.js`, `.html`, `.css`)**
- **Framework**: [Next.js](https://nextjs.org/) (App Router), [React.js](https://reactjs.org/)
- **Languages**: TypeScript (`.tsx`), JavaScript ES6+ (`.jsx`, `.js`), HTML5, CSS3
- **Styling & UI**: Tailwind CSS, Lucide Icons, Framer Motion, Shadcn UI
- **State & Data Fetching**: React Query / TanStack Query, Axios, WebSockets

### **Backend & AI Engine (`.py`)**
- **Core Runtime**: Python 3.10+
- **Web Framework**: [FastAPI](https://fastapi.tiangolo.com/), Uvicorn (Asynchronous WSGI/ASGI)
- **Deep Learning Frameworks**: [PyTorch](https://pytorch.org/), [TensorFlow](https://www.tensorflow.org/), TorchScript, ONNX Runtime
- **Computer Vision**: OpenCV, Ultralytics YOLO (v8 / v11), Pillow, Albumentations
- **NLP & LLM Architectures**: Hugging Face Transformers, Unsloth, LangChain, LlamaIndex, Sentence-Transformers
- **Data Engineering & DB**: Pandas, NumPy, Apache Spark (PySpark), MongoDB, PostgreSQL, Redis

---

## 🏗️ System Architecture

```
                                 ┌─────────────────────────────────────────┐
                                 │       Client Browser / Frontend         │
                                 │    Next.js 14 + React + TypeScript     │
                                 │         (`.tsx` / `.jsx` / `.css`)      │
                                 └────────────────────┬────────────────────┘
                                                      │
                                           HTTP / REST / WebSockets
                                                      │
                                                      ▼
                                 ┌─────────────────────────────────────────┐
                                 │        Backend Microservice API         │
                                 │        FastAPI + Uvicorn (`.py`)        │
                                 └──────────┬───────────────────┬──────────┘
                                            │                   │
                     ┌──────────────────────┘                   └──────────────────────┐
                     ▼                                                                 ▼
┌──────────────────────────────────────────┐                       ┌──────────────────────────────────────────┐
│        Heavy ML/DL Inference Engine      │                       │        Databases & External Storage      │
│ ┌──────────────────────────────────────┐ │                       │ ┌──────────────────────────────────────┐ │
│ │ Ultralytics YOLOv11 / Computer Vision│ │                       │ │ MongoDB / PostgreSQL                 │ │
│ ├──────────────────────────────────────┤ │                       │ ├──────────────────────────────────────┤ │
│ │ PyTorch Transformers / HuggingFace   │ │                       │ │ Redis Cache (Inference Result Cache) │ │
│ ├──────────────────────────────────────┤ │                       │ ├──────────────────────────────────────┤ │
│ │ RAG Vector Index / LLM Pipelines     │ │                       │ │ Cloud Bucket (Image/Model Storage)   │ │
│ └──────────────────────────────────────┘ │                       │ └──────────────────────────────────────┘ │
└──────────────────────────────────────────┘                       └──────────────────────────────────────────┘
```

---

## 📁 Repository Structure

```directory
├── backend/                        # Python FastAPI Backend (`.py`)
│   ├── app/
│   │   ├── api/                    # REST & WebSocket API Routes
│   │   │   ├── v1/
│   │   │   │   ├── cv_inference.py # Computer Vision endpoints (YOLO, OpenCV)
│   │   │   │   ├── llm_rag.py      # LLM & RAG query streaming endpoints
│   │   │   │   └── analytics.py    # Big Data / Data processing endpoints
│   │   ├── core/                   # Security, CORS, Configuration
│   │   ├── models/                 # Model Loader, Preprocessing & Inference handlers
│   │   └── services/               # Core AI business logic & utility modules
│   ├── weights/                    # Heavy Model Weights (.pt, .onnx, .bin) [Git LFS]
│   ├── Dockerfile                  # Docker configuration for FastAPI server
│   ├── requirements.txt            # Python dependencies
│   └── main.py                     # ASGI Application Entrypoint
│
├── frontend/                       # Next.js Frontend App (`.tsx`, `.jsx`, `.js`)
│   ├── src/
│   │   ├── app/                    # Next.js App Router pages
│   │   │   ├── page.tsx            # Main Landing / Portfolio Page
│   │   │   ├── projects/           # Showcase projects dynamic routing
│   │   │   └── demos/              # Interactive Live Model Testing UI
│   │   ├── components/             # Reusable UI Components (`.tsx`, `.jsx`)
│   │   │   ├── ui/                 # Buttons, Cards, Modals, Loaders
│   │   │   ├── CanvasDetector.tsx  # Interactive Object Detection Canvas
│   │   │   └── LLMChatBox.tsx      # Token-streaming Chat Component
│   │   ├── hooks/                  # Custom React Hooks
│   │   ├── styles/                 # Global Tailwind CSS Styles (`globals.css`)
│   │   └── lib/                    # API clients, Axios instances, WebSockets
│   ├── public/                     # Static assets, images, icons
│   ├── package.json
│   ├── tsconfig.json
│   └── tailwind.config.js
│
└── README.md                       # Repository Documentation
```

---

## 💡 Showcase Projects Included in Platform

### 1. 👁️ Real-Time Automated Visual Inspection Engine
- **Stack**: Next.js (`.tsx`), FastAPI (`.py`), Ultralytics YOLOv11, OpenCV, PyTorch.
- **Description**: Web-based computer vision tool for industrial defect detection and object tracking. Uploads image/video frames or captures camera stream to render bounding boxes and defect metrics in real-time.

### 2. 🧠 Retrieval-Augmented Generation (RAG) & LLM Assistant
- **Stack**: React (`.jsx`/`.tsx`), Python (`.py`), LangChain, LlamaIndex, Unsloth, Hugging Face.
- **Description**: Custom domain chatbot utilizing fine-tuned open-source LLMs with vector search for instant context-aware retrieval and dynamic document scoring.

### 3. 📊 E-Commerce Streaming Analytics & ML Pipeline
- **Stack**: Python (`.py`), PySpark, Apache Kafka, MongoDB, Chart.js (`.jsx`).
- **Description**: Real-time streaming pipeline processing high-volume transactions with embedded customer churn prediction and dynamic BI dashboard visualizers.

### 4. 🏥 Medical Imaging Diagnostic Visualizer (Brain CT Scanner)
- **Stack**: Next.js, Python, PyTorch, TorchScript, Grad-CAM heatmap overlay.
- **Description**: Diagnostic assistance portal serving deep learning vision models that classify head CT scans and highlight ROI bounding boxes for medical reporting.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **yarn** or **pnpm**
- **Python**: v3.10 or higher
- **Git LFS** (for downloading large model weights if cloning locally)

---

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/fullstack-ai-portfolio.git
cd fullstack-ai-portfolio
```

---

### 2. Backend Setup (`FastAPI` & Python Models)

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate environment
# On Linux/macOS:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start local development server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The FastAPI backend interactive docs will be available at `http://localhost:8000/docs`.

---

### 3. Frontend Setup (`Next.js` / `React` / `TypeScript`)

```bash
# Open new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open `http://localhost:3000` in your browser to view the application.

---

## ⚡ Model Deployment Optimization Strategies

Serving heavy deep learning models on full-stack web platforms requires optimized backend strategies:

1. **Lazy Model Loading & Memory Caching**:
   - Heavy weights (PyTorch `.pt` or Hugging Face models) are initialized in worker memory upon server boot or lazy-loaded using singleton patterns to avoid execution latency per request.
2. **ONNX Runtime & TensorRT Conversion**:
   - PyTorch and YOLO models are converted to ONNX / TensorRT formats, reducing model inference times by up to **3x–5x** with minimal accuracy trade-off.
3. **Asynchronous Non-Blocking Processing**:
   - FastAPI async routes combined with thread pools keep the event loop unblocked while CPU/GPU heavy computations execute.
4. **Batching & Streaming**:
   - Implemented dynamic request batching for vision models and Server-Sent Events (SSE) for incremental token streaming from LLM pipelines.

---

## 🌐 Deployment Configuration

### **Frontend Deployment (Vercel / Netlify)**
- Automatically built and deployed via Vercel GitHub integration.
- Set environment variables in Vercel settings:
  ```env
  NEXT_PUBLIC_API_BASE_URL=https://your-backend-api.onrender.com
  ```

### **Backend Deployment (Docker / Render / AWS)**
Build and test the Docker container locally:
```bash
cd backend
docker build -t fullstack-ai-backend .
docker run -p 8000:8000 fullstack-ai-backend
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check out the [issues page](https://github.com/your-username/fullstack-ai-portfolio/issues).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## ✉️ Contact & Socials

- **Developer**: Sanaullah Tareen
- **GitHub**: [@SanaullahTareen07](https://github.com/SanaullahTareen07)
- **LinkedIn**: [Sanaullah Tareen](https://www.linkedin.com/in/sanaullah-tareen)
- **Hugging Face**: [@SanaullahTareen07](https://huggingface.co/SanaullahTareen07)
- **Portfolio**: [sanaullahtareen.me](https://sanaullahtareen.me)

---
<p align="center">
  Designed & Developed with ❤️ using Python, React, Next.js, and PyTorch.
</p>
