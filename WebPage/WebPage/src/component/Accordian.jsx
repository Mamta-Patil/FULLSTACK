import React, { useState } from 'react'
import { FaChevronUp, FaMinus, FaPlus } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';
import { accordionData } from '../data/accordian';

const Accordian = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div>
        <div className="max-w-lg mx-auto mt-12 space-y-4">
      {accordionData.map((item, index) => (
        <div key={index} className="border rounded-lg shadow-md">
          <button
            className="w-full flex justify-between items-center p-6 text-xl font-medium bg-white transition"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            {openIndex === index ? (
              <FaMinus className="w-5 h-5" />
            ) : (
              <FaPlus className="w-5 h-5" />
            )}
          </button>
          {openIndex === index && (
            <div className="p-4 border-t bg-white">
              <p className="text-black">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Accordian