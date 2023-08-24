import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phonebook.contacts.items;

export const selectIsLoading = state => state.phonebook.contacts.isLoading;

export const selectError = state => state.phonebook.contacts.error;

export const selectFilter = state => state.phonebook.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

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
