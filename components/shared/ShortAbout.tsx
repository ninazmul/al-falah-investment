import React from "react";

const ShortAbout = () => {
  return (
    <div className="flex flex-col items-center gap-3 md:gap-6 p-8 md:p-10 lg:p-20 max-w-5xl mx-auto">
      <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
        Welcome to Al Falah Investment
      </h3>
      <h1 className="h2-bold">
        About <span className="text-primary-500">Al Falah Investment</span>
      </h1>
      <p className="p-regular-16 md:p-regular-20 text-gray-600">
        We recognize the transformative power of education and spirituality in
        building resilient communities. That’s why our focus is on supporting
        projects that provide quality Islamic education and create spaces for
        worship and spiritual growth. By investing with Al Falah, you are not
        only securing financial returns but also playing an essential role in
        developing the infrastructure that nurtures future leaders, scholars,
        and community members.
      </p>
    </div>
  );
};

export default ShortAbout;
