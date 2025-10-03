# NeoObjectPascal Extension for Visual Studio Code

**Autor:** Álvaro Brito

Esta extensão fornece suporte completo para arquivos NeoObjectPascal (.npas) no Visual Studio Code, incluindo syntax highlighting e execução direta através do menu de contexto.

## Funcionalidades

- **Syntax Highlighting**: Destaque de sintaxe completo para arquivos `.npas`
- **Execução Direta**: Execute arquivos NeoObjectPascal diretamente do editor ou explorador de arquivos
- **Configuração Flexível**: Configure o caminho do JAR do NeoObjectPascal nas configurações
- **Terminal Integrado**: Execução em terminal dedicado dentro do VS Code

## Requisitos

- **Visual Studio Code** versão 1.60.0 ou superior
- **Java Runtime Environment (JRE)** instalado e configurado no PATH do sistema
- **NeoObjectPascal JAR**: O arquivo `neoobjectpascal-1.0-SNAPSHOT-jar-with-dependencies.jar`

## Instalação

### Método 1: Instalação Local (VSIX)

1. Baixe o arquivo `neoobjectpascal-1.0.0.vsix`
2. Abra o Visual Studio Code
3. Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac) para abrir a paleta de comandos
4. Digite `Extensions: Install from VSIX...`
5. Selecione o arquivo `.vsix` baixado
6. Reinicie o VS Code quando solicitado

### Método 2: Linha de Comando

```bash
code --install-extension neoobjectpascal-1.0.0.vsix
```

## Configuração

Antes de usar a funcionalidade de execução, você precisa configurar o caminho do JAR:

1. Abra as configurações do VS Code:
   - Menu: `File` → `Preferences` → `Settings`
   - Ou pressione `Ctrl+,` (Windows/Linux) ou `Cmd+,` (Mac)

2. Procure por `NeoObjectPascal: Jar Path`

3. Insira o caminho do **diretório** onde está localizado o arquivo JAR
   - Exemplo Windows: `C:\NeoObjectPascal\lib`
   - Exemplo Linux/Mac: `/home/usuario/NeoObjectPascal/lib`

**Importante:** Insira apenas o caminho do diretório, não o caminho completo do arquivo JAR. A extensão irá automaticamente procurar pelo arquivo `neoobjectpascal-1.0-SNAPSHOT-jar-with-dependencies.jar` neste diretório.

### Configuração via settings.json

Você também pode configurar diretamente no arquivo `settings.json`:

```json
{
  "neoobjectpascal.jarPath": "/caminho/para/o/diretorio/do/jar"
}
```

## Como Usar

### Executar um Arquivo .npas

Existem várias formas de executar um arquivo NeoObjectPascal:

#### 1. Menu de Contexto no Explorador
- Clique com o botão direito em um arquivo `.npas` no explorador de arquivos
- Selecione `Run NeoObjectPascal File`

#### 2. Menu de Contexto no Editor
- Abra um arquivo `.npas` no editor
- Clique com o botão direito no editor
- Selecione `Run NeoObjectPascal File`

#### 3. Paleta de Comandos
- Abra um arquivo `.npas`
- Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac)
- Digite `Run NeoObjectPascal File` e pressione Enter

### O que Acontece ao Executar

Quando você executa um arquivo `.npas`, a extensão:

1. Valida se o arquivo tem a extensão `.npas`
2. Verifica se o caminho do JAR está configurado
3. Confirma se o arquivo JAR existe no caminho especificado
4. Abre ou reutiliza um terminal chamado "NeoObjectPascal"
5. Executa o comando: `java -jar <caminho-do-jar> -q <arquivo.npas>`

## Exemplo de Arquivo .npas

```pascal
program HelloWorld;

begin
  writeln('Hello from NeoObjectPascal!');
  writeln('This is a test file.');
end.
```

## Solução de Problemas

### "NeoObjectPascal JAR path is not configured"

**Solução:** Configure o caminho do JAR nas configurações conforme descrito na seção [Configuração](#configuração).

### "JAR file not found"

**Causas possíveis:**
- O caminho configurado está incorreto
- O arquivo JAR não está no diretório especificado
- O nome do arquivo JAR está diferente do esperado

**Solução:** 
- Verifique se o arquivo `neoobjectpascal-1.0-SNAPSHOT-jar-with-dependencies.jar` existe no diretório configurado
- Confirme que o caminho nas configurações aponta para o diretório correto

### "java: command not found"

**Solução:** Instale o Java Runtime Environment (JRE) e certifique-se de que está no PATH do sistema.

## Publicação na Marketplace do Visual Studio Code

Para publicar esta extensão na marketplace oficial:

### Pré-requisitos

1. Crie uma conta no [Azure DevOps](https://dev.azure.com)
2. Crie um Personal Access Token (PAT):
   - Acesse https://dev.azure.com
   - Clique no ícone do usuário → Security
   - Clique em "Personal access tokens" → "New Token"
   - Nome: `vscode-marketplace`
   - Organization: `All accessible organizations`
   - Scopes: Selecione `Marketplace` → `Manage`
   - Clique em "Create"
   - **Importante:** Copie e salve o token gerado (não será mostrado novamente)

3. Instale o vsce (VS Code Extension Manager):
```bash
npm install -g @vscode/vsce
```

### Passos para Publicação

1. **Login no vsce**
```bash
vsce login alvarobrito
```
Quando solicitado, cole o Personal Access Token criado anteriormente.

2. **Publicar a extensão**
```bash
cd /caminho/para/NeoObjectPascal
vsce publish
```

3. **Ou publicar uma versão específica**
```bash
vsce publish minor  # Incrementa versão minor (1.0.0 → 1.1.0)
vsce publish major  # Incrementa versão major (1.0.0 → 2.0.0)
vsce publish patch  # Incrementa versão patch (1.0.0 → 1.0.1)
```

### Atualizar uma Extensão Publicada

Para publicar uma nova versão:

```bash
# Atualize a versão no package.json ou use:
vsce publish patch  # ou minor, ou major

# Ou especifique uma versão:
vsce publish 1.0.1
```

### Verificar Antes de Publicar

```bash
# Validar o pacote
vsce ls

# Empacotar sem publicar (para testar)
vsce package
```

## Estrutura do Projeto

```
NeoObjectPascal/
├── extension.js                    # Código principal da extensão
├── package.json                    # Manifesto da extensão
├── language-configuration.json     # Configuração de linguagem
├── syntaxes/
│   ├── neoobjectpascal.tmLanguage.yaml
│   └── neoobjectpascal.tmLanguage.json
├── images/
│   └── Pascal.png                  # Ícone da extensão
├── README.md                       # Este arquivo
├── CHANGELOG.md                    # Histórico de mudanças
└── LICENSE                         # Licença MIT
```

## Desenvolvimento

### Testar Localmente

1. Abra o projeto no VS Code
2. Pressione `F5` para abrir uma nova janela do VS Code com a extensão carregada
3. Teste as funcionalidades na janela de desenvolvimento

### Modificar e Recompilar

Após modificar os arquivos de sintaxe YAML:

```bash
npm run prepare
```

Isso irá regenerar o arquivo JSON de sintaxe.

## Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Autor

**Álvaro Brito**

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Changelog

### 1.0.0 (2025-10-04)
- Versão inicial
- Suporte para arquivos .npas
- Syntax highlighting completo
- Execução via menu de contexto
- Configuração de caminho do JAR
