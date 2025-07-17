import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditCard({ cards, onEditSave }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const cardToEdit = cards.find(card => String(card.id) === String(id));
    if (cardToEdit) {
      setTitle(cardToEdit.title);
      setQuestion(cardToEdit.question);
      setAnswer(cardToEdit.answer);
    }
  }, [id, cards]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditSave(id, { title, question, answer });
    navigate("/cards");
  };

  return (
    <div className="fixed inset-0 bg-indigo-900/30 flex items-center justify-center z-50">
      <form
        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-indigo-800 mb-2">Edit Flash Card</h2>

        <input
          className="border border-indigo-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="Card Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="border border-indigo-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />

        <input
          className="border border-indigo-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />

        <div className="flex gap-4 justify-end">
          <button
            type="button"
            className="px-6 py-2 rounded-xl bg-indigo-100 text-indigo-700 font-semibold hover:bg-indigo-200 transition"
            onClick={() => navigate("/cards")}
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
