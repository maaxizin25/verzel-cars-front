export interface iAppContextProps {
  children: React.ReactNode;
}

export interface announcement {
  id: number;
  nome: string;
  marca: string;
  model: string;
  ano: number;
  valor: number;
  km: number;
  placa: string;
  cor: string;
  transmissao: "M" | "A";
  descricao: string;
  photos: [
    {
      id: number;
      image: string;
    }
  ];
}

export interface iAppContext {
  announcementList: null | [announcement];
}