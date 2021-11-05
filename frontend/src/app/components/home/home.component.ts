import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção!`;
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png';
  dataValidade = '2021-12-31';

  listaProdutos: any[] = [
    {nome : 'Curso de Angular', preco: 35.56, validade: '2021-12-31', id: 1},
    {nome : 'Curso de Ionic', preco: 50, validade: '2021-12-31', id: 2, protecao: true },
    {id: 3, nome : 'Curso de PHP', preco: 35.56, validade: '2021-12-31'},
    {nome : 'Curso de Java', preco: 30, validade: '2021-12-31', id: 4, protecao: true },
    {nome : 'Curso de Python', preco: 40.50, validade: '2021-12-31', id: 5, protecao: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
