// import FlashCard from "../components/FlashCard";

import FlashcardInfoCard from "../components/FlashCardInfo";

export default function LikedCards({ cards, onLike, onDelete, onEdit }) {
  const likedCards = cards.filter(card => card.liked);
  return (
    <>
      <div className="bg-gradient-to-b from-indigo-50 to-blue-100 min-h-screen font-montserrat">
        <div className="max-w-6xl mx-auto py-16 px-6">
          <h1 className="text-4xl font-extrabold text-indigo-900">My Liked Cards</h1>
          <p className="mt-4 text-lg text-indigo-700">Here you can find all the flashcards you have liked.</p>
        </div>
      </div>
      <div>
        {likedCards.length > 0 ? (
          <div className="flex overflow-x-auto py-8 scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-indigo-100">
            {likedCards.map(card => (
              <FlashcardInfoCard
                key={card.id}
                title={card.title}
                content={card.answer}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-indigo-600">No liked cards found.</p>
          </div>
        )}
      </div>
    </>
  );
}