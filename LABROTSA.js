document.addEventListener("DOMContentLoaded", function () {
    function appendValue(value) {
        document.getElementById("display").value += value;
    }

    function clearDisplay() {
        document.getElementById("display").value = "";
    }

    function calculateResult() {
        try {
            document.getElementById("display").value = eval(document.getElementById("display").value);
        } catch (e) {
            alert("Invalid expression");
            clearDisplay();
        }
    }


    document.querySelectorAll(".buttons button").forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;
            if (value === "C") {
                clearDisplay();
            } else if (value === "=") {
                calculateResult();
            } else {
                appendValue(value);
            }
        });
    });
});
