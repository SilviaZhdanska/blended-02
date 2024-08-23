import { getPhotos } from 'apiService/photos';
import { Text, Form } from 'components';
import { useState, useEffect } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  function handleSubmit(value) {
    setQuery(value);
  }

  useEffect(() => {
    if (!query) return;
    async function getData() {
      try {
        const data = await getPhotos(query, page);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [query, page]);

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};
