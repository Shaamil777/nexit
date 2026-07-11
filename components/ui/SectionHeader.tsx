import React from "react";

interface SectionHeaderProps {
  title: React.ReactNode;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  title,
  description,
  className = "",
  titleClassName = "text-[3.25rem] sm:text-5xl lg:text-[4rem] font-[300] text-[#1f2937] leading-[1.05] mb-4 tracking-tight",
  descriptionClassName = "text-gray-400 text-sm sm:text-base max-w-xl font-light"
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${className}`}>
      <h2 className={titleClassName}>
        {title}
      </h2>
      {description && (
        <p className={descriptionClassName}>
          {description}
        </p>
      )}
    </div>
  );
}
