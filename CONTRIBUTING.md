# Guia para contribuições

- `next` é a branch padrão para desenvolvimento
- `main` contém apenas código que reflete o código em produção

---

## 📦 Fluxo de branching

### Convenções de nomenclatura de branches
- `feat/<short-description>` — para novas features
- `fix/<short-description>` — para bug fixes
- `docs/<short-description>` — para documentação
- `chore/<short-description>` — para tarefas de manutenção
- `hotfix/<short-description>` — para consertos urgentes (com base em `main`)

---

## 🔄 Fluxo geral

### 1️⃣ Criar branches à partir de `next`

```bash
# Inicie seu trabalho sempre a partir da branch `next`
git checkout next
# Antes de começar qualquer modificação, verifique que
# possui a versão mais atualizada do código.
git pull origin next
# A partir de `next`, crie uma feature branch `feat/my-feature` na qual irá desenvolver seu trabalho
git checkout -b feat/my-feature
```

---

### 2️⃣ Mantenha sua branch sincronizada com `next`
Antes de abrir uma pull request:

```bash
# Download de atualizações da origin
git fetch origin
# Rebase das modificações de origin para sua branch de desenvolvimento
git rebase origin/next
```

Em caso de conflitos:
```bash
# Resolver conflitos manualmente e então prosseguir com
# rebase
git add <resolved-files>
git rebase --continue
```

---

### 3️⃣ Push da branch para origin
```bash
git push origin feat/my-feature
```

---

### 4️⃣ Abrir pull request (PR)
- **Abra a PR para `next`**.
- Todas as PRs requerem:
  - Pelo menos uma revisão com aprovação
  - Passar por testes automatizados
  - Não são permitidas atualizações diretas em `next` ou `main`

---

## 🔥 Para hotfixes (bugs em produção)

1️⃣ Crie a branch à partir de `main`:
```bash
git checkout main
git pull origin main
git checkout -b hotfix/my-hotfix
```

2️⃣ Push + abrir PR para `main`.

3️⃣ Após merge, sincronizar imediatamente `main` para `next`:
```bash
git checkout next
git pull origin next
git merge --no-ff main
git push origin next
```

---

## 📝 Padrão de mensagens de commit

```
<type>: <descrição curta>
```

### Tipos comuns
- `feat`: nova funcionalidade
- `fix`: correção de bug
- `docs`: alterações na documentação
- `chore`: manutenção e tarefas administrativas
- `refactor`: refatoração de código sem alteração de comportamento
- `test`: adição ou melhoria de testes
- `style`: ajustes de formatação (espaços, indentação, etc.)

### ✅ Exemplos
- `feat: adiciona fluxo de login de usuário`
- `fix: corrige tratamento de erro na API`
- `docs: atualiza README com novas instruções, como requisitado em #82`
- `chore: atualiza dependências`

### 🔔 Convenções adicionais
- Limite a linha de descrição a ~50 caracteres
- Use o modo imperativo, como se a mensagem fizesse parte da seguinte frase: "Este commit [adiciona/corrige/atualiza] funcionalidade XPTO, descrito na issue #92"
- Não use pontuação final na linha de descrição

---

## 🖋️ Padrões de formatação de código

- Verifique com a equipe responsável os padrões de formatação definidos no projeto.
- Mesmo que não haja uma padronização 100% estabelecida, busque consistência na sua formatação.
- Caso haja um formatador pré-definido (ex: `Prettier`), sempre aplique a formatação antes de enviar o código para revisão (PR).
- Utilize **espaços ao invés de tabs**.
- Evite deixar **espaços em branco ao final das linhas**.
- Sempre deixe **1 linha em branco ao final de cada arquivo**.

---

## 🔔 Resumo
- `next` é a branch padrão para trabalho de desenvolvimento.
- Todo o trabalho de desenvolvimento em features deve acontecer em branches com base em `next`.
- Todas as modificações devem ser feitas através de pull requests (PRs).
- `main` é estritamente destinado a espelhar código em produção.
- Hotfixes devem ser sincronizadas de `main` para `next` imediatamente após merge.
