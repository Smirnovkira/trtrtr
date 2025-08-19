function openWindow() {
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
        <title>Планировщик задач</title>
        <style>
            body {
            background-color: #121212; /* Темная тема */
            color: white;
            font-family: Arial, sans-serif;
            transition: background-color 0.3s, color 0.3s;
            }
            .button {
            background-color: #444;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            margin: 5px;
            }
            .button:hover {
            background-color: #555;
            }
            #backToTopBtn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: none;
            }
            #themeSwitch, #scrollDown, #resizeButtons {
            margin-top: 20px;
            }
            #inputField1, #inputField2, #inputField3 {
            display: none;
            }
        </style>
        </head>
        <body>

        <!-- Управление темой и прокруткой -->
        <div id="themeSwitch">
            <button class="button" onclick="toggleTheme()">Сменить на светлую тему</button>
        </div>

        <div id="scrollDown">
            <button class="button" onclick="scrollDown()">Прокрутить вниз на 800px</button>
        </div>
        

        <div id="resizeButtons">
            <button class="button" onclick="promptResize(true)">Изменить размер окна до...</button>
            <button class="button" onclick="promptResize(false)">Изменить размер окна на ...</button>
        </div>

        <!-- Кнопка "наверх" -->
        <button id="backToTopBtn" class="button" onclick="scrollToTop()">Наверх</button>

        <!-- Ваши формы регистрации и входа -->
        <div id="authChoice">
            <h2>Меню</h2>
            <button onclick="showRegister()">Регистрация</button>
            <button onclick="showLogin()">Вход</button>
        </div>

        <div id="registerForm" style="display:none;">
            <h2>Регистрация</h2>
            <div id="registerError"></div>
            <input type="text" id="regName" placeholder="Имя">
            <br><br>
            <input type="number" id="regAge" placeholder="Возраст">
            <br><br>
            <select id="regGender">
                <option value="">Выберите пол</option>
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
            </select>
            <br><br>
            <input type="password" id="regPassword" placeholder="Пароль">
            <br><br>
            <input type="password" id="regConfirmPassword" placeholder="Подтвердите пароль">
            <br><br>
            <button onclick="register()">Зарегистрироваться</button>
            <br><br>
            <button onclick="backToChoice()">Назад</button>
        </div>

        <div id="loginForm" style="display:none;">
            <h2>Вход</h2>
            <div id="loginError"></div>
            <input type="text" id="loginName" placeholder="Имя">
            <br><br>
            <input type="password" id="loginPassword" placeholder="Пароль">
            <br><br>
            <button onclick="login()">Войти</button>
            <br><br>
            <button onclick="backToChoice()">Назад</button>
        </div>

        <div id="tasks" style="display:none;">
            <h3>Ваши задачи:</h3>
            <ul id="taskList"></ul>
        </div>

        <!-- Новая форма для выбора документа -->
        <p>Выбрать нужное:</p>
        <select id="options">
        <option value="pasport">Данные паспорта</option>
        <option value="snils">Данные снилс</option>
        <option value="br">Данные свидетельства о рождении</option>
        </select>

        <div id="inputField1">
        <label for="inputText">Введите снилс:</label>
        <input type="text" id="inputSnils" placeholder="ццц-ццц-ццц цц">
        <button onclick="Snils()">Отправить</button>
        <p id="snilsError" ></p>
        </div>

        <div id="inputField2">
        <label for="inputText">Введите паспорт:</label>
        <input type="text" id="inputPassport" placeholder="цццц цццццц">
        <button onclick="Passport()">Отправить</button>
        <p id="passportError" ></p>
        </div>

        <div id="inputField3">
        <label for="inputText">Введите свидетельство о рождении:</label>
        <input type="text" id="inputBirthCertificate" placeholder="рккцццццц">
        <button onclick="BCertificate()">Отправить</button>
        <p id="birthCertificateError"></p>
        </div>

        <script>
            const select = document.getElementById('options');
            const inputField1 = document.getElementById('inputField1');
            const inputField2 = document.getElementById('inputField2');
            const inputField3 = document.getElementById('inputField3');

            select.addEventListener('change', function() {
            inputField1.style.display = 'none';
            inputField2.style.display = 'none';
            inputField3.style.display = 'none';
            
            if (select.value === "snils") {
                inputField1.style.display = 'block';
            } else if (select.value === "pasport") {
                inputField2.style.display = 'block';
            } else if (select.value === "br") {
                inputField3.style.display = 'block';
            }
            });

            function Snils() {
            const snils = document.getElementById('inputSnils').value;
            const snilsPattern = /^\d{3}-\d{3}-\d{3} \d{2}$/;
            const errorElement = document.getElementById('snilsError');
            if (!snils.match(snilsPattern)) {
                errorElement.textContent = "СНИЛС введён некорректно";
            } else {
                errorElement.textContent = "СНИЛС введён корректно";
            }
            }

            function Passport() {
            const passport = document.getElementById('inputPassport').value;
            const passportPattern = /^\d{4} \d{6}$/;
            const errorElement = document.getElementById('passportError');
            if (!passport.match(passportPattern)) {
                errorElement.textContent = "Номер паспорта введён некорректно";
            } else {
                errorElement.textContent = "Номер паспорта введён корректно";
            }
            }

            function BCertificate() {
            const birthCertificate = document.getElementById('inputBirthCertificate').value;
            const birthCertPattern = /^(I{1,3}|IV|V|VI{1,3}|IX|X)[А-Яа-я]{2}\d{6}$/;
            const errorElement = document.getElementById('birthCertificateError');
            if (!birthCertificate.match(birthCertPattern)) {
                errorElement.textContent = "Номер свидетельства о рождении введён некорректно";
            } else {
                errorElement.textContent = "Номер свидетельства о рождении введён корректно";
            }
            }

            // Функция для смены темы на светлую
            function toggleTheme() {
                let currentColor = document.body.style.backgroundColor;
                if (currentColor === "rgb(18, 18, 18)") { // Темная тема
                    document.body.style.backgroundColor = "white";
                    document.body.style.color = "black";
                } else { // Светлая тема
                    document.body.style.backgroundColor = "#121212";
                    document.body.style.color = "white";
                }
            }

            // Функция прокрутки страницы вниз на 800px
            function scrollDown() {
                window.scrollBy(0, 800);
                document.getElementById('backToTopBtn').style.display = "block"; // Показываем кнопку "наверх"
            }

            // Функция прокрутки страницы наверх
            function scrollToTop() {
                window.scrollTo(0, 0);
                document.getElementById('backToTopBtn').style.display = "none"; // Скрываем кнопку "наверх"
            }

            // Функция для изменения размера окна
            function promptResize(isToSet) {
                let width, height;
                if (isToSet) {
                    // Запрашиваем новый размер окна
                    width = prompt("Введите новый размер окна (ширина):", window.innerWidth);
                    height = prompt("Введите новый размер окна (высота):", window.innerHeight);
                    if (width && height) {
                        window.resizeTo(width, height);
                        alert(\`Размер окна установлен: \${width}x\${height}\`);
                    }
                } else {
                    // Запрашиваем изменение размера окна
                    width = prompt("Введите величину изменения ширины окна:", 0);
                    height = prompt("Введите величину изменения высоты окна:", 0);
                    if (width && height) {
                        window.resizeBy(parseInt(width), parseInt(height));
                        alert(\`Размер окна изменен на: \${width}x\${height}\`);
                    }
                }
            }

            // Стандартные функции из вашего кода для регистрации и входа
            function showRegister() {
                document.getElementById('authChoice').style.display = "none";
                document.getElementById('registerForm').style.display = "block";
            }

            function showLogin() {
                document.getElementById('authChoice').style.display = "none";
                document.getElementById('loginForm').style.display = "block";
            }

            function backToChoice() {
                document.getElementById('registerForm').style.display = "none";
                document.getElementById('loginForm').style.display = "none";
                document.getElementById('authChoice').style.display = "block";
            }

            function register() {
                let name = document.getElementById('regName').value.trim();
                let age = parseInt(document.getElementById('regAge').value.trim());
                let gender = document.getElementById('regGender').value;
                let password = document.getElementById('regPassword').value;
                let confirmPassword = document.getElementById('regConfirmPassword').value;
                let errorDiv = document.getElementById('registerError');

                errorDiv.innerText = "";

                if (!name || isNaN(age) || !gender || !password || !confirmPassword) {
                    errorDiv.innerText = "Пожалуйста, заполните все поля.";
                    return;
                }

                if (password !== confirmPassword) {
                    errorDiv.innerText = "Пароли не совпадают.";
                } else {
                    alert("Регистрация успешна!");
                    backToChoice();
                }
            }

            function login() {
                let name = document.getElementById('loginName').value;
                let password = document.getElementById('loginPassword').value;
                let errorDiv = document.getElementById('loginError');

                errorDiv.innerText = "";

                if (!name || !password) {
                    errorDiv.innerText = "Пожалуйста, заполните все поля.";
                    return;
                }

                alert("Вход успешен!");
                document.getElementById('loginForm').style.display = "none";
                document.getElementById('tasks').style.display = "block";
            }
        </script>

        <!-- Новый контент: Обмен значениями, Поздороваться, Умножение и Проверка -->
        <h2>Обмен значений</h2>
        <form>
            <input type="text" id="f1">
            <label for="f1">Поле 1</label><br><br>
            
            <input type="text" id="f2">
            <label for="f2">Поле 2</label><br><br>

            <button type="button" onclick="setValues()">ввод</button>
            
            <button type="button" onclick="swapValues()">поменять</button>
        </form><br><br>

        <h2>Поздороваться</h2>
        <button type="button" onclick="User()">Приветствие</button>
            
        <h2>Умножение</h2>

        <form name="form1">
            <input id="num1">
            <label for="num1">Значение 1</label><br><br>
            
            <input id="num2">
            <label for="num2">Значение 2</label><br><br>

            <input id="result" readonly><br><br>
            <label for="result">Результат</label>

            <button type="button" onclick="mul()">умножить</button>
        </form><br><br>

        <h2>Проверка</h2>
        <form>
            <input type="text" id="textfield">
            <label for="textfield">Поле 1</label><br><br>

            <button type="button" onclick="isin()">ввод</button>
        </form>

        <script>
            function setValues() {
                let value1 = prompt("Введите значение для Поля 1", "");
                let value2 = prompt("Введите значение для Поля 2", "");
                document.getElementById("f1").value = value1;
                document.getElementById("f2").value = value2;
            }

            function swapValues() {
                let a = document.getElementById("f1").value;
                let b = document.getElementById("f2").value;
                document.getElementById("f1").value = b;
                document.getElementById("f2").value = a;
            }
            
            function User() {
                let firstName = prompt("Введите ваше имя", "");
                let lastName = prompt("Введите вашу фамилию", "");
                alert("Здравствуйте, " + firstName + " " + lastName + "!");
            }

            function mul() {
                let num1 = document.getElementById("num1").value;
                let num2 = document.getElementById("num2").value;
                let result = document.getElementById("result");
                result.value = num1 * num2;
            }
            
            function isin() {
                let num1 = document.getElementById("textfield").value;
                if (!isNaN(num1)) {
                    alert("Введено число!");
                }
                else
                    alert("Введён текст!");
            }
        </script>

        </body>
        </html>
      `;

      const newWindow = window.open('', 'testWindow', 'width=800,height=600,resizable=yes');

      if (newWindow) {
        newWindow.document.open();
        newWindow.document.write(htmlContent);
        newWindow.document.close();
      } else {
        alert('Не удалось открыть новое окно. Разрешите всплывающие окна в браузере.');
      }
    }