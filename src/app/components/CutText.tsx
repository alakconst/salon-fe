// TruncateText.tsx

import React from 'react';

interface TruncateTextProps {
  text: string;
  maxLength: number;
}

const TruncateText: React.FC<TruncateTextProps> = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return <>{text}</>;
  }

  const truncatedText = text.substring(0, maxLength).trim() + '...';

  return <>{truncatedText}</>;
};

export default TruncateText;