import FlashCard from "../components/FlashCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState, useEffect } from "react";
import FlashCardForm from "../components/FlashCardForm";



export default function Cards() {
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem("flashcards");
    return savedCards ? JSON.parse(savedCards) : [];
  });

  const [flippedId, setFlippedId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(cards));
  }, [cards]);

  function handleFlip(id) {
    setFlippedId(flippedId === id ? null : id);
  }

  function handleLike(id) {
    const updatedCards = cards.map(card => {
      if (card.id === id) {
        return { ...card, liked: !card.liked };
      }
      return card;
    });
    setCards(updatedCards);
  }

  function handleEdit(id) {
    alert("Edit card " + id);
  }

  function handleDelete(id) {
    const updatedCards = cards.filter(card => card.id !== id);
    setCards(updatedCards);
  }

  function handleCreate() {
    setShowForm(true);
  }

  function handleSave(newCardData) {
    const newCard = { ...newCardData, id: Date.now(), liked: false };
    setCards(currentCards => [...currentCards, newCard]);
    setShowForm(false);
  }

  function handleCancel() {
    setShowForm(false);
   
  }

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-blue-100 min-h-screen font-montserrat">
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-indigo-900">My Flash Cards</h1>
          <button
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            onClick={handleCreate}
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
              onFlip={() => handleFlip(card.id)}
              onLike={handleLike}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      {showForm && (
        <FlashCardForm
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}
