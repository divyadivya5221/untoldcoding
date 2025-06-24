async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const result = document.getElementById("result");

  if (!amount || isNaN(amount)) {
    result.textContent = "Please enter a valid amount.";
    return;
  }

  const apiURL = `https://api.exchangerate-api.com/v4/latest/${from}`;

  try {
    const res = await fetch(apiURL);
    const data = await res.json();

    const rate = data.rates[to];
    if (!rate) {
      result.textContent = "Currency not supported.";
      return;
    }

    const converted = (amount * rate).toFixed(2);
    result.textContent = `${amount} ${from} = ${converted} ${to}`;
  } catch (error) {
    result.textContent = "Error fetching exchange rates.";
    console.error("Fetch error:", error);
  }
}