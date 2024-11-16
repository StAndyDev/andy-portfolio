import React, { useState, useEffect } from 'react';

const AsyncImage = ({ imageUrl, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
  }, [imageUrl]);

  return (
    <div>
      {error ? (
        <p>Erreur de chargement de l'image</p>
      ) : loaded ? (
        <img style={{marginLeft: '25%'}} src={imageUrl} alt={alt} />
      ) : (
        <p>Chargement en cours...</p> // ou un spinner de chargement
      )}
    </div>
  );
};

export default AsyncImage;