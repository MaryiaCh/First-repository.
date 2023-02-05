// ! GIT
/*
  * git config --global user.name / "..." - проверяет username
  * git config --global user.email / "..." - проверяет email
  * git init - инициализация git в проекте
  * git branch - список веток
  * git branch -d .. - удаление ветки
  * git status - статус отслеживаемых файлов
  * git add / . - добавление файлов в отслеживаемые
  * git commit -m '...' - комментирование отслеживаемых файлов
  * git commit --amend -m '...' - переименование коммита
  * git log / -p - просмотр коммитов
  * git show ...hash... - просмотр структуры коммита по его хэшу 
  * git checkout - отмена всех изменений
  * git checkout ... - перейти на ветку
  * git checkout -b ... - создать новую ветку и перейти сразу на нее
  * git push origin ... - пушнуть (добавить) код в репозиторий
  * git pull origin ... - спулить (взять) код с репозитория (pull автоматически сливает коммиты, не давая вам сначала просмотреть их)
  * git fetch - взять код с репозитория (git собирает все коммиты из целевой ветки, которых нет в текущей ветке, и сохраняет их в локальном репозитории)
  * git clone ... - клонирование репозитория

  * git cherry-pick - берет изменений, вносимые одним коммитом, и пытается повторно применить их в виде нового коммита в текущей ветке (новой, например). Будет сформирован новый коммит с другим значением SHA, но с изменениями из другой ветки
  * git reset --hard @^
    * @ - head
    * ^ - родитель head
    * ~ - можно указать кол-во предков
  * git log --oneline --graph --all - просмотреть дерево коммитов
  * git rebase dev + git checkout -b ..branch.. - возможность взять несколько коммитов из одной ветки и перенести их в другую созданную ветку
  * git stash / git stash apply - взять из одной ветки незакоммиченные изменения и применить их в другой новой ветке

  * git merge
*/

// ! Свойства
/*
! Изученные св-ва:

* width
* min-width
* max-width

* height
* min-height
* max-height

* padding 
  * padding-top
  * padding-right
  * padding-bottom
  * padding-left

* margin
  * margin-top
  * margin-right
  * margin-bottom
  * margin-left

* position
  * static
  * relative
  * absolute
  * fixed
  * sticky

* display
  * block
  * inline
  * inline-block

* text-align
  * left
  * center
  * right

* font-size
* font-family
* font-weight
* font-style

* cursor
  * pointer

* color

* letter-spacing

* text-decoration

* z-index

* border 
  * border-radius
  * border-width
  * border-style
  * border-color
  * border-top
  * border-right
  * border-bottom
  * border-left

* box-shadow
  * box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  * offset-x / offset-y / blur-radius / spread-radius / color
  * смещение-x / смещение-y / радиус / радиус размытия / цвет 

* background
  * background-color
  * background-image: url('...')
  * background-size: auto / contain / cover
  * background-repeat: repeat / no-repeat
  * background-position: bottom / top / center / left / right / 
  * background-attachment: fixed / scroll
*/

/*
! NodeJs / npm

* node - платформа Node.js это интерпретатор языка JavaScript. Сам по себе Node.js является C++ приложением, которое получает на входе JavaScript-код и выполняет его.

* пакетом в Node.js называется один или несколько JavaScript-файлов, представляющих собой какую-то библиотеку или инструмент.
* 1. npm - node package module - это стандартный менеджер пакетов, автоматически устанавливающийся вместе с Node.js. Он используется для скачивания пакетов из облачного сервера npm, либо для загрузки пакетов на эти сервера.
  * Менеджер npm состоит из двух частей:
    * CLI (интерфейс командной строки) – средство для размещения и скачивания пакетов,
    * онлайн-репозитории, содержащие JS пакеты.

* Файл package.json содержит в себе информацию о вашем приложении: название, версия, зависимости и тому подобное

* dependencies - зависимости, которые должны применяться и в продакшен сборке
* devDependencies - пакеты, которые используются только на момент разработки и без них приложение в продакшен моде будет так же выполняться (ставить флаг -D в терминале)
  * представляют собой словари с именами npm-библиотек (ключ) и их семантические версии (значение)
https://proglib.io/p/chto-takoe-npm-gayd-po-node-package-manager-dlya-nachinayushchih-2020-07-21

* npm init
* npm install
* npm install -D sass
* npm run build:dev (start)
*/

/*
! SASS / SCSS

* Как только Вы начинаете пользоваться Sass, препроцессор обрабатывает ваш Sass-файл и сохраняет его как простой CSS-файл, который Вы сможете использовать на любом сайте.
* Sass позволяет использовать функции недоступные в самом CSS

* npm i -D sass
* watch sass - пакет
*/