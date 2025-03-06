"use client";
import React, { useState } from "react";

// Define props type for the Title
interface TagsInputProps {
  Title: string;
}

const TagsInput: React.FC<TagsInputProps> = ({ Title }) => {
  // Explicitly define that tags is an array of strings
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="input-wrapper">
      <label> {Title}</label>
      <div className="form-group">
        <div
          className="border p-2 rounded d-flex flex-wrap"
          style={{ minHeight: "46px" }}
        >
          {tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-primary mr-2 mb-2 d-flex align-items-center text-dark"
            >
              {tag}
              <button
                type="button"
                className="btn-close btn-sm ml-2"
                aria-label="Close"
                onClick={() => removeTag(index)}
                style={{
                  marginLeft: "8px",
                  background: "transparent",
                  border: "none",
                  color: "white",
                }}
              >
                &times;
              </button>
            </span>
          ))}
          <input
            type="text"
            className="form-control border-0 p-0"
            style={{ minWidth: "150px" }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type and press Enter"
          />
        </div>
      </div>
    </div>
  );
};

export default TagsInput;
