let judul;
let namaInput;
let nimInput;
let tombol;
let hello;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  judul = createElement('h2', 'Halo, tuliskan nama dan NIM anda');
  judul.position(30, 15);
  
  namaInput = createInput();
  namaInput.position(30, 60);
  
  nimInput = createInput();
  nimInput.position(30, 90);
  
  tombol = createButton('Masukkan');
  tombol.position(30, 120);
  tombol.mousePressed(sayHello);
}

function draw() {

}

function sayHello() {
  hello = createElement('h2', 'Selamat datang ' + namaInput.value() + ', NIM Anda: ' + nimInput.value());
  hello.position(30, 150);
}