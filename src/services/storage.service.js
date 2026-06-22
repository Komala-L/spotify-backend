const { ImageKit } = require('@imagekit/nodejs');

const ImageKitClient = new ImageKit({
    private_key: process.env.IMAGEKIT_PRIVATE_KEY,
    public_key: process.env.IMAGEKIT_PUBLIC_KEY,
    url_endpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

const uploadFile = async (file) => {
    const result = await ImageKitClient.files.upload({
        file,
        fileName: "music_" + Date.now(),
        folder: "yt-complete-backend/music"
    })

    return result;
}

module.exports = { uploadFile };