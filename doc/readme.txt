model:
Menyimpan data awal yang nantinya akan diperbarui dengan data dari data.json.

view:
Bertanggung jawab untuk mengonversi data ke dalam format HTML.

controller:
Mengambil data dari model dan menerapkannya ke dalam tampilan.

service: 
Mengambil data dari data.json menggunakan fetch, mengganti model, dan memperbarui tampilan.

Alur Kerja:
Saat doc.service.web() dipanggil, data diambil dari data.json.
Setelah data berhasil dimuat, doc.model.web diperbarui.
doc.controller.web() dipanggil untuk menampilkan data baru ke dalam elemen dengan id content.
Kode ini menggunakan pendekatan MVC (Model-View-Controller) untuk memisahkan logika, tampilan, dan data.
