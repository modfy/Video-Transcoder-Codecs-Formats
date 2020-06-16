module.exports = CODEC_TYPES => ({
    name: "AVI",
    extension: ".avi",
    display: false,
    defaultCodec: CODEC_TYPES.H264,
    codecs: [CODEC_TYPES.H264, CODEC_TYPES.MPEG4],
})
