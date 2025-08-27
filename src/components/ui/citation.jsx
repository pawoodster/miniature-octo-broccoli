import React from 'react';

export const CitationLink = ({ id, callType, citations }) => {
  const citation = citations && citations[id];
  if (!citation) {
    return <sup className="text-red-500">[Citation missing: {id}]</sup>;
  }
  return (
    <a 
      href={citation.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      title={`${citation.title}
Source: ${citation.sourceContent}`}
      className="text-blue-500 hover:underline"
    >
      <sup className="ml-1">[{id}]</sup>
    </a>
  );
};
