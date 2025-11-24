// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Resume download functionality
document.getElementById('resumeBtn').addEventListener('click', function() {
    const resumeContent = `
HARSHITHA
Computer Science Engineering Student

CONTACT
Email: harshitha@example.com
Location: Moodbidri, Mangaluru

EDUCATION
Alva's Institute of Engineering & Technology
Bachelor of Engineering in Computer Science
2022-2026 | CGPA: 9.04

TECHNICAL SKILLS
• Programming: Java, C, HTML, CSS, JavaScript, MySQL, PHP
• Tools: Git, GitHub, VS Code, Eclipse, Bootstrap
• Concepts: Data Structures, Algorithms, Web Development, OS

PROJECTS
College Fee Payment Management System
- Web platform for fee management and reporting
- Tech: Java, MySQL, PHP, JavaScript

Student Scholarship Management System  
- Automated application process with real-time tracking
- Tech: HTML, CSS, JavaScript, PHP, MySQL

ACHIEVEMENTS & CERTIFICATIONS
• CodeChef Silver Badge - 600+ problems solved
• FreeCodeCamp Responsive Web Design Certification
• National Level Hackathon Participant 2024
• iOS App Development Training Completion
• LeetCode - 280+ problems solved

EXTRACURRICULAR
• Volunteer - International Cultural Jamboree 2022
• Volunteer - Community Cleaning Drives 2022
    `;

    // Create and download text file
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'harshitha_resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show confirmation
    alert('Thank you! Your download will start shortly.');
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = '#fff';
        nav.style.backdropFilter = 'none';
    }
});

// Add loading animation to skill items
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});

// Simple console greeting
console.log('👋 Welcome to my portfolio! Feel free to look around.');