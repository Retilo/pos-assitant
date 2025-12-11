# pos-assitant
Elevanlabs Agents for complete offline shopping journey


# 🛍️ Conversational POS Assistant  
### Voice-Driven Checkout + Customer Intent Intelligence for Retail

A real-time **voice-interactive Point-of-Sale (POS) assistant** for modern retail.  
Customers complete checkout through natural conversational AI, while the system extracts **keywords, intents, and sentiment** to power **AEO (Audience Engagement Optimization)** and **GEO (Generative Experience Optimization)** services.

Built during the **ElevenLabs Global Hackathon – Hyderabad** in under 5 hours.

---

## 🚀 Problem

Traditional retail POS and SCO (Self-Checkout) systems:
- Capture no insights from customer speech
- Offer poor user experience
- Miss sentiment, complaints, product interests, and future intent
- Cannot personalize recommendations during checkout

Retailers lose enormous **contextual customer intelligence**.

---

## 🎤 Our Solution: Conversational Checkout Journey

Customers speak naturally during checkout:

> “I want to quickly checkout these groceries… oh also do you have anything for dry skin?”

Our assistant:
1. **Listens** using ElevenLabs **ASR**
2. **Understands** intents & keywords via **Claude**
3. **Responds** using ElevenLabs **TTS**
4. **Completes checkout** using a mock commerce backend (Medusa optional)
5. **Extracts insights** for AEO/GEO analytics

This becomes the **first POS that learns from real conversations.**

---

## 🧠 Business Value (Why Retailers Want This)

### 1. Customer Intent Intelligence  
Captures natural voice signals:
- Product interests  
- Complaints  
- Preferences  
- Emotional tone  

### 2. Hyper-Personalized Recommendations  
Suggests relevant products in real-time.

### 3. Voice-Driven Customer Feedback Loop  
No surveys needed — insights come directly from conversation.

### 4. Revenue Model  
- POS Plug-in Licensing  
- AEO/GEO Insights Subscription  
- Recommendation Engine API  
- Retail Analytics Dashboard  

---

## 🛠️ Tech Stack

| Component | Tech |
|----------|------|
| Voice In/Out | ElevenLabs ASR + TTS |
| Reasoning | Anthropic Claude 3.5 |
| Backend | Node.js (Express) |
| Frontend | Basic browser interface |
| Optional Commerce | MedusaJS / mock checkout |

---

## 📂 Folder Structure

