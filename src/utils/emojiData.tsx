import emojiData from 'unicode-emoji-json/data-by-group.json'

const transformEmojiData = () => {
    return emojiData.reduce((acc, category) => {
        acc[category.name] = category.emojis.map(e => e.emoji);
        return acc;
    }, {} as { [key: string]: string[] });
}

export const transformedEmojiData = transformEmojiData()
export const emojiCategories = Object.keys(transformedEmojiData)