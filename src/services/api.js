import axios from 'axios';

export const getContacts = async () => {
  const response = await axios.get(
    'https://65b36193770d43aba479a2f2.mockapi.io/users'
  );
  return response.data;
};

export const getContactDetails = async ({ queryKey }) => {
  //console.log('QueryKey: ' + queryKey);
  const [, , contactId] = queryKey;

  const response = await axios.get(
    `https://65b36193770d43aba479a2f2.mockapi.io/users/${contactId}`
  );
  return response.data;
};

export const deleteContact = async (contactId) => {
  const response = await axios.delete(
    `https://65b36193770d43aba479a2f2.mockapi.io/users/${contactId}`
  );
  return response.data;
};

export const addContact = async (data) => {
  const response = await axios.post(
    'https://65b36193770d43aba479a2f2.mockapi.io/users',
    data
  );
  return response.data;
};
