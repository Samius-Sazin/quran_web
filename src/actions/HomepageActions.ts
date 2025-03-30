"use server"

export const getAllSurahListAction = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/surah.json`);
    if (!response.ok) {
        throw new Error('Failed to fetch surah list');
    }
    const surahList = await response.json();
    if (!surahList) {
        throw new Error('Failed to fetch surah list');
    }

    return surahList;
}