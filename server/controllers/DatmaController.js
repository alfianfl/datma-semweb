const connection = require('../connection/DatmaConnection');
const Format = require('../tools/format');

module.exports.getMahasiswa = async(req, res)=>{
        try{
            console.log("function starting")
            // Query data dari repo
            let datma = await connection.getMahasiswa(req.query);

            if(!datma.bindings.length){
                return res.status(200).json({
                    data:[],
                    message: "Data tidak ditemukan"
                });
            }

            datma = datma.bindings.map((mahasiswa)=>Format(mahasiswa));

            if(req.params.npm){
                let mahasiswa = datma.filter((mahasiswa)=>{
                    return mahasiswa.npm == req.params.npm
                });
                res.status(200).json({
                    data:mahasiswa[0],
                    message: mahasiswa.length ? 'Data Mahasiswa berhasil didapatkan' : 'Tidak ada hasil dari pencarian'
                })
            }else{
                res.status(200).json({
                    data: datma,
                    message: "Show all Data Mahasiswa"
                })
            }
        }catch(err){
            res.status(400).json(err);
        }
    }