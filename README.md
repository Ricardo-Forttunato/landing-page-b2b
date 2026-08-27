# B2B Landing Page

Landing page institucional do produto **[Indicar nome do produto]**, construída com **Vite**, **React**, **TypeScript**, **Tailwind CSS**, **Vitest**, **React Testing Library** e **i18next**.

## Visão geral

O projeto segue a estrutura de página para landing pages com foco em B2B e organiza o conteúdo em blocos modulares:

1. `Navbar`
2. `Hero`
3. Intro / manifesto
4. `Features`
5. `UseCases`
6. `About`
7. `CTA`
8. `Footer`

As imagens públicas em `assets/` são usadas com lazy loading nos componentes para reproduzir o estilo visual da marca.

## Arquitetura

### Estrutura de pastas

```text
public/
src/
  assets/
  components/
  pages/
  i18n/
  locales/
  tests/
  main.tsx
  App.tsx
  styles.css
```

### Fluxo de renderização

`main.tsx` inicializa o React e monta `App`.

`App.tsx` apenas renderiza `LandingPage`.

`LandingPage.tsx` orquestra a composição da página e controla o idioma ativo.

### Componentes

| Componente | Função |
|---|---|
| `Navbar` | Cabeçalho fixo, navegação por âncoras e seletor de idioma |
| `Hero` | Abertura principal com mensagem institucional e imagens de destaque |
| `Features` | Cards com os pilares da [nome da empresa] |
| `UseCases` | Blocos alternados com cenários práticos |
| `About` | História e visão institucional da [nome da empresa] |
| `CTA` | Chamada final para contato e conversão |
| `Footer` | Rodapé com links institucionais e redes |

## Infraestrutura e stack

### Runtime e build

- **Vite** como bundler e servidor de desenvolvimento
- **React 18** para UI
- **TypeScript** com tipagem estrita
- **Tailwind CSS** para layout e tokens visuais
- **PostCSS + Autoprefixer** para pipeline de estilos

### Testes

- **Vitest** para execução de testes
- **React Testing Library** para testes de interface
- **jsdom** como ambiente DOM
- **@testing-library/jest-dom** para matchers semânticos

### Scripts

| Script | Ação |
|---|---|
| `npm run dev` | sobe o ambiente local |
| `npm run build` | gera a build de produção |
| `npm run preview` | visualiza a build |
| `npm test` | executa a suíte de testes |

## Design system

O layout usa os tokens da [nome da empresa] e segue a paleta de cores:

- **Primary**: `#1C2333` ou selecione a cor principal da marca
- **Secondary**: `#6B7280` ou selecione a cor secundária da marca
- **Background**: `#F3F4F6` ou selecione a cor de fundo da marca
- **Accent**: `#FFFFFF` ou selecione a cor de destaque da marca
- **Font**: `Inter, sans-serif` ou selecione a fonte corporativa da marca

Os estilos globais ficam em `src/styles.css`, e os tokens estendidos ficam em `tailwind.config.ts`.

## Navegação da página

A navegação principal é baseada em âncoras:

- `#top`
- `#features`
- `#use-cases`
- `#about`
- `#cta`
- `#footer`

O `Navbar` no topo e usa o seletor de idioma sem recarregar a página.

## Internacionalização

O projeto usa **i18next** com `react-i18next`.

### Estrutura

- `src/i18n/index.ts` inicializa o i18n
- `src/locales/en.ts` contém texto estatico para traduções em inglês
- `src/locales/pt.ts` contém textos estáticos para traduções em português

### Regras

- idioma padrão: **Portugues**
- suporte a **Ingles**, pode ser expandido para outros idiomas de forma pratica
- textos estáticos ficam centralizados nos arquivos dicionário de tradução
- o idioma selecionado é controlado no `LandingPage`
- o atributo `lang` do documento é atualizado dinamicamente

## Testes

Os testes ficam em `src/tests/` e cobrem:
- renderização da landing page
- troca de idioma
- acessibilidade básica de navegação e CTAs

## Assets

As imagens em `assets/` são usadas com loadind lazy nos componentes:

- `easydashboard-chart-drag-and-drop.png`
- `easydashboard-files-upload.png`
- `easydashboard-main-screen.png`
- `easydashboard-manul-input.png`
- `easydashboard-title.png`

## Fluxo de desenvolvimento

1. `LandingPage` compõe a página com os componentes.
2. Cada componente consome textos do i18n.
3. Os assets do `assets/` entram como imagens do layout.
4. Vitest valida a estrutura e os estados principais.
5. `vite build` gera a entrega final.
