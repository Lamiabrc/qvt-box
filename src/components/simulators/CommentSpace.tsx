import React from 'react';

interface CommentSpaceProps {
  onCommentChange?: (comment: string) => void;
  placeholder?: string;
  questionNumber?: number;
}

const CommentSpace: React.FC<CommentSpaceProps> = ({ 
  onCommentChange, 
  placeholder = "Exprimez-vous librement... Comment vous sentez-vous par rapport à cette question ?",
  questionNumber 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onCommentChange) {
      onCommentChange(e.target.value);
    }
  };

  return (
    <div className="border-t pt-4 mt-6">
      <label className="text-sm font-medium text-gray-700 mb-2 block">
        💭 Souhaitez-vous partager quelque chose de plus ? (facultatif)
      </label>
      <textarea 
        className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
        rows={3}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <p className="text-xs text-gray-500 mt-1">
        Vos commentaires nous aident à mieux vous accompagner
      </p>
    </div>
  );
};

export default CommentSpace;