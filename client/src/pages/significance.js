import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './significance.css';

export default function SustainableDevelopmentPage() {
    useEffect(() => {
        AOS.init({
          duration: 1000,  // Animation duration in ms
          once: true,      // Animation should happen only once
          offset: 100,     // Offset in pixels to trigger animations
        });
  }, []);

  return (
    <div className="development-page">
      {/* Title Section with Background Image */}
      <header className="development-header">
        <h1>Significance and Relavance to India</h1>
        <p className="development-subtitle">
          Addressing Key Challenges and Embracing the Sustainable Development Goals
        </p>
      </header>

      {/* Main Content */}
      <section className="development-cards-section">
        <div className="development-card" data-aos="fade-right">
          <h2>Tackling India's Developmental Challenges</h2>
          <p>
            India faces significant issues such as poverty, inequality, environmental degradation,
            and lack of access to essential services like healthcare, education, and clean water. 
            Goals like No Poverty (SDG 1), Zero Hunger (SDG 2), and Clean Water and Sanitation (SDG 6) 
            provide frameworks for tackling these challenges. India’s shift toward renewable energy
            is supported by Affordable and Clean Energy (SDG 7), crucial for the sustainable management
            of its urban centers.
          </p>
        </div>

        <div className="development-card" data-aos="fade-left" data-aos-delay="200">
          <h2>Advancing Inclusive Growth and Social Equity</h2>
          <p>
            India’s diversity necessitates inclusive growth. Initiatives like PMJDY for financial
            inclusion and Beti Bachao Beti Padhao promote Gender Equality (SDG 5), Decent Work and 
            Economic Growth (SDG 8), and Reduced Inequalities (SDG 10). These programs support marginalized 
            communities, enabling broader access to education, healthcare, and economic opportunities.
          </p>
        </div>

        <div className="development-card" data-aos="fade-right">
          <h2>Promoting Economic Development with Sustainability</h2>
          <p>
            Through programs like the International Solar Alliance and Ujjwala Yojana, India aims to
            expand its renewable energy sources. The Make in India initiative also aligns with Responsible 
            Consumption and Production (SDG 12), encouraging sustainable industrial development.
          </p>
        </div>

        <div className="development-card" data-aos="fade-left" data-aos-delay="100">
          <h2>Addressing Environmental Sustainability and Climate Change</h2>
          <p>
            India's commitment to climate action is embodied in initiatives like the National Action Plan
            on Climate Change (NAPCC). This aligns with Climate Action (SDG 13) and Life on Land (SDG 15), 
            addressing the need for cleaner energy, waste management, and water conservation.
          </p>
        </div>

        <div className="development-card" data-aos="fade-right">
          <h2>Enhancing International Collaborations</h2>
          <p>
            SDG 17, Partnerships for the Goals, highlights the importance of global collaboration. Through
            the India-Africa Forum Summit and alliances with BRICS and the WTO, India shares expertise and
            resources to advance sustainable development both nationally and globally.
          </p>
        </div>

        <div className="development-card" data-aos="fade-left" data-aos-delay="100">
          <h2>Fostering Effective Governance</h2>
          <p>
            Programs like Digital India and GST exemplify India's strides toward SDG 16: Peace, Justice, 
            and Strong Institutions. These initiatives focus on transparency, accountability, and streamlined 
            governance, promoting fair practices.
          </p>
        </div>

        <div className="development-card" data-aos="fade-right">
          <h2>Regional Adaptation of the SDGs</h2>
          <p>
            India’s Swachh Bharat Abhiyan and Smart Cities Mission address Clean Water and Sanitation 
            (SDG 6) and Sustainable Cities and Communities (SDG 11). These programs adapt the SDGs to local 
            needs, supporting diverse regional challenges.
          </p>
        </div>

        <div className="development-card" data-aos="fade-left" data-aos-delay="100">
          <h2>Monitoring and Accountability</h2>
          <p>
            India's SDG progress is tracked by the SDG India Index, developed by NITI Aayog. This index 
            identifies areas for improvement and enhances policy planning, aligning with evidence-based 
            frameworks.
          </p>
        </div>

        <div className="development-card" data-aos="fade-right">
          <h2>Strategic Vision for Sustainable Growth</h2>
          <p>
            Prioritizing accessible education (SDG 4), sustainable energy (SDG 7), and responsible 
            consumption (SDG 12) ensures that India’s development benefits current and future generations, 
            advancing both inclusive and sustainable growth.
          </p>
        </div>
      </section>
    </div>
  );
}
