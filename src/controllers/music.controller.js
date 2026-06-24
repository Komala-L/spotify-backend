const musicModel = require('../models/music.model');
const albumModel = require('../models/album.model');
const jwt = require('jsonwebtoken');
const { uploadFile } = require('../services/storage.service');

const createMusic = async (req, res) => {

    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'));

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id
    });

    return res.status(201).json({
        message: "Music created successfully",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    });
}

const createAlbum = async (req, res) => {

    const { title, musics } = req.body;

    const album = await albumModel.create({
        title,
        artist: req.user.id,
        musics: musics
    });

    return res.status(201).json({
        message: "Album created successfully",
        album: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            musics: album.musics
        }
    });
}

const getAllMusics = async (req, res) => {
    const musics = await musicModel.find().limit(2).populate('artist','username uri');

    return res.status(200).json({
        message: "Musics fetched successfully",
        musics: musics
    });
}

const getAllAlbums = async (req, res) => {
    const albums = await albumModel.find().populate('artist','username uri').populate('musics','title uri');

    return res.status(200).json({
        message: "Albums fetched successfully",
        albums: albums
    });
}

const getAlbumById = async (req, res) => {
    const albumId = req.params.albumId;

    const album = await albumModel.findById(albumId).populate('artist','username uri').populate('musics','title uri');

    if (!album) {
        return res.status(404).json({
            message: "Album not found"
        });
    }

    return res.status(200).json({
        message: "Album fetched successfully",
        album: album
    });
}

module.exports = { createMusic, createAlbum, getAllMusics, getAllAlbums, getAlbumById };