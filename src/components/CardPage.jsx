import { useState, useEffect } from "react";
import { useHoverEffect } from "../hooks/Hover";
import { Link, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

// == Component 1: FlashCard ==
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

// == Component 2: FlashCardForm ==
function FlashCardForm({ onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSave({ title, question, answer });
  }

  return (
    <div className="fixed inset-0 bg-indigo-900/30 flex items-center justify-center z-50">
      <form
        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-indigo-800 mb-2">Create Flash Card</h2>
        
        <input
          className="border border-indigo-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="Card Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        
        <input
          className="border border-indigo-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="Question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          required
        />
        
        <input
          className="border border-indigo-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="Answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          required
        />
        
        <div className="flex gap-4 justify-end">
          <button
            type="button"
            className="px-6 py-2 rounded-xl bg-indigo-100 text-indigo-700 font-semibold hover:bg-indigo-200 transition"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

// == Component 3: CardPage (Main Component) ==
export default function CardPage() {
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem("flashcards");
    return savedCards ? JSON.parse(savedCards) : [];
  });

  const [flippedId, setFlippedId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

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
    navigate("/home");
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
