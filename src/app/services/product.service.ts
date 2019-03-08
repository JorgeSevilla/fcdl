import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Product } from '../models/product';

@Injectable()
export class ProductService {
  productList: AngularFireList<any>;
  selectedProduct: Product= new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts(){
    return this.productList = this.firebase.list('products');
  }
  insertProduct(product: Product){
    this.productList.push({
      name: product.name,
      cpf: product.cpf,
      datanascimento: product.datanascimento,
      endereco: product.endereco,
      formacao: product.formacao,
      experienciaprofisional: product.experienciaprofisional,
      competencias: product.competencias,
      linkedin: product.linkedin,
      cidadevaga: product.cidadevaga,
      faixasalarial: product.faixasalarial,
      nivelherarquico: product.nivelherarquico
    });
  }

  updateProduct(product: Product){
    this.productList.update(product.$key, {
      ame: product.name,
      cpf: product.cpf,
      datanascimento: product.datanascimento,
      endereco: product.endereco,
      formacao: product.formacao,
      experienciaprofisional: product.experienciaprofisional,
      competencias: product.competencias,
      linkedin: product.linkedin,
      cidadevaga: product.cidadevaga,
      faixasalarial: product.faixasalarial,
      nivelherarquico: product.nivelherarquico
    });  
  }
  deleteProduct($key: string){
    this.productList.remove($key)
  }
}
