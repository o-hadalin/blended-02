# TODO LIST

- Напиши застосунок зберігання todo-листів.
- Під час додавання та видалення контакту контакти зберігаються у
  `localStorage`.
- Під час завантаження застосунку todo-листа, якщо такі є, зчитуються з
  локального сховища і записуються у внутрішній стан компонента `Todos`.

## Крок 1

Застосунок повинен складатися з форми і списку todo-листів. На поточному кроці
реалізуй додавання тудушки та відображення їх списку.

Використовуйте готову структуру форми з компонента `<Form/>` який приймає один
проп `onSubmit` - функцію для передачі значення інпута під час сабміту форми.

```jsx
<form className={style.form}>
  <button className={style.button} type="submit">
    <FiSearch size="16px" />
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="search"
    required
    autoFocus
  />
</form>
```

`state`, що зберігається в батьківському компоненті `<Todos/>`, обов'язково
повинен бути наступного вигляду.

```bash
  const [todos, setTodos] = useState([]);
```

Кожна todo повинна бути об'єктом з властивостями `text` та `id`. Для генерації
ідентифікаторів використовуй будь-який відповідний пакет, наприклад
[nanoid](https://www.npmjs.com/package/nanoid). Після завершення цього кроку,
застосунок повинен виглядати приблизно так.

[![preview](https://i.gyazo.com/de0115918db7d989fbdc10f1744c11c3.png)](https://gyazo.com/de0115918db7d989fbdc10f1744c11c3)

## Крок 2

Застосунок повинен зберігати тудушки між різними сесіями (оновлення сторінки).
Використай компонент `<TodoList/>` для відображення todos на сторінці

### Опис компонента списку `<TodoList/>`

Список карток тудушок. Створює компонент наступної структури. Для створення
списку потрібно використати універсальний компонент `<Grid/>`

```jsx
<Grid>
  {array.map(() => (
    <GridItem>
      <TodoListItem />
    </GridItem>
  ))}
</Grid>
```

### Опис компонента `<TodoListItem/>`

Компонент елемента тудушки. Створює компонент наступної структури. Для створення
одного елемента списку потрбно використати універсальний компонент `<GridItem/>`

```jsx
<div className={style.box}>
  <Text textAlign="center" marginBottom="20">
    TODO #1
  </Text>
  <Text>Some description</Text>
  <button className={style.deleteButton} type="button">
    <RiDeleteBinLine size={24} />
  </button>
</div>
```

## Крок 3

Розшир функціонал застосунку, дозволивши користувачеві видаляти раніше збережені
тудушки.

[![preview](https://i.gyazo.com/8bf303fed0163b544d5c2314fe1df133.gif)](https://gyazo.com/8bf303fed0163b544d5c2314fe1df133)

## Крок 4 Завдання з \* (не обов'язкове)

Додай можливість редагувати попередньо створені todo

Для цього потрібно використати додаткову форму `<EditForm/>`, в якій потрібно
підставити текст зі створеної тудушки та додати в неї дві кнопки - `Cancel`
`Edit`

В `state` додай властивості:

- `isEditing` - буль, що сигнілізує чи можливо включити "режим редагування"

  > В залежності від значення ми будемо показувати або `<SearchForm/>`, або
  > `<EditForm/>`

- `currentTodo` - об'єкт, який буде в собі зберігати інформацію про тудушку яку
  треба відредагувати

```bash
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
```

Після додавання кнопки редагування компонент `<TodoListItem/>` буде мати такий
вигляд

```jsx
<GridItem>
  <div className={style.box}>
    <Text textAlign="center" marginBottom="20">
      TODO #1
    </Text>
    <Text>Some description</Text>
    <button className={style.deleteButton} type="button">
      <RiDeleteBinLine size={24} />
    </button>

    <button className={style.editButton} type="button">
      <RiEdit2Line size={24} />
    </button>
  </div>
</GridItem>
```

### Опис компонента `<EditForm/>`

Компонент `<EditForm/>` буде мати такий вигляд

```jsx
<form className={style.form}>
  <button className={style.submitButton} type="submit">
    <RiSaveLine color="green" size="16px" />
  </button>

  <button className={style.editButton} type="button">
    <MdOutlineCancel color="red" size="16px" />
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="text"
    required
    defaultValue={defaultValue}
    autoFocus
  />
</form>
```

Компонент `<EditForm/>` очікує наступні пропси:

- `updateTodo` - функцію для оновлення тудушки
- `cancelUpdate` - функцію для відміни редагування
- `defaultValue` - властивість `text` поточної todo яку в даний час\
  ми редагуємо (`currentTodo`), потрібно для підстановки існуючого опису в інпут,\
  записуємо в значення `defaultValue`
- форму потрібно зробити неконтрольованою і при події сабміт передавати
  оновлений текст todo\
  в батьківський компонент `<Todos/>`

### Додай функціонал покроково:

- додай функцію, яка покаже форму редагування, наприклад `handleEditTodo`\
  і запише в стейт `currentTodo` всі властивості todo яку ми зараз редагуємо
- додай функцію, відмінить редагування, запише в стейт `currentTodo` пустий
  об'єкт\
  та залишить все як є, наприклад `cancelUpdate`
- додай функцію, оновить стейт всіх тудушoк значення `todos` та додасть туди
  оновлену тудушку, наприклад
- додай функцію, яка по події сабміт в компоненті `<EditForm/>` та оновить
  список todo, наприклад `updateTodo(text)`
- додай універсальну функцію `fintTodo(text)` яка буде перевіряти щоб todo не
  повторялися. Цю функцію потрібно буде використовувати і при додаванні нової
  todo\
  і при оновленні існуючої.

Прев'ю фінального результата роботи додатку

[![preview](https://i.gyazo.com/57595efde1dbe5b2bd7ab49895b5343a.gif)](https://gyazo.com/57595efde1dbe5b2bd7ab49895b5343a)
