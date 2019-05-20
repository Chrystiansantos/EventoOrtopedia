    function mostrarHora() {
        function dateCalc() {

            const date = new Date();
            const dia = date.getDate();
            const hora = date.getHours();
            const min = date.getMinutes();
            const seg = date.getSeconds();

            var $dia = document.querySelector("#dia");
            var $hora = document.querySelector("#hora");
            var $min = document.querySelector("#minuto");
            var $seg = document.querySelector("#segundo");

            var dia_E = 23;

            $dia.textContent = dia_E - dia;
            $hora.textContent = 24 - hora;
            $min.textContent = 60 - min;
            $seg.innerHTML = 60 - seg;
        }
        setInterval(() => {
            dateCalc();
        }, 1000);
    }