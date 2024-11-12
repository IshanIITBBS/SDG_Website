import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './implementation.css';

export default function ImplementationStrategies() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="implementation-page">
      <header className="implementation-header">
        <h1>Implementation Strategies for SDGs</h1>
        <p className="subtitle">Key strategies for achieving the SDGs by 2030.</p>
      </header>

      <section className="implementation-section-wrapper">
        <div className="implementation-section" data-aos="fade-right">
          <h2>Global Partnerships and Collaboration</h2>
          <p>
            Partnerships are critical in mobilizing resources, sharing expertise, and fostering knowledge across borders. The SDGs, particularly Goal 17 (Partnerships for the Goals), emphasize the need for strong alliances between governments, international organizations, NGOs, and the private sector. These partnerships are essential for tackling global challenges such as climate change, biodiversity loss, and poverty.
          </p>
        </div>

        <div className="implementation-section" data-aos="fade-left">
          <h2>Funding and Resource Allocation</h2>
          <p>
            Adequate funding is a foundational requirement for implementing the SDGs. Resources are needed for projects in education, healthcare, infrastructure, and environmental protection. Funding comes from various sources such as national budgets, international aid, private sector investments, and philanthropy.
          </p>
        </div>
      </section>

      <section className="implementation-section-wrapper">
        <div className="implementation-section" data-aos="fade-right" data-aos-delay="200">
          <h2>Policies and Governance</h2>
          <p>
            Effective policies and governance structures at both national and international levels provide a supportive framework for SDG implementation. Governments must incentivize sustainable practices and create regulations that promote social protection and environmental sustainability.
          </p>
        </div>

        <div className="implementation-section" data-aos="fade-left" data-aos-delay="200">
          <h2>Community and Local Engagement</h2>
          <p>
            Sustainable development must be rooted in local communities. Localizing the SDGs involves adapting global goals to specific local needs, empowering communities to play an active role in sustainable development. Through local partnerships and awareness programs, communities can contribute to the SDGs in innovative and impactful ways.
          </p>
        </div>
      </section>

      <footer className="implementation-footer">
        <p>By strengthening partnerships, securing funding, establishing effective policies, and engaging local communities, the SDGs can be achieved globally and locally.</p>
      </footer>
    </div>
  );
}
