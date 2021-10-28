window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("resume");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 0,
                filename: 'myfile.pdf',
                image: { type: 'jpg', quality: 0.98},
                html2canvas: { scale: 1},
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}