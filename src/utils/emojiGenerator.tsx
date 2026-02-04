import { transformedEmojiData } from "./emojiData";

interface Options {
    count: number;
    categories: string[];
}

export const generateEmojiString = (options: Options): string => {
    if (options.categories.length == 0) {
        return "";
    }

    let selectedEmojis: string[] = [];

    // Walk through category list until we have reached the count
    for (let i = 0; i < options.count; i++) {
        const categoryName = options.categories[i % options.categories.length];
        const emojis = transformedEmojiData[categoryName]
        selectedEmojis.push(emojis[Math.floor(Math.random() * emojis.length)]);
    }

    // Shuffle list
    selectedEmojis.sort(() => Math.random() - 0.5)

    return selectedEmojis.join("");
}