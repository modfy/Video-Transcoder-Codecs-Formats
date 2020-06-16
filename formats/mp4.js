module.exports = CODEC_TYPES => ({
    name: "MP4",
    extension: ".mp4",
    display: true,
    defaultCodec: null,
    type: "video/mp4",
    codecs: [CODEC_TYPES.H264, CODEC_TYPES.MPEG4, CODEC_TYPES.VP9],
})
