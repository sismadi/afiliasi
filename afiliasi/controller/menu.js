
var menu={
model:{
  table:{id:'menu',data:[
  {id:1,induk:0,nama:"Afiliasi",isi:1,icon:"setting",url:"menu.controller.menu(1)"},
  {id:2,induk:1,nama:"Produk",isi:1,icon:"cart",url:"d.url('produk')"},
  {id:3,induk:1,nama:"Penjualan",isi:2,icon:"chart",url:"d.url('users')"},
  {id:4,induk:1,nama:"Pembayaran",isi:3,icon:"setting",url:"d.url('menu')"},
  {id:5,induk:1,nama:"Setting",isi:4,icon:"setting",url:"d.url('menu')"},
  {id:6,induk:1,nama:"Peserta",isi:5,icon:"person",url:"d.url('produk')"},
  {id:7,induk:1,nama:"Komisi",isi:6,icon:"card",url:"d.url('akses')"},
  ]},
},
view:{
menu:function(arr){
out=`
<div class="row shadow">
<div id="card" class="col-1-1">  ${d.view.card(arr)} </div>
</div>`;
return out;``
},
},
controller:{
menu:function(i){ // data=JSON.parse(d.getls('data'));
  // d.close('parallax-container');
  // d.close('parallax');
  // d.close('menu');
  // d.gebi('parallax-container').style="display:mone";
  // alert('s')

data=menu.model.table.data;
const node = data.filter(e => e.induk == i);
arr={}
arr.data=node;
d.gebi('content').innerHTML=menu.view.menu(arr);
},
},
service:{},
nah:function(){
table.data=menu.model.menu.data
d.controller.view();
}
}; // end menu
