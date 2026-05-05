"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
}

export default function Comments({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Load comments from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`comments_${postSlug}`);
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setComments(JSON.parse(saved));
    }
  }, [postSlug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name.trim() || !text.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    // Strict URL validation to prevent links
    // Checks for http://, https://, www., or any standard domain patterns like domain.com
    const urlPattern = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/i;
    
    if (urlPattern.test(text) || urlPattern.test(name)) {
      setError("Links or URLs are strictly prohibited in comments.");
      return;
    }

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`comments_${postSlug}`, JSON.stringify(updatedComments));
    
    setName("");
    setText("");
    setSuccess(true);
    
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="comments-section">
      <h3 className="comments-title">Comments ({comments.length})</h3>
      
      <form onSubmit={handleSubmit} className="comments-form">
        <h4>Leave a Reply</h4>
        <p className="form-note">Your email address will not be published. Links are not allowed.</p>
        
        {error && <div className="form-error">{error}</div>}
        {success && <div className="form-success">Comment posted successfully!</div>}
        
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="comment-input"
          />
        </div>
        
        <div className="form-group">
          <textarea
            placeholder="Your Comment (No Links Allowed)"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            rows={4}
            className="comment-textarea"
          ></textarea>
        </div>
        
        <button type="submit" className="comment-submit">Post Comment</button>
      </form>

      <div className="comments-list">
        {comments.map((c) => (
          <div key={c.id} className="comment-card">
            <div className="comment-header">
              <span className="comment-author">{c.name}</span>
              <span className="comment-date">{c.date}</span>
            </div>
            <p className="comment-body">{c.text}</p>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="no-comments">No comments yet. Be the first to start the conversation!</p>
        )}
      </div>
    </div>
  );
}
