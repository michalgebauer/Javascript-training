window.addEventListener("load", function() {    
    
    var kamienky = document.querySelectorAll("div:not(.riadok)");

        var cisla = [1, 2, 3, 4, 5, 6, 7, 8];

        for(var i=0; i < kamienky.length; i++) {

            kamienky[i].setAttribute("data-index", i);

            kamienky[i].onclick = function() {
                var biely = document.getElementsByClassName("biely")[0];

                var kliknuteXy = xy(this.getAttribute("data-index"));
                var bielyXy = xy(biely.getAttribute("data-index"));

                if((kliknuteXy.x == bielyXy.x && Math.abs(kliknuteXy.y - bielyXy.y) == 1)
                    || (kliknuteXy.y == bielyXy.y && Math.abs(kliknuteXy.x - bielyXy.x) == 1)) {

                        biely.innerHTML = this.innerHTML;
                        this.innerHTML = "";
                        this.className = "biely";
                        biely.className = "";
                    }

                
                var vyhral = true;
                for(var a = 0; a < (kamienky.length - 1); a++) {
                    if(kamienky[a].getAttribute("data-index") != kamienky[a].innerHTML - 1) {
                        vyhral = false;
                        break;
                    }
                }
                if(vyhral) {
                    alert('hura!');
                }
            }

            if(i != 0) {
                var nahodnyIndex = Math.round(Math.random() * (cisla.length - 1));
                kamienky[i].innerHTML = cisla[nahodnyIndex];
                // kamienky[i].innerHTML = i;
                cisla.splice(nahodnyIndex, 1);
            }
        }

        function xy(i) {
            var x = Math.floor(i / 3); 
            var y = i - 3 * x;

            return {
                x: x,
                y: y
            }
        }
});