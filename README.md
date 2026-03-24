# Assignment1_AWS_C# UniEvent - AWS Cloud Assignment

## 📌 Project Overview
UniEvent is a web-based application that displays university events.  
This project demonstrates how a scalable system can be designed using AWS services.

---

## ⚙️ AWS Services Used
- EC2 → Hosts the web application  
- S3 → Stores event images  
- IAM → Provides secure access  
- VPC → Network isolation  
- Elastic Load Balancer → Distributes traffic  

---

## 🧠 Architecture Design

User → Load Balancer → EC2 Instances → S3 Storage

---

## 🚀 Working

1. User opens the website  
2. Clicks "Load Events"  
3. Events are displayed on screen  
4. In a real system, data would be fetched from an external API  

---

## 🔐 Security

- IAM roles used  
- EC2 placed in private subnet  
- Secure S3 bucket  

---

## 📈 Scalability & Fault Tolerance

- Multiple EC2 instances  
- Load Balancer distributes traffic  
- System works even if one instance fails  

---

## 📂 Project Files

- index.html → frontend  
- script.js → event handling  

---

## 👨‍💻 Author
Muhammad Ashir