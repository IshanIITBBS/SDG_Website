import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './info.css';

export default function SDGInfo() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animation should happen only once
    });
  }, []);

  return (
    <div className="info-page">
      {/* Title Section */}
      <header className="info-header">
        <h1>The Sustainable Development Goals (SDGs)</h1>
        <p className="info-subtitle">A blueprint to achieve a better and more sustainable future for all.</p>
      </header>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="card" data-aos="fade-in" data-aos-delay="200">
          <h2>Overview</h2>
          <p>
            The Sustainable Development Goals (SDGs) are a collection of 17 interconnected global goals designed to be a "blueprint to achieve a better and more sustainable future for all."
            Adopted by all United Nations Member States in 2015, the SDGs aim to address challenges like poverty, inequality, climate change, and justice.
          </p>
        </div>

        <div className="card" data-aos="fade-in" data-aos-delay="400">
          <h2>Building on Past Progress</h2>
          <p>
            The SDGs build on the successes of the Millennium Development Goals (MDGs), expanding to address not only poverty but also environmental protection, social inclusion, and economic development.
          </p>
        </div>

        <div className="card" data-aos="fade-in" data-aos-delay="600">
          <h2>Specific Targets and Indicators</h2>
          <p>
            Each of the 17 SDGs has specific targets and measurable indicators that enable the tracking of progress. These indicators provide a concrete framework for assessing improvements and identifying areas that require more focus.
          </p>
        </div>

        <div className="card" data-aos="fade-in" data-aos-delay="800">
          <h2>Three Core Themes</h2>
          <p>
            The SDGs are structured around three broad themes: Economic Growth, Social Inclusion, and Environmental Protection. These highlight that sustainable development is not just about economic progress but also about creating equitable societies and conserving natural resources.
          </p>
        </div>

        <div className="card" data-aos="fade-in" data-aos-delay="1000">
          <h2>The Urgency of Collective Action</h2>
          <p>
            By setting these goals, the UN aims to foster long-term sustainable growth that prioritizes human well-being, economic resilience, and environmental stewardship, recognizing the need for global cooperation to address challenges like climate change.
          </p>
        </div>
      </div>
    </div>
  );
}
