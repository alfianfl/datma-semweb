const axios = require('axios');
const qs = require('qs');

const DATA_URL = "http://localhost:3030";

const headers = {
    'Accept': 'application/sparql-results+json,*/*;q=0.9',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

exports.getMahasiswa = async(param)=>{
    // Query
    const queryData = {
    query: `PREFIX data:<http://example.com/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
    SELECT ?nama ?jk ?npm ?prodi ?angkatan ?ttlLahir ?agama ?email ?alamat ?noHP ?urlFoto
    WHERE{
        ?sub rdf:type data:mahasiswa
        OPTIONAL {?sub data:nama ?nama.}
        OPTIONAL {?sub data:jk ?jk.}
        OPTIONAL {?sub data:npm ?npm.}
        OPTIONAL {?sub data:prodi ?prodi.}
        OPTIONAL {?sub data:angkatan ?angkatan.}
        OPTIONAL {?sub data:ttlLahir ?ttlLahir.}
        OPTIONAL {?sub data:agama ?agama.}
        OPTIONAL {?sub data:email ?email.}
        OPTIONAL {?sub data:alamat ?alamat.}
        OPTIONAL {?sub data:noHP ?noHP.}
        OPTIONAL {?sub data:urlFoto ?urlFoto.}
        FILTER regex(?nama, "${param.nama ? param.nama : ''}", "i")
        FILTER regex(?npm, "${param.npm ? param.npm : ''}", "i")
        FILTER regex(?prodi, "${param.prodi ? param.prodi : ''}", "i")
        FILTER regex(?angkatan, "${param.angkatan ? param.angkatan : ''}", "i")
        FILTER regex(?agama, "${param.agama ? param.agama : ''}", "i")
    }`
    };
    try{
        const {data} = await axios(`${DATA_URL}/datma/query`,{
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        return data.results;
    }catch(err){
        res.status(400).json(err);
    }
};

module.exports = exports;
