import React, { useState } from "react";
import "./About.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function About() {
  const [faqItems, setFaqItems] = useState([
    {
      question: "What is an AppleParrot?",
      answer:
        "Audrey; the Parrot loves Apples a lot! However, Audrey loves Esports and the AppleParrots' community just as much!",
      isOpen: false,
    },
    {
      question: "How will my purchase support AppleParrots",
      answer:
        "With every purchase allows AppleParrots to continue our Esports vision and supports your favorite professional Esports players.",
      isOpen: false,
    },
    {
      question: "How long does it take for my order to ship?",
      answer:
        "Orders are usually processed and shipped within 3-5 business days. Once your order is shipped, you will receive a tracking number via email to track your package. You can track your package in Order Details",
      isOpen: false,
    },
    {
      question: "How do I request for a refund?",
      answer:
        "If you are not satisfied with your purchase, you can request a refund within 30 days of receiving your order. Please contact our customer support team with your order details to initiate the refund process.",
      isOpen: false,
    },
    {
      question: "What is the sizing of the apparel?",
      answer:
        "As we are a newly established Esports Organization, all AppleParrots' sizing is a one size fits all.",
      isOpen: false,
    },
  ]);

  const toggleFaqItem = (index) => {
    setFaqItems((prevFaqItems) =>
      prevFaqItems.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen };
        }
        return item;
      })
    );
  };

  return (
    <div className="about">
      <h1>About</h1>
      <p className="about-description">
        AppleParrots is an esports organization that specializes in selling
        merchandise for gaming enthusiasts. We are passionate about esports and
        strive to provide high-quality merchandise that showcases your love for
        gaming. From t-shirts and beanies to gaming accessories, our products
        are designed to enhance your gaming experience and let you express your
        unique style. Join the AppleParrots community and show off your gaming
        pride with our exclusive merchandise.
      </p>

      <div className="best-plays-video">
        <h2>Apple Parrots' Best Plays Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xLih2Lhb4tA"
          title="Apple Parrots' Best Plays Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${item.isOpen ? "open" : ""}`}
            onClick={() => toggleFaqItem(index)}
          >
            <div className="faq-question">
              {item.question}
              {item.isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {item.isOpen && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;