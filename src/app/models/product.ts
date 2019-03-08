import { DataEvent } from "@firebase/database/dist/esm/src/core/view/Event";

export class Product {
    $key: string;
    cpf: number;
    name: string;
    datanascimento: DataEvent;
    endereco: string;
    formacao: string;
    experienciaprofisional: string;
    competencias: string;
    linkedin: string;
    cidadevaga: string;
    faixasalarial: number;
    nivelherarquico: string;
}
