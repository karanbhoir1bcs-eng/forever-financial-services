/**
 * Submits a lead to the backend API.
 * @param {Object} data The form data (fullName, mobileNumber, loanType, city)
 * @returns {Promise<Object>} The JSON response from the API
 */
export async function submitLead(data) {
  try {
    const formData = {
      access_key: 'ee3d4a29-5c29-48e9-9ef4-98a73a488c2c',
      subject: 'New Lead from Forever Financial Services',
      from_name: 'ForeverFS Website',
      ...data
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong. Please try again.');
    }

    return result;
  } catch (error) {
    throw error;
  }
}
