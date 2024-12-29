import { getPhotos } from '../apiService/photos';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import { useEffect, useState } from 'react';

const Photos = () => {
  const [query, setQuery] = useState('');
  const onSubmit = text => {
    setQuery(text);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchFotos() {
      try {
        const photos = await getPhotos(query, 1);
        console.log(photos);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchFotos();
  }, [query]);
  return (
    <>
      <Form onSubmit={onSubmit} />
    </>
  );
};

export default Photos;
