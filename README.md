semweb-datma-full

Datma adalah aplikasi berbasis web yang berguna untuk menampilkan database identitas mahasiswa FMIPA Unpad dengan mudah untuk digunakan oleh Tata Usaha dan pengelola administrasi di FMIPA Unpad.

Framework pengembangan :

    Front end : react.js
    Back end : Express node js

Tim pengembang :

    Sina Mustopa (140810180017)
    Alfian Fadhil Labib (140810180055)

**Back End Datma**

Untuk dataset sudah disiapkan pada folder dataset di sisi server dengan nama file dataset.ttl

Cara Penggunaan Backend / server :

    Jalankan fuseki server dengan command dibawah pada folder fuseki server di cmd/terminal

    Pada sistem operasi Windows :

        - fuseki-server

        - Jena Fuseki dapat diakses di : http://localhost:3030

        - Tambahkan dataset pada fuseki server dengan nama datma

        - Upload data dataset.ttl yang ada pada dataset datma

    Lalu,

    Perlu menginstall dependency package agar server dapat berjalan dengan menjalankan command berikut

        - npm install

        - Jalankan REST API Server dengan command berikut : node app
        

**Cara Penggunaan Front End**

Perlu menginstall dependency package agar client dapat berjalan dengan menjalankan command berikut :

- npm install

- Jalankan Client dengan command berikut : npm start 
