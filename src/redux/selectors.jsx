export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectBackgroundImages = state => state.backgroundImages.backgroundImages;


export const backgroundImg = state => {
    const images = selectBackgroundImages(state)
    const lengthImages = images.length;
    const randomInt = Math.floor(Math.random() * lengthImages) + 1;
    return images[randomInt];
}