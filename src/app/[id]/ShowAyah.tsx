import React from "react";
import { Play, Bookmark, BookOpen } from "lucide-react";

const ShowAyah = ({ ayahNumber, arabicText, translationEnglish, translationBangla }: { ayahNumber: string, arabicText: string, translationEnglish: string, translationBangla: string }) => {
  return (
    <div className="border-gray-300 pb-4">
      {/* Ayah Number */}
      <div className="text-gray-500 sm:text-lg text-base font-semibold mb-2">{ayahNumber}</div>

      {/* Arabic Text */}
      <div className="text-right md:text-2xl text-lg font-arabic leading-relaxed">
        {arabicText}
      </div>

      {/* Translation */}
      <div className="text-gray-700 mt-2">
        <span className="text-xs opacity-50">Sahih International</span>
        <p className="sm:text-lg text-base mt-1">{translationEnglish}</p>
        <p className="text-base mt-1">{translationBangla}</p>
      </div>

      {/* todo: icons interactions */}
      {/* Icons */}
      <div className="flex items-center gap-4 mt-4 text-gray-600">
        <Play className="cursor-pointer hover:text-black" size={20} />
        <BookOpen className="cursor-pointer hover:text-black" size={20} />
        <Bookmark className="cursor-pointer hover:text-black" size={20} />
      </div>
    </div>
  );
};

export default ShowAyah;
