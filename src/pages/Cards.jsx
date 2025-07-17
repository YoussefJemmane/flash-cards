import React from "react";
import FlashCard from "../components/FlashCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FlashCardForm from "../components/FlashCardForm";
import { useNavigate } from "react-router";

export default function Cards({
  cards,
  flippedId,
  showForm,
  editId,
  onFlip,
  onLike,
  onEdit,
  onDelete,
  onCreate,
  onSave,
  onCancel
}) {
  const editingCard = editId ? cards.find(card => card.id === editId) : null;

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-blue-100 min-h-screen font-montserrat">
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-indigo-900">My Flash Cards</h1>
          <button
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            onClick={onCreate}
          >
            <AddCircleIcon />
            Create Flash Card
          </button>
        </div>

        <div className="flex overflow-x-auto py-8 scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-indigo-100">
          {cards.map(card => (
            <FlashCard
              key={card.id}
              card={card}
              flipped={flippedId === card.id}
              onFlip={() => onFlip(card.id)}
              onLike={onLike}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>

      {showForm && (
        <FlashCardForm
          onSave={onSave}
          onCancel={onCancel}
          initialData={editingCard}
        />
      )}
    </div>
  );
}
