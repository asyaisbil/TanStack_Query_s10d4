import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {} from './api';
import { queryClient } from '../App';
import { addContact } from './api';
import { getContactDetails } from './api';
import { getContacts } from './api';
import { deleteContact } from './api';

export function useContacts() {
  return useQuery({
    queryFn: getContacts,
    queryKey: ['Contact', 'List'],
  });
}

export function useContactDetails() {
  return useQuery({
    queryFn: () => getContactDetails(contactId),
    queryKey: ['Contact', 'Details', contactId],
  });
}

export function useDeleteContact() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteContact(id),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['Contact', 'Details', data['id']],
      });

      queryClient.invalidateQueries({
        queryKey: ['Contact', 'List'],
      });
    },
  });
}

export function useAddContact() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => addContact(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Contact', 'List'],
      });
    },
  });
}
