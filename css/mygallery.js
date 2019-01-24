// ORIZO TIS METAVLITES MOU

var images =    ["images/image_1.jpg",
                "images/image_2.jpg",
                "images/image_3.jpg",
                "images/image_4.jpg",
                "images/image_5.jpg",
                "images/image_6.jpg",
                "images/image_7.jpg",
                "images/image_8.jpg",
                "images/image_9.jpg"
                ];

var counter = 0; // GIA NA AUKSANONTE OI EIKONES
var HandleTimeouut; // TO SET-TIMEOUT ISOUTE ME AYTO TO VAR
var speedTimeout = 4000; // I TAXITITA EPI 2 GIA TO SET-TIMEOUT
var Double_SpeedTimout = 2000; // I NORMAL TAXITITA TOU SET-TIMEOUT
var timeout_speed; // XRISIMOPOIO AUTI TIN METAVLITI OSTE NA TIN PERASO STIN FUNCTION POU THA PERIEXEI TO SET-TIMEOUT
                    // OTAN TIN KALESO STO SLIDE-SHOW OSTE NA TIN THETO EITE ISI ME TO var speedTimeout EITE ME TO var Double_SpeedTimout



        // OTAN FORTOSEI TO PERIEXOMENO TIS SELIDAS NA TREKSEI
         document.addEventListener("DOMContentLoaded",PageLoaded);
             function PageLoaded() {

            // NA TREKSEI TO SLIDESHOW APO TIN PROTI PHOTO
            slideShow(0);

            // OLA TA EVENT MOU 
            document.querySelector(".left_arrow").addEventListener("click",leftArrorFN,false);
            document.querySelector(".right_arrow").addEventListener("click",rightArrorFN,false);
            document.getElementById("speedbtn").addEventListener("click",Button_Double_Speed,false);
            document.getElementById("speedbtn_normal").addEventListener("click",Button_Normal_Speed,false);

            // THETO TO TIMEOUT SE TAXITITA 4 DEUTEROLEPTA OSTE META NA MPORO NA TO ALLAKSO 
            timeout_speed = speedTimeout;
            }

            // FUNCTION GIA TO SLIDE_SHOW
            function slideShow() {
                
                document.getElementById("image_canvas").getElementsByTagName("img")[0].src = images[counter];
                counter++;

                if (counter >= images.length) {
                    counter =  0;  
                 }
                  else  if (counter <= 0 ) {
                        counter = images.length-1;
                    }

                next_image(counter+1,timeout_speed);

                }

                /* MESA STIN FUNCTION NEXT_IMAGE XRISIMOPOIO TO TIMEOUT */
                function next_image(index, speed) {
                     clearTimeout(HandleTimeouut);

                        HandleTimeouut = setTimeout(function() {
                            slideShow(index);
                        },speed);
                    }


            // FUNCTION GIA TO ARISTERO VELOS-STO CLICK KOVETE TO TIMEOUT KAI OI EIKONES TREXOYN MONO SE KATHE CLICK
            /* TRXEI KAI KOMATI TIS FUNCTION Button_Normal_Speed OSTE NA PATIETE TO KOYMPI GIA NA ARXISEI TO SLIDE-SHOW KSANA SE 
                NORMAL TAXITITA */
            function leftArrorFN() {

                slideShow(counter-1) // TREXOOUN OI EIKONES  MIA SE KATHE CLICK

                clearTimeout(HandleTimeouut); //CLEAR OSTE NA DIAKOPSEI STO CLICK TO AUTOMATO SLIDE
                HandleTimeouut = null; // GIA NA KOPSEI STA SIGOURA TO SET-INTERVAL
                
                   document.getElementById("speedbtn_normal").removeAttribute("disabled",true) ;
                   document.getElementById("speedbtn_normal").innerHTML = "Normal Speed";
                   document.getElementById("speedbtn_normal").style.opacity = 1;   
                   document.getElementById("speedbtn_normal").style.cursor = "pointer";

                   document.getElementById("speedbtn").setAttribute("disabled",true) ;
                   document.getElementById("speedbtn").innerHTML = "X";
                   document.getElementById("speedbtn").style.opacity = 0.5;
    
            }

            
            // FUNCTION GIA TO DEKSI VELOS-STO CLICK KOVETE TO TIMEOUT KAI OI EIKONES TREXOYN MONO SE KATHE CLICK
             /* TRXEI KAI KOMATI TIS FUNCTION Button_Normal_Speed OSTE NA PATIETE TO KOYMPI GIA NA ARXISEI TO SLIDE-SHOW KSANA SE 
                NORMAL TAXITITA */
            function rightArrorFN() {

                slideShow(counter+1) // TREXOOUN OI EIKONES  MIA SE KATHE CLICK

                clearTimeout(HandleTimeouut); // CLEAR OSTE NA DIAKOPSEI STO CLICK TO AUTOMATO SLIDE
                HandleTimeouut = null; // GIA NA KOPSEI STA SIGOURA TO SET-INTERVAL

                document.getElementById("speedbtn_normal").removeAttribute("disabled",true) ;
                document.getElementById("speedbtn_normal").innerHTML = "Normal Speed";
                document.getElementById("speedbtn_normal").style.opacity = 1;  
                document.getElementById("speedbtn_normal").style.cursor = "pointer";

                document.getElementById("speedbtn").setAttribute("disabled",true) ;
                document.getElementById("speedbtn").innerHTML = "X";
                document.getElementById("speedbtn").style.opacity = 0.5;
                   
            }

 
        /* FUNCTION POY TREXEI SE DIPLO XRONO TO TIMEOUT BGAZEI DISABLE TO DOUBLE SPEED STO KLICK GIA NA MIN 
         PATIETE TO CLICK KSANA KAI TREXEI EPI 2 KATHE FORA */
    
         function Button_Double_Speed() {

            timeout_speed = Double_SpeedTimout; // THETO TIN TAXITITA TOU TIMEOUT EPI 2
             slideShow(counter+1) // TREXEI TO SLIDE SHOW AUTOMATA
           
            document.getElementById("speedbtn").setAttribute("disabled",true) ;
            document.getElementById("speedbtn").innerHTML = "X";
            document.getElementById("speedbtn").style.opacity = 0.5;
            document.getElementById("speedbtn").style.cursor = "not-allowed";

            document.getElementById("speedbtn_normal").removeAttribute("disabled",true) ;
            document.getElementById("speedbtn_normal").innerHTML = "Normal Speed";
            document.getElementById("speedbtn_normal").style.opacity = 1;
            document.getElementById("speedbtn_normal").style.cursor = "pointer";

        }

        
     /* FUNCTION POY TREXEI SE NORMAL XRONO TO TIMEOUT BGAZEI DISABLE TO NORMAL SPEED STO KLICK GIA NA MIN 
     PATIETE TO CLICK KSANA KAI TREXEI EPI 2 KATHE FORA */

         function Button_Normal_Speed() {

            timeout_speed = speedTimeout; // THETO TIN TAXIXITA PALI STIN ARXIKI TIMI STA 4 DEUTEROLEPTA
            slideShow(counter+1) // TREXEI TO SLIDE SHOW AUTOMATA

             document.getElementById("speedbtn_normal").setAttribute("disabled",true) ;
             document.getElementById("speedbtn_normal").innerHTML = "X";
             document.getElementById("speedbtn_normal").style.opacity = 0.5;
             document.getElementById("speedbtn_normal").style.cursor = "not-allowed";

             document.getElementById("speedbtn").removeAttribute("disabled",true) ;
             document.getElementById("speedbtn").innerHTML = "Double speed";
             document.getElementById("speedbtn").style.opacity = 1;
             document.getElementById("speedbtn").style.cursor = "pointer";

         }


         
