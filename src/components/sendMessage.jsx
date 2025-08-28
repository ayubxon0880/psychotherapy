export const sendMessage = async (fio,setFio,phone,setPhone,about,setAbout,setLoading) => {
    if (!fio || !phone || !about) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    setLoading(true);

    const token = "8310014893:AAFtHU_l7wdQ893C0vhS3PxtgnC1gtC5-LU"; // Bot token
    const chatId = "-1003020649294";  // Chat ID

    const message = `
📩 Yangi ariza\n\n
👤 Ф.И.О: ${fio}
📞 Телефон: ${phone}
ℹ️ О себе: ${about}
`;

    try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });
        alert("Успешно отправлено! ✅");
        setFio("");
        setPhone("");
        setAbout("");
    } catch (err) {
        alert("Ошибка при отправке сообщения ❌");
    } finally {
        setLoading(false);
    }
};