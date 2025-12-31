import { useEffect, useState } from "react";

export default function GutenbergReader() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch list of books
  useEffect(() => {
    fetch("https://gutendex.com/books/?page=1")
      .then((res) => res.json())
      .then((data) => setBooks(data.results))
      .catch(console.error);
  }, []);

  // Fetch full book text
  const loadBook = async (book) => {
    setSelectedBook(book);
    setLoading(true);
    setContent("");

    // Prefer plain text format
    const textUrl =
      book.formats["text/plain"] ||
      book.formats["text/plain; charset=utf-8"];

    if (!textUrl) {
      setContent("This book does not have readable text available.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(textUrl);
      const text = await res.text();
      setContent(text);
    } catch (err) {
      setContent("Failed to load book content.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Book List */}
      <div className="bg-white rounded-2xl shadow p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">📚 Books</h2>
        <ul className="space-y-2">
          {books.map((book) => (
            <li
              key={book.id}
              onClick={() => loadBook(book)}
              className={`cursor-pointer p-3 rounded-lg hover:bg-indigo-50 transition ${
                selectedBook?.id === book.id ? "bg-indigo-100" : ""
              }`}
            >
              <p className="font-semibold">{book.title}</p>
              <p className="text-sm text-gray-500">
                {book.authors.map((a) => a.name).join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Reader */}
      <div className="md:col-span-2 bg-white rounded-2xl shadow p-6 flex flex-col">
        {!selectedBook && (
          <p className="text-gray-500">Select a book to start reading 📖</p>
        )}

        {selectedBook && (
          <>
            <h1 className="text-2xl font-bold mb-2">{selectedBook.title}</h1>
            <p className="text-gray-600 mb-4">
              {selectedBook.authors.map((a) => a.name).join(", ")}
            </p>

            {loading ? (
              <p className="text-indigo-600">Loading book...</p>
            ) : (
              <div className="prose max-w-none overflow-y-auto whitespace-pre-wrap text-sm leading-relaxed">
                {content.slice(0, 20000)}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
