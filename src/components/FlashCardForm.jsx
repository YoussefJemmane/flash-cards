import React, { useState } from "react";
import { useHoverEffect } from "../hooks/Hover";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


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

export default FlashCardForm;