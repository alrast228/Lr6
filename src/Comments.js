import React, { useState } from 'react';

function Comments() {
  const [showComments, setShowComments] = useState(false);

  return (
    <div>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Скрыть комментарии" : "Показать комментарии"}
      </button>
      {showComments && <p>Это текст комментария</p>}
    </div>
  );
}

export default Comments;
