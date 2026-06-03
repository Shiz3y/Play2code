const levelsData = {
    html: [
        {
            id: 1,
            title: "Первый шаг",
            desc: "Создай заголовок первого уровня, используя тег h1.",
            type: "write",
            starterCode: "<!-- Напиши код ниже -->\n",
            solution: ["<h1>", "</h1>"],
            hint: "Используй парный тег <h1>Текст</h1>"
        },
        {
            id: 2,
            title: "Структура",
            desc: "Добавь параграф с текстом 'Привет, мир!' внутри тега body.",
            type: "write",
            starterCode: "<body>\n\n</body>",
            solution: ["<p>", "Привет, мир!", "</p>"],
            hint: "Тег параграфа - <p>"
        }
    ],
    python: [
        {
            id: 1,
            title: "Переменные",
            desc: "Создай переменную name и присвой ей значение 'Coder'.",
            type: "write",
            starterCode: "# Создай переменную\n",
            solution: ["name", "=", "Coder"],
            hint: "Синтаксис: имя = значение"
        },
        {
            id: 2,
            title: "Условия",
            desc: "Напиши if, который проверяет, больше ли x чем 10.",
            type: "write",
            starterCode: "x = 15\n",
            solution: ["if", "x", ">", "10"],
            hint: "if x > 10:"
        }
    ],
    java: [
        {
            id: 1,
            title: "Hello World",
            desc: "Выведи текст 'Java' на консоль.",
            type: "write",
            starterCode: "public class Main {\n  public static void main(String[] args) {\n    \n  }\n}",
            solution: ["System.out.println", "\"Java\""],
            hint: "System.out.println(\"Текст\");"
        }
    ]
};