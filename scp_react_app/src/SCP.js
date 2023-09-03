import React from 'react';

function SCP({ scp }) {
  return ( 
    <div>
      <h1>{scp.SCP_subject}</h1>
      <h2>{scp.class}</h2>
      <img src={scp.image} alt={scp.subject} />
      <p>{scp.paragraph_1}</p>
      <p>{scp.description}</p>
      <p>{scp.paragraph_2}</p>
    </div>
  );
}

export default SCP;