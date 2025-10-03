# Guia Rápido de Instalação - NeoObjectPascal Extension

## Instalação da Extensão

### Opção 1: Instalação via Interface Gráfica

1. Abra o Visual Studio Code
2. Pressione `Ctrl+Shift+P` (Windows/Linux) ou `Cmd+Shift+P` (Mac)
3. Digite: `Extensions: Install from VSIX...`
4. Navegue até o arquivo `neoobjectpascal-1.0.0.vsix`
5. Clique em "Install"
6. Reinicie o VS Code

### Opção 2: Instalação via Linha de Comando

```bash
code --install-extension neoobjectpascal-1.0.0.vsix
```

## Configuração Inicial

### Passo 1: Abrir Configurações

- **Windows/Linux**: `Ctrl + ,`
- **Mac**: `Cmd + ,`

Ou via menu: `File` → `Preferences` → `Settings`

### Passo 2: Configurar Caminho do JAR

1. Na barra de pesquisa das configurações, digite: `neoobjectpascal`
2. Localize a opção: **NeoObjectPascal: Jar Path**
3. Insira o caminho do **diretório** onde está o arquivo JAR

**Exemplos:**

- Windows: `C:\NeoObjectPascal\lib`
- Linux: `/home/usuario/NeoObjectPascal/lib`
- Mac: `/Users/usuario/NeoObjectPascal/lib`

**⚠️ IMPORTANTE:** 
- Insira apenas o caminho do **diretório**, não o caminho completo do arquivo
- A extensão procurará automaticamente pelo arquivo `neoobjectpascal-1.0-SNAPSHOT-jar-with-dependencies.jar` neste diretório

### Passo 3: Verificar Java

Certifique-se de que o Java está instalado e no PATH:

```bash
java -version
```

Se não estiver instalado, baixe em: https://www.java.com/

## Como Usar

### Executar um Arquivo .npas

1. **Via Explorador de Arquivos:**
   - Clique com botão direito no arquivo `.npas`
   - Selecione: `Run NeoObjectPascal File`

2. **Via Editor:**
   - Abra o arquivo `.npas`
   - Clique com botão direito no editor
   - Selecione: `Run NeoObjectPascal File`

3. **Via Paleta de Comandos:**
   - Abra o arquivo `.npas`
   - Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P`)
   - Digite: `Run NeoObjectPascal File`

### Resultado

A extensão abrirá um terminal integrado chamado "NeoObjectPascal" e executará:

```bash
java -jar <caminho-do-jar>/neoobjectpascal-1.0-SNAPSHOT-jar-with-dependencies.jar -q <seu-arquivo.npas>
```

## Solução de Problemas

### Erro: "NeoObjectPascal JAR path is not configured"

**Solução:** Configure o caminho do JAR nas configurações (veja Passo 2 acima)

### Erro: "JAR file not found"

**Causas:**
- Caminho configurado está incorreto
- Arquivo JAR não está no diretório
- Nome do arquivo JAR está diferente

**Solução:**
1. Verifique se o arquivo existe no diretório configurado
2. Confirme que o nome do arquivo é exatamente: `neoobjectpascal-1.0-SNAPSHOT-jar-with-dependencies.jar`
3. Verifique se não há espaços extras no caminho configurado

### Erro: "java: command not found"

**Solução:** 
1. Instale o Java Runtime Environment (JRE)
2. Adicione o Java ao PATH do sistema
3. Reinicie o VS Code após instalar o Java

## Teste Rápido

Crie um arquivo `teste.npas` com o seguinte conteúdo:

```pascal
program HelloWorld;

begin
  writeln('Hello from NeoObjectPascal!');
  writeln('Teste realizado com sucesso!');
end.
```

Execute o arquivo usando uma das formas descritas acima.

## Suporte

Para problemas ou dúvidas, consulte o arquivo `README.md` completo que contém informações detalhadas sobre todas as funcionalidades da extensão.
