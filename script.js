document.getElementById("searchInput").addEventListener("input", function () {
  const transcript = document.getElementById("transcript");
  const searchTerm = this.value;

  // Clear previous highlights
  const originalText = transcript.textContent;
  transcript.innerHTML = originalText; // Reset to original text

  if (searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, "gi");

    // Replace matching terms with highlighted spans
    transcript.innerHTML = originalText.replace(
      regex,
      '<span class="highlight">$1</span>'
    );

    // Add click event for highlighted terms
    const highlights = transcript.getElementsByClassName("highlight");
    for (let i = 0; i < highlights.length; i++) {
      highlights[i].addEventListener("click", function () {
        alert(`You clicked on: ${this.textContent}`);
      });
    }
  }
});
