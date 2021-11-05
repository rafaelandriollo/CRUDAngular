import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: 'Rafael',
    idade: 28,
    altura: 1.87,
    graduado: true
  };

  listaProdutos: any[] = [
  {nome : 'Curso de Angular', preco: 35.56, validade: '2021-12-31', id: 1},
  {nome : 'Curso de Ionic', preco: 50, validade: '2021-12-31', id: 2, protecao: true },
  {id: 3, nome : 'Curso de angular', preco: 35.56, validade: '2021-12-31'}
];

  constructor() {}

  ngOnInit(): void {
  }

}
