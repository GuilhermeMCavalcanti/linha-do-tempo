# 🕰️ Linha do Tempo
 
> *Uma rede social para viajantes do tempo postarem o que quiserem... de quando quiserem.*
 
---
 
## 📖 Sobre o projeto
 
**Linha do Tempo** é um clone do Instagram construído com React, criado para viajantes do tempo de todas as eras. Seja você do século XII ou do ano 3047, aqui você pode compartilhar fotos, seguir outros viajantes e curtir momentos de qualquer ponto da história.
 
O projeto foi desenvolvido como exercício de aprendizado em React, com foco em componentização, estilização com CSS puro e gerenciamento de estado simples com useState.
 
---
 
## ✨ Funcionalidades
 
- 📰 **Feed** — lista de posts em estilo rolagem infinita
- 🔵 **Stories** — avatares redondos com borda colorida no topo do feed
- ❤️ **Curtir posts** — clique no coração para curtir e descurtir; o ícone muda de cor
- 👥 **Sugestões** — painel lateral com perfis de viajantes para seguir
- 🗺️ **Menu lateral** — navegação fixa com as principais seções
---
 
## 🗂️ Estrutura do projeto
 
```
src/
├── components/
│   ├── Feed.jsx          # Lista de posts
│   ├── Post.jsx          # Card individual de post com sistema de curtida
│   ├── Stories.jsx       # Barra de stories
│   └── Recommended.jsx   # Sugestões de perfis
├── data/
│   └── posts.js          # Dados dos posts (usuário, imagem, descrição)
├── App.js                # Componente raiz e estrutura de layout
└── App.css               # Toda a estilização do projeto
```
 
---
 
## 📝 Próximos passos
 
- [ ] Adicionar autenticação de usuário
- [ ] Permitir upload de imagens reais
- [ ] Implementar comentários nos posts
- [ ] Contador de curtidas
- [ ] Página de perfil individual
- [ ] Suporte a viagens no tempo com filtro por era histórica 🕰️