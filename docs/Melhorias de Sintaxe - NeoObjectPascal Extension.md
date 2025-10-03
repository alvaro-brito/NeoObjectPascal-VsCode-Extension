# Melhorias de Sintaxe - NeoObjectPascal Extension

## Resumo das Atualizações

Este documento descreve as melhorias implementadas na extensão NeoObjectPascal baseadas nos arquivos de gramática ANTLR4 fornecidos (`NeoObjectPascalLexer.g4` e `NeoObjectPascalParser.g4`).

## Palavras Reservadas Adicionadas

### Keywords de Controle de Fluxo
- `return` - Retorno de funções
- `to` - Usado em loops for

### Tipos de Dados
- `Integer` - Tipo inteiro
- `String` - Tipo string
- `Boolean` - Tipo booleano
- `Real` - Tipo real (ponto flutuante)
- `Object` - Tipo objeto

### Funções Built-in
- `WriteLn` - Saída de texto (case-sensitive)
- `ReadLn` - Entrada de texto (case-sensitive)
- `showMenu` - Exibição de menu interativo

### Funções de Parsing
- `JSON.parse` - Parse de JSON
- `CSV.parse` - Parse de CSV

### Keywords Especiais
- `into` - Usado com JSON.parse e CSV.parse
- `java` - Declaração de bloco Java embutido

## Operadores Adicionados

### Operador Pipe
- `|>` - Operador de pipe para composição de funções

### Operadores de Atribuição
- `:=` - Atribuição de valor

### Operadores de Comparação
- `=` - Igual
- `<>` - Diferente
- `<` - Menor que
- `>` - Maior que
- `<=` - Menor ou igual
- `>=` - Maior ou igual

### Operadores Aritméticos
- `+` - Adição
- `-` - Subtração
- `*` - Multiplicação
- `/` - Divisão

## Suporte a Strings

### Strings com Aspas Simples
```pascal
var texto: String;
texto := 'Hello World';
```

### Strings com Aspas Duplas
```pascal
var texto: String;
texto := "Hello World";
```

### Escape de Caracteres
- Aspas simples: `''` (duas aspas simples)
- Aspas duplas: `\"` (barra invertida + aspas)

## Blocos Java Embutidos

A extensão agora suporta syntax highlighting para blocos Java embutidos:

```pascal
var resultado: String;
resultado := java: (parametro) {
    // Código Java aqui
    return parametro.toUpperCase();
};
```

### Características:
- Palavra-chave `java` destacada
- Delimitadores `{` e `}` identificados
- Código Java dentro do bloco com highlighting básico

## Comentários

### Comentário de Linha
```pascal
// Este é um comentário de linha
```

### Comentário de Bloco (Pascal tradicional)
```pascal
(* Este é um comentário de bloco *)
```

```pascal
{ Este também é um comentário de bloco }
```

## Exemplos de Uso

### Declaração de Variáveis
```pascal
var contador: Integer;
var nome: String;
var ativo: Boolean;
var preco: Real;
var dados: Object;
```

### Funções com Retorno
```pascal
function somar(a: Integer, b: Integer): Integer
begin
    return a + b;
end;
```

### Estruturas de Controle
```pascal
// If-Then-Else
if condicao then
    WriteLn('Verdadeiro')
else
    WriteLn('Falso');

// While
while contador < 10 do
begin
    contador := contador + 1;
end;

// For
for i := 1 to 10 do
    WriteLn(i);
```

### Parse de Dados
```pascal
// JSON
JSON.parse('{"nome": "João"}') into dados;

// CSV
CSV.parse('nome,idade\nJoão,30') into dados;
```

### Operador Pipe
```pascal
var resultado: Integer;
resultado := 10 |> funcao1() |> funcao2();
```

### Menu Interativo
```pascal
showMenu('Opção 1', 'Opção 2', 'Opção 3');
```

## Cores e Estilos de Highlighting

### Tipos de Tokens e suas Classificações

| Token | Classificação | Descrição |
|-------|--------------|-----------|
| `Integer`, `String`, `Boolean`, `Real`, `Object` | `entity.name.type.neoobjectpascal` | Tipos de dados |
| `begin`, `end`, `if`, `then`, `else`, `while`, `for`, `return` | `keyword.control.neoobjectpascal` | Palavras de controle |
| `true`, `false`, `nil` | `constant.language.neoobjectpascal` | Constantes |
| `WriteLn`, `ReadLn`, `showMenu` | `support.function.builtin.neoobjectpascal` | Funções built-in |
| `JSON.parse` | `support.function.json.neoobjectpascal` | Função JSON |
| `CSV.parse` | `support.function.csv.neoobjectpascal` | Função CSV |
| `into`, `java` | `keyword.other.neoobjectpascal` | Keywords especiais |
| `\|>` | `keyword.operator.pipe.neoobjectpascal` | Operador pipe |
| `:=` | `keyword.operator.assignment.neoobjectpascal` | Operador de atribuição |
| `=`, `<>`, `<`, `>`, `<=`, `>=` | `keyword.operator.comparison.neoobjectpascal` | Operadores de comparação |
| `+`, `-`, `*`, `/` | `keyword.operator.arithmetic.neoobjectpascal` | Operadores aritméticos |

## Compatibilidade

A extensão mantém compatibilidade com a sintaxe Object Pascal tradicional, adicionando suporte para as novas features do NeoObjectPascal:

- ✅ Todas as keywords do Object Pascal tradicional
- ✅ Novas keywords específicas do NeoObjectPascal
- ✅ Operador pipe (`|>`)
- ✅ Blocos Java embutidos
- ✅ Funções de parsing (JSON, CSV)
- ✅ Tipos de dados modernos
- ✅ Strings com aspas duplas e simples

## Arquivo de Exemplo

Um arquivo de exemplo completo está disponível em `example.npas`, demonstrando todas as funcionalidades suportadas pela extensão.

## Testes

Para testar o syntax highlighting:

1. Instale a extensão
2. Abra o arquivo `example.npas`
3. Verifique se todas as palavras reservadas estão destacadas corretamente
4. Teste a execução do arquivo (se tiver o JAR configurado)

## Notas Técnicas

### Arquivos Modificados
- `syntaxes/neoobjectpascal.tmLanguage.yaml` - Gramática principal
- `syntaxes/neoobjectpascal.tmLanguage.json` - Gramática compilada

### Processo de Compilação
```bash
npm run prepare
```

Este comando converte o arquivo YAML para JSON usando `js-yaml`.

## Próximas Melhorias Possíveis

1. **IntelliSense**: Adicionar autocomplete para palavras reservadas
2. **Snippets**: Criar snippets para estruturas comuns
3. **Validação**: Adicionar validação de sintaxe em tempo real
4. **Formatação**: Implementar formatador de código
5. **Debugging**: Suporte a debugging integrado

## Referências

- Gramática Lexer: `NeoObjectPascalLexer.g4`
- Gramática Parser: `NeoObjectPascalParser.g4`
- TextMate Grammar: https://macromates.com/manual/en/language_grammars
- VS Code Language Extensions: https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide
