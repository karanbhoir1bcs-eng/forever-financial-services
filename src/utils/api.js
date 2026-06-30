/**
 * Submits a lead to the backend API.
 * @param {Object} data The form data (fullName, mobileNumber, loanType, city)
 * @returns {Promise<Object>} The JSON response from the API
 */
export async function submitLead(data) {
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Something went wrong. Please try again.');
    }

    return result;
  } catch (error) {
    throw error;
  }
}
