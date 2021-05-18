module.exports = fn = data => {
    return {
        "nama": data.nama ? data.nama.value : '',
        "jk": data.jk ? data.jk.value : '',
        "npm": data.npm ? data.npm.value : '',
        "prodi": data.prodi ? data.prodi.value : '',
        "angkatan": data.angkatan ? data.angkatan.value : '',
        "ttlLahir": data.ttlLahir ? data.ttlLahir.value : '',
        "agama": data.agama ? data.agama.value : '',
        "email": data.email ? data.email.value : '',
        "alamat": data.alamat ? data.alamat.value : '',
        "noHP": data.noHP ? data.noHP.value : '',
        "urlFoto": data.urlFoto ? data.urlFoto.value : ''
    }
}