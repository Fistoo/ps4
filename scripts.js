// Zadajnie 1
class Product{
//1.5
      constructor(id, nazwa, model, rok_produkcji, cena, zuzycieEnergii){
            this.id = id;
            this.nazwa = nazwa;
            this.model = model;
            this.rok_produkcji = rok_produkcji;
            this.cena = cena;
            this.zuzycieEnergii = zuzycieEnergii;
      }
//1.1
      koszt(){
            return this.cena;
      }
//1.2
      kosztEnergii(cena){
            return cena * this.zuzycieEnergii;
      }

//1.3
      wiekProductu(){
            return (new Date()).getFullYear() - this.rok_produkcji;
      }
//1.4
      wiekProductuLata(){
            let wiek = this.wiekProductu();
            if(wiek == 1){
                  return wiek + " rok";
            }
            if((wiek%10 > 1 && wiek%10 < 5) && (wiek < 5 && wiek > 19)){
                  return wiek + " lata";
            }
            else{
                  return wiek + " lat";
            }
      }
    
}

//test zadanie 1
let cenaEnergii = 3;
const item = new Product(1, "pralka", "aaa", 2001, 3030, 3);
const item2 = new Product(2, "zmywarka", "bbb", 2001, 3030, 3);
const item3 = new Product(3, "mikser", "ccc", 2001, 3030, 3);

console.log(item.koszt());
console.log(item.kosztEnergii(3));
console.log(item.wiekProductu());
console.log(item.wiekProductuLata());


//Zadanie 2
class ListaProduct{
      constructor(){
            this.lista = new Array;
      }
//2.1
      wypiszProdukt(id){
            console.log(this.lista[id].id);

      }

//2.2
      wypiszWszystkieProdukty(){
            console.log(...this.lista);
      }
//2.3
    dodajProduct(produkt){
          for(const arg in this.lista){
          if(produkt.id == this.lista[arg].id){
                console.log("jest już takie ID");
          }
      }      
      this.lista.push(produkt);
    }
//2.4
    zmieńProdukt(id, produkt){
      for(const arg in this.lista){
            if(id == this.lista[arg].id){
                  this.lista[arg].nazwa = produkt.nazwa;
                  this.lista[arg].model = produkt.model;
                  this.lista[arg].rok_produkcji = produkt.nazwa;
                  this.lista[arg].cena = produkt.cena;
                  this.lista[arg].zuzycieEnergii = produkt.zuzycieEnergii;
            }
       }
      }
}
const list = new ListaProduct();

list.wypiszWszystkieProdukty();
list.dodajProduct(item);
list.dodajProduct(item2);
list.wypiszWszystkieProdukty();
list.zmieńProdukt(2,item3);
list.wypiszWszystkieProdukty();


