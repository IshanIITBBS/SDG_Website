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
        <h1>The Contribution of Environmental Conservation to Sustainable Development in India</h1>
        <p className="subtitle">How environmental conservation supports India's sustainable future.</p>
      </header>

      <section className="implementation-section-wrapper">
        <div className="implementation-section" data-aos="fade-right">
          <h2>1. Preservation of Natural Resources</h2>
          <p>
            India's natural resources like water, forests, and biodiversity are crucial to agriculture, industry, and the economy. Initiatives such as the <b>National Afforestation Programme</b> and <b>Green India Mission</b> aim to increase forest cover and biodiversity, contributing to climate regulation and carbon sequestration. The <b>Namami Gange project</b> works on water conservation by restoring the Ganges River, ensuring access to clean water for various needs.
          </p>
        </div>

        <div className="implementation-section" data-aos="fade-left">
          <h2>2. Promoting Clean Energy</h2>
          <p>
            India's commitment to the <b>Paris Agreement</b> and efforts to reduce its carbon footprint include clean energy initiatives like the <b>Pradhan Mantri Ujjwala Yojana</b>, providing clean cooking fuel, and solar energy programs. These programs are pivotal in reducing fossil fuel dependence and greenhouse gas emissions, in line with the <b>National Action Plan on Climate Change (NAPCC)</b>.
          </p>
        </div>
      </section>

      <section className="implementation-section-wrapper">
        <div className="implementation-section" data-aos="fade-right" data-aos-delay="200">
          <h2>3. Sustainable Agriculture</h2>
          <p>
            Agriculture, a large sector in India, heavily depends on natural resources. <b>Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)</b> promotes water-efficient irrigation, and the <b>National Mission for Sustainable Agriculture (NMSA)</b> focuses on soil health and climate-resilient crops, reducing environmental impacts and improving productivity.
          </p>
        </div>

        <div className="implementation-section" data-aos="fade-left" data-aos-delay="200">
          <h2>4. Enhancing Biodiversity and Ecosystems</h2>
          <p>
            India's <b>National Biodiversity Action Plan</b> and the <b>Wildlife Protection Act</b> are geared toward biodiversity preservation. <b>Project Tiger</b>, for instance, has successfully protected tiger populations, boosting ecotourism while ensuring ecosystem balance.
          </p>
        </div>
      </section>

      <section className="implementation-section-wrapper">
        <div className="implementation-section" data-aos="fade-right" data-aos-delay="400">
          <h2>5. Sustainable Consumption and Waste Management</h2>
          <p>
            Urban growth has led to increased waste production. The <b>Swachh Bharat Abhiyan</b> enhances sanitation and waste management nationwide, and <b>Plastic Waste Management Rules</b> combat plastic pollution, fostering public health and conservation.
          </p>
        </div>

        <div className="implementation-section" data-aos="fade-left" data-aos-delay="400">
          <h2>6. Balancing Growth with Environmental Sustainability</h2>
          <p>
            Economic growth should align with environmental sustainability. Green buildings, sustainable infrastructure, and initiatives like <b>Make in India</b> are essential for eco-friendly industrial development. Emphasis on eco-tourism and sustainable agriculture generates income for local communities while preserving natural resources.
          </p>
        </div>
      </section>

      <footer className="implementation-footer">
        <p>
          India's sustainable development strategy hinges on environmental conservation. By promoting sustainable agriculture, mitigating climate change, and preserving natural resources, India can foster long-term growth while protecting its ecosystems.
        </p>
      </footer>
    </div>
  );
}
