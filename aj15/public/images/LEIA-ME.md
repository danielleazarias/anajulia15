# Pasta de imagens

Esta pasta está reservada para as suas fotos reais (hero, dress code, galeria).

Atualmente o site utiliza imagens de placeholder hospedadas no Unsplash,
configuradas em `config/event.ts`.

## Como substituir pelas suas fotos

1. Coloque seus arquivos aqui, por exemplo: `public/images/hero.jpg`,
   `public/images/galeria-01.jpg`, etc.
2. Abra `config/event.ts` e troque a URL pelo caminho local, por exemplo:
   ```ts
   backgroundImage: "/images/hero.jpg",
   ```
3. Para a galeria, edite o array `gallery`, trocando cada `src` pela sua
   respectiva imagem local.

Nenhuma outra alteração de código é necessária.
