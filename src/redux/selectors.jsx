import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectBackgroundImages = state => state.backgroundImages.images;

const blackListImages = [926728, 2325627, 2004483, 1911637, 1365995, 2750627];

export const selectBackgrounds = createSelector(
    [selectBackgroundImages, () => blackListImages],
    (backgroundImages, blackList) => {
        const backgrounds = backgroundImages.filter(img => !blackList.includes(Number(img.id)));
        return backgrounds;
    }
);

export const selectNumbsForImg = state => state.backgroundImages.numbsForImg;