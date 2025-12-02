import { use } from 'react';

// Функція, яка повертає Promise із затримкою (симулює асинхронний запит)
function fetchMessage(delay = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                text: 'Привіт! Це повідомлення отримано через use() hook',
                timestamp: new Date().toLocaleString('uk-UA')
            });
        }, delay);
    });
}

// Компонент, який використовує хук use() для отримання даних
function MessageComponent({ messagePromise }) {
    // Використовуємо хук use() для отримання даних з Promise
    const message = use(messagePromise);

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Повідомлення з сервера</h2>
            <div style={styles.messageBox}>
                <p style={styles.text}>{message.text}</p>
                <p style={styles.timestamp}>Отримано: {message.timestamp}</p>
            </div>
        </div>
    );
}

// Стилі для компонента
const styles = {
    container: {
        padding: '20px',
        maxWidth: '600px',
        margin: '20px auto',
    },
    title: {
        color: '#333',
        fontSize: '24px',
        marginBottom: '15px',
    },
    messageBox: {
        backgroundColor: '#f0f8ff',
        border: '2px solid #4a90e2',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    text: {
        fontSize: '18px',
        color: '#333',
        marginBottom: '10px',
    },
    timestamp: {
        fontSize: '14px',
        color: '#666',
        fontStyle: 'italic',
    },
};

export { MessageComponent, fetchMessage };
