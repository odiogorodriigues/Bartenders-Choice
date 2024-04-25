function showValue(container) {
    const value = container.getAttribute("data-value");
    window.location.href = `../bartender/bartender.html?bartender=${value}`
}