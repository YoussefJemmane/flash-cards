import React from "react";
import { useHoverEffect } from "../hooks/Hover";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";



function FlashCard({ card, onFlip, flipped, onLike, onEdit, onDelete }) {
  const hover = useHoverEffect();
  return (
    <div
      {...hover}
      className="bg-white rounded-3xl shadow-lg w-80 h-64 mx-4 flex flex-col justify-between relative transition-all duration-300 cursor-pointer"
      onClick={onFlip}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 ${flipped ? "rotate-y-180" : ""}`}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        <div className={`flex flex-col justify-center items-center h-full px-6 text-center ${flipped ? "hidden" : ""}`}>
          <h2 className="text-xl font-bold text-indigo-800 mb-2 break-words w-full">{card.title}</h2>
          <p className="text-indigo-700 text-lg break-words w-full mt-2">{card.question}</p>
        </div>

        <div
          className={`absolute inset-0 flex flex-col justify-center items-center h-full bg-indigo-50 rounded-3xl px-6 text-center ${flipped ? "" : "hidden"}`}
          style={{ transform: "rotateY(180deg)" }}
        >
          <h2 className="text-xl font-bold text-indigo-800 mb-2">Answer</h2>
          <p className="text-indigo-700 text-lg break-words w-full mt-2">{card.answer}</p>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6">
        <button
          className={`p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition ${card.liked ? "text-pink-500" : "text-indigo-500"}`}
          onClick={(event) => { event.stopPropagation(); onLike(card.id); }}
          aria-label="Like"
        >
          <FavoriteBorderIcon />
        </button>
        <button
          className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-500 transition"
          onClick={(event) => { event.stopPropagation(); onEdit(card.id); }}
          aria-label="Edit"
        >
          <EditIcon />
        </button>
        <button
          className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-red-400 transition"
          onClick={(event) => { event.stopPropagation(); onDelete(card.id); }}
          aria-label="Delete"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default FlashCard;