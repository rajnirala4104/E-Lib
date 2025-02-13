function encryptPassword(password) {
    // Input validation
    if (!password || typeof password !== 'string') {
        throw new Error('Invalid password input');
    }

    // Convert password to array of character codes and apply initial shift
    const shiftedChars = password.split('').map(char => {
        const code = char.charCodeAt(0);
        return String.fromCharCode(code + 7);
    });

    // Add salt (random characters) at random positions
    const salt = 'xy#$@%^&*';
    let saltedString = '';
    shiftedChars.forEach(char => {
        saltedString += char;
        if (Math.random() > 0.5) {
            const randomSalt = salt[Math.floor(Math.random() * salt.length)];
            saltedString += randomSalt;
        }
    });

    // Reverse chunks of the string
    const chunkSize = 3;
    const chunks = [];
    for (let i = 0; i < saltedString.length; i += chunkSize) {
        const chunk = saltedString.slice(i, i + chunkSize);
        chunks.push(chunk.split('').reverse().join(''));
    }

    // Convert to base64
    const reversedString = chunks.join('');
    const base64String = btoa(reversedString);

    // Additional scrambling
    const finalEncryption = base64String.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code % 2 === 0) {
            return String.fromCharCode(code + 1);
        }
        return String.fromCharCode(code - 1);
    }).join('');

    return finalEncryption;
}

function verifyPassword(inputPassword, storedEncryptedPassword) {
    // Input validation
    if (!inputPassword || !storedEncryptedPassword) {
        throw new Error('Invalid input parameters');
    }

    // Generate multiple encrypted versions of the input password
    // (since salt is random, we need multiple attempts)
    const attempts = 5;
    for (let i = 0; i < attempts; i++) {
        const encryptedAttempt = encryptPassword(inputPassword);
        if (timingSafeEqual(encryptedAttempt, storedEncryptedPassword)) {
            return true;
        }
    }
    return false;
}

module.exports = {encryptPassword, verifyPassword};

