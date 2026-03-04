import { useEffect } from "react";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const overlayStyle =
  "fixed inset-0 bg-black/40 transition-opacity duration-300";

const modalContainerStyle =
  "fixed inset-0 z-50 flex items-start justify-center pt-24 px-4";

const modalStyle =
  "w-full max-w-2xl bg-white rounded-md shadow-2xl p-6 transform transition-all duration-300";

const inputStyle =
  "w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary";

const tabBaseStyle =
  "px-4 py-2 text-sm font-medium rounded-md transition-colors";

const SearchModal = ({ open, onClose }: SearchModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className={overlayStyle} onClick={onClose} />

      {/* Modal Container */}
      <div className={modalContainerStyle}>
        <div className={`${modalStyle} animate-in fade-in zoom-in-95`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Search Products</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Search Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search for products, brands..."
              className={inputStyle}
            />
          </div>

          {/* Mode Toggle */}
          <div className="flex gap-2 mb-4">
            <button className={`${tabBaseStyle} bg-gray-100 text-gray-700`}>
              Query Search
            </button>
            <button className={`${tabBaseStyle} bg-gray-100 text-gray-700`}>
              AI Recommendation
            </button>
          </div>

          {/* Result Area */}
          <div className="max-h-80 overflow-y-auto">
            {/* Placeholder */}
            <div className="text-sm text-gray-500 text-center py-10">
              Start typing to search...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
