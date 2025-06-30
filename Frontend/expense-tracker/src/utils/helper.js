/**
 * Validates email format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email is valid
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Validates password strength
 * @param {string} password - Password to validate
 * @returns {object} { isValid: boolean, message: string }
 */
export const validatePassword = (password) => {
  if (password.length < 8) {
    return { isValid: false, message: 'Password must be at least 8 characters' };
  }
  // Add more complex validation if needed
  return { isValid: true, message: '' };
};

/**
 * Formats string to title case
 * @param {string} str - String to format
 * @returns {string} Title cased string
 */
export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

/**
 * Validates image file
 * @param {File} file - Image file to validate
 * @returns {object} { isValid: boolean, message: string }
 */
export const validateImage = (file) => {
  if (!file) return { isValid: false, message: 'No file selected' };

  const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (!validTypes.includes(file.type)) {
    return { isValid: false, message: 'Only JPEG, PNG or GIF allowed' };
  }

  const maxSize = 2 * 1024 * 1024; // 2MB
  if (file.size > maxSize) {
    return { isValid: false, message: 'Image must be less than 2MB' };
  }

  return { isValid: true, message: '' };
};

/**
 * Formats date to readable string
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

/**
 * Truncates text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Max length before truncation
 * @returns {string} Truncated text
 */
export const truncateText = (text, length = 50) => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

/**
 * Generates initials from name
 * @param {string} name - Full name
 * @returns {string} Initials (e.g., "JD" for "John Doe")
 */
export const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

export default {
  validateEmail,
  validatePassword,
  toTitleCase,
  validateImage,
  formatDate,
  truncateText,
  getInitials
};