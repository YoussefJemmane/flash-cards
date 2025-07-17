import React from "react";
import FlashCard from "../components/FlashCard";
import FlashCardForm from "../components/FlashCardForm";

export default function LikedCards({ 
  cards, 
  flippedId, 
  showForm, 
  editId, 
  onFlip, 
  onLike, 
  onEdit, 
  onDelete, 
  onSave, 
  onCancel 
}) {
  // Filter only liked cards
  const likedCards = cards.filter(card => card.liked);
  const editingCard = editId ? cards.find(card => card.id === editId) : null;
  return (
   
     <div className="bg-gradient-to-b from-indigo-50 to-blue-100 min-h-screen font-montserrat">
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-indigo-900">
            My Liked Cards
          </h1>
                    <p className="mt-4 text-lg text-indigo-700">Here you can find all the flashcards you have liked.</p>

        </div>

        {likedCards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
            {likedCards.map((card) => (
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
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-center">
              <div className="text-6xl mb-4">💔</div>
              <h2 className="text-2xl font-bold text-indigo-800 mb-2">No Liked Cards Yet</h2>
              <p className="text-indigo-600 text-lg mb-6">Start liking some flashcards to see them here!</p>
              <a 
                href="/cards" 
                className="inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                Browse Cards
              </a>
            </div>
          </div>
        )}
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
