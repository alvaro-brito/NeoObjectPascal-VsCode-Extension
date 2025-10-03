# Changelog - NeoObjectPascal Extension

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [1.0.0] - 2025-10-04

### Adicionado
- **Suporte completo para arquivos .npas**
  - Syntax highlighting para NeoObjectPascal
  - Execução direta via menu de contexto
  
- **Palavras Reservadas do NeoObjectPascal**
  - Keywords de controle: `return`, `to`, `begin`, `end`, `if`, `then`, `else`, `while`, `do`, `for`
  - Tipos de dados: `Integer`, `String`, `Boolean`, `Real`, `Object`
  - Funções built-in: `WriteLn`, `ReadLn`, `showMenu`
  - Funções de parsing: `JSON.parse`, `CSV.parse`
  - Keywords especiais: `into`, `java`, `uses`

- **Operadores**
  - Operador pipe: `|>`
  - Operador de atribuição: `:=`
  - Operadores de comparação: `=`, `<>`, `<`, `>`, `<=`, `>=`
  - Operadores aritméticos: `+`, `-`, `*`, `/`

- **Suporte a Strings**
  - Strings com aspas simples: `'texto'`
  - Strings com aspas duplas: `"texto"`
  - Escape de caracteres em ambos os formatos

- **Blocos Java Embutidos**
  - Syntax highlighting para blocos `java: () { ... }`
  - Identificação de código Java dentro de NeoObjectPascal

- **Comentários**
  - Comentários de linha: `//`
  - Comentários de bloco: `(* *)` e `{ }`

- **Funcionalidade de Execução**
  - Menu de contexto no explorador de arquivos
  - Menu de contexto no editor
  - Comando na paleta de comandos
  - Terminal integrado dedicado
  - Validação de arquivo JAR antes da execução

- **Configuração**
  - Configuração `neoobjectpascal.jarPath` para especificar o diretório do JAR
  - Validação automática do caminho do JAR
  - Mensagens de erro informativas

- **Documentação**
  - README completo em inglês
  - Guia de instalação em português (INSTALACAO.md)
  - Documento de melhorias de sintaxe (SYNTAX_IMPROVEMENTS.md)
  - Arquivo de exemplo completo (example.npas)
  - Instruções detalhadas de publicação

### Baseado em
- Fork de [object-pascal-syntax-highlighting](https://github.com/thevikke/object-pascal-syntax-highlighting)
- Gramática ANTLR4 do NeoObjectPascal (NeoObjectPascalLexer.g4 e NeoObjectPascalParser.g4)

### Autor
- Álvaro Brito

### Tecnologias
- Visual Studio Code Extension API
- TextMate Grammar (YAML/JSON)
- Node.js
- JavaScript

---

## Formato

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).
