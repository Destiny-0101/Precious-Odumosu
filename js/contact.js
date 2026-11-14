
document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contact-form");
    const formNote = document.getElementById("form-note");

    if (!contactForm) return;

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            formNote.textContent = "Please complete all fields.";
            return;
        }

        // Replace this with Precious's real email address.
        const recipient = "YOUR_EMAIL@example.com";

        const emailSubject = encodeURIComponent(subject);
        const emailBody = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );

        const mailtoLink =
            `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

        formNote.textContent =
            "Opening your email application. Please send the prepared message.";

        window.location.href = mailtoLink;
    });

});
