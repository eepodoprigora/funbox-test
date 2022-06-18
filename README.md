Q1 Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения
(далее про хорошую) 

Пользователя: Важно правильное позиционирование элементов во всех браузерах и на всех разрешениях. 
Пользователь должен иметь возможность без проблем взаимодейтвовать с интерактивными элементами и
видеть весь контент сайта. То есть, блоки не должны перекрывать друг друга, кнопки, 
ссылки должны быть подходящего размера, чтобы например, на мобильном спокойно нажать на них пальцем. 
Также, быстрая загрузка, никто не любит ждать.

Менеджера проекта: Верстка соответсвует ТЗ. Код является легким для понимания, 
что дает возможность расширятся и оперативно добавлять новые фичи.

Дизайнера: Максимальное соответсвие макету, понимание что в дизайн не уместить все до мелочей, 
и разработчик может быть на одной волне с ним, чтобы доделать самостоятельно в стилистике сайта эти мелочи

Верстальщика: Верстка должна быть семаничной и доступной (поддерживаться для людей с ограничеными возмоностями), 
также важна кроссбраузерность и адаптивность, отсутсвие лишних элементов.

Клиентского программиста: Хорошая верстка отличается структурированностью и легкой читабельностью.
Это нужно для дальнейшего развития и быстрого понимания происходящих процессов.

Серверного программиста : По возможности минимизация запросов на сервер, для искючения перегрузки. 
Использование современных технологий, защита приватных данный пользователей.

Q2 Опишите основные особенности верстки крупных многостраничных сайтов, дизайн
которых может меняться в процессе реализации и поддержки.
Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты
и технологии вы применяли на практике

В многостраничных сайтах присутствует много кода, который пишется людьми разного уровня,
что может усложнять процесс сборки итогового приложения.

Мой опыт основан пока только на Pet-проектах, там есть несколько многостраничных сайтов, которые написаны на React.
Это удобный инструмент, ввиду возможность роутинга без перезагрузки, скорости загрузки и работы сайта, компонентного подхода.

Q3 Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться 
как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android.
Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, 
как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

На данный момент популярной является концепция MobileFirst, так как все больше людей чаще используют
телефоны дял серфинга. Важна кросбраузерность и адаптивность, чтобы контент одинаково хорошо отображался 
на любом устройстве с любой шириной. Опыт опять же, только на Pet-проектах. Проверить отображаемость 
можно с помощью Chrome (Toggle Device toolbar). Также есть инструменты позволяющие открыть прямо на своем телефоне 
и проверить отображаемость в  доступныех мобильных браузерах.


Q4 Расскажите, какие инструменты помогают вам экономить время в процессе
написания, проверки и отладки кода. 
В последнее время я занимаюсь React, поэтому расскажу о нем. Инструменты которыми 
я пользуюсь являются расширения для Chrome, вкладка Components, которая позволяет увидеть 
что происходит в конкретном месте (Состояние, пропсы) и ReduxDevtools (там можно посмотреть работу кода, 
как что диспатчится, какие срабатывается экшены и как меняется стейт).

Q5 Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на
Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия?
Сталкивались ли вы с подобными проблемами на практике? 

 В данных браузерах есть панель разработчика, где можно посмотреть расположение элементов, возможно 
 они отображаются некорректно из-за отсутвущих префиксов для обеспечения кроссбраузерности.

Q6 Дизайнер отдал вам макет, в котором не показано, как должны выглядеть
интерактивные элементы при наведении мыши. Ваши действия?

Обращусь к дизайнеру с вопросом, если он сможет добавить эту опцию все хорошо. 
Если дизайнер недоступен, сделаю в стилистике фокус и эктив (если они указаны).
Если же совсем ничего нет, добавлю состояния на свой вкус, опираясь на стилистику сайта 
(впоследствии можно быстро поменять). 

Q7 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите
несколько конкретных примеров (сайты, блоги и так далее).
Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или что-то ещё?
Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам
интересны? 

Начнем с ресурсов. Мне нравится смотреть различные туториалы на ютуб. Так если посмотреть несколько
вариантов решения одной проблемы, каждый раз узнаю что-то новое и потом эта информация по кусочку от 
каждого урока дает возможность анализировать и составлять свою картину, писать чистый код.
Я обучаюсь на курсах в Skillbox, также периодически обращаюсь к Coursera, там есть отличные
курсы не только по Frontend, но и для общего развития в IT сфере. Стараюсь включаться 
в Pet-проекты знакомых разработчиков для опыта.

Направление развития определнно Js и React, лучше последнее. Мне нравится этот интсрумент так как он 
позволяет совместить логику и красоту. В дальнейшем хочу выучить и другие фрэймворки Vue, Angular.

Про несвязные области знаний. Я увлекаюсь психологией, это позволяет поддерживать внтренний баланс, 
не загонятся без повода, понимать что тебе действительно нужно, выстраивать хорошие и долгие отношения 
с людьми (на прошлом месте, в другой сфере, я работала 6 лет, и отпускать не хотели)

Q8 Расскажите нам о себе и предоставьте несколько ссылок на последние работы,
выполненные вами. 
Евгения, 26 лет, в 2021 году получила степень магистра по логистике в НИУ ВШЭ, пока училась, 
работала по профессии. Затем поняла что это не совсем мое, и начала искать свое дело, 
потратила на это почти год и вот он наконец нашлось, Front-end. Мне действительно нравится разработка, 
нравится решать пролемы (это чуство удовлетворения, когда долго над чем-то билась и наконец получилось).
Нравится что это сфера даст мне намного больше возможностей развития, чем логистика, так что я тут надолго.

Ссылка на мои работы Github https://github.com/eepodoprigora?tab=repositories