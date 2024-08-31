import React from "react";
import Home from "./Home";
import TagList from "./TagList";
import List from "./List";
import Footer from "./Footer";
import { useState } from "react";
const Main = ({ tog, Schema, display }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedPricing, setSelectedPricing] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const priceRanges = {
    "less than $50": (price) => price < 50,
    "between $50 to $100": (price) => price >= 50 && price <= 100,
    "more than $100": (price) => price > 100,
  };

  const filteredData = Schema.filter((service) => {
    const matchesSearchTerm =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesExperience =
      selectedExperience.length === 0 ||
      selectedExperience.includes(service.experience);
    const matchesPricing =
      selectedPricing.length === 0 ||
      selectedPricing.some((range) => priceRanges[range](service.price));
    const matchesSkills =
      selectedSkills.length === 0 ||
      selectedSkills.some((skill) => service.tags.includes(skill));
    return (
      matchesSearchTerm && matchesExperience && matchesPricing && matchesSkills
    );
  });
  return (
    <div className="main">
      <Home toggle={tog} />
      <TagList onSearch={setSearchTerm} onSearchTerm={searchTerm} />
      <List
        listing={filteredData}
        sSE={setSelectedExperience}
        SE={selectedExperience}
        select={display}
        setSkill={setSelectedSkills}
        Skill={selectedSkills}
        pricing={selectedPricing}
        setPricing={setSelectedPricing}
      />
      <Footer />
    </div>
  );
};

export default Main;
