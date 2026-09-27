export type MudaCategoria = "frutifera" | "nativa" | "flor" | "diversa";

export interface Muda {
  slug: string;
  nome: string;
  imagem: string;
  categoria: MudaCategoria;
}

export const categoriaLabel: Record<MudaCategoria, string> = {
  frutifera: "Frutífera",
  nativa: "Nativa",
  flor: "Flor",
  diversa: "Diversa",
};

export const mudas: Muda[] = [
  {
    slug: "acacia-mimosa",
    nome: "Acácia Mimosa",
    imagem: "/mudas/acacia-mimosa.jpeg",
    categoria: "flor",
  },
  {
    slug: "clusia",
    nome: "Clusia",
    imagem: "/mudas/clusia.jpeg",
    categoria: "diversa",
  },
  {
    slug: "dracena-fita",
    nome: "Dracena Fita",
    imagem: "/mudas/dracena-fita.jpeg",
    categoria: "diversa",
  },
  {
    slug: "formios",
    nome: "Formios",
    imagem: "/mudas/formios.jpeg",
    categoria: "diversa",
  },
  {
    slug: "kaisuva-pequena",
    nome: "Kaisuva Pequena",
    imagem: "/mudas/kaisuva-pequena.jpeg",
    categoria: "diversa",
  },
  {
    slug: "manaca-da-serra",
    nome: "Manacá da Serra",
    imagem: "/mudas/manaca-da-serra.jpeg",
    categoria: "nativa",
  },
  {
    slug: "mirtilo",
    nome: "Mirtilo",
    imagem: "/mudas/mirtilo.jpeg",
    categoria: "frutifera",
  },
  {
    slug: "podocarpos",
    nome: "Podocarpos",
    imagem: "/mudas/podocarpos.jpeg",
    categoria: "diversa",
  },
  {
    slug: "viburno",
    nome: "Viburno",
    imagem: "/mudas/viburno.jpeg",
    categoria: "diversa",
  },
];
