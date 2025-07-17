import FlashCard from "../components/FlashCard";


export default function Cards() {
   

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-blue-100 min-h-screen font-montserrat">
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-indigo-900">My Liked Cards</h1>
          
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

      
    </div>
  );
}
