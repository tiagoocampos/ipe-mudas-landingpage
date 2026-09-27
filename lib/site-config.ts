export const siteConfig = {
  nome: "Ipê Mudas",
  descricaoCurta:
    "Mudas frutíferas, nativas, flores e plantas diversas em Ipê.",
  cidade: "Ipê",
  estado: "RS",
  email: "ipemudasfrutiferas@gmail.com",
  instagram: "https://www.instagram.com/ipe_mudas_frutiferas",
  instagramHandle: "@ipe_mudas_frutiferas",
  whatsappNumero: "5554999460635",
  whatsappExibicao: "(54) 99946-0635",
  url: "https://ipemudas.com.br",
};

export function whatsappLink(mensagem: string) {
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${siteConfig.whatsappNumero}?text=${texto}`;
}

export const whatsappMensagemPadrao =
  "Olá! Vim pelo site e gostaria de saber mais sobre as mudas.";

export function whatsappMensagemMuda(nomeMuda: string) {
  return `Olá! Tenho interesse na muda de ${nomeMuda}, vocês têm disponível?`;
}
