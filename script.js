document.addEventListener("DOMContentLoaded", () => {

/* =========================================
   SMOOTH NAVIGATION
   ========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   SERVICE BOOKING → WHATSAPP
   ========================================= */

const serviceForm = document.getElementById("serviceForm");

if (serviceForm) {

    serviceForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("customerName").value.trim();

        const phone =
            document.getElementById("customerPhone").value.trim();

        const appliance =
            document.getElementById("appliance").value;

        const serviceType =
            document.getElementById("serviceType").value;

        const problem =
            document.getElementById("problem").value.trim();

        const address =
            document.getElementById("address").value.trim();

        const date =
            document.getElementById("preferredDate").value;


        if (
            !name ||
            !phone ||
            !appliance ||
            !serviceType ||
            !problem ||
            !address ||
            !date
        ) {

            alert("Please fill in all required fields.");

            return;
        }


        if (!/^[0-9]{10}$/.test(phone)) {

            alert("Please enter a valid 10-digit mobile number.");

            return;
        }


        const formattedDate =
            new Date(date + "T00:00:00")
            .toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "long",
                year: "numeric"
            });


        const message =

`🔧 NEW SERVICE REQUEST

👤 Customer Name: ${name}

📱 Customer Mobile: ${phone}

🔧 Appliance: ${appliance}

🛠️ Service Type: ${serviceType}

⚠️ Problem:
${problem}

📍 Service Address:
${address}

📅 Preferred Date: ${formattedDate}

━━━━━━━━━━━━━━━━
VOLTS CARE SERVICE CENTRE`;

        const whatsappNumber = "919933869133";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);


        window.open(whatsappURL, "_blank");

    });

}


/* =========================================
   PAGE LOAD
   ========================================= */

document.body.classList.add("page-loaded");

});
