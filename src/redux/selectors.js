import { createSelector } from '@reduxjs/toolkit';
//import { statusFilters } from './constants';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const filterContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (filter.trim() === '') {
      return contacts;
    }
    const filterLow = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLow)
    );
  }
);
